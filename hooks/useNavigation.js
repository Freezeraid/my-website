'use client'

import { useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/**
 * Hook personnalisé pour optimiser la navigation dans l'application
 * 
 * Ce hook permet de:
 * 1. Précharger les pages liées pour une navigation plus rapide
 * 2. Gérer les transitions entre les pages
 * 3. Restaurer la position de défilement lors de la navigation
 * 4. Mettre en cache les pages visitées
 */
export default function useNavigation() {
  const router = useRouter()
  const pathname = usePathname()
  
  // Précharge les pages liées en fonction des liens visibles dans la page
  const prefetchVisibleLinks = useCallback(() => {
    // Sélectionne tous les liens dans la page
    const links = document.querySelectorAll('a[href^="/"]')
    
    // Utilise Intersection Observer pour détecter les liens visibles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target
          const href = link.getAttribute('href')
          
          // Précharge la page si c'est un lien interne et pas la page courante
          if (href && href.startsWith('/') && href !== pathname) {
            router.prefetch(href)
          }
          
          // Arrête d'observer ce lien une fois qu'il a été préchargé
          observer.unobserve(link)
        }
      })
    }, {
      rootMargin: '200px', // Commence à précharger quand le lien est à 200px de la zone visible
      threshold: 0.1 // Précharge quand au moins 10% du lien est visible
    })
    
    // Observe tous les liens
    links.forEach((link) => observer.observe(link))
    
    // Nettoie l'observer lors du démontage du composant
    return () => {
      links.forEach((link) => observer.unobserve(link))
    }
  }, [router, pathname])
  
  // Gère la navigation fluide
  const navigateSmoothly = useCallback((href, options = {}) => {
    // Options par défaut
    const defaultOptions = {
      scroll: true,
      scrollSmooth: true,
      scrollToTop: true
    }
    
    // Fusionne les options par défaut avec les options fournies
    const finalOptions = { ...defaultOptions, ...options }
    
    // Si c'est un lien d'ancrage, gère le défilement fluide
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      
      // Si c'est la même page, défile simplement vers l'ancre
      if (path === '' || path === pathname) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({
            behavior: finalOptions.scrollSmooth ? 'smooth' : 'auto',
            block: 'start'
          })
          return
        }
      }
    }
    
    // Sinon, navigue normalement
    router.push(href, { scroll: finalOptions.scroll })
    
    // Défile en haut de la page si nécessaire
    if (finalOptions.scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: finalOptions.scrollSmooth ? 'smooth' : 'auto'
      })
    }
  }, [router, pathname])
  
  // Initialise le hook
  useEffect(() => {
    // Précharge les liens visibles
    const cleanup = prefetchVisibleLinks()
    
    // Nettoie lors du démontage du composant
    return cleanup
  }, [prefetchVisibleLinks])
  
  return {
    navigateSmoothly,
    prefetchVisibleLinks,
    pathname
  }
}
