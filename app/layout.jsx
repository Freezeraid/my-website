import './globals.css'

import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/navigation/Navbar'
import SchemaOrg from '../components/ui/SchemaOrg'
import ClientFooter from '../components/ui/ClientFooter'
import ClientAnalytics from '../components/ui/ClientAnalytics'
import { generateHomePageSchemas } from '../lib/schema'

// Optimisation du chargement des polices
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true, // Préchargement de la police pour améliorer les performances
  fallback: ['system-ui', 'sans-serif'] // Police de secours pendant le chargement
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true, // Préchargement de la police pour améliorer les performances
  fallback: ['system-ui', 'sans-serif'] // Police de secours pendant le chargement
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://killiandoubre.com'),
  title: {
    default: 'Killian DOUBRE - Développeur Web Freelance',
    template: '%s | Killian DOUBRE - Développeur Web Freelance'
  },
  description: "Développeur Web Freelance basé à Nice. De l'architecture à l'expérience utilisateur, chaque ligne de code est optimisée pour garantir votre succès.",
  keywords: [
    'développeur web freelance', 
    'développeur full stack', 
    'création site web', 
    'développeur react', 
    'développeur node.js', 
    'développeur next.js', 
    'site web professionnel', 
    'site e-commerce', 
    'application web', 
    'développeur web nice',
    'site web responsive',
    'optimisation seo',
    'site web performant'
  ],
  authors: [{ name: 'Killian DOUBRE', url: 'https://killiandoubre.com' }],
  creator: 'Killian DOUBRE',
  publisher: 'Killian DOUBRE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://killiandoubre.com',
    title: 'Killian DOUBRE - Développeur Web Freelance',
    description: "Développeur Web Freelance basé à Nice. De l'architecture à l'expérience utilisateur, chaque ligne de code est optimisée pour garantir votre succès.",
    siteName: 'Killian DOUBRE - Développeur Web Freelance',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Killian DOUBRE - Développeur Web Freelance',
      type: 'image/jpeg',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Killian DOUBRE - Développeur Web Freelance',
    description: "Développeur Web Freelance basé à Nice. De l'architecture à l'expérience utilisateur, chaque ligne de code est optimisée pour garantir votre succès.",
    images: ['/og-image.jpg'],
    creator: '@KillianDoubre',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://killiandoubre.com',
    languages: {
      'fr-FR': 'https://killiandoubre.com',
    },
  },
  verification: {
    google: 'ajoutez-votre-code-verification-google-ici',
    yandex: 'ajoutez-votre-code-verification-yandex-ici',
    bing: 'ajoutez-votre-code-verification-bing-ici',
  },
  other: {
    'theme-color': '#3b82f6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black',
    'apple-mobile-web-app-title': 'Killian DOUBRE',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({ children }) {
  const homePageSchemas = generateHomePageSchemas();
  
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <SchemaOrg schemas={homePageSchemas} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        
        {/* Chargement différé des composants non critiques */}
        <ClientFooter />
        
        {/* Chargement différé des outils d'analyse */}
        <ClientAnalytics />
      </body>
    </html>
  )
}
