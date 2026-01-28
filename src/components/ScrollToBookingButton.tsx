'use client';

import Button from './Button';

export default function ScrollToBookingButton() {
  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('booking')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <Button onClick={handleClick} className="shadow-lg shadow-green-500/40">
      Đặt Lịch Ngay
    </Button>
  );
}
