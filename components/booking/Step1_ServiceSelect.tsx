'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/lib/mockData';
import { Car, Wifi, Home, Pill, Gift, Stethoscope, Check } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Wifi, Home, Pill, Gift, Stethoscope
};

interface Step1Props {
  selectedService: string;
  onSelect: (id: string) => void;
  onNext: () => void;
}

export default function Step1_ServiceSelect({ selectedService, onSelect, onNext }: Step1Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-arabic font-bold text-2xl text-primary mb-2">
          اختر الخدمة المطلوبة
        </h2>
        <p className="font-display text-ink-muted italic">
          Select a service
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {services.slice(0, 6).map((service) => {
          const Icon = iconMap[service.icon] || Car;
          const isSelected = selectedService === service.id;
          
          return (
            <Card 
              key={service.id}
              className={`
                cursor-pointer relative transition-all
                ${isSelected ? 'border-2 border-primary bg-primary/5' : 'hover:border-primary/50'}
              `}
              onClick={() => onSelect(service.id)}
            >
              {isSelected && (
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-arabic font-semibold text-ink mb-1">
                {service.name}
              </h3>
              <p className="font-display text-xs text-ink-muted italic mb-2">
                {service.nameEn}
              </p>
              <div className="text-accent font-arabic font-semibold">
                من ${service.price}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" onClick={onNext}>
          التالي ←
        </Button>
      </div>
    </div>
  );
}