const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  debug: process.env.NODE_ENV === 'development',
} 