'use client';

import React from 'react';
import { Users, Calendar, Award, Stethoscope } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import AnimatedCounter from '../AnimatedCounter';

interface StatCardProps {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
    delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix, label, delay }) => {
    return (
        <ScrollReveal animation="scale-up" delay={delay} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white transition-all duration-500 shadow-sm border border-green-200/50">
                {icon}
            </div>
            <div className="flex items-baseline gap-1 mb-2">
                <AnimatedCounter
                    end={value}
                    suffix={suffix}
                    className="text-4xl md:text-5xl font-bold text-green-700 font-serif"
                />
            </div>
            <p className="text-gray-600 text-sm md:text-base font-medium">{label}</p>
        </ScrollReveal>
    );
};

const StatsCounter: React.FC = () => {
    const stats = [
        {
            icon: <Users size={36} strokeWidth={1.5} />,
            value: 10000,
            suffix: '+',
            label: 'Khách hàng hài lòng',
        },
        {
            icon: <Calendar size={36} strokeWidth={1.5} />,
            value: 15,
            suffix: '+',
            label: 'Năm kinh nghiệm',
        },
        {
            icon: <Award size={36} strokeWidth={1.5} />,
            value: 50000,
            suffix: '+',
            label: 'Liệu trình thực hiện',
        },
        {
            icon: <Stethoscope size={36} strokeWidth={1.5} />,
            value: 20,
            suffix: '+',
            label: 'Chuyên gia bác sĩ',
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="fade-in-up" className="text-center mb-16">
                    <span className="inline-block py-1 px-4 bg-green-50 text-green-600 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                        Thành Tựu
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-4">
                        Con Số <span className="text-gold-500">Nói Lên</span> Chất Lượng
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Hơn một thập kỷ phục vụ, chúng tôi tự hào về những con số minh chứng cho sự tin tưởng của khách hàng.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
