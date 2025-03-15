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
  title: 'Développeur Web à Mandelieu-la-Napoule | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Mandelieu-la-Napoule spécialisé en création de sites web, e-commerce et applications. Solutions numériques sur-mesure pour entreprises et professionnels mandolociens.',
  keywords: ['développeur web Mandelieu-la-Napoule', 'création site web Mandelieu-la-Napoule', 'freelance web Mandelieu-la-Napoule', 'développeur Mandelieu-la-Napoule', 'site internet Mandelieu-la-Napoule', 'création site e-commerce Mandelieu-la-Napoule', 'développeur application web Mandelieu-la-Napoule', 'agence web Mandelieu-la-Napoule', 'refonte site web Mandelieu-la-Napoule'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-mandelieu-la-napoule',
  },
  openGraph: {
    title: 'Développeur Web à Mandelieu-la-Napoule | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Mandelieu-la-Napoule spécialisé en création de sites web, e-commerce et applications. Solutions numériques sur-mesure pour entreprises et professionnels mandolociens.',
    url: 'https://killiandoubre.com/developpeur-web-mandelieu-la-napoule',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Mandelieu-la-Napoule',
  description: 'Services de développement web sur-mesure pour Mandelieu-la-Napoule : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels mandolociens.',
  slug: 'developpeur-web-mandelieu-la-napoule',
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
      question: 'Quels types de sites web développez-vous à Mandelieu-la-Napoule ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels mandolociens : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Mandelieu-la-Napoule ?',
      answer: 'Le coût d\'un site web à Mandelieu-la-Napoule varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Mandelieu-la-Napoule ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local mandolocien, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Mandelieu-la-Napoule et ses environs.'
    }
  ]
}

export default function DeveloppeurWebMandelieuLaNapoulePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Réalisation de sites web sur-mesure pour les entreprises et professionnels de Mandelieu-la-Napoule. Des sites vitrines modernes, responsive et optimisés pour valoriser votre image et renforcer votre présence en ligne.",
      features: [
        "Design élégant adapté à l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Mandelieu-la-Napoule",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de sites e-commerce performants pour les commerçants et entrepreneurs mandolociens. Des boutiques en ligne sécurisées qui dynamisent vos ventes et offrent une expérience d'achat optimale.",
      features: [
        "Interface utilisateur intuitive et conviviale",
        "Gestion simplifiée des produits et des inventaires",
        "Paiements sécurisés et options de livraison personnalisables",
        "Stratégies d'optimisation des conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes sur-mesure pour digitaliser vos services et optimiser vos processus métier à Mandelieu-la-Napoule et dans les Alpes-Maritimes.",
      features: [
        "Développement full-stack avec technologies innovantes",
        "Interfaces utilisateurs fluides et ergonomiques",
        "Systèmes sécurisés et évolutifs",
        "Intégration fluide avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Mandelieu-la-Napoule et ses environs. Attirez davantage de clients locaux grâce à une stratégie SEO personnalisée.",
      features: [
        "Stratégie SEO locale ciblée sur Mandelieu-la-Napoule",
        "Optimisation Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Mandolocien",
      description: "Ma compréhension du tissu économique de Mandelieu-la-Napoule et de sa région me permet de créer des solutions web parfaitement adaptées aux attentes des utilisateurs locaux. J'analyse les spécificités du marché mandolocien et les opportunités web qu'il présente pour votre entreprise."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, je suis facilement accessible pour les professionnels de Mandelieu-la-Napoule. Cette proximité géographique facilite nos échanges et garantit un suivi efficace tout au long de votre projet web."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Mandolociennes",
      description: "Chaque entreprise à Mandelieu-la-Napoule possède son identité propre, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs. Je crée des sites web uniques qui vous distinguent de vos concurrents locaux."
    },
    {
      title: "Support Technique & Évolution Continue",
      description: "Je vous offre un support technique réactif et un accompagnement continu pour votre site ou application. Je peux intervenir rapidement pour résoudre tout problème technique ou former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const mandolocienBusinessSectors = [
    {
      icon: "⛵",
      title: "Nautisme & Activités Maritimes",
      description: "Sites web et applications pour ports de plaisance, écoles de voile, locations de bateaux et prestataires nautiques à Mandelieu-la-Napoule. Solutions optimisées pour mettre en valeur vos services, faciliter les réservations et attirer une clientèle passionnée."
    },
    {
      icon: "🏨",
      title: "Hôtellerie & Tourisme",
      description: "Présence web efficace pour hôtels, résidences, restaurants et prestataires touristiques mandolociens. Sites vitrines et plateformes de réservation conçus pour valoriser votre établissement et séduire les visiteurs tout au long de l'année."
    },
    {
      icon: "🏢",
      title: "Services aux Entreprises",
      description: "Solutions web pour consultants, agences et prestataires B2B à Mandelieu-la-Napoule. Sites web et plateformes adaptés pour présenter vos services professionnels et générer des leads qualifiés dans votre secteur d'activité."
    },
    {
      icon: "🏌️",
      title: "Golf & Loisirs Premium",
      description: "Plateformes web pour clubs de golf, centres de loisirs et établissements haut de gamme à Mandelieu-la-Napoule. Solutions permettant de mettre en avant l'excellence de vos services et d'optimiser vos processus de réservation."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte mandolocien."
    },
    {
      number: "02",
      title: "Stratégie & Design",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus appropriées, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement codée et testée pour garantir fiabilité et performance."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs mandolociens."
    },
    {
      number: "05",
      title: "Déploiement & Accompagnement",
      description: "Après la mise en ligne, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const mandolocienDigitalStats = [
    {
      figure: "87%",
      description: "des consommateurs à Mandelieu-la-Napoule recherchent des informations en ligne avant d'effectuer un achat local"
    },
    {
      figure: "76%",
      description: "des recherches locales sur mobile à Mandelieu-la-Napoule aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "69%",
      description: "des entreprises mandolociennes considèrent qu'un site web professionnel est essentiel pour leur développement"
    },
    {
      figure: "94%",
      description: "des utilisateurs à Mandelieu-la-Napoule se forgent une première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Mandelieu-la-Napoule', href: '/developpeur-web-mandelieu-la-napoule', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mandelieu-la-Napoule</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, j'accompagne les entreprises et professionnels de <strong>Mandelieu-la-Napoule</strong> dans leurs projets digitaux. Je conçois des sites web et applications sur-mesure qui répondent aux besoins spécifiques du marché mandolocien.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Mandelieu-la-Napoule"
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
                          <p className="text-sm text-gray-600">Mandelieu & Région</p>
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
                Services de Développement Web pour Mandelieu-la-Napoule
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Mandelieu-la-Napoule.
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

        {/* Secteurs d'activité à Mandelieu-la-Napoule Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Mandolociennes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Mandelieu-la-Napoule et dans les Alpes-Maritimes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mandolocienBusinessSectors.map((sector, index) => (
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web à Mandelieu-la-Napoule ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise à Mandelieu-la-Napoule.
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
