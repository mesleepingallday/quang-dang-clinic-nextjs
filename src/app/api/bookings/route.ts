import { NextRequest, NextResponse } from 'next/server';
import { BOOKING_CONFIG } from '@/lib/booking-config';
import { sendAllNotifications } from '@/lib/notifications';
import type { BookingFormData, BookingResponse } from '@/types';

function validateBooking(data: unknown): { valid: true; booking: BookingFormData } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Dữ liệu không hợp lệ' };
  }

  const { name, phone, service, date, timeSlot, note } = data as Record<string, unknown>;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return { valid: false, error: 'Vui lòng nhập họ tên' };
  }

  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return { valid: false, error: 'Vui lòng nhập số điện thoại' };
  }

  const cleanPhone = phone.replace(/\s/g, '');
  if (!/^\d{10}$/.test(cleanPhone)) {
    return { valid: false, error: 'Số điện thoại không hợp lệ (cần 10 chữ số)' };
  }

  return {
    valid: true,
    booking: {
      name: name.trim(),
      phone: cleanPhone,
      service: typeof service === 'string' ? service.trim() : '',
      date: typeof date === 'string' ? date.trim() : undefined,
      timeSlot: typeof timeSlot === 'string' ? timeSlot.trim() : undefined,
      note: typeof note === 'string' ? note.trim() : undefined,
    },
  };
}

async function saveToStrapi(booking: BookingFormData): Promise<{ id: string } | null> {
  const { url, token } = BOOKING_CONFIG.strapi;

  if (!token) {
    console.warn('[Booking] No STRAPI_API_TOKEN configured, skipping Strapi save');
    return null;
  }

  try {
    const res = await fetch(`${url}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          name: booking.name,
          phone: booking.phone,
          service: booking.service || null,
          date: booking.date || null,
          timeSlot: booking.timeSlot || null,
          note: booking.note || null,
          status: 'pending',
          source: 'website',
          notified: false,
        },
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`[Booking] Strapi error ${res.status}:`, body);
      return null;
    }

    const json = await res.json();
    return { id: json.data?.documentId || json.data?.id || 'unknown' };
  } catch (err) {
    console.error('[Booking] Failed to save to Strapi:', err);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = validateBooking(body);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.error, error: validation.error } satisfies BookingResponse,
        { status: 400 }
      );
    }

    const { booking } = validation;

    // Save to Strapi
    const strapiResult = await saveToStrapi(booking);

    // Send notifications (fire-and-forget — don't block response)
    sendAllNotifications(booking).then((results) => {
      for (const r of results) {
        if (!r.success) {
          console.warn(`[Booking] Notification failed (${r.channel}):`, r.error);
        }
      }

      // Update Strapi notified flag if save succeeded
      if (strapiResult && BOOKING_CONFIG.strapi.token) {
        const anySuccess = results.some((r) => r.success);
        if (anySuccess) {
          fetch(
            `${BOOKING_CONFIG.strapi.url}/api/bookings/${strapiResult.id}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${BOOKING_CONFIG.strapi.token}`,
              },
              body: JSON.stringify({ data: { notified: true } }),
            }
          ).catch((err) => console.error('[Booking] Failed to update notified flag:', err));
        }
      }
    });

    const response: BookingResponse = {
      success: true,
      message: `Cảm ơn ${booking.name}! Chúng tôi đã nhận được yêu cầu đặt lịch. Chuyên viên sẽ liên hệ số ${booking.phone} trong vòng 3 phút để xác nhận.`,
      bookingId: strapiResult?.id,
    };

    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    console.error('[Booking] Unexpected error:', err);
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline 0988.834.446.', error: 'Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline 0988.834.446.' } satisfies BookingResponse,
      { status: 500 }
    );
  }
}
