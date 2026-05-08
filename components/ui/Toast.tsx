'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  type?: ToastType;
  message: string;
  subMessage?: string;
  duration?: number;
  onClose?: () => void;
}

const iconMap: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5 text-success" />,
  error: <XCircle className="w-5 h-5 text-error" />,
  info: <Info className="w-5 h-5 text-primary" />,
  warning: <Info className="w-5 h-5 text-warning" />,
};

const bgMap: Record<ToastType, string> = {
  success: 'bg-success-bg border-success',
  error: 'bg-error-bg border-error',
  info: 'bg-primary/10 border-primary',
  warning: 'bg-warning-bg border-warning',
};

export default function Toast({ 
  type = 'info', 
  message, 
  subMessage, 
  duration = 4000,
  onClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div 
      className={`
        toast-animate fixed top-4 left-4 sm:left-auto sm:right-4 z-50
        flex items-start gap-3 p-4 rounded-xl border-l-4
        bg-white shadow-lg max-w-sm
        ${bgMap[type]}
      `}
    >
      <div className="flex-shrink-0 mt-0.5">
        {iconMap[type]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-arabic font-semibold text-ink text-sm">
          {message}
        </p>
        {subMessage && (
          <p className="font-arabic text-xs text-ink-muted mt-1">
            {subMessage}
          </p>
        )}
      </div>
      <button 
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        className="flex-shrink-0 p-1 hover:bg-black/5 rounded"
      >
        <X className="w-4 h-4 text-ink-muted" />
      </button>
    </div>
  );
}

interface ToastContainerProps {
  toasts: Array<{
    id: string;
    type: ToastType;
    message: string;
    subMessage?: string;
  }>;
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 left-4 sm:left-auto sm:right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          subMessage={toast.subMessage}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );
}