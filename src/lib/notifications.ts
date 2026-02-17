import { BOOKING_CONFIG } from './booking-config';
import type { BookingFormData } from '@/types';

interface NotificationResult {
  channel: 'webhook' | 'email';
  success: boolean;
  error?: string;
}

export async function sendWebhookNotification(
  booking: BookingFormData
): Promise<NotificationResult> {
  const { url, timeout } = BOOKING_CONFIG.webhook;
  if (!url) {
    return { channel: 'webhook', success: false, error: 'No webhook URL configured' };
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'new_booking',
        booking: {
          name: booking.name,
          phone: booking.phone,
          service: booking.service || 'Chưa chọn',
          date: booking.date || 'Chưa chọn',
          timeSlot: booking.timeSlot || 'Chưa chọn',
          note: booking.note || '',
          createdAt: new Date().toISOString(),
        },
        clinic: BOOKING_CONFIG.clinic,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return { channel: 'webhook', success: false, error: `HTTP ${res.status}` };
    }

    return { channel: 'webhook', success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { channel: 'webhook', success: false, error: message };
  }
}

export async function sendEmailNotification(
  booking: BookingFormData
): Promise<NotificationResult> {
  const { resendApiKey, from, recipients } = BOOKING_CONFIG.email;

  if (!resendApiKey || recipients.length === 0) {
    return { channel: 'email', success: false, error: 'Email not configured' };
  }

  const subject = `[Đặt lịch mới] ${booking.name} - ${booking.phone}`;
  const html = buildEmailHtml(booking);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from,
        to: recipients,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      return { channel: 'email', success: false, error: `Resend ${res.status}: ${body}` };
    }

    return { channel: 'email', success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { channel: 'email', success: false, error: message };
  }
}

export async function sendAllNotifications(booking: BookingFormData) {
  const results = await Promise.allSettled([
    sendWebhookNotification(booking),
    sendEmailNotification(booking),
  ]);

  return results.map((r) =>
    r.status === 'fulfilled'
      ? r.value
      : { channel: 'unknown' as const, success: false, error: String(r.reason) }
  );
}

function buildEmailHtml(booking: BookingFormData): string {
  const { clinic } = BOOKING_CONFIG;

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #fff;">
      <div style="background: #0D7351; padding: 24px; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 20px;">${clinic.name}</h1>
        <p style="color: #d4edda; margin: 4px 0 0; font-size: 13px;">Thông Báo Đặt Lịch Mới</p>
      </div>

      <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 8px; color: #6b7280; width: 120px;">Họ tên</td>
            <td style="padding: 10px 8px; font-weight: 600;">${booking.name}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px 8px; color: #6b7280;">Điện thoại</td>
            <td style="padding: 10px 8px; font-weight: 600;">
              <a href="tel:${booking.phone}" style="color: #0D7351; text-decoration: none;">${booking.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 8px; color: #6b7280;">Dịch vụ</td>
            <td style="padding: 10px 8px;">${booking.service || 'Chưa chọn'}</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 10px 8px; color: #6b7280;">Ngày hẹn</td>
            <td style="padding: 10px 8px;">${booking.date || 'Chưa chọn'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 8px; color: #6b7280;">Khung giờ</td>
            <td style="padding: 10px 8px;">${booking.timeSlot || 'Chưa chọn'}</td>
          </tr>
          ${booking.note ? `
          <tr style="background: #f9fafb;">
            <td style="padding: 10px 8px; color: #6b7280;">Ghi chú</td>
            <td style="padding: 10px 8px;">${booking.note}</td>
          </tr>` : ''}
        </table>

        <div style="margin-top: 20px; text-align: center;">
          <a href="https://zalo.me/${booking.phone}" target="_blank"
            style="display: inline-block; background: #0068FF; color: #fff; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
            Nhắn Zalo cho khách
          </a>
        </div>
      </div>

      <div style="padding: 16px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb;">
        ${clinic.name} &mdash; ${clinic.address}
      </div>
    </div>
  `;
}
