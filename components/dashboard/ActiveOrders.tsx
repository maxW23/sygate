'use client';

import React from 'react';
import OrderCard from './OrderCard';
import { activeOrders } from '@/lib/mockData';

export default function ActiveOrders() {
  return (
    <section className="mb-8">
      <h2 className="font-arabic font-bold text-xl text-primary mb-4">
        طلباتي الحالية
        <span className="font-display text-ink-muted text-base font-normal mr-2 italic">
          / Active Orders
        </span>
      </h2>
      <div className="space-y-4">
        {activeOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}