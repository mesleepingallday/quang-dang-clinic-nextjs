'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ShieldCheck, CheckCircle, ChevronDown } from 'lucide-react';
import Button from './Button';
import { SERVICES } from '@/lib/data';

interface BookingFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  isAdvanced?: boolean; // Toggle for detailed fields (Date/Time)
}

const BookingForm: React.FC<BookingFormProps> = ({
  title = "Đặt Lịch Hẹn Ngay",
  subtitle = "Để lại thông tin, chuyên gia sẽ liên hệ tư vấn miễn phí trong 5 phút.",
  className = "",
  isAdvanced = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    timeSlot: '',
    note: ''
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
    setStatusMessage(
      `Cảm ơn ${formData.name}! Chúng tôi đã nhận được yêu cầu đặt lịch vào ngày ${formData.date || 'sớm nhất'}. Chuyên viên sẽ gọi lại số ${formData.phone} trong vòng 3 phút để xác nhận.`
    );
    setFormData({ name: '', phone: '', service: '', date: '', timeSlot: '', note: '' });
  };

  return (
    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gold-100 relative overflow-hidden ${className}`}>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center backdrop-blur-sm">
          <div className="w-10 h-10 border-4 border-gold-200 border-t-gold-600 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-700 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {statusMessage && (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 flex items-start gap-2 animate-fade-in" aria-live="polite">
            <CheckCircle size={16} className="mt-0.5 shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Name Input */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="booking-name">Họ và tên <span className="text-red-500">*</span></label>
          <input
            id="booking-name"
            type="text"
            required
            name="name"
            autoComplete="name"
            className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:border-gold-500 focus:ring-gold-500 bg-gray-50 focus:bg-white'}`}
            placeholder="Nhập họ tên của bạn"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.name}</p>}
        </div>

        {/* Phone Input */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="booking-phone">Số điện thoại <span className="text-red-500">*</span></label>
          <input
            id="booking-phone"
            type="tel"
            required
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            className={`w-full px-4 py-3 rounded-lg border focus:ring-1 outline-none transition-all duration-300 ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50' : 'border-gold-300 focus:border-gold-500 focus:ring-gold-500 bg-white'}`}
            placeholder="0988 xxx xxx (Dùng Zalo)"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 animate-fade-in">{errors.phone}</p>}
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="booking-service">Dịch vụ quan tâm</label>
          <div className="relative">
            <select
              id="booking-service"
              name="service"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-gray-50 focus:bg-white appearance-none cursor-pointer hover:border-gold-300"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="">Chọn dịch vụ ưu đãi…</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gold-500">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="booking-note">Ghi chú (Không bắt buộc)</label>
          <textarea
            id="booking-note"
            rows={2}
            name="note"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
            placeholder="Bạn đang gặp vấn đề gì về da?"
            value={formData.note}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          className="mt-6 py-4 text-base shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          disabled={isLoading}
        >
          <span className={`relative z-10 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            ĐẶT LỊCH NGAY
            <span className="block text-[10px] font-normal opacity-90 mt-0.5 normal-case tracking-wide">
              Chuyên gia sẽ gọi lại trong 3 phút
            </span>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </Button>

        {/* Reassurance Microcopy */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium">
          <ShieldCheck size={14} className="text-green-600" />
          <span>Bảo mật 100%</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>Không phí ẩn</span>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
