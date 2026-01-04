'use client';

import Button from './Button';

export default function ScrollToBookingButton() {
  const handleClick = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button onClick={handleClick}>
      Đặt Lịch Ngay
    </Button>
  );
}
