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
  title: 'Développeur Web Saint-Étienne | Expert Sites & Applications | Design & Industrie',
  description: 'Création de sites web et applications pour entreprises stéphanoises dans les secteurs design, industrie, innovation et créativité. Solutions digitales adaptées à la Loire avec expertise en transformation numérique et plateformes créatives.',
  keywords: ['développeur web Saint-Étienne', 'création site web Saint-Étienne', 'freelance web Saint-Étienne', 'site internet design Saint-Étienne', 'création site e-commerce Loire', 'développeur application industrie', 'site web créatif Saint-Étienne', 'développeur innovation Saint-Étienne', 'SEO local Saint-Étienne'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-saint-etienne',
  },
  openGraph: {
    title: 'Développeur Web Saint-Étienne | Expert Sites & Applications | Design & Industrie',
    description: 'Création de sites web et applications pour entreprises stéphanoises dans les secteurs design, industrie, innovation et créativité. Solutions digitales adaptées à la Loire avec expertise en transformation numérique et plateformes créatives.',
    url: 'https://killiandoubre.com/developpeur-web-saint-etienne',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Saint-Étienne',
  description: 'Services de développement web sur-mesure pour Saint-Étienne : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels.',
  slug: 'developpeur-web-saint-etienne',
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
      question: 'Quels types de sites web développez-vous pour les entreprises de Saint-Étienne ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels stéphanois : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS.'
    },
    {
      question: 'Combien coûte la création d\'un site web pour une entreprise à Saint-Étienne ?',
      answer: 'Le coût d\'un site web pour Saint-Étienne varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Saint-Étienne ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché stéphanois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Saint-Étienne et sa région.'
    }
  ]
}

export default function DeveloppeurWebSaintEtiennePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "création de sites web sur-mesure pour les entreprises et professionnels stéphanois. Des sites vitrines modernes, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Design contemporain adapté à votre identité de marque",
        "Compatibilité optimale sur tous les appareils",
        "Optimisé pour le référencement local à Saint-Étienne",
        "Fonctionnalités personnalisées selon vos objectifs"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants et entrepreneurs stéphanois. Des boutiques en ligne sécurisées et intuitives qui maximisent vos ventes.",
      features: [
        "Expérience d'achat fluide et engageante",
        "Gestion simplifiée des produits et inventaires",
        "Solutions de paiement sécurisées et options de livraison adaptées",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Conception d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Saint-Étienne et dans la Loire.",
      features: [
        "Développement full-stack avec technologies innovantes",
        "Interfaces utilisateurs intuitives et performantes",
        "Architecture évolutive et sécurisée",
        "Intégration avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour renforcer votre présence sur Google à Saint-Étienne et dans la région. Captez davantage de clients locaux grâce au SEO.",
      features: [
        "Stratégie SEO locale ciblée sur Saint-Étienne",
        "Optimisation Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Compréhension du Marché Web Stéphanois",
      description: "Bien que basé à Nice, j'ai développé une connaissance approfondie du marché numérique stéphanois, me permettant de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités du tissu économique de Saint-Étienne et les opportunités web qu'il présente."
    },
    {
      title: "Accompagnement Personnalisé & Collaboration à Distance",
      description: "En tant que développeur web freelance, je vous offre un accompagnement sur-mesure pour comprendre précisément vos besoins. Les outils de collaboration à distance nous permettent de maintenir une communication efficace tout au long du projet, garantissant une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Stéphanoises",
      description: "Chaque entreprise est unique, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément aux besoins spécifiques de votre activité à Saint-Étienne. Pas de templates génériques, mais des créations originales qui vous distinguent de la concurrence locale."
    },
    {
      title: "Support Technique & Maintenance Fiable",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Disponible à distance pour résoudre rapidement tout problème technique ou former votre équipe à l'utilisation de votre solution web, j'assure un suivi de qualité pour votre projet web."
    }
  ]

  const saintEtienneBusinessSectors = [
    {
      icon: "🏭",
      title: "Industrie & Innovation",
      description: "Sites web et applications pour entreprises industrielles, startups et acteurs de l'innovation. Solutions web adaptées pour valoriser votre savoir-faire, vos produits et services dans un secteur en pleine transformation."
    },
    {
      icon: "🎓",
      title: "Éducation & Recherche",
      description: "Plateformes web pour établissements d'enseignement, centres de recherche et projets issus de l'écosystème universitaire stéphanois. Solutions adaptées pour mettre en valeur vos formations, recherches et innovations."
    },
    {
      icon: "🏢",
      title: "Commerce & Services Locaux",
      description: "Présence web efficace pour commerces, artisans et prestataires de services stéphanois. Sites vitrines et e-commerce conçus pour attirer une clientèle locale et développer votre activité dans la métropole."
    },
    {
      icon: "🎨",
      title: "Design & Créativité",
      description: "Applications web et plateformes pour designers, créateurs et acteurs culturels. Solutions technologiques innovantes pour valoriser vos créations, événements et services dans la capitale française du design."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Découverte",
      description: "Je débute par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte stéphanois."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement à distance pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je programme votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est méticuleusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs stéphanois."
    },
    {
      number: "05",
      title: "Déploiement & Suivi",
      description: "Après la mise en ligne, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const saintEtienneDigitalStats = [
    {
      figure: "84%",
      description: "des consommateurs à Saint-Étienne consultent internet avant d'effectuer un achat local"
    },
    {
      figure: "72%",
      description: "des recherches locales sur mobile à Saint-Étienne conduisent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "67%",
      description: "des entreprises stéphanoises considèrent leur site web comme un levier essentiel de développement"
    },
    {
      figure: "93%",
      description: "des utilisateurs à Saint-Étienne forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Saint-Étienne', href: '/developpeur-web-saint-etienne', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Saint-Étienne</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> et travaillant pour <strong>Saint-Étienne</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels stéphanois. Expertise technique, solutions innovantes et accompagnement personnalisé pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Saint-Étienne"
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
                          <p className="text-sm text-gray-600">Saint-Étienne & Région</p>
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
                Services de Développement Web pour Saint-Étienne
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels stéphanois.
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

        {/* Secteurs d'activité à Saint-Étienne Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Stéphanoises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Saint-Étienne et dans la Loire.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saintEtienneBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Saint-Étienne
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises stéphanoises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {saintEtienneDigitalStats.map((stat, index) => (
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

        {/* Saint-Étienne Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Saint-Étienne : Expertise Dédiée
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web travaillant avec les entreprises stéphanoises, je comprends les spécificités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché stéphanois vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Saint-Étienne.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de collaboration à distance, je vous offre un service de qualité équivalent à celui d'un prestataire local. Nos échanges réguliers permettent de comprendre précisément vos besoins et d'ajuster le projet selon vos retours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Saint-Étienne
                </h3>
                <p className="text-gray-600">
                  Le marché web à Saint-Étienne offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans la région Auvergne-Rhône-Alpes et au-delà.
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
