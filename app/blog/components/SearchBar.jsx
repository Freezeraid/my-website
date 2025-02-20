'use client'
import { useState } from 'react'

export default function SearchBar({ articles, onFilteredArticles }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)

    // Filtrer les articles côté client
    const filtered = articles.filter(article => 
      article.title.toLowerCase().includes(value.toLowerCase()) ||
      article.description.toLowerCase().includes(value.toLowerCase())
    )
    onFilteredArticles(filtered)
  }

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        placeholder="Rechercher un article..."
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        aria-label="Rechercher un article"
      />
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  )
}