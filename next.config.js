/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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