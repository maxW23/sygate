import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-[#1F3A5F] via-[#1F3A5F] to-[#0F1F33] overflow-hidden">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A5F]/90 via-[#1F3A5F]/50 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <div className="animate-fade-up mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm border border-white/20">
                <span className="w-2 h-2 bg-[#6B8E23] rounded-full animate-pulse" />
                الآن في النسخة التجريبية المبكرة
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="animate-fade-up font-arabic font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              زيارتك عائلتك..
              <br />
              <span className="text-[#C96A3D]">بضمانتنا.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="animate-fade-up font-arabic text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              البوابة الرقمية الأولى للمغترب السوري.
            </p>
            <p className="animate-fade-up font-arabic text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              تخلص من القلق والوسطاء، واحجز خدماتك ورحلاتك لك ولأهلك في سورية عبر منصة آمنة تدفع فيها بعملتك ولا تسلم المال إلا بعد تأكيد وصول الخدمة.
            </p>
            
            {/* CTA Buttons */}
            <div className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative px-10 py-5 bg-[#C96A3D] text-white font-arabic font-bold rounded-2xl hover:bg-[#A9552F] transition-all duration-300 hover:scale-105 shadow-xl shadow-[#C96A3D]/30 overflow-hidden">
                <span className="relative z-10">احجز راحتك الآن</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-arabic font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                شاهد كيف يعمل
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="animate-fade-up flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                <span className="text-2xl">💳</span>
                <span className="font-arabic">مدفوعات أوروبية آمنة</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                <span className="text-2xl">✅</span>
                <span className="font-arabic">مزودون موثقون ميدانياً</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                <span className="text-2xl">🛡️</span>
                <span className="font-arabic">ضمان استرداد كامل</span>
              </div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F5E9DA"/>
            </svg>
          </div>
        </section>

        {/* Problem & Empathy Section */}
        <section className="py-24 bg-[#F5E9DA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#1F3A5F] mb-8 leading-tight">
              السفر والاهتمام بالأهل<br />لا يجب أن يكون عبئاً
            </h2>
            <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B] mb-12 leading-relaxed">
              نحن نعرف شعورك تماماً. القلق المستمر عند حجز سيارة من المطار، الإحراج في طلب المساعدة من الأقارب، عدم وضوح الأسعار، والخوف من عدم وصول الدواء أو الخدمة لوالدتك في الوقت المناسب.
            </p>
            
            {/* The Promise */}
            <div className="animate-fade-up bg-white rounded-3xl p-10 mt-16 shadow-xl shadow-[#1F3A5F]/5">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-5xl">🎯</span>
                <h3 className="font-arabic font-bold text-2xl text-[#1F3A5F]">وعد سيجيت (The SYGATE Promise)</h3>
              </div>
              <p className="font-arabic text-lg text-[#1A1A1A] leading-relaxed">
                لقد بنينا SYGATE لنعيد لك السيطرة والاستقلالية. أنت تطلب الخدمة من مكانك، ونحن نضمن التنفيذ على الأرض بمعايير لا تقبل المساومة.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - The Trust Loop */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#1F3A5F] mb-4">
                كيف نضمن لك حقك؟
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                نظام الدفع الآمن المعتمد على Escrow و PIN
              </p>
            </div>

            {/* Step 1 */}
            <div className="animate-fade-up bg-[#F5E9DA] rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#1F3A5F] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#1A1A1A] mb-4">اطلب وادفع بأمان</h3>
                <ul className="font-arabic text-lg text-[#6B6B6B] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>اختر الخدمة (تاكسي مطار، توصيل دواء، إلخ)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>ادفع باليورو عبر بطاقتك الائتمانية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>المبلغ يحتجز بأمان في أوروبا ولا يذهب للمورد</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="animate-fade-up bg-[#F5E9DA] rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#1F3A5F] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#1A1A1A] mb-4">التنفيذ الميداني</h3>
                <ul className="font-arabic text-lg text-[#6B6B6B] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>المورد المدقق من قبلنا في سورية يتوجه لتنفيذ خدمتك</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>في الوقت المحدد وبالمواصفات المتفق عليها</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>شبكة موردين مغلقة وموثقة</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="animate-fade-up bg-[#E6F0D6] border-2 border-[#6B8E23] rounded-3xl p-10 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#6B8E23] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#3E5A14] mb-4">تأكيد الوصول</h3>
                <ul className="font-arabic text-lg text-[#3E5A14] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>عند وصول السائق أو تسليم الغرض</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>يتم مسح كود (QR) أو إدخال رمز سري (PIN)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#6B8E23]">✓</span>
                    <span>من هاتفك أو هاتف أهلك</span>
                  </li>
                  <li className="flex items-start gap-3 font-bold bg-[#6B8E23]/10 rounded-xl p-3 mt-4">
                    <span>🎯</span>
                    <span>اللحظة الوحيدة التي يتم فيها تحرير الدفعة للمورد</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#F5E9DA]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#1F3A5F] mb-4">
                خدماتنا الحالية
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                Phase 1 MVP - خدماتنا الأولية
              </p>
            </div>

            {/* Direction A: Travel & Visit */}
            <div className="mb-16">
              <h3 className="animate-fade-up font-arabic font-bold text-2xl text-center text-[#1F3A5F] mb-10 flex items-center justify-center gap-4">
                <span className="w-12 h-1 bg-[#C96A3D] rounded-full"></span>
                الاتجاه أ: زيارة بدون توتر (Travel & Visit)
                <span className="w-12 h-1 bg-[#C96A3D] rounded-full"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '📱', title: 'اتصال فوري', desc: 'شريحة اتصال مجهزة مسبقاً تنتظرك عند نقطة الوصول', color: 'bg-[#1F3A5F]' },
                  { icon: '🚗', title: 'تنقل', desc: 'سيارات موثوقة، تسعيرة ثابتة، وتتبع مباشر لرحلتك', color: 'bg-[#6B8E23]' },
                  { icon: '🏨', title: 'إقامة', desc: 'فنادق وشقق سكنية ذات مواصفات وجودة مضمونة', color: 'bg-[#C96A3D]' },
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="animate-fade-up bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg`}>
                      {service.icon}
                    </div>
                    <h4 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-3">{service.title}</h4>
                    <p className="font-arabic text-[#6B6B6B]">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction B: SYGATE Concierge */}
            <div>
              <h3 className="animate-fade-up font-arabic font-bold text-2xl text-center text-[#1F3A5F] mb-10 flex items-center justify-center gap-4">
                <span className="w-12 h-1 bg-[#6B8E23] rounded-full"></span>
                الاتجاه ب: الرعاية والخدمات الشخصية (SYGATE Concierge)
                <span className="w-12 h-1 bg-[#6B8E23] rounded-full"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="animate-fade-up bg-[#1F3A5F]/5 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-[#1F3A5F]/10">
                  <span className="text-5xl mb-6 block">🌍</span>
                  <h4 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">رفاهية الزائر (داخل سورية)</h4>
                  <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                    استمتع بإجازتك ونفذ طلباتك اليومية دون الحاجة للتعامل بالعملة النقدية المحلية أو المفاوضة؛ بطاقتك الأوروبية تكفي.
                  </p>
                </div>
                <div className="animate-fade-up bg-[#C96A3D]/5 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-[#C96A3D]/10">
                  <span className="text-5xl mb-6 block">👨‍👩‍👧</span>
                  <h4 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">رعاية العائلة (وأنت في الخارج)</h4>
                  <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                    ضمان وصول الأدوية الحرجة، السلال الغذائية، والهدايا لعائلتك في موعدها. يتم توثيق الخدمات بالصور لراحة بالك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Shield Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#1F3A5F] mb-4">
                الثقة ليست كلمة.. الثقة نظام
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                The Moat - لماذا سيجيت؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-up bg-[#E6F0D6] rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#6B8E23]/20">
                <div className="w-20 h-20 rounded-full bg-[#6B8E23]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💳</span>
                </div>
                <h3 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">صفر مفاجآت مالية</h3>
                <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                  الدفع الإلكتروني المسبق ينهي عصر "المفاوضة" والمفاجآت النقدية.
                </p>
              </div>

              <div className="animate-fade-up bg-[#1F3A5F]/5 rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#1F3A5F]/10">
                <div className="w-20 h-20 rounded-full bg-[#1F3A5F]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">شبكة موردين مغلقة</h3>
                <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                  موردونا يمرون باختبارات أمنية وتشغيلية صارمة (لا نقبل أي سائق أو صيدلية عشوائية).
                </p>
              </div>

              <div className="animate-fade-up bg-[#F3D2C2] rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#C96A3D]/20">
                <div className="w-20 h-20 rounded-full bg-[#C96A3D]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔄</span>
                </div>
                <h3 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">استرداد مضمون</h3>
                <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                  إذا لم تنفذ الخدمة بالشكل المتفق عليه، يعود مبلغك المحتجز إلى بطاقتك فوراً دون تعقيدات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-[#1F3A5F] to-[#0F1F33]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-up bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <p className="font-arabic text-3xl text-white/90 mb-8 leading-relaxed italic">
                "SYGATE ليست مجرد منصة خدمات، إنها البنية التحتية لكرامتك واستقلاليتك في بلدك"
              </p>
              
              <h3 className="font-arabic font-bold text-2xl text-white mb-4">
                كن من أوائل المؤسسين لشبكة الثقة
              </h3>
              <p className="font-arabic text-white/70 text-xl mb-10">
                واحصل على خصومات المؤسسين الدائمة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني"
                  className="px-8 py-5 rounded-2xl bg-white text-[#1A1A1A] font-arabic text-lg w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-[#C96A3D]/50"
                />
                <button className="px-10 py-5 bg-[#C96A3D] text-white font-arabic font-bold rounded-2xl hover:bg-[#A9552F] transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
                  احجز مكانك الآن
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}