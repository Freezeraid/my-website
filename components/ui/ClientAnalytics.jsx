'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Composant d'erreur qui supprime les erreurs liées aux scripts Vercel
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Fonction pour intercepter les erreurs de chargement de script
    const originalOnError = window.onerror;
    
    window.onerror = (message, source, lineno, colno, error) => {
      // Vérifier si l'erreur concerne les scripts Vercel
      if (source && (
        source.includes('/_vercel/insights/script.js') || 
        source.includes('/_vercel/speed-insights/script.js')
      )) {
        // Empêcher l'erreur d'apparaître dans la console
        setHasError(true);
        return true; // Indique que l'erreur a été gérée
      }
      
      // Pour les autres erreurs, utiliser le gestionnaire d'origine
      if (originalOnError) {
        return originalOnError(message, source, lineno, colno, error);
      }
      return false;
    };
    
    // Nettoyage lors du démontage du composant
    return () => {
      window.onerror = originalOnError;
    };
  }, []);

  // Si une erreur a été détectée, ne rien rendre
  if (hasError) {
    return null;
  }

  // Sinon, rendre les enfants normalement
  return children;
};

// Chargement dynamique des composants d'analyse avec gestion d'erreur
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next')
    .then(mod => ({ default: mod.SpeedInsights }))
    .catch(() => {
      // Retourner un composant vide en cas d'erreur
      return { default: () => null };
    }),
  { 
    ssr: false,
    preload: false // Désactiver le préchargement automatique pour éviter les avertissements
  }
);

const Analytics = dynamic(
  () => import('@vercel/analytics/react')
    .then(mod => ({ default: mod.Analytics }))
    .catch(() => {
      // Retourner un composant vide en cas d'erreur
      return { default: () => null };
    }),
  { 
    ssr: false,
    preload: false // Désactiver le préchargement automatique pour éviter les avertissements
  }
);

// Composant client pour les outils d'analyse avec gestion d'erreur
export default function ClientAnalytics() {
  return (
    <ErrorBoundary>
      <SpeedInsights />
      <Analytics />
    </ErrorBoundary>
  );
}
