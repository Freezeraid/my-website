import { config } from './index.js';

/**
 * Génère le schéma JSON-LD pour un service spécifique
 * 
 * @param {Object} service - Les données du service
 * @param {string} service.name - Le nom du service
 * @param {string} service.description - La description du service
 * @param {string} service.slug - Le slug de la page de service
 * @param {string} service.image - L'URL de l'image du service
 * @param {string} service.price - Le prix du service (optionnel)
 * @param {string[]} service.features - Les caractéristiques du service
 * @returns {Object} Le schéma JSON-LD pour le service
 */
export function generateServiceSchema(service) {
  const serviceUrl = `${config.url}/${service.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: service.name,
    description: service.description,
    url: serviceUrl,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${config.url}/#business`,
      name: config.organization.name,
      url: config.url
    },
    serviceType: service.name,
    areaServed: {
      '@type': 'Country',
      name: 'France'
    },
    offers: {
      '@type': 'Offer',
      price: service.price || '',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: serviceUrl,
      validFrom: new Date().toISOString().split('T')[0]
    },
    image: service.image || config.organization.logo,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': serviceUrl
    }
  };
}

/**
 * Génère le schéma JSON-LD pour une FAQ sur une page de service
 * 
 * @param {Object[]} faqs - La liste des questions/réponses
 * @param {string} faqs[].question - La question
 * @param {string} faqs[].answer - La réponse
 * @returns {Object} Le schéma JSON-LD pour la FAQ
 */
export function generateServiceFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Génère le schéma JSON-LD pour le fil d'Ariane d'une page de service
 * 
 * @param {Object} service - Les données du service
 * @returns {Object} Le schéma JSON-LD pour le fil d'Ariane
 */
export function generateServiceBreadcrumbSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${config.url}/${service.slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: config.url
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${config.url}/#services`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name
      }
    ]
  };
}

/**
 * Génère les schémas JSON-LD pour une page de service
 * 
 * @param {Object} service - Les données du service
 * @param {Object[]} faqs - La liste des questions/réponses (optionnel)
 * @returns {Object[]} Les schémas JSON-LD pour la page de service
 */
export function generateServicePageSchemas(service, faqs = []) {
  const schemas = [
    generateServiceSchema(service),
    generateServiceBreadcrumbSchema(service)
  ];
  
  if (faqs.length > 0) {
    schemas.push(generateServiceFAQSchema(faqs));
  }
  
  return schemas;
}

/**
 * Données des services pour les pages de service
 */
export const serviceData = {
  'developpement-site-vitrine': {
    name: 'Création de site web vitrine',
    description: 'Conception et création de sites web vitrines professionnels et optimisés pour le SEO.',
    slug: 'developpement-site-vitrine',
    image: `${config.url}/images/services/site-vitrine.jpg`,
    features: [
      'Design responsive et moderne',
      'Optimisation SEO',
      'Intégration de formulaires de contact',
      'Hébergement et maintenance'
    ],
    faqs: [
      {
        question: 'Quel est le délai de création d\'un site vitrine ?',
        answer: 'Le délai moyen est de 2 à 4 semaines selon la complexité du projet et le nombre de pages.'
      },
      {
        question: 'Le site sera-t-il optimisé pour les moteurs de recherche ?',
        answer: 'Oui, tous mes sites sont développés avec les meilleures pratiques SEO pour maximiser votre visibilité.'
      }
    ]
  },
  'developpement-site-ecommerce': {
    name: 'Création de site e-commerce',
    description: 'Développement de boutiques en ligne performantes et sécurisées.',
    slug: 'developpement-site-ecommerce',
    image: `${config.url}/images/services/site-ecommerce.jpg`,
    features: [
      'Catalogue de produits',
      'Système de paiement sécurisé',
      'Gestion des stocks',
      'Tableau de bord administrateur'
    ],
    faqs: [
      {
        question: 'Quelles solutions e-commerce utilisez-vous ?',
        answer: 'Je travaille principalement avec WooCommerce, Shopify et des solutions sur mesure selon vos besoins.'
      },
      {
        question: 'Comment gérer les paiements sur mon site e-commerce ?',
        answer: 'J\'intègre des solutions de paiement sécurisées comme Stripe, PayPal ou les solutions bancaires de votre choix.'
      }
    ]
  },
  'developpement-application-saas': {
    name: 'Développement d\'applications web',
    description: 'Création d\'applications web sur mesure avec React, Node.js et Next.js.',
    slug: 'developpement-application-saas',
    image: `${config.url}/images/services/application-saas.jpg`,
    features: [
      'Architecture évolutive',
      'Interface utilisateur intuitive',
      'API RESTful',
      'Authentification sécurisée'
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre un site web et une application web ?',
        answer: 'Une application web offre des fonctionnalités interactives plus avancées et permet souvent aux utilisateurs de créer et gérer du contenu ou des données.'
      },
      {
        question: 'Puis-je faire évoluer mon application web dans le temps ?',
        answer: 'Oui, je développe des applications modulaires et évolutives qui peuvent être enrichies de nouvelles fonctionnalités au fil du temps.'
      }
    ]
  },
  'consultant-referencement-naturel': {
    name: 'Consultant SEO',
    description: 'Optimisation du référencement naturel pour améliorer la visibilité sur les moteurs de recherche.',
    slug: 'consultant-referencement-naturel',
    image: `${config.url}/images/services/consultant-seo.jpg`,
    features: [
      'Audit SEO complet',
      'Optimisation on-page',
      'Stratégie de contenu',
      'Suivi des performances'
    ],
    faqs: [
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO ?',
        answer: 'Le SEO est un travail de fond qui nécessite généralement 3 à 6 mois pour observer des résultats significatifs.'
      },
      {
        question: 'Quelles méthodes utilisez-vous pour améliorer le référencement ?',
        answer: 'J\'utilise uniquement des techniques white hat conformes aux recommandations de Google, incluant l\'optimisation technique, la création de contenu de qualité et l\'amélioration de l\'expérience utilisateur.'
      }
    ]
  }
};
