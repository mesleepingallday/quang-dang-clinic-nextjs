'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchButtonProps {
    onClick: () => void;
    isScrolled?: boolean;
}

/**
 * Search button for Header navigation
 * Shows search icon with keyboard shortcut hint
 */
const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isScrolled = true }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
        relative group flex items-center gap-2 px-3 py-2 rounded-full
        transition-all duration-300 ease-out
        hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
        ${isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-white/80 hover:text-white hover:bg-white/10'}
      `}
            aria-label="Tìm kiếm"
            title="Tìm kiếm (Ctrl+K)"
        >
            <Search
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2}
            />

            {/* Keyboard shortcut hint - desktop only */}
            <span
                className={`
          hidden lg:flex items-center gap-1 text-xs font-medium
          px-1.5 py-0.5 rounded border
          transition-colors duration-300
          ${isScrolled
                        ? 'border-gray-200 text-gray-400 group-hover:border-green-200 group-hover:text-green-500'
                        : 'border-white/20 text-white/50 group-hover:border-white/40 group-hover:text-white/70'
                    }
        `}
            >
                <kbd className="font-sans">Ctrl</kbd>
                <span>+</span>
                <kbd className="font-sans">K</kbd>
            </span>
        </button>
    );
};

export default SearchButton;
