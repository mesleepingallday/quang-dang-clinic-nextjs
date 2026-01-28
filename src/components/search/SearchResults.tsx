'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, FileText, ArrowRight } from 'lucide-react';
import { SearchResults as SearchResultsType } from '@/lib/searchIndex';
import { highlightMatch } from '@/lib/searchIndex';

interface SearchResultsProps {
    results: SearchResultsType;
    query: string;
    onResultClick: () => void;
}

/**
 * Search results grouped by type (Services, Blog Posts)
 * with keyword highlighting
 */
const SearchResults: React.FC<SearchResultsProps> = ({ results, query, onResultClick }) => {
    const { services, blogPosts } = results;
    const hasServices = services.length > 0;
    const hasBlogPosts = blogPosts.length > 0;

    if (!hasServices && !hasBlogPosts) {
        return (
            <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText size={24} className="text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">Không tìm thấy kết quả</p>
                <p className="text-sm text-gray-400 mt-1">Thử tìm kiếm với từ khóa khác</p>
            </div>
        );
    }

    return (
        <div className="max-h-[400px] overflow-y-auto">
            {/* Services Section */}
            {hasServices && (
                <div className="p-3">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <Sparkles size={14} />
                        <span>Dịch vụ</span>
                        <span className="ml-auto text-green-500">{services.length}</span>
                    </div>

                    <div className="space-y-1 mt-2">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`/dich-vu/${service.slug}`}
                                onClick={onResultClick}
                                className="
                  flex items-center gap-3 p-3 rounded-xl
                  hover:bg-green-50 transition-colors duration-200
                  group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
                "
                            >
                                {/* Service Image */}
                                {service.image && (
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                )}

                                {/* Service Info */}
                                <div className="flex-1 min-w-0">
                                    <h4
                                        className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors truncate"
                                        dangerouslySetInnerHTML={{ __html: highlightMatch(service.name, query) }}
                                    />
                                    <p
                                        className="text-sm text-gray-500 line-clamp-1"
                                        dangerouslySetInnerHTML={{ __html: highlightMatch(service.description, query) }}
                                    />
                                </div>

                                {/* Arrow */}
                                <ArrowRight
                                    size={16}
                                    className="text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all shrink-0"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* View all services link */}
                    <Link
                        href="/dich-vu"
                        onClick={onResultClick}
                        className="
              flex items-center justify-center gap-2 mt-2 py-2
              text-sm font-semibold text-green-600 hover:text-green-700
              hover:bg-green-50 rounded-lg transition-colors
            "
                    >
                        Xem tất cả dịch vụ
                        <ArrowRight size={14} />
                    </Link>
                </div>
            )}

            {/* Divider */}
            {hasServices && hasBlogPosts && (
                <div className="border-t border-gray-100 mx-3" />
            )}

            {/* Blog Posts Section */}
            {hasBlogPosts && (
                <div className="p-3">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        <FileText size={14} />
                        <span>Bài viết</span>
                        <span className="ml-auto text-green-500">{blogPosts.length}</span>
                    </div>

                    <div className="space-y-1 mt-2">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/tin-tuc/${post.slug}`}
                                onClick={onResultClick}
                                className="
                  flex items-center gap-3 p-3 rounded-xl
                  hover:bg-green-50 transition-colors duration-200
                  group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
                "
                            >
                                {/* Post Image */}
                                {post.coverImage && (
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                )}

                                {/* Post Info */}
                                <div className="flex-1 min-w-0">
                                    <h4
                                        className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors truncate"
                                        dangerouslySetInnerHTML={{ __html: highlightMatch(post.title, query) }}
                                    />
                                    <p
                                        className="text-sm text-gray-500 line-clamp-1"
                                        dangerouslySetInnerHTML={{ __html: highlightMatch(post.excerpt, query) }}
                                    />
                                </div>

                                {/* Arrow */}
                                <ArrowRight
                                    size={16}
                                    className="text-gray-300 group-hover:text-green-500 group-hover:translate-x-1 transition-all shrink-0"
                                />
                            </Link>
                        ))}
                    </div>

                    {/* View all posts link */}
                    <Link
                        href="/tin-tuc"
                        onClick={onResultClick}
                        className="
              flex items-center justify-center gap-2 mt-2 py-2
              text-sm font-semibold text-green-600 hover:text-green-700
              hover:bg-green-50 rounded-lg transition-colors
            "
                    >
                        Xem tất cả bài viết
                        <ArrowRight size={14} />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
