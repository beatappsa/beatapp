'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Play } from 'lucide-react';
import GoHighLevelForm from '@/components/forms/GoHighLevelForm';

const ArabicLandingPage = () => {
  const t = useTranslations();

  // Removed useEffect for form embed script as we're now using custom form

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBF5FB] to-white font-sans" dir="rtl">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-relaxed font-sans">
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
                  احجز استشارتك المجانية الآن
                </button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/elements/01.png"
                alt="BeatApp Dashboard"
                width={544}
                height={608}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          
          {/* Video Button at Bottom Center */}
          <div className="flex justify-center mt-16">
            <button className="flex items-center gap-3 bg-white text-[#5546FB] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg border border-gray-200 font-sans">
              <Play className="w-5 h-5 fill-current" />
              شاهد كيف يعمل BeatApp في دقائق
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#5546FB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5546FB] to-blue-500 rounded-3xl opacity-5"></div>
                
                <div className="text-center mb-10 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#5546FB] to-blue-500 rounded-2xl mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 font-sans leading-tight">
                    دعنا نساعدك بخطة
                    <br />
                    <span className="bg-gradient-to-r from-[#5546FB] to-blue-500 bg-clip-text text-transparent">
                      أتمتة تناسبك
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 font-sans leading-relaxed">
                    املأ بياناتك وسيتواصل معك فريقنا خلال 24 ساعة.
                  </p>
                </div>
                
                {/* Custom GoHighLevel Form */}
                <div className="w-full relative z-10">
                  <GoHighLevelForm className="" />
                </div>
                
                <div className="flex items-center justify-center mt-6 relative z-10">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-sans">بياناتك آمنة ولن نشاركها مع أي طرف</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Side - Challenges */}
            <div className="order-2 lg:order-1">
              <div className="mb-12">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-[#5546FB]/10 text-[#5546FB] rounded-full text-sm font-semibold mb-4 font-sans">
                    التحديات الشائعة
                  </span>
                  <h2 className="text-5xl font-bold text-gray-900 mb-6 font-sans leading-tight">
                    هل تواجه هذه
                    <br />
                    <span className="text-[#5546FB]">التحديات؟</span>
                  </h2>
                  <p className="text-xl text-gray-600 font-sans leading-relaxed">
                    نحن نفهم التحديات التي تواجهها في إدارة عملك
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Challenge 1 */}
                  <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5546FB]/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5546FB] to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans group-hover:text-[#5546FB] transition-colors">
                        تفقد العملاء بعد
                        <br />
                        التواصل الأول؟
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed text-sm">
                        نظام المتابعة الذكي يضمن عدم فقدان أي عميل محتمل
                      </p>
                    </div>
                  </div>

                  {/* Challenge 2 */}
                  <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5546FB]/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans group-hover:text-purple-600 transition-colors">
                        عملاؤك يأتون...
                        <br />
                        لكن لا تتم الصفقات؟
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed text-sm">
                        أدوات تحويل متقدمة تزيد معدل إتمام الصفقات
                      </p>
                    </div>
                  </div>

                  {/* Challenge 3 */}
                  <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5546FB]/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans group-hover:text-orange-600 transition-colors">
                        تضيع وقتك في الردود
                        <br />
                        والمتابعات؟
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed text-sm">
                        أتمتة ذكية توفر 80% من وقت المتابعة
                      </p>
                    </div>
                  </div>

                  {/* Challenge 4 */}
                  <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5546FB]/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans group-hover:text-green-600 transition-colors">
                        لا تعرف أداء
                        <br />
                        حملاتك التسويقية؟
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed text-sm">
                        تقارير تفصيلية تُظهر ROI كل حملة بدقة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              <span className="text-[#5546FB]">BeatApp؟</span>
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              أتمتة كاملة لكل عملياتك… لتكسب الوقت وتضاعف الإنتاجية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CRM Feature */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                CRM
                <br />
                مرئي لتتبّع المراحل
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                تابع مراحل كل عميل
                <br />
                بسهولة في لوحة واحدة.
              </p>
            </div>

            {/* Custom Registration Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                نموذج تسجيل
                <br />
                مخصص
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                يجمع بيانات عملائك
                <br />
                ويوجههم تلقائيًا للمسار
                <br />
                المناسب.
              </p>
            </div>

            {/* AI WhatsApp Chatbot */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                شات بوت واتساب
                <br />
                ذكي AI
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                يرحب بالعملاء، يرد على
                <br />
                أسئلتهم ويربطهم تلقائيًا
                <br />
                بالـــ CRM.
              </p>
            </div>

            {/* Automated Funnels */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                نظام Funnels
                <br />
                مؤتمت
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                حوّل الزوار إلى عملاء
                <br />
                تلقائيًا من أول زيارة حتى
                <br />
                إغلاق الصفقة.
              </p>
            </div>

            {/* Instant Smart Reports */}
             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
               <div className="w-16 h-16 bg-[#EBF5FB] rounded-full flex items-center justify-center mb-6">
                 <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4 font-sans">
                 تقارير ذكية فورية
               </h3>
               <p className="text-gray-600 leading-relaxed font-sans">
                 اطّلع على مؤشرات الأداء
                 <br />
                 في الوقت الفعلي وحسّن
                 <br />
                 قراراتك.
               </p>
             </div>

             {/* 6th Feature - CTA without box styling */}
              <div className="flex flex-col justify-center items-end text-right p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
                  <span className="text-[#5546FB]">BeatApp…</span>
                  <br />
                  كل ما تحتاجه لإدارة
                  <br />
                  عملائك وأتمتة عملياتك بسهولة.
                </h3>
                <div className="w-full flex justify-end">
                  <button className="bg-[#5546FB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#322A95] transition-colors font-sans">
                    احجز استشارتك المجانية
                  </button>
                </div>
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
              <span className="text-[#5546FB]">BeatApp؟</span>
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              ميزات تجعل <span className="text-[#5546FB]">BeatApp</span> الخيار الأول لأصحاب الأعمال
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

      {/* Features Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">
              لماذا يختار عملاؤنا
              <br />
              <span className="text-[#5546FB]">BeatApp؟</span>
            </h2>
            <p className="text-xl text-gray-600 font-sans">
              ميزات تجعل <span className="text-[#5546FB]">BeatApp</span> الخيار الأول لأصحاب الأعمال
            </p>
          </div>

          {/* Grid Layout with Central Phone */}
          <div className="relative max-w-6xl mx-auto">
            {/* Grid Container */}
            <div className="grid grid-cols-3 gap-8 items-center">
              
              {/* Top Row */}
              {/* Top Right Card - CRM */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  <span className="text-[#5546FB]">CRM</span> سهل وبالعربية
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-sm">
                  نظام <span className="text-[#5546FB]">CRM</span> سهل وبالعربية
                  <br />
                  لتبسيط عملك وزيادة إنتاجية
                  <br />
                  فريقك.
                </p>
              </div>

              {/* Central Phone Mockup */}
              <div className="row-span-2 flex justify-center items-center relative z-10">
                <div className="w-72 h-[500px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4">
                      <div className="text-center mb-4">
                        <h3 className="text-sm font-bold text-gray-900">Features Overview</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-xs font-medium">CRM & PIPELINE MANAGEMENT</span>
                          <span className="text-xs text-gray-500">HighLevel</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                          <span className="text-xs font-medium">WEBSITE BUILDER</span>
                          <span className="text-xs text-gray-500">HighLevel</span>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-xs">Marketing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-xs">Automation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                            <span className="text-xs">Analytics and Reporting</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                            <span className="text-xs">Calendars and Booking</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                            <span className="text-xs">Opportunities</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                            <span className="text-xs">Selling</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                            <span className="text-xs">Sites</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                            <span className="text-xs">Memberships</span>
                          </div>
                        </div>
                        
                        {/* Chart Area */}
                        <div className="mt-4 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-end justify-center p-2">
                          <div className="flex items-end space-x-0.5">
                            <div className="w-1.5 h-6 bg-blue-400 rounded-t"></div>
                            <div className="w-1.5 h-8 bg-blue-500 rounded-t"></div>
                            <div className="w-1.5 h-4 bg-blue-400 rounded-t"></div>
                            <div className="w-1.5 h-10 bg-blue-600 rounded-t"></div>
                            <div className="w-1.5 h-7 bg-blue-500 rounded-t"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Left Card - One Interface */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  واجهة واحدة لكل شيء
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-sm">
                  كل أدواتك في مكان واحد –
                  <br />
                  ودّع التنقل بين البرامج.
                </p>
              </div>

              {/* Bottom Row */}
              {/* Bottom Right Card - Quick Setup */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  إعداد سريع خلال
                  <br />
                  48 ساعة
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-sm">
                  جاهز للعمل خلال يومين فقط –
                  <br />
                  بدون تعقيد.
                </p>
              </div>

              {/* Bottom Left Card - Flexible Packages */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  باقات مرنة حسب
                  <br />
                  احتياجك
                </h3>
                <p className="text-gray-600 leading-relaxed font-sans text-sm">
                  اختر الباقة المناسبة لك
                  <br />
                  وعدّلها بسهولة لاحقًا.
                </p>
              </div>
            </div>

            {/* Bottom Row - Full Width Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Saudi Support */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  دعم فني سعودي تواصل
                  <br />
                  مباشر مع فريق يفهم
                  <br />
                  السوق المحلي.
                </h3>
              </div>

              {/* Integration */}
              <div className="text-right">
                <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center mb-4 ml-auto">
                  <svg className="w-8 h-8 text-[#5546FB]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">
                  اربط <span className="text-[#5546FB]">BeatApp</span> بسهولة مع
                  <br />
                  واتساب، الإيميل، ومنصاتك
                  <br />
                  التسويقية المفضلة.
                </h3>
              </div>
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
              احجز استشارتك المجانية الآن
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#5546FB] transition-colors font-sans">
              احجز استشارتك المجانية الآن
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.svg"
                alt="BeatApp Logo"
                width={120}
                height={40}
                className="mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-400 font-sans">
                نظام ذكي ينقل عملك من الفوضى إلى الأتمتة
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-sans">المنتج</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">المزايا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">الأسعار</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">الأمان</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-sans">الشركة</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">من نحن</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">المدونة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">الوظائف</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 font-sans">الدعم</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">مركز المساعدة</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">اتصل بنا</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors font-sans">الحالة</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-sans">
              © 2024 BeatApp. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors">
                <span className="sr-only">فيسبوك</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors">
                <span className="sr-only">تويتر</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#5546FB] transition-colors">
                <span className="sr-only">لينكد إن</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArabicLandingPage;