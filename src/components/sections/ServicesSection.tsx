"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Award,
  TrendingUp,
  Clock,
  Zap,
  ArrowUpRight,
  Crown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { SERVICES, formatPrice } from "@/lib/data";

export default function ServicesSection() {
  // Get first 5 featured services
  const featuredServices = SERVICES.filter((s) => s.featured).slice(0, 5);
  const displayServices =
    featuredServices.length >= 5
      ? featuredServices
      : SERVICES.slice(0, 5);

  const [heroService, ...gridServices] = displayServices;

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-green-200/30 via-emerald-100/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-gold-200/30 via-yellow-100/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #0D7351 1px, transparent 1px),
                              linear-gradient(to bottom, #0D7351 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Decorative accent line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Luxury Header */}
        <div className="text-center mb-10">
          <ScrollReveal animation="fade-in-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-green-400" />
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-5 py-2">
                <Crown className="text-gold-500" size={18} />
                <span className="text-green-800 text-sm font-semibold tracking-wide">
                  TOP 5 DỊCH VỤ HOT
                </span>
              </div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-green-400" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              <span className="text-gray-900">Trải Nghiệm </span>
              <span className="relative inline-block">
                <span className="italic bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Đỉnh Cao
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 4 Q50 0 100 4 T200 4" stroke="#C5A028" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-600 max-w-lg mx-auto">
              5 dịch vụ được đặt lịch nhiều nhất với ưu đãi độc quyền
            </p>
          </ScrollReveal>

          {/* Trust badges */}
          <ScrollReveal animation="fade-in-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { icon: Star, text: "4.9/5 Rating", color: "text-amber-500" },
                { icon: Award, text: "Chứng Nhận Y Khoa", color: "text-green-500" },
                { icon: Zap, text: "Công Nghệ Mới Nhất", color: "text-violet-500" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                  <item.icon className={item.color} size={16} />
                  <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* WOW Layout: Hero Card + 2x2 Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Hero Card - Left Side (Spans 7 columns) */}
          {heroService && (
            <ScrollReveal animation="fade-in-up" delay={200} className="lg:col-span-7">
              <Link href={heroService.link} className="group block h-full">
                <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-green-500 hover:border-green-600">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="grid md:grid-cols-5 h-full min-h-[420px]">
                    {/* Image - 3 columns */}
                    <div className="md:col-span-3 relative overflow-hidden">
                      <Image
                        src={heroService.image}
                        alt={heroService.title}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20" />
                      
                      {/* Floating badges */}
                      <div className="absolute top-5 left-5 space-y-2">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                          <TrendingUp size={16} />
                          Tiết kiệm 50%
                        </div>
                        <div className="bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                          <Crown className="text-gold-500" size={14} />
                          #1 Best Seller
                        </div>
                      </div>

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform cursor-pointer">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <ArrowRight className="text-white" size={24} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content - 2 columns */}
                    <div className="md:col-span-2 p-6 lg:p-8 flex flex-col justify-center relative">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-green-600 text-xs font-bold uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">
                          {heroService.category === "skin-care" && "Chăm Sóc Da"}
                          {heroService.category === "treatment" && "Điều Trị"}
                          {heroService.category === "high-tech" && "Công Nghệ Cao"}
                          {heroService.category === "medical-aesthetic" && "Thẩm Mỹ Nội Khoa"}
                          {heroService.category === "special" && "Dịch Vụ Đặc Biệt"}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                        {heroService.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {heroService.shortDescription}
                      </p>

                      {/* Benefits with icons */}
                      <div className="space-y-2 mb-5">
                        {heroService.benefits?.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 size={12} className="text-green-600" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Giá chỉ từ</span>
                            <div className="text-2xl lg:text-3xl font-bold text-green-600">
                              {heroService.priceFrom
                                ? formatPrice(heroService.priceFrom)
                                : "Liên hệ"}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-green-600 font-semibold group-hover:gap-2 transition-all">
                            <span className="text-sm">Đặt lịch</span>
                            <ArrowUpRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* 4 Cards Grid - Right Side (Spans 5 columns, 2x2) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {gridServices.slice(0, 4).map((service, index) => (
              <ScrollReveal
                key={service.id}
                animation="fade-in-up"
                delay={300 + index * 100}
                className={index >= 2 ? "lg:translate-y-0" : ""}
              >
                <Link href={service.link} className="group block h-full">
                  <div className="h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                    {/* Image Container */}
                    <div className="relative h-36 sm:h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Discount Badge */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                          -{40 + index * 5}%
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-lg shadow-sm">
                          <div className="text-[10px] text-gray-500 leading-none">Từ</div>
                          <div className="text-sm font-bold text-green-600">
                            {service.priceFrom
                              ? formatPrice(service.priceFrom)
                              : "Liên hệ"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4">
                      {/* Category Tag */}
                      <div className="text-[10px] text-green-600 font-medium uppercase tracking-wider mb-1.5">
                        {service.category === "skin-care" && "Chăm Sóc Da"}
                        {service.category === "treatment" && "Điều Trị"}
                        {service.category === "high-tech" && "Công Nghệ Cao"}
                        {service.category === "medical-aesthetic" && "Thẩm Mỹ Nội Khoa"}
                        {service.category === "special" && "Dịch Vụ Đặc Biệt"}
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 mb-1.5 line-clamp-1 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Mini stats */}
                      <div className="flex items-center gap-3 text-[10px] text-gray-500">
                        {service.duration && (
                          <span className="flex items-center gap-1">
                            <Clock size={10} />
                            {service.duration}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={10} className="text-amber-400" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal animation="fade-in-up" delay={600} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="px-8 py-4 text-base shadow-green-500/20">
              <Link href="/dich-vu" className="inline-flex items-center gap-2">
                <Sparkles size={18} />
                Xem Tất Cả Dịch Vụ
                <ArrowRight size={18} />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="px-8 py-4 text-base border-gray-300">
              <Link href="/bang-gia" className="inline-flex items-center gap-2">
                <Clock size={18} />
                Bảng Giá Chi Tiết
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Bottom Stats - Horizontal */}
        <ScrollReveal animation="fade-in-up" delay={700}>
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {[
              { value: "16", label: "Nhóm dịch vụ" },
              { value: "100+", label: "Liệu trình" },
              { value: "50%", label: "Giảm giá" },
              { value: "4.9", label: "Đánh giá" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
