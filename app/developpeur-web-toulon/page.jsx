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
  title: 'Développeur Web à Toulon | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance à Toulon spécialisé en création de sites web, e-commerce et applications. Services sur-mesure, expertise locale et accompagnement personnalisé pour votre projet web dans le Var.',
  keywords: ['développeur web Toulon', 'création site web Toulon', 'freelance web Toulon', 'développeur Toulon', 'site internet Toulon', 'création site e-commerce Toulon', 'développeur application web Toulon', 'agence web Toulon', 'refonte site web Var'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-toulon',
  },
  openGraph: {
    title: 'Développeur Web à Toulon | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance à Toulon spécialisé en création de sites web, e-commerce et applications. Services sur-mesure, expertise locale et accompagnement personnalisé pour votre projet web dans le Var.',
    url: 'https://killiandoubre.com/developpeur-web-toulon',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Toulon',
  description: 'Services de développement web sur-mesure à Toulon : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels du Var.',
  slug: 'developpeur-web-toulon',
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
      question: 'Quels types de sites web développez-vous à Toulon ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels toulonnais : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Toulon ?',
      answer: 'Le coût d\'un site web à Toulon varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Toulon ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché toulonnais, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Toulon et sa région.'
    }
  ]
}

export default function DeveloppeurWebToulonPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et création de sites web sur-mesure pour les entreprises et professionnels toulonnais. Des sites vitrines modernes, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Design adapté à l'identité de votre entreprise",
        "Parfaitement responsive sur tous les appareils",
        "Optimisé pour le référencement local à Toulon",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de sites e-commerce performants pour les commerçants et entrepreneurs toulonnais. Des boutiques en ligne sécurisées et intuitives qui maximisent vos ventes et fidélisent votre clientèle.",
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
      description: "Développement d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Toulon et dans le Var.",
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
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Toulon et dans le Var. Attirez plus de clients locaux grâce à une stratégie SEO ciblée et efficace.",
      features: [
        "Stratégie SEO locale ciblée sur Toulon",
        "Optimisation Google My Business",
        "Création de contenu optimisé pour le marché toulonnais",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Local Toulonnais",
      description: "Ma connaissance approfondie du marché web à Toulon me permet de créer des solutions parfaitement adaptées aux attentes et comportements des utilisateurs locaux. Je comprends les spécificités du tissu économique toulonnais et les opportunités web qu'il offre."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance, je vous offre un accompagnement de proximité pour mieux comprendre vos besoins. Cette relation directe garantit une communication fluide et une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Toulonnaises",
      description: "Chaque projet est unique, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément aux besoins spécifiques de votre entreprise. Pas de templates génériques, mais des créations originales qui vous démarquent de la concurrence locale."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon intervention rapide vous assure une présence web toujours fonctionnelle et à jour, essentielle pour maintenir la confiance de vos clients."
    }
  ]

  const toulonBusinessSectors = [
    {
      icon: "⚓",
      title: "Secteur Maritime & Naval",
      description: "Sites web et applications pour entreprises du secteur maritime, naval et portuaire à Toulon. Solutions optimisées pour les chantiers navals, services maritimes, écoles nautiques et activités liées à la mer, secteur clé de l'économie toulonnaise."
    },
    {
      icon: "🏢",
      title: "Commerces & Services Locaux",
      description: "Présence web efficace pour commerces, artisans et prestataires de services toulonnais. Sites vitrines et e-commerce adaptés aux besoins des entreprises locales pour attirer et fidéliser une clientèle de proximité."
    },
    {
      icon: "🏨",
      title: "Tourisme & Hôtellerie",
      description: "Plateformes web pour hôtels, restaurants, locations saisonnières et services touristiques à Toulon. Solutions permettant de mettre en valeur votre offre touristique et d'attirer des visiteurs toute l'année dans cette destination méditerranéenne."
    },
    {
      icon: "🔬",
      title: "Innovation & Technologie",
      description: "Applications web et plateformes pour startups et entreprises innovantes du pôle Mer PACA. Solutions technologiques avancées pour concrétiser vos concepts et accélérer votre croissance dans l'écosystème d'innovation toulonnais."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'analyse me permet d'identifier les solutions les plus adaptées à votre projet et au marché local toulonnais."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "Je développe une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs toulonnais."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const toulonDigitalStats = [
    {
      figure: "86%",
      description: "des consommateurs à Toulon recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "74%",
      description: "des recherches locales sur mobile à Toulon aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "69%",
      description: "des entreprises toulonnaises considèrent que leur site web est essentiel pour leur développement commercial"
    },
    {
      figure: "93%",
      description: "des utilisateurs à Toulon forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance à Toulon', href: '/developpeur-web-toulon', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Toulon</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> et originaire de <strong>Toulon</strong>, je développe des sites internet et applications adaptées aux besoins spécifiques des entreprises et professionnels varois. Je combine connaissance du territoire, solutions individualisées et accompagnement attentif tout au long de la réalisation de votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Toulon"
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
                          <p className="text-sm text-gray-600">Toulon & Var</p>
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
                Services de Développement Web à Toulon
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je mets à votre disposition une palette complète de prestations de développement web destinées aux acteurs économiques toulonnais.
                Chaque projet est élaboré avec soin pour correspondre exactement à vos exigences particulières et vous permettre de vous distinguer efficacement sur votre marché.
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

        {/* Secteurs d'activité à Toulon Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Toulonnaises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'élabore des plateformes web personnalisées pour répondre aux enjeux spécifiques des divers domaines d'activité présents à Toulon et dans l'ensemble du département du Var.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toulonBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Toulon
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez ces données significatives qui soulignent l'impact crucial d'une présence numérique professionnelle pour les entreprises implantées à Toulon.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {toulonDigitalStats.map((stat, index) => (
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
                Me confier votre projet numérique à Toulon vous apporte de nombreux atouts pour sa réussite.
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
                Une méthode rigoureuse et interactive qui transforme vos idées en solutions numériques efficaces et durables.
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

        {/* Toulon Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Toulon : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Grâce à mon ancrage dans l'écosystème toulonnais, j'ai développé une compréhension fine des caractéristiques du marché local et des attentes particulières des entreprises varoises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché toulonnais vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Toulon et dans le Var.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">⚓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Spécificités du Marché Toulonnais
                </h3>
                <p className="text-gray-600">
                  Toulon possède un écosystème économique unique, entre activités maritimes, défense, tourisme et innovation. Je crée des solutions web qui tiennent compte de ces spécificités et vous permettent de vous adresser efficacement à votre clientèle cible.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Toulon
                </h3>
                <p className="text-gray-600">
                  Le marché web à Toulon offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans toute la région varoise.
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
                Je maîtrise les outils et frameworks les plus récents pour créer des solutions web robustes, évolutives et parfaitement adaptées à vos objectifs.
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
              Prêt à Développer Votre Projet Web à Toulon ?
            </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              N'hésitez pas à me contacter pour échanger sur vos besoins numériques et recevoir une estimation adaptée à votre situation. 
              Travaillons ensemble pour développer une plateforme web efficace qui servira idéalement les ambitions de votre entreprise à Toulon.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Obtenez votre devis gratuitement !
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
