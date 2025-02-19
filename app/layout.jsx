import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next';
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://killiandoubre.com/'),
  title: {
    default: 'Killian DOUBRE - Développeur Web Full Stack',
    template: '%s | Killian DOUBRE'
  },
  description: 'Développeur web full stack spécialisé en React, Node.js, et plus. Création de sites web performants et optimisés.',
  keywords: ['développeur web', 'full stack', 'react', 'node.js', 'javascript'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://killiandoubre.com/',
    title: 'Killian Doubre - Développeur Web Full Stack',
    description: 'Développeur Web Full Stack spécialisé en React, Node.js, et création de sites web performants',
    siteName: 'Killian Doubre',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Killian Doubre - Développeur Web Full Stack'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Killian Doubre - Développeur Web Full Stack',
    description: 'Développeur Web Full Stack spécialisé en React, Node.js, et création de sites web performants',
    images: ['/og-image.jpg'],
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
  },
  other: {
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
  },
}

export default function RootLayout({ children }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Killian Doubre',
    url: 'https://killiandoubre.com/',
    jobTitle: 'Développeur Web Full Stack',
    sameAs: [
      'https://www.linkedin.com/in/doubre-killian/',
      'https://github.com/Freezeraid/'
    ],
    knowsAbout: [
      'Développement Web',
      'React',
      'Node.js',
      'Full Stack Development',
      'SEO'
    ]
  }
  
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}