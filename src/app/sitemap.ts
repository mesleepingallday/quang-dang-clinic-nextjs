import type { MetadataRoute } from 'next';
import { buildAbsoluteUrl } from '@/lib/site';
import { getAllServices } from '@/lib/service-mock-data';
import { BLOG_POSTS as FALLBACK_POSTS } from '@/lib/data';
import { getBlogPosts } from '@/lib/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: buildAbsoluteUrl('/'), lastModified: now },
    { url: buildAbsoluteUrl('/gioi-thieu'), lastModified: now },
    { url: buildAbsoluteUrl('/dich-vu'), lastModified: now },
    { url: buildAbsoluteUrl('/bang-gia'), lastModified: now },
    { url: buildAbsoluteUrl('/tin-tuc'), lastModified: now },
    { url: buildAbsoluteUrl('/dat-lich'), lastModified: now },
    { url: buildAbsoluteUrl('/lien-he'), lastModified: now },
  ];

  const services = getAllServices();
  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: buildAbsoluteUrl(`/dich-vu/${s.slug}`),
    lastModified: now,
  }));

  let posts = FALLBACK_POSTS;
  try {
    const strapiPosts = await getBlogPosts();
    if (Array.isArray(strapiPosts) && strapiPosts.length > 0) {
      posts = strapiPosts.map((p) => ({
        id: p.documentId || p.id.toString(),
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        coverImage: '',
        category: p.category?.slug || 'uncategorized',
        author: {
          id: p.author?.documentId || p.author?.id.toString() || 'unknown',
          name: p.author?.name || 'Anonymous',
          role: p.author?.role || '',
          avatar: '',
        },
        publishedAt: p.publishedAt?.split('T')[0] || now.toISOString().split('T')[0],
        readingTime: '',
        relatedServices: [],
        tags: [],
        content: '',
      }));
    }
  } catch {
    // Fallback already set above.
  }

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: buildAbsoluteUrl(`/tin-tuc/${p.slug}`),
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
