'use client';

import React from 'react';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="relative bg-primary py-16 sm:py-20 overflow-hidden">
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid2" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-arabic font-bold text-3xl sm:text-4xl text-white mb-4">
          جاهز تبدأ؟
        </h2>
        <p className="font-display text-lg text-white/80 mb-8 italic">
          Start your first booking today
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
            احجز الآن
          </Button>
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
           了解更多
          </Button>
        </div>
      </div>
    </section>
  );
}