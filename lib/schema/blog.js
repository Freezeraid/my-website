import { config } from './index.js';

/**
 * Génère le schéma JSON-LD pour un article de blog
 * 
 * @param {Object} article - Les données de l'article
 * @param {string} article.title - Le titre de l'article
 * @param {string} article.description - La description de l'article
 * @param {string} article.slug - Le slug de l'article
 * @param {string} article.date - La date de publication de l'article
 * @param {string} article.author - L'auteur de l'article
 * @param {string} article.banner - L'URL de l'image de bannière de l'article
 * @param {string[]} article.tags - Les tags de l'article
 * @param {string} article.content - Le contenu de l'article
 * @returns {Object} Le schéma JSON-LD pour l'article
 */
export function generateBlogPostSchema(article) {
  const articleUrl = `${config.url}/blog/${article.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    image: article.banner,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    author: {
      '@type': 'Person',
      '@id': `${config.url}/#person`,
      name: article.author || config.author.name,
      url: config.url
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${config.url}/#organization`,
      name: config.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: config.organization.logo,
        width: 1200,
        height: 630
      }
    },
    keywords: article.tags.join(', '),
    inLanguage: 'fr-FR',
    wordCount: article.content ? article.content.split(/\s+/).length : 0,
    articleBody: article.content ? article.content.substring(0, 500) + '...' : '',
    articleSection: 'Blog'
  };
}

/**
 * Génère le schéma JSON-LD pour une liste d'articles de blog (page blog)
 * 
 * @param {Object[]} articles - La liste des articles
 * @returns {Object} Le schéma JSON-LD pour la page blog
 */
export function generateBlogPageSchema(articles) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${config.url}/blog#webpage`,
    url: `${config.url}/blog`,
    name: 'Blog - Killian Doubre | Développeur Web Freelance',
    description: 'Articles techniques et conseils sur le développement web, React, Node.js et les meilleures pratiques du développement moderne.',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${config.url}/#website`
    },
    about: {
      '@type': 'Thing',
      name: 'Développement Web',
      description: 'Articles sur le développement web, les technologies front-end et back-end, et les bonnes pratiques.'
    },
    inLanguage: 'fr-FR',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${config.url}/blog/${article.slug}`,
        name: article.title
      }))
    }
  };
}

/**
 * Génère les schémas JSON-LD pour une page d'article de blog
 * 
 * @param {Object} article - Les données de l'article
 * @returns {Object[]} Les schémas JSON-LD pour la page d'article
 */
export function generateBlogPostPageSchemas(article) {
  return [
    generateBlogPostSchema(article),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${config.url}/blog/${article.slug}#breadcrumb`,
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
          name: 'Blog',
          item: `${config.url}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title
        }
      ]
    }
  ];
}
