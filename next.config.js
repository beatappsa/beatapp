/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  './src/i18n.ts'
);

const nextConfig = {
  images: {
    domains: ['localhost', 'your-wordpress-domain.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/graphql',
    _next_intl_trailing_slash: 'false',
  },
};

module.exports = withNextIntl(nextConfig);