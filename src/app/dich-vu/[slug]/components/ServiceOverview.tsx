"use client";

import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ServiceOverviewProps {
  service: ServiceDetailComplete;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {service.introTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {service.introParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.benefits.map((benefit, index) => {
            // Dynamic icon component
            const IconComponent = (LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>) || CheckCircle2;
            
            return (
              <ScrollReveal 
                key={benefit.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="group p-6 lg:p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
