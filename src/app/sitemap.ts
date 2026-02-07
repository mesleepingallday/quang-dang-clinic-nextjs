import type { MetadataRoute } from 'next';
import { buildAbsoluteUrl } from '@/lib/site';
import { getAllServices } from '@/lib/service-mock-data';
import { BLOG_POSTS as FALLBACK_POSTS } from '@/lib/data';
import { getBlogPosts, getStrapiMediaUrl } from '@/lib/strapi';

function isAbsoluteHttpUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

function escapeXmlText(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toDateMaybe(input: unknown): Date | undefined {
  if (!input) return undefined;
  if (input instanceof Date) return Number.isNaN(input.getTime()) ? undefined : input;

  const date = new Date(String(input));
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function maxDate(dates: Array<Date | undefined>): Date | undefined {
  let max: Date | undefined;
  for (const d of dates) {
    if (!d) continue;
    if (!max || d.getTime() > max.getTime()) max = d;
  }
  return max;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = getAllServices();

  const serviceLastmods = services
    .map((s) => toDateMaybe((s as unknown as { updatedAt?: string }).updatedAt))
    .filter(Boolean);
  const servicesLastModified = maxDate(serviceLastmods);

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => {
    const lastModified =
      toDateMaybe((s as unknown as { updatedAt?: string }).updatedAt) ||
      toDateMaybe((s as unknown as { publishedAt?: string }).publishedAt) ||
      toDateMaybe((s as unknown as { createdAt?: string }).createdAt);

    const heroImage = (s as unknown as { heroImage?: string }).heroImage;
    const images =
      heroImage && isAbsoluteHttpUrl(heroImage)
        ? [escapeXmlText(heroImage)]
        : undefined;

    return {
      url: buildAbsoluteUrl(`/dich-vu/${s.slug}`),
      lastModified,
      ...(images ? { images } : {}),
    };
  });

  let posts: Array<{
    slug: string;
    lastModified?: Date;
    images?: string[];
  }> = FALLBACK_POSTS.map((p) => ({
    slug: p.slug,
    lastModified: toDateMaybe(p.publishedAt),
    images:
      p.coverImage && isAbsoluteHttpUrl(p.coverImage)
        ? [escapeXmlText(p.coverImage)]
        : undefined,
  }));

  try {
    const strapiPosts = await getBlogPosts();
    if (Array.isArray(strapiPosts) && strapiPosts.length > 0) {
      posts = strapiPosts.map((p) => {
        const lastModified = toDateMaybe(p.updatedAt) || toDateMaybe(p.publishedAt);
        const cover = getStrapiMediaUrl(p.coverImage?.url);
        const images = cover && isAbsoluteHttpUrl(cover) ? [escapeXmlText(cover)] : undefined;
        return { slug: p.slug, lastModified, images };
      });
    }
  } catch {
    // Fallback already set above.
  }

  const postsLastModified = maxDate(posts.map((p) => p.lastModified));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: maxDate([servicesLastModified, postsLastModified]),
    },
    {
      url: buildAbsoluteUrl('/gioi-thieu'),
    },
    {
      url: buildAbsoluteUrl('/dich-vu'),
      lastModified: servicesLastModified,
    },
    {
      url: buildAbsoluteUrl('/bang-gia'),
    },
    {
      url: buildAbsoluteUrl('/tin-tuc'),
      lastModified: postsLastModified,
    },
    {
      url: buildAbsoluteUrl('/dat-lich'),
    },
    {
      url: buildAbsoluteUrl('/lien-he'),
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: buildAbsoluteUrl(`/tin-tuc/${p.slug}`),
    lastModified: p.lastModified,
    ...(p.images ? { images: p.images } : {}),
  }));

  const all = [...staticRoutes, ...serviceRoutes, ...blogRoutes];

  // Ensure stable ordering and no duplicates.
  const deduped = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of all) {
    deduped.set(entry.url, entry);
  }

  return Array.from(deduped.values()).sort((a, b) => a.url.localeCompare(b.url));
}
