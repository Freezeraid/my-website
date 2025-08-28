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
  title: 'Développeur Web Cannes | Croissance +300% | Expert',
  description: 'Expert web Cannes multipliant la Croissance de +300%. Solutions premium, design élégant. Résultats garantis !',


  keywords: ['développeur web Cannes', 'création site web Cannes', 'freelance web Cannes', 'développeur Cannes', 'site internet luxe Cannes', 'création site e-commerce Cannes', 'développeur application web Cannes', 'site web hôtel Cannes', 'développeur événementiel Cannes'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-cannes',
  },
  openGraph: {
    title: 'Développeur Web Cannes | Croissance +300% | Expert',
    description: 'Expert web Cannes multipliant la Croissance de +300%. Solutions premium, design élégant. Résultats garantis !',


    url: 'https://killiandoubre.com/developpeur-web-cannes',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Cannes',
  description: 'Services de développement web sur-mesure à Cannes : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels des Alpes-Maritimes.',
  slug: 'developpeur-web-cannes',
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
      question: 'Quels types de sites web développez-vous à Cannes ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels cannois : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Cannes ?',
      answer: 'Le coût d\'un site web à Cannes varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Cannes ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché cannois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Cannes et sa région.'
    }
  ]
}

export default function DeveloppeurWebCannesPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et création de sites web sur-mesure pour les entreprises et professionnels cannois. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients.",
      features: [
        "Design haut de gamme adapté à l'image de Cannes",
        "Parfaitement responsive sur tous les appareils",
        "Optimisé pour le référencement local à Cannes",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de sites e-commerce performants pour les commerçants et entrepreneurs cannois. Des boutiques en ligne sophistiquées et intuitives qui valorisent vos produits et services exclusifs.",
      features: [
        "Interface utilisateur élégante et intuitive",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et options de livraison premium",
        "Stratégies d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour mettre en ligne vos services et optimiser vos processus métier à Cannes et sur la Côte d'Azur.",
      features: [
        "Développement full-stack avec technologies modernes",
        "Interfaces utilisateurs sophistiquées et performantes",
        "Architecture sécurisée et évolutive",
        "Intégration avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Cannes et dans les Alpes-Maritimes. Attirez une clientèle locale et internationale grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale ciblée sur Cannes",
        "Optimisation Google My Business",
        "Création de contenu multilingue pour une clientèle internationale",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Local Cannois",
      description: "Ma connaissance approfondie du marché web à Cannes me permet de créer des solutions parfaitement adaptées aux attentes d'une clientèle exigeante et internationale. Je comprends les spécificités du tissu économique cannois et les opportunités web qu'il offre."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance, je vous offre un accompagnement de proximité pour comprendre précisément vos besoins. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec votre image de marque."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Cannoises",
      description: "Chaque projet est unique, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent aux exigences spécifiques de votre entreprise. Pas de templates génériques, mais des créations originales qui vous distinguent dans un marché compétitif."
    },
    {
      title: "Support Technique & Maintenance Premium",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon intervention rapide vous assure une présence web toujours impeccable, essentielle pour maintenir l'image d'excellence attendue à Cannes."
    }
  ]

  const cannesBusinessSectors = [
    {
      icon: "🏨",
      title: "Hôtellerie & Tourisme de Luxe",
      description: "Sites web et applications pour hôtels, restaurants gastronomiques, villas de location et services touristiques haut de gamme à Cannes. Solutions optimisées pour valoriser votre établissement et attirer une clientèle internationale exigeante."
    },
    {
      icon: "🛥️",
      title: "Nautisme & Yachting",
      description: "Présence web sophistiquée pour entreprises du secteur nautique, location de yachts, services maritimes et événements nautiques. Sites et applications adaptés à ce secteur d'excellence cannois pour séduire une clientèle prestigieuse."
    },
    {
      icon: "🏆",
      title: "Événementiel & Culture",
      description: "Plateformes web pour organisateurs d'événements, festivals, congrès et manifestations culturelles. Solutions permettant de mettre en valeur vos événements et d'optimiser l'expérience des participants dans la ville des festivals."
    },
    {
      icon: "💎",
      title: "Luxe & Commerce Premium",
      description: "Sites e-commerce et vitrines web pour boutiques de luxe, joailliers, galeries d'art et services exclusifs. Solutions web raffinées qui reflètent l'élégance et le prestige de votre marque dans l'écosystème cannois."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'analyse me permet d'identifier les solutions les plus adaptées à votre projet et au marché local cannois."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "Je développe une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et à l'image d'excellence de Cannes."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je code votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement développée et testée pour garantir une expérience utilisateur irréprochable."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs cannois et internationaux."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const cannesDigitalStats = [
    {
      figure: "89%",
      description: "des visiteurs et résidents à Cannes recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "78%",
      description: "des recherches locales sur mobile à Cannes aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "72%",
      description: "des entreprises cannoises considèrent que leur site web est essentiel pour attirer une clientèle internationale"
    },
    {
      figure: "95%",
      description: "des utilisateurs à Cannes forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance à Cannes', href: '/developpeur-web-cannes', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cannes</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  En qualité de développeur web freelance basé à <strong>Nice</strong>, je réalise des sites internet et applications personnalisées répondant aux exigences des entreprises et professionnels de la Côte d'Azur. Mon approche combine expertise du marché local, créations sur-mesure et suivi personnalisé tout au long de votre projet numérique.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Cannes"
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
                          <p className="text-sm text-gray-600">Cannes & Région</p>
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
                Services de Développement Web à Cannes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mon offre englobe un éventail complet de prestations de développement web destinées aux entreprises et professionnels cannois.
                Chaque réalisation est élaborée spécifiquement pour satisfaire vos attentes particulières et mettre en valeur votre image de marque auprès d'une clientèle locale et internationale.
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

        {/* Secteurs d'activité à Cannes Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Cannoises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je crée des plateformes numériques adaptées aux besoins spécifiques de divers secteurs d'activité présents à Cannes et dans l'ensemble de la région azuréenne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cannesBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Cannes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Voici quelques statistiques révélatrices qui illustrent la nécessité d'une présence en ligne professionnelle pour les entreprises établies à Cannes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cannesDigitalStats.map((stat, index) => (
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
                Collaborer ensemble présente de multiples bénéfices pour la réussite de votre projet numérique à Cannes.
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
                Ma démarche structurée et participative permet de concrétiser votre vision en une réalisation numérique d'excellence.
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

        {/* Cannes Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Cannes : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fort de mon expérience auprès des acteurs économiques cannois, j'ai acquis une compréhension approfondie des particularités du marché local et des attentes spécifiques des entreprises de cette région prestigieuse.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Internationale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché cannois vous permet d'attirer des clients locaux et internationaux. 
                  Je développe des sites web multilingues qui ciblent spécifiquement les recherches locales et valorisent votre ancrage à Cannes, ville mondialement connue.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  L'Excellence Cannoise
                </h3>
                <p className="text-gray-600">
                  Cannes est synonyme de prestige et d'excellence. Je crée des solutions web qui reflètent ces valeurs et vous permettent de vous démarquer dans un environnement compétitif, avec une attention particulière portée à l'esthétique et à l'expérience utilisateur.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web à Cannes
                </h3>
                <p className="text-gray-600">
                  Le marché web à Cannes offre d'importantes opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher une clientèle exigeante et d'étendre votre activité sur toute la Côte d'Azur et au-delà.
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
