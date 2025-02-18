/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['votre-domaine.com'],
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    turbo: {
      rules: {
        // Vos règles Turbopack ici si nécessaire
      }
    }
  }
}

module.exports = nextConfig