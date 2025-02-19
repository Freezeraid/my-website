const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['votre-domaine.com'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        // To add
      }
    }
  }
}

module.exports = nextConfig