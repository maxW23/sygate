'use client';

import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { services } from '@/lib/mockData';
import { Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt
};

export default function ServicesGrid() {
  const visitServices = services.filter(s => s.category === 'visit');
  const familyServices = services.filter(s => s.category === 'family');

  return (
    <section id="services" className="bg-bg-main py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-arabic font-bold text-3xl sm:text-4xl text-primary mb-2">
            خدماتنا
          </h2>
          <p className="font-display text-lg text-ink-muted italic">
            Our Services
          </p>
        </div>

        {/* Section Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-success-bg rounded-xl p-4 text-center">
            <span className="font-arabic font-semibold text-success-text">
              عندما تزور سوريا
            </span>
          </div>
          <div className="bg-success-bg rounded-xl p-4 text-center">
            <span className="font-arabic font-semibold text-success-text">
              دعم أهلك من بُعد
            </span>
          </div>
        </div>

        {/* Visit Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visitServices.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                hover 
                glow
                className="relative group fade-up"
                style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 icon-bounce">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-arabic font-bold text-base text-ink mb-1">
                  {service.name}
                </h3>
                <p className="font-display text-xs text-ink-muted italic mb-3">
                  {service.nameEn}
                </p>
                <div className="text-accent font-arabic text-sm font-semibold">
                  من ${service.price}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-2xl">
                  <Button variant="primary" size="sm">احجز</Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Family Support Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {familyServices.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                hover 
                glow
                className="relative group fade-up"
                style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 icon-bounce">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-arabic font-bold text-base text-ink mb-1">
                  {service.name}
                </h3>
                <p className="font-display text-xs text-ink-muted italic mb-3">
                  {service.nameEn}
                </p>
                <div className="text-accent font-arabic text-sm font-semibold">
                  من ${service.price}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 rounded-2xl">
                  <Button variant="primary" size="sm">احجز</Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}