'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { services } from '@/lib/mockData';
import { Lock, Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt
};

export default function FamilySupportPreview() {
  const [email, setEmail] = useState('');

  const familyServices = services.filter(s => s.category === 'family');

  return (
    <section className="bg-bg-section rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="font-arabic font-bold text-xl text-primary">
          دعم الأهل داخل سوريا
        </h2>
        <Badge variant="accent">قريباً</Badge>
      </div>

      {/* Blurred Service Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {familyServices.map((service) => {
          const Icon = iconMap[service.icon] || Pill;
          return (
            <div 
              key={service.id}
              className="relative p-4 bg-white/50 border border-border rounded-xl opacity-60"
            >
              <div className="absolute top-2 left-2">
                <Lock className="w-4 h-4 text-ink-muted" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-arabic font-semibold text-ink text-sm">{service.name}</h3>
              <p className="font-display text-xs text-ink-muted italic">{service.nameEn}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Card */}
      <Card className="bg-primary text-white">
        <h3 className="font-arabic font-bold text-lg mb-2">
          سيتم إطلاق هذه الخدمة قريباً
        </h3>
        <p className="font-arabic text-sm text-white/80 mb-4">
          أخبرنا باهتمامك وسنُعلمك فور الإطلاق
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Button variant="primary" className="bg-white text-primary hover:bg-white/90">
            أبلّغني عند الإطلاق
          </Button>
        </div>
      </Card>
    </section>
  );
}