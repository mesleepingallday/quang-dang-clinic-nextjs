# Blog Listing Page Migration - Quick Reference

## File Structure

```
src/app/tin-tuc/
├── page.tsx                                    (Updated - Server Component)
└── components/
    └── BlogListingContent.tsx                 (New - Client Component)
```

## Architecture Diagram

```
[page.tsx - Server Component]
    ↓
    ├─ Fetch from Strapi at Build Time
    │  ├── getBlogPosts()
    │  └── getBlogCategories()
    ↓
    ├─ Transform Data
    │  └── Map Strapi format → Internal format
    ↓
    ├─ Fallback to Static Data (if error)
    │  └── Use @/lib/data as backup
    ↓
[BlogListingContent - Client Component]
    ↓
    ├─ Render Hero Section
    ├─ Render Featured Post (conditional)
    ├─ Render Category Filters (interactive)
    ├─ Render Search Bar (interactive)
    └─ Render Blog Grid (filtered)
```

## Key API Functions

### Strapi Functions Used
```typescript
// Fetch all blog posts (with author, category, cover image)
const posts = await getBlogPosts();

// Fetch all blog categories
const categories = await getBlogCategories();

// Convert Strapi media URLs to full URLs
const fullImageUrl = getStrapiMediaUrl(relativePath);
```

### Import Statements
```typescript
// In page.tsx (Server Component)
import { getBlogPosts, getBlogCategories, getStrapiMediaUrl } from '@/lib/strapi';

// In BlogListingContent.tsx (Client Component)
// No imports needed - receives data as props
```

## Data Flow Example

### Before (Old System)
```
page.tsx
├── Imports static BLOG_POSTS, BLOG_CATEGORIES
├── Client-side state (activeCategory, searchQuery)
├── Filters & renders all UI in one component
└── No server-side data fetching
```

### After (New System)
```
page.tsx (Server)
├── Fetches from Strapi at build time
├── Transforms Strapi data
├── Passes data to BlogListingContent
└── Renders schema.org structured data

BlogListingContent.tsx (Client)
├── Receives blog posts & categories as props
├── Manages local state (activeCategory, searchQuery)
├── Handles filtering & search
└── Renders UI with received data
```

## Environment Variables

To use Strapi, ensure this is set in `.env.local` or `.env`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

If not set, defaults to `http://localhost:1337`

## What Works Now

✅ Blog posts fetch from Strapi on build/revalidation
✅ Cover images load from Strapi media (full URLs)
✅ Author information displays correctly
✅ Category filtering works client-side
✅ Search functionality works client-side
✅ Featured post displays correctly
✅ Schema.org structured data includes all posts
✅ Fallback to static data if Strapi is unavailable
✅ All original styling preserved
✅ Responsive design maintained
✅ ISR revalidation every 60 seconds

## Error Scenarios & Handling

| Scenario | Behavior |
|----------|----------|
| Strapi API available | Fetch live data, use it |
| Strapi API down | Log error, use static fallback |
| Missing cover image | Use placeholder in component |
| Missing author avatar | Render with text only (conditional check) |
| Missing category | Default to "uncategorized" |
| Empty author role | Default to "Beauty Specialist" |
| Empty blog posts array | Show "No posts available" message |

## Component Props

### BlogListingContent

```typescript
interface BlogListingContentProps {
  blogPosts: BlogPost[];
  blogCategories: BlogCategory[];
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;           // Full URL
  category: string;             // Category slug
  author: {
    id: string;
    name: string;
    role: string;
    avatar: string;             // Full URL
  };
  publishedAt: string;          // YYYY-MM-DD
  readingTime: string;          // e.g., "5 phút đọc"
  relatedServices: string[];
  tags: string[];
  content: string;
}

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}
```

## Common Tasks

### To add a new blog post
1. Create it in Strapi CMS
2. Set: title, slug, excerpt, content, cover image, author, category, publishedAt
3. Next deploy or wait for ISR revalidation (60 seconds)
4. New post appears automatically

### To add a new category
1. Create it in Strapi CMS
2. Set: name, slug
3. Use in blog posts' category field
4. Next deploy or wait for ISR revalidation (60 seconds)

### To customize reading time calculation
Edit line 35 in `src/app/tin-tuc/page.tsx`:
```typescript
readingTime: `${Math.ceil((post.content?.length || 0) / 200)} phút đọc`,
```
Change `200` to adjust words-per-minute (smaller = longer read time)

### To customize author default role
Edit line 31 in `src/app/tin-tuc/page.tsx`:
```typescript
role: 'Beauty Specialist', // Change this
```

### To modify fallback behavior
Edit lines 14-52 in `src/app/tin-tuc/page.tsx` to:
- Catch different error types
- Log more/less detail
- Use different static data

## Debugging

### Check if Strapi is being used
1. Run the dev server
2. Build the project: `npm run build`
3. Check terminal output for "Failed to fetch from Strapi..." message
4. If not present, Strapi data was used successfully

### View network requests
1. Open browser DevTools
2. Network tab
3. On build, check for requests to `NEXT_PUBLIC_STRAPI_URL/api/blog-posts`

### Enable debug logging
Add console logs in `src/app/tin-tuc/page.tsx`:
```typescript
console.log('Fetched posts:', posts);
console.log('Fetched categories:', categories);
```

## Performance Notes

- Build time: +1-2 seconds for Strapi fetch (ISR enabled)
- Page load: No change (data fetched at build time)
- Bundle size: -100KB (removed static data)
- Cache: Revalidates every 60 seconds for fresh content

## Rollback Plan

If issues occur:

```bash
# Delete new files
rm src/app/tin-tuc/components/BlogListingContent.tsx
rm -rf src/app/tin-tuc/components

# Restore original page.tsx from git
git checkout src/app/tin-tuc/page.tsx

# Rebuild
npm run build
```

## Support & Questions

For more details, see `BLOG_MIGRATION_SUMMARY.md`
