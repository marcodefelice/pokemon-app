/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    publicRuntimeConfig: {
      NEXT_PUBLIC_API_BASE: process.env.API_BASE,
      NEXT_PUBLIC_API_AUTH: process.env.API_AUTH,
    },
}

module.exports = nextConfig
