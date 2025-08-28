const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // swcMinify: true, // Option supprimée car non reconnue dans Next.js 15.1.7
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'killiandoubre.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=31536000',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/index',
        destination: '/blog',
        permanent: true,
      },
      // Redirections pour les pages non indexées
      {
        source: "/developpeur-web-saint-raphael",
        destination: "/developpeur-web-toulon",
        permanent: true
      },
      {
        source: "/developpeur-web-arles",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-vitrolles",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-saint-tropez",
        destination: "/developpeur-web-toulon",
        permanent: true
      },
      {
        source: "/developpeur-web-marignane",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-cavaillon",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-ile-de-france",
        destination: "/developpeur-web-paris",
        permanent: true
      },
      {
        source: "/developpeur-web-six-fours-les-plages",
        destination: "/developpeur-web-toulon",
        permanent: true
      },
      {
        source: "/developpeur-web-alpes-de-haute-provence",
        destination: "/",
        permanent: true
      },
      {
        source: "/developpeur-web-hautes-alpes",
        destination: "/",
        permanent: true
      },
      {
        source: "/developpeur-web-vallauris",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-vence",
        destination: "/",
        permanent: true
      },
      {
        source: "/developpeur-web-le-cannet",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-digne-les-bains",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-pertuis",
        destination: "/",
        permanent: true
      },
      {
        source: "/developpeur-web-frejus",
        destination: "/developpeur-web-toulon",
        permanent: true
      },
      {
        source: "/developpeur-web-cagnes-sur-mer",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-antibes",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-saint-etienne",
        destination: "/",
        permanent: true
      },
      {
        source: "/developpeur-web-provence",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-alpes-maritimes",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-carpentras",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-menton",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-bouches-du-rhone",
        destination: "/developpeur-web-marseille",
        permanent: true
      },
      {
        source: "/developpeur-web-hyeres",
        destination: "/developpeur-web-toulon",
        permanent: true
      },
      {
        source: "/developpeur-web-mandelieu-la-napoule",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-cote-azur",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-manosque",
        destination: "/developpeur-web-orange",
        permanent: true
      },
      {
        source: "/developpeur-web-gap",
        destination: "/developpeur-web-nice",
        permanent: true
      },
      {
        source: "/developpeur-web-la-ciotat",
        destination: "/developpeur-web-marseille",
        permanent: true
      }
    ];
  },
  
  reactStrictMode: true,
  staticPageGenerationTimeout: 180,
  
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
    mdxRs: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    optimizePackageImports: ['framer-motion'],
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  generateEtags: true,
  
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
};

module.exports = withMDX(nextConfig);
