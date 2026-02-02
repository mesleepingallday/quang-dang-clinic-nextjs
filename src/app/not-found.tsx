"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Search, Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const popularServices = [
  {
    title: "Trị Mụn Chuyên Sâu",
    slug: "tri-mun-chuyen-sau",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
  },
  {
    title: "Căng Chỉ Collagen",
    slug: "cang-chi-collagen",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
  },
  {
    title: "Laser Trẻ Hóa Da",
    slug: "laser-tre-hoa-da",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=300&fit=crop",
  },
  {
    title: "Chăm Sóc Da Cơ Bản",
    slug: "cham-soc-da-co-ban",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop",
  },
];

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-nude-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal animation="fade-in-up">
              {/* 404 Number */}
              <div className="relative inline-block mb-8">
                <span className="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-green-100 leading-none select-none">
                  404
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-[60px] md:text-[80px] lg:text-[100px] font-bold text-green-600">
                  404
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Không Tìm Thấy Trang
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
                <br className="hidden md:block" />
                Hãy kiểm tra lại đường dẫn hoặc quay về trang chủ.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-600/30"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Về Trang Chủ
                </Link>
                <Link
                  href="/dich-vu"
                  className="inline-flex items-center px-8 py-4 border-2 border-green-600 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-all"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Xem Dịch Vụ
                </Link>
                <a
                  href="tel:0909123456"
                  className="inline-flex items-center px-8 py-4 border-2 border-gold-500 text-gold-600 rounded-full font-semibold hover:bg-gold-50 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Gọi Tư Vấn
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Có Thể Bạn Quan Tâm
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {popularServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/dich-vu/${service.slug}`}
                      className="group relative aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white font-medium text-sm md:text-base">
                          {service.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Help Section */}
            <ScrollReveal animation="fade-in-up" delay={400}>
              <div className="mt-12 p-6 bg-green-50 rounded-2xl">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  Cần Hỗ Trợ?
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>0909 123 456</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-gray-300" />
                  <div>
                    <span>Giờ làm việc: 8:00 - 20:00 (T2-CN)</span>
                  </div>
                </div>
                <Link
                  href="/lien-he"
                  className="inline-flex items-center mt-4 text-green-600 font-medium hover:underline"
                >
                  Liên hệ với chúng tôi
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
