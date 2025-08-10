'use client';

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

interface GoHighLevelFormProps {
  className?: string;
}

const GoHighLevelForm: React.FC<GoHighLevelFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[+]?[0-9\s-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'اسم الشركة مطلوب';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('يرجى تصحيح الأخطاء في النموذج');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/gohighlevel/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          source: 'Arabic Landing Page',
          formType: 'Contact Form',
          timestamp: new Date().toISOString(),
          customFields: {
            lead_source: 'Website - Arabic Landing',
            form_location: 'Contact Section',
            language: 'Arabic'
          }
        }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast.success('تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: ''
        });
        
        // Track successful submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'Arabic Landing Contact Form'
          });
        }
      } else {
        throw new Error(result.error || 'حدث خطأ أثناء إرسال النموذج');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
          الاسم الكامل *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#5546FB] focus:border-[#5546FB] transition-colors font-sans text-right ${
            errors.name ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder="أدخل اسمك الكامل"
          dir="rtl"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 font-sans">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
          البريد الإلكتروني *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#5546FB] focus:border-[#5546FB] transition-colors font-sans text-right ${
            errors.email ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder="example@email.com"
          dir="rtl"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 font-sans">{errors.email}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
          رقم الهاتف *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#5546FB] focus:border-[#5546FB] transition-colors font-sans text-right ${
            errors.phone ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder="+966 50 123 4567"
          dir="rtl"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600 font-sans">{errors.phone}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
          اسم الشركة *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-[#5546FB] focus:border-[#5546FB] transition-colors font-sans text-right ${
            errors.company ? 'border-red-300' : 'border-gray-200'
          }`}
          placeholder="أدخل اسم شركتك"
          dir="rtl"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600 font-sans">{errors.company}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#5546FB] to-blue-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-[#4435EA] hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-sans flex items-center justify-center gap-3"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            جاري الإرسال...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            إرسال الطلب
          </>
        )}
      </button>
    </form>
  );
};

export default GoHighLevelForm;