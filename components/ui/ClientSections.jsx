'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './Loading'

// Chargement dynamique des sections côté client
const Services = dynamic(
  () => import('../sections/Services'),
  { 
    loading: () => <Loading />,
    ssr: false
  }
)

const Contact = dynamic(
  () => import('../sections/Contact'),
  { 
    loading: () => <Loading />,
    ssr: false
  }
)

// Composant client pour les sections
export default function ClientSections() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </>
  )
}
