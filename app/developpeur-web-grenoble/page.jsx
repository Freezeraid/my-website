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
  title: 'Développeur Web à Grenoble | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Grenoble spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement expert pour votre projet web grenoblois.',
  keywords: ['développeur web Grenoble', 'création site web Grenoble', 'freelance web Grenoble', 'développeur Grenoble', 'site internet Grenoble', 'création site e-commerce Grenoble', 'développeur application web Grenoble', 'agence web Grenoble', 'refonte site web Grenoble'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-grenoble',
  },
  openGraph: {
    title: 'Développeur Web à Grenoble | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Grenoble spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement expert pour votre projet web grenoblois.',
    url: 'https://killiandoubre.com/developpeur-web-grenoble',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Grenoble',
  description: 'Services de développement web sur-mesure pour Grenoble : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels grenoblois.',
  slug: 'developpeur-web-grenoble',
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
      question: 'Quels types de sites web développez-vous pour les entreprises grenobloises ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Grenoble : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché grenoblois et de son écosystème technologique.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Grenoble ?',
      answer: 'Le coût d\'un site web pour une entreprise grenobloise varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Grenoble ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local grenoblois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Grenoble et sa région.'
    }
  ]
}

export default function DeveloppeurWebGrenoblePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "création de sites web sur-mesure pour les entreprises et professionnels grenoblois. Des sites vitrines innovants, responsive et optimisés pour transformer vos visiteurs en clients fidèles.",
      features: [
        "Design moderne adapté à l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Grenoble",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants et entrepreneurs grenoblois. Des boutiques en ligne sécurisées qui maximisent vos conversions et fidélisent votre clientèle.",
      features: [
        "Interface utilisateur intuitive et attractive",
        "Gestion simplifiée des produits et des inventaires",
        "Solutions de paiement sécurisées et options de livraison multiples",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Grenoble et dans toute l'Isère.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et performantes",
        "Architecture sécurisée et évolutive",
        "Intégration harmonieuse avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour renforcer votre présence sur Google à Grenoble et dans sa région. Attirez davantage de clients locaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale centrée sur Grenoble et ses environs",
        "Optimisation complète de votre profil Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Compréhension du Marché Grenoblois",
      description: "Bien que basé à Nice, j'effectue une analyse approfondie du marché web grenoblois pour créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je m'immerge dans les spécificités économiques de Grenoble, notamment son écosystème technologique et innovant."
    },
    {
      title: "Accompagnement Personnalisé & Communication Efficace",
      description: "En tant que développeur web freelance, je vous offre un accompagnement personnalisé avec une communication directe et régulière. Cette relation privilégiée garantit une parfaite compréhension de vos besoins et une solution web qui correspond exactement à votre vision d'entreprise."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Grenobloises",
      description: "Chaque projet est unique, c'est pourquoi je conçois des solutions entièrement personnalisées qui répondent précisément aux besoins spécifiques de votre entreprise grenobloise. Pas de templates génériques, mais des créations originales qui vous distinguent de vos concurrents locaux."
    },
    {
      title: "Support Technique & Maintenance Évolutive",
      description: "Je vous propose un support technique réactif et une maintenance régulière de votre site ou application. Grâce aux outils de collaboration à distance, j'assure un suivi efficace pour résoudre rapidement tout problème technique et former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const grenobleBusinessSectors = [
    {
      icon: "🔬",
      title: "Tech & Innovation",
      description: "Sites web et applications pour startups, entreprises technologiques et laboratoires de recherche grenoblois. Solutions optimisées pour présenter vos innovations, attirer des talents et faciliter la communication avec vos partenaires et investisseurs."
    },
    {
      icon: "🏢",
      title: "Commerce & Services Locaux",
      description: "Présence web efficace pour commerçants, artisans et prestataires de services grenoblois. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour développer votre clientèle et valoriser votre expertise régionale."
    },
    {
      icon: "🏔️",
      title: "Tourisme & Loisirs",
      description: "Plateformes web pour acteurs du tourisme, hébergements et prestataires d'activités de montagne. Solutions permettant de mettre en valeur vos offres, faciliter les réservations et attirer des visiteurs toute l'année dans la région grenobloise."
    },
    {
      icon: "🎓",
      title: "Éducation & Formation",
      description: "Applications web et plateformes pour établissements d'enseignement, centres de formation et écoles d'ingénieurs. Solutions technologiques avancées pour optimiser vos programmes, faciliter l'apprentissage et valoriser votre expertise pédagogique."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte économique grenoblois."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision d'entreprise."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je programme votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est minutieusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs grenoblois."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste disponible pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins."
    }
  ]

  const grenobleDigitalStats = [
    {
      figure: "86%",
      description: "des consommateurs à Grenoble recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "74%",
      description: "des recherches locales sur mobile à Grenoble aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "70%",
      description: "des entreprises grenobloises considèrent que leur site web est crucial pour leur développement commercial"
    },
    {
      figure: "94%",
      description: "des utilisateurs à Grenoble forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Grenoble', href: '/developpeur-web-grenoble', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Grenoble</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à Nice proposant mes services pour <strong>Grenoble</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels grenoblois. Expertise technique, solutions innovantes et accompagnement personnalisé pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Grenoble"
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
                          <p className="text-sm text-gray-600">Grenoble & Région</p>
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
                Services de Développement Web pour Grenoble
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels grenoblois.
                Chaque solution est élaborée sur-mesure pour répondre à vos besoins spécifiques et vous démarquer sur le marché local.
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

        {/* Secteurs d'activité à Grenoble Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Grenobloises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Grenoble et dans l'Isère.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {grenobleBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Grenoble
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises grenobloises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {grenobleDigitalStats.map((stat, index) => (
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
                Collaborer avec moi offre de nombreux avantages pour votre projet web à Grenoble.
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
                Une approche structurée et collaborative pour transformer votre vision en une solution web performante.
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

        {/* Grenoble Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Grenoble : Expertise Dédiée
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services aux entreprises grenobloises, je m'engage à comprendre les spécificités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché grenoblois vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Grenoble.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de collaboration modernes, je vous offre un suivi de projet aussi efficace qu'une présence physique. Visioconférences régulières, partage d'écran et communication transparente garantissent une parfaite compréhension de vos besoins.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Grenoble
                </h3>
                <p className="text-gray-600">
                  Le marché web à Grenoble, avec son écosystème technologique dynamique, offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'atteindre de nouveaux clients et d'étendre votre activité dans toute la région.
                </p>
              </div>
            </div>
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
