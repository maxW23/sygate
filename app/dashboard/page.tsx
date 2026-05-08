'use client';

import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import ActiveOrders from '@/components/dashboard/ActiveOrders';
import PastOrders from '@/components/dashboard/PastOrders';
import FamilySupportPreview from '@/components/dashboard/FamilySupportPreview';
import { Package, FileText, Users, Settings } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('active');

  const today = new Date().toLocaleDateString('ar-SA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex min-h-screen bg-bg-main">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-arabic font-bold text-2xl text-ink">
            مرحباً، أحمد 👋
          </h1>
          <p className="font-arabic text-ink-muted">{today}</p>
        </div>

        {/* Content */}
        <div className="max-w-4xl">
          {activeTab === 'active' && <ActiveOrders />}
          {activeTab === 'past' && <PastOrders />}
          {activeTab === 'family' && <FamilySupportPreview />}
          {activeTab === 'settings' && (
            <div className="text-center py-12">
              <Settings className="w-16 h-16 text-ink-muted mx-auto mb-4" />
              <p className="font-arabic text-ink-muted">الإعدادات — قريباً</p>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Tabs */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around py-3 z-50">
        <button 
          onClick={() => setActiveTab('active')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'active' ? 'text-primary' : 'text-ink-muted'}`}
        >
          <Package className="w-5 h-5" />
          <span className="text-xs font-arabic">طلباتي</span>
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'past' ? 'text-primary' : 'text-ink-muted'}`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-arabic">السابقة</span>
        </button>
        <button 
          onClick={() => setActiveTab('family')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'family' ? 'text-primary' : 'text-ink-muted'}`}
        >
          <Users className="w-5 h-5" />
          <span className="text-xs font-arabic">الأهل</span>
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-primary' : 'text-ink-muted'}`}
        >
          <Settings className="w-5 h-5" />
          <span className="text-xs font-arabic">إعدادات</span>
        </button>
      </div>
    </div>
  );
}