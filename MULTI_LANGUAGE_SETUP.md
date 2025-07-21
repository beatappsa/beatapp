# Multi-Language Implementation Guide

This document explains the complete multi-language setup for the BeatApp website with Arabic and English support.

## 🌍 Overview

The website now supports:
- **Arabic (ar)** - Default language
- **English (en)** - Secondary language
- Automatic language detection
- URL-based language switching
- WordPress API integration with language support

## 📁 File Structure

```
├── next-i18next.config.js          # i18n configuration
├── public/locales/
│   ├── ar/
│   │   └── common.json              # Arabic translations
│   └── en/
│       └── common.json              # English translations
├── src/components/
│   ├── LanguageSwitcher/            # Language switcher component
│   └── [other components updated with i18n]
└── src/pages/
    ├── _app.js                      # Updated with appWithTranslation
    ├── index.jsx                    # Homepage with i18n
    ├── page-blog-app/index.jsx      # Blog with i18n
    └── api/wordpress/posts.js       # API with language support
```

## ⚙️ Installation & Dependencies

Dependencies installed:
```bash
npm install next-i18next react-i18next i18next
```

## 🔧 Configuration

### 1. Next.js Configuration (`next.config.js`)
```javascript
i18n: {
  locales: ['en', 'ar'],
  defaultLocale: 'ar',
  localeDetection: true,
}
```

### 2. i18next Configuration (`next-i18next.config.js`)
```javascript
module.exports = {
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
    localePath: './public/locales',
    localeDetection: true,
  }
}
```

## 📝 Translation Files

### Arabic (`public/locales/ar/common.json`)
Contains all Arabic translations for:
- Navigation items
- Footer content
- Blog interface
- General UI elements
- Language switcher labels

### English (`public/locales/en/common.json`)
Contains corresponding English translations.

## 🎯 Usage in Components

### Basic Translation Hook
```javascript
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');
  
  return <h1>{t('nav.home')}</h1>; // "الرئيسية" or "Home"
}
```

### Language Detection
```javascript
import { useRouter } from 'next/router';

const MyComponent = () => {
  const router = useRouter();
  const currentLanguage = router.locale; // 'ar' or 'en'
  const isArabic = currentLanguage === 'ar';
}
```

### Server-Side Props (Required for each page)
```javascript
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
```

## 🌐 Language Switcher Component

### Usage
```javascript
import LanguageSwitcher from '@components/LanguageSwitcher';

// Dropdown style (default)
<LanguageSwitcher />

// Button style
<LanguageSwitcher style="buttons" />

// With custom className
<LanguageSwitcher className="my-custom-class" />
```

### Features
- Automatic current language detection
- Maintains current route when switching languages
- Custom styling options
- RTL support
- Country flag indicators

## 📰 Blog Multi-Language Support

### WordPress API Integration
The `/api/wordpress/posts.js` endpoint now supports:
- Language parameter: `?lang=ar` or `?lang=en`
- Language-specific content processing
- Fallback content in appropriate languages

### Blog Component Features
- Automatic language detection
- Language-appropriate date formatting
- Localized category names
- Author names in correct language
- Loading and error messages in user's language

### API Usage Examples
```javascript
// Fetch Arabic posts
fetch('/api/wordpress/posts?lang=ar&per_page=10')

// Fetch English posts
fetch('/api/wordpress/posts?lang=en&per_page=10')
```

## 🔗 URL Structure

The website supports language-based URLs:
- Default (Arabic): `https://yoursite.com/`
- English: `https://yoursite.com/en/`
- Blog Arabic: `https://yoursite.com/page-blog-app/`
- Blog English: `https://yoursite.com/en/page-blog-app/`

## 📱 Components Updated

### Navigation Components
- `ITCreativeNav` - Home and blog navigation with translations
- `TopNav-7` - Contact info with language switcher
- All navigation text uses translation keys

### Footer Component
- Complete translation support
- CTA text in both languages
- Social media labels
- Copyright text

### Blog Components
- `AllNews` - Multi-language post fetching and display
- Language-aware fallback content
- Localized loading and error states

## 🎨 Styling & RTL Support

### Language Switcher Styling
- Responsive design
- RTL-aware positioning
- Custom CSS with styled-jsx
- Hover effects and animations

### RTL Support
The existing RTL prop system works alongside the new i18n:
```javascript
<MainLayout isRTL>
  <Component rtl />
</MainLayout>
```

## 🔧 WordPress Configuration (Optional)

For full WordPress multi-language support, install one of these plugins:
- **WPML** (recommended for complex sites)
- **Polylang** (free alternative)
- **TranslatePress**

Then update the API endpoint to use the plugin's parameters.

## 🚀 Adding New Languages

### 1. Update Configuration
```javascript
// next.config.js
i18n: {
  locales: ['en', 'ar', 'fr'], // Add new language
  defaultLocale: 'ar',
}
```

### 2. Create Translation File
```bash
mkdir public/locales/fr
# Create public/locales/fr/common.json with translations
```

### 3. Update Language Switcher
```javascript
// In LanguageSwitcher component
const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }, // Add new language
];
```

## 🎯 Translation Keys Structure

```json
{
  "nav": {
    "home": "Navigation items",
    "blog": "...",
  },
  "footer": {
    "cta_title": "Footer content",
    "social_title": "...",
  },
  "blog": {
    "title": "Blog interface",
    "loading": "...",
  },
  "general": {
    "loading": "General UI elements",
    "error": "...",
  },
  "language": {
    "current_language": "Language switcher labels"
  }
}
```

## 📋 Best Practices

1. **Always use translation keys** instead of hardcoded text
2. **Add serverSideTranslations** to every page that uses translations
3. **Test language switching** on all pages
4. **Maintain consistent naming** in translation keys
5. **Consider RTL layout** when adding new components
6. **Update WordPress** with multilingual plugins for full CMS support

## 🐛 Troubleshooting

### Common Issues

1. **"useTranslation hook not working"**
   - Ensure `serverSideTranslations` is added to the page
   - Check if the translation file exists
   - Verify the translation key path

2. **"Language switching not working"**
   - Check Next.js i18n configuration
   - Ensure locale files exist in correct directories
   - Verify URL structure

3. **"WordPress API not returning language-specific content"**
   - Install and configure WordPress multilingual plugin
   - Update API endpoint with plugin parameters
   - Check language parameter in API calls

## 🔄 Maintenance

### Adding New Translations
1. Add new keys to both `ar/common.json` and `en/common.json`
2. Update components to use new translation keys
3. Test on both languages

### Updating Existing Translations
1. Modify translation files
2. Translation changes are applied immediately (no restart needed)

---

## 🎉 Success!

Your BeatApp website now has complete multi-language support with:
- ✅ Arabic and English languages
- ✅ Automatic language detection
- ✅ WordPress API integration
- ✅ Blog multi-language support
- ✅ Language switcher component
- ✅ SEO-friendly URLs
- ✅ RTL support maintenance

The system is ready for production and can be easily extended with additional languages as needed! 