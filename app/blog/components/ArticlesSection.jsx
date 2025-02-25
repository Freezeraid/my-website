'use client'
import { useState } from 'react'
import SearchBar from './SearchBar'
import ArticlePreview from './ArticlePreview'

export default function ArticlesSection({ articles }) {
  const [filteredArticles, setFilteredArticles] = useState(articles)

  return (
    <>
      <SearchBar 
        articles={articles}
        onFilteredArticles={setFilteredArticles}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <ArticlePreview key={article.slug} article={article} />
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">
              Aucun article ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </>
  )
}