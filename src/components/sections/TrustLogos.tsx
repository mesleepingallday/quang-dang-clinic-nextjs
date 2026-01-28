'use client';

import React from 'react';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface TrustItem {
    icon: React.ReactNode;
    name: string;
    description: string;
}

const trustItems: TrustItem[] = [
    {
        icon: <Shield size={32} strokeWidth={1.5} />,
        name: 'FDA Approved',
        description: 'Thiết bị được FDA Hoa Kỳ chứng nhận',
    },
    {
        icon: <Award size={32} strokeWidth={1.5} />,
        name: 'ISO 9001:2015',
        description: 'Chứng nhận hệ thống quản lý chất lượng',
    },
    {
        icon: <CheckCircle size={32} strokeWidth={1.5} />,
        name: 'Bộ Y Tế',
        description: 'Giấy phép hoạt động Bộ Y Tế cấp',
    },
    {
        icon: <Star size={32} strokeWidth={1.5} />,
        name: 'Top 10 Nghệ An',
        description: 'Top 10 thẩm mỹ viện uy tín Nghệ An',
    },
];

const equipmentLogos = [
    { name: 'Laser Maxlight', origin: 'Germany' },
    { name: 'PicoSure', origin: 'USA' },
    { name: 'HIFU Ultraformer', origin: 'Korea' },
    { name: 'Hydrafacial', origin: 'USA' },
    { name: 'Thermage', origin: 'USA' },
];

const TrustLogos: React.FC = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                {/* Certifications */}
                <ScrollReveal animation="fade-in-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {trustItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Equipment Partners */}
                <ScrollReveal animation="fade-in-up" delay={200}>
                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-center text-sm text-gray-500 mb-6">
                            Đối tác công nghệ hàng đầu thế giới
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                            {equipmentLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center group cursor-default"
                                >
                                    <div className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 group-hover:border-green-200 group-hover:bg-green-50 transition-all duration-300">
                                        <span className="font-bold text-gray-400 group-hover:text-green-600 transition-colors">
                                            {logo.name}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400 mt-2 group-hover:text-green-500 transition-colors">
                                        {logo.origin}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TrustLogos;
