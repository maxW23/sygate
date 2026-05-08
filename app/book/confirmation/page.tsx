'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ConfirmationPage() {
  const [copied, setCopied] = useState(false);
  const bookingRef = 'SYG-2025-00847';
  const pin = '7342';

  const copyRef = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareBooking = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'حجز SYGATE',
          text: `تم حجز خدمة SYGATE بنجاح! رقم الحجز: ${bookingRef}`,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-main py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-6">
            <svg className="w-full h-full" viewBox="0 0 52 52">
              <circle 
                className="checkmark-circle" 
                cx="26" 
                cy="26" 
                r="25" 
                fill="none" 
                stroke="var(--color-success)" 
                strokeWidth="2"
              />
              <path 
                className="checkmark-check" 
                fill="none" 
                stroke="var(--color-success)" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          
          <h1 className="font-arabic font-bold text-3xl text-success mb-2">
            تم الحجز بنجاح! ✓
          </h1>
          <p className="font-display text-lg text-ink-muted italic">
            Booking Confirmed
          </p>
        </div>

        {/* Reference Number */}
        <Card className="text-center mb-6">
          <p className="font-arabic text-ink-muted mb-2">رقم الحجز</p>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-2xl font-bold text-primary tracking-wider">
              {bookingRef}
            </span>
            <button 
              onClick={copyRef}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {copied ? (
                <span className="text-success">✓</span>
              ) : (
                <span className="text-ink-muted">📋</span>
              )}
            </button>
          </div>
        </Card>

        {/* QR & PIN */}
        <Card className="text-center mb-6">
          <p className="font-arabic text-ink mb-4">أظهر هذا الـ QR أو رقم PIN لسائقك عند الوصول</p>
          
          <div className="bg-white border-2 border-primary rounded-xl p-4 inline-block mb-4">
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${bookingRef}`}
              alt="QR Code"
              className="w-32 h-32"
            />
          </div>
          
          <div className="flex justify-center gap-2">
            {pin.split('').map((digit, idx) => (
              <div 
                key={idx}
                className="w-12 h-14 bg-primary text-white font-mono text-2xl font-bold flex items-center justify-center rounded-lg"
              >
                {digit}
              </div>
            ))}
          </div>
        </Card>

        {/* Booking Details */}
        <Card className="mb-6 bg-success-bg border-success/20">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-arabic text-ink-muted">الخدمة</span>
              <span className="font-arabic text-ink">استقبال المطار</span>
            </div>
            <div className="flex justify-between">
              <span className="font-arabic text-ink-muted">التاريخ</span>
              <span className="font-arabic text-ink">15 يناير 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-arabic text-ink-muted">الوقت</span>
              <span className="font-arabic text-ink">14:30</span>
            </div>
            <div className="flex justify-between">
              <span className="font-arabic text-ink-muted">المسافر</span>
              <span className="font-arabic text-ink">أحمد المحمد</span>
            </div>
            <div className="flex justify-between border-t border-success/20 pt-2 mt-2">
              <span className="font-arabic font-semibold text-ink">المدفوع</span>
              <span className="font-arabic font-bold text-success-text">$35.00</span>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link href="/dashboard">
            <Button variant="primary" className="w-full">
              اذهب للوحة التحكم
            </Button>
          </Link>
          <Button variant="secondary" className="w-full" onClick={shareBooking}>
            📤 شارك التأكيد
          </Button>
        </div>
      </div>
    </div>
  );
}