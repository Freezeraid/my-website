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
  title: 'Développeur Web Monaco | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance à Monaco spécialisé en création de sites web, e-commerce et applications. Solutions web haut de gamme adaptées aux entreprises et commerces monégasques, avec accompagnement personnalisé.',
  keywords: ['développeur web Monaco', 'création site web Monaco', 'freelance web Monaco', 'site internet Monaco', 'création site e-commerce Monaco', 'développeur application web Monaco', 'agence web Monaco', 'refonte site web Monaco', 'développeur web luxe Monaco'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-monaco',
  },
  openGraph: {
    title: 'Développeur Web Monaco | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance à Monaco spécialisé en création de sites web, e-commerce et applications. Solutions web haut de gamme adaptées aux entreprises et commerces monégasques, avec accompagnement personnalisé.',
    url: 'https://killiandoubre.com/developpeur-web-monaco',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Monaco',
  description: 'Services de développement web sur-mesure à Monaco : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels de cette principauté prestigieuse de la Côte d\'Azur.',
  slug: 'developpeur-web-monaco',
  image: 'https://killiandoubre.com/photo_close.jpg',
  features: [
    'Création de sites web haut de gamme',
    'Développement d\'applications web sur-mesure',
    'Sites e-commerce premium',
    'Optimisation SEO internationale',
    'Maintenance et support technique dédié'
  ],
  faqs: [
    {
      question: 'Quels types de sites web développez-vous à Monaco ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Monaco : sites vitrines premium, e-commerce de luxe, portfolios exclusifs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité monégasque, avec une attention particulière aux établissements de luxe, services financiers, yachting, immobilier haut de gamme et entreprises internationales établies dans la Principauté.'
    },
    {
      question: 'Quels sont vos tarifs pour un site web à Monaco ?',
      answer: 'Les tarifs pour un site web à Monaco sont établis selon l\'envergure et la complexité du projet. Pour un site vitrine premium, comptez à partir de 3000€, pour une boutique en ligne haut de gamme à partir de 5000€, et pour une application web personnalisée à partir de 8000€. Chaque projet bénéficie d\'un devis détaillé et transparent après analyse approfondie de vos besoins et objectifs commerciaux, avec une attention particulière aux standards d\'excellence attendus à Monaco.'
    },
    {
      question: 'Proposez-vous des services adaptés aux entreprises internationales basées à Monaco ?',
      answer: 'Absolument, je propose des services spécialement conçus pour les entreprises internationales basées à Monaco, incluant des sites multilingues, des solutions de paiement multi-devises, une optimisation SEO internationale, et des interfaces adaptées aux différentes cultures et marchés. Mon approche tient compte des spécificités réglementaires monégasques tout en assurant une présence web globale, essentielle pour les entreprises opérant depuis la Principauté et visant une clientèle internationale.'
    }
  ]
}

export default function DeveloppeurWebMonacoPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web",
      description: "Conception et création de sites web haut de gamme pour les entreprises et professionnels de Monaco. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et refléter l'excellence et le prestige associés à la Principauté.",
      features: [
        "Design exclusif adapté à l'identité de votre entreprise monégasque",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local et international",
        "Intégration de fonctionnalités premium adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques de Luxe",
      description: "Création de plateformes e-commerce haut de gamme pour les enseignes et marques de prestige de Monaco. Des boutiques en ligne sophistiquées qui valorisent vos produits et services exclusifs, avec une expérience utilisateur digne des standards d'excellence de la Principauté.",
      features: [
        "Interface utilisateur élégante et intuitive",
        "Gestion avancée des produits et des stocks",
        "Solutions de paiement sécurisées internationales et multi-devises",
        "Stratégies d'optimisation des conversions pour une clientèle exigeante"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Monaco, adaptées aux exigences élevées de votre secteur d'activité et aux particularités du marché monégasque international.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs sophistiquées et réactives",
        "Architecture sécurisée, évolutive et conforme aux réglementations",
        "Intégration avec vos systèmes et outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Internationale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Monaco et à l'international. Attirez une clientèle locale et mondiale grâce à une stratégie SEO adaptée à votre positionnement dans cette place d'affaires internationale prestigieuse.",
      features: [
        "Stratégie SEO multilingue ciblée sur Monaco et les marchés internationaux",
        "Optimisation Google My Business pour chaque établissement",
        "Création de contenu premium pour votre marché cible",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Monégasque",
      description: "Ma compréhension approfondie de l'écosystème web de Monaco me permet de créer des solutions parfaitement adaptées aux attentes d'une clientèle exigeante et internationale. Je comprends les spécificités du tissu économique de la Principauté et les opportunités numériques qu'elle offre, entre finance, immobilier de luxe, yachting, hôtellerie premium et commerce haut de gamme."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, à proximité immédiate de Monaco, je propose mes services aux entreprises monégasques avec une approche personnalisée et des rencontres sur place si nécessaire. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec vos objectifs commerciaux et les exigences élevées de votre marché."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Monégasques",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise à Monaco. J'évite les templates génériques pour créer des plateformes exclusives qui vous distinguent dans le paysage économique prestigieux de la Principauté et reflètent l'excellence associée à votre marque."
    },
    {
      title: "Support Technique & Maintenance Premium",
      description: "Je vous propose un support technique réactif et une maintenance proactive de votre site ou application. Mon intervention rapide garantit une présence web toujours impeccable, essentielle pour maintenir la confiance de votre clientèle exigeante à Monaco et optimiser votre visibilité en ligne sur ce marché international de premier plan."
    }
  ]

  const businessSectors = [
    {
      icon: "🏦",
      title: "Finance & Services Bancaires",
      description: "Sites web et applications pour banques privées, family offices, gestionnaires de patrimoine et sociétés financières de Monaco. Solutions optimisées pour présenter vos services avec élégance, sécuriser les interactions avec vos clients et valoriser votre expertise, tout en respectant les réglementations strictes du secteur financier monégasque."
    },
    {
      icon: "🏨",
      title: "Hôtellerie & Restauration de Luxe",
      description: "Présence web sophistiquée pour hôtels, restaurants gastronomiques et établissements de prestige de Monaco. Sites vitrines et plateformes de réservation adaptés pour mettre en valeur votre offre exceptionnelle, faciliter les réservations et attirer une clientèle internationale exigeante, en reflétant l'excellence de votre établissement."
    },
    {
      icon: "⛵",
      title: "Yachting & Services Maritimes",
      description: "Plateformes web pour brokers, chantiers navals, services de charter et événements nautiques de Monaco. Solutions permettant de présenter efficacement vos yachts et services, faciliter les demandes et attirer une clientèle fortunée, en mettant en avant l'expertise monégasque dans le domaine du yachting de luxe."
    },
    {
      icon: "🏢",
      title: "Immobilier Haut de Gamme",
      description: "Solutions web pour agences et promoteurs immobiliers spécialisés dans le luxe à Monaco. Sites web et plateformes facilitant la présentation de biens d'exception, la communication avec une clientèle internationale et la valorisation de votre portefeuille immobilier, adaptés aux standards d'excellence du marché immobilier monégasque."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques à Monaco. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte exigeant de la Principauté, avec ses particularités économiques, réglementaires et internationales."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes élevées de votre clientèle monégasque et internationale."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus avancées, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir une expérience utilisateur exceptionnelle et une parfaite adaptation aux exigences du marché monégasque."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local et international pour maximiser votre visibilité auprès des utilisateurs de Monaco et de votre clientèle mondiale."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance premium et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins et du marché monégasque exigeant."
    }
  ]

  const digitalStats = [
    {
      figure: "92%",
      description: "des consommateurs à Monaco et des visiteurs internationaux recherchent des entreprises locales en ligne avant de faire un achat ou de réserver une prestation"
    },
    {
      figure: "78%",
      description: "des recherches locales sur mobile à Monaco aboutissent à une visite en magasin ou à un contact direct dans les 24 heures"
    },
    {
      figure: "85%",
      description: "des entreprises monégasques considèrent que leur site web est essentiel pour leur développement commercial et leur visibilité internationale"
    },
    {
      figure: "94%",
      description: "des visiteurs fortunés préparent leur séjour à Monaco en consultant les sites web des hôtels, restaurants et services de luxe avant de réserver"
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
                { label: 'Développeur Web Freelance à Monaco', href: '/developpeur-web-monaco', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Monaco</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications Premium
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et professionnels de <strong>Monaco</strong> pour concevoir des sites internet et applications sur-mesure adaptés aux exigences élevées du marché monégasque. Mon approche associe excellence technique, compréhension des enjeux internationaux et accompagnement personnalisé pour la réussite de votre projet web dans cette principauté prestigieuse de la Côte d'Azur.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Monaco"
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
                          <p className="text-sm text-gray-600">Premium</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🛒</div>
                          <h3 className="font-semibold text-gray-900">E-commerce</h3>
                          <p className="text-sm text-gray-600">Luxe</p>
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
                Services de Développement Web à Monaco
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web haut de gamme pour les entreprises et professionnels de Monaco.
                Chaque solution est élaborée sur-mesure pour répondre à vos exigences spécifiques et renforcer votre présence sur le marché monégasque et international.
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

        {/* Secteurs d'activité Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Monégasques
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Monaco, en tenant compte des spécificités locales et des enjeux propres à cette place d'affaires internationale prestigieuse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessSectors.map((sector, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{sector.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistiques Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                L'Importance du Web à Monaco
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Monaco, particulièrement dans cette principauté qui constitue un centre d'affaires international et une destination de luxe mondialement reconnue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {digitalStats.map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{stat.figure}</div>
                  <p className="text-gray-700">{stat.description}</p>
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
                Pourquoi me choisir pour votre projet web ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Collaborer avec moi présente de nombreux avantages pour votre projet web à Monaco.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {localAdvantages.map((advantage, index) => (
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
                Mon Processus de Développement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et collaborative pour transformer votre vision en une solution web d'exception, adaptée au marché monégasque exigeant et à ses spécificités internationales.
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

        {/* Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Monaco : Expertise Internationale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services à Monaco, je comprends les spécificités du marché local et les besoins des entreprises de cette principauté qui constitue un centre d'affaires international et une destination de luxe mondialement reconnue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Internationale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché monégasque et international vous permet d'attirer des clients locaux et du monde entier, tout en vous démarquant dans un environnement hautement concurrentiel. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et internationales, et mettent en valeur votre positionnement premium dans cette principauté reconnue pour son excellence et son prestige.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration Privilégiée
                </h3>
                <p className="text-gray-600">
                  Basé à Nice, à proximité immédiate de Monaco, je propose une collaboration privilégiée avec les entreprises monégasques. Cette proximité géographique permet des rencontres sur place si nécessaire, tout en maintenant une communication fluide et des délais optimisés pour la réalisation de votre projet web d'exception.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Excellence & Standards Internationaux
                </h3>
                <p className="text-gray-600">
                  Monaco, avec son statut de place financière internationale et de destination de luxe, exige les plus hauts standards de qualité et d'excellence. 
                  Je développe des solutions web qui répondent à ces exigences élevées, notamment en termes de design sophistiqué, de sécurité renforcée et de performances optimales, pour vous permettre de maintenir votre positionnement premium sur ce marché exigeant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies & Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'utilise les technologies les plus avancées et performantes pour développer des solutions web d'exception pour les entreprises de Monaco.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Front-End & Design
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Langages & Frameworks</p>
                    <p className="text-gray-600">
                      HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, Vue.js, Tailwind CSS, Bootstrap
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Design & UX/UI</p>
                    <p className="text-gray-600">
                      Design Premium, Responsive Design, Mobile-First, Figma, Adobe XD, Accessibilité Web, Animations & Transitions
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Performance & Optimisation</p>
                    <p className="text-gray-600">
                      Optimisation des performances, Core Web Vitals, Lazy Loading, Compression d'images, Caching avancé
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Back-End & Infrastructure
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Langages & Frameworks</p>
                    <p className="text-gray-600">
                      Node.js, Express, PHP, Laravel, Python, Django, API RESTful, GraphQL
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Bases de Données & Sécurité</p>
                    <p className="text-gray-600">
                      MySQL, PostgreSQL, MongoDB, Firebase, Redis, Cryptage avancé, Protection des données
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Déploiement & DevOps</p>
                    <p className="text-gray-600">
                      AWS, Vercel, Netlify, Docker, CI/CD, Gestion de serveurs sécurisés, Conformité RGPD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web à Monaco ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web d'exception qui répond parfaitement aux exigences élevées de votre entreprise dans cette principauté prestigieuse de la Côte d'Azur.
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
