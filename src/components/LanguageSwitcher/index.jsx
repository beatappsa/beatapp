import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const LanguageSwitcher = ({ className = '', style = 'dropdown' }) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale) => {
    const { pathname, asPath, query } = router;
    
    // Close dropdown
    setIsOpen(false);
    
    // Switch language while maintaining current route
    router.push({ pathname, query }, asPath, { locale });
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Get current language info
  const currentLang = router.locale || 'ar';
  const isArabic = currentLang === 'ar';
  
  // Language options
  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);
  const otherLanguages = languages.filter(lang => lang.code !== currentLang);

  if (style === 'buttons') {
    return (
      <div className={`language-switcher-buttons ${className}`}>
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`btn btn-sm me-2 ${
              currentLang === lang.code 
                ? 'btn-primary' 
                : 'btn-outline-primary'
            }`}
          >
            {lang.flag} {lang.name}
          </button>
        ))}
      </div>
    );
  }

  // Default dropdown style
  return (
    <div className={`language-switcher dropdown ${className}`}>
      <button
        className="dropdown-toggle language-btn"
        onClick={toggleDropdown}
        type="button"
        aria-expanded={isOpen}
      >
        <span className="flag">{currentLanguage?.flag}</span>
        <span className="lang-name">{currentLanguage?.name}</span>
        <i className={`fas fa-chevron-down ms-2 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu show">
          {otherLanguages.map(lang => (
            <button
              key={lang.code}
              className="dropdown-item"
              onClick={() => switchLanguage(lang.code)}
            >
              <span className="flag me-2">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }
        
        .language-btn {
          background: transparent;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .language-btn:hover {
          background-color: var(--primary-color, #007bff);
          color: white;
          border-color: var(--primary-color, #007bff);
        }
        
        .flag {
          font-size: 16px;
          margin-right: 8px;
        }
        
        .lang-name {
          font-size: 14px;
          font-weight: 500;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 1000;
          margin-top: 4px;
          overflow: hidden;
        }
        
        .dropdown-item {
          width: 100%;
          padding: 12px 16px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
        }
        
        /* RTL Support */
        [dir="rtl"] .language-switcher {
          direction: ltr;
        }
        
        [dir="rtl"] .flag {
          margin-left: 8px;
          margin-right: 0;
        }
        
        [dir="rtl"] .dropdown-menu {
          left: auto;
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher; 