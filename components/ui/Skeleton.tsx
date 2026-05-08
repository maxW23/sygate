'use client';

import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export default function Skeleton({ 
  className = '', 
  variant = 'text',
  width,
  height,
  lines = 1
}: SkeletonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-xl';
      default:
        return 'rounded';
    }
  };

  const style: React.CSSProperties = {
    width: width || (variant === 'circular' ? 40 : '100%'),
    height: height || (variant === 'text' ? 20 : '100%'),
  };

  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {[...Array(lines)].map((_, i) => (
          <div
            key={i}
            className={`skeleton ${getVariantClass()}`}
            style={{
              ...style,
              width: i === lines - 1 ? '75%' : style.width,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div 
      className={`skeleton ${getVariantClass()} ${className}`}
      style={style}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1">
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={16} className="mt-2" />
        </div>
      </div>
      <Skeleton width="30%" height={18} />
    </div>
  );
}

export function OrderCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4">
      <Skeleton variant="circular" width={48} height={48} />
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <Skeleton width="40%" height={20} />
          <Skeleton variant="rectangular" width={60} height={24} />
        </div>
        <Skeleton width="30%" height={16} />
        <Skeleton width="70%" height={14} />
      </div>
      <Skeleton variant="rectangular" width={100} height={40} />
    </div>
  );
}