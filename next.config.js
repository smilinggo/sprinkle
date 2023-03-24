/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    INSTAGRAM_API_KEY: process.env.INSTAGRAM_API_KEY,
  },
};

module.exports = nextConfig;
