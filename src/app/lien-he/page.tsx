import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ - Thẩm Mỹ Viện Quốc Tế Quang Đăng',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="font-serif text-4xl text-gold-700 mb-4">Liên Hệ</h1>
      <p className="text-gray-500">Nội dung đang được cập nhật. Vui lòng quay lại sau.</p>
      <Link href="/" className="mt-8 text-gold-600 underline hover:text-gold-700">Về trang chủ</Link>
    </div>
  );
}
