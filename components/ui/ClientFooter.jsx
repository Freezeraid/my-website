'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './Loading'

// Chargement dynamique du footer côté client
const Footer = dynamic(
  () => import('../footer/Footer'),
  { 
    loading: () => <Loading />,
    ssr: true
  }
)

// Composant client pour le footer
export default function ClientFooter() {
  return (
    <Suspense fallback={<Loading />}>
      <Footer />
    </Suspense>
  )
}
