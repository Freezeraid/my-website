module.exports = {
    siteUrl: process.env.SITE_URL || 'https://killiandoubre.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' }
      ],
      additionalSitemaps: [
        'https://killiandoubre.com/sitemap.xml',
      ],
    },
    changefreq: 'weekly',
    priority: 0.7,
  }