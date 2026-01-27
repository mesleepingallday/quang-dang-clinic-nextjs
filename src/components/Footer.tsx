import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nude-800 text-nude-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <h3 className="font-serif text-3xl font-bold mb-6 text-gold-400 tracking-wide">QUANG ĐĂNG</h3>
            <p className="text-nude-200 mb-8 leading-loose text-sm opacity-90">
              Hệ thống thẩm mỹ viện chuẩn quốc tế hàng đầu tại Nghệ An. Chúng tôi cam kết mang lại vẻ đẹp an toàn, tự nhiên và bền vững cho phụ nữ Việt.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-white text-gold-400 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-white text-gold-400 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-white text-gold-400 transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Youtube size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold-200 uppercase tracking-widest text-xs">Dịch Vụ Nổi Bật</h4>
            <ul className="space-y-4 text-sm text-nude-200/80">
              <li><Link href="/dich-vu/cham-soc-da-chuyen-sau" className="hover:text-gold-400 transition-colors hover:translate-x-1 inline-block duration-300">Chăm sóc da chuyên sâu</Link></li>
              <li><Link href="/dich-vu/tri-mun-nam" className="hover:text-gold-400 transition-colors hover:translate-x-1 inline-block duration-300">Điều trị Mụn - Nám - Tàn nhang</Link></li>
              <li><Link href="/dich-vu/tre-hoa" className="hover:text-gold-400 transition-colors hover:translate-x-1 inline-block duration-300">Trẻ hóa da công nghệ cao</Link></li>
              <li><Link href="/dich-vu/triet-long" className="hover:text-gold-400 transition-colors hover:translate-x-1 inline-block duration-300">Triệt lông vĩnh viễn</Link></li>
              <li><Link href="/dich-vu/tam-trang" className="hover:text-gold-400 transition-colors hover:translate-x-1 inline-block duration-300">Tắm trắng phi thuyền</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold-200 uppercase tracking-widest text-xs">Liên Hệ</h4>
            <ul className="space-y-5 text-sm text-nude-200/80">
              <li className="flex items-start gap-4">
                <MapPin className="shrink-0 text-gold-500 mt-1" size={18} />
                <span className="leading-relaxed">Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="shrink-0 text-gold-500" size={18} />
                <a href="tel:0988834446" className="flex items-center gap-2 font-semibold text-white hover:text-gold-400 transition-colors">
                  <span>0988.834.446</span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="shrink-0 text-gold-500" size={18} />
                <span className="font-sans">cskh@quangdang.vn</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="font-serif text-lg font-bold mb-6 text-gold-200 uppercase tracking-widest text-xs">Giờ Làm Việc</h4>
            <ul className="space-y-4 text-sm text-nude-200/80">
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="font-medium">Thứ 2 - Thứ 6</span>
                <span className="text-gold-400 font-bold">08:30 - 20:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="font-medium">Thứ 7 - Chủ Nhật</span>
                <span className="text-gold-400 font-bold">08:00 - 21:00</span>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-nude-300 italic text-center">* Đặt lịch trước để được phục vụ tốt nhất và nhận ưu đãi đặc biệt.</p>
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
