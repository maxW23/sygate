'use client';

import React from 'react';
import { Grid3x3, FileText, CreditCard, CheckCircle } from 'lucide-react';

const steps = [
  { 
    num: 1, 
    label: 'اختر خدمتك', 
    labelEn: 'Choose your service', 
    icon: Grid3x3 
  },
  { 
    num: 2, 
    label: 'حدد التفاصيل', 
    labelEn: 'Set the details', 
    icon: FileText 
  },
  { 
    num: 3, 
    label: 'ادفع بأمان', 
    labelEn: 'Pay securely', 
    icon: CreditCard 
  },
  { 
    num: 4, 
    label: 'تابع التنفيذ', 
    labelEn: 'Track in real-time', 
    icon: CheckCircle,
    completed: true 
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-section py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-arabic font-bold text-3xl sm:text-4xl text-primary mb-2">
            كيف يعمل SYGATE
          </h2>
          <p className="font-display text-lg text-ink-muted italic">
            How it works
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              {/* Step */}
              <div className="flex flex-col items-center text-center fade-up" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <div 
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-3
                    ${step.completed ? 'bg-success' : 'bg-primary'}
                  `}
                >
                  {step.completed ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <span className="text-white font-arabic font-bold text-xl">{step.num}</span>
                  )}
                </div>
                <step.icon className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-arabic font-semibold text-ink">{step.label}</h3>
                <p className="font-display text-xs text-ink-muted italic">{step.labelEn}</p>
              </div>

              {/* Connector Line (not after last) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block w-16 h-0.5 border-r-2 border-dashed border-border" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}