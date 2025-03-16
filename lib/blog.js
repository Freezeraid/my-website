import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

const cache = {
  allArticles: null,
  articlesBySlug: new Map(),
  relatedArticles: new Map()
}

const CACHE_TTL = 60 * 60 * 1000
let lastCacheUpdate = 0

function isCacheValid() {
  const now = Date.now()
  return now - lastCacheUpdate < CACHE_TTL
}

export async function getAllArticles() {
  if (cache.allArticles && isCacheValid()) {
    return cache.allArticles
  }

  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
    cache.allArticles = []
    lastCacheUpdate = Date.now()
    return []
  }

  const articles = fs.readdirSync(BLOG_DIR)
  
  if (articles.length === 0) {
    cache.allArticles = []
    lastCacheUpdate = Date.now()
    return []
  }

  const posts = articles
    .map((slug) => {
      if (cache.articlesBySlug.has(slug) && isCacheValid()) {
        return cache.articlesBySlug.get(slug)
      }

      const fullPath = path.join(BLOG_DIR, slug, 'index.mdx')
      if (!fs.existsSync(fullPath)) {
        return null
      }
      
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      const article = {
        ...data,
        slug,
        readingTime: readingTime(content).text,
      }

      cache.articlesBySlug.set(slug, article)
      
      return article
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  cache.allArticles = posts
  lastCacheUpdate = Date.now()

  return posts
}

export async function getArticleBySlug(slug) {
  if (cache.articlesBySlug.has(slug) && isCacheValid()) {
    const cachedArticle = cache.articlesBySlug.get(slug)
    
    if (cachedArticle.content) {
      return cachedArticle
    }
  }

  try {    
    const fullPath = path.join(BLOG_DIR, slug, 'index.mdx')

    if (!fs.existsSync(fullPath)) {
      console.error('Fichier non trouvé:', fullPath)
      throw new Error(`Article non trouvé: ${slug}`)
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const currentYear = new Date().getFullYear()
    const processedContent = fileContents.replace(/\[YEAR\]/g, currentYear)
    
    const { data, content } = matter(processedContent);

    const article = {
      ...data,
      content,
      slug,
      readingTime: readingTime(content).text,
    }

    cache.articlesBySlug.set(slug, article)

    return article
  } catch (error) {
    console.error('Erreur lors du chargement de l\'article:', error)
    throw error
  }
}

export async function getRelatedArticles(currentSlug, limit = 15) {
  const cacheKey = `${currentSlug}-${limit}`
  if (cache.relatedArticles.has(cacheKey) && isCacheValid()) {
    return cache.relatedArticles.get(cacheKey)
  }

  const allArticles = await getAllArticles()
  const related = allArticles
    .filter(article => article.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)

  cache.relatedArticles.set(cacheKey, related)

  return related
}

export async function preloadAllArticles() {
  await getAllArticles()
  
  for (const article of cache.allArticles) {
    await getArticleBySlug(article.slug)
  }
}
