import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ',
  description:
    'Liên hệ Viện Thẩm Mỹ Quang Đăng để được tư vấn liệu trình phù hợp, đặt lịch thăm khám nhanh và nhận hỗ trợ trực tiếp từ đội ngũ chuyên gia.',
  alternates: {
    canonical: '/lien-he',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
