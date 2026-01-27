'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    end: number;
    start?: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    start = 0,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = ''
}) => {
    const [count, setCount] = useState(start);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function: easeOutExpo
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const currentCount = Math.floor(easeOutExpo(progress) * (end - start) + start);
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasAnimated, end, start, duration]);

    return (
        <span ref={countRef} className={className}>
            {prefix}{new Intl.NumberFormat('en-US').format(count)}{suffix}
        </span>
    );
};

export default AnimatedCounter;
