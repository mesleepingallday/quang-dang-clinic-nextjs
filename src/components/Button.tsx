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
    "px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center gap-2 cursor-pointer transition-colors transition-shadow transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const variants = {
    primary: "bg-green-500 text-white shadow-md shadow-green-600/20 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30",
    outline: "border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-md hover:shadow-green-500/20",
    white: "bg-white text-green-700 border border-green-100 shadow-sm hover:bg-green-50 hover:border-green-200 hover:shadow-md",
  };

  const composedClassName = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`.trim();

  if (asChild) {
    if (!React.isValidElement(children)) return null;

    type ChildProps = { className?: string;[key: string]: unknown };

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
