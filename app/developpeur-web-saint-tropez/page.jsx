import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import OptimizedImage from '../../components/ui/OptimizedImage'
import Loading from '../../components/ui/Loading'
import Breadcrumb from '../../components/ui/Breadcrumb'
import SchemaOrg from '../../components/ui/SchemaOrg'
import { generateServicePageSchemas } from '../../lib/schema/service'

const Contact = dynamic(() => import('../../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true
})

export const metadata = {
  title: 'Développeur Web à Saint-Tropez | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance basé à Nice intervenant à Saint-Tropez. Création de sites web, e-commerce et applications sur-mesure. Solutions web adaptées aux entreprises de Saint-Tropez.',
  keywords: ['développeur web Saint-Tropez', 'création site web Saint-Tropez', 'freelance web Saint-Tropez', 'développeur Saint-Tropez', 'site internet Saint-Tropez', 'création site e-commerce Saint-Tropez', 'développeur application web Saint-Tropez', 'agence web Saint-Tropez', 'refonte site web Saint-Tropez'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-saint-tropez',
  },
  openGraph: {
    title: 'Développeur Web à Saint-Tropez | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance basé à Nice intervenant à Saint-Tropez. Création de sites web, e-commerce et applications sur-mesure. Solutions web adaptées aux entreprises de Saint-Tropez.',
    url: 'https://killiandoubre.com/developpeur-web-saint-tropez',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Saint-Tropez',
  description: 'Services de développement web sur-mesure à Saint-Tropez : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-saint-tropez',
  image: 'https://killiandoubre.com/photo_close.jpg',
  features: [
    'Création de sites web professionnels',
    'Développement d\'applications web',
    'Sites e-commerce performants',
    'Optimisation SEO locale',
    'Maintenance et support technique'
  ],
  faqs: [
    {
      question: 'Quels types de sites web développez-vous à Saint-Tropez ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Saint-Tropez : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché local et international.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Saint-Tropez ?',
      answer: 'Le coût d\'un site web à Saint-Tropez varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Saint-Tropez ?',
      answer: 'Tout à fait, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local et international de Saint-Tropez, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu multilingue ciblant Saint-Tropez et sa clientèle internationale.'
    }
  ]
}

export default function DeveloppeurWebSaintTropezPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Création de sites web haut de gamme pour les entreprises et professionnels de Saint-Tropez. Des sites vitrines élégants, responsive et optimisés pour séduire une clientèle locale et internationale exigeante.",
      features: [
        "Design luxueux reflétant l'identité de votre marque",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Saint-Tropez",
        "Expérience utilisateur premium et multilingue"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Développement de sites e-commerce sophistiqués pour les commerces et marques de Saint-Tropez. Des boutiques en ligne sécurisées et raffinées qui valorisent vos produits auprès d'une clientèle internationale.",
      features: [
        "Interface utilisateur élégante et immersive",
        "Gestion avancée des produits et inventaires",
        "Solutions de paiement sécurisées et options de livraison internationales",
        "Expérience d'achat personnalisée et multilingue"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Conception d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Saint-Tropez et sur la Côte d'Azur.",
      features: [
        "Développement full-stack avec technologies innovantes",
        "Interfaces utilisateurs intuitives et sophistiquées",
        "Systèmes robustes, sécurisés et évolutifs",
        "Solutions adaptées à une clientèle internationale"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Internationale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Saint-Tropez et à l'international. Attirez davantage de clients locaux et internationaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale et internationale",
        "Optimisation Google My Business",
        "Création de contenu multilingue optimisé",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Premium de Saint-Tropez",
      description: "Ma connaissance approfondie du marché web à Saint-Tropez et sur la Côte d'Azur me permet de créer des solutions parfaitement adaptées aux attentes d'une clientèle exigeante. Je comprends les spécificités économiques de Saint-Tropez et les opportunités web qu'offre cette destination prestigieuse."
    },
    {
      title: "Accompagnement Personnalisé & Discrétion",
      description: "En tant que développeur web freelance basé à Nice intervenant à Saint-Tropez, je vous offre un accompagnement personnalisé tout au long de votre projet. Cette relation directe assure une communication privilégiée et une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Sur-Mesure pour Établissements Prestigieux",
      description: "Chaque entreprise à Saint-Tropez possède son propre positionnement, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs spécifiques. Pas de solutions génériques, mais des créations uniques qui reflètent l'excellence de votre établissement."
    },
    {
      title: "Support Technique & Maintenance Premium",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon objectif est d'assurer la pérennité et l'évolution de votre solution web, avec un service client attentif aux besoins des professionnels de Saint-Tropez."
    }
  ]

  const saintTropezBusinessSectors = [
    {
      icon: "⛵",
      title: "Tourisme & Hôtellerie de Luxe",
      description: "Sites web et applications pour hôtels, villas, yachts et prestataires touristiques haut de gamme à Saint-Tropez. Solutions web élégantes pour présenter votre offre, gérer les réservations et fidéliser votre clientèle internationale."
    },
    {
      icon: "🛍️",
      title: "Commerces & Boutiques de Prestige",
      description: "Présence web sophistiquée pour boutiques, galeries et commerces de luxe à Saint-Tropez. Sites vitrines et e-commerce adaptés aux standards d'excellence pour valoriser vos produits auprès d'une clientèle exigeante."
    },
    {
      icon: "🍽️",
      title: "Gastronomie & Établissements Renommés",
      description: "Applications web et sites pour restaurants, plages privées et établissements gastronomiques à Saint-Tropez. Solutions web raffinées pour présenter votre offre, gérer les réservations et fidéliser votre clientèle privilégiée."
    },
    {
      icon: "🏘️",
      title: "Immobilier & Propriétés d'Exception",
      description: "Sites web professionnels pour agences immobilières et promoteurs spécialisés dans les biens d'exception à Saint-Tropez. Solutions web mettant en valeur vos propriétés auprès d'une clientèle internationale fortunée."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité à Saint-Tropez, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au marché local et international."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "Je développe une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous travaillons ensemble pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à l'image prestigieuse de votre établissement."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est méticuleusement développée et testée pour garantir une expérience utilisateur irréprochable."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local et international pour maximiser votre visibilité auprès de votre clientèle cible."
    },
    {
      number: "05",
      title: "Lancement & Évolution",
      description: "Après le lancement, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const saintTropezDigitalStats = [
    {
      figure: "87%",
      description: "des visiteurs internationaux à Saint-Tropez recherchent des établissements locaux en ligne avant leur séjour"
    },
    {
      figure: "78%",
      description: "des recherches sur mobile concernant Saint-Tropez aboutissent à une réservation ou une visite"
    },
    {
      figure: "73%",
      description: "des entreprises de Saint-Tropez considèrent que leur site web est essentiel pour attirer une clientèle internationale"
    },
    {
      figure: "95%",
      description: "des utilisateurs forment leur première impression d'un établissement de luxe à Saint-Tropez à partir de son site web"
    }
  ]

  return (
    <>
      <SchemaOrg jsonLd={generateServicePageSchemas(serviceData, serviceData.faqs)} />
      
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
                { label: 'Développeur Web Freelance à Saint-Tropez', href: '/developpeur-web-saint-tropez', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Saint-Tropez</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> intervenant à <strong>Saint-Tropez</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels du Var. Expertise technique, solutions personnalisées et accompagnement de proximité pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Saint-Tropez"
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
                          <div className="text-3xl mb-2">🖥️</div>
                          <h3 className="font-semibold text-gray-900">Sites Web</h3>
                          <p className="text-sm text-gray-600">Haut de gamme</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🛒</div>
                          <h3 className="font-semibold text-gray-900">E-commerce</h3>
                          <p className="text-sm text-gray-600">Sophistiqués</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Applications</h3>
                          <p className="text-sm text-gray-600">Sur-mesure</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO</h3>
                          <p className="text-sm text-gray-600">International</p>
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
                Services de Développement Web à Saint-Tropez
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Saint-Tropez.
                Chaque solution est conçue sur-mesure pour répondre à vos besoins spécifiques et valoriser votre établissement auprès d'une clientèle exigeante.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {webServices.map((service, index) => (
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web à Saint-Tropez ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web d'exception qui répond parfaitement aux besoins de votre établissement à Saint-Tropez.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discuter de votre projet
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
