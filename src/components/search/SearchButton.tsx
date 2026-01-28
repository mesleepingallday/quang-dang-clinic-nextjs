'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchButtonProps {
    onClick: () => void;
    isScrolled?: boolean;
}

/**
 * Search bar button for Header navigation
 * Displays as a clickable search bar with placeholder
 */
const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isScrolled = true }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
        group flex items-center gap-2 px-4 py-2 rounded-full
        transition-all duration-300 ease-out
        border
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
        ${isScrolled
                    ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30'
                }
      `}
            aria-label="Tìm kiếm"
        >
            <Search
                size={16}
                className={`transition-colors duration-300 ${isScrolled ? 'text-gray-400 group-hover:text-green-600' : 'text-white/60 group-hover:text-white'
                    }`}
                strokeWidth={2}
            />

            <span
                className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-400 group-hover:text-gray-600' : 'text-white/60 group-hover:text-white/80'
                    }`}
            >
                Tìm kiếm dịch vụ
            </span>
        </button>
    );
};

export default SearchButton;
