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
  title: 'Développeur Web dans les Alpes-Maritimes | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance dans les Alpes-Maritimes (06) spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre entreprise.',
  keywords: ['développeur web Alpes-Maritimes', 'création site web 06', 'freelance web Alpes-Maritimes', 'développeur 06', 'site internet Alpes-Maritimes', 'création site e-commerce 06', 'développeur application web Alpes-Maritimes', 'agence web 06', 'refonte site web Alpes-Maritimes'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-alpes-maritimes',
  },
  openGraph: {
    title: 'Développeur Web dans les Alpes-Maritimes | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance dans les Alpes-Maritimes (06) spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre entreprise.',
    url: 'https://killiandoubre.com/developpeur-web-alpes-maritimes',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance dans les Alpes-Maritimes',
  description: 'Services de développement web sur-mesure dans les Alpes-Maritimes (06) : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels du département.',
  slug: 'developpeur-web-alpes-maritimes',
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
      question: 'Quels types de sites web développez-vous dans les Alpes-Maritimes ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels des Alpes-Maritimes : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local, avec une attention particulière aux entreprises touristiques, technologiques et de services.'
    },
    {
      question: 'Combien coûte la création d\'un site web dans les Alpes-Maritimes ?',
      answer: 'Le coût d\'un site web dans les Alpes-Maritimes varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis détaillé et transparent après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Intervenez-vous dans tout le département des Alpes-Maritimes ?',
      answer: 'Oui, basé à Nice, je propose mes services dans l\'ensemble du département des Alpes-Maritimes (06) : de Menton à Théoule-sur-Mer, en passant par Antibes, Cannes, Grasse, Valbonne, Sophia Antipolis et les communes de l\'arrière-pays. Je propose des services de développement web à distance avec des déplacements possibles selon les besoins du projet.'
    }
  ]
}

export default function DeveloppeurWebAlpesMaritimesPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et professionnels des Alpes-Maritimes. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et valoriser votre activité locale.",
      features: [
        "Design contemporain adapté à l'identité de votre entreprise",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local dans le 06",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants et entrepreneurs des Alpes-Maritimes. Des boutiques en ligne attractives et fonctionnelles qui valorisent vos produits et services dans tout le département et au-delà.",
      features: [
        "Interface utilisateur intuitive et esthétique",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et options de livraison flexibles",
        "Stratégies d'optimisation des conversions adaptées à votre marché"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes personnalisées pour mettre en ligne vos services et optimiser vos processus métier dans les Alpes-Maritimes, adaptées aux spécificités de votre secteur d'activité.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et réactives",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes et outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google dans les Alpes-Maritimes. Attirez plus de clients locaux grâce à une stratégie SEO adaptée à votre zone d'activité dans le 06.",
      features: [
        "Stratégie SEO ciblée sur les Alpes-Maritimes",
        "Optimisation Google My Business pour chaque établissement",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché des Alpes-Maritimes",
      description: "Ma connaissance approfondie de l'écosystème web des Alpes-Maritimes me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités du tissu économique du 06 et les opportunités numériques qu'il offre, de la technopole de Sophia Antipolis au tourisme de la Côte d'Azur."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, je propose mes services dans tout le département des Alpes-Maritimes pour vous offrir un accompagnement personnalisé. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec vos objectifs commerciaux et votre ancrage territorial."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Locales",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise dans les Alpes-Maritimes. J'évite les templates génériques pour créer des plateformes originales qui vous distinguent dans le paysage économique local."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique efficace et une maintenance continue de votre site ou application. Mon intervention rapide garantit une présence web toujours opérationnelle, essentielle pour maintenir la confiance de vos clients dans les Alpes-Maritimes."
    }
  ]

  const alpesMaritimesBusinessSectors = [
    {
      icon: "🏖️",
      title: "Tourisme & Hôtellerie",
      description: "Sites web et applications pour hôtels, résidences, restaurants et activités touristiques dans les Alpes-Maritimes. Solutions optimisées pour valoriser votre établissement et attirer les visiteurs tout au long de l'année dans ce département touristique majeur de la Côte d'Azur."
    },
    {
      icon: "💻",
      title: "Tech & Innovation",
      description: "Plateformes web pour startups, entreprises technologiques et acteurs de l'innovation à Sophia Antipolis et dans tout le 06. Solutions web avancées pour concrétiser vos concepts et accélérer votre croissance dans cet écosystème tech dynamique."
    },
    {
      icon: "🏠",
      title: "Immobilier & Luxe",
      description: "Présence web sophistiquée pour agences immobilières, promoteurs et professionnels du secteur immobilier haut de gamme des Alpes-Maritimes. Sites permettant de mettre en valeur vos biens d'exception avec des fonctionnalités avancées adaptées à une clientèle exigeante."
    },
    {
      icon: "🏢",
      title: "Services & Professions Libérales",
      description: "Solutions web pour cabinets d'avocats, experts-comptables, consultants et prestataires de services dans le 06. Plateformes professionnelles renforçant votre crédibilité et facilitant la prise de contact avec votre clientèle locale."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques dans les Alpes-Maritimes. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte local du département."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de votre clientèle dans le 06."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir une expérience utilisateur optimale."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs des Alpes-Maritimes."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins et du marché local."
    }
  ]

  const alpesMaritimesDigitalStats = [
    {
      figure: "88%",
      description: "des consommateurs dans les Alpes-Maritimes recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "75%",
      description: "des recherches locales sur mobile dans le 06 aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "70%",
      description: "des entreprises des Alpes-Maritimes considèrent que leur site web est essentiel pour leur développement commercial"
    },
    {
      figure: "93%",
      description: "des utilisateurs dans le 06 forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance dans les Alpes-Maritimes', href: '/developpeur-web-alpes-maritimes', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance dans les <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Alpes-Maritimes</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services dans tout le département des <strong>Alpes-Maritimes (06)</strong> pour concevoir des sites internet et applications sur-mesure adaptés aux besoins des entreprises et professionnels locaux. Mon approche allie expertise technique, connaissance du territoire et accompagnement personnalisé pour la réussite de votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance dans les Alpes-Maritimes"
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
                          <p className="text-sm text-gray-600">Alpes-Maritimes</p>
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
                Services de Développement Web dans les Alpes-Maritimes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels des Alpes-Maritimes.
                Chaque solution est élaborée sur-mesure pour répondre à vos besoins spécifiques et renforcer votre présence sur le marché local.
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

        {/* Secteurs d'activité dans les Alpes-Maritimes Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises du 06
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité dans les Alpes-Maritimes, en tenant compte des spécificités locales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {alpesMaritimesBusinessSectors.map((sector, index) => (
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
                L'Importance du Web dans les Alpes-Maritimes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises des Alpes-Maritimes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alpesMaritimesDigitalStats.map((stat, index) => (
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
                Collaborer avec moi présente de nombreux avantages pour votre projet web dans les Alpes-Maritimes.
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
                Une approche méthodique et collaborative pour transformer votre vision en une solution web performante et adaptée au marché des Alpes-Maritimes.
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

        {/* Alpes-Maritimes Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web dans les Alpes-Maritimes : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web intervenant dans tout le département des Alpes-Maritimes, je comprends les spécificités du marché local et les besoins des entreprises de ce territoire dynamique et diversifié.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Départementale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché des Alpes-Maritimes vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage territorial, de Nice à Cannes, d'Antibes à Menton, et dans tout le 06.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Proximité & Réactivité
                </h3>
                <p className="text-gray-600">
                  Basé à Nice, je propose mes services de développeur web freelance dans tout le département des Alpes-Maritimes pour rencontrer mes clients et comprendre leurs besoins spécifiques. Cette proximité me permet d'offrir un service personnalisé et réactif à l'ensemble des entreprises du 06.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web dans le 06
                </h3>
                <p className="text-gray-600">
                  Le marché web dans les Alpes-Maritimes offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'étendre votre visibilité dans tout le département et de développer votre activité dans ce territoire économiquement dynamique, entre mer et montagne.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité pour les entreprises des Alpes-Maritimes.
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
              Prêt à Développer Votre Projet Web dans les Alpes-Maritimes ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise dans le 06.
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
