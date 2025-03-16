'use client'
import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import useNavigation from '../../hooks/useNavigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { navigateSmoothly, prefetchVisibleLinks, pathname } = useNavigation()

  const navItems = [
    { href: '/#services', label: 'Mes services' },
    { href: '/#contact', label: 'Me contacter' },
    { href: '/blog', label: 'Blog' }
  ]

  // Mémoisation de la fonction handleClick pour éviter les recréations inutiles
  const handleClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute('href')
    
    // Utilise notre hook personnalisé pour une navigation optimisée
    if (href) {
      e.preventDefault()
      navigateSmoothly(href, {
        scrollSmooth: true,
        scrollToTop: !href.includes('#')
      })
    }
    
    // Fermer le menu mobile si ouvert
    if (isOpen) setIsOpen(false)
  }, [isOpen, navigateSmoothly]);

  // Précharge les liens visibles lors du montage du composant
  useEffect(() => {
    prefetchVisibleLinks()
  }, [prefetchVisibleLinks]);

  return (
    <nav 
      role="navigation"
      aria-label="Navigation principale"
      className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            aria-label="Accueil - Killian DOUBRE"
            onClick={handleClick}
            className={`text-xl font-bold text-black hover:opacity-80 transition-opacity`}
          >
            Killian DOUBRE
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClick}
                  prefetch={!item.href.startsWith('#')} // Préchargement des pages non-ancres
                  className={`${styles.navLink} text-gray-800 hover:text-blue-600 transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-700/10`}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 text-gray-800`}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                prefetch={!item.href.startsWith('#')} // Préchargement des pages non-ancres
                className={`${styles.mobileNavItem} block px-3 py-2 rounded-md hover:bg-gray-700/10`}
                style={{ animationDelay: `${index * 0.05}s` }} // Réduit le délai d'animation
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
