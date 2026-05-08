export const services = [
  {
    id: 'airport',
    name: 'استقبال المطار',
    nameEn: 'Airport Pickup',
    icon: 'Car',
    price: 35,
    currency: 'USD',
    category: 'visit',
    description: 'استقبال VIP من المطار مباشرة',
  },
  {
    id: 'sim',
    name: 'شريحة اتصال',
    nameEn: 'SIM Card & Internet',
    icon: 'Wifi',
    price: 15,
    currency: 'USD',
    category: 'visit',
    description: 'شريحة اتصال سوريّة مع إنترنت',
  },
  {
    id: 'stay',
    name: 'إقامة موثوقة',
    nameEn: 'Trusted Stay',
    icon: 'Home',
    price: 60,
    currency: 'USD',
    category: 'visit',
    description: 'سكن موثوق ومدعوم بضمان',
  },
  {
    id: 'medicine',
    name: 'توصيل دواء',
    nameEn: 'Medicine Delivery',
    icon: 'Pill',
    price: 20,
    currency: 'USD',
    category: 'family',
    description: 'توصيل الأدوية لأهلك في سوريا',
  },
  {
    id: 'gift',
    name: 'هدايا وورد',
    nameEn: 'Gifts & Flowers',
    icon: 'Gift',
    price: 25,
    currency: 'USD',
    category: 'family',
    description: 'إرسال هدايا وورود لأحبائك',
  },
  {
    id: 'doctor',
    name: 'طبيب منزلي',
    nameEn: 'Home Doctor',
    icon: 'Stethoscope',
    price: 45,
    currency: 'USD',
    category: 'family',
    description: 'طبيب منزلي visits in Syria',
  },
  {
    id: 'lab',
    name: 'مختبر',
    nameEn: 'Lab Tests',
    icon: 'FlaskConical',
    price: 30,
    currency: 'USD',
    category: 'family',
    description: 'تحاليل طبية بالمنزل',
  },
  {
    id: 'home-services',
    name: 'خدمات منزلية',
    nameEn: 'Home Services',
    icon: 'Wrench',
    price: 25,
    currency: 'USD',
    category: 'family',
    description: 'صيانة وإصلاحات منزلية',
  },
  {
    id: 'bills',
    name: 'دفع فواتير',
    nameEn: 'Bill Payment',
    icon: 'Receipt',
    price: 5,
    currency: 'USD',
    category: 'family',
    description: 'دفع فواتير الكهرباء والمياه',
  },
];

export const activeOrders: Array<{
  id: string;
  service: string;
  serviceEn: string;
  status: 'confirmed' | 'pending' | 'in-progress' | 'completed' | 'cancelled';
  date: string;
  time: string;
  agent: string | null;
  price: string;
  icon: string;
}> = [
  {
    id: 'SYG-2025-00847',
    service: 'استقبال المطار',
    serviceEn: 'Airport Pickup',
    status: 'confirmed',
    date: '15 يناير 2025',
    time: '14:30',
    agent: 'محمد الدريعي',
    price: '$35',
    icon: 'Car',
  },
  {
    id: 'SYG-2025-00848',
    service: 'توصيل دواء',
    serviceEn: 'Medicine Delivery',
    status: 'in-progress',
    date: '16 يناير 2025',
    time: '10:00',
    agent: null,
    price: '$20',
    icon: 'Pill',
  },
];

export const pastOrders: Array<{
  id: string;
  service: string;
  serviceEn: string;
  status: 'completed';
  date: string;
  time: string;
  agent: string;
  price: string;
  icon: string;
  rating: number;
}> = [
  {
    id: 'SYG-2025-00789',
    service: 'استقبال المطار',
    serviceEn: 'Airport Pickup',
    status: 'completed',
    date: '10 ديسمبر 2024',
    time: '08:00',
    agent: 'أحمد',
    price: '$35',
    icon: 'Car',
    rating: 5,
  },
  {
    id: 'SYG-2025-00765',
    service: 'شريحة اتصال',
    serviceEn: 'SIM Card',
    status: 'completed',
    date: '10 ديسمبر 2024',
    time: '08:30',
    agent: 'Store Partner',
    price: '$15',
    icon: 'Wifi',
    rating: 5,
  },
  {
    id: 'SYG-2025-00650',
    service: 'طبيب منزلي',
    serviceEn: 'Home Doctor',
    status: 'completed',
    date: '15 نوفمبر 2024',
    time: '11:00',
    agent: 'د. سامر',
    price: '$45',
    icon: 'Stethoscope',
    rating: 4,
  },
];

export const pricingBreakdown = {
  airport: { base: 30, guarantee: 5, total: 35, sypEquivalent: 175000 },
  sim: { base: 12, guarantee: 3, total: 15, sypEquivalent: 75000 },
  stay: { base: 55, guarantee: 5, total: 60, sypEquivalent: 300000 },
  medicine: { base: 17, guarantee: 3, total: 20, sypEquivalent: 100000 },
  gift: { base: 22, guarantee: 3, total: 25, sypEquivalent: 125000 },
  doctor: { base: 40, guarantee: 5, total: 45, sypEquivalent: 225000 },
  lab: { base: 27, guarantee: 3, total: 30, sypEquivalent: 150000 },
  'home-services': { base: 22, guarantee: 3, total: 25, sypEquivalent: 125000 },
  bills: { base: 3, guarantee: 2, total: 5, sypEquivalent: 25000 },
};

export const mockUser = {
  name: 'أحمد المحمد',
  nameEn: 'Ahmad Al-Mohammad',
  phone: '+49 152 123 4567',
  location: 'برلين، ألمانيا',
  initials: 'أ م',
};

export const steps = [
  { num: 1, label: 'اختر الخدمة', labelEn: 'Choose Service' },
  { num: 2, label: 'تفاصيل الرحلة', labelEn: 'Trip Details' },
  { num: 3, label: 'السعر الثابت', labelEn: 'Fixed Price' },
  { num: 4, label: 'الدفع', labelEn: 'Payment' },
  { num: 5, label: 'التأكيد', labelEn: 'Confirmed' },
];