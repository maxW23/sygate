import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden">
          {/* Background Gradient Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/gradient.jpg')`,
            }}
          />
          
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-[#020B43]/70" />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <div className="animate-fade-up mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm border border-white/20">
                <span className="w-2 h-2 bg-[#04D9B2] rounded-full animate-pulse" />
                الآن في النسخة التجريبية المبكرة
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="animate-fade-up font-arabic font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              زيارتك عائلتك..
              <br />
              <span className="text-[#04D9B2]">بضمانتنا.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="animate-fade-up font-arabic text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              البوابة الرقمية الأولى للمغترب السوري.
            </p>
            <p className="animate-fade-up font-arabic text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              لا وسطاء. لا قلق. لا دفع قبل التسليم.
            </p>
            <p className="animate-fade-up font-arabic text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              احجز مواصلات وخدمات لأهلك في سوريا مباشرةً من مكانك — بعملتك الأوروبية — وادفع فقط بعد أن تتأكد بنفسك أن الخدمة وصلت.
            </p>
            
            {/* CTA Buttons */}
            <div className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative px-10 py-5 bg-[#04D9B2] text-white font-arabic font-bold rounded-2xl hover:bg-[#04C4A0] transition-all duration-300 hover:scale-105 shadow-xl shadow-[#04D9B2]/30 overflow-hidden">
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
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F2EFE9"/>
            </svg>
          </div>
        </section>

        {/* Problem & Empathy Section */}
        <section className="py-24 bg-[#F2EFE9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#020B43] mb-8 leading-tight">
              نعرف كيف تشعر
            </h2>
            <div className="animate-fade-up font-arabic text-xl text-[#6B6B6B] mb-12 leading-loose space-y-4 text-right">
              <p>القلق كل مرة تحجز سيارة من المطار ولا تعرف إن كانت ستصل</p>
              <p>الإحراج حين تضطر لطلب المساعدة من قريب كل مرة</p>
              <p>الخوف أن يتأخر الدواء أو لا يصل لأمك في الوقت المناسب</p>
              <p className="font-bold text-[#020B43] mt-6">هذا بالضبط ما بنينا SYGATE لإنهائه.</p>
            </div>
            
            {/* The Promise */}
            <div className="animate-fade-up bg-white rounded-3xl p-10 mt-16 shadow-xl shadow-[#020B43]/5">
              <div className="flex items-center justify-center gap-4 mb-6">
                <h3 className="font-arabic font-bold text-2xl text-[#020B43]">السيطرة تعود إليك</h3>
              </div>
              <p className="font-arabic text-lg text-[#1A1A1A] leading-relaxed">
                من أي مكان في العالم.
              </p>
              <p className="font-arabic text-lg text-[#1A1A1A] leading-relaxed mt-4">
                تطلب الخدمة من أوروبا، ونحن ننفذها على الأرض في سوريا بدقة ومعايير واضحة.
              </p>
              <p className="font-arabic text-lg text-[#F26849] font-bold mt-4">
                لا مفاجآت. لا تأخير. لا تسويف.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - The Trust Loop */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#020B43] mb-4">
                كيف نضمن لك حقك؟
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                نظام الدفع الآمن المعتمد على Escrow و PIN
              </p>
            </div>

            {/* Step 1 */}
            <div className="animate-fade-up bg-[#F2EFE9] rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#020B43] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">1</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#1A1A1A] mb-4">اطلب الخدمة</h3>
                <ul className="font-arabic text-lg text-[#6B6B6B] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>اختر الخدمة (تاكسي، توصيل أدوية، سلال غذائية، إلخ)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>ادفع باليورو من بطاقتك الأوروبية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>المبلغ يحتجز بأمان — لا يذهب للمورد إلا بعد تأكيد وصول الخدمة</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="animate-fade-up bg-[#F2EFE9] rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#020B43] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">2</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#1A1A1A] mb-4">مالك محمي عندنا</h3>
                <ul className="font-arabic text-lg text-[#6B6B6B] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>مزود موثوق ومدقق من فريقنا في سوريا</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>شبكة موردين مغلقة — لا عشوائية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>تنفيذ بالوقت والمواصفات المتفق عليها</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="animate-fade-up bg-[#04D9B2]/10 border-2 border-[#04D9B2] rounded-3xl p-10 flex flex-col md:flex-row items-start gap-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 rounded-2xl bg-[#04D9B2] flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-white font-bold text-3xl">3</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-2xl text-[#020B43] mb-4">أنت من يعطي الإذن بالدفع</h3>
                <ul className="font-arabic text-lg text-[#020B43] space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>عند الوصول، يمسح السائق أو المزود رمز QR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#04D9B2]">✓</span>
                    <span>من هاتفك أو هاتف أهلك — أنت تتحكم</span>
                  </li>
                  <li className="flex items-start gap-3 font-bold bg-[#04D9B2]/20 rounded-xl p-3 mt-4">
                    <span>لا رمز = لا دفع. فقط عندها يُحرَّر المبلغ للمورد.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#F2EFE9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#020B43] mb-4">
                خدماتنا الحالية
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                Phase 1 MVP - خدماتنا الأولية
              </p>
            </div>

            {/* Direction A: Travel & Visit */}
            <div className="mb-16">
              <h3 className="animate-fade-up font-arabic font-bold text-2xl text-center text-[#020B43] mb-10 flex items-center justify-center gap-4">
                <span className="w-12 h-1 bg-[#F26849] rounded-full"></span>
                الاتجاه أ: زيارة بدون توتر (Travel & Visit)
                <span className="w-12 h-1 bg-[#F26849] rounded-full"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '📱', title: 'اتصال فوري', desc: 'شريحة اتصال مجهزة مسبقاً تنتظرك عند نقطة الوصول', color: 'bg-[#020B43]' },
                  { icon: '🚗', title: 'تنقل', desc: 'سيارات موثوقة، تسعيرة ثابتة، وتتبع مباشر لرحلتك', color: 'bg-[#04D9B2]' },
                  { icon: '🏨', title: 'إقامة', desc: 'فنادق وشقق سكنية ذات مواصفات وجودة مضمونة', color: 'bg-[#F26849]' },
                ].map((service, idx) => (
                  <div 
                    key={idx} 
                    className="animate-fade-up bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg text-white`}>
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
              <h3 className="animate-fade-up font-arabic font-bold text-2xl text-center text-[#020B43] mb-10 flex items-center justify-center gap-4">
                <span className="w-12 h-1 bg-[#04D9B2] rounded-full"></span>
                الاتجاه ب: الرعاية والخدمات الشخصية (SYGATE Concierge)
                <span className="w-12 h-1 bg-[#04D9B2] rounded-full"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="animate-fade-up bg-[#020B43]/5 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-[#020B43]/10">
                  <span className="text-5xl mb-6 block">🌍</span>
                  <h4 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">رفاهية الزائر (داخل سورية)</h4>
                  <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                    استمتع بإجازتك ونفذ طلباتك اليومية دون الحاجة للتعامل بالعملة النقدية المحلية أو المفاوضة؛ بطاقتك الأوروبية تكفي.
                  </p>
                </div>
                <div className="animate-fade-up bg-[#F26849]/5 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 border border-[#F26849]/10">
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
              <h2 className="animate-fade-up font-arabic font-bold text-4xl sm:text-5xl text-[#020B43] mb-4">
                الثقة ليست كلمة.. الثقة نظام
              </h2>
              <p className="animate-fade-up font-arabic text-xl text-[#6B6B6B]">
                The Moat - لماذا سيجيت؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-up bg-[#04D9B2]/10 rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#04D9B2]/20">
                <div className="w-20 h-20 rounded-full bg-[#04D9B2]/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💳</span>
                </div>
                <h3 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">صفر مفاجآت مالية</h3>
                <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                  الدفع الإلكتروني المسبق ينهي عصر "المفاوضة" والمفاجآت النقدية.
                </p>
              </div>

              <div className="animate-fade-up bg-[#020B43]/5 rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#020B43]/10">
                <div className="w-20 h-20 rounded-full bg-[#020B43]/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🛡️</span>
                </div>
                <h3 className="font-arabic font-bold text-xl text-[#1A1A1A] mb-4">شبكة موردين مغلقة</h3>
                <p className="font-arabic text-[#6B6B6B] leading-relaxed">
                  موردونا يمرون باختبارات أمنية وتشغيلية صارمة (لا نقبل أي سائق أو صيدلية عشوائية).
                </p>
              </div>

              <div className="animate-fade-up bg-[#F26849]/10 rounded-3xl p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#F26849]/20">
                <div className="w-20 h-20 rounded-full bg-[#F26849]/20 flex items-center justify-center mx-auto mb-6">
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
        <section className="py-24 bg-[#020B43]">
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
                  className="px-8 py-5 rounded-2xl bg-white text-[#1A1A1A] font-arabic text-lg w-full sm:w-96 focus:outline-none focus:ring-4 focus:ring-[#F26849]/50"
                />
                <button className="px-10 py-5 bg-[#04D9B2] text-white font-arabic font-bold rounded-2xl hover:bg-[#04C4A0] transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
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