export const FALLBACK_SITE_URL = 'https://vienthammyquangdang.vn';

function normalizeSiteUrl(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

export function getSiteUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    '';

  if (!envUrl) return FALLBACK_SITE_URL;

  // NEXT_PUBLIC_VERCEL_URL is usually host-only (no protocol)
  if (!/^https?:\/\//i.test(envUrl)) {
    return normalizeSiteUrl(`https://${envUrl}`);
  }

  return normalizeSiteUrl(envUrl);
}

export function buildAbsoluteUrl(pathname: string): string {
  const siteUrl = getSiteUrl();
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${siteUrl}${path}`;
}
