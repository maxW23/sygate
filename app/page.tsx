import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary to-primary-active overflow-hidden">
          {/* Background Pattern - SVG Geometric Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Badge */}
            <div className="fade-up mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                الآن في النسخة التجريبية المبكرة
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="fade-up font-arabic font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              زيارتك عائلتك..
              <br />
              <span className="text-accent">بضمانتنا.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="fade-up font-arabic text-lg sm:text-xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed">
              البوابة الرقمية الأولى للمغترب السوري.
            </p>
            <p className="fade-up font-arabic text-base text-white/70 mb-8 max-w-2xl mx-auto">
              تخلص من القلق والوسطاء، واحجز خدماتك ورحلاتك لك ولأهلك في سورية عبر منصة آمنة تدفع فيها بعملتك ولا تسلم المال إلا بعد تأكيد وصول الخدمة.
            </p>
            
            {/* CTA Buttons */}
            <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="px-8 py-4 bg-accent text-white font-arabic font-bold rounded-xl hover:bg-accent-hover transition-all duration-200 hover:scale-105 shadow-lg shadow-accent/30">
                احجز راحتك الآن
                <span className="block text-xs font-normal opacity-80">سجل في النسخة التجريبية</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-arabic font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200">
                شاهد كيف يعمل
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="fade-up flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">💳</span>
                <span>مدفوعات أوروبية آمنة</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>مزودون موثقون ميدانياً</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🛡️</span>
                <span>ضمان استرداد كامل</span>
              </div>
            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Problem & Empathy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="fade-up font-arabic font-bold text-3xl sm:text-4xl text-primary mb-6">
              السفر والاهتمام بالأهل لا يجب أن يكون عبئاً
            </h2>
            <p className="fade-up font-arabic text-lg text-ink-muted mb-8 leading-relaxed">
              نحن نعرف شعورك تماماً. القلق المستمر عند حجز سيارة من المطار، الإحراج في طلب المساعدة من الأقارب، عدم وضوح الأسعار، والخوف من عدم وصول الدواء أو الخدمة لوالدتك في الوقت المناسب.
            </p>
            
            {/* The Promise */}
            <div className="fade-up bg-bg-section rounded-2xl p-8 mt-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🎯</span>
                <h3 className="font-arabic font-bold text-xl text-primary">وعد سيجيت (The SYGATE Promise)</h3>
              </div>
              <p className="font-arabic text-ink leading-relaxed">
                لقد بنينا SYGATE لنعيد لك السيطرة والاستقلالية. أنت تطلب الخدمة من مكانك، ونحن نضمن التنفيذ على الأرض بمعايير لا تقبل المساومة.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works - The Trust Loop */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="fade-up font-arabic font-bold text-3xl sm:text-4xl text-primary mb-4">
                كيف نضمن لك حقك؟
              </h2>
              <p className="fade-up font-arabic text-ink-muted">
                نظام الدفع الآمن المعتمد على Escrow و PIN
              </p>
            </div>

            {/* Step 1 */}
            <div className="fade-up bg-white rounded-2xl p-8 mb-8 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-xl text-ink mb-2">اطلب وادفع بأمان</h3>
                <ul className="font-arabic text-ink-muted space-y-2">
                  <li>• اختر الخدمة (تاكسي مطار، توصيل دواء، إلخ)</li>
                  <li>• ادفع باليورو عبر بطاقتك الائتمانية</li>
                  <li>• المبلغ يحتجز بأمان في أوروبا ولا يذهب للمورد</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="fade-up bg-white rounded-2xl p-8 mb-8 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-xl text-ink mb-2">التنفيذ الميداني</h3>
                <ul className="font-arabic text-ink-muted space-y-2">
                  <li>• المورد المدقق من قبلنا في سورية يتوجه لتنفيذ خدمتك</li>
                  <li>• في الوقت المحدد وبالمواصفات المتفق عليها</li>
                  <li>• شبكة موردين مغلقة وموثقة</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="fade-up bg-success/10 border-2 border-success/30 rounded-2xl p-8 flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <div>
                <h3 className="font-arabic font-bold text-xl text-success-text mb-2">تأكيد الوصول</h3>
                <ul className="font-arabic text-success-text space-y-2">
                  <li>• عند وصول السائق أو تسليم الغرض</li>
                  <li>• يتم مسح كود (QR) أو إدخال رمز سري (PIN)</li>
                  <li>• من هاتفك أو هاتف أهلك</li>
                  <li className="font-bold">• اللحظة الوحيدة التي يتم فيها تحرير الدفعة للمورد</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="fade-up font-arabic font-bold text-3xl sm:text-4xl text-primary mb-4">
                خدماتنا الحالية
              </h2>
              <p className="fade-up font-arabic text-ink-muted">
               Phase 1 MVP - خدماتنا الأولية
              </p>
            </div>

            {/* Direction A: Travel & Visit */}
            <div className="mb-12">
              <h3 className="fade-up font-arabic font-bold text-xl text-center text-primary mb-6">
                الاتجاه أ: زيارة بدون توتر (Travel & Visit)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '📱', title: 'اتصال فوري', desc: 'شريحة اتصال مجهزة مسبقاً تنتظرك عند نقطة الوصول' },
                  { icon: '🚗', title: 'تنقل', desc: 'سيارات موثوقة، تسعيرة ثابتة، وتتبع مباشر لرحلتك' },
                  { icon: '🏨', title: 'إقامة', desc: 'فنادق وشقق سكنية ذات مواصفات وجودة مضمونة' },
                ].map((service, idx) => (
                  <div key={idx} className="fade-up bg-bg-section rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h4 className="font-arabic font-bold text-lg text-ink mb-2">{service.title}</h4>
                    <p className="font-arabic text-sm text-ink-muted">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction B: SYGATE Concierge */}
            <div>
              <h3 className="fade-up font-arabic font-bold text-xl text-center text-primary mb-6">
                الاتجاه ب: الرعاية والخدمات الشخصية (SYGATE Concierge)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="fade-up bg-primary/5 rounded-xl p-6">
                  <span className="text-3xl mb-4 block">🌍</span>
                  <h4 className="font-arabic font-bold text-lg text-ink mb-2">رفاهية الزائر (داخل سورية)</h4>
                  <p className="font-arabic text-sm text-ink-muted">
                    استمتع بإجازتك ونفذ طلباتك اليومية دون الحاجة للتعامل بالعملة النقدية المحلية أو المفاوضة؛ بطاقتك الأوروبية تكفي.
                  </p>
                </div>
                <div className="fade-up bg-accent/5 rounded-xl p-6">
                  <span className="text-3xl mb-4 block">👨‍👩‍👧</span>
                  <h4 className="font-arabic font-bold text-lg text-ink mb-2">رعاية العائلة (وأنت في الخارج)</h4>
                  <p className="font-arabic text-sm text-ink-muted">
                    ضمان وصول الأدوية الحرجة، السلال الغذائية، والهدايا لعائلتك في موعدها. يتم توثيق الخدمات بالصور لراحة بالك.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Shield Section */}
        <section className="py-20 bg-bg-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="fade-up font-arabic font-bold text-3xl sm:text-4xl text-primary mb-4">
                الثقة ليست كلمة.. الثقة نظام
              </h2>
              <p className="fade-up font-arabic text-ink-muted">
                The Moat - لماذا سيجيت؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="fade-up bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💳</span>
                </div>
                <h3 className="font-arabic font-bold text-lg text-ink mb-3">صفر مفاجآت مالية</h3>
                <p className="font-arabic text-sm text-ink-muted">
                  الدفع الإلكتروني المسبق ينهي عصر "المفاوضة" والمفاجآت النقدية.
                </p>
              </div>

              <div className="fade-up bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-arabic font-bold text-lg text-ink mb-3">شبكة موردين مغلقة</h3>
                <p className="font-arabic text-sm text-ink-muted">
                  موردونا يمرون باختبارات أمنية وتشغيلية صارمة (لا نقبل أي سائق أو صيدلية عشوائية).
                </p>
              </div>

              <div className="fade-up bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <h3 className="font-arabic font-bold text-lg text-ink mb-3">استرداد مضمون</h3>
                <p className="font-arabic text-sm text-ink-muted">
                  إذا لم تنفذ الخدمة بالشكل المتفق عليه، يعود مبلغك المحتجز إلى بطاقتك فوراً دون تعقيدات.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="fade-up bg-white/10 backdrop-blur-sm rounded-2xl p-10">
              <p className="font-arabic text-2xl text-white/90 mb-6 italic leading-relaxed">
                "SYGATE ليست مجرد منصة خدمات، إنها البنية التحتية لكرامتك واستقلاليتك في بلدك"
              </p>
              
              <h3 className="font-arabic font-bold text-xl text-white mb-4">
                كن من أوائل المؤسسين لشبكة الثقة
              </h3>
              <p className="font-arabic text-white/70 mb-6">
                واحصل على خصومات المؤسسين الدائمة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني"
                  className="px-6 py-4 rounded-xl bg-white text-ink font-arabic w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button className="px-8 py-4 bg-accent text-white font-arabic font-bold rounded-xl hover:bg-accent-hover transition-all">
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