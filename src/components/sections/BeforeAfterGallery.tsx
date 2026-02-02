'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MoveHorizontal, X, ZoomIn } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

interface BeforeAfterCase {
    id: string;
    treatmentType: string;
    beforeImage: string;
    afterImage: string;
    description: string;
    duration: string;
}

const beforeAfterData: BeforeAfterCase[] = [
    {
        id: '1',
        treatmentType: 'Trị mụn chuyên sâu',
        beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
        description: 'Da mụn viêm, thâm mụn được cải thiện rõ rệt sau 3 tháng điều trị',
        duration: '3 tháng',
    },
    {
        id: '2',
        treatmentType: 'Trẻ hóa da',
        beforeImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
        description: 'Giảm nếp nhăn, săn chắc da với công nghệ HIFU',
        duration: '2 tháng',
    },
    {
        id: '3',
        treatmentType: 'Tắm trắng',
        beforeImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?auto=format&fit=crop&q=80&w=600',
        description: 'Da sáng mịn, đều màu tự nhiên sau liệu trình',
        duration: '1 tháng',
    },
    {
        id: '4',
        treatmentType: 'Triệt lông',
        beforeImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
        description: 'Da sạch lông, mịn màng với công nghệ Laser Maxlight',
        duration: '6 buổi',
    },
    {
        id: '5',
        treatmentType: 'Filler tạo hình',
        beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
        description: 'Tạo hình môi trái tim, cằm V-line tự nhiên',
        duration: 'Ngay lập tức',
    },
    {
        id: '6',
        treatmentType: 'Giảm béo',
        beforeImage: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?auto=format&fit=crop&q=80&w=600',
        afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
        description: 'Giảm 5-10cm vòng eo sau liệu trình 10 buổi',
        duration: '1 tháng',
    },
];

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
    beforeImage,
    afterImage,
    beforeLabel = 'Trước',
    afterLabel = 'Sau',
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number, rect: DOMRect) => {
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.touches[0].clientX, rect);
    };

    return (
        <div
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt="After"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {afterLabel}
                </span>
            </div>

            {/* Before Image (Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {beforeLabel}
                </span>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <MoveHorizontal size={20} className="text-green-600" />
                </div>
            </div>

            {/* Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Kéo để so sánh
            </div>
        </div>
    );
};

const BeforeAfterGallery: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<BeforeAfterCase | null>(null);
    const [filter, setFilter] = useState<string>('all');

    const filters = ['all', 'Trị mụn chuyên sâu', 'Trẻ hóa da', 'Tắm trắng', 'Triệt lông', 'Filler tạo hình', 'Giảm béo'];

    const filteredCases = filter === 'all'
        ? beforeAfterData
        : beforeAfterData.filter(c => c.treatmentType === filter);

    return (
        <section className="py-20 md:py-28 bg-nude-50">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="fade-in-up" className="text-center mb-12">
                    <span className="inline-block py-1.5 px-4 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                        Kết Quả Thực Tế
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-4">
                        Trước & <span className="text-gold-500">Sau</span> Điều Trị
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Hình ảnh thực tế từ khách hàng đã trải nghiệm dịch vụ tại Viện Thẩm Mỹ Quang Đăng.
                    </p>
                </ScrollReveal>

                {/* Filter Tabs */}
                <ScrollReveal animation="fade-in-up" delay={100} className="flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2.5 min-h-[44px] rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${filter === f
                                ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                                : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 hover:border-green-500 border border-gray-200'
                                }`}
                        >
                            {f === 'all' ? 'Tất cả' : f}
                        </button>
                    ))}
                </ScrollReveal>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCases.map((item, index) => (
                        <ScrollReveal key={item.id} animation="fade-in-up" delay={index * 100}>
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
                                onClick={() => setSelectedCase(item)}
                            >
                                <div className="relative">
                                    <ComparisonSlider
                                        beforeImage={item.beforeImage}
                                        afterImage={item.afterImage}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-10 h-10" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="inline-block bg-green-50 text-green-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                        {item.treatmentType}
                                    </span>
                                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gold-600 text-sm font-semibold">
                                            Thời gian: {item.duration}
                                        </span>
                                        <span className="text-green-600 text-sm font-medium group-hover:underline inline-flex items-center min-h-[44px]">
                                            Xem chi tiết →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedCase && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedCase(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-green-400 cursor-pointer transition-colors"
                        onClick={() => setSelectedCase(null)}
                    >
                        <X size={32} />
                    </button>
                    <div
                        className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ComparisonSlider
                            beforeImage={selectedCase.beforeImage}
                            afterImage={selectedCase.afterImage}
                        />
                        <div className="p-6">
                            <span className="inline-block bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
                                {selectedCase.treatmentType}
                            </span>
                            <p className="text-gray-700 mb-2">{selectedCase.description}</p>
                            <p className="text-gold-700 font-semibold">
                                Thời gian điều trị: {selectedCase.duration}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BeforeAfterGallery;
