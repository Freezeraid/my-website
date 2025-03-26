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
  title: 'Développement d\'Applications SaaS | Développeur Web Freelance',
  description: 'Création d\'applications SaaS (Software as a Service) sur-mesure. Développeur web freelance spécialisé en applications cloud, interfaces utilisateur modernes et architectures évolutives.',
  keywords: ['application SaaS', 'développement SaaS', 'software as a service', 'application cloud', 'application web', 'développeur SaaS', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-application-saas',
  },
  openGraph: {
    title: 'Développement d\'Applications SaaS | Développeur Web Freelance',
    description: 'Création d\'applications SaaS (Software as a Service) sur-mesure. Développeur web freelance spécialisé en applications cloud, interfaces utilisateur modernes et architectures évolutives.',
    url: 'https://killiandoubre.com/developpement-application-saas',
  }
}

export default function ApplicationSaasPage() {
  const saasServices = [
    {
      icon: "🚀",
      title: "Applications SaaS Complètes",
      description: "Développement d'applications SaaS complètes, de l'interface utilisateur à l'architecture backend. Des solutions cloud évolutives qui répondent précisément à vos besoins métier.",
      features: [
        "Architecture cloud native évolutive",
        "Interfaces utilisateur modernes et intuitives",
        "Sécurité et conformité intégrées"
      ]
    },
    {
      icon: "👥",
      title: "Gestion Multi-Tenant",
      description: "Conception d'architectures multi-tenant robustes pour servir efficacement plusieurs clients à partir d'une base de code unique. Isolation des données et personnalisation par client.",
      features: [
        "Isolation des données par client",
        "Personnalisation par tenant",
        "Optimisation des ressources partagées"
      ]
    },
    {
      icon: "💳",
      title: "Facturation & Abonnements",
      description: "Intégration de systèmes de facturation et de gestion d'abonnements flexibles. Modèles freemium, paiements récurrents et tableaux de bord d'administration complets.",
      features: [
        "Intégration avec Stripe, PayPal, etc.",
        "Gestion des plans et des fonctionnalités",
        "Rapports financiers et analytics"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise SaaS Spécialisée",
      description: "En tant que développeur web freelance spécialisé en applications SaaS, je maîtrise les défis spécifiques de ce modèle : architecture multi-tenant, facturation récurrente, évolutivité et sécurité. Cette expertise ciblée me permet de créer des solutions SaaS robustes et pérennes."
    },
    {
      title: "Flexibilité et Agilité",
      description: "Je vous offre une approche agile et flexible, essentielle pour le développement d'applications SaaS qui évoluent rapidement. Contrairement aux grandes agences, je peux pivoter rapidement, adapter la roadmap et répondre aux changements de priorités avec réactivité."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre application SaaS, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins métier et une mise en œuvre plus précise de votre vision produit."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs pour une application SaaS de haute qualité. Vous bénéficiez d'une solution sur-mesure à un coût optimisé, avec une transparence totale sur les tarifs et les délais."
    }
  ]

  const saasFeatures = [
    {
      icon: "🔐",
      title: "Authentification & Autorisation",
      description: "Systèmes d'authentification robustes avec gestion des rôles et des permissions. Single Sign-On (SSO), authentification multi-facteurs et intégration avec les fournisseurs d'identité."
    },
    {
      icon: "📊",
      title: "Tableaux de Bord & Analytics",
      description: "Tableaux de bord interactifs et visualisations de données personnalisées. Métriques clés, rapports en temps réel et insights actionnables pour les utilisateurs et les administrateurs."
    },
    {
      icon: "🔄",
      title: "Intégrations & API",
      description: "APIs RESTful ou GraphQL pour l'intégration avec d'autres services. Webhooks, connecteurs prédéfinis et documentation complète pour faciliter l'écosystème de votre application."
    },
    {
      icon: "⚙️",
      title: "Administration & Configuration",
      description: "Interfaces d'administration puissantes pour gérer les utilisateurs, les abonnements et les configurations. Personnalisation des paramètres par tenant et outils de support client."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Découverte & Stratégie",
      description: "Nous explorons en profondeur votre vision produit, votre marché cible et vos objectifs commerciaux. Cette phase définit les fondations de votre application SaaS et sa proposition de valeur unique."
    },
    {
      number: "02",
      title: "Architecture & Conception",
      description: "Je conçois l'architecture technique de votre application SaaS en mettant l'accent sur l'évolutivité, la sécurité et la maintenabilité. Les wireframes et prototypes UI/UX sont également créés à cette étape."
    },
    {
      number: "03",
      title: "Développement MVP",
      description: "Je développe un MVP (Minimum Viable Product) fonctionnel avec les fonctionnalités essentielles. Cette approche permet de valider rapidement le concept et d'itérer en fonction des retours utilisateurs."
    },
    {
      number: "04",
      title: "Tests & Déploiement",
      description: "Votre application SaaS est rigoureusement testée (tests unitaires, d'intégration, de charge) avant d'être déployée dans un environnement cloud sécurisé et évolutif."
    },
    {
      number: "05",
      title: "Itération & Évolution",
      description: "Après le lancement, nous continuons à améliorer votre application SaaS en fonction des métriques d'utilisation et des retours clients. De nouvelles fonctionnalités sont développées selon une roadmap stratégique."
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
                { label: "Développement d'Application SaaS", href: '/developpement-application-saas', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Application <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SaaS</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Votre Logiciel en Mode Service
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>création d'applications SaaS</strong>, je conçois des solutions cloud évolutives qui transforment votre vision produit en réalité et génèrent des revenus récurrents.
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
                          <div className="text-3xl mb-2">🚀</div>
                          <h3 className="font-semibold text-gray-900">Cloud</h3>
                          <p className="text-sm text-gray-600">Architecture Évolutive</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">💳</div>
                          <h3 className="font-semibold text-gray-900">Abonnements</h3>
                          <p className="text-sm text-gray-600">Revenus Récurrents</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">👥</div>
                          <h3 className="font-semibold text-gray-900">Multi-Tenant</h3>
                          <p className="text-sm text-gray-600">Plusieurs Clients</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔄</div>
                          <h3 className="font-semibold text-gray-900">API</h3>
                          <p className="text-sm text-gray-600">Intégrations</p>
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
                Développement d'Applications SaaS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications SaaS complètes et évolutives qui transforment votre idée en un produit rentable.
                Chaque application est conçue sur-mesure pour répondre à vos objectifs commerciaux et aux besoins de vos utilisateurs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {saasServices.map((service, index) => (
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

        {/* Fonctionnalités SaaS Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités Clés des Applications SaaS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications SaaS avec toutes les fonctionnalités essentielles pour réussir dans le modèle d'abonnement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {saasFeatures.map((feature, index) => (
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
                Pourquoi me choisir pour le développement de votre application SaaS ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec moi offre de nombreux avantages pour votre projet d'application SaaS.
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
                Mon Processus de Développement SaaS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et agile pour transformer votre vision en une application SaaS performante et rentable.
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

        {/* Pourquoi une application SaaS Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer une Application SaaS ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le modèle SaaS (Software as a Service) offre de nombreux avantages tant pour les entreprises que pour leurs clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Revenus Récurrents
                </h3>
                <p className="text-gray-600">
                  Le modèle d'abonnement génère des revenus récurrents et prévisibles, offrant une stabilité financière 
                  et une valorisation plus élevée pour votre entreprise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Évolutivité & Croissance
                </h3>
                <p className="text-gray-600">
                  Les applications SaaS sont conçues pour évoluer facilement avec votre base d'utilisateurs.
                  Ajoutez de nouvelles fonctionnalités et servez plus de clients sans refonte majeure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Amélioration Continue
                </h3>
                <p className="text-gray-600">
                  Le modèle SaaS permet des mises à jour continues et des améliorations basées sur les données d'utilisation réelles.
                  Votre produit s'améliore constamment pour mieux servir vos clients.
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
                Technologies SaaS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications SaaS avec les technologies modernes les plus adaptées à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Frontend & Expérience Utilisateur
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Frameworks UI Modernes</p>
                    <p className="text-gray-600">
                      React, Vue.js ou Angular pour des interfaces utilisateur réactives et performantes.
                      Next.js pour le rendu côté serveur et l'optimisation SEO.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Design System & Composants</p>
                    <p className="text-gray-600">
                      Bibliothèques de composants comme Material UI, Tailwind CSS ou Chakra UI.
                      Design systems personnalisés pour une expérience utilisateur cohérente.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">State Management</p>
                    <p className="text-gray-600">
                      Redux, Zustand ou Context API pour la gestion d'état.
                      React Query ou SWR pour la gestion des données et du cache.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Backend & Infrastructure
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">APIs & Serveurs</p>
                    <p className="text-gray-600">
                      Node.js avec Express ou NestJS pour des APIs RESTful.
                      GraphQL avec Apollo Server pour des requêtes flexibles et efficaces.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Bases de Données</p>
                    <p className="text-gray-600">
                      PostgreSQL ou MySQL pour les données relationnelles.
                      MongoDB ou DynamoDB pour les données NoSQL.
                      Redis pour le caching et les sessions.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Cloud & DevOps</p>
                    <p className="text-gray-600">
                      AWS, Google Cloud ou Azure pour l'infrastructure cloud.
                      Docker et Kubernetes pour la conteneurisation et l'orchestration.
                      CI/CD avec GitHub Actions ou GitLab CI pour le déploiement continu.
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
                Vous avez des questions sur mes services de développement d'applications SaaS ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le coût de développement d'une application SaaS ?
                </h3>
                <p className="text-gray-600">
                  Le coût de développement d'une application SaaS varie généralement entre 15 000€ et 100 000€ selon la complexité du projet, les fonctionnalités requises 
                  et l'architecture technique. Je vous propose un devis personnalisé après analyse précise de vos besoins et de votre vision produit.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour développer une application SaaS ?
                </h3>
                <p className="text-gray-600">
                  Le développement d'une application SaaS prend généralement entre 3 et 12 mois, selon la complexité du projet. 
                  Je recommande une approche par phases, en commençant par un MVP (Minimum Viable Product) en 2-4 mois, puis en itérant avec des améliorations continues.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment gérez-vous la sécurité des données dans une application SaaS ?
                </h3>
                <p className="text-gray-600">
                  La sécurité est une priorité absolue dans mes développements SaaS. J'implémente des pratiques de sécurité robustes : chiffrement des données sensibles, 
                  authentification multi-facteurs, isolation des données par tenant, audits de sécurité réguliers, et conformité aux réglementations comme le RGPD.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quelles solutions de paiement intégrez-vous dans les applications SaaS ?
                </h3>
                <p className="text-gray-600">
                  J'intègre principalement Stripe pour sa flexibilité et sa robustesse dans la gestion des abonnements récurrents. 
                  Je peux également implémenter PayPal, Braintree, ou d'autres passerelles de paiement selon vos besoins spécifiques et votre marché cible.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance pour les applications SaaS ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance spécifiques pour les applications SaaS. Ces services incluent la surveillance proactive, 
                  les mises à jour de sécurité, l'optimisation des performances, le support technique, et l'évolution continue de votre application avec de nouvelles fonctionnalités.
                </p>
              </div>
            </div>
          </div>
        </section> */}

                {/* Contact Section */}
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </main>
    </>
  )
}
