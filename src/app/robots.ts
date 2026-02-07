import type { MetadataRoute } from 'next';
import { buildAbsoluteUrl, getSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    host: getSiteUrl(),
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: buildAbsoluteUrl('/sitemap.xml'),
  };
}
