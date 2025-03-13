/**
 * Système centralisé de gestion des schémas Schema.org pour le SEO
 * 
 * Ce module exporte des fonctions pour générer des schémas JSON-LD
 * pour différentes parties du site web.
 */

const siteConfig = {
  name: 'Killian DOUBRE - Développeur Web Freelance',
  url: 'https://killiandoubre.com',
  logo: 'https://killiandoubre.com/og-image.jpg',
  author: {
    name: 'Killian Doubre',
    givenName: 'Killian',
    familyName: 'Doubre',
    image: 'https://killiandoubre.com/photo_close.jpg',
    jobTitle: 'Développeur Web Freelance',
    email: 'killiandoubrepro@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/doubre-killian/',
      'https://github.com/Freezeraid/'
    ],
    address: {
      addressLocality: 'Paris',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR'
    }
  },
  organization: {
    name: 'Killian Doubre - Développeur Web Freelance',
    legalName: 'Killian Doubre',
    url: 'https://killiandoubre.com',
    logo: 'https://killiandoubre.com/og-image.jpg',
    foundingDate: '2025-03-01',
    founders: [{ name: 'Killian Doubre' }],
    contactPoint: {
      contactType: 'customer service',
      email: 'killiandoubrepro@gmail.com',
    }
  },
  services: [
    {
      name: 'Création de site web vitrine',
      description: 'Conception et développement de sites web vitrines professionnels et optimisés pour le SEO.',
      url: 'https://killiandoubre.com/developpement-site-vitrine'
    },
    {
      name: 'Création de site e-commerce',
      description: 'Développement de boutiques en ligne performantes et sécurisées.',
      url: 'https://killiandoubre.com/developpement-site-ecommerce'
    },
    {
      name: 'Développement d\'applications web',
      description: 'Création d\'applications web sur mesure avec React, Node.js et Next.js.',
      url: 'https://killiandoubre.com/developpement-application-saas'
    },
    {
      name: 'Consultant SEO',
      description: 'Optimisation du référencement naturel pour améliorer la visibilité sur les moteurs de recherche.',
      url: 'https://killiandoubre.com/consultant-referencement-naturel'
    }
  ]
};

/**
 * Génère le schéma JSON-LD pour une personne (Killian Doubre)
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}/#person`,
    name: siteConfig.author.name,
    givenName: siteConfig.author.givenName,
    familyName: siteConfig.author.familyName,
    url: siteConfig.url,
    image: siteConfig.author.image,
    jobTitle: siteConfig.author.jobTitle,
    email: siteConfig.author.email,
    sameAs: siteConfig.author.sameAs,
    worksFor: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.organization.name,
      url: siteConfig.url
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.author.address.addressLocality,
      addressRegion: siteConfig.author.address.addressRegion,
      addressCountry: siteConfig.author.address.addressCountry
    },
    knowsAbout: [
      'Développement Web',
      'Freelance',
      'React',
      'Node.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Développement Full Stack',
      'SEO',
      'Création de sites web',
      'E-commerce',
      'Applications web'
    ],
    description: 'Développeur web full stack freelance spécialisé en React, Node.js, Next.js et création de sites web performants et optimisés pour le SEO.'
  };
}

/**
 * Génère le schéma JSON-LD pour l'organisation/entreprise
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.organization.logo,
      width: 1200,
      height: 630
    },
    foundingDate: siteConfig.organization.foundingDate,
    founders: siteConfig.organization.founders.map(founder => ({
      '@type': 'Person',
      name: founder.name
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: siteConfig.organization.contactPoint.contactType,
      email: siteConfig.organization.contactPoint.email,
    },
    sameAs: siteConfig.author.sameAs
  };
}

/**
 * Génère le schéma JSON-LD pour le service professionnel
 */
export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.organization.name,
    url: siteConfig.url,
    logo: siteConfig.organization.logo,
    image: siteConfig.organization.logo,
    description: 'Services de développement web freelance: création de sites web, applications web, e-commerce et optimisation SEO.',
    priceRange: '€€',
    email: siteConfig.author.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.author.address.addressLocality,
      addressRegion: siteConfig.author.address.addressRegion,
      addressCountry: siteConfig.author.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8566',
      longitude: '2.3522'
    },
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
    founder: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`
    },
    sameAs: siteConfig.author.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de développement web',
      itemListElement: siteConfig.services.map((service, _) => ({
        '@type': 'Offer',
        name: service.name,
        description: service.description,
        url: service.url
      }))
    }
  };
}

/**
 * Génère le schéma JSON-LD pour le site web
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: 'Site officiel de Killian Doubre, développeur web freelance spécialisé en React, Node.js et Next.js.',
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Génère tous les schémas JSON-LD pour la page d'accueil
 */
export function generateHomePageSchemas() {
  return [
    generatePersonSchema(),
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebsiteSchema()
  ];
}

/**
 * Exporte la configuration du site pour être utilisée dans d'autres modules
 */
export const config = siteConfig;
