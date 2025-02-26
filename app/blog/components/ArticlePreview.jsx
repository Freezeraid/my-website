import Link from 'next/link'
import Image from 'next/image'

export default function ArticlePreview({ article }) {
  const currentYear = new Date().getFullYear()
  const processedTitle = article.title.replace(/\[YEAR\]/g, currentYear)
  const processedDescription= article.description.replace(/\[YEAR\]/g, currentYear)
  const processedDate= article.date.replace(/\[YEAR\]/g, currentYear)


  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${article.slug}`} className="block h-full">
        <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
          <Image
            src={article.banner}
            alt={processedTitle}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {article.readTime}
            </span>
            <span>{new Date(processedDate).toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {processedTitle}
          </h2>
          <p className="text-gray-600 line-clamp-2">
            {processedDescription}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">Par {article.author}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}