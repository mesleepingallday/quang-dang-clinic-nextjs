'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-in' | 'fade-in-up' | 'scale-up' | 'slide-left' | 'slide-right';
    duration?: number;
    delay?: number;
    threshold?: number;
    className?: string; // Additional classes
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-in-up',
    duration = 0.8,
    delay = 0,
    threshold = 0.1,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    });
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isVisible) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing if we only want to animate once
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: threshold,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [threshold, isVisible]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-in-up': return 'translate-y-10 opacity-0';
            case 'fade-in': return 'opacity-0';
            case 'scale-up': return 'scale-95 opacity-0';
            case 'slide-left': return '-translate-x-10 opacity-0';
            case 'slide-right': return 'translate-x-10 opacity-0';
            default: return 'opacity-0';
        }
    };

    const getVisibleClass = () => {
        switch (animation) {
            case 'fade-in-up': return 'translate-y-0 opacity-100';
            case 'fade-in': return 'opacity-100';
            case 'scale-up': return 'scale-100 opacity-100';
            case 'slide-left': return 'translate-x-0 opacity-100';
            case 'slide-right': return 'translate-x-0 opacity-100';
            default: return 'opacity-100';
        }
    };

    return (
        <div
            ref={domRef}
            className={`transition-all ease-out ${isVisible ? getVisibleClass() : getAnimationClass()} ${className}`}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
