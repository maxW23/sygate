import React from 'react';

type StatusType = 'confirmed' | 'pending' | 'in-progress' | 'completed' | 'cancelled';

interface StatusBadgeProps {
  status: StatusType;
}

const statusConfig: Record<StatusType, { bg: string; text: string; label: string }> = {
  confirmed: { bg: 'bg-success-bg', text: 'text-success-text', label: 'مؤكد' },
  pending: { bg: 'bg-warning-bg', text: 'text-amber-700', label: 'قيد الانتظار' },
  'in-progress': { bg: 'bg-primary/10', text: 'text-primary', label: 'قيد التنفيذ' },
  completed: { bg: 'bg-success-bg', text: 'text-success-text', label: 'مكتمل' },
  cancelled: { bg: 'bg-error-bg', text: 'text-error', label: 'ملغى' },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-arabic ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}