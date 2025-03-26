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
  title: 'Développeur Web à Angers | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Angers spécialisé en création de sites web, e-commerce et applications. Solutions numériques personnalisées et accompagnement expert pour votre projet web angevin.',
  keywords: ['développeur web Angers', 'création site web Angers', 'freelance web Angers', 'développeur Angers', 'site internet Angers', 'création site e-commerce Angers', 'développeur application web Angers', 'agence web Angers', 'refonte site web Angers'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-angers',
  },
  openGraph: {
    title: 'Développeur Web à Angers | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Angers spécialisé en création de sites web, e-commerce et applications. Solutions numériques personnalisées et accompagnement expert pour votre projet web angevin.',
    url: 'https://killiandoubre.com/developpeur-web-angers',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Angers',
  description: 'Services de développement web sur-mesure pour Angers : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels angevins.',
  slug: 'developpeur-web-angers',
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
      question: 'Quels types de sites web développez-vous pour les entreprises angevines ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels d\'Angers : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché angevin.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Angers ?',
      answer: 'Le coût d\'un site web pour une entreprise angevine varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Angers ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local angevin, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Angers et sa région.'
    }
  ]
}

export default function DeveloppeurWebAngersPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Élaboration de sites web sur-mesure pour les entreprises et professionnels angevins. Des sites vitrines modernes, responsive et optimisés pour convertir efficacement vos visiteurs en clients.",
      features: [
        "Design actuel reflétant l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Angers",
        "Intégration de fonctionnalités adaptées à vos besoins"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce efficaces pour les commerçants et entrepreneurs angevins. Des boutiques en ligne sécurisées qui optimisent vos ventes et améliorent l'expérience client.",
      features: [
        "Interface utilisateur conviviale et engageante",
        "Gestion intuitive des produits et des stocks",
        "Systèmes de paiement sécurisés et options de livraison flexibles",
        "Techniques d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour numériser vos services et optimiser vos processus métier à Angers et dans le Maine-et-Loire.",
      features: [
        "Développement full-stack avec technologies modernes",
        "Interfaces utilisateurs intuitives et réactives",
        "Systèmes robustes et évolutifs",
        "Intégration fluide avec vos outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Angers et dans sa région. Attirez plus de clients locaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale focalisée sur Angers et ses environs",
        "Optimisation complète de votre profil Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Analyse du Marché Angevin",
      description: "Bien que basé à Nice, je réalise une étude approfondie du marché web angevin pour créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je m'immerge dans les particularités économiques d'Angers pour identifier les meilleures stratégies web."
    },
    {
      title: "Suivi Personnalisé & Communication Directe",
      description: "En tant que développeur web freelance, je vous offre un suivi personnalisé avec une communication directe et transparente. Cette relation de confiance assure une compréhension précise de vos besoins et une solution web qui correspond exactement à vos objectifs d'entreprise."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Angevines",
      description: "Chaque projet est unique, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément aux besoins spécifiques de votre entreprise angevine. Pas de solutions standardisées, mais des créations originales qui vous différencient de vos concurrents locaux."
    },
    {
      title: "Support Technique & Maintenance Proactive",
      description: "Je vous propose un support technique réactif et une maintenance régulière de votre site ou application. Grâce aux outils de collaboration à distance, j'assure un suivi efficace pour résoudre rapidement tout problème technique et former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const angersBusinessSectors = [
    {
      icon: "🏫",
      title: "Éducation & Formation",
      description: "Sites web et applications pour établissements d'enseignement, centres de formation et écoles angevines. Solutions optimisées pour la présentation de vos programmes, la gestion des inscriptions et la création d'espaces d'apprentissage numériques innovants."
    },
    {
      icon: "🏢",
      title: "Commerce & Services Locaux",
      description: "Présence web efficace pour commerçants, artisans et prestataires de services angevins. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour développer votre clientèle et valoriser votre expertise régionale."
    },
    {
      icon: "🌱",
      title: "Agriculture & Agroalimentaire",
      description: "Plateformes web pour producteurs, transformateurs et distributeurs du secteur agroalimentaire angevin. Solutions permettant de mettre en valeur vos produits, développer la vente directe et renforcer votre présence sur les marchés locaux et nationaux."
    },
    {
      icon: "🚀",
      title: "Startups & Innovation",
      description: "Applications web et plateformes pour startups et entreprises innovantes d'Angers. Solutions technologiques avancées pour concrétiser vos concepts, optimiser vos processus et accélérer votre croissance sur le marché."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse détaillée de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte économique angevin."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "Je développe une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision d'entreprise."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs angevins."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins."
    }
  ]

  const angersDigitalStats = [
    {
      figure: "83%",
      description: "des consommateurs à Angers recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "69%",
      description: "des recherches locales sur mobile à Angers aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "62%",
      description: "des entreprises angevines considèrent que leur site web est essentiel pour leur développement commercial"
    },
    {
      figure: "91%",
      description: "des utilisateurs à Angers forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Angers', href: '/developpeur-web-angers', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Angers</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à Nice proposant mes services pour <strong>Angers</strong>, je crée des sites web et applications sur-mesure pour les entreprises et professionnels angevins. Expertise technique, solutions personnalisées et accompagnement dédié pour votre projet numérique.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Angers"
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
                          <p className="text-sm text-gray-600">Angers & Région</p>
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
                Services de Développement Web pour Angers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels angevins.
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

        {/* Secteurs d'activité à Angers Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Angevines
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Angers et dans le Maine-et-Loire.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {angersBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Angers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises angevines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {angersDigitalStats.map((stat, index) => (
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

        {/* Angers Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Angers : Expertise Adaptée
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services aux entreprises angevines, je m'engage à comprendre les spécificités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché angevin vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Angers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de collaboration numériques, je vous offre un suivi de projet aussi efficace qu'une présence physique. Réunions virtuelles régulières, partage d'écran et communication fluide garantissent une parfaite compréhension de vos besoins.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Angers
                </h3>
                <p className="text-gray-600">
                  Le marché web à Angers offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans tout le Maine-et-Loire.
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
