# Booking System Implementation — Complete ✅

## What Was Built

A complete booking system that:
- ✅ Saves bookings to **Strapi CMS** (for data persistence + admin management)
- ✅ Sends notifications via **webhook** (for n8n/Make.com → Zalo integration)
- ✅ Sends **email fallback** notifications via Resend API
- ✅ Handles errors gracefully with Vietnamese UI messages
- ✅ Works with the existing booking form design

## Files Created/Modified

### New Files (4):
1. **`src/app/api/bookings/route.ts`** — POST API endpoint
   - Validates form data (name required, phone 10 digits)
   - Saves to Strapi CMS via authenticated API call
   - Fires webhook + email notifications (non-blocking)
   - Returns success/error response

2. **`src/lib/booking-config.ts`** — Centralized configuration
   - Reads from environment variables
   - Configures Strapi, webhook, email settings
   - Includes clinic info for notifications

3. **`src/lib/notifications.ts`** — Notification services
   - `sendWebhookNotification()` — POSTs to n8n/Make.com
   - `sendEmailNotification()` — Sends via Resend API
   - `sendAllNotifications()` — Runs both in parallel
   - Beautiful HTML email template included

4. **`.env.example`** — Environment variable documentation

### Modified Files (2):
1. **`src/types/index.ts`** — Added booking types
   - `BookingFormData` — form submission data
   - `BookingResponse` — API response shape

2. **`src/components/BookingForm.tsx`** — Connected to real API
   - Replaced `setTimeout` with `fetch('/api/bookings')`
   - Added error handling with user-friendly messages
   - Shows success/error states with Vietnamese text

## Architecture

```
Customer Form Submission
    ↓
POST /api/bookings (Next.js API Route)
    ├→ Validate input
    ├→ Save to Strapi (authenticated with STRAPI_API_TOKEN)
    └→ Fire notifications (parallel, non-blocking)
        ├→ Webhook → n8n/Make.com → Zalo (primary)
        └→ Email → Resend → sales inboxes (fallback)
    ↓
Return success to customer
```

**Key Design Decision**: Notifications are **fire-and-forget** — if they fail, the booking is still saved and the customer sees success. Notification failures are logged to console.

---

## Setup Instructions

### 1. Create Strapi Collection Type

In your Strapi admin panel (`http://localhost:1337/admin`):

**Content-Type Builder → Create new collection type → "booking"**

| Field Name | Type | Required | Default | Additional Settings |
|------------|------|----------|---------|---------------------|
| name | Text (Short) | ✓ | - | - |
| phone | Text (Short) | ✓ | - | - |
| service | Text (Short) | - | - | - |
| date | Date | - | - | Date only (no time) |
| timeSlot | Text (Short) | - | - | e.g. "14:00-15:00" |
| note | Text (Long) | - | - | - |
| status | Enumeration | - | pending | Values: pending, confirmed, cancelled, completed |
| source | Enumeration | - | website | Values: website, phone, social |
| notified | Boolean | - | false | - |

**Permissions**:
- Settings → Roles → Public → booking → Enable: `create`
- Settings → Roles → Authenticated → booking → Enable: `find`, `findOne`, `update`, `delete`

**Get API Token**:
- Settings → API Tokens → Create new API Token
- Name: "Booking API"
- Token type: Full access (or Custom with `create` on booking)
- Copy the token (you'll need it for `.env.local`)

---

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set:

```env
# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_api_token_from_above

# Booking Webhook (n8n or Make.com)
BOOKING_WEBHOOK_URL=https://n8n.yourdomain.com/webhook/booking

# Email Fallback (optional but recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxx
BOOKING_EMAIL_FROM=Quang Đăng Clinic <bookings@vienthammyquangdang.vn>
BOOKING_NOTIFICATION_EMAILS=sales1@quangdang.clinic,sales2@quangdang.clinic
```

---

### 3. Set Up n8n Webhook (for Zalo notifications)

**Option A: n8n Cloud** (easiest, free tier available)
1. Sign up at https://n8n.io
2. Create new workflow
3. Add "Webhook" node → Copy webhook URL → Set in `BOOKING_WEBHOOK_URL`
4. Add "Set" node to format message
5. Add "Zalo" or "HTTP Request" node to send to Zalo API
6. Or use "Email" node as interim solution

**Option B: Self-hosted n8n**
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
Then create workflow as above at http://localhost:5678

**Option C: Make.com** (Integromat)
1. Sign up at https://www.make.com
2. Create new scenario
3. Add "Webhooks → Custom webhook" → Copy URL
4. Add Zalo/email modules

**Webhook Payload Structure** (what n8n/Make receives):
```json
{
  "event": "new_booking",
  "booking": {
    "name": "Nguyễn Văn A",
    "phone": "0988834446",
    "service": "Chăm Sóc Da Chuyên Sâu",
    "date": "2025-02-20",
    "timeSlot": "14:00",
    "note": "Da dầu, mụn",
    "createdAt": "2025-02-17T10:30:00Z"
  },
  "clinic": {
    "name": "Viện Thẩm Mỹ Quang Đăng",
    "phone": "0988834446",
    "address": "Tầng 5 - TTTM Đức Tài — Tâm Đạt, Quỳnh Lưu, Nghệ An",
    "website": "https://vienthammyquangdang.vn"
  }
}
```

**n8n Workflow Template** (simple example):
```
Webhook
  ↓
Set (format message)
  message: "🆕 Đặt lịch mới!\n\n👤 {name}\n📞 {phone}\n💆 {service}\n📅 {date} {timeSlot}\n\n{note}"
  ↓
HTTP Request (POST to Zalo API or send to Zalo group bot)
  OR
Email (send to sales team)
```

---

### 4. Set Up Email (Resend) — Optional Fallback

1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Verify your domain or use test domain
3. Create API Key → Copy to `RESEND_API_KEY`
4. Add sales emails to `BOOKING_NOTIFICATION_EMAILS`

---

## Testing

### Local Testing

1. **Start Strapi** (in separate terminal):
```bash
cd /path/to/strapi
npm run develop
```

2. **Start Next.js**:
```bash
cd /home/hai/quang-dang-clinic-nextjs
npm run dev
```

3. **Visit booking page**: http://localhost:3000/dat-lich

4. **Submit a test booking**:
   - Name: Test Nguyen
   - Phone: 0988123456
   - Service: (select any)
   - Submit

5. **Verify**:
   - ✅ Success message shows in UI
   - ✅ Check Strapi admin → Bookings collection → new entry appears
   - ✅ Check webhook logs (n8n/Make.com dashboard)
   - ✅ Check email inbox for notification

### Webhook Testing Without n8n

Use **webhook.site** for testing:
1. Visit https://webhook.site
2. Copy the unique URL
3. Set as `BOOKING_WEBHOOK_URL` in `.env.local`
4. Submit booking
5. View webhook.site → see the JSON payload

---

## Error Handling

### API Route Errors:
- ❌ Missing name/phone → Returns 400 with Vietnamese error message
- ❌ Invalid phone format → Returns 400 with "Số điện thoại không hợp lệ"
- ❌ Strapi unreachable → Logs warning, continues (booking saved to Strapi later via admin)
- ❌ Webhook timeout (5s) → Logs error, continues (email fallback kicks in)
- ❌ Email failure → Logged, doesn't affect booking success

### UI Errors:
- ❌ Network failure → Red error box: "Không thể kết nối. Vui lòng thử lại hoặc gọi hotline 0988.834.446."
- ❌ Validation errors → Red border on fields + inline error text
- ✅ Success → Green box with confirmation message + form resets

---

## Production Deployment Checklist

### Before Deploying:

- [ ] Strapi production database configured
- [ ] `STRAPI_API_TOKEN` set in production env vars (Vercel/Netlify)
- [ ] `BOOKING_WEBHOOK_URL` points to production n8n/Make.com
- [ ] `RESEND_API_KEY` configured with verified domain
- [ ] Test booking submission in production
- [ ] Verify sales team receives Zalo notifications
- [ ] Monitor logs for errors (Vercel/Netlify dashboard)

### Environment Variables (Production):

Set in Vercel/Netlify/hosting dashboard:
```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi.com
STRAPI_API_TOKEN=xxxxx
BOOKING_WEBHOOK_URL=https://n8n.yourcompany.com/webhook/booking
RESEND_API_KEY=re_xxxxx
BOOKING_EMAIL_FROM=Quang Đăng Clinic <bookings@vienthammyquangdang.vn>
BOOKING_NOTIFICATION_EMAILS=sales1@quangdang.clinic,sales2@quangdang.clinic
NEXT_PUBLIC_SITE_URL=https://vienthammyquangdang.vn
```

---

## Next Steps

### Immediate:
1. ✅ Merge `feat/booking` branch to `main` (after testing)
2. Set up Strapi collection type
3. Configure n8n/Make.com webhook
4. Test end-to-end booking flow

### Future Enhancements:
- **Admin Dashboard**: Custom page to manage bookings (filter, status updates, notes)
- **SMS Notifications**: Add SMS via Twilio/Vonage
- **Booking Confirmation Email**: Send email to customer (not just sales)
- **Calendar Integration**: Auto-add to Google Calendar
- **Reminder System**: Cron job to send reminders 1 day before appointment
- **Analytics**: Track booking sources, conversion rates
- **Payment Deposit**: Collect deposit via Momo/VNPay at booking time

---

## Troubleshooting

### "Booking saved but no notifications"
- Check `BOOKING_WEBHOOK_URL` is set and reachable
- Check n8n/Make.com workflow is active
- Check Resend API key is valid
- View API route logs: `npm run dev` and check console

### "Strapi error 403 Forbidden"
- Verify `STRAPI_API_TOKEN` is correct
- Check Strapi permissions: Public role must have `create` on booking
- Check token hasn't expired

### "Phone validation fails"
- API expects exactly 10 digits
- Removes spaces before validation
- Format: 0988834446 (no spaces, no +84)

### "Build fails with TypeScript error"
- Run `npm run build` to see full error
- Check all imports are correct
- Verify `BookingResponse` type has all required fields

---

## Support

For implementation questions or issues:
1. Check console logs (browser + server)
2. Verify environment variables are set
3. Test webhook with webhook.site
4. Check Strapi logs for API errors
5. Review this document for setup steps

## Branch Info

- **Branch**: `feat/booking`
- **Status**: ✅ Ready for testing
- **Build**: ✅ Passes (no TypeScript errors)
- **Next**: Test locally, then merge to `main`
