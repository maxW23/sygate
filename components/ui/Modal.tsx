'use client';

import React, { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showClose?: boolean;
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  showClose = true 
}: ModalProps) {
  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`
        relative bg-white rounded-2xl shadow-2xl w-full mx-4 overflow-hidden
        ${sizeClasses[size]} glass
      `}>
        {/* Header */}
        {(title || showClose) && (
          <div className="flex items-center justify-between p-4 border-b border-border">
            {title && (
              <h3 className="font-arabic font-bold text-lg text-ink">{title}</h3>
            )}
            {showClose && (
              <button 
                onClick={onClose}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors icon-bounce"
              >
                <X className="w-5 h-5 text-ink-muted" />
              </button>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'success';
  loading?: boolean;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'تأكيد',
  cancelText = 'إلغاء',
  variant = 'danger',
  loading = false
}: ConfirmModalProps) {
  const variantClasses = {
    danger: 'text-error',
    warning: 'text-warning',
    success: 'text-success',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="text-center">
        <div className={`
          w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
          ${variant === 'danger' ? 'bg-error-bg' : variant === 'warning' ? 'bg-warning-bg' : 'bg-success-bg'}
        `}>
          <span className={`text-3xl ${variantClasses[variant]}`}>
            {variant === 'danger' ? '⚠️' : variant === 'warning' ? '❓' : '✓'}
          </span>
        </div>
        
        <p className="font-arabic text-ink-muted mb-6">{message}</p>
        
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            className="flex-1"
            onClick={onClose}
            disabled={loading}
          >
            {cancelText}
          </Button>
          <Button 
            variant={variant === 'danger' ? 'primary' : 'accent'} 
            className="flex-1"
            onClick={onConfirm}
            loading={loading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}