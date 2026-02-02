"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Clock } from "lucide-react";

interface RelatedServicesProps {
  service: ServiceDetailComplete;
}

export function RelatedServices({ service }: RelatedServicesProps) {
  const formatPrice = (price?: number) => {
    if (!price) return "Liên hệ";
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dịch Vụ Liên Quan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá thêm các dịch vụ bổ trợ để có kết quả tối ưu
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.relatedServices.map((relatedService, index) => (
            <ScrollReveal 
              key={relatedService.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <Link 
                href={`/dich-vu/${relatedService.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-medium rounded-full">
                      {relatedService.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedService.shortDescription}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-green-600 font-bold">
                      Từ {formatPrice(relatedService.priceFrom)}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {relatedService.duration}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
