'use client';

import React from 'react';
import Card from '../ui/Card';
import { Lock, QrCode, MapPin, RotateCcw } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    label: 'سعر ثابت مسبقاً',
    labelEn: 'Fixed price, no surprises',
  },
  {
    icon: QrCode,
    label: 'تأكيد فوري بـ QR',
    labelEn: 'Instant QR confirmation',
  },
  {
    icon: MapPin,
    label: 'تتبع الخدمة لحظياً',
    labelEn: 'Real-time tracking',
  },
  {
    icon: RotateCcw,
    label: 'ضمان استرداد كامل',
    labelEn: 'Full refund guarantee',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="bg-bg-section py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-arabic font-bold text-3xl sm:text-4xl text-primary mb-2">
            لماذا يثق بنا المغتربون
          </h2>
          <p className="font-display text-lg text-ink-muted italic">
            Why diaspora trusts us
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <Card 
              key={idx} 
              className="flex items-start gap-4 fade-up"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-arabic font-bold text-lg text-ink mb-1">
                  {pillar.label}
                </h3>
                <p className="font-display text-sm text-ink-muted italic">
                  {pillar.labelEn}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}