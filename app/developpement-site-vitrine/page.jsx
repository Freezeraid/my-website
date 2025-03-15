import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from 'next/link'
import OptimizedImage from '../../components/ui/OptimizedImage'
import Loading from '../../components/ui/Loading'
import Breadcrumb from '../../components/ui/Breadcrumb'
import SchemaOrg from '../../components/ui/SchemaOrg'
import { generateServicePageSchemas, serviceData } from '../../lib/schema/service'

const Contact = dynamic(() => import('../../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true
})

export const metadata = {
  title: 'Création de Site Web Vitrine | Développeur Front-End Freelance',
  description: 'Création de sites web vitrine professionnels et sur-mesure. Développeur front-end freelance spécialisé en design responsive, optimisation SEO et expérience utilisateur.',
  keywords: ['site web vitrine', 'création site web', 'développeur front-end', 'site web professionnel', 'site web responsive', 'site web sur-mesure', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-site-vitrine',
  },
  openGraph: {
    title: 'Création de Site Web Vitrine | Développeur Front-End Freelance',
    description: 'Création de sites web vitrine professionnels et sur-mesure. Développeur front-end freelance spécialisé en design responsive, optimisation SEO et expérience utilisateur.',
    url: 'https://killiandoubre.com/developpement-site-vitrine',
  }
}

export default function DeveloppeurWebFreelancePage() {
  const servicePageSchemas = generateServicePageSchemas(
    serviceData['developpement-site-vitrine'],
    serviceData['developpement-site-vitrine'].faqs
  );

  const webDevServices = [
    {
      icon: "🎯",
      title: "Sites Vitrine Professionnels",
      description: "Création de sites web vitrine modernes, élégants et optimisés pour le référencement. Des vitrines web qui valorisent votre image de marque et convertissent vos visiteurs.",
      features: [
        "Design sur-mesure adapté à votre identité",
        "Optimisation SEO pour une visibilité maximale",
        "Expérience utilisateur intuitive et engageante"
      ]
    },
    {
      icon: "📱",
      title: "Design Responsive",
      description: "Sites web parfaitement adaptés à tous les appareils (ordinateurs, tablettes, smartphones). Une expérience utilisateur optimale quel que soit l'écran utilisé.",
      features: [
        "Adaptation automatique à tous les formats d'écran",
        "Temps de chargement optimisé sur mobile",
        "Navigation intuitive sur tous les appareils"
      ]
    },
    {
      icon: "🚀",
      title: "Performance & SEO",
      description: "Sites web performants et optimisés pour les moteurs de recherche. Une vitesse de chargement exceptionnelle et un référencement naturel efficace.",
      features: [
        "Optimisation technique pour Google PageSpeed",
        "Structure sémantique pour un meilleur référencement",
        "Stratégie de mots-clés ciblée et efficace"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise Technique Spécialisée",
      description: "En tant que développeur web freelance, je me spécialise dans les technologies modernes comme React, Node.js et Next.js. Cette expertise ciblée me permet de créer des solutions web performantes et adaptées à vos besoins spécifiques."
    },
    {
      title: "Flexibilité et Réactivité",
      description: "Contrairement aux agences, je vous offre une flexibilité totale dans la gestion de votre projet. Adaptations rapides, modifications de dernière minute, ou ajustements stratégiques - je m'adapte à l'évolution de vos besoins."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre projet, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins et une mise en œuvre plus précise de vos idées."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs sans compromettre la qualité. Vous bénéficiez d'un service premium à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Consultation & Analyse",
      description: "Nous commençons par une analyse approfondie de vos besoins, objectifs et public cible. Cette étape cruciale me permet de comprendre votre vision et de définir la meilleure stratégie pour votre projet web."
    },
    {
      number: "02",
      title: "Conception & Prototypage",
      description: "Je crée des maquettes et prototypes interactifs de votre site ou application. Vous visualisez ainsi concrètement le résultat final avant le développement, avec possibilité d'ajustements."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre site web avec les technologies les plus adaptées à votre projet. Chaque ligne de code est optimisée pour la performance, la sécurité et l'évolutivité."
    },
    {
      number: "04",
      title: "Tests & Déploiement",
      description: "Votre projet est rigoureusement testé sur différents appareils et navigateurs avant d'être mis en ligne. Je m'assure que tout fonctionne parfaitement pour une expérience utilisateur optimale."
    },
    {
      number: "05",
      title: "Maintenance & Évolution",
      description: "Je vous accompagne après le lancement avec des services de maintenance et d'évolution. Votre site reste ainsi performant, sécurisé et adapté à vos besoins évolutifs."
    }
  ]

  return (
    <>
      <SchemaOrg schemas={servicePageSchemas} />
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
                { label: 'Développement de Site Vitrine', href: '/developpement-site-vitrine', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Site Web <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vitrine</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Votre Présence Professionnelle en Ligne
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur front-end spécialisé en création de <strong>sites web vitrine</strong> sur-mesure, je conçois des vitrines web élégantes et performantes qui valorisent votre activité et convertissent vos visiteurs en clients.
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
                        alt="Photo de profil Killian DOUBRE"
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
                          <div className="text-3xl mb-2">🎨</div>
                          <h3 className="font-semibold text-gray-900">Design</h3>
                          <p className="text-sm text-gray-600">Élégant & Moderne</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🚀</div>
                          <h3 className="font-semibold text-gray-900">Performance</h3>
                          <p className="text-sm text-gray-600">Chargement Rapide</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Responsive</h3>
                          <p className="text-sm text-gray-600">Tous Appareils</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO</h3>
                          <p className="text-sm text-gray-600">Optimisé Google</p>
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
                Création de Sites Web Vitrine
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je crée des sites web vitrine professionnels qui mettent en valeur votre activité et génèrent des contacts qualifiés.
                Chaque site est conçu sur-mesure pour refléter votre identité et répondre à vos objectifs commerciaux.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {webDevServices.map((service, index) => (
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

        {/* Avantages Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi me choisir pour votre projet de site vitrine ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec moi offre de nombreux avantages par rapport aux agences traditionnelles. 
                Découvrez comment cette approche peut bénéficier à votre projet.
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
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mon Processus de Développement Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour transformer votre vision en une solution web performante et adaptée à vos objectifs.
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

        {/* Pourquoi un site vitrine Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer un Site Web Vitrine ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un site web vitrine professionnel est essentiel pour toute entreprise ou professionnel souhaitant développer sa présence en ligne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Crédibilité & Confiance
                </h3>
                <p className="text-gray-600">
                  Un site web professionnel renforce votre crédibilité et inspire confiance à vos prospects. 
                  C'est souvent le premier contact qu'ils auront avec votre entreprise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visibilité & Acquisition
                </h3>
                <p className="text-gray-600">
                  Un site optimisé pour le référencement vous permet d'être trouvé par vos clients potentiels sur Google 
                  et d'attirer un trafic qualifié vers votre activité.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Conversion & Croissance
                </h3>
                <p className="text-gray-600">
                  Un site bien conçu transforme vos visiteurs en clients ou en contacts qualifiés, 
                  contribuant directement à la croissance de votre activité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités de Votre Site Vitrine
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des sites web vitrine complets avec toutes les fonctionnalités essentielles pour présenter votre activité et générer des contacts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Présentation & Design
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Design Sur-mesure</p>
                    <p className="text-gray-600">
                      Design unique adapté à votre identité visuelle et à votre secteur d'activité.
                      Interface moderne, élégante et professionnelle qui valorise votre image.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Pages Essentielles</p>
                    <p className="text-gray-600">
                      Accueil impactant, présentation de vos services, page à propos, témoignages clients,
                      galerie de réalisations et page de contact optimisée pour la conversion.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Responsive Design</p>
                    <p className="text-gray-600">
                      Adaptation parfaite à tous les appareils (ordinateurs, tablettes, smartphones)
                      pour une expérience utilisateur optimale sur tous les écrans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Performance & Conversion
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Optimisation SEO</p>
                    <p className="text-gray-600">
                      Structure sémantique, méta-données optimisées, balisage schema.org,
                      et stratégie de mots-clés ciblée pour un meilleur référencement sur Google.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Formulaires & CTA</p>
                    <p className="text-gray-600">
                      Formulaires de contact optimisés et appels à l'action stratégiquement placés
                      pour maximiser les conversions et générer des leads qualifiés.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Vitesse & Performance</p>
                    <p className="text-gray-600">
                      Optimisation des images, minification des ressources, mise en cache avancée
                      et code propre pour des temps de chargement ultra-rapides.
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
                Vous avez des questions sur mes services de développement web freelance ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le prix d'un site web vitrine ?
                </h3>
                <p className="text-gray-600">
                  Le prix d'un site web vitrine professionnel sur-mesure varie généralement entre 1500€ et 4000€ selon la complexité du projet, le nombre de pages, 
                  et les fonctionnalités requises. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour créer un site vitrine ?
                </h3>
                <p className="text-gray-600">
                  La création d'un site web vitrine professionnel prend généralement entre 3 et 6 semaines, depuis la phase de conception jusqu'à la mise en ligne. 
                  Ce délai inclut la création des maquettes, le développement, l'intégration du contenu et les tests sur différents appareils.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Vais-je pouvoir mettre à jour mon site moi-même ?
                </h3>
                <p className="text-gray-600">
                  Oui, je peux intégrer un système de gestion de contenu (CMS) simple et intuitif qui vous permettra de mettre à jour facilement vos textes, images et autres contenus. 
                  Je vous fournis également une formation personnalisée pour vous apprendre à gérer votre site en toute autonomie.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment optimisez-vous les sites pour le référencement ?
                </h3>
                <p className="text-gray-600">
                  J'intègre les bonnes pratiques SEO dès la conception : structure HTML sémantique, optimisation des métadonnées, 
                  balisage schema.org, vitesse de chargement optimale, responsive design, et génération de sitemaps. Je réalise également une recherche de mots-clés ciblés pour votre secteur.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance après la mise en ligne ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance pour garantir que votre site reste performant, sécurisé et à jour. 
                  Ces services incluent les mises à jour techniques, les corrections de bugs, les améliorations de sécurité et l'assistance technique.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Lancer Votre Projet Web ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé. 
              Ensemble, transformons votre vision en une solution web performante et adaptée à vos objectifs.
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
