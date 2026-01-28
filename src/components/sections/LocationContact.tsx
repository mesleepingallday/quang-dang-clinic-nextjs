'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Navigation } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Button from '../Button';

const LocationContact: React.FC = () => {
    const contactInfo = [
        {
            icon: <MapPin size={24} />,
            title: 'Địa chỉ',
            content: 'Tầng 5 - TTTM Đức Tài — Tâm Đạt, Khối 5, Quỳnh Lưu, Nghệ An',
            action: {
                label: 'Chỉ đường',
                href: 'https://maps.app.goo.gl/axJtb2NmM1oiZCkJ6',
            },
        },
        {
            icon: <Phone size={24} />,
            title: 'Hotline',
            content: '0988.834.446',
            subContent: 'Tư vấn 24/7',
            action: {
                label: 'Gọi ngay',
                href: 'tel:0988834446',
            },
        },
        {
            icon: <Mail size={24} />,
            title: 'Email',
            content: 'cskh@quangdang.vn',
            subContent: 'Phản hồi trong 24h',
            action: {
                label: 'Gửi email',
                href: 'mailto:cskh@quangdang.vn',
            },
        },
        {
            icon: <Clock size={24} />,
            title: 'Giờ làm việc',
            content: 'Thứ 2 - Chủ nhật',
            subContent: '08:00 - 20:00',
        },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: <Youtube size={20} />, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="fade-in-up" className="text-center mb-16">
                    <span className="inline-block py-1 px-4 bg-green-50 text-green-600 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                        Liên Hệ
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700 mb-4">
                        Ghé Thăm <span className="text-gold-500">Viện Thẩm Mỹ</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Chúng tôi luôn sẵn sàng chào đón bạn đến trải nghiệm dịch vụ tại không gian sang trọng và chuyên nghiệp.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map Section */}
                    <ScrollReveal animation="slide-right">
                        <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            {/* Google Maps Embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.178907766313!2d105.6284122!3d19.1436444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313771bb3ccf30bb%3A0x5a05af3f0112da74!2zVHJ1bmcgdMOibSB0aMawxqFuZyBt4bqhaSDEkOG7qWMgVMOgaSAtIFTDom0gxJDhuqF0!5e0!3m2!1svi!2s!4v1769625563616!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                                title="Viện Thẩm Mỹ Quang Đăng Location"
                            />

                            {/* Map Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-gray-800 truncate">Viện Thẩm Mỹ Quang Đăng</p>
                                        <p className="text-sm text-gray-500 truncate">TTTM Đức Tài, Quỳnh Lưu, Nghệ An</p>
                                    </div>
                                    <a
                                        href="https://maps.app.goo.gl/axJtb2NmM1oiZCkJ6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
                                    >
                                        <Navigation size={16} />
                                        Chỉ đường
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Info Section */}
                    <ScrollReveal animation="slide-left" delay={200}>
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-5 bg-nude-50 rounded-xl hover:bg-green-50 transition-colors duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                                        <p className="font-semibold text-gray-800 text-lg">{item.content}</p>
                                        {item.subContent && (
                                            <p className="text-green-600 text-sm font-medium">{item.subContent}</p>
                                        )}
                                    </div>
                                    {item.action && (
                                        <a
                                            href={item.action.href}
                                            target={item.action.href.startsWith('http') ? '_blank' : undefined}
                                            rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="shrink-0 px-4 py-2 border border-green-200 text-green-600 text-sm font-medium rounded-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
                                        >
                                            {item.action.label}
                                        </a>
                                    )}
                                </div>
                            ))}

                            {/* Social Links */}
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500 mb-4">Theo dõi chúng tôi</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:text-white hover:scale-110 ${social.color}`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick CTA */}
                            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                                <h3 className="font-serif text-xl font-bold mb-2">Đặt lịch tư vấn miễn phí</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    Nhận tư vấn từ chuyên gia và ưu đãi đặc biệt cho lần đầu trải nghiệm.
                                </p>
                                <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold">
                                    Đặt lịch ngay
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default LocationContact;
