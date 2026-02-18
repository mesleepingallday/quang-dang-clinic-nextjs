export const BOOKING_CONFIG = {
  strapi: {
    url: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    token: process.env.STRAPI_API_TOKEN || '',
  },
  webhook: {
    url: process.env.BOOKING_WEBHOOK_URL || '',
    secret: process.env.BOOKING_WEBHOOK_SECRET || '',
    timeout: 5000,
  },
  email: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    from: process.env.BOOKING_EMAIL_FROM || 'Quang Đăng Clinic <bookings@vienthammyquangdang.vn>',
    recipients: (process.env.BOOKING_NOTIFICATION_EMAILS || '')
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean),
  },
  clinic: {
    name: 'Viện Thẩm Mỹ Quang Đăng',
    phone: '0988834446',
    address: 'Tầng 5 - TTTM Đức Tài — Tâm Đạt, Quỳnh Lưu, Nghệ An',
    website: 'https://vienthammyquangdang.vn',
  },
};
