'use client';

import React, { useState, useRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover active:scale-95',
  secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white active:scale-95',
  ghost: 'text-primary hover:bg-primary/10 active:scale-95',
  accent: 'bg-accent text-white hover:bg-accent-hover active:scale-95',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  loading = false,
  icon,
  disabled,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      ref={btnRef}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden font-arabic font-semibold rounded-xl transition-all duration-200
        inline-flex items-center justify-center gap-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            transform: 'scale(0)',
            animation: 'ripple-effect 0.6s ease-out forwards',
          }}
        />
      ))}
      
      {loading ? (
        <span className="spinner w-5 h-5" />
      ) : icon ? (
        <span className="icon-bounce">{icon}</span>
      ) : null}
      
      {children}
    </button>
  );
}