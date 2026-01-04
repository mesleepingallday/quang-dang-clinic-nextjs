'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here
    alert(`Cảm ơn ${formData.name}! Chúng tôi đã nhận được yêu cầu đặt lịch vào ngày ${formData.date || 'sớm nhất'}. Chuyên viên sẽ gọi lại số ${formData.phone} trong vòng 3 phút để xác nhận.`);
  };

  return (
    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gold-100 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-700 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Họ và tên <span className="text-red-500">*</span></label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all bg-gray-50 focus:bg-white"
            placeholder="Nhập họ tên của bạn"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Phone Input - Highlighted */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Số điện thoại <span className="text-red-500">*</span></label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gold-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all bg-white"
            placeholder="0988 xxx xxx (Dùng Zalo)"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Dịch vụ quan tâm</label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="">Chọn dịch vụ ưu đãi...</option>
              {SERVICES.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Date & Time - Advanced Mode Only */}
        {isAdvanced && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Ngày dự kiến</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-gold-500" />
                </div>
                <input
                  type="date"
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-gold-500 outline-none text-sm"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Khung giờ</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Clock size={16} className="text-gold-500" />
                </div>
                <select
                  className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-200 focus:border-gold-500 outline-none text-sm bg-white"
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({...formData, timeSlot: e.target.value})}
                >
                  <option value="">Linh động</option>
                  <option value="sang">Sáng (8h - 12h)</option>
                  <option value="chieu">Chiều (13h - 17h)</option>
                  <option value="toi">Tối (17h - 20h)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Note */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Ghi chú (Không bắt buộc)</label>
          <textarea
            rows={2}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
            placeholder="Bạn đang gặp vấn đề gì về da?"
            value={formData.note}
            onChange={(e) => setFormData({...formData, note: e.target.value})}
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button type="submit" fullWidth className="mt-6 py-4 text-base shadow-gold-500/50 hover:shadow-gold-500/70">
          ĐẶT LỊCH NGAY
          <span className="block text-[10px] font-normal opacity-90 mt-0.5 normal-case tracking-wide">
            Chuyên gia sẽ gọi lại trong 3 phút
          </span>
        </Button>

        {/* Reassurance Microcopy */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500">
          <ShieldCheck size={14} className="text-green-600" />
          <span>Thông tin được bảo mật 100%</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>Không phát sinh chi phí ẩn</span>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
