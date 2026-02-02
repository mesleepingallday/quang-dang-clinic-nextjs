"use client";

import Image from "next/image";
import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, CheckCircle2, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  service: ServiceDetailComplete;
}

export function TestimonialsSection({ service }: TestimonialsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-nude-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những đánh giá chân thực từ khách hàng đã trải nghiệm dịch vụ
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-green-600" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < testimonial.rating 
                          ? "text-gold-500 fill-current" 
                          : "text-gray-300"
                      }`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Customer Info */}
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"}
                      alt={testimonial.customerName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.customerName}
                      </h4>
                      {testimonial.isVerified && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {testimonial.age} tuổi • {testimonial.skinType}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      {testimonial.resultDuration}
                    </p>
                  </div>
                </div>

                {/* Service Used */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Dịch vụ: <span className="font-medium text-gray-700">{testimonial.serviceUsed}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
