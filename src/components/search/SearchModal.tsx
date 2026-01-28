'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { Search, X, Loader2 } from 'lucide-react';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './SearchResults';
import SearchSuggestions from './SearchSuggestions';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Search modal with glassmorphism styling
 * Features: auto-focus, keyboard navigation, debounced search
 */
const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const {
        query,
        setQuery,
        results,
        isLoading,
        isIndexReady,
        suggestions,
        hasResults,
        clearSearch,
    } = useSearch();

    // Auto-focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ctrl+K to open (handled in parent)
            // Escape to close
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Close on click outside
    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    // Handle suggestion click
    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        inputRef.current?.focus();
    };

    // Handle result click
    const handleResultClick = () => {
        clearSearch();
        onClose();
    };

    // Handle form submit (prevent page reload)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />

            {/* Modal */}
            <div
                ref={modalRef}
                className="
          relative w-full max-w-xl
          bg-white/95 backdrop-blur-xl
          rounded-2xl shadow-2xl
          border border-white/20
          overflow-hidden
          animate-slide-down
        "
                role="dialog"
                aria-modal="true"
                aria-label="Tìm kiếm"
            >
                {/* Search Input */}
                <form onSubmit={handleSubmit} className="relative">
                    <div className="flex items-center border-b border-gray-100">
                        <div className="pl-4 text-gray-400">
                            {isLoading ? (
                                <Loader2 size={20} className="animate-spin text-green-500" />
                            ) : (
                                <Search size={20} />
                            )}
                        </div>

                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={isIndexReady ? "Tìm kiếm dịch vụ, bài viết..." : "Đang tải..."}
                            disabled={!isIndexReady}
                            className="
                flex-1 px-4 py-4
                text-lg text-gray-900 placeholder-gray-400
                bg-transparent border-none outline-none
                disabled:opacity-50
              "
                            autoComplete="off"
                            spellCheck="false"
                        />

                        {/* Clear / Close buttons */}
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery('')}
                                className="p-2 mr-1 text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Xóa tìm kiếm"
                            >
                                <X size={18} />
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                px-3 py-1.5 mr-3
                text-xs font-medium text-gray-400
                bg-gray-100 rounded-md
                hover:bg-gray-200 hover:text-gray-600
                transition-colors
              "
                        >
                            ESC
                        </button>
                    </div>
                </form>

                {/* Results / Suggestions */}
                <div className="relative">
                    {query.trim() ? (
                        // Show results when there's a query
                        hasResults || isLoading ? (
                            <SearchResults
                                results={results}
                                query={query}
                                onResultClick={handleResultClick}
                            />
                        ) : !isLoading && (
                            <SearchResults
                                results={{ services: [], blogPosts: [] }}
                                query={query}
                                onResultClick={handleResultClick}
                            />
                        )
                    ) : (
                        // Show suggestions when no query
                        <SearchSuggestions
                            suggestions={suggestions}
                            onSelect={handleSuggestionClick}
                        />
                    )}
                </div>

                {/* Footer hint */}
                <div className="px-4 py-3 bg-gray-50/80 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>
                            <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-sans">↓↑</kbd>
                            {' '}để di chuyển
                        </span>
                        <span>
                            <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-sans">Enter</kbd>
                            {' '}để mở
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
