"use client";

import { ServiceDetailComplete } from "@/types";
import { Phone, Clock, MapPin, Tag, Calendar } from "lucide-react";

interface ServiceSidebarProps {
  service: ServiceDetailComplete;
}

export function ServiceSidebar({ service }: ServiceSidebarProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Promotion Card */}
      {service.promotion?.isActive && (
        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5" />
            <span className="font-semibold">Ưu Đãi Đặc Biệt</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{service.promotion.title}</h3>
          <p className="text-white/90 text-sm mb-4">
            {service.promotion.description}
          </p>
          <div className="bg-white/20 rounded-xl p-4 text-center mb-4">
            <p className="text-sm text-white/80 mb-1">Mã ưu đãi</p>
            <p className="text-2xl font-bold tracking-wider">{service.promotion.code}</p>
          </div>
          <p className="text-xs text-white/70">
            Áp dụng đến {new Date(service.promotion.validUntil).toLocaleDateString("vi-VN")}
          </p>
        </div>
      )}

      {/* Booking Form Card */}
      <div id="booking" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-28">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
          Đặt Lịch Tư Vấn
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Điền thông tin để được tư vấn miễn phí
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              placeholder="Nhập họ tên"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dịch vụ quan tâm
            </label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white">
              <option value="">Chọn gói dịch vụ</option>
              {service.pricingTiers.map((tier) => (
                <option key={tier.id} value={tier.id}>
                  {tier.name} - {formatPrice(tier.price)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ghi chú (tùy chọn)
            </label>
            <textarea
              rows={3}
              placeholder="Mô tả tình trạng da hoặc yêu cầu đặc biệt"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-600/30 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Đặt Lịch Ngay
          </button>

          <p className="text-xs text-gray-500 text-center">
            Chúng tôi sẽ liên hệ xác nhận trong vòng 24 giờ
          </p>
        </form>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Hotline</p>
              <p className="font-semibold text-gray-900">0909 123 456</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Giờ làm việc</p>
              <p className="font-semibold text-gray-900">8:00 - 20:00 (T2-CN)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Địa chỉ</p>
              <p className="font-semibold text-gray-900">123 Nguyễn Văn A, Q.1, TP.HCM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
