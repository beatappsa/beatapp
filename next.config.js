/** @type {import('next').NextConfig} */
const path = require("path");
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  i18n,
}

module.exports = nextConfig
