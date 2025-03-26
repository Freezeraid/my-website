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
  title: 'Développeur Web à Six-Fours-les-Plages | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance pour Six-Fours-les-Plages spécialisé en création de sites web, e-commerce et applications. Solutions web personnalisées pour entreprises et professionnels du Var.',
  keywords: ['développeur web Six-Fours-les-Plages', 'création site web Six-Fours-les-Plages', 'freelance web Six-Fours-les-Plages', 'développeur Six-Fours-les-Plages', 'site internet Six-Fours-les-Plages', 'création site e-commerce Six-Fours-les-Plages', 'développeur application web Six-Fours-les-Plages', 'agence web Six-Fours-les-Plages', 'refonte site web Six-Fours-les-Plages'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-six-fours-les-plages',
  },
  openGraph: {
    title: 'Développeur Web à Six-Fours-les-Plages | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance pour Six-Fours-les-Plages spécialisé en création de sites web, e-commerce et applications. Solutions web personnalisées pour entreprises et professionnels du Var.',
    url: 'https://killiandoubre.com/developpeur-web-six-fours-les-plages',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Six-Fours-les-Plages',
  description: 'Services de développement web sur-mesure pour Six-Fours-les-Plages : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-six-fours-les-plages',
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
      question: 'Quels types de sites web développez-vous pour Six-Fours-les-Plages ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Six-Fours-les-Plages : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché local.'
    },
    {
      question: 'Quel est le coût pour créer un site web à Six-Fours-les-Plages ?',
      answer: 'Les prix varient selon la complexité et les fonctionnalités souhaitées. Pour les entreprises de Six-Fours-les-Plages, les sites vitrines commencent à partir de 1500€, les boutiques e-commerce à partir de 3000€, et les applications web personnalisées à partir de 5000€. Je vous fournis un devis détaillé après étude de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Six-Fours-les-Plages ?',
      answer: 'Effectivement, je propose des services d\'optimisation SEO spécifiquement adaptés au marché de Six-Fours-les-Plages, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Six-Fours-les-Plages et ses environs.'
    }
  ]
}

export default function DeveloppeurWebSixFourslesPlagesPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception de sites web sur-mesure pour les entreprises et professionnels de Six-Fours-les-Plages. Des vitrines web modernes, responsive et optimisées pour attirer et convertir votre audience locale.",
      features: [
        "Design unique adapté à l'identité de votre entreprise",
        "Compatibilité totale avec tous les appareils",
        "Optimisation pour le référencement local à Six-Fours-les-Plages",
        "Intégration de fonctionnalités adaptées à votre secteur"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de boutiques en ligne performantes pour les commerçants et entrepreneurs de Six-Fours-les-Plages. Des plateformes e-commerce sécurisées qui stimulent vos ventes et élargissent votre clientèle.",
      features: [
        "Expérience d'achat fluide et engageante",
        "Gestion intuitive des produits et inventaires",
        "Solutions de paiement sécurisées et options de livraison multiples",
        "Stratégies d'optimisation des ventes en ligne"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Six-Fours-les-Plages et dans le Var.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et performantes",
        "Systèmes sécurisés et évolutifs",
        "Compatibilité avec vos outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Stratégies de référencement naturel pour améliorer votre visibilité sur Google à Six-Fours-les-Plages et dans le Var. Attirez plus de clients locaux grâce à une présence en ligne optimisée.",
      features: [
        "Stratégie SEO locale ciblée sur Six-Fours-les-Plages",
        "Optimisation de votre profil Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Connaissance du Marché Local",
      description: "Bien que basé à Nice, j'ai développé une compréhension approfondie du marché web à Six-Fours-les-Plages et dans le Var. Cette expertise me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux et aux particularités économiques de la région."
    },
    {
      title: "Accompagnement Personnalisé & Disponibilité",
      description: "Je vous propose un suivi personnalisé tout au long de votre projet web. Malgré la distance géographique, je reste pleinement disponible et réactif pour garantir que votre solution réponde exactement à vos attentes et évolue selon vos besoins."
    },
    {
      title: "Solutions Adaptées à Chaque Entreprise",
      description: "Chaque entreprise à Six-Fours-les-Plages possède ses propres spécificités. C'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs particuliers. Pas de solutions standardisées, mais des créations uniques qui vous distinguent de vos concurrents locaux."
    },
    {
      title: "Support Technique & Évolution Continue",
      description: "Je vous offre un support technique efficace et une maintenance régulière de votre site ou application. Grâce aux technologies de communication actuelles, je peux intervenir rapidement pour résoudre tout problème technique ou vous former à l'utilisation de votre solution web."
    }
  ]

  const businessSectors = [
    {
      icon: "🏖️",
      title: "Tourisme & Activités Nautiques",
      description: "Sites web et applications pour les entreprises du secteur touristique et nautique à Six-Fours-les-Plages. Solutions optimisées pour la présentation de vos services, la réservation en ligne et l'attraction de visiteurs dans cette destination balnéaire prisée du Var."
    },
    {
      icon: "🏢",
      title: "Commerces & Services Locaux",
      description: "Présence web efficace pour les commerces, artisans et prestataires de services à Six-Fours-les-Plages. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour développer votre clientèle dans cette commune dynamique."
    },
    {
      icon: "🍽️",
      title: "Restauration & Hôtellerie",
      description: "Sites web attractifs pour restaurants, hôtels et établissements d'hébergement à Six-Fours-les-Plages. Plateformes intuitives incluant réservations en ligne, présentation de menus et mise en valeur de votre établissement pour attirer plus de clients."
    },
    {
      icon: "🏠",
      title: "Immobilier & Location Saisonnière",
      description: "Plateformes immobilières et sites web pour agences, propriétaires et gestionnaires de locations saisonnières à Six-Fours-les-Plages. Solutions permettant de mettre en valeur vos biens avec des fonctionnalités avancées de recherche, réservation et visualisation."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Découverte & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase essentielle me permet d'identifier les solutions les plus adaptées à votre projet et au marché de Six-Fours-les-Plages."
    },
    {
      number: "02",
      title: "Conception & Prototypage",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Programmation",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de Six-Fours-les-Plages."
    },
    {
      number: "05",
      title: "Mise en ligne & Suivi",
      description: "Après le lancement, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const digitalStats = [
    {
      figure: "86%",
      description: "des consommateurs à Six-Fours-les-Plages consultent internet avant d'effectuer un achat local"
    },
    {
      figure: "74%",
      description: "des recherches locales sur mobile à Six-Fours-les-Plages conduisent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "69%",
      description: "des entreprises de Six-Fours-les-Plages considèrent leur site web comme un élément crucial de leur stratégie commerciale"
    },
    {
      figure: "91%",
      description: "des utilisateurs à Six-Fours-les-Plages se forment une première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Six-Fours-les-Plages', href: '/developpeur-web-six-fours-les-plages', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Six-Fours-les-Plages</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et professionnels de <strong>Six-Fours-les-Plages</strong>. Je conçois des sites web et applications sur-mesure qui répondent parfaitement aux besoins spécifiques du marché local varois.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Six-Fours-les-Plages"
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
                          <p className="text-sm text-gray-600">Six-Fours</p>
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
                Services de Développement Web pour Six-Fours-les-Plages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Six-Fours-les-Plages.
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
                Solutions Adaptées aux Entreprises de Six-Fours-les-Plages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Six-Fours-les-Plages et dans le Var.
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
                L'Importance du Web à Six-Fours-les-Plages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Six-Fours-les-Plages.
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

        {/* Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Six-Fours-les-Plages : Expertise Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web freelance, je comprends les particularités du marché de Six-Fours-les-Plages et les besoins des entreprises locales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché de Six-Fours-les-Plages vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage dans la région.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils numériques actuels, je peux collaborer efficacement avec vous malgré la distance géographique. Des échanges réguliers et un suivi rigoureux permettent de garantir que votre projet évolue selon vos attentes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Six-Fours-les-Plages
                </h3>
                <p className="text-gray-600">
                  Le marché web à Six-Fours-les-Plages présente d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'atteindre de nouveaux clients et d'étendre votre activité dans le Var et au-delà.
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
