'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Calendar, ArrowRight } from 'lucide-react';

interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: BlogAuthor;
  publishedAt: string;
  readingTime: string;
  relatedServices?: string[];
  tags?: string[];
  content: string;
}

interface BlogListingContentProps {
  blogPosts: BlogPost[];
  blogCategories: BlogCategory[];
}

const BlogListingContent: React.FC<BlogListingContentProps> = ({ blogPosts, blogCategories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPosts[0];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Guard against missing featured post
  if (!featuredPost || blogPosts.length === 0) {
    return (
      <section className="container mx-auto px-4 pb-20">
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No blog posts available. Please check back later.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50 skew-x-12 transform translate-x-32 opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-3 inline-block">Quang Dang Blog</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kiến Thức & Xu Hướng <br /> <span className="italic text-green-600">Thẩm Mỹ Hiện Đại</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Nơi chia sẻ những bí quyết chăm sóc sắc đẹp chuẩn y khoa và cập nhật những công nghệ làm đẹp mới nhất.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                name="q"
                aria-label="Tìm kiếm bài viết"
                placeholder="Tìm kiếm bài viết…"
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      {!searchQuery && activeCategory === 'all' && (
        <section className="container mx-auto px-4 mb-16">
          <Link href={`/tin-tuc/${featuredPost.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={featuredPost.coverImage || 'https://via.placeholder.com/1200x675'}
                alt={featuredPost.title}
                fill
                sizes="(min-width: 768px) 90vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 text-white">
                <div className="flex items-center gap-4 mb-4 text-sm font-medium">
                  <span className="bg-green-600 px-3 py-1 rounded-full uppercase text-xs tracking-wider">Nổi Bật</span>
                  <span className="flex items-center gap-1 opacity-80"><Calendar size={14} /> {featuredPost.publishedAt}</span>
                  <span className="flex items-center gap-1 opacity-80">By {featuredPost.author.name}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 group-hover:text-green-300 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 line-clamp-2 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center text-green-300 font-bold uppercase tracking-wide group-hover:gap-2 transition-[gap]">
                  Đọc ngay <ArrowRight size={18} className="ml-2" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 3. CATEGORY FILTER & GRID */}
      <section className="container mx-auto px-4 pb-20">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-[background-color,color,box-shadow] ${activeCategory === 'all' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-green-50'}`}
            onClick={() => setActiveCategory('all')}
          >
            Tất cả
          </button>
          {blogCategories.map(cat => (
            <button
              key={cat.id}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-[background-color,color,box-shadow] ${activeCategory === cat.slug ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-green-50'}`}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => {
            const categoryName = blogCategories.find(c => c.slug === post.category)?.name || 'Uncategorized';
            return (
              <Link href={`/tin-tuc/${post.slug}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={post.coverImage || 'https://via.placeholder.com/400x300'}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-600 uppercase">
                    {categoryName}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                    {post.author.avatar && (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    )}
                    <div className="text-xs">
                      <p className="font-bold text-gray-800">{post.author.name}</p>
                      <p className="text-gray-500">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Không tìm thấy bài viết nào phù hợp.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default BlogListingContent;
