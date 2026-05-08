import React from 'react';

interface SectionWrapperProps {
  variant?: 'white' | 'beige';
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ variant = 'white', children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`${variant === 'beige' ? 'bg-bg-section' : 'bg-bg-main'} ${className}`}>
      {children}
    </section>
  );
}