'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ArabicLandingPage = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBF5FB] to-white font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="BeatApp Logo"
                width={191}
                height={49}
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-900 font-medium hover:text-[#5546FB] transition-colors">
                الصفحة الرئيسية
              </a>
              <a href="#features" className="text-gray-600 hover:text-[#5546FB] transition-colors">
                المزايا
              </a>
              <a href="#challenges" className="text-gray-600 hover:text-[#5546FB] transition-colors">
                هل تواجه هذه التحديات؟
              </a>
              <a href="#why-us" className="text-gray-900 font-medium hover:text-[#5546FB] transition-colors">
                لماذا نحن؟
              </a>
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 space-x-reverse">
              <Image
                src="/images/language-icon.svg"
                alt="Language"
                width={20}
                height={20}
              />
              <span className="bg-[#5546FB] text-white px-3 py-1 rounded-full text-sm font-medium">English</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-sans">
                نظام ذكي ينقل عملك
                <br />
                من الفوضى إلى الأتمتة
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-sans">
                حل متكامل لإدارة العملاء والأتمتة بدون تعقيد.
                <br />
                مصمم خصيصًا لأصحاب المشاريع في السعودية.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#5546FB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#322A95] transition-colors font-sans">
                  جاهز تبدأ؟
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[#5546FB] hover:text-[#5546FB] transition-colors font-sans">
                  تعرف أكثر
                </button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/hero-illustration.svg"
                alt="BeatApp Dashboard"
                width={544}
                height={608}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What BeatApp Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
              ما الذي يقدمه
              <br />
              BeatApp؟
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              أتمتة كاملة لكل عملياتك… لتكسب الوقت وتضاعف الإنتاجية.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CRM Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                CRM سهل وبالعربية
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                نظام CRM سهل وبالعربية لتبسيط عملك وزيادة إنتاجية فريقك.
              </p>
            </div>

            {/* Automation Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                أتمتة ذكية
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                أتمتة كاملة لعملياتك التجارية مع تقارير تفصيلية وتحليلات ذكية.
              </p>
            </div>

            {/* Integration Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                تكامل شامل
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                تكامل مع جميع الأنظمة والتطبيقات التي تستخدمها في عملك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
              لماذا يختار عملاؤنا
              <br />
              BeatApp؟
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              ميزات تجعل BeatApp الخيار الأول لأصحاب الأعمال
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#EBF5FB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#5546FB]">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">دعم مستمر</h3>
              <p className="text-gray-600 font-sans">دعم فني على مدار الساعة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#EBF5FB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#5546FB]">99%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">موثوقية عالية</h3>
              <p className="text-gray-600 font-sans">نسبة تشغيل عالية ومستقرة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#EBF5FB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#5546FB]">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">أمان متقدم</h3>
              <p className="text-gray-600 font-sans">حماية بيانات على أعلى مستوى</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#EBF5FB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#5546FB]">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sans">سرعة فائقة</h3>
              <p className="text-gray-600 font-sans">أداء سريع ومحسن</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
              نخدم قطاعات متنوعة
              <br />
              في السوق السعودي
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              حلولنا تناسب مختلف المجالات… لأن كل مشروع يحتاج للأتمتة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Course Providers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">
                  مقدمو الكورسات
                  <br />
                  والاستشارات
                </h3>
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Legal Services */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 font-sans">
                  المحامون ومكاتب
                  <br />
                  الخدمات
                </h3>
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/icon-legal.svg"
                    alt="Legal Services"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
              شهادات من عملائنا
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 font-sans">
                "BeatApp غير طريقة عملنا تماماً. الآن نوفر ساعات كثيرة يومياً ونركز على تطوير أعمالنا."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">أحمد محمد</h4>
                  <p className="text-gray-600 text-sm font-sans">مدير شركة تقنية</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 font-sans">
                "النظام سهل جداً والدعم الفني ممتاز. أنصح به كل صاحب مشروع."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">سارة أحمد</h4>
                  <p className="text-gray-600 text-sm font-sans">مؤسسة مكتب استشارات</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 font-sans">
                "تحسن كبير في إدارة العملاء وزيادة واضحة في المبيعات منذ استخدام BeatApp."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-sans">خالد العتيبي</h4>
                  <p className="text-gray-600 text-sm font-sans">مدير مبيعات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5546FB]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-sans">
            BeatApp…
            <br />
            كل ما تحتاجه لإدارة
            <br />
            عملائك وأتمتة عملياتك بسهولة.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-white text-[#5546FB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors font-sans">
              ابدأ تجربتك المجانية
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#5546FB] transition-colors font-sans">
              تحدث مع فريق المبيعات
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="BeatApp Logo"
                width={191}
                height={49}
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 font-sans">
                نظام ذكي لإدارة العملاء والأتمتة
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-sans">المنتج</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">المزايا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">الأسعار</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">التكامل</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-sans">الشركة</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">من نحن</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">اتصل بنا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">الوظائف</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 font-sans">الدعم</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">مركز المساعدة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">الدعم الفني</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-sans">الشروط والأحكام</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-sans">
              © 2024 BeatApp. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArabicLandingPage;