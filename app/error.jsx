'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
            500
          </h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une erreur est survenue
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Désolé, quelque chose s'est mal passé. Nous travaillons à résoudre le problème.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
            >
              Réessayer
            </button>
            <Link
              href="/"
              className="rounded-full px-8 py-4 text-sm font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Si le problème persiste, contactez-moi à{' '}
            <a href="mailto:killiandoubrepro@gmail.com" className="text-blue-600 hover:underline">
              killiandoubrepro@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}