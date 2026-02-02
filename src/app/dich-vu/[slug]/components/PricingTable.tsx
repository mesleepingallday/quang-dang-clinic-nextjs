"use client";

import { ServiceDetailComplete } from "@/types";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, Star, Crown, Clock } from "lucide-react";

interface PricingTableProps {
  service: ServiceDetailComplete;
}

export function PricingTable({ service }: PricingTableProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bảng Giá Dịch Vụ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {service.pricingTiers.map((tier, index) => (
            <ScrollReveal 
              key={tier.id} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl ${
                tier.isPremium 
                  ? "bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl scale-105 z-10" 
                  : tier.isPopular
                    ? "bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-xl scale-105 z-10"
                    : "bg-white border-2 border-gray-100 hover:border-green-200"
              }`}>
                {/* Badge */}
                {(tier.isPopular || tier.isPremium) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-bold ${
                      tier.isPremium 
                        ? "bg-white text-green-600" 
                        : "bg-white text-gold-600"
                    }`}>
                      {tier.isPremium ? (
                        <><Crown className="w-4 h-4 mr-1" /> Cao Cấp</>
                      ) : (
                        <><Star className="w-4 h-4 mr-1" /> Phổ Biến</>
                      )}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pt-2">
                  <h3 className={`text-xl font-bold mb-2 ${
                    tier.isPopular || tier.isPremium ? "text-white" : "text-gray-900"
                  }`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${
                    tier.isPopular || tier.isPremium ? "text-white/80" : "text-gray-600"
                  }`}>
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  {tier.originalPrice && (
                    <p className={`text-sm line-through mb-1 ${
                      tier.isPopular || tier.isPremium ? "text-white/60" : "text-gray-400"
                    }`}>
                      {formatPrice(tier.originalPrice)}
                    </p>
                  )}
                  <p className={`text-4xl font-bold ${
                    tier.isPopular || tier.isPremium ? "text-white" : "text-green-600"
                  }`}>
                    {formatPrice(tier.price)}
                  </p>
                  <div className={`flex items-center justify-center gap-2 mt-2 text-sm ${
                    tier.isPopular || tier.isPremium ? "text-white/80" : "text-gray-600"
                  }`}>
                    <Clock className="w-4 h-4" />
                    {tier.duration}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        tier.isPopular || tier.isPremium ? "text-white" : "text-green-600"
                      }`} />
                      <span className={`text-sm ${
                        tier.isPopular || tier.isPremium ? "text-white/90" : "text-gray-600"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#booking"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                    tier.isPopular || tier.isPremium
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Chọn Gói Này
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        {service.pricingNote && (
          <p className="text-center text-gray-500 text-sm mt-8">
            {service.pricingNote}
          </p>
        )}
      </div>
    </section>
  );
}
