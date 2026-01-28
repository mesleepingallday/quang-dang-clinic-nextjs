/**
 * Search Index Configuration with Fuse.js
 * Pre-configured fuzzy search for services and blog posts
 */

import Fuse, { IFuseOptions } from 'fuse.js';

// Search result types
export interface SearchableService {
    type: 'service';
    id: string;
    name: string;
    slug: string;
    description: string;
    image?: string;
}

export interface SearchableBlogPost {
    type: 'blog';
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: string;
    category?: string;
}

export type SearchableItem = SearchableService | SearchableBlogPost;

export interface SearchResults {
    services: SearchableService[];
    blogPosts: SearchableBlogPost[];
}

// Popular search suggestions
export const SEARCH_SUGGESTIONS = [
    'Trị mụn',
    'Triệt lông',
    'Botox',
    'Filler',
    'Chăm sóc da',
    'Nám',
    'Căng chỉ',
    'Giảm béo',
];

// Fuse.js configuration
const fuseOptions: IFuseOptions<SearchableItem> = {
    includeScore: true,
    includeMatches: true,
    threshold: 0.3, // 0 = exact match, 1 = match anything
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: [
        { name: 'name', weight: 2 },
        { name: 'title', weight: 2 },
        { name: 'description', weight: 1 },
        { name: 'excerpt', weight: 1 },
    ],
};

let fuseInstance: Fuse<SearchableItem> | null = null;
let searchData: SearchableItem[] = [];

/**
 * Initialize search index with data
 */
export function initializeSearchIndex(items: SearchableItem[]): void {
    searchData = items;
    fuseInstance = new Fuse(items, fuseOptions);
}

/**
 * Perform fuzzy search
 */
export function performSearch(query: string, limit: number = 8): SearchResults {
    if (!fuseInstance || !query.trim()) {
        return { services: [], blogPosts: [] };
    }

    const results = fuseInstance.search(query, { limit });

    const services: SearchableService[] = [];
    const blogPosts: SearchableBlogPost[] = [];

    for (const result of results) {
        if (result.item.type === 'service') {
            services.push(result.item);
        } else if (result.item.type === 'blog') {
            blogPosts.push(result.item);
        }
    }

    return {
        services: services.slice(0, 4),
        blogPosts: blogPosts.slice(0, 4),
    };
}

/**
 * Highlight matching text in a string
 */
export function highlightMatch(text: string, query: string): string {
    if (!query.trim()) return text;

    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * Get search index status
 */
export function isSearchIndexReady(): boolean {
    return fuseInstance !== null && searchData.length > 0;
}

/**
 * Get total indexed items count
 */
export function getIndexedCount(): number {
    return searchData.length;
}
