# Blog Page Migration - Code Comparison (Before & After)

## Overview
This document shows the key changes made to migrate from static data to dynamic Strapi-powered blog listing.

## 1. Imports Comparison

### BEFORE (Static Data)
```typescript
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Mail } from 'lucide-react';
import Button from '@/components/Button';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/lib/data';  // ❌ Static imports
```

### AFTER (Strapi-Powered)
```typescript
import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import Button from '@/components/Button';
import { getBlogPosts, getBlogCategories, getStrapiMediaUrl } from '@/lib/strapi';  // ✅ Strapi imports
import { BLOG_CATEGORIES as FALLBACK_CATEGORIES, BLOG_POSTS as FALLBACK_POSTS } from '@/lib/data';  // ✅ Fallback
import BlogListingContent from './components/BlogListingContent';  // ✅ Client component
```

**Key Changes**:
- Removed `'use client'` - now a server component
- Removed unused lucide icons (Search, Calendar, User, ArrowRight) from server component
- Added Strapi API imports
- Added fallback data imports
- Added client component import
- Removed direct Mail icon reference (still used in JSX, but imported)

---

## 2. Component Structure Comparison

### BEFORE (Monolithic Client Component)
```typescript
const Blog: React.FC = () => {
  // ❌ All logic in one component
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ❌ Data hardcoded
  const featuredPost = BLOG_POSTS[0];

  // ❌ Filtering done client-side on hardcoded data
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-nude-50">
      {/* All JSX inline */}
    </div>
  );
};

export default Blog;
```

### AFTER (Server Component + Client Component)
```typescript
// FILE 1: page.tsx (Server Component)
async function BlogPage() {
  // ✅ Server-side data fetching
  let blogPosts = FALLBACK_POSTS;
  let blogCategories = FALLBACK_CATEGORIES;

  try {
    const posts = await getBlogPosts();
    const categories = await getBlogCategories();

    // ✅ Data transformation
    if (posts && posts.length > 0) {
      blogPosts = posts.map(post => ({
        // Transform Strapi data to internal format
      }));
    }
  } catch (error) {
    console.error('Failed to fetch from Strapi, using fallback data:', error);
  }

  return (
    <div className="min-h-screen bg-nude-50">
      <BlogListingContent
        blogPosts={blogPosts}
        blogCategories={blogCategories}
      />
      {/* Newsletter section */}
    </div>
  );
}

// FILE 2: components/BlogListingContent.tsx (Client Component)
const BlogListingContent: React.FC<BlogListingContentProps> = ({ blogPosts, blogCategories }) => {
  // ✅ Only client-side state and UI here
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ✅ Filtering on passed data
  const filteredPosts = blogPosts.filter(post => {
    // Same filtering logic as before
  });

  return (
    <>
      {/* Only UI components */}
    </>
  );
};
```

**Key Changes**:
- Separated concerns: server (data) vs client (UI + interaction)
- Moved data fetching to server
- Moved schema.org structure to server component
- Kept all UI in client component (separate file)
- Cleaner component responsibilities

---

## 3. Data Fetching Comparison

### BEFORE (No Data Fetching)
```typescript
// ❌ Data hardcoded at import time
const featuredPost = BLOG_POSTS[0];

const filteredPosts = BLOG_POSTS.filter(post => {
  // Filtering on static array
  const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
  const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  return matchesCategory && matchesSearch;
});
```

### AFTER (Dynamic Strapi Fetching)
```typescript
// ✅ Async data fetching with error handling
try {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  if (posts && posts.length > 0) {
    blogPosts = posts.map(post => ({
      id: post.documentId || post.id.toString(),
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: getStrapiMediaUrl(post.coverImage?.url || ''),  // ✅ Full URL conversion
      category: post.category?.slug || 'uncategorized',
      author: {
        id: post.author?.documentId || post.author?.id.toString() || 'unknown',
        name: post.author?.name || 'Anonymous',
        role: 'Beauty Specialist',  // ✅ Default value
        avatar: getStrapiMediaUrl(post.author?.avatar?.url || '')  // ✅ Full URL
      },
      publishedAt: post.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
      readingTime: `${Math.ceil((post.content?.length || 0) / 200)} phút đọc`,  // ✅ Calculated
      relatedServices: [],
      tags: [],
      content: post.content || ''
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
  // Fallback to static data already initialized above
}
```

**Key Improvements**:
- Fetches from live API instead of hardcoded data
- Maps Strapi field names to internal format
- Converts relative URLs to absolute URLs
- Provides sensible defaults for missing data
- Graceful error handling with fallback
- Calculated reading time instead of hardcoded

---

## 4. Featured Post Rendering Comparison

### BEFORE (Inline in same component)
```typescript
const featuredPost = BLOG_POSTS[0];

return (
  <div className="min-h-screen bg-nude-50">
    {/* ... other JSX ... */}

    {!searchQuery && activeCategory === 'all' && (
      <section className="container mx-auto px-4 mb-16">
        <Link href={`/tin-tuc/${featuredPost.slug}`} className="group block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* More JSX... */}
          </div>
        </Link>
      </section>
    )}
  </div>
);
```

### AFTER (Moved to client component)
```typescript
// BlogListingContent.tsx
const featuredPost = blogPosts[0];  // Received from server

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
    {!searchQuery && activeCategory === 'all' && (
      <section className="container mx-auto px-4 mb-16">
        <Link href={`/tin-tuc/${featuredPost.slug}`} className="group block">
          {/* Same JSX as before, but with better error handling */}
        </Link>
      </section>
    )}
  </>
);
```

**Improvements**:
- Safe access to data (passed as prop)
- Error handling for missing data
- No breaking if blogPosts is empty

---

## 5. Blog Post Grid Rendering Comparison

### BEFORE (Using hardcoded data)
```typescript
{filteredPosts.map(post => (
  <Link href={`/tin-tuc/${post.slug}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gold-600 uppercase">
        {BLOG_CATEGORIES.find(c => c.slug === post.category)?.name}  // ❌ Direct array lookup
      </div>
    </div>
    {/* ... more JSX ... */}
  </Link>
))}
```

### AFTER (Using passed data with safety checks)
```typescript
{filteredPosts.map(post => {
  const categoryName = blogCategories.find(c => c.slug === post.category)?.name || 'Uncategorized';  // ✅ Default value
  return (
    <Link href={`/tin-tuc/${post.slug}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={post.coverImage || 'https://via.placeholder.com/400x300'}  // ✅ Placeholder fallback
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gold-600 uppercase">
          {categoryName}  // ✅ Pre-calculated with default
        </div>
      </div>
      {/* ... more JSX, with null checks for avatar ... */}
      {post.author.avatar && (  // ✅ Safe conditional render
        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
      )}
      {/* ... rest of JSX ... */}
    </Link>
  );
})}
```

**Safety Improvements**:
- Category lookup with fallback value
- Cover image placeholder for missing images
- Conditional rendering for optional images
- No assumptions about data structure

---

## 6. Schema.org Structured Data Comparison

### BEFORE (Using hardcoded data)
```typescript
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Tin Tức & Kiến Thức Làm Đẹp",
  "description": "Cập nhật kiến thức chăm sóc da, xu hướng thẩm mỹ mới nhất từ chuyên gia.",
  "url": "https://quangdang.vn/tin-tuc",
  "hasPart": filteredPosts.map(post => ({  // ❌ Filtered list only
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `https://quangdang.vn/tin-tuc/${post.slug}`
  }))
};
```

### AFTER (Using all posts from Strapi)
```typescript
const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Tin Tức & Kiến Thức Làm Đẹp",
  "description": "Cập nhật kiến thức chăm sóc da, xu hướng thẩm mỹ mới nhất từ chuyên gia.",
  "url": "https://quangdang.vn/tin-tuc",
  "hasPart": blogPosts.map(post => ({  // ✅ All posts for SEO
    "@type": "BlogPosting",
    "headline": post.title,
    "url": `https://quangdang.vn/tin-tuc/${post.slug}`
  }))
};
```

**SEO Improvement**:
- Schema includes all posts, not just filtered ones
- Better for search engine indexing
- More complete structured data

---

## 7. Error Handling Comparison

### BEFORE (No error handling)
```typescript
// ❌ No try-catch, assumes data always exists
const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = BLOG_POSTS[0];  // ❌ Could be undefined
  const filteredPosts = BLOG_POSTS.filter(...);  // ❌ If BLOG_POSTS is empty, fails

  // No error boundaries, no fallbacks
};
```

### AFTER (Comprehensive error handling)
```typescript
// ✅ Try-catch for API failures
try {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

  if (posts && posts.length > 0) {
    blogPosts = posts.map(post => ({ /* transformation */ }));
  }

  if (categories && categories.length > 0) {
    blogCategories = categories.map(cat => ({ /* transformation */ }));
  }
} catch (error) {
  console.error('Failed to fetch from Strapi, using fallback data:', error);
  // Fallback to static data already set above
}

// ✅ In component, guard against missing data
if (!featuredPost || blogPosts.length === 0) {
  return (
    <section>
      <p>No blog posts available...</p>
    </section>
  );
}

// ✅ Conditional rendering for optional fields
{post.author.avatar && (
  <img src={post.author.avatar} alt={post.author.name} />
)}
```

**Safety Improvements**:
- API errors don't crash the site
- Graceful fallback to static data
- Guards against undefined/null data
- User-friendly error messages

---

## Summary of Changes

| Aspect | Before | After |
|--------|--------|-------|
| **Data Source** | Static imports | Dynamic Strapi API |
| **Component Type** | Client component | Server + Client components |
| **Data Fetching** | Hardcoded | Async at build time |
| **Error Handling** | None | Try-catch with fallback |
| **Image URLs** | Relative paths | Full absolute URLs |
| **Rendering** | All in one component | Separated concerns |
| **Filtering** | Client-side only | Server prep + client filter |
| **Schema.org** | Filtered posts only | All posts |
| **Missing Data** | No defaults | Safe defaults |
| **Type Safety** | Basic | Enhanced with guards |
| **ISR Support** | N/A | 60-second revalidation |

---

## Benefits of Migration

1. ✅ **Live Content Updates** - Changes in Strapi appear without redeployment
2. ✅ **ISR Support** - Automatic cache invalidation every 60 seconds
3. ✅ **Better SEO** - All posts in schema, better structured data
4. ✅ **Scalability** - Can add unlimited posts without code changes
5. ✅ **Maintainability** - Single source of truth (Strapi CMS)
6. ✅ **Reliability** - Fallback mechanism prevents site breaks
7. ✅ **Better UX** - Placeholder images for missing content
8. ✅ **Type Safety** - Proper TypeScript interfaces and guards
