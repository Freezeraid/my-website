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
  title: 'Développeur Web Digne-les-Bains | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance à Digne-les-Bains spécialisé en création de sites web, e-commerce et applications. Solutions Web adaptées aux entreprises et commerces dignois, avec accompagnement personnalisé.',
  keywords: ['développeur web Digne-les-Bains', 'création site web Digne-les-Bains', 'freelance web Digne-les-Bains', 'développeur 04', 'site internet Digne-les-Bains', 'création site e-commerce Digne-les-Bains', 'développeur application web Digne-les-Bains', 'agence web Digne-les-Bains', 'refonte site web Digne-les-Bains'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-digne-les-bains',
  },
  openGraph: {
    title: 'Développeur Web Digne-les-Bains | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance à Digne-les-Bains spécialisé en création de sites web, e-commerce et applications. Solutions Web adaptées aux entreprises et commerces dignois, avec accompagnement personnalisé.',
    url: 'https://killiandoubre.com/developpeur-web-digne-les-bains',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Digne-les-Bains',
  description: 'Services de développement web sur-mesure à Digne-les-Bains : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels de la préfecture des Alpes-de-Haute-Provence.',
  slug: 'developpeur-web-digne-les-bains',
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
      question: 'Quels types de sites web développez-vous à Digne-les-Bains ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Digne-les-Bains : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques de chaque secteur d\'activité local, avec une attention particulière aux commerces, artisans, prestataires touristiques et institutions de la préfecture des Alpes-de-Haute-Provence.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Digne-les-Bains ?',
      answer: 'Le coût d\'un site web à Digne-les-Bains varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis détaillé et transparent après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour les entreprises de Digne-les-Bains ?',
      answer: 'Oui, je propose des services complets d\'optimisation pour le référencement local à Digne-les-Bains, essentiels pour les entreprises souhaitant attirer une clientèle de proximité. Cela inclut l\'optimisation de votre site pour les recherches locales, la configuration et l\'optimisation de votre profil Google My Business, la création de contenu pertinent pour votre marché local et des stratégies spécifiques pour améliorer votre visibilité dans les résultats de recherche à Digne-les-Bains et dans les Alpes-de-Haute-Provence.'
    }
  ]
}

export default function DeveloppeurWebDigneLesbainsPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et création de sites web sur-mesure pour les entreprises et professionnels de Digne-les-Bains. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et valoriser votre activité locale dans la préfecture des Alpes-de-Haute-Provence.",
      features: [
        "Design contemporain adapté à l'identité de votre entreprise dignoise",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local à Digne-les-Bains",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce performantes pour les commerçants, artisans et producteurs de Digne-les-Bains. Des boutiques en ligne attractives et fonctionnelles qui valorisent vos produits et services locaux, idéales pour étendre votre marché au-delà des frontières des Alpes-de-Haute-Provence.",
      features: [
        "Interface utilisateur intuitive et esthétique",
        "Gestion simplifiée des produits et des stocks",
        "Solutions de paiement sécurisées et options de livraison adaptées",
        "Stratégies d'optimisation des conversions adaptées à votre marché"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes personnalisées pour mettre en ligne vos services et optimiser vos processus métier à Digne-les-Bains, adaptées aux spécificités de votre secteur d'activité et aux particularités du marché local.",
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
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Digne-les-Bains. Attirez plus de clients locaux et de visiteurs grâce à une stratégie SEO adaptée à votre zone d'activité dans la préfecture des Alpes-de-Haute-Provence.",
      features: [
        "Stratégie SEO ciblée sur Digne-les-Bains et sa région",
        "Optimisation Google My Business pour chaque établissement",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise du Marché Dignois",
      description: "Ma compréhension approfondie de l'écosystème web de Digne-les-Bains me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs locaux. Je comprends les spécificités du tissu économique de cette préfecture des Alpes-de-Haute-Provence et les opportunités numériques qu'il offre, entre thermalisme, tourisme géologique, administration et commerce local."
    },
    {
      title: "Accompagnement Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, je propose mes services aux entreprises de Digne-les-Bains avec une approche personnalisée. Cette relation directe garantit une communication fluide et une solution web parfaitement alignée avec vos objectifs commerciaux et les particularités de votre territoire entre Préalpes et Haute-Provence."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Dignoises",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise à Digne-les-Bains. J'évite les templates génériques pour créer des plateformes originales qui vous distinguent dans le paysage économique local et reflètent l'identité alpine et provençale de votre activité."
    },
    {
      title: "Support Technique & Maintenance Réactive",
      description: "Je vous propose un support technique réactif et une maintenance continue de votre site ou application. Mon intervention rapide garantit une présence web toujours opérationnelle, essentielle pour maintenir la confiance de vos clients à Digne-les-Bains et optimiser votre visibilité en ligne dans cette région où la connectivité peut parfois représenter un défi."
    }
  ]

  const businessSectors = [
    {
      icon: "💧",
      title: "Thermalisme & Bien-être",
      description: "Sites web et applications pour établissements thermaux, centres de bien-être et prestataires de soins à Digne-les-Bains. Solutions optimisées pour valoriser votre offre et attirer des curistes et visiteurs tout au long de l'année dans cette ville réputée pour ses eaux thermales et ses établissements de santé."
    },
    {
      icon: "🏔️",
      title: "Tourisme & Géotourisme",
      description: "Présence web attractive pour hébergements touristiques, musées, sites géologiques et prestataires d'activités de Digne-les-Bains. Sites vitrines et systèmes de réservation adaptés pour mettre en valeur votre offre auprès des visiteurs attirés par la Réserve Géologique de Haute-Provence et les richesses naturelles environnantes."
    },
    {
      icon: "🌿",
      title: "Produits Locaux & Artisanat",
      description: "Plateformes web pour producteurs, artisans et créateurs de Digne-les-Bains et sa région. Solutions permettant de mettre en valeur votre savoir-faire et vos produits avec des fonctionnalités avancées adaptées à la vente directe et à la valorisation des produits du terroir bas-alpin, notamment la lavande et les produits dérivés."
    },
    {
      icon: "🏢",
      title: "Services & Administration",
      description: "Solutions web pour institutions, services publics et prestataires de services de Digne-les-Bains. Sites web et plateformes facilitant l'accès à l'information, la communication avec les usagers et la promotion des initiatives locales, essentielles pour cette préfecture administrative des Alpes-de-Haute-Provence."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques à Digne-les-Bains. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte local de cette préfecture des Alpes-de-Haute-Provence."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web sur-mesure et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de votre clientèle dignoise."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement programmée et testée pour garantir une expérience utilisateur optimale et une parfaite adaptation à votre marché local."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs de Digne-les-Bains et des visiteurs de la région."
    },
    {
      number: "05",
      title: "Lancement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à l'évolution de vos besoins et du marché local."
    }
  ]

  const digitalStats = [
    {
      figure: "79%",
      description: "des consommateurs à Digne-les-Bains recherchent des entreprises locales en ligne avant de faire un achat ou de réserver une prestation"
    },
    {
      figure: "71%",
      description: "des recherches locales sur mobile à Digne-les-Bains aboutissent à une visite en magasin ou à un contact direct dans les 24 heures"
    },
    {
      figure: "65%",
      description: "des entreprises dignoises considèrent que leur site web est essentiel pour leur développement commercial et leur visibilité"
    },
    {
      figure: "87%",
      description: "des touristes et curistes préparent leur séjour à Digne-les-Bains en consultant les sites web des hébergements, établissements thermaux et activités avant de réserver"
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
                { label: 'Développeur Web Freelance à Digne-les-Bains', href: '/developpeur-web-digne-les-bains', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digne-les-Bains</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et professionnels de <strong>Digne-les-Bains</strong> pour concevoir des sites internet et applications sur-mesure adaptés aux besoins du marché local. Mon approche combine expertise technique, compréhension des enjeux territoriaux et accompagnement personnalisé pour la réussite de votre projet web dans la préfecture des Alpes-de-Haute-Provence.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Digne-les-Bains"
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
                          <p className="text-sm text-gray-600">Digne-les-Bains</p>
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
                Services de Développement Web à Digne-les-Bains
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Digne-les-Bains.
                Chaque solution est élaborée sur-mesure pour répondre à vos besoins spécifiques et renforcer votre présence sur le marché local et au-delà.
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

        {/* Secteurs d'activité Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Dignoises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Digne-les-Bains, en tenant compte des spécificités locales et des enjeux propres à cette préfecture alpine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessSectors.map((sector, index) => (
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
                L'Importance du Web à Digne-les-Bains
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Digne-les-Bains, particulièrement dans cette ville qui constitue un pôle administratif, thermal et touristique majeur des Alpes-de-Haute-Provence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {digitalStats.map((stat, index) => (
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
                Une approche méthodique et collaborative pour transformer votre vision en une solution web performante et adaptée au marché dignois et à ses spécificités.
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

        {/* Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Digne-les-Bains : Expertise Locale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services à Digne-les-Bains, je comprends les spécificités du marché local et les besoins des entreprises de cette préfecture qui constitue le cœur administratif et touristique des Alpes-de-Haute-Provence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Locale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché dignois vous permet d'attirer des clients locaux et des visiteurs, tout en vous démarquant de la concurrence. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage territorial dans cette préfecture des Alpes-de-Haute-Provence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Basé à Nice, je travaille efficacement avec les entreprises de Digne-les-Bains grâce à une méthodologie éprouvée de collaboration à distance. Cette approche flexible permet de maintenir une communication fluide tout en optimisant les délais de réalisation de votre projet web, malgré la distance géographique.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Valorisation du Patrimoine Thermal et Géologique
                </h3>
                <p className="text-gray-600">
                  Digne-les-Bains, avec ses établissements thermaux et sa Réserve Géologique de Haute-Provence, possède un patrimoine naturel exceptionnel. 
                  Je développe des solutions web qui mettent en valeur ces particularités, notamment en termes de design, d'imagerie et de contenu, pour vous permettre de tirer pleinement parti de l'attractivité de votre territoire et de ses atouts uniques.
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
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité pour les entreprises de Digne-les-Bains.
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

                {/* Contact Section */}
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}
