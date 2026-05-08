'use client';

import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'accent';
  animated?: boolean;
}

export default function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  variant = 'primary',
  animated = true
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  const variantClasses = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    accent: 'bg-accent',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="font-arabic text-ink-muted">{value}%</span>
        </div>
      )}
      <div className={`
        w-full ${sizeClasses[size]} bg-bg-section rounded-full overflow-hidden
      `}>
        <div 
          className={`
            ${variantClasses[variant]} ${sizeClasses[size]} rounded-full transition-all duration-500
            ${animated ? 'progress-animate' : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Milestone Step Component
interface MilestoneStepProps {
  steps: string[];
  currentStep: number;
}

export function MilestoneSteps({ steps, currentStep }: MilestoneStepProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <div className="flex flex-col items-center">
            <div 
              className={`
                w-8 h-8 rounded-full flex items-center justify-center font-arabic text-sm font-bold
                ${idx < currentStep 
                  ? 'bg-success text-white' 
                  : idx === currentStep 
                    ? 'bg-primary text-white'
                    : 'bg-border text-ink-muted'
                }
              `}
            >
              {idx < currentStep ? '✓' : idx + 1}
            </div>
            <span className={`
              mt-2 text-xs font-arabic text-center hidden sm:block
              ${idx === currentStep ? 'text-primary font-semibold' : 'text-ink-muted'}
            `}>
              {step}
            </span>
          </div>
          
          {idx < steps.length - 1 && (
            <div className="flex-1 mx-2 sm:mx-4">
              <div className={`
                h-1 rounded-full transition-colors duration-300
                ${idx < currentStep ? 'bg-success' : 'bg-border'}
              `} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Loading Overlay
interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  children: React.ReactNode;
}

export function LoadingOverlay({ isLoading, message = 'جاري التحميل...', children }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="font-arabic text-ink">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Page Transition Wrapper
interface PageTransitionProps {
  children: React.ReactNode;
  key?: string;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}