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
  title: 'Développeur Web Île-de-France | Création de Sites & Applications | Tech & Innovation',
  description: 'Création de sites web et applications pour entreprises franciliennes dans les secteurs tech, innovation, grands groupes et institutions. Solutions digitales adaptées à la région capitale avec expertise en développement multilingue et plateformes collaboratives.',
  keywords: ['développeur web Île-de-France', 'création site web Île-de-France', 'freelance web région parisienne', 'site internet tech Île-de-France', 'création site e-commerce francilien', 'développeur application La Défense', 'site web institution Île-de-France', 'développeur innovation Saclay', 'SEO local Île-de-France'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-ile-de-france',
  },
  openGraph: {
    title: 'Développeur Web Île-de-France | Création de Sites & Applications | Tech & Innovation',
    description: 'Création de sites web et applications pour entreprises franciliennes dans les secteurs tech, innovation, grands groupes et institutions. Solutions digitales adaptées à la région capitale avec expertise en développement multilingue et plateformes collaboratives.',
    url: 'https://killiandoubre.com/developpeur-web-ile-de-france',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour l\'Île-de-France',
  description: 'Services de développement web sur-mesure pour l\'Île-de-France : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels de la région francilienne.',
  slug: 'developpeur-web-ile-de-france',
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
      question: 'Quels types de sites web développez-vous pour les entreprises franciliennes ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels d\'Île-de-France : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché francilien, qu\'il s\'agisse de startups innovantes, de grands groupes, d\'institutions ou de commerces locaux.'
    },
    {
      question: 'Combien coûte la création d\'un site web pour une entreprise en Île-de-France ?',
      answer: 'Le coût d\'un site web pour l\'Île-de-France varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse approfondie de votre projet et de vos objectifs commerciaux.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour l\'Île-de-France ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché francilien, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant l\'Île-de-France et ses différents départements, pour maximiser votre visibilité auprès de la clientèle locale.'
    }
  ]
}

export default function DeveloppeurWebIleDeFrancePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception de sites web sur-mesure pour les entreprises franciliennes. Des sites vitrines modernes, responsive et optimisés pour transformer vos visiteurs en clients et renforcer votre présence digitale dans toute l'Île-de-France.",
      features: [
        "Design contemporain adapté à votre identité de marque",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local en Île-de-France",
        "Intégration de fonctionnalités personnalisées selon votre secteur"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Développement de plateformes e-commerce performantes pour les commerçants et entrepreneurs franciliens. Des boutiques en ligne sécurisées qui maximisent vos conversions et étendent votre zone de chalandise au-delà de votre implantation physique.",
      features: [
        "Interface utilisateur intuitive et parcours d'achat optimisé",
        "Gestion efficace des produits, stocks et commandes",
        "Solutions de paiement sécurisées et options de livraison adaptées",
        "Stratégies marketing pour augmenter vos conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Création d'applications web et plateformes innovantes pour digitaliser vos services et optimiser vos processus métier dans toute la région Île-de-France, de Paris à la grande couronne.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs intuitives et performantes",
        "Architecture évolutive et sécurisée",
        "Intégration avec vos systèmes d'information existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Régionale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google dans toute l'Île-de-France. Attirez davantage de clients locaux grâce à une stratégie SEO ciblée sur la région francilienne.",
      features: [
        "Stratégie SEO locale adaptée aux différents territoires franciliens",
        "Optimisation Google My Business pour chaque établissement",
        "Création de contenu pertinent pour votre marché régional",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Compréhension du Marché Francilien",
      description: "Ma connaissance approfondie du marché web francilien et de ses spécificités me permet de créer des solutions parfaitement adaptées aux attentes des utilisateurs de la région. Je comprends les particularités des différents territoires d'Île-de-France et les opportunités numériques qu'ils présentent."
    },
    {
      title: "Collaboration à Distance Efficace",
      description: "En tant que développeur web freelance basé à Nice travaillant pour l'Île-de-France, je vous propose un accompagnement personnalisé grâce à une méthodologie de travail à distance éprouvée. Cette approche garantit une communication fluide et une parfaite adéquation entre votre vision et la solution développée."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Franciliennes",
      description: "Chaque entreprise francilienne a ses propres défis et objectifs. C'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos besoins spécifiques et vous permettent de vous démarquer dans un marché régional hautement compétitif."
    },
    {
      title: "Support Technique & Maintenance Continue",
      description: "Je vous offre un support technique réactif et une maintenance continue de votre site ou application, quelle que soit votre localisation en Île-de-France. Grâce aux technologies de maintenance à distance, je peux intervenir rapidement pour résoudre tout problème technique ou faire évoluer votre solution web."
    }
  ]

  const idfBusinessSectors = [
    {
      icon: "🏢",
      title: "Tech & Innovation",
      description: "Solutions web pour startups, scale-ups et entreprises tech de l'Île-de-France. Applications et plateformes innovantes pour concrétiser vos concepts disruptifs et accélérer votre croissance dans les pôles d'innovation franciliens comme Paris-Saclay, Station F ou La Défense."
    },
    {
      icon: "🏭",
      title: "Grands Groupes & Institutions",
      description: "Présence web efficace pour grands groupes, institutions et administrations franciliennes. Sites et applications conçus pour répondre aux exigences spécifiques des grandes organisations, avec une attention particulière à la sécurité et à l'évolutivité."
    },
    {
      icon: "🛍️",
      title: "Commerce & Services",
      description: "Sites web et applications pour commerces, artisans et prestataires de services en Île-de-France. Solutions optimisées pour attirer une clientèle locale, avec géolocalisation et fonctionnalités adaptées à la densité commerciale francilienne."
    },
    {
      icon: "🎓",
      title: "Éducation & Recherche",
      description: "Plateformes web pour établissements d'enseignement, laboratoires et centres de recherche franciliens. Solutions permettant de valoriser vos programmes, travaux de recherche et d'améliorer l'expérience numérique de vos étudiants et chercheurs."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Découverte",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte francilien, même à distance."
    },
    {
      number: "02",
      title: "Stratégie & Conception",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous collaborons étroitement via visioconférence pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre solution avec les technologies les plus adaptées à vos besoins, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est soigneusement codée et testée pour garantir performance et fiabilité."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs franciliens."
    },
    {
      number: "05",
      title: "Déploiement & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const idfDigitalStats = [
    {
      figure: "92%",
      description: "des consommateurs en Île-de-France recherchent des entreprises locales en ligne avant de faire un achat"
    },
    {
      figure: "79%",
      description: "des recherches locales sur mobile en Île-de-France aboutissent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "75%",
      description: "des entreprises franciliennes considèrent que leur site web est crucial pour leur développement commercial"
    },
    {
      figure: "95%",
      description: "des utilisateurs en Île-de-France forment leur première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour l\'Île-de-France', href: '/developpeur-web-ile-de-france', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance pour <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">l'Île-de-France</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong> proposant mes services aux entreprises franciliennes. Je conçois des sites web et applications sur-mesure avec une expertise technique pointue et un accompagnement personnalisé pour votre projet web, que vous soyez à Paris ou dans toute la région Île-de-France.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour l'Île-de-France"
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
                          <h3 className="font-semibold text-gray-900">SEO Régional</h3>
                          <p className="text-sm text-gray-600">Île-de-France</p>
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
                Services de Développement Web pour l'Île-de-France
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'offre une gamme complète de services de développement web pour les entreprises et professionnels franciliens.
                Chaque solution est élaborée sur-mesure pour répondre à vos exigences spécifiques et vous démarquer sur le marché régional.
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

        {/* Secteurs d'activité en Île-de-France Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Franciliennes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité dans toute l'Île-de-France, de Paris à la grande couronne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {idfBusinessSectors.map((sector, index) => (
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
                L'Importance du Web en Île-de-France
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises franciliennes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {idfDigitalStats.map((stat, index) => (
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
                Une approche structurée et collaborative pour transformer votre vision en une solution web performante, même à distance.
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

        {/* Île-de-France Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web pour l'Île-de-France : Expertise Régionale
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services aux entreprises franciliennes, je comprends les spécificités du marché régional et les besoins des entreprises dans les différents territoires d'Île-de-France.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence Web Régionale
                </h3>
                <p className="text-gray-600">
                  Une présence web optimisée pour le marché francilien vous permet d'attirer des clients locaux et de vous démarquer dans un environnement hautement compétitif. 
                  Je développe des sites web qui ciblent spécifiquement les recherches locales et mettent en valeur votre ancrage territorial, que vous soyez à Paris, en petite ou grande couronne.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration à Distance Efficace
                </h3>
                <p className="text-gray-600">
                  Grâce aux outils de communication modernes, la distance n'est plus un obstacle. Je vous offre une collaboration fluide et efficace, avec des points réguliers par visioconférence et un suivi transparent de l'avancement de votre projet, quel que soit votre emplacement en Île-de-France.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Croissance Web en Île-de-France
                </h3>
                <p className="text-gray-600">
                  Le marché web francilien, premier bassin économique français, offre d'immenses opportunités de croissance pour les entreprises locales. 
                  Un site web ou une application performante vous permet de toucher de nouveaux clients et d'étendre votre activité dans toute la région et au-delà.
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
