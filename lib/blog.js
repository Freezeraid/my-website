import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export async function getAllArticles() {
    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR, { recursive: true })
      return []
    }
  
    const articles = fs.readdirSync(BLOG_DIR)
    
    if (articles.length === 0) {
      return []
    }
  
    const posts = articles
      .map((slug) => {
        const fullPath = path.join(BLOG_DIR, slug, 'index.mdx')
        if (!fs.existsSync(fullPath)) {
          return null
        }
        
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        return {
          ...data,
          slug,
          readingTime: readingTime(content).text,
        }
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  
    return posts
  }

export async function getArticleBySlug(slug) {
  const fullPath = path.join(BLOG_DIR, slug, 'index.mdx')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const currentYear = new Date().getFullYear()
  const processedContent = fileContents.replace(/\[YEAR\]/g, currentYear)
  
  const { data, content } = matter(processedContent);

  return {
    ...data,
    content,
    slug,
    readingTime: readingTime(content).text,
  }
}

export async function getRelatedArticles(currentSlug, limit = 3) {
  const allArticles = await getAllArticles()
  return allArticles
    .filter(article => article.slug !== currentSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}