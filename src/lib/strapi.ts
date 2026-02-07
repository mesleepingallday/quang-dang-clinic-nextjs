/**
 * Strapi API Client for Next.js Frontend
 * Handles all communication with the Strapi CMS backend
 * Implements ISR revalidation and proper TypeScript typing
 */

const ENV_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const IS_DEV = process.env.NODE_ENV !== 'production';
const IS_BUILD_PHASE =
  process.env.NEXT_PHASE === 'phase-production-build' ||
  process.env.NEXT_PHASE === 'phase-export';

const STRAPI_URL = (() => {
  if (!ENV_STRAPI_URL) {
    return IS_DEV ? 'http://localhost:1337' : '';
  }

  // Avoid treating localhost as a valid Strapi in production build.
  if (IS_BUILD_PHASE && /localhost|127\.0\.0\.1/.test(ENV_STRAPI_URL)) {
    return '';
  }

  return ENV_STRAPI_URL.replace(/\/$/, '');
})();

let warnedStrapiDisabled = false;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    small?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    medium?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
    large?: {
      name: string;
      hash: string;
      ext: string;
      mime: string;
      path: string | null;
      width: number;
      height: number;
      size: number;
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogAuthor {
  id: number;
  documentId: string;
  name: string;
  email: string;
  role?: string;
  bio?: string;
  avatar?: StrapiImage;
  createdAt: string;
  updatedAt: string;
}

export interface BlogCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface RelatedService {
  id: number;
  slug: string;
  name: string;
  image?: StrapiImage;
}

export interface RichTextBlock {
  type: string;
  children: Array<{
    type: string;
    text?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
    url?: string;
    children?: unknown[];
  }>;
  level?: number;
  format?: string;
  image?: {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
  };
}

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: RichTextBlock[] | string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  readingTime?: number;
  author?: BlogAuthor;
  category?: BlogCategory;
  coverImage?: StrapiImage;
  tableOfContents?: TableOfContentsItem[];
  relatedServices?: RelatedService[];
}

export interface Service {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  details?: string;
  icon?: string;
  image?: StrapiImage;
  createdAt: string;
  updatedAt: string;
  components?: Record<string, unknown>;
}

export interface PricingItem {
  id: number;
  documentId: string;
  name: string;
  price: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PriceCategory {
  id: number;
  documentId: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  pricingItems?: PricingItem[];
}

export interface Testimonial {
  id: number;
  documentId: string;
  clientName: string;
  content: string;
  rating: number;
  service?: string;
  createdAt: string;
  updatedAt: string;
  clientImage?: StrapiImage;
}

export interface StrapiResponse<T> {
  data: T | null;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// ============================================================================
// QUERY BUILDER
// ============================================================================

interface QueryOptions {
  populate?: string | string[];
  filters?: Record<string, unknown>;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
  locale?: string;
  status?: 'published' | 'draft';
}

/**
 * Builds a query string for Strapi API requests
 * Handles populate, filters, sort, and pagination parameters
 */
function buildQueryString(options: QueryOptions): string {
  const params = new URLSearchParams();

  // Handle populate
  if (options.populate) {
    const populateArray = Array.isArray(options.populate)
      ? options.populate
      : [options.populate];
    populateArray.forEach((p) => {
      params.append('populate', p);
    });
  }

  // Handle filters - flatten to Strapi v5 format
  if (options.filters) {
    const flattenFilters = (obj: Record<string, unknown>, prefix = 'filters'): void => {
      for (const [key, value] of Object.entries(obj)) {
        const newKey = `${prefix}[${key}]`;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          flattenFilters(value as Record<string, unknown>, newKey);
        } else {
          params.append(newKey, String(value));
        }
      }
    };
    flattenFilters(options.filters);
  }

  // Handle sort
  if (options.sort) {
    const sortArray = Array.isArray(options.sort)
      ? options.sort
      : [options.sort];
    sortArray.forEach((s) => {
      params.append('sort', s);
    });
  }

  // Handle pagination
  if (options.pagination) {
    if (options.pagination.page !== undefined) {
      params.append('pagination[page]', options.pagination.page.toString());
    }
    if (options.pagination.pageSize !== undefined) {
      params.append(
        'pagination[pageSize]',
        options.pagination.pageSize.toString()
      );
    }
  }

  // Handle locale
  if (options.locale) {
    params.append('locale', options.locale);
  }

  // Handle status
  if (options.status) {
    params.append('status', options.status);
  }

  const queryString = params.toString();
  return queryString ? `?${queryString}` : '';
}

// ============================================================================
// BASE FETCH FUNCTION
// ============================================================================

/**
 * Base fetch function with ISR revalidation support
 * All Strapi API requests go through this function
 */
async function fetchFromStrapi<T>(
  endpoint: string,
  options?: QueryOptions
): Promise<T> {
  if (!STRAPI_URL) {
    if (!warnedStrapiDisabled) {
      warnedStrapiDisabled = true;
      console.warn(
        'Strapi is disabled (missing/invalid NEXT_PUBLIC_STRAPI_URL). Returning empty data for:',
        endpoint
      );
    }

    // All call sites in this repo expect StrapiResponse<T>; provide a safe empty shape.
    return { data: null } as T;
  }

  const queryString = buildQueryString(options || {});
  const url = `${STRAPI_URL}/api${endpoint}${queryString}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60, // ISR revalidation every 60 seconds
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Strapi API Error: ${response.status} ${response.statusText}`
      );
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.error(`Failed to fetch from Strapi: ${endpoint}`, error);
    throw error;
  }
}

// ============================================================================
// MEDIA URL HELPER
// ============================================================================

/**
 * Converts Strapi media paths to full URLs
 * Handles both relative paths and already-absolute URLs
 */
export function getStrapiMediaUrl(url: string | null | undefined): string {
  if (!url) return '';

  // If URL is already absolute, return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If URL is relative, prepend Strapi base URL
  if (url.startsWith('/')) {
    return `${STRAPI_URL}${url}`;
  }

  // Fallback: treat as relative path without leading slash
  return `${STRAPI_URL}/${url}`;
}

// ============================================================================
// BLOG POST FETCHERS
// ============================================================================

/**
 * Fetch all blog posts with author, category, and cover image
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetchFromStrapi<StrapiResponse<BlogPost[]>>(
    '/blog-posts',
    {
      populate: ['author', 'category', 'coverImage'],
      sort: ['publishedAt:desc'],
      pagination: {
        pageSize: 100,
      },
      status: 'published',
    }
  );

  return response.data || [];
}

/**
 * Fetch a single blog post by slug with full population
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetchFromStrapi<StrapiResponse<BlogPost[]>>(
    '/blog-posts',
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['author', 'category', 'coverImage'],
      status: 'published',
    }
  );

  const posts = response.data;
  if (Array.isArray(posts) && posts.length > 0) {
    return posts[0];
  }

  return null;
}

/**
 * Fetch all blog categories
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const response = await fetchFromStrapi<StrapiResponse<BlogCategory[]>>(
    '/blog-categories',
    {
      pagination: {
        pageSize: 100,
      },
      sort: ['name:asc'],
    }
  );

  return response.data || [];
}

// ============================================================================
// SERVICE FETCHERS
// ============================================================================

/**
 * Fetch all services with their components
 */
export async function getServices(): Promise<Service[]> {
  const response = await fetchFromStrapi<StrapiResponse<Service[]>>(
    '/services',
    {
      populate: ['image'],
      pagination: {
        pageSize: 100,
      },
      sort: ['name:asc'],
    }
  );

  return response.data || [];
}

/**
 * Fetch a single service by slug with full population
 */
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const response = await fetchFromStrapi<StrapiResponse<Service[]>>(
    '/services',
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ['image'],
    }
  );

  const services = response.data;
  if (Array.isArray(services) && services.length > 0) {
    return services[0];
  }

  return null;
}

// ============================================================================
// TESTIMONIAL FETCHERS
// ============================================================================

/**
 * Fetch all testimonials with client image
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await fetchFromStrapi<StrapiResponse<Testimonial[]>>(
    '/testimonials',
    {
      populate: ['clientImage'],
      pagination: {
        pageSize: 100,
      },
      sort: ['createdAt:desc'],
    }
  );

  return response.data || [];
}

// ============================================================================
// PRICING FETCHERS
// ============================================================================

/**
 * Fetch all price categories with pricing items
 */
export async function getPriceCategories(): Promise<PriceCategory[]> {
  const response = await fetchFromStrapi<StrapiResponse<PriceCategory[]>>(
    '/price-categories',
    {
      populate: ['pricingItems'],
      pagination: {
        pageSize: 100,
      },
      sort: ['name:asc'],
    }
  );

  return response.data || [];
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get the current Strapi API base URL
 * Useful for debugging and configuration checking
 */
export function getStrapiUrl(): string {
  return STRAPI_URL;
}

/**
 * Prefetch data for ISR optimization
 * Call this in getStaticProps or build-time data fetching
 */
export async function prefetchBlogPosts(): Promise<void> {
  try {
    await getBlogPosts();
  } catch (error) {
    console.error('Failed to prefetch blog posts:', error);
  }
}

export async function prefetchServices(): Promise<void> {
  try {
    await getServices();
  } catch (error) {
    console.error('Failed to prefetch services:', error);
  }
}

export async function prefetchTestimonials(): Promise<void> {
  try {
    await getTestimonials();
  } catch (error) {
    console.error('Failed to prefetch testimonials:', error);
  }
}

export async function prefetchPriceCategories(): Promise<void> {
  try {
    await getPriceCategories();
  } catch (error) {
    console.error('Failed to prefetch price categories:', error);
  }
}
