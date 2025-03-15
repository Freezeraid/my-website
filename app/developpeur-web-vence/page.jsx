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
  title: 'Développeur Web à Vence | Création de Sites Web & Applications | Freelance',
  description: 'Développeur web freelance pour Vence spécialisé en création de sites web, e-commerce et applications. Solutions numériques sur-mesure pour entreprises et professionnels vençois.',
  keywords: ['développeur web Vence', 'création site web Vence', 'freelance web Vence', 'développeur Vence', 'site internet Vence', 'création site e-commerce Vence', 'développeur application web Vence', 'agence web Vence', 'refonte site web Vence'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-vence',
  },
  openGraph: {
    title: 'Développeur Web à Vence | Création de Sites Web & Applications | Freelance',
    description: 'Développeur web freelance pour Vence spécialisé en création de sites web, e-commerce et applications. Solutions numériques sur-mesure pour entreprises et professionnels vençois.',
    url: 'https://killiandoubre.com/developpeur-web-vence',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance pour Vence',
  description: 'Services de développement web sur-mesure pour Vence : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels vençois.',
  slug: 'developpeur-web-vence',
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
      question: 'Quels types de sites web développez-vous à Vence ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels vençois : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS.'
    },
    {
      question: 'Combien coûte la création d\'un site web à Vence ?',
      answer: 'Le coût d\'un site web à Vence varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les e-commerce à partir de 3000€, et les applications web sur-mesure à partir de 5000€. Je vous propose un devis personnalisé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Vence ?',
      answer: 'Oui, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local vençois, incluant le référencement local Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant Vence et ses environs.'
    }
  ]
}

export default function DeveloppeurWebVencePage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Création de sites web sur-mesure pour les entreprises et professionnels de Vence. Des sites vitrines authentiques, responsive et optimisés pour mettre en valeur votre activité et renforcer votre présence en ligne.",
      features: [
        "Design harmonieux adapté à l'identité de votre entreprise",
        "Parfaitement responsive (mobile, tablette, desktop)",
        "Optimisé pour le référencement local à Vence",
        "Intégration de fonctionnalités spécifiques à votre domaine d'activité"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Développement de sites e-commerce efficaces pour les artisans, commerçants et entrepreneurs vençois. Des boutiques en ligne sécurisées qui augmentent vos ventes et offrent une expérience d'achat fluide.",
      features: [
        "Interface utilisateur intuitive et esthétique",
        "Gestion optimisée des produits et des stocks",
        "Paiements sécurisés et options de livraison personnalisables",
        "Méthodes d'optimisation des taux de conversion"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Conception d'applications web et plateformes personnalisées pour digitaliser vos services et optimiser vos processus métier à Vence et dans les Alpes-Maritimes.",
      features: [
        "Développement full-stack avec technologies actuelles",
        "Interfaces utilisateurs intuitives et réactives",
        "Systèmes fiables et évolutifs",
        "Intégration harmonieuse avec vos outils existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour améliorer votre visibilité sur Google à Vence et ses environs. Attirez davantage de clients locaux grâce à une stratégie SEO adaptée.",
      features: [
        "Stratégie SEO locale ciblée sur Vence",
        "Optimisation Google My Business",
        "Création de contenu pertinent pour votre marché local",
        "Suivi et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Connaissance du Marché Vençois",
      description: "Ma compréhension du tissu économique de Vence et de sa région me permet de créer des solutions web parfaitement adaptées aux attentes des utilisateurs locaux. J'identifie les particularités du marché vençois et les opportunités web qu'il présente pour votre entreprise."
    },
    {
      title: "Suivi Personnalisé & Proximité",
      description: "En tant que développeur web freelance basé à Nice, je suis particulièrement accessible pour les professionnels de Vence. Cette proximité géographique facilite nos échanges et assure un accompagnement efficace tout au long de votre projet web."
    },
    {
      title: "Solutions Adaptées aux Entreprises Vençoises",
      description: "Chaque entreprise à Vence a ses caractéristiques propres, c'est pourquoi je développe des solutions entièrement personnalisées qui répondent précisément à vos objectifs. Je crée des sites web uniques qui vous différencient de vos concurrents locaux."
    },
    {
      title: "Assistance Technique & Évolution Continue",
      description: "Je vous offre un support technique réactif et un accompagnement continu pour votre site ou application. Je peux intervenir rapidement pour résoudre tout problème technique ou former votre équipe à l'utilisation optimale de votre solution web."
    }
  ]

  const vencoisBusinessSectors = [
    {
      icon: "🎨",
      title: "Art & Artisanat",
      description: "Sites web et applications pour artistes, galeries, ateliers d'art et artisans à Vence. Solutions optimisées pour mettre en valeur vos créations, présenter votre savoir-faire et attirer une clientèle sensible à l'art et à l'artisanat de qualité."
    },
    {
      icon: "🏨",
      title: "Tourisme & Hébergement",
      description: "Présence web efficace pour hôtels, chambres d'hôtes, restaurants et prestataires touristiques vençois. Sites vitrines et plateformes de réservation conçus pour valoriser votre établissement et séduire les visiteurs à la recherche d'authenticité."
    },
    {
      icon: "🏢",
      title: "Services aux Entreprises",
      description: "Solutions web pour consultants, agences et prestataires B2B à Vence. Sites web et plateformes adaptés pour présenter vos services professionnels et générer des leads qualifiés dans votre secteur d'activité."
    },
    {
      icon: "🌿",
      title: "Bien-être & Santé",
      description: "Plateformes web pour praticiens de santé, centres de bien-être et thérapeutes à Vence. Solutions permettant de mettre en avant vos services, faciliter les prises de rendez-vous et communiquer efficacement sur votre approche."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Je débute par une analyse approfondie de votre activité, vos objectifs et vos besoins spécifiques. Cette phase d'étude me permet d'identifier les solutions les plus adaptées à votre projet et au contexte vençois."
    },
    {
      number: "02",
      title: "Conception & Design",
      description: "J'élabore une stratégie web personnalisée et crée des maquettes détaillées de votre site ou application. Nous travaillons ensemble pour affiner le design et les fonctionnalités jusqu'à ce qu'ils correspondent parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Programmation",
      description: "Je développe votre solution avec les technologies les plus appropriées, en respectant les standards du web et les meilleures pratiques. Chaque fonctionnalité est méticuleusement codée et testée pour garantir fiabilité et performance."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre site ou application est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, la vitesse de chargement et le référencement local pour maximiser votre visibilité auprès des utilisateurs vençois."
    },
    {
      number: "05",
      title: "Mise en ligne & Accompagnement",
      description: "Après le lancement, je reste à vos côtés pour vous former à l'utilisation de votre solution et vous accompagner dans son évolution. Je propose des services de maintenance et d'amélioration continue pour adapter votre présence web à vos besoins futurs."
    }
  ]

  const vencoisDigitalStats = [
    {
      figure: "85%",
      description: "des consommateurs à Vence consultent internet avant d'effectuer un achat local"
    },
    {
      figure: "73%",
      description: "des recherches locales sur mobile à Vence conduisent à une visite en magasin dans les 24 heures"
    },
    {
      figure: "68%",
      description: "des entreprises vençoises estiment qu'un site web professionnel est crucial pour leur développement"
    },
    {
      figure: "92%",
      description: "des utilisateurs à Vence se forgent une première impression d'une entreprise à partir de son site web"
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
                { label: 'Développeur Web Freelance pour Vence', href: '/developpeur-web-vence', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vence</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, j'accompagne les entreprises et professionnels de <strong>Vence</strong> dans leurs projets digitaux. Je conçois des sites web et applications sur-mesure qui répondent aux besoins spécifiques du marché vençois.
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
                        alt="Killian DOUBRE - Développeur Web Freelance pour Vence"
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
                          <p className="text-sm text-gray-600">Vence & Région</p>
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
                Services de Développement Web pour Vence
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Vence.
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

        {/* Secteurs d'activité à Vence Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises Vençoises
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Vence et dans les Alpes-Maritimes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vencoisBusinessSectors.map((sector, index) => (
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
              Prêt à Développer Votre Projet Web à Vence ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise à Vence.
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
