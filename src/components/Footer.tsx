import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nude-800 text-nude-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-gold-400">QUANG ĐĂNG</h3>
            <p className="text-nude-200 mb-6 leading-relaxed text-sm">
              Hệ thống thẩm mỹ viện chuẩn quốc tế hàng đầu tại Nghệ An. Chúng tôi cam kết mang lại vẻ đẹp an toàn, tự nhiên và bền vững cho phụ nữ Việt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-gold-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Dịch Vụ Nổi Bật</h4>
            <ul className="space-y-3 text-sm text-nude-200">
              <li><Link href="/dich-vu/cham-soc-da-chuyen-sau" className="hover:text-gold-400 transition-colors">Chăm sóc da chuyên sâu</Link></li>
              <li><Link href="/dich-vu/tri-mun-nam" className="hover:text-gold-400 transition-colors">Điều trị Mụn - Nám - Tàn nhang</Link></li>
              <li><Link href="/dich-vu/tre-hoa" className="hover:text-gold-400 transition-colors">Trẻ hóa da công nghệ cao</Link></li>
              <li><Link href="/dich-vu/triet-long" className="hover:text-gold-400 transition-colors">Triệt lông vĩnh viễn</Link></li>
              <li><Link href="/dich-vu/tam-trang" className="hover:text-gold-400 transition-colors">Tắm trắng phi thuyền</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-nude-200">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-gold-500" size={20} />
                <span>Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-gold-500" size={20} />
                <a href="tel:0988834446" className="hover:text-white">0988.834.446</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-gold-500" size={20} />
                <span>cskh@quangdang.vn</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold-200">Giờ Làm Việc</h4>
            <ul className="space-y-2 text-sm text-nude-200">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Thứ 2 - Thứ 6</span>
                <span>08:30 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Thứ 7 - Chủ Nhật</span>
                <span>08:00 - 21:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/50 italic">*Đặt lịch trước để được phục vụ tốt nhất</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-nude-300">
          <p>© {new Date().getFullYear()} Thẩm Mỹ Viện Quốc Tế Quang Đăng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
