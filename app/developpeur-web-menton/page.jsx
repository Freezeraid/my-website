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
  title: 'Développeur Web à Menton | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance à Menton spécialisé en création de sites web, e-commerce et applications. Services sur-mesure, expertise locale et accompagnement personnalisé pour votre projet web dans les Alpes-Maritimes.',
  keywords: ['développeur web Menton', 'création site web Menton', 'freelance web Menton', 'développeur Menton', 'site internet Menton', 'création site e-commerce Menton', 'développeur application web Menton', 'agence web Menton', 'refonte site web Alpes-Maritimes'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-menton',
  },
  openGraph: {
    title: 'Développeur Web à Menton | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance à Menton spécialisé en création de sites web, e-commerce et applications. Services sur-mesure, expertise locale et accompagnement personnalisé pour votre projet web dans les Alpes-Maritimes.',
    url: 'https://killiandoubre.com/developpeur-web-menton',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Menton',
  description: 'Services de développement web sur-mesure à Menton : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels des Alpes-Maritimes.',
  slug: 'developpeur-web-menton',
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
      question: 'Quels types de sites web développez-vous à Menton ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels mentonnais : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Menton ?',
      answer: 'Le coût d\'un site web à Menton varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Menton ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché mentonnais, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Menton et sa région, y compris le marché transfrontalier avec l\'Italie.'
    }
  ]
}

export default function DeveloppeurWebMentonPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et professionnels mentonnais. Des sites vitrines authentiques, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Design adapté à l'identité méditerranéenne de Menton",
        "Parfaitement responsive sur tous les appareils",
        "Optimisé pour le référencement local à Menton",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de sites e-commerce performants pour les commerçants et entrepreneurs mentonnais. Des boutiques en ligne conviviales et intuitives qui valorisent vos produits et services locaux.",
      features: [
        "Interface utilisateur intuitive et attrayante",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et multiples options de livraison",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Menton et dans la région transfrontalière.",
      features: [
        "Développement full-stack avec technologies modernes",
        "Interfaces utilisateurs fluides et performantes",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Menton et dans les Alpes-Maritimes. Attirez plus de clients locaux et transfrontaliers grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale ciblée sur Menton",
        "Optimisation Google My Business",
        "Création de contenu multilingue (français/italien)",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Local Mentonnais",
      description: "Ma connaissance approfondie du marché web à Menton me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités du tissu économique mentonnais, son caractère transfrontalier et les opportunités web qu'il offre."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance, je vous offre un accompagnement de proximité pour comprendre précisément vos besoins. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec votre vision et votre marché local."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises",
      description: "Chaque projet est unique, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent aux besoins spécifiques de votre entreprise. Pas de templates génériques, mais des créations originales qui vous démarquent de la concurrence locale et valorisent l'authenticité mentonnaise."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon intervention rapide vous assure une présence web toujours fonctionnelle et à jour, essentielle pour maintenir la confiance de vos clients locaux et internationaux."
    }
  ]

  const mentonBusinessSectors = [
    {
      icon: "🍋",
      title: "Artisanat & Produits Locaux",
      description: "Sites web et e-commerce pour artisans, producteurs et commerçants de produits locaux à Menton. Solutions optimisées pour valoriser votre savoir-faire, vos produits authentiques et attirer une clientèle sensible aux spécialités mentonnaises."
    },
    {
      icon: "🏨",
      title: "Tourisme & Hôtellerie",
      description: "Présence web attractive pour hôtels, restaurants, locations saisonnières et services touristiques à Menton. Sites et applications adaptés pour mettre en valeur votre établissement dans cette destination prisée de la Côte d'Azur, entre mer et montagne."
    },
    {
      icon: "🏢",
      title: "Commerces & Services de Proximité",
      description: "Sites vitrines et solutions web pour commerces et prestataires de services mentonnais. Plateformes web permettant de renforcer votre présence locale et d'attirer une clientèle fidèle dans cette ville à taille humaine où la proximité est essentielle."
    },
    {
      icon: "🌍",
      title: "Services Transfrontaliers",
      description: "Applications web et sites multilingues pour entreprises travaillant avec l'Italie toute proche. Solutions web adaptées au contexte transfrontalier unique de Menton, permettant de toucher efficacement les marchés français et italien."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'analyse me permet d'identifier les solutions les plus adaptées à votre projet et au marché local mentonnais."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "Je développe une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et à l'identité authentique de Menton."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs mentonnais et des visiteurs de la région."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const mentonDigitalStats = [
    {
      figure: "84%",
      description: "des consommateurs à Menton recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "71%",
      description: "des recherches locales sur mobile à Menton aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "65%",
      description: "des entreprises mentonnaises considèrent que leur site web est essentiel pour leur développement commercial"
    },
    {
      figure: "91%",
      description: "des utilisateurs à Menton forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance à Menton', href: '/developpeur-web-menton', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Menton</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je crée des sites web et applications personnalisées pour répondre aux besoins des entreprises et professionnels des Alpes-Maritimes. Mon approche allie connaissance du contexte transfrontalier, réalisations adaptées et suivi rapproché tout au long de votre aventure numérique.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Menton"
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
                          <p className="text-sm text-gray-600">Menton & Région</p>
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
                Services de Développement Web à Menton
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je vous offre un ensemble complet de services de création web destinés aux acteurs économiques mentonnais.
                Chaque projet est façonné avec attention pour s'aligner parfaitement avec vos objectifs particuliers et renforcer votre visibilité sur le marché local et transfrontalier.
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

        {/* Secteurs d'activité à Menton Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Mentonnaises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je conçois des outils numériques adaptés aux besoins spécifiques des différents domaines d'activité présents à Menton et dans sa zone frontalière avec l'Italie.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mentonBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Menton
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Voici quelques indicateurs clés qui mettent en lumière la valeur d'une présence en ligne professionnelle pour les entreprises établies à Menton.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mentonDigitalStats.map((stat, index) => (
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
                Faire appel à mes services présente de multiples avantages pour la réalisation de votre projet numérique à Menton.
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
                Une approche organisée et coopérative qui donne vie à vos idées sous forme de solutions web efficaces et adaptées au contexte mentonnais.
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

        {/* Menton Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Menton : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Grâce à ma présence à Menton, j'ai acquis une compréhension approfondie des particularités du marché local et des besoins spécifiques des entreprises de cette ville frontalière unique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Digitale Transfrontalière
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché mentonnais vous permet d'attirer des clients locaux et transfrontaliers. 
                  Je développe des sites web bilingues qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Menton, ville frontière entre la France et l'Italie.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🍋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  L'Authenticité Mentonnaise
                </h3>
                <p className="text-gray-600">
                  Menton possède une identité unique, entre traditions méditerranéennes et influences italiennes. Je crée des solutions web qui reflètent cette authenticité et vous permettent de valoriser votre ancrage local, avec une attention particulière portée à l'esthétique et à l'expérience utilisateur.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Digitale à Menton
                </h3>
                <p className="text-gray-600">
                  Le marché web à Menton offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans toute la région, y compris vers le marché italien voisin.
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
                J'emploie les technologies et frameworks les plus actuels pour élaborer des solutions web fiables et évolutives qui répondent parfaitement à vos ambitions.
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
                      Responsive Design, Mobile-First, Figma, Adobe XD, Accessibilité Web, Animations & Transitions
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Performance & Optimisation</p>
                    <p className="text-gray-600">
                      Optimisation des performances, Core Web Vitals, Lazy Loading, Compression d'images, Caching
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
                    <p className="font-medium text-gray-800 mb-2">Bases de Données</p>
                    <p className="text-gray-600">
                      MySQL, PostgreSQL, MongoDB, Firebase, Redis, Gestion de données structurées
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Déploiement & DevOps</p>
                    <p className="text-gray-600">
                      AWS, Vercel, Netlify, Docker, CI/CD, Gestion de serveurs, Sécurité web
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
              Prêt à Développer Votre Projet Web à Menton ?
            </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Entrez en contact avec moi dès maintenant pour échanger sur votre vision numérique et recevoir une proposition adaptée. 
              Collaborons pour développer une plateforme web authentique qui valorise l'identité unique de votre entreprise mentonnaise.
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
