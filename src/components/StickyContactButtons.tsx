'use client';

import { useState } from 'react';

const PHONE_NUMBER = '0988834446';
const ZALO_LINK = `https://zalo.me/${PHONE_NUMBER}`;
const MESSENGER_LINK = 'https://m.me/quangdangbeauty'; // Update with actual Facebook page

export default function StickyContactButtons() {
    const [isExpanded, setIsExpanded] = useState(true);

    const buttons = [
        {
            id: 'call',
            label: 'Gọi điện',
            href: `tel:${PHONE_NUMBER}`,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
            ),
            bgColor: 'bg-gradient-to-br from-green-600 to-green-700',
            hoverColor: 'hover:from-green-700 hover:to-green-800',
            shadowColor: 'shadow-green-500/40',
        },
        {
            id: 'zalo',
            label: 'Zalo',
            href: ZALO_LINK,
            icon: (
                // eslint-disable-next-line @next/next/no-img-element
                <img src="/icons/zalo.svg" alt="Zalo" className="w-8 h-8" />
            ),
            bgColor: 'bg-[#0068FF]',
            hoverColor: 'hover:bg-[#0055DD]',
            shadowColor: 'shadow-[#0068FF]/40',
        },
        {
            id: 'messenger',
            label: 'Messenger',
            href: MESSENGER_LINK,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.08.36-.1.55-.06.91.25 1.87.38 2.88.38 5.64 0 10-4.13 10-9.18S17.64 2 12 2zm5.89 7.26-2.88 4.57a1.5 1.5 0 0 1-2.17.44l-2.29-1.72a.6.6 0 0 0-.72 0l-3.09 2.34a.47.47 0 0 1-.68-.63l2.88-4.57a1.5 1.5 0 0 1 2.17-.44l2.29 1.72a.6.6 0 0 0 .72 0l3.09-2.34a.47.47 0 0 1 .68.63z" />
                </svg>
            ),
            bgColor: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
            hoverColor: 'hover:from-fuchsia-600 hover:to-purple-700',
            shadowColor: 'shadow-fuchsia-500/40',
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
            {/* Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
                aria-expanded={isExpanded}
                className={`
          relative w-14 h-14 rounded-full 
          bg-gradient-to-br from-green-700 to-green-800
          shadow-lg shadow-green-600/30
          flex items-center justify-center
          transition-all duration-300 ease-out
          hover:shadow-xl hover:shadow-green-600/40 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
          ${isExpanded ? 'rotate-45' : 'rotate-0'}
        `}
            >
                {/* Pulse animation ring */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 text-white transition-transform duration-300"
                >
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Contact Buttons */}
            <div className={`
        flex flex-col gap-3
        transition-all duration-300 ease-out
        ${isExpanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
                {buttons.map((button, index) => (
                    <a
                        key={button.id}
                        href={button.href}
                        target={button.id !== 'call' ? '_blank' : undefined}
                        rel={button.id !== 'call' ? 'noopener noreferrer' : undefined}
                        aria-label={button.label}
                        className={`
              group relative flex items-center gap-3
              transition-all duration-300 ease-out
              ${isExpanded ? 'translate-x-0' : 'translate-x-4'}
            `}
                        style={{ transitionDelay: isExpanded ? `${index * 50}ms` : '0ms' }}
                    >
                        {/* Label tooltip */}
                        <span className="
              absolute right-full mr-3 px-3 py-1.5 
              bg-gray-900/90 backdrop-blur-sm text-white text-sm font-medium 
              rounded-lg whitespace-nowrap
              opacity-0 translate-x-2
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-200
              pointer-events-none
            ">
                            {button.label}
                            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90" />
                        </span>

                        {/* Button */}
                        <span className={`
              w-12 h-12 rounded-full 
              ${button.bgColor} ${button.hoverColor}
              shadow-lg ${button.shadowColor}
              flex items-center justify-center text-white
              transition-all duration-300 ease-out
              hover:shadow-xl hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-offset-2
            `}>
                            {button.icon}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}
