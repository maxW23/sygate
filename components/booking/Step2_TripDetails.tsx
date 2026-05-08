'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface Step2Props {
  formData: {
    flightNumber: string;
    arrivalDate: string;
    arrivalTime: string;
    fullName: string;
    phone: string;
    passengers: number;
    notes: string;
  };
  onChange: (field: 'flightNumber' | 'arrivalDate' | 'arrivalTime' | 'fullName' | 'phone' | 'passengers' | 'notes', value: string | number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Step2_TripDetails({ formData, onChange, onNext, onPrev }: Step2Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.flightNumber) newErrors.flightNumber = 'رقم الرحلة مطلوب';
    if (!formData.arrivalDate) newErrors.arrivalDate = 'تاريخ الوصول مطلوب';
    if (!formData.arrivalTime) newErrors.arrivalTime = 'وقت الوصول مطلوب';
    if (!formData.fullName) newErrors.fullName = 'الاسم الكامل مطلوب';
    if (!formData.phone) newErrors.phone = 'رقم الهاتف مطلوب';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-arabic font-bold text-2xl text-primary mb-2">
          تفاصيل الرحلة
        </h2>
        <p className="font-display text-ink-muted italic">
          Trip Details
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="رقم الرحلة *"
            placeholder="مثال: SV123"
            value={formData.flightNumber}
            onChange={(e) => onChange('flightNumber', e.target.value)}
            error={errors.flightNumber}
          />
          <Input
            label="تاريخ الوصول *"
            type="date"
            value={formData.arrivalDate}
            onChange={(e) => onChange('arrivalDate', e.target.value)}
            error={errors.arrivalDate}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="وقت الوصول *"
            type="time"
            value={formData.arrivalTime}
            onChange={(e) => onChange('arrivalTime', e.target.value)}
            error={errors.arrivalTime}
          />
          <Input
            label="الاسم الكامل *"
            placeholder="أدخل اسمك الكامل"
            value={formData.fullName}
            onChange={(e) => onChange('fullName', e.target.value)}
            error={errors.fullName}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="رقم الهاتف *"
            placeholder="+49 152 123 4567"
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            error={errors.phone}
          />
          <div>
            <label className="block text-sm font-arabic font-semibold text-ink mb-2">
              عدد المسافرين
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onChange('passengers', Math.max(1, formData.passengers - 1))}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-xl hover:bg-primary/10"
              >
                −
              </button>
              <span className="font-arabic text-lg w-8 text-center">{formData.passengers}</span>
              <button
                type="button"
                onClick={() => onChange('passengers', formData.passengers + 1)}
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-xl hover:bg-primary/10"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-arabic font-semibold text-ink mb-2">
            ملاحظات إضافية
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-ink font-arabic focus:outline-none focus:border-primary transition-colors placeholder:text-ink-muted"
            rows={3}
            placeholder="أي ملاحظات خاصة..."
            value={formData.notes}
            onChange={(e) => onChange('notes', e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="secondary" onClick={onPrev}>
          ← السابق
        </Button>
        <Button variant="primary" onClick={handleNext}>
          التالي ←
        </Button>
      </div>
    </div>
  );
}