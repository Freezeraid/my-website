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
  title: 'Développeur Web à La Valette-du-Var | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance basé à Nice intervenant à La Valette-du-Var. Création de sites web, e-commerce et applications sur-mesure. Solutions web adaptées aux entreprises de La Valette-du-Var.',
  keywords: ['développeur web La Valette-du-Var', 'création site web La Valette-du-Var', 'freelance web La Valette-du-Var', 'développeur La Valette-du-Var', 'site internet La Valette-du-Var', 'création site e-commerce La Valette-du-Var', 'développeur application web La Valette-du-Var', 'agence web La Valette-du-Var', 'refonte site web La Valette-du-Var'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-la-valette-du-var',
  },
  openGraph: {
    title: 'Développeur Web à La Valette-du-Var | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance basé à Nice intervenant à La Valette-du-Var. Création de sites web, e-commerce et applications sur-mesure. Solutions web adaptées aux entreprises de La Valette-du-Var.',
    url: 'https://killiandoubre.com/developpeur-web-la-valette-du-var',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à La Valette-du-Var',
  description: 'Services de développement web sur-mesure à La Valette-du-Var : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-la-valette-du-var',
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
      question: 'Quels types de sites web développez-vous à La Valette-du-Var ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de La Valette-du-Var : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché local.'
    },
    {
      question: 'Combien coûte la création d\'un site web à La Valette-du-Var ?',
      answer: 'Le coût d\'un site web à La Valette-du-Var varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour La Valette-du-Var ?',
      answer: 'Effectivement, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local de La Valette-du-Var, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant La Valette-du-Var et sa région.'
    }
  ]
}

export default function DeveloppeurWebLaValetteDuVarPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Création de sites web sur-mesure pour les entreprises et professionnels de La Valette-du-Var. Des sites vitrines attractifs, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Design élégant reflétant l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à La Valette-du-Var",
        "Intégration de fonctionnalités adaptées à vos besoins"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "création de sites e-commerce performants pour les commerçants et entrepreneurs de La Valette-du-Var. Des boutiques en ligne sécurisées et intuitives qui stimulent vos ventes en ligne.",
      features: [
        "Interface utilisateur fluide et attrayante",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et options de livraison variées",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Conception d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à La Valette-du-Var et dans le Var.",
      features: [
        "Développement full-stack avec technologies innovantes",
        "Interfaces utilisateurs intuitives et performantes",
        "Systèmes robustes, sécurisés et évolutifs",
        "Intégration harmonieuse avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à La Valette-du-Var et dans le Var. Attirez plus de clients locaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale ciblée sur La Valette-du-Var",
        "Optimisation Google My Business",
        "Création de contenu optimisé pour votre marché local",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Local de La Valette-du-Var",
      description: "Ma connaissance approfondie du marché web à La Valette-du-Var et dans le Var me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités économiques de La Valette-du-Var et les opportunités web qu'offre cette ville dynamique."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice intervenant à La Valette-du-Var, je vous offre un accompagnement personnalisé tout au long de votre projet. Cette relation directe garantit une communication efficace et une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Locales",
      description: "Chaque entreprise à La Valette-du-Var a ses propres besoins, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs spécifiques. Pas de templates génériques, mais des créations originales qui vous distinguent de la concurrence locale."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon objectif est d'assurer la pérennité et l'évolution de votre solution web, avec un service client attentif aux besoins des professionnels de La Valette-du-Var."
    }
  ]

  const laValetteDuVarBusinessSectors = [
    {
      icon: "🏢",
      title: "Commerces & Services Locaux",
      description: "Présence web efficace pour commerces, artisans et prestataires de services à La Valette-du-Var. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour attirer et fidéliser une clientèle de proximité."
    },
    {
      icon: "🏬",
      title: "Centres Commerciaux & Retail",
      description: "Solutions web pour les commerces et enseignes des zones commerciales de La Valette-du-Var. Sites web et applications permettant de valoriser votre offre, améliorer l'expérience client et développer votre activité en ligne."
    },
    {
      icon: "🏭",
      title: "PME & Entreprises",
      description: "Sites web professionnels pour les PME, entreprises industrielles et sociétés de services B2B à La Valette-du-Var. Solutions web mettant en valeur votre expertise, vos produits et services auprès de clients professionnels."
    },
    {
      icon: "🍽️",
      title: "Restauration & Loisirs",
      description: "Applications web et sites pour restaurants, bars et établissements de loisirs à La Valette-du-Var. Solutions web pour présenter votre offre, gérer les réservations et fidéliser votre clientèle locale."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je débute par une analyse approfondie de votre activité à La Valette-du-Var, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au marché local du Var."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de La Valette-du-Var."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const laValetteDuVarDigitalStats = [
    {
      figure: "84%",
      description: "des consommateurs à La Valette-du-Var recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "75%",
      description: "des recherches locales sur mobile à La Valette-du-Var aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "72%",
      description: "des entreprises de La Valette-du-Var considèrent que leur site web est crucial pour leur développement commercial"
    },
    {
      figure: "94%",
      description: "des utilisateurs à La Valette-du-Var forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance à La Valette-du-Var', href: '/developpeur-web-la-valette-du-var', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">La Valette-du-Var</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> intervenant à <strong>La Valette-du-Var</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels du Var. Expertise technique, solutions personnalisées et accompagnement de proximité pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à La Valette-du-Var"
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
                          <p className="text-sm text-gray-600">Professionnels</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🛒</div>
                          <h3 className="font-semibold text-gray-900">E-commerce</h3>
                          <p className="text-sm text-gray-600">Performants</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Applications</h3>
                          <p className="text-sm text-gray-600">Sur-mesure</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO Local</h3>
                          <p className="text-sm text-gray-600">La Valette-du-Var</p>
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
                Services de Développement Web à La Valette-du-Var
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de La Valette-du-Var.
                Chaque solution est conçue sur-mesure pour répondre à vos besoins spécifiques et vous démarquer sur le marché local.
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
              Prêt à Développer Votre Projet Web à La Valette-du-Var ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise à La Valette-du-Var.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Obtenez votre devis gratuitement !
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
