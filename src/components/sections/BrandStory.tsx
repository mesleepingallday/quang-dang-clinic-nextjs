'use client';

import React from 'react';
import ScrollReveal from '../ScrollReveal';

interface BrandStoryProps {
    videoUrl?: string;
    videoTitle?: string;
    videoCaption?: string;
    heading?: string;
    paragraphs?: string[];
    badgeText?: string;
}

const BrandStory: React.FC<BrandStoryProps> = ({
    videoUrl = 'https://www.youtube.com/embed/ScMzIvxBSi4',
    videoTitle = 'Câu Chuyện Thương Hiệu Quang Đăng',
    videoCaption = 'Khám phá công nghệ làm đẹp chuẩn quốc tế tại Quang Đăng',
    heading = 'Công Nghệ Làm Đẹp Chuẩn Quốc Tế - Đánh Thức Vẻ Đẹp Tiềm Ẩn',
    paragraphs = [
        'Viện Thẩm Mỹ Quang Đăng ra đời với tầm nhìn mang công nghệ làm đẹp tiên tiến nhất thế giới đến với phụ nữ Nghệ An. Chúng tôi sở hữu hệ thống máy móc nhập khẩu chính hãng từ Mỹ, Hàn Quốc, Châu Âu cùng các liệu trình điều trị nám, trẻ hóa da, giảm béo công nghệ cao và chăm sóc da chuyên sâu...',
        'Với sứ mệnh nâng tầm nhan sắc Việt, Quang Đăng không ngừng cập nhật xu hướng làm đẹp mới nhất, áp dụng các phương pháp thẩm mỹ hiện đại để mang đến trải nghiệm dịch vụ đẳng cấp 5 sao ngay tại quê hương, giúp phụ nữ Việt tự tin tỏa sáng mà không cần đi xa.'
    ],
    badgeText = 'Công Nghệ & Tầm Nhìn'
}) => {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden" aria-labelledby="brand-story-heading">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-nude-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Video Container */}
                    <ScrollReveal animation="slide-right" className="lg:w-1/2 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                            <iframe
                                src={videoUrl}
                                title={videoTitle}
                                loading="lazy"
                                allow="fullscreen; encrypted-media"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                            {/* Hover overlay effect */}
                            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                        {/* Video caption */}
                        <p className="text-center text-sm text-gray-500 mt-4 italic">
                            {videoCaption}
                        </p>
                    </ScrollReveal>

                    {/* Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <ScrollReveal animation="fade-in-up" delay={100}>
                            <span className="inline-block py-1 px-4 bg-green-50 text-green-600 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                                {badgeText}
                            </span>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-in-up" delay={200}>
                            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-bold text-green-700 mb-6 leading-tight">
                                {heading.split(' - ').map((part, index) => (
                                    <React.Fragment key={index}>
                                        {index === 1 && <br />}
                                        {index === 1 ? (
                                            <span className="text-gold-500">{part}</span>
                                        ) : (
                                            part
                                        )}
                                    </React.Fragment>
                                ))}
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <ScrollReveal key={index} animation="fade-in-up" delay={300 + index * 100}>
                                    <p className="text-gray-600 leading-relaxed text-justify text-lg">
                                        {paragraph}
                                    </p>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Brand signature / accent */}
                        <ScrollReveal animation="fade-in-up" delay={500}>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-1 w-16 bg-green-500 rounded-full"></div>
                                <span className="font-serif text-green-700 italic font-semibold">
                                    Đổi Mới - Hiện Đại - Đẳng Cấp
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
