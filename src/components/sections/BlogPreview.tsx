'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import Button from '../Button';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    publishedAt: string;
    readingTime: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'bi-quyet-duong-da-mua-he',
        title: 'Bí quyết dưỡng da hoàn hảo cho mùa hè nắng nóng',
        excerpt: 'Khám phá những bí quyết chăm sóc da hiệu quả giúp bảo vệ làn da khỏi tác hại của ánh nắng mặt trờitrong mùa hè.',
        coverImage: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600',
        category: 'Chăm sóc da',
        publishedAt: '2024-01-25',
        readingTime: '5 phút',
    },
    {
        id: '2',
        slug: 'cong-nghe-triet-long-laser',
        title: 'Công nghệ triệt lông Laser Maxlight có thực sự hiệu quả?',
        excerpt: 'Tìm hiểu về công nghệ triệt lông tiên tiến từ Đức và tại sao nó được đánh giá cao trong ngành thẩm mỹ.',
        coverImage: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600',
        category: 'Công nghệ',
        publishedAt: '2024-01-20',
        readingTime: '7 phút',
    },
    {
        id: '3',
        slug: 'tre-hoa-da-khong-phau-thuat',
        title: '5 phương pháp trẻ hóa da không phẫu thuật hot nhất 2024',
        excerpt: 'Cập nhật những công nghệ trẻ hóa da mới nhất giúp bạn lấy lại thanh xuân mà không cần dao kéo.',
        coverImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
        category: 'Trẻ hóa da',
        publishedAt: '2024-01-15',
        readingTime: '6 phút',
    },
];

const categoryColors: Record<string, string> = {
    'Chăm sóc da': 'bg-blue-50 text-blue-600',
    'Công nghệ': 'bg-purple-50 text-purple-600',
    'Trẻ hóa da': 'bg-pink-50 text-pink-600',
    'Thẩm mỹ': 'bg-green-50 text-green-600',
};

interface BlogCardProps {
    post: BlogPost;
    index: number;
    featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, featured = false }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    if (featured) {
        return (
            <ScrollReveal animation="fade-in-up" delay={index * 100}>
                <Link href={`/tin-tuc/${post.slug}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col md:flex-row">
                        <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute top-4 left-4">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={14} />
                                    {formatDate(post.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    {post.readingTime} đọc
                                </span>
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                            <span className="inline-flex items-center text-green-600 font-semibold group-hover:gap-3 transition-all">
                                Đọc tiếp <ArrowRight size={18} className="ml-2" />
                            </span>
                        </div>
                    </div>
                </Link>
            </ScrollReveal>
        );
    }

    return (
        <ScrollReveal animation="fade-in-up" delay={index * 100}>
            <Link href={`/tin-tuc/${post.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-4 left-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                                {post.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {post.readingTime}
                            </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                        <span className="inline-flex items-center text-green-600 text-sm font-semibold group-hover:gap-2 transition-all">
                            Đọc tiếp <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </ScrollReveal>
    );
};

const BlogPreview: React.FC = () => {
    const [featuredPost, ...otherPosts] = blogPosts;

    return (
        <section className="py-20 md:py-28 bg-nude-50">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="fade-in-up" className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <span className="inline-block py-1 px-4 bg-gold-300/30 text-gold-600 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
                            Kiến Thức Làm Đẹp
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-700">
                            Tin Tức & <span className="text-gold-500">Blog</span>
                        </h2>
                    </div>
                    <Link href="/tin-tuc">
                        <Button variant="outline" className="mt-4 md:mt-0 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600">
                            Xem tất cả bài viết
                            <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </Link>
                </ScrollReveal>

                {/* Featured Post */}
                <div className="mb-8">
                    <BlogCard post={featuredPost} index={0} featured />
                </div>

                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
