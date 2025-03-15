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
  title: 'Développeur Web à Sollies-Pont | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance originaire de Sollies-Pont, spécialisé en création de sites web, applications et e-commerce. Solutions web personnalisées pour les entreprises locales avec une connaissance approfondie du territoire varois.',
  keywords: ['développeur web Sollies-Pont', 'création site web Sollies-Pont', 'freelance web Sollies-Pont', 'développeur Sollies-Pont', 'site internet Sollies-Pont', 'création site e-commerce Sollies-Pont', 'développeur application web Sollies-Pont', 'agence web Sollies-Pont', 'refonte site web Sollies-Pont'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-sollies-pont',
  },
  openGraph: {
    title: 'Développeur Web à Sollies-Pont | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance originaire de Sollies-Pont, spécialisé en création de sites web, applications et e-commerce. Solutions web personnalisées pour les entreprises locales avec une connaissance approfondie du territoire varois.',
    url: 'https://killiandoubre.com/developpeur-web-sollies-pont',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Sollies-Pont',
  description: 'Services de développement web sur-mesure pour Sollies-Pont : création de sites web, e-commerce, applications web et optimisation SEO pour entreprises et professionnels locaux.',
  slug: 'developpeur-web-sollies-pont',
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
      question: 'Quels types de sites web développez-vous pour Sollies-Pont ?',
      answer: 'Je développe tous types de sites web pour les entreprises et professionnels de Sollies-Pont : sites vitrines, e-commerce, portfolios, blogs, applications web et plateformes SaaS adaptés aux besoins spécifiques du marché local.'
    },
    {
      question: 'Quel est le tarif pour la création d\'un site web à Sollies-Pont ?',
      answer: 'Les tarifs varient selon la complexité et les fonctionnalités requises. Les sites vitrines commencent à partir de 1500€, les boutiques e-commerce à partir de 3000€, et les applications web personnalisées à partir de 5000€. Je vous fournis un devis détaillé après analyse de votre projet.'
    },
    {
      question: 'Proposez-vous des services de référencement local pour Sollies-Pont ?',
      answer: 'Absolument, je propose des services d\'optimisation SEO spécifiquement adaptés au marché local de Sollies-Pont et sa région, incluant le référencement Google My Business, l\'optimisation pour les recherches géolocalisées et les stratégies de contenu ciblant le Var.'
    }
  ]
}

export default function DeveloppeurWebSolliesPontPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et professionnels de Sollies-Pont. Des vitrines web modernes, adaptatives et optimisées pour transformer vos visiteurs en clients fidèles.",
      features: [
        "Design contemporain aligné avec votre identité",
        "Parfaitement responsive sur tous les appareils",
        "Optimisé pour le référencement local à Sollies-Pont",
        "Intégration de fonctionnalités personnalisées"
      ]
    },
    {
      icon: "🛒",
      title: "E-commerce & Boutiques en Ligne",
      description: "Création de plateformes e-commerce robustes pour les commerçants et entrepreneurs de Sollies-Pont. Des boutiques en ligne sécurisées et intuitives qui maximisent vos ventes et fidélisent votre clientèle.",
      features: [
        "Expérience d'achat fluide et engageante",
        "Gestion simplifiée des produits et inventaires",
        "Solutions de paiement sécurisées et multiples options logistiques",
        "Stratégies d'optimisation des conversions"
      ]
    },
    {
      icon: "📱",
      title: "Applications Web & Plateformes",
      description: "Développement d'applications web et plateformes personnalisées pour mettre en ligne vos services et optimiser vos processus métier à Sollies-Pont et dans le Var.",
      features: [
        "Développement full-stack avec technologies de pointe",
        "Interfaces utilisateurs fluides et ergonomiques",
        "Architecture sécurisée et évolutive",
        "Intégration harmonieuse avec vos systèmes existants"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Visibilité Locale",
      description: "Optimisation du référencement naturel pour renforcer votre présence web à Sollies-Pont et dans le Var. Attirez davantage de clients locaux grâce à une stratégie SEO ciblée.",
      features: [
        "Stratégie SEO locale focalisée sur Sollies-Pont",
        "Optimisation complète Google My Business",
        "Production de contenu pertinent pour votre marché local",
        "Analyse et amélioration continue des performances"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Connaissance Approfondie de Sollies-Pont",
      description: "Originaire de Sollies-Pont où j'ai grandi, je possède une compréhension intime du tissu économique local et des spécificités du marché. Cette connaissance me permet de créer des solutions web parfaitement adaptées aux attentes des utilisateurs de la région et aux opportunités web qu'elle offre."
    },
    {
      title: "Accompagnement Personnalisé & Expertise",
      description: "Bien que basé à Nice, mes racines à Sollies-Pont me permettent d'offrir un accompagnement qui allie expertise technique et compréhension profonde des enjeux locaux. Cette double perspective garantit des solutions web qui répondent précisément aux besoins spécifiques des entreprises varoises."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Locales",
      description: "Chaque entreprise à Sollies-Pont possède son identité unique et ses défis spécifiques. Je développe des solutions entièrement personnalisées qui reflètent authentiquement votre activité et vous distinguent efficacement de vos concurrents locaux, avec une attention particulière aux particularités du marché varois."
    },
    {
      title: "Support Technique & Maintenance Continue",
      description: "Je vous offre un support technique réactif et une maintenance régulière de votre site ou application. Mon engagement envers ma ville natale se traduit par un suivi attentif et des mises à jour constantes pour garantir la performance et la sécurité de votre présence web."
    }
  ]

  const solliesPontBusinessSectors = [
    {
      icon: "🍇",
      title: "Agriculture & Produits Locaux",
      description: "Sites web et plateformes e-commerce pour producteurs, domaines viticoles et commerces de produits du terroir à Sollies-Pont, connue pour ses figues. Solutions optimisées pour valoriser vos produits locaux et développer votre clientèle au-delà du territoire varois."
    },
    {
      icon: "🏪",
      title: "Commerces & Artisanat Local",
      description: "Présence web efficace pour commerçants, artisans et prestataires de services à Sollies-Pont. Sites vitrines et boutiques en ligne adaptés aux besoins des entreprises locales pour renforcer leur visibilité et fidéliser leur clientèle."
    },
    {
      icon: "🏡",
      title: "Immobilier & Construction",
      description: "Solutions web pour agences immobilières, constructeurs et architectes à Sollies-Pont. Plateformes permettant de mettre en valeur vos biens et projets avec des fonctionnalités avancées de recherche et de visualisation adaptées au marché immobilier varois."
    },
    {
      icon: "🍽️",
      title: "Restauration & Tourisme",
      description: "Sites web attractifs pour restaurants, hébergements touristiques et activités de loisirs à Sollies-Pont. Solutions web qui valorisent votre offre et facilitent les réservations, contribuant au développement touristique de cette charmante commune du Var."
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
                { label: 'Développeur Web Freelance à Sollies-Pont', href: '/developpeur-web-sollies-pont', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sollies-Pont</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance <strong>originaire de Sollies-Pont</strong> où j'ai grandi, désormais basé à Nice, je crée des sites web et applications sur-mesure pour les entreprises et professionnels du Var. Expertise locale, solutions personnalisées et connaissance approfondie du territoire pour votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance originaire de Sollies-Pont"
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
                          <p className="text-sm text-gray-600">Var & Région</p>
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
                Services de Développement Web pour Sollies-Pont
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et professionnels de Sollies-Pont et du Var.
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

        {/* Secteurs d'activité à Sollies-Pont Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Entreprises de Sollies-Pont
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Sollies-Pont et dans le Var.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solliesPontBusinessSectors.map((sector, index) => (
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

        {/* Avantages Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi me choisir pour votre projet web ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Collaborer avec moi offre de nombreux avantages pour votre projet web à Sollies-Pont.
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web à Sollies-Pont ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins de votre entreprise.
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
