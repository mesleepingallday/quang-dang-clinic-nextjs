"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Shield,
  Zap,
  Scissors,
  Stethoscope,
  Syringe,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Button from "@/components/Button";
import { SERVICES, SERVICE_CATEGORIES, formatPrice } from "@/lib/data";

type IconName = "Sparkles" | "Shield" | "Zap" | "Scissors" | "Stethoscope" | "Syringe";

const iconMap: Record<IconName, React.ElementType> = {
  Sparkles,
  Shield,
  Zap,
  Scissors,
  Stethoscope,
  Syringe,
};

// Bento grid sizing logic
function getBentoSize(index: number, isFiltered: boolean): "large" | "medium" | "normal" {
  if (isFiltered && index === 0) return "large";
  if (index % 7 === 0) return "large";
  if (index % 5 === 2) return "medium";
  return "normal";
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Pre-compute category counts for performance
  const categoryCounts = useMemo(() => {
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      count: SERVICES.filter((s) => s.category === cat.id).length,
    }));
  }, []);

  // Filter services by category
  const filteredServices = useMemo(() => {
    if (!activeCategory) return SERVICES;
    return SERVICES.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Get featured services (only show when no filter)
  const featuredServices = useMemo(
    () => (activeCategory ? [] : SERVICES.filter((s) => s.featured)),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-nude-50">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-green-600 text-sm font-bold tracking-[0.2em] uppercase mb-4 inline-block">
            Viện Thẩm Mỹ Quang Đăng - Menu 2025
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nâng Tầm Nhan Sắc <br />{" "}
            <span className="italic text-green-600">Với 16 Nhóm Dịch Vụ Đẳng Cấp</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 font-light">
            Hệ sinh thái làm đẹp toàn diện với 100+ liệu trình, kết hợp tinh hoa
            thẩm mỹ nội khoa và công nghệ y khoa tiên tiến nhất thế giới.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="shadow-green-500/30">
              <Link href="/dat-lich">Đặt Lịch Tư Vấn Ngay</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+84988834446" className="hidden sm:inline-flex">
                Hotline: 0988.834.446
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. STICKY CATEGORY TABS */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
            <button
              onClick={() => setActiveCategory(null)}
              aria-pressed={activeCategory === null}
              aria-label={`Hiển thị tất cả ${SERVICES.length} dịch vụ`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === null
                  ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tất Cả
              <span className="text-xs opacity-80">({SERVICES.length})</span>
            </button>
            {categoryCounts.map((cat) => {
              const Icon = iconMap[cat.icon as IconName] || Sparkles;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  aria-label={`Lọc theo ${cat.title}, ${cat.count} dịch vụ`}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={16} />
                  {cat.title}
                  <span className="text-xs opacity-80">({cat.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES - BENTO GRID HIGHLIGHT */}
      {!activeCategory && featuredServices.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-nude-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-gold-400/20 rounded-lg">
                <Sparkles className="text-gold-500" size={24} />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Dịch Vụ Nổi Bật
              </h2>
            </div>

            {/* Bento Grid for Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.slice(0, 3).map((service, idx) => (
                <div
                  key={service.id}
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                    idx === 0 ? "md:col-span-2 lg:col-span-1 md:row-span-2" : ""
                  }`}
                >
                  <Link href={service.link} className="block h-full">
                    <div
                      className={`relative overflow-hidden ${
                        idx === 0 ? "h-80 md:h-full" : "h-56"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-400/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                          ★ Nổi Bật
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-serif text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2 mb-3">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gold-300 font-bold text-lg">
                            {service.priceFrom
                              ? `Chỉ từ ${formatPrice(service.priceFrom)}`
                              : "Liên hệ"}
                          </span>
                          <span className="text-white/60 text-sm flex items-center gap-1 group-hover:text-white transition-colors">
                            Xem chi tiết <ChevronRight size={16} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. ALL SERVICES - BENTO GRID */}
      <section className="py-16" id="services-grid">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {activeCategory
                  ? SERVICE_CATEGORIES.find((c) => c.id === activeCategory)
                      ?.title
                  : "Tất Cả Dịch Vụ"}
              </h2>
              <p className="text-gray-500">
                {activeCategory
                  ? SERVICE_CATEGORIES.find((c) => c.id === activeCategory)
                      ?.description
                  : `Khám phá ${filteredServices.length} dịch vụ thẩm mỹ đẳng cấp`}
              </p>
            </div>
            <div className="text-green-500 font-serif italic text-xl">
              {filteredServices.length} dịch vụ
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service, idx) => {
              const bentoSize = getBentoSize(idx, !!activeCategory);
              const isLarge = bentoSize === "large";
              const isMedium = bentoSize === "medium";

              return (
                <div
                  key={service.id}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col ${
                    isLarge
                      ? "md:col-span-2 lg:col-span-2 md:row-span-2"
                      : isMedium
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  {/* Image */}
                  <Link href={service.link} className="block relative">
                    <div
                      className={`relative overflow-hidden ${
                        isLarge ? "h-72 md:h-96" : "h-56"
                      }`}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes={isLarge
                          ? "(min-width: 1280px) 50vw, (min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
                          : isMedium
                          ? "(min-width: 1280px) 50vw, (min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
                          : "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        }
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Featured Badge */}
                      {service.featured && (
                        <div className="absolute top-4 left-4 bg-gold-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          ★ Nổi Bật
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                        {SERVICE_CATEGORIES.find((c) => c.id === service.category)
                          ?.title || "Dịch vụ"}
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className={`font-serif font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors ${
                        isLarge ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-gray-600 mb-4 flex-grow line-clamp-2 ${
                        isLarge ? "text-base" : "text-sm"
                      }`}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="space-y-1.5 mb-4">
                        {service.benefits.slice(0, isLarge ? 3 : 2).map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-gray-500"
                          >
                            <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                            <span className="line-clamp-1">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-400 mb-0.5">
                          {service.duration || "Liên hệ"}
                        </span>
                        <span className="text-green-600 font-bold">
                          {service.priceFrom
                            ? `Chỉ từ ${formatPrice(service.priceFrom)}`
                            : "Liên hệ"}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 text-xs"
                      >
                        <Link href={service.link}>
                          Chi tiết <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Chưa có dịch vụ nào
              </h3>
              <p className="text-gray-500">
                Danh mục này hiện chưa có dịch vụ. Vui lòng chọn danh mục khác.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Khởi Đầu Hành Trình Tỏa Sáng
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-10 text-lg font-light">
            Đặt lịch tư vấn ngay hôm nay để nhận phác đồ làm đẹp phù hợp nhất
            cho bạn cùng ưu đãi đặc biệt.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="px-10 py-4 text-lg bg-white text-green-600 hover:bg-gray-100 border-none shadow-2xl"
            >
              <Link href="/dat-lich">Đăng Ký Tư Vấn Ngay</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-10 py-4 text-lg border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/bang-gia">Xem Bảng Giá Chi Tiết</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
