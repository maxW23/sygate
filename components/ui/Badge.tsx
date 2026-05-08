import React from 'react';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'accent';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-success-bg text-success-text',
  warning: 'bg-warning-bg text-amber-700',
  error: 'bg-error-bg text-error',
  info: 'bg-primary/10 text-primary',
  accent: 'bg-accent-bg text-accent',
};

export default function Badge({ variant = 'info', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-arabic
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}