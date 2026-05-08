'use client';

import React from 'react';
import { pastOrders } from '@/lib/mockData';
import { Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt
};

export default function PastOrders() {
  return (
    <section className="mb-8">
      <h2 className="font-arabic font-bold text-xl text-primary mb-4">
        الطلبات السابقة
        <span className="font-display text-ink-muted text-base font-normal mr-2 italic">
          / Past Orders
        </span>
      </h2>
      <div className="space-y-3">
        {pastOrders.map((order) => {
          const Icon = iconMap[order.icon] || Car;
          return (
            <div 
              key={order.id}
              className="flex items-center gap-4 p-4 bg-white border border-border rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-arabic font-semibold text-ink text-sm">{order.service}</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-success-bg text-success-text">
                    مكتمل
                  </span>
                </div>
                <p className="font-mono text-xs text-ink-muted">{order.id}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-sm ${i < (order.rating || 5) ? 'text-warning' : 'text-border'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}