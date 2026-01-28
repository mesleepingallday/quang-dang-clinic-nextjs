'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import {
    SearchableItem,
    SearchResults,
    SearchableService,
    SearchableBlogPost,
    initializeSearchIndex,
    performSearch,
    isSearchIndexReady,
    SEARCH_SUGGESTIONS,
} from '@/lib/searchIndex';
import { SERVICES } from '@/lib/data';

interface UseSearchResult {
    query: string;
    setQuery: (q: string) => void;
    results: SearchResults;
    isLoading: boolean;
    isIndexReady: boolean;
    suggestions: string[];
    hasResults: boolean;
    clearSearch: () => void;
}

/**
 * React hook for managing search state and logic
 */
export function useSearch(): UseSearchResult {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResults>({ services: [], blogPosts: [] });
    const [isLoading, setIsLoading] = useState(false);
    const [isIndexReady, setIsIndexReady] = useState(false);

    // Initialize search index on mount
    useEffect(() => {
        const initIndex = async () => {
            try {
                // Convert static services to searchable format
                const searchableServices: SearchableService[] = SERVICES.map((service) => ({
                    type: 'service' as const,
                    id: service.id,
                    name: service.title,
                    slug: service.id,
                    description: service.shortDescription,
                    image: service.image,
                }));

                // TODO: Fetch blog posts from Strapi when available
                const searchableBlogPosts: SearchableBlogPost[] = [];

                const allItems: SearchableItem[] = [...searchableServices, ...searchableBlogPosts];
                initializeSearchIndex(allItems);
                setIsIndexReady(true);
            } catch (error) {
                console.error('Failed to initialize search index:', error);
            }
        };

        if (!isSearchIndexReady()) {
            initIndex();
        } else {
            setIsIndexReady(true);
        }
    }, []);

    // Debounced search effect
    useEffect(() => {
        if (!query.trim()) {
            setResults({ services: [], blogPosts: [] });
            return;
        }

        setIsLoading(true);
        const timer = setTimeout(() => {
            const searchResults = performSearch(query);
            setResults(searchResults);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    const hasResults = useMemo(() => {
        return results.services.length > 0 || results.blogPosts.length > 0;
    }, [results]);

    const clearSearch = useCallback(() => {
        setQuery('');
        setResults({ services: [], blogPosts: [] });
    }, []);

    return {
        query,
        setQuery,
        results,
        isLoading,
        isIndexReady,
        suggestions: SEARCH_SUGGESTIONS,
        hasResults,
        clearSearch,
    };
}
