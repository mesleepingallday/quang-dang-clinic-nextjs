import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dịch Vụ Thẩm Mỹ Công Nghệ Cao',
  description:
    'Khám phá hệ sinh thái dịch vụ làm đẹp toàn diện tại Viện Thẩm Mỹ Quang Đăng, từ chăm sóc da, trẻ hóa đến các liệu trình công nghệ cao chuẩn y khoa.',
  alternates: {
    canonical: '/dich-vu',
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
