'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';

interface SearchSuggestionsProps {
    suggestions: string[];
    onSelect: (suggestion: string) => void;
}

/**
 * Popular search suggestions displayed when search input is empty
 */
const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, onSelect }) => {
    return (
        <div className="p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                <TrendingUp size={14} />
                <span>Tìm kiếm phổ biến</span>
            </div>

            <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                    <button
                        key={suggestion}
                        type="button"
                        onClick={() => onSelect(suggestion)}
                        className="
              px-3 py-1.5 text-sm font-medium
              bg-green-50 text-green-700 rounded-full
              border border-green-100
              hover:bg-green-100 hover:border-green-200
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500
            "
                    >
                        {suggestion}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchSuggestions;
