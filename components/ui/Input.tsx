'use client';

import React, { useState, useRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  success?: boolean;
}

export default function Input({ label, error, icon, success, className = '', ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasValue = inputRef.current?.value ? inputRef.current.value.length > 0 : false;

  return (
    <div className="w-full relative">
      {/* Floating Label */}
      <div 
        className={`
          absolute right-4 transition-all duration-200 pointer-events-none font-arabic
          ${isFocused || hasValue 
            ? 'top-0 text-xs text-primary bg-white px-1 -translate-y-1/2' 
            : 'top-3.5 text-sm text-ink-muted'}
        `}
      >
        {label}
      </div>

      {/* Input Container */}
      <div className="relative">
        <input
          ref={inputRef}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3.5 rounded-xl border-2 bg-white text-ink font-arabic
            focus:outline-none transition-all duration-200
            placeholder:text-ink-muted
            ${error 
              ? 'border-error focus:border-error' 
              : success 
                ? 'border-success focus:border-success' 
                : isFocused 
                  ? 'border-primary shadow-md' 
                  : 'border-border hover:border-primary/50'
            }
            ${icon ? 'pl-12' : ''}
            ${className}
          `}
          {...props}
        />

        {/* Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted icon-bounce">
            {icon}
          </div>
        )}

        {/* Validation Icons */}
        {error && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-error">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
        {success && !error && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-success">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Error Message with shake */}
      {error && (
        <p className="mt-1 text-sm text-error font-arabic shake">
          {error}
        </p>
      )}
      
      {/* Success Message */}
      {success && !error && (
        <p className="mt-1 text-sm text-success font-arabic">
          ✓ تم التحقق بنجاح
        </p>
      )}
    </div>
  );
}