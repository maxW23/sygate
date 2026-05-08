'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface Step4Props {
  onPaymentComplete: () => void;
  onPrev: () => void;
}

export default function Step4_Payment({ onPaymentComplete, onPrev }: Step4Props) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onPaymentComplete();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-arabic font-bold text-2xl text-primary mb-2">
          إتمام الدفع
        </h2>
        <p className="font-display text-ink-muted italic">
          Complete Payment
        </p>
      </div>

      {/* Payment Methods */}
      <Card className="mb-6">
        <div className="flex gap-4 mb-6 border-b border-border pb-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-arabic text-sm">
            💳 بطاقة ائتمانية
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-ink-muted font-arabic text-sm hover:bg-primary/5">
            🏦 تحويل بنكي
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-ink-muted font-arabic text-sm hover:bg-primary/5">
            🌐 Wise / PayPal
          </button>
        </div>

        {/* Card Form */}
        <div className="space-y-4">
          <Input
            label="رقم البطاقة"
            placeholder="____ ____ ____ ____"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            maxLength={19}
          />
          <Input
            label="اسم حامل البطاقة"
            placeholder="أدخل اسمك كما هو على البطاقة"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="تاريخ الانتهاء"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              maxLength={5}
            />
            <Input
              label="CVV"
              placeholder="___"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
              maxLength={3}
              type="password"
            />
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-border">
          <span className="text-ink-muted text-sm flex items-center gap-1">🔒 SSL</span>
          <span className="text-ink-muted text-sm flex items-center gap-1">🛡️ PCI DSS</span>
          <span className="text-ink-muted text-sm flex items-center gap-1">✓ مشفر</span>
        </div>
        <p className="text-center text-ink-muted text-xs font-arabic mt-2">
          دفعك محمي بتشفير 256-bit
        </p>
      </Card>

      <div className="flex justify-between">
        <Button variant="secondary" onClick={onPrev}>
          ← السابق
        </Button>
        <Button 
          variant="primary" 
          size="lg" 
          onClick={handlePayment}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              جارٍ معالجة الدفع...
            </span>
          ) : (
            'دفع الآن'
          )}
        </Button>
      </div>
    </div>
  );
}