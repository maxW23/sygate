'use client';

import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function HeroSection() {
  const stats = [
    { icon: '🏠', label: '+500 عائلة موثوقة' },
    { icon: '💰', label: 'سعر ثابت دائماً' },
    { icon: '✅', label: 'تأكيد فوري بـ QR' },
  ];

  return (
    <section className="relative min-h-[90vh] bg-primary flex items-center justify-center overflow-hidden">
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="fade-up mb-6" style={{ animationDelay: '0.1s' }}>
          <Badge variant="success">منصة الثقة للمغترب السوري</Badge>
        </div>

        {/* Main Headline */}
        <h1 
          className="fade-up font-arabic font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
          style={{ animationDelay: '0.2s' }}
        >
          وصل بأمان.
          <br />
          تحكّم من بُعد.
        </h1>

        {/* English Subtitle */}
        <p 
          className="fade-up font-display text-lg sm:text-xl text-white/80 mb-4"
          style={{ animationDelay: '0.3s' }}
        >
          Trusted services for Syrians abroad — from airport to your family's door
        </p>

        {/* Supporting Description */}
        <p 
          className="fade-up font-arabic text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto"
          style={{ animationDelay: '0.4s' }}
        >
          نقدم خدمات موثوقة بسعر ثابت — استقبال مطار، إقامة، شريحة اتصال، ودعم أهلك داخل سوريا
        </p>

        {/* CTA Buttons */}
        <div 
          className="fade-up flex flex-col sm:flex-row gap-4 justify-center mb-12"
          style={{ animationDelay: '0.5s' }}
        >
          <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
            احجز استقبال المطار
          </Button>
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            دعم الأهل
          </Button>
        </div>

        {/* Stats */}
        <div 
          className="fade-up flex flex-wrap justify-center gap-6 sm:gap-12"
          style={{ animationDelay: '0.6s' }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/60 text-sm font-arabic">
              <span>{stat.icon}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}