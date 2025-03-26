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
  title: 'Développeur Web à Lille | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Lille spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre projet web.',
  keywords: ['développeur web Lille', 'création site web Lille', 'freelance web Lille', 'développeur Lille', 'site internet Lille', 'création site e-commerce Lille', 'développeur application web Lille', 'agence web Lille', 'refonte site web Lille'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-lille',
  },
  openGraph: {
    title: 'Développeur Web à Lille | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Lille spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre projet web.',
    url: 'https://killiandoubre.com/developpeur-web-lille',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Lille',
  description: 'Services de développement web sur-mesure pour Lille : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-lille',
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
      question: 'Quels types de sites web développez-vous pour les entreprises lilloises ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Lille : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS.'
    },
    {
      question: 'Combien coûte la création d\'un site web pour une entreprise à Lille ?',
      answer: 'Le coût d\'un site web pour Lille varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Lille ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché lillois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Lille et sa métropole.'
    }
  ]
}

export default function DeveloppeurWebLillePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception de sites web sur-mesure pour les entreprises lilloises. Des sites vitrines innovants, responsive et optimisés pour renforcer votre présence en ligne et attirer de nouveaux clients.",
      features: [
        "Design moderne reflétant l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Lille",
        "Intégration de fonctionnalités spécifiques à votre secteur"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "création de sites e-commerce performants pour les commerçants et entrepreneurs lillois. Des boutiques en ligne sécurisées qui dynamisent vos ventes et améliorent l'expérience client.",
      features: [
        "Interface utilisateur intuitive et parcours d'achat optimisé",
        "Gestion efficace des produits, stocks et commandes",
        "Solutions de paiement sécurisées et options de livraison adaptées",
        "Stratégies marketing pour augmenter vos conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Création d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Lille et dans toute la région Hauts-de-France.",
      features: [
        "Développement full-stack avec technologies innovantes",
        "Interfaces utilisateurs intuitives et performantes",
        "Architecture évolutive, sécurisée et robuste",
        "Intégration avec vos systèmes d'information existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Lille et dans le Nord. Attirez davantage de clients locaux grâce à une stratégie SEO efficace.",
      features: [
        "Stratégie SEO locale adaptée au marché lillois",
        "Optimisation Google My Business et référencement local",
        "Création de contenu pertinent pour votre audience locale",
        "Analyse des performances et optimisation continue"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Web Lillois",
      description: "Ma connaissance approfondie des tendances web et du marché web lillois me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités du tissu économique de Lille et les opportunités numériques qu'il présente."
    },
    {
      title: "Collaboration à Distance Efficace",
      description: "En tant que développeur web freelance basé à Nice travaillant pour Lille, je vous propose un accompagnement personnalisé grâce à une méthodologie de travail à distance éprouvée. Cette approche garantit une communication fluide et une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Numériques Innovantes",
      description: "Chaque entreprise lilloise a ses propres défis, c'est pourquoi je développe des solutions entièrement sur-mesure qui répondent précisément à vos besoins spécifiques. Pas de solutions standardisées, mais des créations originales qui vous distinguent de vos concurrents locaux."
    },
    {
      title: "Support Technique & Évolution Durable",
      description: "Je vous offre un support technique réactif et un accompagnement continu pour l'évolution de votre site ou application. Mon approche de travail à distance me permet d'intervenir rapidement pour résoudre tout problème technique ou former votre équipe à l'utilisation de votre solution web."
    }
  ]

  const lilleBusinessSectors = [
    {
      icon: "🏭",
      title: "Industrie & Innovation",
      description: "Sites web et applications pour les entreprises industrielles, startups et sociétés innovantes de Lille. Solutions web adaptées aux besoins spécifiques du secteur industriel et technologique en pleine transformation."
    },
    {
      icon: "🎓",
      title: "Éducation & Recherche",
      description: "Plateformes web pour établissements d'enseignement, laboratoires et centres de recherche à Lille. Solutions permettant de valoriser vos programmes éducatifs, travaux de recherche et d'améliorer l'expérience numérique de vos étudiants."
    },
    {
      icon: "🏢",
      title: "Commerce & Services",
      description: "Sites web pour commerces, artisans et prestataires de services lillois. Solutions web adaptées aux besoins des entreprises locales pour développer votre visibilité et votre clientèle dans la métropole lilloise."
    },
    {
      icon: "🌍",
      title: "International & Transfrontalier",
      description: "Applications web et sites pour entreprises à vocation internationale et acteurs transfrontaliers à Lille. Solutions web multilingues adaptées aux enjeux européens, facilitant votre développement au-delà des frontières."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Consultation",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au marché lillois."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement à distance pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs lillois."
    },
    {
      number: "05",
      title: "Déploiement & Suivi",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const lilleDigitalStats = [
    {
      figure: "82%",
      description: "des consommateurs à Lille recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "76%",
      description: "des recherches locales sur mobile à Lille aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "81%",
      description: "des entreprises lilloises considèrent que leur site web est crucial pour leur développement commercial"
    },
    {
      figure: "89%",
      description: "des utilisateurs à Lille forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Lille', href: '/developpeur-web-lille', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Lille</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> travaillant pour <strong>Lille</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels lillois. Expertise technique, solutions innovantes et accompagnement à distance pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Lille"
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
                          <p className="text-sm text-gray-600">Lille & Région</p>
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
                Services de Développement Web pour Lille
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels lillois.
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

        {/* Secteurs d'activité à Lille Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Lilloises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Lille et dans toute la région Hauts-de-France.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lilleBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Lille
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises lilloises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {lilleDigitalStats.map((stat, index) => (
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

        {/* Lille Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Lille : Expertise Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web travaillant avec les entreprises lilloises, je comprends les spécificités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché lillois vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Lille.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce à une méthodologie de travail à distance éprouvée, je vous offre une collaboration fluide et efficace. Les outils numériques modernes nous permettent de travailler ensemble comme si j'étais à Lille, avec des échanges réguliers et une réactivité optimale.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Lille
                </h3>
                <p className="text-gray-600">
                  Le marché web à Lille offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans toute la région Hauts-de-France et au-delà des frontières.
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
