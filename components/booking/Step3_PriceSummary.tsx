'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { pricingBreakdown, services } from '@/lib/mockData';

interface Step3Props {
  selectedService: string;
  formData: {
    flightNumber: string;
    arrivalDate: string;
    arrivalTime: string;
    fullName: string;
    passengers: number;
  };
  onConfirm: () => void;
  onPrev: () => void;
}

export default function Step3_PriceSummary({ selectedService, formData, onConfirm, onPrev }: Step3Props) {
  const service = services.find(s => s.id === selectedService);
  const pricing = pricingBreakdown[selectedService as keyof typeof pricingBreakdown] || { base: 0, guarantee: 0, total: 0, sypEquivalent: 0 };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-arabic font-bold text-2xl text-primary mb-2">
          ملخص الطلب والسعر الثابت
        </h2>
        <p className="font-display text-ink-muted italic">
          Order Summary & Fixed Price
        </p>
      </div>

      <Card className="mb-6">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">🚗</span>
          </div>
          <div>
            <h3 className="font-arabic font-bold text-ink">{service?.name}</h3>
            <p className="font-display text-sm text-ink-muted italic">{service?.nameEn}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="font-arabic text-ink-muted">رقم الرحلة</span>
            <span className="font-arabic text-ink">{formData.flightNumber || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-arabic text-ink-muted">التاريخ</span>
            <span className="font-arabic text-ink">{formData.arrivalDate || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-arabic text-ink-muted">الوقت</span>
            <span className="font-arabic text-ink">{formData.arrivalTime || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-arabic text-ink-muted">المسافر</span>
            <span className="font-arabic text-ink">{formData.fullName || '—'}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-arabic text-ink-muted">عدد المسافرين</span>
            <span className="font-arabic text-ink">{formData.passengers}</span>
          </div>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="font-arabic text-ink">رسوم الخدمة</span>
            <span className="font-arabic text-ink">${pricing.base}.00</span>
          </div>
          <div className="flex justify-between">
            <span className="font-arabic text-ink">رسوم الضمان</span>
            <span className="font-arabic text-ink">${pricing.guarantee}.00</span>
          </div>
          <div className="flex justify-between border-t border-border pt-2 mt-2">
            <span className="font-arabic font-bold text-lg text-ink">المجموع</span>
            <span className="font-arabic font-bold text-lg text-primary">${pricing.total}.00</span>
          </div>
          <div className="flex justify-between text-ink-muted text-sm">
            <span className="font-arabic">ما يعادل تقريباً</span>
            <span className="font-arabic">~{pricing.sypEquivalent.toLocaleString()} SYP</span>
          </div>
        </div>
      </Card>

      <div className="bg-success-bg rounded-xl p-4 mb-6">
        <div className="flex items-center gap-2 text-success-text">
          <span className="text-xl">✓</span>
          <span className="font-arabic font-semibold">السعر ثابت ولن يتغير بعد التأكيد</span>
        </div>
        <div className="flex items-center gap-2 text-success-text mt-2">
          <span className="text-xl">✓</span>
          <span className="font-arabic">مضمون استرداد كامل إذا لم تُنفَّذ الخدمة</span>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          ← السابق
        </Button>
        <Button variant="primary" size="lg" onClick={onConfirm}>
          تأكيد والدفع ←
        </Button>
      </div>
    </div>
  );
}