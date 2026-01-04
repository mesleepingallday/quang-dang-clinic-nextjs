'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide uppercase";

  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-gold-500/30",
    outline: "border-2 border-gold-500 text-gold-600 hover:bg-gold-50",
    white: "bg-white text-gold-600 hover:bg-gray-100 shadow-md"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
