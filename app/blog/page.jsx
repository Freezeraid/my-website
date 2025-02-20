import Link from 'next/link'
import styles from './blog.module.css'

export default function Blog() {
  return (
    <main className="min-h-[calc(100vh-80px)] pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Icône animée */}
        <div className="relative mx-auto w-24 h-24 mb-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 animate-spin">
              <svg 
                className="w-full h-full text-blue-600" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle 
                  className="opacity-20" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-blue-100 to-transparent rounded-full" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Blog en construction
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Je travaille actuellement sur du contenu technique de qualité pour partager mon expertise en développement web. 
          Revenez bientôt pour découvrir des articles sur React, Node.js, et les meilleures pratiques du développement moderne.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}