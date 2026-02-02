"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceDetailComplete } from "@/types";
import { ChevronRight, Tag } from "lucide-react";

interface ServiceHeroProps {
  service: ServiceDetailComplete;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-nude-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 lg:py-12 relative">
        {/* Breadcrumb */}
        <nav className="mb-6 lg:mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-green-600 transition-colors">
                Trang chủ
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              <Link href="/dich-vu" className="hover:text-green-600 transition-colors">
                Dịch vụ
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-green-600 font-medium">{service.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              <Tag className="w-4 h-4 mr-2" />
              {service.category}
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {service.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-600/30"
              >
                Đặt Lịch Ngay
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all"
              >
                Xem Bảng Giá
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 mt-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-green-600">10+</p>
                <p className="text-sm text-gray-600">Năm kinh nghiệm</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">5000+</p>
                <p className="text-sm text-gray-600">Khách hàng</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-600">98%</p>
                <p className="text-sm text-gray-600">Hài lòng</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in-right">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Discount Badge */}
              {service.promotion?.isActive && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  -{service.promotion.discountPercent}%
                </div>
              )}
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Cam Kết</p>
                  <p className="text-sm text-gray-600">Hiệu quả rõ rệt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
