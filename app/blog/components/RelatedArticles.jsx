import ArticlePreview from './ArticlePreview'

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null

  return (
    <section className="mt-16 pt-16 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8" id="similar-articles">
        Articles similaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticlePreview 
            key={article.slug} 
            article={article}
            className="h-full"
          />
        ))}
      </div>
    </section>
  )
}