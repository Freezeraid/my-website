import './globals.css'

import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Killian DOUBRE - Développeur Web Full Stack',
    template: '%s | Killian DOUBRE'
  },
  description: 'Développeur web full stack spécialisé en React, Node.js, et plus. Création de sites web performants et optimisés.',
  keywords: ['développeur web', 'full stack', 'react', 'node.js', 'javascript'],
  openGraph: {
    title: 'Killian DOUBRE - Développeur Web Full Stack',
    description: 'Développeur web full stack spécialisé en React, Node.js, et plus.',
    url: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    siteName: 'Portfolio de Killian DOUBRE',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}