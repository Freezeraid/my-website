module.exports = {
    siteUrl: process.env.SITE_URL || 'https://killiandoubre.com',
    generateRobotsTxt: true,
    exclude: [],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://killiandoubre.com/sitemap.xml',
      ],
    },
    transform: async (config, path) => {
      if (path.includes('/blog/')) {
        return {
          loc: path,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod: new Date().toISOString(),
        }
      }
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    },
  }