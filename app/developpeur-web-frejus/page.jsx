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
  title: 'Développeur Web à Fréjus | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Fréjus spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre entreprise dans le Var.',
  keywords: ['développeur web Fréjus', 'création site web Fréjus', 'freelance web Fréjus', 'développeur Fréjus', 'site internet Fréjus', 'création site e-commerce Fréjus', 'développeur application web Fréjus', 'agence web Fréjus', 'refonte site web Var'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-frejus',
  },
  openGraph: {
    title: 'Développeur Web à Fréjus | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Fréjus spécialisé en création de sites web, e-commerce et applications. Solutions web innovantes et accompagnement personnalisé pour votre entreprise dans le Var.',
    url: 'https://killiandoubre.com/developpeur-web-frejus',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Fréjus',
  description: 'Services de développement web sur-mesure pour Fréjus : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels du Var.',
  slug: 'developpeur-web-frejus',
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
      question: 'Quels types de sites web développez-vous pour Fréjus ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Fréjus : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local, avec une attention particulière aux entreprises touristiques et saisonnières.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Fréjus ?',
      answer: 'Le coût d\'un site web à Fréjus varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis détaillé et transparent après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Fréjus ?',
      answer: 'Tout à fait, je propose des services d\'optimisation SEO spécifiquement adaptés au marché de Fréjus et du Var, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Fréjus et sa région pour maximiser votre visibilité auprès de la clientèle locale et touristique.'
    }
  ]
}

export default function DeveloppeurWebFrejusPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Création et développement de sites web sur-mesure pour les entreprises et professionnels de Fréjus. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et valoriser votre activité locale.",
      features: [
        "Design moderne adapté à l'identité de Fréjus",
        "Compatibilité optimale sur tous les appareils",
        "Optimisation pour le référencement local à Fréjus",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Conception de plateformes e-commerce performantes pour les commerçants et entrepreneurs de Fréjus. Des boutiques en ligne attractives et fonctionnelles qui valorisent vos produits et services dans le Var.",
      features: [
        "Interface utilisateur intuitive et esthétique",
        "Gestion simplifiée des produits et du stock",
        "Solutions de paiement sécurisées et options de livraison flexibles",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes personnalisées pour mettre en ligne vos services et optimiser vos processus métier à Fréjus et dans le Var.",
      features: [
        "Développement full-stack avec technologies modernes",
        "Interfaces utilisateurs intuitives et réactives",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes et outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Fréjus et dans le Var. Attirez plus de clients locaux et touristiques grâce à une stratégie SEO adaptée à votre marché.",
      features: [
        "Stratégie SEO locale ciblée sur Fréjus et sa région",
        "Optimisation complète de votre profil Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Local de Fréjus",
      description: "Ma connaissance approfondie de l'écosystème web de Fréjus me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux et touristiques. Je comprends les spécificités du tissu économique varois et les opportunités numériques qu'il offre."
    },
    {
      title: "Accompagnement Personnalisé & Réactivité",
      description: "En tant que développeur web freelance basé à Nice, j'offre un accompagnement personnalisé et réactif. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec vos objectifs commerciaux."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises de Fréjus",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise à Fréjus. J'évite les templates génériques pour créer des plateformes originales qui vous distinguent dans le paysage économique local."
    },
    {
      title: "Support Technique & Maintenance Fiable",
      description: "Je vous propose un support technique efficace et une maintenance régulière de votre site ou application. Mon intervention garantit une présence web toujours performante, essentielle pour maintenir la confiance de vos clients à Fréjus et dans le Var."
    }
  ]

  const frejusBusinessSectors = [
    {
      icon: "🏖️",
      title: "Tourisme & Hôtellerie",
      description: "Sites web et applications pour hôtels, campings, résidences de vacances et activités touristiques à Fréjus. Solutions optimisées pour valoriser votre établissement et attirer les visiteurs tout au long de l'année dans cette destination prisée de la Côte d'Azur varoise."
    },
    {
      icon: "🍽️",
      title: "Restauration & Gastronomie",
      description: "Présence web attractive pour restaurants, bars, traiteurs et commerces alimentaires à Fréjus. Sites vitrines et solutions de réservation en ligne adaptés aux besoins des professionnels de la restauration pour séduire la clientèle locale et touristique."
    },
    {
      icon: "🏠",
      title: "Immobilier & Construction",
      description: "Plateformes web pour agences immobilières, promoteurs et professionnels du bâtiment à Fréjus. Solutions permettant de mettre en valeur vos biens et projets avec des fonctionnalités avancées adaptées au marché immobilier dynamique du Var."
    },
    {
      icon: "🚤",
      title: "Nautisme & Activités Marines",
      description: "Sites web pour ports de plaisance, écoles de voile, locations de bateaux et prestataires d'activités nautiques à Fréjus. Plateformes intuitives facilitant la réservation et la présentation de vos services pour une clientèle passionnée par la mer et les loisirs aquatiques."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques à Fréjus. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte local du Var."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de votre clientèle à Fréjus."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir une expérience utilisateur optimale."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de Fréjus, du Var et des touristes."
    },
    {
      number: "05",
      title: "Lancement & Suivi",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins et du marché local."
    }
  ]

  const frejusDigitalStats = [
    {
      figure: "83%",
      description: "des habitants et visiteurs de Fréjus recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "76%",
      description: "des recherches locales sur mobile à Fréjus aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "69%",
      description: "des entreprises de Fréjus considèrent que leur site web est essentiel pour attirer la clientèle touristique"
    },
    {
      figure: "91%",
      description: "des utilisateurs à Fréjus forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance à Fréjus', href: '/developpeur-web-frejus', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Fréjus</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je développe des sites internet et applications sur-mesure adaptés aux besoins des entreprises et professionnels du Var. Mon approche combine expertise technique, connaissance du territoire et accompagnement personnalisé pour la réussite de votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Fréjus"
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
                          <p className="text-sm text-gray-600">Fréjus & Var</p>
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
                Services de Développement Web à Fréjus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Fréjus.
                Chaque solution est conçue sur-mesure pour répondre à vos besoins spécifiques et valoriser votre présence sur le marché local et touristique.
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

        {/* Secteurs d'activité à Fréjus Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises de Fréjus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Fréjus et dans le Var, en tenant compte des spécificités locales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frejusBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Fréjus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Fréjus, particulièrement dans un contexte touristique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {frejusDigitalStats.map((stat, index) => (
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
                Collaborer avec moi présente de nombreux avantages pour votre projet web à Fréjus et dans le Var.
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
                Une approche méthodique et collaborative pour transformer votre vision en une solution web performante et adaptée au marché de Fréjus.
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

        {/* Fréjus Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Fréjus : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web intervenant à Fréjus, je comprends les spécificités du marché local et les besoins des entreprises de cette ville touristique du Var.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Touristique
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché de Fréjus vous permet d'attirer des clients locaux et des touristes tout au long de l'année. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et touristiques, mettant en valeur votre ancrage dans cette ville historique et balnéaire du Var.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Basé à Nice, je travaille efficacement avec les entreprises de Fréjus grâce à une méthodologie éprouvée de collaboration à distance, complétée par des déplacements sur site si nécessaire. Cette approche flexible permet de maintenir une communication fluide tout en optimisant les délais de réalisation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Fréjus
                </h3>
                <p className="text-gray-600">
                  Le marché web à Fréjus offre d'importantes opportunités de croissance pour les entreprises locales, particulièrement dans les secteurs du tourisme, des loisirs et des services. 
                  Un site web ou une application performante vous permet d'attirer une clientèle diversifiée et de développer votre activité dans cette région attractive du Var.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité pour Fréjus et le Var.
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
              Prêt à Développer Votre Projet Web à Fréjus ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise à Fréjus et dans le Var.
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
