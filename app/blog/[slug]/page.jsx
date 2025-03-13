import { getArticleBySlug, getAllArticles, getRelatedArticles } from '../../../lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '../../../components/ui/Breadcrumb'
import TableOfContents from '../components/TableOfContents'
import RelatedArticles from '../components/RelatedArticles'
import MDXContent from '../components/MDXContent'
import SchemaOrg from '../../../components/ui/SchemaOrg'
import { generateBlogPostPageSchemas } from '../../../lib/schema/blog'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

function extractHeadings(content) {
  return content.match(/<h[23][^>]*>(.*?)<\/h[23]>/g)?.map(heading => ({
    id: heading.match(/id="([^"]*)/)?.[1] || '',
    text: heading.match(/>(.*?)</)?.[1] || '',
    level: heading.startsWith('<h2') ? 'h2' : 'h3'
  })) || []
}

export async function generateStaticParams() {
  const posts = await getAllArticles()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  
  return {
    title: `${article.title} - Blog de Killian Doubre`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      authors: [article.author],
      publishedTime: article.date,
      images: [article.banner],
    }
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  
  const postFilePath = path.join(process.cwd(), 'content/blog', slug, 'index.mdx')
  const source = fs.existsSync(postFilePath) 
    ? fs.readFileSync(postFilePath, 'utf8')
    : article.content
  
  const currentYear = new Date().getFullYear()
  const processedSource = source.replace(/\[YEAR\]/g, currentYear)
  
  const { content } = matter(processedSource)
  
  const relatedArticles = await getRelatedArticles(slug)
  
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: article.title }
  ]
  
  const headings = extractHeadings(content)

  const blogPostSchemas = generateBlogPostPageSchemas(article);
  
  return (
    <main className="min-h-[calc(100vh-80px)] pt-20 bg-gradient-to-b from-blue-50 to-white">
      <SchemaOrg schemas={blogPostSchemas} />
      <div className="max-w-7xl mx-auto md:px-6 md:py-12 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-4/5">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <Breadcrumb items={breadcrumbItems} />

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readTime}
                </span>
                <span>
                  {new Date(article.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>Par {article.author}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                <Image
                  src={article.banner}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none prose-blue">
                <MDXContent source={content} />
              </div>

              <RelatedArticles articles={relatedArticles} />

              <div className="mt-12 pt-8 border-t">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Partager cet article
                </h2>
                <div className="flex gap-4">
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://killiandoubre.com/blog/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Partager sur Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://killiandoubre.com/blog/${slug}`)}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Partager sur LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block lg:w-1/5">
            <TableOfContents />
          </aside>
        </div>
      </div>
    </main>
  )
}
