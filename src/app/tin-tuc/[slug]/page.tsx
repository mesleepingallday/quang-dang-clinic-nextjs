import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ChevronRight, Clock } from 'lucide-react';
import Button from '@/components/Button';
import BookingForm from '@/components/BookingForm';
import RichText from '@/components/RichText';
import ScrollProgress from '@/components/ScrollProgress';
import { getBlogPostBySlug, getBlogPosts, getStrapiMediaUrl } from '@/lib/strapi';
import { BLOG_CATEGORIES, SERVICES } from '@/lib/data';

interface BlogPostDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export const revalidate = 3600; // ISR: revalidate every hour

export default async function BlogPostDetail({ params }: BlogPostDetailPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getBlogPostBySlug(slug);
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    notFound();
  }

  if (!post) {
    notFound();
  }

  // Fetch all posts for related posts
  let relatedPosts: typeof post[] = [];
  try {
    const allPosts = await getBlogPosts();
    relatedPosts = allPosts
      .filter(
        (p) =>
          p.category?.slug === post.category?.slug &&
          p.id !== post.id
      )
      .slice(0, 2);
  } catch (error) {
    console.error('Failed to fetch related posts:', error);
  }

  // Schema BlogPosting
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": getStrapiMediaUrl(post.coverImage?.url),
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Viện Thẩm Mỹ Quang Đăng",
      "jobTitle": post.author?.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Viện Thẩm Mỹ Quang Đăng",
      "logo": {
        "@type": "ImageObject",
        "url": "https://quangdang.vn/quang-dang-logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "description": post.excerpt
  };

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <ScrollProgress />

      {/* 1. HERO HEADER */}
      <div className="pt-32 pb-12 bg-green-50 border-b border-green-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-bold uppercase tracking-wide mb-4">
            <Link href="/tin-tuc" className="hover:underline">Blog</Link>
            <ChevronRight size={14} />
            <span>{BLOG_CATEGORIES.find(c => c.slug === post.category?.slug)?.name}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              {post.author?.avatar?.url && (
                <Image
                  src={getStrapiMediaUrl(post.author.avatar.url)}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="font-medium text-gray-900">
                {post.author?.name || "Viện Thẩm Mỹ Quang Đăng"}
              </span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readingTime} min</span>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT: MAIN CONTENT */}
          <div className="lg:w-2/3">
            {/* Cover Image */}
            {post.coverImage?.url && (
              <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
                <Image
                  src={getStrapiMediaUrl(post.coverImage.url)}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Introduction */}
            <p className="text-xl text-gray-700 font-serif italic border-l-4 border-green-500 pl-6 mb-10 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Dynamic Content */}
            <RichText content={post.content} />

            {/* In-Article CTA */}
            <div className="my-12 bg-green-50 p-8 rounded-2xl text-center border border-green-200">
              <h3 className="font-serif text-2xl font-bold mb-4">Bạn Đang Gặp Vấn Đề Về Da?</h3>
              <p className="mb-6">Đừng để tình trạng kéo dài. Hãy để chuyên gia của chúng tôi tư vấn miễn phí cho bạn.</p>
              <Button asChild>
                <Link href="/dat-lich">Đặt Lịch Soi Da Ngay</Link>
              </Button>
            </div>

            {/* Author Box */}
            {post.author && (
              <div className="flex items-start gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-12">
                {post.author.avatar?.url && (
                  <Image
                    src={getStrapiMediaUrl(post.author.avatar.url)}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
                  />
                )}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">
                    {post.author.name}
                  </h4>
                  {post.author.role && (
                    <p className="text-green-600 text-sm font-bold uppercase mb-3">
                      {post.author.role}
                    </p>
                  )}
                  {post.author.bio && (
                    <p className="text-sm text-gray-600">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Comments Section (Placeholder) */}
            <div className="mt-12 pt-12 border-t border-gray-100">
              <h3 className="font-serif text-2xl font-bold mb-6">Bình luận</h3>
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <p className="text-gray-500 mb-4">Bạn cần đăng nhập để bình luận.</p>
                <Button variant="outline" className="text-sm py-2">Đăng nhập</Button>
              </div>
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">

              {/* Table of Contents */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Mục lục bài viết</h4>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block text-sm hover:text-green-600 transition-colors ${item.level === 2 ? 'font-medium text-gray-800' : 'pl-4 text-gray-600'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                          document.getElementById(item.id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
                        }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Services */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="bg-green-600 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <h4 className="font-serif text-xl font-bold mb-4 relative z-10">Dịch Vụ Liên Quan</h4>
                  <div className="space-y-4 relative z-10">
                    {post.relatedServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/dich-vu/${service.slug}`}
                        className="flex items-center gap-3 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        {service.image?.url && (
                          <Image
                            src={getStrapiMediaUrl(service.image.url)}
                            alt={service.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded object-cover"
                          />
                        )}
                        <div className="text-sm font-bold leading-tight">{service.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Widget */}
              <BookingForm title="Đăng Ký Tư Vấn" subtitle="Để lại thông tin, chúng tôi sẽ gọi lại ngay." />

            </div>
          </div>

        </div>

        {/* RELATED POSTS BOTTOM */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8">Bài Viết Liên Quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <Link href={`/tin-tuc/${p.slug}`} key={p.id} className="group">
                  {p.coverImage?.url && (
                    <div className="rounded-xl overflow-hidden mb-4 aspect-video relative">
                      <Image
                        src={getStrapiMediaUrl(p.coverImage.url)}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Calendar size={12} /> {new Date(p.publishedAt).toLocaleDateString('vi-VN')}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
