'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'خدماتنا', labelEn: 'Services' },
    { href: '#how-it-works', label: 'كيف نعمل', labelEn: 'How it works' },
    { href: '#trust', label: 'الأمان والضمان', labelEn: 'Trust & Safety' },
    { href: '#contact', label: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className={`
        hidden lg:block bg-primary text-white/80 py-2 text-xs font-arabic transition-all duration-300
        ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-8 opacity-100'}
      `}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              +49 152 123 4567
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@sygate.io
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>🇩🇪 Berlin</span>
            <span>•</span>
            <span>🇸🇾 Syria</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`
        sticky top-0 z-50 bg-bg-main border-b border-border transition-all duration-300
        ${scrolled ? 'shadow-md' : ''}
      `}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <img 
                  src="/logo.jpg" 
                  alt="SYGATE" 
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-arabic font-bold text-xl text-primary group-hover:text-primary/80 transition-colors">
                SYGATE
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-ink hover:text-primary font-arabic transition-colors"
                >
                  {lang === 'ar' ? link.label : link.labelEn}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Language Toggle - Pill Style */}
              <button
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1 text-sm font-arabic bg-bg-section rounded-full px-2 py-1 hover:bg-primary/10 transition-colors"
              >
                <span className={lang === 'ar' ? 'text-primary font-bold' : 'text-ink-muted'}>AR</span>
                <span className="text-border">/</span>
                <span className={lang === 'en' ? 'text-primary font-bold' : 'text-ink-muted'}>EN</span>
              </button>

              {/* CTA Button */}
              <Link href="#waitlist" className="hidden md:block">
                <Button variant="primary" size="sm">انضم للقائمة المسبقة</Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-ink hover:bg-primary/5 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? 'max-h-80 border-t border-border' : 'max-h-0'}
        `}>
          <div className="px-4 py-4 space-y-3 bg-bg-main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-ink hover:text-primary font-arabic py-2 border-b border-border/50"
                onClick={() => setIsMenuOpen(false)}
              >
                {lang === 'ar' ? link.label : link.labelEn}
              </a>
            ))}
            <Link href="#waitlist" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" className="w-full mt-2">انضم للقائمة المسبقة</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}