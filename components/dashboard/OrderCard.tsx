'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import StatusBadge from '@/components/ui/StatusBadge';
import Button from '@/components/ui/Button';
import { Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car, Wifi, Home, Pill, Gift, Stethoscope, FlaskConical, Wrench, Receipt
};

interface OrderCardProps {
  order: {
    id: string;
    service: string;
    serviceEn: string;
    status: 'confirmed' | 'pending' | 'in-progress' | 'completed' | 'cancelled';
    date: string;
    time: string;
    agent: string | null;
    price: string;
    icon: string;
  };
  showTrack?: boolean;
}

export default function OrderCard({ order, showTrack = true }: OrderCardProps) {
  const Icon = iconMap[order.icon] || Car;

  return (
    <Card className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-arabic font-semibold text-ink">{order.service}</h3>
          <StatusBadge status={order.status} />
        </div>
        <p className="font-mono text-sm text-ink-muted mb-2">{order.id}</p>
        <div className="flex flex-wrap gap-3 text-sm text-ink-muted font-arabic">
          <span>📅 {order.date}</span>
          <span>🕐 {order.time}</span>
          {order.agent && <span>👤 {order.agent}</span>}
          <span>💰 {order.price}</span>
        </div>
      </div>

      {showTrack && order.status !== 'completed' && (
        <div className="sm:self-center">
          <Button variant="primary" size="sm">
            تتبع الطلب →
          </Button>
        </div>
      )}
    </Card>
  );
}