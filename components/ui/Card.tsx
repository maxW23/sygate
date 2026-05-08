import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Card({ 
  children, 
  className = '', 
  hover = false, 
  glow = false,
  tilt = false,
  onClick, 
  style 
}: CardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`
        bg-card border border-border rounded-2xl p-6
        ${hover ? 'card-hover cursor-pointer' : ''}
        ${glow ? 'glow-on-hover' : ''}
        ${tilt ? 'card-tilt' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}