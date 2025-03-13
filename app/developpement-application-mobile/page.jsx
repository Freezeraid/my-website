import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import OptimizedImage from '../../components/ui/OptimizedImage'
import Loading from '../../components/ui/Loading'
import Breadcrumb from '../../components/ui/Breadcrumb'

const Contact = dynamic(() => import('../../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true
})

export const metadata = {
  title: 'Développement d\'Applications Mobiles | Développeur Web Freelance',
  description: 'Création d\'applications mobiles natives et hybrides pour iOS et Android. Développeur freelance spécialisé en React Native, Flutter et interfaces utilisateur modernes.',
  keywords: ['application mobile', 'développement mobile', 'app iOS', 'app Android', 'React Native', 'Flutter', 'développeur mobile', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-application-mobile',
  },
  openGraph: {
    title: 'Développement d\'Applications Mobiles | Développeur Web Freelance',
    description: 'Création d\'applications mobiles natives et hybrides pour iOS et Android. Développeur freelance spécialisé en React Native, Flutter et interfaces utilisateur modernes.',
    url: 'https://killiandoubre.com/developpement-application-mobile',
  }
}

export default function ApplicationMobilePage() {
  const mobileServices = [
    {
      icon: "📱",
      title: "Applications Mobiles Complètes",
      description: "Développement d'applications mobiles complètes pour iOS et Android. Des solutions performantes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.",
      features: [
        "Applications natives ou cross-platform",
        "Interfaces utilisateur modernes et intuitives",
        "Optimisation des performances"
      ]
    },
    {
      icon: "🔄",
      title: "Applications Hybrides",
      description: "Création d'applications hybrides avec React Native ou Flutter. Une base de code unique pour déployer sur iOS et Android, réduisant les coûts et les délais de développement.",
      features: [
        "Développement cross-platform efficace",
        "Expérience native sur chaque plateforme",
        "Maintenance simplifiée"
      ]
    },
    {
      icon: "🔌",
      title: "Intégrations & API",
      description: "Intégration avec des API et services tiers pour enrichir les fonctionnalités de votre application. Connexion à vos systèmes existants et exploitation des fonctionnalités natives des appareils.",
      features: [
        "Intégration avec vos systèmes backend",
        "Utilisation des capteurs et fonctionnalités natives",
        "Services cloud et synchronisation des données"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise Mobile Spécialisée",
      description: "En tant que développeur freelance spécialisé en applications mobiles, je maîtrise les défis spécifiques du développement sur iOS et Android. Cette expertise ciblée me permet de créer des applications performantes et adaptées aux contraintes mobiles."
    },
    {
      title: "Flexibilité et Réactivité",
      description: "Je vous offre une flexibilité totale dans le développement de votre application mobile. Contrairement aux agences, je peux m'adapter rapidement aux changements de priorités et aux évolutions de votre projet avec une grande réactivité."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre application mobile, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins et une mise en œuvre plus précise de votre vision produit."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs pour une application mobile de haute qualité. Vous bénéficiez d'une solution sur-mesure à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const mobileFeatures = [
    {
      icon: "🔐",
      title: "Authentification & Sécurité",
      description: "Systèmes d'authentification sécurisés avec biométrie (Touch ID, Face ID), authentification sociale et gestion des sessions. Protection des données sensibles et conformité aux normes de sécurité."
    },
    {
      icon: "📍",
      title: "Géolocalisation & Maps",
      description: "Intégration des services de localisation et cartographie (Google Maps, Apple Maps). Fonctionnalités basées sur la localisation, itinéraires, recherche à proximité et notifications géolocalisées."
    },
    {
      icon: "📷",
      title: "Caméra & Médias",
      description: "Utilisation avancée de la caméra pour la capture d'images, la reconnaissance d'objets ou le scan de codes. Gestion des médias, édition d'images et partage de contenu."
    },
    {
      icon: "🔔",
      title: "Notifications & Temps Réel",
      description: "Notifications push personnalisées et ciblées pour engager vos utilisateurs. Fonctionnalités en temps réel avec WebSockets ou Firebase pour une expérience interactive et dynamique."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Découverte & Stratégie",
      description: "Nous explorons en profondeur votre idée d'application, votre public cible et vos objectifs. Cette phase définit les fondations de votre application mobile et sa proposition de valeur unique."
    },
    {
      number: "02",
      title: "Design UX/UI",
      description: "Je conçois l'expérience utilisateur et l'interface de votre application en respectant les guidelines de chaque plateforme. Des wireframes aux maquettes interactives, chaque écran est pensé pour une utilisation intuitive."
    },
    {
      number: "03",
      title: "Développement",
      description: "Je développe votre application avec les technologies les plus adaptées à votre projet (React Native, Flutter, Swift, Kotlin). Chaque fonctionnalité est implémentée avec soin et testée rigoureusement."
    },
    {
      number: "04",
      title: "Tests & Assurance Qualité",
      description: "Votre application est testée sur différents appareils et configurations pour garantir son bon fonctionnement. Tests unitaires, d'intégration et de performance pour une qualité irréprochable."
    },
    {
      number: "05",
      title: "Déploiement & Suivi",
      description: "Je vous accompagne dans le processus de publication sur l'App Store et le Google Play Store. Après le lancement, je continue à suivre les performances de votre application et à l'améliorer."
    }
  ]

  return (
    <>
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
                { label: 'Application Mobile', href: '/developpement-application-mobile', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Application <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mobile</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  iOS & Android
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>création d'applications mobiles</strong>, je conçois des solutions performantes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
                  <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">📱</div>
                        <h3 className="font-semibold text-gray-900">iOS</h3>
                        <p className="text-sm text-gray-600">iPhone & iPad</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">🤖</div>
                        <h3 className="font-semibold text-gray-900">Android</h3>
                        <p className="text-sm text-gray-600">Smartphones & Tablettes</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">🔄</div>
                        <h3 className="font-semibold text-gray-900">Hybride</h3>
                        <p className="text-sm text-gray-600">React Native & Flutter</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <h3 className="font-semibold text-gray-900">Performances</h3>
                        <p className="text-sm text-gray-600">Optimisation & Fluidité</p>
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
                Développement d'Applications Mobiles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications mobiles complètes et performantes qui transforment votre idée en une solution concrète.
                Chaque application est conçue sur-mesure pour répondre à vos objectifs et aux besoins de vos utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {mobileServices.map((service, index) => (
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

        {/* Fonctionnalités Mobiles Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités Clés des Applications Mobiles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications mobiles avec des fonctionnalités avancées qui exploitent pleinement les capacités des appareils modernes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
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
                Pourquoi me choisir pour votre projet d'application mobile ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec moi offre de nombreux avantages pour votre projet d'application mobile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {freelanceAdvantages.map((advantage, index) => (
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
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mon Processus de Développement Mobile
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et itérative pour transformer votre idée en une application mobile performante et intuitive.
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

        {/* Pourquoi une application mobile Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer une Application Mobile ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une application mobile offre de nombreux avantages pour votre entreprise et vos utilisateurs par rapport à un simple site web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔔</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Engagement & Fidélisation
                </h3>
                <p className="text-gray-600">
                  Les applications mobiles offrent un engagement utilisateur supérieur grâce aux notifications push, à l'accès hors ligne 
                  et à une expérience plus immersive que les sites web.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Performances & Fonctionnalités
                </h3>
                <p className="text-gray-600">
                  Les applications mobiles sont plus rapides et offrent un accès aux fonctionnalités natives des appareils 
                  (caméra, GPS, biométrie, etc.) pour une expérience utilisateur enrichie.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Présence & Crédibilité
                </h3>
                <p className="text-gray-600">
                  Une présence sur les stores d'applications (App Store, Google Play) renforce votre crédibilité et votre visibilité.
                  Votre marque reste présente sur l'écran d'accueil de vos utilisateurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies Mobiles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications mobiles avec les technologies modernes les plus adaptées à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Développement Cross-Platform
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">React Native</p>
                    <p className="text-gray-600">
                      Framework JavaScript pour développer des applications natives pour iOS et Android à partir d'une base de code unique.
                      Performances proches du natif avec l'efficacité du développement cross-platform.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Flutter</p>
                    <p className="text-gray-600">
                      Framework de Google utilisant Dart pour créer des applications visuellement riches et performantes.
                      Rendu graphique de haute qualité et animations fluides sur les deux plateformes.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Capacitor / Ionic</p>
                    <p className="text-gray-600">
                      Solutions hybrides basées sur les technologies web (HTML, CSS, JavaScript) pour des applications simples et rapides à développer.
                      Idéal pour les projets avec des contraintes de budget et de délai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Développement Natif
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">iOS (Swift)</p>
                    <p className="text-gray-600">
                      Développement natif pour iOS avec Swift, le langage moderne d'Apple.
                      Performances optimales et intégration parfaite avec l'écosystème Apple.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Android (Kotlin)</p>
                    <p className="text-gray-600">
                      Développement natif pour Android avec Kotlin, le langage recommandé par Google.
                      Expérience utilisateur fluide et accès complet aux fonctionnalités Android.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Backend & API</p>
                    <p className="text-gray-600">
                      Développement de backends robustes et d'APIs RESTful ou GraphQL pour alimenter vos applications mobiles.
                      Solutions cloud (Firebase, AWS, etc.) pour l'authentification, le stockage et les notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Vous avez des questions sur mes services de développement d'applications mobiles ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le coût de développement d'une application mobile ?
                </h3>
                <p className="text-gray-600">
                  Le coût de développement d'une application mobile varie généralement entre 10 000€ et 50 000€ selon la complexité du projet, les fonctionnalités requises 
                  et les plateformes ciblées. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Faut-il développer pour iOS et Android simultanément ?
                </h3>
                <p className="text-gray-600">
                  Pas nécessairement. Une approche stratégique consiste souvent à commencer par une plateforme (généralement iOS ou Android selon votre cible) 
                  pour valider votre concept, puis à étendre à l'autre plateforme. Les technologies cross-platform comme React Native ou Flutter permettent également de développer pour les deux plateformes simultanément.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour développer une application mobile ?
                </h3>
                <p className="text-gray-600">
                  Le développement d'une application mobile prend généralement entre 3 et 6 mois, selon la complexité du projet. 
                  Ce délai inclut la conception UX/UI, le développement, les tests et le déploiement sur les stores.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment se déroule le processus de publication sur les stores ?
                </h3>
                <p className="text-gray-600">
                  Je vous accompagne dans tout le processus de publication, de la création des comptes développeur à la soumission finale. 
                  Pour l'App Store, le processus de validation prend généralement 1 à 3 jours. Pour Google Play, la validation est souvent plus rapide (quelques heures à 1 jour).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance pour les applications mobiles ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance spécifiques pour les applications mobiles. Ces services incluent les mises à jour pour les nouvelles versions d'iOS et Android, 
                  les correctifs de bugs, l'optimisation des performances, et l'évolution de votre application avec de nouvelles fonctionnalités.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Application Mobile ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet d'application mobile et obtenir un devis personnalisé. 
              Ensemble, transformons votre idée en une application mobile performante et intuitive.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discuter de votre projet
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
