# Technical Implementation Specification
## Viện Thẩm Mỹ Quang Đăng - Next.js Frontend

**Date:** 2026-02-10
**Author:** Frontend Dev Agent
**Based on:** codex-prompts.md & design-recommendations.md

---

## 1. File Structure

```
/src
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout with fonts
│   ├── globals.css               # Global styles & CSS variables
│   ├── (routes)/
│   │   ├── gioi-thieu/
│   │   ├── dich-vu/
│   │   ├── tin-tuc/
│   │   ├── bang-gia/
│   │   ├── lien-he/
│   │   └── dat-lich/
│   └── api/                      # API routes
├── components/
│   ├── ui/                       # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Accordion.tsx
│   │   ├── Dialog.tsx
│   │   ├── Skeleton.tsx
│   │   └── Toast.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── shared/                   # Shared feature components
│   │   ├── ScrollReveal.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── ComparisonSlider.tsx
│   │   ├── StarRating.tsx
│   │   ├── AvatarStack.tsx
│   │   ├── TrustBadge.tsx
│   │   ├── PriceDisplay.tsx
│   │   ├── CountdownTimer.tsx
│   │   └── VideoPlayer.tsx
│   └── forms/                    # Form components
│       ├── BookingForm.tsx
│       ├── ContactForm.tsx
│       └── NewsletterForm.tsx
├── sections/                     # Page-specific sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── StatsSection.tsx
│   ├── BeforeAfterGallery.tsx
│   ├── TeamSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── BookingCTASection.tsx
│   ├── BrandStory.tsx
│   ├── BlogPreview.tsx
│   ├── LocationContact.tsx
│   └── TrustLogos.tsx
├── hooks/                        # Custom React hooks
│   ├── useScrollPosition.ts
│   ├── useInView.ts
│   ├── useCountUp.ts
│   ├── useMediaQuery.ts
│   ├── useLockBodyScroll.ts
│   └── useReducedMotion.ts
├── lib/                          # Utility functions
│   ├── utils.ts                  # cn() helper
│   ├── animations.ts             # Animation configs
│   ├── constants.ts              # App constants
│   └── data.ts                   # Static data
├── types/                        # TypeScript types
│   └── index.ts
└── styles/                       # Additional styles
    └── animations.css
```

---

## 2. Component Architecture

### 2.1 Reusable UI Components (Primitives)

#### Button Component
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'floating';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
```

#### Card Component
```typescript
interface CardProps {
  variant?: 'default' | 'luxury' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

#### Badge Component
```typescript
interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}
```

### 2.2 Section Components (Page-specific)

#### HeroSection
```typescript
interface HeroSectionProps {
  badge?: string;
  headline: string;
  accentText?: string;
  subtitle: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage: string;
  floatingStats?: StatItem[];
}
```

#### ServicesSection
```typescript
interface ServicesSectionProps {
  title: string;
  subtitle?: string;
  categories: ServiceCategory[];
  services: Service[];
  showFilters?: boolean;
}
```

#### BeforeAfterGallery
```typescript
interface BeforeAfterGalleryProps {
  title: string;
  subtitle?: string;
  cases: BeforeAfterCase[];
  categories: string[];
  enableLightbox?: boolean;
}
```

### 2.3 Shared Components

#### ScrollReveal
```typescript
interface ScrollRevealProps {
  animation?: 'fade-in-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  children: React.ReactNode;
}
```

#### AnimatedCounter
```typescript
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}
```

#### ComparisonSlider
```typescript
interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}
```

---

## 3. Styling Approach

### 3.1 Tailwind Configuration Extensions

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#E8F5EF",
          100: "#C5E8D5",
          200: "#9DD9BB",
          300: "#5CB88F",
          400: "#2F9A6C",
          500: "#0D7351",
          600: "#0A5C41",
          700: "#074530",
          800: "#052E20",
        },
        gold: {
          300: "#E8D5A3",
          400: "#D4AF37",
          500: "#C5A028",
          600: "#B08D1F",
        },
        nude: {
          50: "#FDFCF8",
          100: "#F7F5F0",
          200: "#EBE6DC",
          300: "#DFD8C8",
          800: "#5C5548",
        },
        cream: "#FAF7F2",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      boxShadow: {
        luxury: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'luxury-hover': '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
        glow: '0 0 40px rgba(13, 115, 81, 0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-up': 'scaleUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(13, 115, 81, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(13, 115, 81, 0.5)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', scale: '0.9' },
          '100%': { opacity: '1', scale: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
```

### 3.2 CSS Variables (globals.css)

```css
:root {
  --color-primary: #0D7351;
  --color-primary-dark: #0A5C41;
  --color-primary-light: #2F9A6C;
  --color-gold: #D4AF37;
  --color-gold-dark: #C5A028;
  --color-cream: #FAF7F2;
  --color-nude: #F7F5F0;
  --color-charcoal: #2C2C2C;
  --color-background: #FDFCF8;
  --color-surface: #FFFFFF;
  --color-text-primary: #2C2C2C;
  --color-text-secondary: #6B7280;
  --shadow-luxury: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  --transition-luxury: 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 4. Dependencies

### Core Dependencies
```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "typescript": "^5",
  "tailwindcss": "^4",
  "lucide-react": "^0.562.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.4.0"
}
```

### Additional Dependencies
```bash
npm install framer-motion
npm install embla-carousel-react embla-carousel-autoplay
npm install react-hook-form @hookform/resolvers zod
npm install react-day-picker date-fns
npm install @radix-ui/react-dialog @radix-ui/react-accordion
npm install @radix-ui/react-select @radix-ui/react-toast
```

---

## 5. Performance Considerations

### Image Optimization
```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.strapiapp.com' },
    ],
  },
};
```

### Lazy Loading
```typescript
import dynamic from 'next/dynamic';

const BeforeAfterGallery = dynamic(
  () => import('@/sections/BeforeAfterGallery'),
  { loading: () => <Skeleton className="h-[600px]" />, ssr: false }
);
```

### Performance Budget
| Metric | Target | Maximum |
|--------|--------|---------|
| FCP | < 1.0s | < 1.5s |
| LCP | < 2.0s | < 2.5s |
| TTI | < 3.0s | < 3.8s |
| CLS | < 0.05 | < 0.1 |

---

## 6. Accessibility Requirements

### ARIA Patterns
```typescript
// Accordion
<button aria-expanded={isOpen} aria-controls={`panel-${id}`}>
{title}
</button>
<div role="region" aria-labelledby={`button-${id}`} hidden={!isOpen}>
{content}
</div>
```

### Keyboard Navigation
- Tab navigation for all interactive elements
- Escape key to close modals/menus
- Arrow keys for carousel/slider
- Enter/Space to activate buttons

### Screen Reader Support
```typescript
// Skip to content
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to content
</a>

// Live regions
<div aria-live="polite" aria-atomic="true">
  {notification}
</div>
```

---

## 7. Build/Deployment Notes

### Environment Variables
```bash
NEXT_PUBLIC_API_URL=https://api.quangdangclinic.com
NEXT_PUBLIC_STRAPI_URL=https://cms.quangdangclinic.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Vercel Configuration
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Images optimized
- [ ] Meta tags configured
- [ ] robots.txt and sitemap.xml
- [ ] Analytics tracking
- [ ] Error boundaries
- [ ] 404/500 pages

---

## 8. Implementation Priority

### Phase 1: Foundation (Week 1)
- UI Primitives (Button, Card, Badge, Input)
- Layout components (Header, Footer)
- Animation utilities (ScrollReveal)
- Global styles

### Phase 2: Core Sections (Week 2)
- HeroSection
- ServicesSection
- StatsSection
- BookingCTASection

### Phase 3: Advanced Sections (Week 3)
- BeforeAfterGallery
- TeamSection
- TestimonialsSection
- FAQSection

### Phase 4: Polish (Week 4)
- Mobile optimization
- Performance audit
- Accessibility audit
- Animation refinements

---

**End of Technical Specification**
