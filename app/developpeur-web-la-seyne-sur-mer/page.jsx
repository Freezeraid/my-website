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
  title: 'Développeur Web à La Seyne-sur-Mer | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance pour La Seyne-sur-Mer spécialisé en création de sites web, e-commerce et applications. Solutions web personnalisées pour entreprises et professionnels du Var.',
  keywords: ['développeur web La Seyne-sur-Mer', 'création site web La Seyne-sur-Mer', 'freelance web La Seyne-sur-Mer', 'développeur La Seyne-sur-Mer', 'site internet La Seyne-sur-Mer', 'création site e-commerce La Seyne-sur-Mer', 'développeur application web La Seyne-sur-Mer', 'agence web La Seyne-sur-Mer', 'refonte site web La Seyne-sur-Mer'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-la-seyne-sur-mer',
  },
  openGraph: {
    title: 'Développeur Web à La Seyne-sur-Mer | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance pour La Seyne-sur-Mer spécialisé en création de sites web, e-commerce et applications. Solutions web personnalisées pour entreprises et professionnels du Var.',
    url: 'https://killiandoubre.com/developpeur-web-la-seyne-sur-mer',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour La Seyne-sur-Mer',
  description: 'Services de développement web sur-mesure pour La Seyne-sur-Mer : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-la-seyne-sur-mer',
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
      question: 'Quels types de sites web développez-vous pour La Seyne-sur-Mer ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de La Seyne-sur-Mer : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché local.'
    },
    {
      question: 'Quel est le tarif pour la création d\'un site web à La Seyne-sur-Mer ?',
      answer: 'Les tarifs varient selon la complexité et les fonctionnalités requises. Les sites vitrines commencent à partir de 1500€, les boutiques e-commerce à partir de 3000€, et les applications web personnalisées à partir de 5000€. Je vous propose un devis détaillé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour La Seyne-sur-Mer ?',
      answer: 'Absolument, je propose des services d\'optimisation SEO spécifiquement adaptés au marché de La Seyne-sur-Mer, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant La Seyne-sur-Mer et ses environs.'
    }
  ]
}

export default function DeveloppeurWebLaSeynesurMerPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et professionnels de La Seyne-sur-Mer. Des vitrines web modernes, responsive et optimisées pour convertir vos visiteurs en clients.",
      features: [
        "Design contemporain adapté à votre identité visuelle",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local à La Seyne-sur-Mer",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants et entrepreneurs de La Seyne-sur-Mer. Des boutiques en ligne sécurisées qui maximisent vos ventes et fidélisent votre clientèle.",
      features: [
        "Expérience d'achat fluide et engageante",
        "Gestion simplifiée des produits et inventaires",
        "Solutions de paiement sécurisées et multiples options de livraison",
        "Stratégies d'optimisation des conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à La Seyne-sur-Mer et dans le Var.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et réactives",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Stratégies de référencement naturel pour améliorer votre visibilité sur Google à La Seyne-sur-Mer et dans le Var. Attirez davantage de clients locaux grâce à une présence en ligne optimisée.",
      features: [
        "Stratégie SEO locale ciblée sur La Seyne-sur-Mer",
        "Optimisation de votre profil Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Compréhension du Marché Local",
      description: "Bien que basé à Nice, je possède une connaissance approfondie du marché web à La Seyne-sur-Mer et dans le Var. Cette expertise me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux et aux spécificités économiques de la région."
    },
    {
      title: "Accompagnement Personnalisé & Suivi",
      description: "Je vous offre un accompagnement personnalisé tout au long de votre projet web. Cette relation directe garantit une communication fluide et une parfaite adéquation entre votre vision et la solution développée, malgré la distance géographique."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises",
      description: "Chaque entreprise à La Seyne-sur-Mer a des besoins uniques. C'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs spécifiques. Pas de templates génériques, mais des créations originales qui vous distinguent de la concurrence locale."
    },
    {
      title: "Support Technique & Maintenance Continue",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Grâce aux outils de communication modernes, je peux intervenir rapidement pour résoudre tout problème technique ou vous former à l'utilisation de votre solution web."
    }
  ]

  const businessSectors = [
    {
      icon: "⚓",
      title: "Tourisme & Activités Maritimes",
      description: "Sites web et applications pour les entreprises liées au tourisme et aux activités maritimes à La Seyne-sur-Mer. Solutions optimisées pour la présentation de vos services, la réservation en ligne et l'attraction de visiteurs locaux et internationaux."
    },
    {
      icon: "🏢",
      title: "Commerces & Services Locaux",
      description: "Présence web efficace pour les commerces, artisans et prestataires de services à La Seyne-sur-Mer. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour développer votre clientèle de proximité."
    },
    {
      icon: "🏠",
      title: "Immobilier & Construction",
      description: "Plateformes immobilières et sites pour agences, promoteurs et professionnels du bâtiment à La Seyne-sur-Mer. Solutions permettant de mettre en valeur vos biens et projets avec des fonctionnalités avancées de recherche et de visualisation."
    },
    {
      icon: "🍽️",
      title: "Restauration & Hôtellerie",
      description: "Sites web attractifs pour restaurants, hôtels et établissements d'hébergement à La Seyne-sur-Mer. Plateformes intuitives incluant réservations en ligne, présentation de menus et mise en valeur de votre établissement pour attirer plus de clients."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Découverte",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase me permet d'identifier les solutions les plus adaptées à votre projet et au marché de La Seyne-sur-Mer."
    },
    {
      number: "02",
      title: "Planification & Conception",
      description: "Je développe une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de La Seyne-sur-Mer."
    },
    {
      number: "05",
      title: "Déploiement & Formation",
      description: "Après le lancement, je reste disponible pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const digitalStats = [
    {
      figure: "85%",
      description: "des consommateurs à La Seyne-sur-Mer consultent internet avant d'effectuer un achat local"
    },
    {
      figure: "76%",
      description: "des recherches locales sur mobile à La Seyne-sur-Mer conduisent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "64%",
      description: "des entreprises de La Seyne-sur-Mer considèrent leur site web comme essentiel à leur développement"
    },
    {
      figure: "93%",
      description: "des utilisateurs à La Seyne-sur-Mer se font une première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour La Seyne-sur-Mer', href: '/developpeur-web-la-seyne-sur-mer', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">La Seyne-sur-Mer</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et professionnels de <strong>La Seyne-sur-Mer</strong>. Je crée des sites web et applications sur-mesure qui répondent parfaitement aux besoins spécifiques du marché local varois.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour La Seyne-sur-Mer"
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
                          <p className="text-sm text-gray-600">La Seyne-sur-Mer</p>
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
                Services de Développement Web pour La Seyne-sur-Mer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de La Seyne-sur-Mer.
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

        {/* Secteurs d'activité Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises de La Seyne-sur-Mer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à La Seyne-sur-Mer et dans le Var.
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
                L'Importance du Web à La Seyne-sur-Mer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de La Seyne-sur-Mer.
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
                Travailler avec moi offre de nombreux avantages pour votre projet web à La Seyne-sur-Mer.
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
                Une approche méthodique et collaborative pour transformer votre vision en une solution web performante.
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
                Développement Web pour La Seyne-sur-Mer : Expertise Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web freelance, je comprends les spécificités du marché de La Seyne-sur-Mer et les besoins des entreprises locales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché de La Seyne-sur-Mer vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage dans la région.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de communication modernes, je peux collaborer efficacement avec vous malgré la distance géographique. Des réunions virtuelles régulières et un suivi constant permettent de garantir que votre projet avance conformément à vos attentes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à La Seyne-sur-Mer
                </h3>
                <p className="text-gray-600">
                  Le marché web à La Seyne-sur-Mer offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans le Var et au-delà.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité.
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
              Prêt à Développer Votre Projet Web à La Seyne-sur-Mer ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise.
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
