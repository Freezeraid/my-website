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
  title: 'Développeur Web à Aubagne | Sites & Applications | Freelance',
  description: 'Développeur web freelance pour Aubagne spécialisé dans la création de sites web, e-commerce et applications. Solutions web sur-mesure pour entreprises aubagnaises avec accompagnement à distance et expertise technique.',
  keywords: ['développeur web Aubagne', 'création site web Aubagne', 'freelance web Aubagne', 'développeur Aubagne', 'site internet Aubagne', 'création site e-commerce Aubagne', 'développeur application web Aubagne', 'agence web Aubagne', 'refonte site web Aubagne'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-aubagne',
  },
  openGraph: {
    title: 'Développeur Web à Aubagne | Sites & Applications | Freelance',
    description: 'Développeur web freelance pour Aubagne spécialisé dans la création de sites web, e-commerce et applications. Solutions web sur-mesure pour entreprises aubagnaises avec accompagnement à distance et expertise technique.',
    url: 'https://killiandoubre.com/developpeur-web-aubagne',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Aubagne',
  description: 'Services de développement web sur-mesure pour Aubagne : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels aubagnais.',
  slug: 'developpeur-web-aubagne',
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
      question: 'Quels types de sites web développez-vous pour Aubagne ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels aubagnais : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché d\'Aubagne.'
    },
    {
      question: 'Quel est l\'investissement pour un site web à Aubagne ?',
      answer: 'L\'investissement pour un site web à Aubagne varie selon la complexité et les fonctionnalités souhaitées. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après étude de votre projet.'
    },
    {
      question: 'Offrez-vous des services de référencement local pour Aubagne ?',
      answer: 'Tout à fait, je propose des services d\'optimisation SEO spécifiquement adaptés au marché aubagnais, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Aubagne et sa région.'
    }
  ]
}

export default function DeveloppeurWebAubagnePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Création de sites web sur-mesure pour les entreprises et professionnels aubagnais. Des vitrines web modernes, responsive et optimisées pour convertir vos visiteurs en clients.",
      features: [
        "Design adapté à l'identité d'Aubagne et de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Aubagne",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Développement de plateformes e-commerce performantes pour les commerçants et entrepreneurs d'Aubagne. Des boutiques en ligne sécurisées qui valorisent vos produits et facilitent les ventes.",
      features: [
        "Interface utilisateur intuitive et conviviale",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et options de livraison adaptées",
        "Stratégies d'optimisation des conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Conception d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Aubagne et dans les Bouches-du-Rhône.",
      features: [
        "Développement full-stack avec technologies modernes",
        "Interfaces utilisateurs intuitives et performantes",
        "Systèmes sécurisés et évolutifs",
        "Intégration avec vos outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Stratégies d'optimisation du référencement naturel pour améliorer votre visibilité sur Google à Aubagne. Attirez davantage de clients locaux grâce à un SEO ciblé et efficace.",
      features: [
        "Stratégie SEO locale ciblée sur Aubagne",
        "Optimisation Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Connaissance du Marché Aubagnais",
      description: "Bien que basé à Nice, j'ai développé une compréhension approfondie du marché web aubagnais et de ses spécificités. Cette connaissance me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux et aux particularités économiques d'Aubagne et sa région."
    },
    {
      title: "Accompagnement Personnalisé & Disponibilité",
      description: "En tant que développeur web freelance, je vous offre un accompagnement sur-mesure et une communication directe tout au long de votre projet. Cette relation privilégiée assure une meilleure compréhension de vos besoins et une adaptation rapide aux évolutions de votre projet web."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Aubagnaises",
      description: "Chaque entreprise aubagnaise a ses propres défis et objectifs. C'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos besoins spécifiques, vous permettant de vous démarquer efficacement dans le paysage concurrentiel local."
    },
    {
      title: "Support Technique & Maintenance à Distance",
      description: "Je vous propose un support technique réactif et une maintenance régulière de votre site ou application. Grâce aux outils de collaboration à distance, je peux intervenir rapidement pour résoudre tout problème technique ou former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const aubagneBusinessSectors = [
    {
      icon: "🏭",
      title: "Industrie & Artisanat",
      description: "Solutions web pour les entreprises industrielles et artisanales d'Aubagne. Sites et applications adaptés pour mettre en valeur votre savoir-faire et vos produits, avec fonctionnalités de présentation, catalogue et demande de devis."
    },
    {
      icon: "🏪",
      title: "Commerce & Services Locaux",
      description: "Présence web efficace pour commerçants, artisans et prestataires de services aubagnais. Sites vitrines et e-commerce optimisés pour la clientèle locale, avec géolocalisation et fonctionnalités adaptées au commerce de proximité."
    },
    {
      icon: "🍽️",
      title: "Gastronomie & Terroir",
      description: "Sites web et applications pour restaurants, producteurs locaux et commerces alimentaires d'Aubagne. Solutions web valorisant les produits du terroir provençal, avec systèmes de réservation et présentation attractive de votre offre."
    },
    {
      icon: "🏢",
      title: "Professions Libérales & Services",
      description: "Plateformes web pour professions libérales, consultants et entreprises de services d'Aubagne. Solutions adaptées pour valoriser votre expertise et développer votre clientèle, avec systèmes de prise de rendez-vous et présentation de vos services."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et le contexte aubagnais dans lequel vous évoluez. Cette phase essentielle me permet d'identifier les solutions les plus adaptées à votre projet et à votre marché local."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de votre clientèle aubagnaise."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus appropriées, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement codée et testée pour garantir performance, sécurité et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs aubagnais."
    },
    {
      number: "05",
      title: "Déploiement & Accompagnement",
      description: "Après la mise en ligne, je reste à votre disposition pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins et du marché aubagnais."
    }
  ]

  const aubagneDigitalStats = [
    {
      figure: "86%",
      description: "des consommateurs à Aubagne recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "75%",
      description: "des recherches locales sur mobile à Aubagne aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "70%",
      description: "des entreprises aubagnaises considèrent que leur site web est crucial pour leur développement commercial"
    },
    {
      figure: "92%",
      description: "des utilisateurs à Aubagne forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Aubagne', href: '/developpeur-web-aubagne', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Aubagne</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à Nice proposant mes services pour <strong>Aubagne</strong>, je conçois des sites web et applications sur-mesure pour les entreprises et professionnels aubagnais. Expertise technique, solutions personnalisées et accompagnement à distance pour concrétiser votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Aubagne"
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
                          <p className="text-sm text-gray-600">Aubagne</p>
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
                Services de Développement Web pour Aubagne
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web adaptés aux besoins des entreprises aubagnaises.
                Chaque solution est élaborée sur-mesure pour répondre à vos objectifs spécifiques et renforcer votre présence web sur le marché local.
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

        {/* Secteurs d'activité à Aubagne Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Aubagnaises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Aubagne et sa région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aubagneBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Aubagne
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises aubagnaises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aubagneDigitalStats.map((stat, index) => (
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
                Collaborer avec moi offre de nombreux avantages pour votre projet web à Aubagne.
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

        {/* Aubagne Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour Aubagne : Expertise Adaptée
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services pour Aubagne, je comprends les spécificités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché aubagnais vous permet d'attirer des clients locaux et de vous démarquer de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage à Aubagne.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration Efficace à Distance
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de collaboration modernes, je vous propose un accompagnement efficace à distance. Visioconférences, partage d'écran et communication régulière permettent de mener à bien votre projet web avec la même qualité qu'en présentiel.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Aubagne
                </h3>
                <p className="text-gray-600">
                  Le marché web aubagnais offre d'importantes opportunités de développement pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'atteindre de nouveaux clients et d'étendre votre activité dans la région d'Aubagne et des Bouches-du-Rhône.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité supérieure.
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
              Prêt à Développer Votre Projet Web à Aubagne ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise aubagnaise.
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
