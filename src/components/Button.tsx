'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  asChild = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center gap-2 transition-colors transition-shadow transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const variants = {
    primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-gold-500/30",
    outline: "border-2 border-gold-500 text-gold-600 hover:bg-gold-50",
    white: "bg-white text-gold-600 hover:bg-gray-100 shadow-md",
  };

  const composedClassName = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`.trim();

  if (asChild) {
    if (!React.isValidElement(children)) return null;

    type ChildProps = { className?: string; [key: string]: unknown };

    const child = children as React.ReactElement<ChildProps>;

    // Avoid passing button-only attributes to non-button elements.
    const { type: _type, disabled: _disabled, ...rest } = props;
    void _type;
    void _disabled;

    return React.cloneElement(child, {
      ...(rest as ChildProps),
      className: `${composedClassName} ${child.props.className || ''}`.trim(),
    });
  }

  return (
    <button className={composedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
