'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send, Shield, QrCode, Clock, Globe, MessageCircle } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function Footer() {
  const [email, setEmail] = useState('');

  const footerLinks = [
    { href: '#services', label: 'خدماتنا' },
    { href: '#how-it-works', label: 'كيف نعمل' },
    { href: '#trust', label: 'الأمان والضمان' },
    { href: '/dashboard', label: 'لوحة التحكم' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const legalLinks = [
    { href: '#privacy', label: 'سياسة الخصوصية' },
    { href: '#terms', label: 'الشروط والأحكام' },
    { href: '#faq', label: 'الأسئلة الشائعة' },
  ];

  const trustBadges = [
    { icon: <Shield className="w-5 h-5" />, label: 'ضمان استرداد 100%' },
    { icon: <Clock className="w-5 h-5" />, label: 'دعم 24/7' },
    { icon: <QrCode className="w-5 h-5" />, label: 'تأكيد فوري' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-primary-active">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer hover-lift"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center icon-bounce">
                {badge.icon}
              </div>
              <span className="font-arabic text-sm">{badge.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/icon.png" 
                alt="SYGATE" 
                className="h-10 w-auto hover:scale-105 transition-transform"
              />
              <span className="font-arabic font-bold text-xl text-white">SYGATE</span>
            </div>
            <p className="text-white/70 font-arabic text-sm">
              منصة الثقة للمغترب السوري
            </p>
            <p className="text-white/50 text-xs">
              خدمات موثوقة وآمنة للعائلات السوريّة في الداخل والخارج
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-primary transition-all icon-bounce">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-primary transition-all icon-bounce">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="text-white font-arabic font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white font-arabic text-sm hover:underline transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-arabic font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-white/70 font-arabic text-sm">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@sygate.io">info@sygate.io</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+491521234567">+49 152 123 4567</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>برلين، ألمانيا</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-arabic font-semibold mb-4">النشرة البريدية</h4>
            <p className="text-white/70 text-xs mb-4">
              تابع آخر العروض والخدمات الجديدة
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                variant="primary" 
                className="w-full"
                icon={<Send className="w-4 h-4" />}
              >
                اشتراك
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 font-arabic text-sm">
              © 2025 SYGATE. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-4 text-sm">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-white/50 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}