"use client";

import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import * as LucideIcons from "lucide-react";

interface ProcessStepsProps {
  service: ServiceDetailComplete;
}

export function ProcessSteps({ service }: ProcessStepsProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-nude-50 to-green-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy Trình Thực Hiện
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quy trình chuẩn y khoa, đảm bảo an toàn và hiệu quả tối ưu cho từng khách hàng
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-200 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {service.processSteps.map((step, index) => {
              const IconComponent = (LucideIcons[step.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>) || LucideIcons.Circle;
              
              return (
                <ScrollReveal 
                  key={step.id} 
                  animation="fade-in-up" 
                  delay={index * 150}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {step.stepNumber}
                    </div>

                    <div className="pt-6 text-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>

                      {/* Duration */}
                      <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        <LucideIcons.Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
