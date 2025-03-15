import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import OptimizedImage from '../../components/ui/OptimizedImage'
import Loading from '../../components/ui/Loading'
import Breadcrumb from '../../components/ui/Breadcrumb'
import SchemaOrg from '../../components/ui/SchemaOrg'
import { generateServicePageSchemas, serviceData } from '../../lib/schema/service'

const Contact = dynamic(() => import('../../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true
})

export const metadata = {
  title: 'Création de Site E-commerce | Développeur Web Freelance',
  description: 'Création de boutiques en ligne professionnelles et performantes. Développeur web freelance spécialisé en e-commerce, paiement sécurisé et expérience d\'achat optimisée.',
  keywords: ['site e-commerce', 'boutique en ligne', 'création site e-commerce', 'développeur e-commerce', 'site marchand', 'woocommerce', 'shopify', 'prestashop', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-site-ecommerce',
  },
  openGraph: {
    title: 'Création de Site E-commerce | Développeur Web Freelance',
    description: 'Création de boutiques en ligne professionnelles et performantes. Développeur web freelance spécialisé en e-commerce, paiement sécurisé et expérience d\'achat optimisée.',
    url: 'https://killiandoubre.com/developpement-site-ecommerce',
  }
}

export default function SiteEcommercePage() {
  const servicePageSchemas = generateServicePageSchemas(
    serviceData['developpement-site-ecommerce'],
    serviceData['developpement-site-ecommerce'].faqs
  );
  
  const ecommerceServices = [
    {
      icon: "🛒",
      title: "Boutiques en Ligne Complètes",
      description: "Création de sites e-commerce sur-mesure, intuitifs et performants. Des boutiques en ligne qui offrent une expérience d'achat fluide et convertissent vos visiteurs en clients.",
      features: [
        "Design moderne adapté à votre marque",
        "Interface utilisateur intuitive et ergonomique",
        "Optimisation pour la conversion et les ventes"
      ]
    },
    {
      icon: "🔒",
      title: "Paiement & Sécurité",
      description: "Intégration de solutions de paiement sécurisées et fiables. Protection des données sensibles et conformité aux normes de sécurité pour garantir la confiance de vos clients.",
      features: [
        "Passerelles de paiement multiples (CB, PayPal, etc.)",
        "Transactions sécurisées (SSL, 3D Secure)",
        "Conformité RGPD et protection des données"
      ]
    },
    {
      icon: "📊",
      title: "Gestion & Analytics",
      description: "Outils de gestion puissants pour administrer votre boutique efficacement. Tableaux de bord et analytics pour suivre vos performances et optimiser vos ventes.",
      features: [
        "Gestion intuitive des produits et stocks",
        "Suivi des commandes et expéditions",
        "Rapports de vente et analytics détaillés"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise E-commerce Spécialisée",
      description: "En tant que développeur web freelance spécialisé en e-commerce, je maîtrise les technologies et bonnes pratiques spécifiques aux sites marchands. Cette expertise ciblée me permet de créer des boutiques en ligne performantes et optimisées pour les ventes."
    },
    {
      title: "Flexibilité et Réactivité",
      description: "Contrairement aux agences, je vous offre une flexibilité totale dans la gestion de votre projet e-commerce. Adaptations rapides, modifications de dernière minute, ou ajustements stratégiques - je m'adapte à l'évolution de vos besoins."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre boutique en ligne, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins et une mise en œuvre plus précise de vos idées."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs sans compromettre la qualité. Vous bénéficiez d'une boutique en ligne professionnelle à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Stratégie",
      description: "Nous commençons par une analyse approfondie de votre activité, vos produits, votre marché et vos objectifs commerciaux. Cette étape cruciale me permet de définir la meilleure stratégie e-commerce pour votre projet."
    },
    {
      number: "02",
      title: "Conception & Prototypage",
      description: "Je crée des maquettes et prototypes interactifs de votre boutique en ligne. Vous visualisez ainsi concrètement le parcours d'achat et l'expérience utilisateur avant le développement."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre boutique en ligne avec les technologies les plus adaptées à votre projet. Chaque fonctionnalité est optimisée pour la performance, la sécurité et la conversion."
    },
    {
      number: "04",
      title: "Tests & Déploiement",
      description: "Votre boutique est rigoureusement testée sur différents appareils et navigateurs. Je vérifie également le bon fonctionnement du processus d'achat et des paiements avant la mise en ligne."
    },
    {
      number: "05",
      title: "Formation & Support",
      description: "Je vous forme à l'utilisation de votre back-office et vous accompagne après le lancement avec des services de maintenance et d'évolution pour garantir le succès de votre boutique en ligne."
    }
  ]

  return (
    <>
      <SchemaOrg schemas={servicePageSchemas} />
      <main>
        {/* Hero Section */}
        <header className="relative min-h-[80vh] pt-28 flex items-center bg-gradient-to-b from-blue-50 to-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-32 right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100 blur-3xl opacity-70" />
            <div className="absolute bottom-20 left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-100 blur-3xl opacity-60" />
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb 
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Développement de Site E-commerce', href: '/developpement-site-ecommerce', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Site <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">E-commerce</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Votre Boutique en Ligne Performante
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>création de sites e-commerce</strong>, je conçois des boutiques en ligne performantes qui maximisent vos ventes et offrent une expérience d'achat exceptionnelle à vos clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Discuter de votre projet
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Découvrir mes services
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex flex-col gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="rounded-full overflow-hidden w-48 h-48 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                      <OptimizedImage
                        src="/photo_close.jpg"
                        alt="Photo de profil Killian DOUBRE"
                        width={256}
                        height={256}
                        priority
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🛒</div>
                          <h3 className="font-semibold text-gray-900">E-commerce</h3>
                          <p className="text-sm text-gray-600">Boutique en Ligne</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔒</div>
                          <h3 className="font-semibold text-gray-900">Paiement</h3>
                          <p className="text-sm text-gray-600">Sécurisé & Fiable</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Responsive</h3>
                          <p className="text-sm text-gray-600">Mobile First</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📊</div>
                          <h3 className="font-semibold text-gray-900">Analytics</h3>
                          <p className="text-sm text-gray-600">Suivi des Ventes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Création de Sites E-commerce
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des boutiques en ligne performantes qui transforment vos visiteurs en clients fidèles.
                Chaque site e-commerce est conçu sur-mesure pour répondre à vos objectifs commerciaux spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {ecommerceServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi me choisir pour la création de votre boutique E-commerce ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec moi offre de nombreux avantages pour votre projet de boutique en ligne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {freelanceAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mon Processus de Développement E-commerce
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour transformer votre vision en une boutique en ligne performante et rentable.
              </p>
            </div>
            
            <div className="space-y-8">
              {workProcess.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-xl font-bold rounded-full">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                    {index < workProcess.length - 1 && (
                      <div className="hidden md:block h-12 w-0.5 bg-blue-200 ml-8 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi un site e-commerce Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer une Boutique en Ligne ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un site e-commerce professionnel est essentiel pour toute entreprise souhaitant vendre ses produits ou services en ligne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Vente 24/7 Sans Limites
                </h3>
                <p className="text-gray-600">
                  Votre boutique en ligne est ouverte 24h/24 et 7j/7, permettant à vos clients d'acheter à tout moment.
                  Élargissez votre marché au-delà des contraintes géographiques et temporelles.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance & Évolutivité
                </h3>
                <p className="text-gray-600">
                  Un site e-commerce vous permet de développer votre activité de manière évolutive, 
                  en ajoutant facilement de nouveaux produits et en touchant de nouveaux marchés.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Données & Personnalisation
                </h3>
                <p className="text-gray-600">
                  Collectez des données précieuses sur vos clients et leurs comportements d'achat
                  pour optimiser votre offre et personnaliser l'expérience utilisateur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités de Votre Boutique en Ligne
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des sites e-commerce complets avec toutes les fonctionnalités essentielles pour vendre efficacement en ligne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Expérience d'Achat
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Catalogue Produits Avancé</p>
                    <p className="text-gray-600">
                      Présentation attractive de vos produits avec filtres, catégories, variantes et options.
                      Fiches produits détaillées avec images haute qualité et descriptions optimisées.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Tunnel d'Achat Optimisé</p>
                    <p className="text-gray-600">
                      Processus d'achat simplifié et intuitif pour maximiser les conversions.
                      Panier d'achat persistant, checkout en une page et options de livraison flexibles.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Compte Client & Fidélisation</p>
                    <p className="text-gray-600">
                      Espace client personnalisé avec historique des commandes et suivi de livraison.
                      Programmes de fidélité, codes promo et recommandations personnalisées.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Gestion & Performance
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Back-Office Complet</p>
                    <p className="text-gray-600">
                      Interface d'administration intuitive pour gérer produits, commandes et clients.
                      Gestion des stocks, promotions et contenus marketing intégrée.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Paiement & Sécurité</p>
                    <p className="text-gray-600">
                      Intégration de multiples moyens de paiement (CB, PayPal, Apple Pay, etc.).
                      Sécurisation des transactions et protection contre la fraude.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">SEO & Marketing</p>
                    <p className="text-gray-600">
                      Optimisation pour les moteurs de recherche et intégration avec Google Shopping.
                      Outils marketing (emails automatisés, cross-selling, up-selling) pour booster vos ventes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Vous avez des questions sur mes services de développement e-commerce ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le prix d'un site e-commerce ?
                </h3>
                <p className="text-gray-600">
                  Le prix d'un site e-commerce professionnel varie généralement entre 3000€ et 10000€ selon la complexité du projet, le nombre de produits, 
                  et les fonctionnalités requises. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quelles solutions e-commerce utilisez-vous ?
                </h3>
                <p className="text-gray-600">
                  Je travaille avec plusieurs solutions e-commerce selon vos besoins : WooCommerce (WordPress), Shopify, PrestaShop, ou des solutions sur-mesure avec Next.js et Stripe. 
                  Le choix dépend de vos objectifs, votre budget et vos besoins spécifiques en termes de fonctionnalités.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour créer une boutique en ligne ?
                </h3>
                <p className="text-gray-600">
                  La création d'un site e-commerce professionnel prend généralement entre 6 et 12 semaines, selon la complexité du projet. 
                  Ce délai inclut l'analyse des besoins, la conception, le développement, l'intégration des produits et les tests.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quels moyens de paiement puis-je proposer sur mon site ?
                </h3>
                <p className="text-gray-600">
                  Je peux intégrer une large gamme de solutions de paiement : cartes bancaires (via Stripe, PayPal, etc.), portefeuilles électroniques (Apple Pay, Google Pay), 
                  paiement en plusieurs fois, virement bancaire, et plus encore selon vos besoins et votre marché cible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance pour les sites e-commerce ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance spécifiques pour les sites e-commerce. Ces services incluent les mises à jour de sécurité, 
                  l'optimisation des performances, le support technique, et l'évolution de votre boutique en fonction de vos besoins.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Lancer Votre Boutique en Ligne ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet e-commerce et obtenir un devis personnalisé. 
              Ensemble, créons une boutique en ligne performante qui booste vos ventes.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Obtenir votre devis gratuitement !
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}
