'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send, ShieldCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import Button from '@/components/Button';

// Contact Form Component
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ tên';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.message.trim()) newErrors.message = 'Vui lòng nhập nội dung';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    if (!validate()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStatusMessage(`Cảm ơn ${formData.name}! Chúng tôi đã nhận được tin nhắn và sẽ liên hệ lại trong thời gian sớm nhất.`);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {statusMessage && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-start gap-2 animate-fade-in" aria-live="polite">
          <CheckCircle size={16} className="mt-0.5 shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="contact-name">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-green-500 bg-gray-50 focus:bg-white'}`}
          placeholder="Nhập họ tên của bạn"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="contact-phone">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          required
          inputMode="tel"
          className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-green-500 bg-gray-50 focus:bg-white'}`}
          placeholder="0988 xxx xxx"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: '' });
          }}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-green-500 bg-gray-50 focus:bg-white'}`}
          placeholder="email@example.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="contact-message">
          Nội dung tin nhắn <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 resize-none ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:border-green-500 focus:ring-green-500 bg-gray-50 focus:bg-white'}`}
          placeholder="Bạn muốn hỏi về dịch vụ nào?"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        fullWidth
        className="mt-4 py-4 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send size={18} />
            GỬI TIN NHẮN
          </>
        )}
      </Button>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
        <ShieldCheck size={14} className="text-green-600" />
        <span>Thông tin của bạn được bảo mật 100%</span>
      </div>
    </form>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-nude-800 via-nude-800 to-green-700 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-40 -mb-40" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="fade-in-up" duration={0.8}>
              <span className="inline-block py-1.5 px-4 border border-white/20 bg-white/10 rounded-full text-sm uppercase tracking-[0.2em] mb-6 text-green-200 backdrop-blur-md">
                Liên Hệ
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" duration={0.8} delay={100}>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Chúng Tôi Luôn <br />
                <span className="text-green-300 italic">Sẵn Sàng Hỗ Trợ</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-in-up" duration={0.8} delay={200}>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Hãy liên hệ với Viện Thẩm Mỹ Quang Đăng để được tư vấn miễn phí về các dịch vụ làm đẹp phù hợp nhất với bạn.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-nude-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-24 relative z-20">
            {/* Address Card */}
            <ScrollReveal animation="fade-in-up" delay={0}>
              <div className="glass-panel bg-white/90 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-green-100/50">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500 transition-colors duration-300">
                  <MapPin className="text-green-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Địa Chỉ</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Tầng 5 - TTTM Đức Tài — Tâm Đạt<br />
                  Khối 5, Quỳnh Lưu, Nghệ An
                </p>
              </div>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="glass-panel bg-white/90 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-green-100/50">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500 transition-colors duration-300">
                  <Phone className="text-green-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Hotline</h3>
                <a
                  href="tel:0988834446"
                  className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                >
                  0988.834.446
                </a>
                <p className="text-gray-500 text-sm mt-2">Gọi ngay để được tư vấn</p>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="glass-panel bg-white/90 p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group border border-green-100/50">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-green-500 transition-colors duration-300">
                  <Mail className="text-green-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Email</h3>
                <a
                  href="mailto:cskh@vienthammyquangdang.vn"
                  className="text-lg text-green-600 hover:text-green-700 transition-colors"
                >
                  cskh@vienthammyquangdang.vn
                </a>
                <p className="text-gray-500 text-sm mt-2">Phản hồi trong 24h</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MAP + FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Google Map */}
            <ScrollReveal animation="slide-right">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-green-100/50 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.178907766313!2d105.6284122!3d19.1436444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313771bb3ccf30bb%3A0x5a05af3f0112da74!2zVHJ1bmcgdMOibSB0aMawxqFuZyBt4bqhaSDEkOG7qWMgVMOgaSAtIFTDom0gxJDhuqF0!5e0!3m2!1svi!2s!4v1769625563616!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Viện Thẩm Mỹ Quang Đăng Location"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-6 p-4 bg-nude-50 rounded-xl border border-green-100/50">
                <p className="text-sm text-gray-600 flex items-start gap-3">
                  <MapPin size={18} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-gray-800">Hướng dẫn:</strong> Từ trung tâm thị trấn Cầu Giát, đi theo đường Hồ Chí Minh về hướng Nam khoảng 500m, TTTM Đức Tài nằm bên phải đường.
                  </span>
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal animation="slide-left" delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-50" />

                <div className="relative z-10">
                  <h2 className="font-serif text-3xl font-bold text-green-700 mb-2">Gửi Tin Nhắn</h2>
                  <p className="text-gray-500 mb-8">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WORKING HOURS + SOCIAL */}
      <section className="py-20 bg-nude-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Working Hours */}
            <ScrollReveal animation="fade-in-up">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                    <Clock className="text-green-600" size={28} />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-green-700">Giờ Làm Việc</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Thứ 2 - Thứ 6</span>
                    <span className="text-green-600 font-bold text-lg">08:30 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Thứ 7 - Chủ Nhật</span>
                    <span className="text-green-600 font-bold text-lg">08:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-700 font-medium">Ngày Lễ</span>
                    <span className="text-green-600 font-bold text-lg">09:00 - 17:00</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-green-700 italic text-center">
                    ✨ Đặt lịch trước để được phục vụ tốt nhất và nhận ưu đãi đặc biệt
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100/50 h-full flex flex-col">
                <h2 className="font-serif text-2xl font-bold text-green-700 mb-4">Kết Nối Với Chúng Tôi</h2>
                <p className="text-gray-600 mb-8">
                  Theo dõi Viện Thẩm Mỹ Quang Đăng trên mạng xã hội để cập nhật những ưu đãi mới nhất và tips làm đẹp hàng ngày.
                </p>

                <div className="flex gap-4 mb-8">
                  <a
                    href="https://facebook.com/quangdangbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/quangdangbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com/@quangdangbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <Youtube size={24} />
                  </a>
                </div>

                <div className="mt-auto">
                  <Link
                    href="/dat-lich"
                    className="block w-full py-4 px-6 bg-green-600 text-white text-center font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
                  >
                    ĐẶT LỊCH HẸN NGAY
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
