"use client";

import { useState } from "react";
import Image from "next/image";
import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface BeforeAfterGalleryProps {
  service: ServiceDetailComplete;
}

export function BeforeAfterGallery({ service }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === service.beforeAfterGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? service.beforeAfterGallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-nude-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hình Ảnh Trước & Sau
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kết quả thực tế từ khách hàng đã sử dụng dịch vụ
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery */}
        <div className="relative max-w-5xl mx-auto">
          <ScrollReveal animation="scale-up">
            <div className="relative bg-white rounded-[2rem] p-4 lg:p-6 shadow-xl">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Before Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Trước
                  </div>
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                    <Image
                      src={service.beforeAfterGallery[currentIndex].beforeImage}
                      alt="Trước điều trị"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Sau
                  </div>
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                    <Image
                      src={service.beforeAfterGallery[currentIndex].afterImage}
                      alt="Sau điều trị"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <p className="font-semibold text-lg text-gray-900 mb-2">
                  {service.beforeAfterGallery[currentIndex].caption}
                </p>
                <p className="text-green-600 font-medium mb-4">
                  {service.beforeAfterGallery[currentIndex].treatmentDuration}
                </p>
                
                {/* Results */}
                <div className="flex flex-wrap justify-center gap-3">
                  {service.beforeAfterGallery[currentIndex].results.map((result, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      <Check className="w-4 h-4 mr-1" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          {service.beforeAfterGallery.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {service.beforeAfterGallery.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {service.beforeAfterGallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex 
                      ? "bg-green-600 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
