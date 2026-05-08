'use client';

import React from 'react';
import Link from 'next/link';
import { Package, FileText, Users, Settings, LogOut, Home } from 'lucide-react';
import { mockUser } from '@/lib/mockData';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function DashboardSidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { id: 'active', icon: Package, label: 'طلباتي الحالية' },
    { id: 'past', icon: FileText, label: 'الطلبات السابقة' },
    { id: 'family', icon: Users, label: 'دعم الأهل', badge: 'قريباً' },
    { id: 'settings', icon: Settings, label: 'الإعدادات' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-primary min-h-screen p-4">
      {/* User Info */}
      <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-bold text-lg">{mockUser.initials}</span>
        </div>
        <div>
          <p className="text-white font-arabic font-semibold">{mockUser.name}</p>
          <p className="text-white/60 text-xs font-arabic">{mockUser.phone}</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg font-arabic text-sm transition-colors
              ${activeTab === item.id 
                ? 'bg-white/15 text-white' 
                : 'text-white/70 hover:bg-white/10 hover:text-white'}
            `}
          >
            <item.icon className="w-5 h-5" />
            <span className="flex-1 text-right">{item.label}</span>
            {item.badge && (
              <span className="px-2 py-0.5 bg-accent text-white text-xs rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="pt-4 border-t border-white/10">
        <Link 
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-arabic text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="flex-1 text-right">الرئيسية</span>
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-arabic text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="flex-1 text-right">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}