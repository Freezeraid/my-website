'use client'

import dynamic from 'next/dynamic'

// Chargement dynamique des composants d'analyse côté client
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(mod => ({ default: mod.SpeedInsights })),
  { ssr: false }
)

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(mod => ({ default: mod.Analytics })),
  { ssr: false }
)

// Composant client pour les outils d'analyse
export default function ClientAnalytics() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
