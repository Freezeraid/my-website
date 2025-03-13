import { getAllArticles } from '../../lib/blog'
import ArticlesSection from './components/ArticlesSection'
import Breadcrumb from '../../components/ui/Breadcrumb'
import SchemaOrg from '../../components/ui/SchemaOrg'
import { generateBlogPageSchema } from '../../lib/schema/blog'

export const metadata = {
  title: 'Blog - Killian Doubre | Développeur Web Freelance',
  description: 'Articles techniques et conseils sur le développement web, React, Node.js et les meilleures pratiques du développement moderne.',
  openGraph: {
    title: 'Blog - Killian Doubre',
    description: 'Articles techniques et conseils sur le développement web.',
    type: 'website',
  }
}

export default async function BlogPage() {
  const articles = await getAllArticles()

  const breadcrumbItems = [
    { label: 'Blog' }
  ]
  
  const blogPageSchema = generateBlogPageSchema(articles);

  return (
    <main className="min-h-[calc(100vh-80px)] pt-20 bg-gradient-to-b from-blue-50 to-white">
      <SchemaOrg schemas={blogPageSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={breadcrumbItems} />
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mon Blog du Développement Web
          </h1>
          <p className="text-lg text-gray-600">
            Consultez mes articles techniques et retours d'expérience sur le développement web !
          </p>
        </div>

        {articles.length > 0 ? (
          <ArticlesSection articles={articles} />
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">✍️</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Articles en cours de rédaction
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Les premiers articles sont en cours de préparation. 
              Revenez bientôt pour découvrir du contenu technique de qualité !
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
