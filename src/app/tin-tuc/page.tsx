import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import Button from '@/components/Button';
import { getBlogPosts, getBlogCategories, getStrapiMediaUrl } from '@/lib/strapi';
import { BLOG_CATEGORIES as FALLBACK_CATEGORIES, BLOG_POSTS as FALLBACK_POSTS } from '@/lib/data';
import BlogListingContent from './components/BlogListingContent';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Tin Tức Làm Đẹp & Kiến Thức Da Liễu',
  description:
    'Theo dõi xu hướng thẩm mỹ, mẹo chăm sóc da và kiến thức điều trị chuyên sâu từ đội ngũ chuyên gia của Viện Thẩm Mỹ Quang Đăng.',
  alternates: {
    canonical: '/tin-tuc',
  },
};

// Server component that fetches data at build time
async function BlogPage() {
  let blogPosts = FALLBACK_POSTS;
  let blogCategories = FALLBACK_CATEGORIES;

  try {
    // Fetch from Strapi
    const posts = await getBlogPosts();
    const categories = await getBlogCategories();

    // Use Strapi data if available, otherwise fall back to static data
    if (posts && posts.length > 0) {
      blogPosts = posts.map(post => ({
        id: post.documentId || post.id.toString(),
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        coverImage: getStrapiMediaUrl(post.coverImage?.url || ''),
        category: post.category?.slug || 'uncategorized',
        author: {
          id: post.author?.documentId || post.author?.id.toString() || 'unknown',
          name: post.author?.name || 'Anonymous',
          role: 'Beauty Specialist', // Default role as Strapi might not have this
          avatar: getStrapiMediaUrl(post.author?.avatar?.url || '')
        },
        publishedAt: post.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
        readingTime: `${Math.ceil((typeof post.content === 'string' ? post.content.length : JSON.stringify(post.content).length) / 200)} phút đọc`,
        relatedServices: [],
        tags: [],
        content: typeof post.content === 'string' ? post.content : JSON.stringify(post.content)
      }));
    }

    if (categories && categories.length > 0) {
      blogCategories = categories.map(cat => ({
        id: cat.documentId || cat.id.toString(),
        name: cat.name,
        slug: cat.slug
      }));
    }
  } catch (error) {
    console.error('Failed to fetch from Strapi, using fallback data:', error);
    // Fallback to static data is already set above
  }

  // Schema CollectionPage
  const siteUrl = getSiteUrl();
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Tin Tức & Kiến Thức Làm Đẹp",
    "description": "Cập nhật kiến thức chăm sóc da, xu hướng thẩm mỹ mới nhất từ chuyên gia.",
    "url": `${siteUrl}/tin-tuc`,
    "hasPart": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `${siteUrl}/tin-tuc/${post.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-green-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Pass data to client component for interactive filtering and search */}
      <BlogListingContent
        blogPosts={blogPosts}
        blogCategories={blogCategories}
      />

      {/* 4. NEWSLETTER SIGNUP */}
      <section className="bg-nude-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Mail size={48} className="mx-auto text-green-400 mb-6" />
          <h2 className="font-serif text-3xl font-bold mb-4">Đăng Ký Nhận Bản Tin Làm Đẹp</h2>
          <p className="text-nude-200 mb-8 max-w-xl mx-auto">
            Nhận ngay mẹo chăm sóc da, xu hướng thẩm mỹ và ưu đãi độc quyền từ Viện Thẩm Mỹ Quang Đăng gửi trực tiếp vào email của bạn mỗi tuần.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              name="email"
              autoComplete="email"
              aria-label="Email"
              placeholder="Nhập email của bạn"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-green-500"
            />
            <Button variant="primary" className="whitespace-nowrap">Đăng Ký</Button>
          </form>
          <p className="text-xs text-white/30 mt-4">Không spam. Bạn có thể hủy đăng ký bất cứ lúc nào.</p>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
