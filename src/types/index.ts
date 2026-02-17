
export interface SubService {
  name: string;
  price: number;
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  link: string;
  featured?: boolean;
  benefits?: string[];
  category?: string; // category ID for filtering
  priceFrom?: number | null; // minimum price for display
  duration?: string;
  subServices?: SubService[]; // detailed pricing from Excel
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string; // New: Icon name for the menu
  description?: string; // New: Brief description for the menu
  children?: NavItem[];
}

export interface PriceItem {
  name: string;
  price: string;
  duration: string;
  description: string;
}

// New interfaces for Detailed Pages
export interface ProcessStep {
  title: string;
  desc: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceDetailData {
  id: string;
  slug: string;
  title: string;
  category: string; // e.g., 'FACIAL SPA', 'CÔNG NGHỆ CAO'
  heroImage: string;
  shortDesc: string;
  introTitle: string;
  introDesc: string[]; // Multiple paragraphs
  benefits: string[];
  process: ProcessStep[];
  pricing: PriceItem[];
  faqs: FAQ[];
  promotion: {
    discount: string;
    note: string;
  };
}

// --- BLOG & NEWS SYSTEM ---

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string; // references BlogCategory slug
  author: Author;
  publishedAt: string;
  readingTime: string; // e.g., "5 phút đọc"
  content: string; // HTML string or Rich Text
  toc?: TableOfContentsItem[];
  tags: string[];
  relatedServices?: string[]; // references Service IDs for cross-selling
}

// --- HOMEPAGE NEW SECTIONS ---

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  specialization: string;
  experience: string;
  bio: string;
  certifications: string[];
}

export interface BeforeAfterCase {
  id: string;
  treatmentType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  duration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface TrustLogo {
  id: string;
  name: string;
  logo: string;
  description?: string;
}

// --- STRAPI RESPONSE TYPES ---

// Strapi Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiData<T> {
  id: number;
  documentId: string;
  attributes?: T;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale?: string;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

export interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
}

// Strapi Content Types
export interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: StrapiRichText[];
  coverImage: StrapiMedia | null;
  author: StrapiAuthor | null;
  category: StrapiBlogCategory | null;
  tags: string[];
  readingTime: string;
  featured: boolean;
  seo?: StrapiSEO;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface StrapiAuthor {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  role: string;
  avatar: StrapiMedia | null;
  bio: StrapiRichText[];
  email: string;
}

export interface StrapiBlogCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
}

export interface StrapiService {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  heroImage: StrapiMedia | null;
  thumbnailImage: StrapiMedia | null;
  introTitle: string;
  introDescription: StrapiRichText[];
  benefits: StrapiBenefit[];
  processSteps: StrapiProcessStep[];
  pricing: StrapiPricingTier[];
  faqs: StrapiFAQ[];
  promotion: StrapiPromotion | null;
  beforeAfterGallery: StrapiBeforeAfter[];
  seo?: StrapiSEO;
  featured: boolean;
  order: number;
}

export interface StrapiTestimonial {
  id: number;
  documentId: string;
  customerName: string;
  service: string;
  content: string;
  avatar: StrapiMedia | null;
  rating: number;
  featured: boolean;
  order: number;
}

export interface StrapiPriceCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  pricingItems: StrapiPricingItem[];
  order: number;
}

// Component Types
export interface StrapiRichText {
  type: string;
  children: { type: string; text: string }[];
}

export interface StrapiBenefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface StrapiProcessStep {
  id: number;
  stepNumber: number;
  title: string;
  description: StrapiRichText[];
  image: StrapiMedia | null;
  duration: string;
}

export interface StrapiPricingTier {
  id: number;
  name: string;
  price: number;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  recommended: boolean;
}

export interface StrapiFAQ {
  id: number;
  question: string;
  answer: StrapiRichText[];
  order: number;
}

export interface StrapiPromotion {
  id: number;
  title: string;
  discount: string;
  description: StrapiRichText[];
  validFrom: string;
  validUntil: string;
  termsConditions: StrapiRichText[];
  code: string;
}

export interface StrapiBeforeAfter {
  id: number;
  title: string;
  beforeImage: StrapiMedia;
  afterImage: StrapiMedia;
  description: string;
  treatmentUsed: string;
  duration: string;
}

export interface StrapiPricingItem {
  id: number;
  name: string;
  price: number;
  currency: string;
  unit: string;
  description: string;
}

export interface StrapiSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalURL: string;
  metaRobots: string;
  structuredData: object;
  metaImage: StrapiMedia | null;
}

// ============================================================================
// SERVICE DETAIL PAGE - NEW INTERFACES (Enhanced)
// ============================================================================

export interface ServicePricingTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
}

export interface ServiceProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  image?: string;
  duration?: string;
  icon?: string;
}

export interface ServiceFAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
  category?: string;
}

export interface ServiceTestimonial {
  id: string;
  customerName: string;
  avatar?: string;
  rating: number;
  content: string;
  serviceUsed: string;
  date: string;
  isVerified?: boolean;
  age?: number;
  skinType?: string;
  resultDuration?: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  treatmentDuration: string;
  customerAge?: number;
  results: string[];
}

export interface RelatedService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  priceFrom?: number;
  duration?: string;
  category: string;
}

export interface ServicePromotion {
  id: string;
  discountPercent?: number;
  discountAmount?: number;
  code: string;
  title: string;
  description: string;
  validFrom: string;
  validUntil: string;
  termsConditions: string[];
  isActive: boolean;
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailComplete {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  heroImage: string;
  heroVideo?: string;
  shortDescription: string;
  longDescription: string;
  introTitle: string;
  introParagraphs: string[];
  benefits: ServiceBenefit[];
  pricingTiers: ServicePricingTier[];
  pricingNote?: string;
  processSteps: ServiceProcessStep[];
  beforeAfterGallery: BeforeAfterImage[];
  faqs: ServiceFAQ[];
  testimonials: ServiceTestimonial[];
  relatedServices: RelatedService[];
  promotion?: ServicePromotion;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    structuredData: object;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// ============================================================================
// BOOKING SYSTEM
// ============================================================================

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date?: string;
  timeSlot?: string;
  note?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
  error?: string;
}
