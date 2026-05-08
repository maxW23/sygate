'use client';

import React from 'react';
import Card from '../ui/Card';
import { UserX, AlertCircle, ShieldOff } from 'lucide-react';

const problems = [
  {
    icon: UserX,
    title: 'وسطاء غير موثوقين',
    titleEn: 'Unreliable middlemen',
    description: 'لا ضمان على服务质量 أو السعر المتفق عليه',
    descriptionEn: 'No guarantee on service quality or agreed price',
  },
  {
    icon: AlertCircle,
    title: 'تحويلات مالية غير واضحة',
    titleEn: 'Unclear money transfers',
    description: 'غياب الشفافية في أسعر الصرف والرسوم',
    descriptionEn: 'Lack of transparency in exchange rates and fees',
  },
  {
    icon: ShieldOff,
    title: 'خدمات بلا ضمان',
    titleEn: 'No service guarantee',
    description: 'مخاطر عالية عند التعامل مع غرباء',
    descriptionEn: 'High risks when dealing with strangers',
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-bg-main py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-arabic font-bold text-3xl sm:text-4xl text-primary mb-2">
            المشكلة التي نحلّها
          </h2>
          <p className="font-display text-lg text-ink-muted italic">
            The problem we solve
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <Card 
              key={idx} 
              hover 
              className="text-center fade-up"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-bg flex items-center justify-center">
                <problem.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="font-arabic font-bold text-lg text-ink mb-2">
                {problem.title}
              </h3>
              <p className="font-arabic text-sm text-ink-muted mb-4">
                {problem.description}
              </p>
              
              <div className="inline-block px-3 py-1 bg-error-bg text-error text-xs font-arabic rounded-full">
                الوضع الحالي
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}