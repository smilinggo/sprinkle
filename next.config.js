/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    NEXT_PUBLIC_INSTAGRAM_API_KEY: process.env.NEXT_PUBLIC_INSTAGRAM_API_KEY,
  },
};

module.exports = nextConfig;
