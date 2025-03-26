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
  title: 'Développeur Web Antibes | Expert Nautique & Tech | Sites & Applications sur-mesure',
  description: 'Développeur web spécialisé pour Antibes et Sophia Antipolis. Création de sites web et applications pour secteurs nautique, touristique et technologique. Solutions digitales optimisées pour les entreprises antiboises avec SEO local.',
  keywords: ['développeur web Antibes', 'création site web Antibes', 'freelance web Antibes', 'développeur Sophia Antipolis', 'site internet nautique Antibes', 'création site e-commerce Antibes', 'développeur application web Antibes', 'site web port Antibes', 'développeur tech Antibes'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-antibes',
  },
  openGraph: {
    title: 'Développeur Web Antibes | Expert Nautique & Tech | Sites & Applications sur-mesure',
    description: 'Développeur web spécialisé pour Antibes et Sophia Antipolis. Création de sites web et applications pour secteurs nautique, touristique et technologique. Solutions digitales optimisées pour les entreprises antiboises avec SEO local.',
    url: 'https://killiandoubre.com/developpeur-web-antibes',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Antibes',
  description: 'Services de développement web sur-mesure pour Antibes : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels antibois.',
  slug: 'developpeur-web-antibes',
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
      question: 'Quels types de sites web développez-vous pour Antibes ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels antibois : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Antibes ?',
      answer: 'Le coût d\'un site web à Antibes varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Antibes ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local antibois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Antibes et ses environs.'
    }
  ]
}

export default function DeveloppeurWebAntibesPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception de sites web sur-mesure pour les entreprises et professionnels d'Antibes. Des sites vitrines élégants, responsive et optimisés pour transformer vos visiteurs en clients fidèles.",
      features: [
        "Design contemporain adapté à votre identité",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Antibes",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de sites e-commerce efficaces pour les commerçants et entrepreneurs antibois. Des boutiques en ligne sécurisées qui maximisent vos ventes et fidélisent votre clientèle.",
      features: [
        "Interface utilisateur intuitive et attrayante",
        "Gestion simplifiée des produits et des stocks",
        "Paiements sécurisés et options de livraison flexibles",
        "Stratégies d'optimisation des conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Antibes et dans les Alpes-Maritimes.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs fluides et performantes",
        "Systèmes robustes et évolutifs",
        "Intégration harmonieuse avec vos outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour renforcer votre présence sur Google à Antibes et ses environs. Attirez davantage de clients locaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale ciblée sur Antibes",
        "Optimisation Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Connaissance Approfondie du Marché Antibois",
      description: "Ma compréhension du tissu économique d'Antibes et de sa région me permet de créer des solutions web parfaitement adaptées aux attentes des utilisateurs locaux. Je saisis les particularités du marché antibois et les opportunités web qu'il présente pour votre entreprise."
    },
    {
      title: "Suivi Personnalisé & Accessibilité",
      description: "En tant que développeur web freelance basé à Nice, je reste facilement accessible pour les professionnels d'Antibes. Cette proximité géographique facilite les échanges et garantit une communication efficace tout au long de votre projet web."
    },
    {
      title: "Solutions Web Adaptées aux Entreprises Antiboises",
      description: "Chaque entreprise à Antibes a ses spécificités, c'est pourquoi je conçois des solutions entièrement personnalisées qui répondent précisément à vos objectifs. Je développe des créations originales qui vous distinguent de vos concurrents locaux."
    },
    {
      title: "Assistance Technique & Évolution Continue",
      description: "Je vous offre un support technique réactif et un accompagnement continu pour votre site ou application. Je peux intervenir rapidement pour résoudre tout problème technique ou former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const antibesBusinessSectors = [
    {
      icon: "⛵",
      title: "Nautisme & Activités Maritimes",
      description: "Sites web et applications pour ports de plaisance, locations de bateaux, écoles de voile et services nautiques à Antibes. Solutions optimisées pour la réservation en ligne, la présentation de vos services et l'attraction d'une clientèle internationale."
    },
    {
      icon: "🏨",
      title: "Hôtellerie & Tourisme",
      description: "Présence web efficace pour hôtels, restaurants, locations saisonnières et prestataires touristiques antibois. Sites vitrines et plateformes de réservation adaptés pour valoriser votre établissement et attirer des visiteurs toute l'année."
    },
    {
      icon: "🏢",
      title: "Commerces & Services Locaux",
      description: "Solutions web pour commerces, artisans et prestataires de services à Antibes. Sites web et e-commerce conçus pour renforcer votre visibilité locale et développer votre clientèle de proximité."
    },
    {
      icon: "🏠",
      title: "Immobilier & Résidentiel",
      description: "Plateformes immobilières et sites pour agences, promoteurs et architectes à Antibes. Solutions permettant de mettre en valeur vos biens et projets avec des fonctionnalités avancées de recherche et de visualisation."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Découverte",
      description: "Je débute par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte antibois."
    },
    {
      number: "02",
      title: "Planification & Design",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous travaillons ensemble pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent exactement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Programmation",
      description: "Je développe votre solution avec les technologies les plus appropriées, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est méticuleusement codée et testée pour garantir fiabilité et performance."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs antibois."
    },
    {
      number: "05",
      title: "Déploiement & Accompagnement",
      description: "Après la mise en ligne, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const antibesDigitalStats = [
    {
      figure: "85%",
      description: "des consommateurs à Antibes consultent internet avant de faire un achat local"
    },
    {
      figure: "71%",
      description: "des recherches locales sur mobile à Antibes conduisent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "64%",
      description: "des entreprises antiboises considèrent leur site web comme un outil essentiel de développement commercial"
    },
    {
      figure: "93%",
      description: "des utilisateurs à Antibes forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Antibes', href: '/developpeur-web-antibes', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Antibes</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et professionnels d'<strong>Antibes</strong>. Je crée des sites web et applications sur-mesure qui répondent parfaitement aux besoins spécifiques du marché antibois.
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
                    Explorer mes services
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex flex-col gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="rounded-full overflow-hidden w-48 h-48 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                      <OptimizedImage
                        src="/photo_close.jpg"
                        alt="Killian DOUBRE - Développeur Web Freelance pour Antibes"
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
                          <p className="text-sm text-gray-600">Antibes & Région</p>
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
                Services de Développement Web pour Antibes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'offre une gamme complète de services de développement web pour les entreprises et professionnels d'Antibes.
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

        {/* Secteurs d'activité à Antibes Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Antiboises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Antibes et dans les Alpes-Maritimes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {antibesBusinessSectors.map((sector, index) => (
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
                L'Importance du Web à Antibes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises antiboises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {antibesDigitalStats.map((stat, index) => (
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
                Collaborer avec moi présente de nombreux avantages pour votre projet web à Antibes.
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
                Une approche structurée et collaborative pour transformer votre vision en une solution web efficace.
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

        {/* Antibes Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Antibes : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web au service des professionnels d'Antibes, je comprends les particularités du marché local et les besoins des entreprises de la région.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visibilité Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché antibois vous permet d'attirer des clients locaux et de vous distinguer de vos concurrents. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et valorisent votre ancrage à Antibes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration Efficace
                </h3>
                <p className="text-gray-600">
                  Travailler avec un développeur web proche d'Antibes facilite la communication et la collaboration, permettant de mieux cerner vos besoins et d'adapter rapidement le projet selon vos retours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Développement Web à Antibes
                </h3>
                <p className="text-gray-600">
                  Le marché web à Antibes offre d'importantes perspectives de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet d'atteindre de nouveaux clients et d'étendre votre activité dans la région.
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
