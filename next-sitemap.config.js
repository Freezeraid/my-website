module.exports = {
    siteUrl: process.env.SITE_URL || 'https://killiandoubre.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    changefreq: 'weekly',
    priority: 0.7,
  }