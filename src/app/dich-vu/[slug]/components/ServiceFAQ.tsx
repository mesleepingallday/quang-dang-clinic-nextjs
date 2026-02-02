"use client";

import { useState } from "react";
import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceFAQProps {
  service: ServiceDetailComplete;
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Câu Hỏi Thường Gặp
              </h2>
              <p className="text-gray-600">
                Giải đáp những thắc mắc phổ biến về dịch vụ
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <ScrollReveal 
                key={faq.id} 
                animation="fade-in-up" 
                delay={index * 50}
              >
                <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-green-200 transition-colors">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-green-50 transition-colors"
                  >
                    <span className="font-semibold text-lg text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      openIndex === index 
                        ? "bg-green-600 text-white rotate-180" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}>
                    <div className="p-6 pt-0 bg-green-50/50">
                      <div className="pt-4 border-t border-green-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
