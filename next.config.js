const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['killiandoubre.com'],
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
    },
    mdxRs: true,
  }
}

module.exports = withMDX(nextConfig)