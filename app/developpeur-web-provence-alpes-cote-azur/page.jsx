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
  title: 'Développeur Web en Provence-Alpes-Côte d\'Azur | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance en région PACA spécialisé en création de sites web, e-commerce et applications. Solutions digitales innovantes et accompagnement personnalisé pour votre entreprise dans le Sud-Est.',
  keywords: ['développeur web PACA', 'création site web Provence-Alpes-Côte d\'Azur', 'freelance web Sud-Est', 'développeur région PACA', 'site internet Côte d\'Azur', 'création site e-commerce Provence', 'développeur application web PACA', 'agence web Sud-Est', 'refonte site web Provence-Alpes-Côte d\'Azur'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-provence-alpes-cote-azur',
  },
  openGraph: {
    title: 'Développeur Web en Provence-Alpes-Côte d\'Azur | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance en région PACA spécialisé en création de sites web, e-commerce et applications. Solutions digitales innovantes et accompagnement personnalisé pour votre entreprise dans le Sud-Est.',
    url: 'https://killiandoubre.com/developpeur-web-provence-alpes-cote-azur',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance en Provence-Alpes-Côte d\'Azur',
  description: 'Services de développement web sur-mesure pour la région PACA : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels du Sud-Est.',
  slug: 'developpeur-web-provence-alpes-cote-azur',
  image: 'https://killiandoubre.com/photo_close.jpg',
  features: [
    'Création de sites web professionnels',
    'Développement d\'applications web',
    'Sites e-commerce performants',
    'Optimisation SEO régionale',
    'Maintenance et support technique'
  ],
  faqs: [
    {
      question: 'Quels types de sites web développez-vous en région PACA ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de la région Provence-Alpes-Côte d\'Azur : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité régional, avec une attention particulière aux entreprises touristiques, culturelles et innovantes.'
    },
    {
      question: 'Combien coûte la création d\'un site web en Provence-Alpes-Côte d\'Azur ?',
      answer: 'Le coût d\'un site web en région PACA varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis détaillé et transparent après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Intervenez-vous dans toute la région Provence-Alpes-Côte d\'Azur ?',
      answer: 'Oui, basé à Nice, je propose mes services dans l\'ensemble de la région PACA : des Alpes-Maritimes au Vaucluse, en passant par les Bouches-du-Rhône, le Var, les Alpes-de-Haute-Provence et les Hautes-Alpes. Je propose des services de développement web à distance avec des déplacements possibles selon les besoins du projet.'
    }
  ]
}

export default function DeveloppeurWebProvenceAlpesCoteAzurPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et professionnels de la région PACA. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et valoriser votre activité régionale.",
      features: [
        "Design contemporain adapté à l'identité de votre entreprise",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local et régional",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants et entrepreneurs de Provence-Alpes-Côte d'Azur. Des boutiques en ligne attractives et fonctionnelles qui valorisent vos produits et services dans toute la région et au-delà.",
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
      description: "Développement d'applications web et plateformes personnalisées pour digitaliser vos services et optimiser vos processus métier en région PACA, adaptées aux spécificités de votre secteur d'activité.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et réactives",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes et outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Régionale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google en Provence-Alpes-Côte d'Azur. Attirez plus de clients locaux et régionaux grâce à une stratégie SEO adaptée à votre zone d'activité.",
      features: [
        "Stratégie SEO ciblée sur la région PACA",
        "Optimisation Google My Business pour chaque établissement",
        "Création de contenu pertinent pour votre marché régional",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Régional",
      description: "Ma connaissance approfondie de l'écosystème digital en Provence-Alpes-Côte d'Azur me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux et régionaux. Je comprends les spécificités du tissu économique du Sud-Est et les opportunités numériques qu'il offre."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, je propose mes services dans toute la région PACA pour vous offrir un accompagnement personnalisé. Cette relation directe garantit une communication fluide et une solution digitale parfaitement alignée avec vos objectifs commerciaux et votre ancrage territorial."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Régionales",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise en PACA. J'évite les templates génériques pour créer des plateformes originales qui vous distinguent dans le paysage économique régional."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique efficace et une maintenance continue de votre site ou application. Mon intervention rapide garantit une présence digitale toujours opérationnelle, essentielle pour maintenir la confiance de vos clients en Provence-Alpes-Côte d'Azur."
    }
  ]

  const pacaBusinessSectors = [
    {
      icon: "🏖️",
      title: "Tourisme & Hôtellerie",
      description: "Sites web et applications pour hôtels, résidences, campings et activités touristiques en PACA. Solutions optimisées pour valoriser votre établissement et attirer les visiteurs tout au long de l'année dans cette région touristique majeure, de la Côte d'Azur aux stations alpines."
    },
    {
      icon: "🍷",
      title: "Terroir & Gastronomie",
      description: "Présence web attractive pour restaurants, producteurs, vignerons et artisans de la gastronomie provençale. Sites vitrines et e-commerce adaptés pour mettre en valeur vos produits du terroir et votre savoir-faire auprès d'une clientèle locale et internationale."
    },
    {
      icon: "🏢",
      title: "Services & Professions Libérales",
      description: "Solutions digitales pour cabinets d'avocats, experts-comptables, consultants et prestataires de services en région PACA. Plateformes professionnelles renforçant votre crédibilité et facilitant la prise de contact avec votre clientèle régionale."
    },
    {
      icon: "🚀",
      title: "Innovation & Startups",
      description: "Applications web et plateformes pour startups et entreprises innovantes de Sophia Antipolis à Marseille. Solutions technologiques avancées pour concrétiser vos concepts et accélérer votre croissance dans l'écosystème dynamique du Sud-Est."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques en région PACA. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte régional du Sud-Est."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie digitale sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de votre clientèle en Provence-Alpes-Côte d'Azur."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir une expérience utilisateur optimale."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de la région PACA."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence digitale à l'évolution de vos besoins et du marché régional."
    }
  ]

  const pacaDigitalStats = [
    {
      figure: "86%",
      description: "des consommateurs en PACA recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "74%",
      description: "des recherches locales sur mobile en Provence-Alpes-Côte d'Azur aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "67%",
      description: "des entreprises de la région considèrent que leur site web est essentiel pour leur développement commercial"
    },
    {
      figure: "94%",
      description: "des utilisateurs en PACA forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance en Provence-Alpes-Côte d\'Azur', href: '/developpeur-web-provence-alpes-cote-azur', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance en <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Provence-Alpes-Côte d'Azur</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services dans toute la région <strong>Provence-Alpes-Côte d'Azur</strong> pour concevoir des sites internet et applications sur-mesure adaptés aux besoins des entreprises et professionnels du Sud-Est. Mon approche allie expertise technique, connaissance du territoire et accompagnement personnalisé pour la réussite de votre projet digital.
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
                        alt="Killian DOUBRE - Développeur Web Freelance en Provence-Alpes-Côte d'Azur"
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
                          <p className="text-sm text-gray-600">Région PACA</p>
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
                Services de Développement Web en Provence-Alpes-Côte d'Azur
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de la région PACA.
                Chaque solution est élaborée sur-mesure pour répondre à vos besoins spécifiques et renforcer votre présence sur le marché régional.
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

        {/* Secteurs d'activité en PACA Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises de la Région
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions digitales sur-mesure pour différents secteurs d'activité en Provence-Alpes-Côte d'Azur, en tenant compte des spécificités régionales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pacaBusinessSectors.map((sector, index) => (
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
                L'Importance du Digital en PACA
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Provence-Alpes-Côte d'Azur.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pacaDigitalStats.map((stat, index) => (
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
                Collaborer avec moi présente de nombreux avantages pour votre projet digital en Provence-Alpes-Côte d'Azur.
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
                Une approche méthodique et collaborative pour transformer votre vision en une solution digitale performante et adaptée au marché de la région PACA.
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

        {/* PACA Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web en PACA : Expertise Régionale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web intervenant dans toute la région Provence-Alpes-Côte d'Azur, je comprends les spécificités du marché local et les besoins des entreprises de ce territoire dynamique et diversifié.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Digitale Régionale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché de la région PACA vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches régionales et mettent en valeur votre ancrage territorial, de Marseille à Nice, de Gap à Toulon.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Mobilité & Flexibilité
                </h3>
                <p className="text-gray-600">
                  Basé à Nice, mes services de développeur web freelance dans toute la région PACA pour rencontrer mes clients et comprendre leurs besoins spécifiques. Cette mobilité, combinée à des outils de collaboration à distance efficaces, me permet d'offrir un service personnalisé et réactif à l'ensemble des entreprises du Sud-Est.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Digitale Régionale
                </h3>
                <p className="text-gray-600">
                  Le marché digital en Provence-Alpes-Côte d'Azur offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'étendre votre visibilité dans toute la région et de développer votre activité dans ce territoire économiquement dynamique.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions digitales de qualité pour les entreprises de Provence-Alpes-Côte d'Azur.
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
              Prêt à Développer Votre Projet Web en Provence-Alpes-Côte d'Azur ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet digital et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise en région PACA.
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
