'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 border-l-8 border-gold-500 pl-6">Câu Hỏi Thường Gặp</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden transition-shadow bg-white hover:shadow-md">
            <button
              className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-800"
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
            >
              <span className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors ${activeFaq === idx ? 'bg-gold-500 text-white' : 'bg-gold-50 text-gold-600'}`}>
                  ?
                </div>
                {faq.q}
              </span>
              {activeFaq === idx ? <ChevronUp size={20} className="text-gold-500" /> : <ChevronDown size={20} className="text-gray-300" />}
            </button>
            {activeFaq === idx && (
              <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed animate-fade-in">
                <div className="pl-12 border-l border-gold-100 ml-4">
                  {faq.a}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
