module.exports = {
    siteUrl: process.env.SITE_URL || 'https://killiandoubre.com',
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
      additionalSitemaps: [],
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/api/*'],
        },
      ],
    },
    transform: async (config, path) => {
      if (path.includes('/developpement-') || path.includes('/consultant-')) {
        return {
          loc: path,
          changefreq: 'monthly',
          priority: 0.9,
          lastmod: new Date().toISOString(),
        }
      }
      else if (path.includes('/blog/') && !path.endsWith('/blog/')) {
        return {
          loc: path,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        }
      }
      else if (path === '/') {
        return {
          loc: path,
          changefreq: 'weekly',
          priority: 1.0,
          lastmod: new Date().toISOString(),
        }
      }
      else if (path === '/blog') {
        return {
          loc: path,
          changefreq: 'daily',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        }
      }
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    },
  }
