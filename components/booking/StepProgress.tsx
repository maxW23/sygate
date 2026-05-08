'use client';

import React, { useState, useEffect } from 'react';
import { Check, CreditCard, FileText, Grid3x3, MapPin, CheckCircle } from 'lucide-react';
import { steps } from '@/lib/mockData';

interface StepProgressProps {
  currentStep: number;
}

const stepIcons = [
  Grid3x3,
  FileText,
  CreditCard,
  MapPin,
  CheckCircle,
];

export default function StepProgress({ currentStep }: StepProgressProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="bg-bg-main border-b border-border py-6">
      <div className="max-w-3xl mx-auto px-4">
        {/* Progress Line */}
        <div className="relative mb-6">
          <div className="absolute top-5 right-0 left-0 h-1 bg-border rounded-full" />
          <div 
            className="absolute top-5 h-1 bg-success rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="flex justify-between">
          {steps.map((step, idx) => {
            const stepNum = step.num;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            const IconComponent = stepIcons[idx];
            
            return (
              <div key={stepNum} className="relative flex flex-col items-center group">
                <div 
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300 ease-out z-10 ring-4 ring-white
                    ${isCompleted 
                      ? 'bg-success text-white scale-110' 
                      : isCurrent 
                        ? 'bg-primary text-white scale-125 shadow-lg shadow-primary/40' 
                        : 'bg-white border-2 border-border text-ink-muted'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" />
                  ) : isCurrent ? (
                    <IconComponent className="w-6 h-6" />
                  ) : (
                    <span className="font-arabic font-bold text-lg">{stepNum}</span>
                  )}
                </div>

                <span 
                  className={`
                    absolute top-14 text-sm font-arabic text-center hidden sm:block whitespace-nowrap
                    transition-all duration-200 px-2 py-1 rounded-lg
                    ${isCurrent 
                      ? 'text-primary font-bold bg-primary/10' 
                      : isCompleted 
                        ? 'text-success' 
                        : 'text-ink-muted opacity-50'
                    }
                  `}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}