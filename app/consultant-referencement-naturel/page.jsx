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
  title: 'Consultant en Référencement Naturel (SEO) | Freelance',
  description: 'Services de consultant SEO freelance pour améliorer votre visibilité sur Google. Audit SEO, optimisation technique, stratégie de contenu et netlinking pour augmenter votre trafic organique.',
  keywords: ['consultant SEO', 'référencement naturel', 'audit SEO', 'optimisation SEO', 'stratégie de contenu', 'netlinking', 'SEO technique', 'freelance SEO'],
  alternates: {
    canonical: 'https://killiandoubre.com/consultant-referencement-naturel',
  },
  openGraph: {
    title: 'Consultant en Référencement Naturel (SEO) | Freelance',
    description: 'Services de consultant SEO freelance pour améliorer votre visibilité sur Google. Audit SEO, optimisation technique, stratégie de contenu et netlinking pour augmenter votre trafic organique.',
    url: 'https://killiandoubre.com/consultant-referencement-naturel',
  }
}

export default function ConsultantSEOPage() {
  const seoServices = [
    {
      icon: "🔍",
      title: "Audit SEO Complet",
      description: "Analyse approfondie de votre site web pour identifier les opportunités d'amélioration et les obstacles techniques qui limitent votre visibilité sur les moteurs de recherche.",
      features: [
        "Analyse technique et structurelle",
        "Étude des mots-clés et de la concurrence",
        "Évaluation du contenu et de l'UX",
        "Rapport détaillé avec recommandations"
      ]
    },
    {
      icon: "⚙️",
      title: "Optimisation Technique",
      description: "Amélioration des aspects techniques de votre site pour faciliter l'indexation par les moteurs de recherche et offrir une meilleure expérience utilisateur.",
      features: [
        "Optimisation de la vitesse de chargement",
        "Structure et balisage sémantique",
        "Adaptation mobile (responsive design)",
        "Résolution des erreurs d'indexation"
      ]
    },
    {
      icon: "📝",
      title: "Stratégie de Contenu",
      description: "Élaboration d'une stratégie de contenu optimisée pour le SEO qui répond aux intentions de recherche de vos utilisateurs tout en renforçant votre autorité thématique.",
      features: [
        "Recherche de mots-clés stratégiques",
        "Création de contenus optimisés",
        "Optimisation des balises title et meta",
        "Structure de contenu SEO-friendly"
      ]
    },
    {
      icon: "🔗",
      title: "Netlinking & Autorité",
      description: "Développement de la notoriété et de l'autorité de votre site web grâce à une stratégie de liens entrants qualitative et pertinente.",
      features: [
        "Audit de profil de liens",
        "Stratégie d'acquisition de backlinks",
        "Linkbuilding éthique et qualitatif",
        "Suivi et analyse des résultats"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise SEO Spécialisée",
      description: "En tant que consultant SEO freelance, je me concentre exclusivement sur l'optimisation pour les moteurs de recherche. Cette spécialisation me permet de rester à jour avec les dernières évolutions des algorithmes et les meilleures pratiques du référencement naturel."
    },
    {
      title: "Approche Sur-Mesure",
      description: "Je développe des stratégies SEO personnalisées adaptées à votre secteur d'activité, vos objectifs commerciaux et votre public cible. Contrairement aux approches standardisées des agences, chaque recommandation est spécifiquement conçue pour votre site."
    },
    {
      title: "Transparence & Pédagogie",
      description: "Je vous explique clairement les actions entreprises et leurs impacts attendus. Mon approche pédagogique vous permet de comprendre les enjeux du SEO et de prendre des décisions éclairées pour votre stratégie web."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs pour des prestations SEO de haute qualité. Vous bénéficiez d'un accompagnement personnalisé à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Diagnostic",
      description: "Je commence par une analyse approfondie de votre site web, de votre positionnement actuel et de votre secteur d'activité. Cette phase permet d'identifier les opportunités d'amélioration et les obstacles qui limitent votre visibilité."
    },
    {
      number: "02",
      title: "Stratégie & Recommandations",
      description: "Sur la base du diagnostic, j'élabore une stratégie SEO personnalisée avec des recommandations concrètes et priorisées. Chaque action proposée est justifiée par son impact potentiel sur votre visibilité."
    },
    {
      number: "03",
      title: "Mise en Œuvre",
      description: "J'implémente les optimisations techniques, structurelles et sémantiques sur votre site. Je développe également une stratégie de contenu optimisée pour les mots-clés stratégiques identifiés."
    },
    {
      number: "04",
      title: "Suivi & Ajustements",
      description: "Je surveille régulièrement l'évolution de votre positionnement et du trafic organique. Cette veille continue permet d'ajuster la stratégie en fonction des résultats obtenus et des évolutions des algorithmes."
    },
    {
      number: "05",
      title: "Reporting & Conseils",
      description: "Je vous fournis des rapports détaillés sur les performances SEO de votre site et l'impact des actions menées. Ces rapports sont accompagnés de conseils pour maintenir et améliorer vos résultats sur le long terme."
    }
  ]

  const seoFactors = [
    {
      icon: "🔧",
      title: "SEO Technique",
      description: "L'optimisation technique est la fondation d'une bonne stratégie SEO. Elle comprend l'amélioration de la vitesse de chargement, la structure du site, le balisage sémantique, l'adaptation mobile et la résolution des erreurs d'indexation."
    },
    {
      icon: "📱",
      title: "Mobile-First",
      description: "Google utilise désormais l'indexation mobile-first, ce qui signifie que la version mobile de votre site est prioritaire pour le classement. Un site parfaitement adapté aux appareils mobiles est essentiel pour un bon référencement."
    },
    {
      icon: "📊",
      title: "Core Web Vitals",
      description: "Les signaux Core Web Vitals de Google mesurent l'expérience utilisateur de votre site en termes de chargement, d'interactivité et de stabilité visuelle. Ces métriques sont désormais des facteurs de classement importants."
    },
    {
      icon: "🔒",
      title: "Sécurité & HTTPS",
      description: "La sécurité de votre site est un facteur de classement. L'utilisation du protocole HTTPS, la protection contre les logiciels malveillants et la sécurisation des données utilisateur sont essentielles pour le SEO."
    },
    {
      icon: "📝",
      title: "Contenu de Qualité",
      description: "Le contenu reste roi en SEO. Un contenu original, pertinent et de qualité qui répond aux intentions de recherche des utilisateurs est fondamental pour un bon positionnement sur les moteurs de recherche."
    },
    {
      icon: "🔗",
      title: "Backlinks de Qualité",
      description: "Les liens entrants (backlinks) provenant de sites web pertinents et autoritaires restent l'un des principaux facteurs de classement. Une stratégie de netlinking éthique et qualitative est essentielle."
    }
  ]

  const seoTools = [
    {
      category: "Analyse & Audit",
      items: [
        { name: "Google Search Console", description: "Outil officiel de Google pour surveiller et optimiser la présence de votre site dans les résultats de recherche" },
        { name: "Google Analytics", description: "Analyse du trafic et du comportement des utilisateurs sur votre site" },
        { name: "Screaming Frog", description: "Crawler pour l'audit technique approfondi de votre site" },
        { name: "Semrush", description: "Suite complète d'outils pour l'analyse SEO, la recherche de mots-clés et l'analyse concurrentielle" },
        { name: "Ahrefs", description: "Analyse des backlinks et recherche de mots-clés" }
      ]
    },
    {
      category: "Optimisation Technique",
      items: [
        { name: "PageSpeed Insights", description: "Analyse de la vitesse de chargement et des Core Web Vitals" },
        { name: "GTmetrix", description: "Analyse des performances et optimisation de la vitesse" },
        { name: "Schema Markup Generator", description: "Création de données structurées pour améliorer les rich snippets" },
        { name: "Mobile-Friendly Test", description: "Vérification de l'adaptation mobile de votre site" },
        { name: "Lighthouse", description: "Audit complet des performances, de l'accessibilité et du SEO" }
      ]
    },
    {
      category: "Contenu & Mots-clés",
      items: [
        { name: "Google Keyword Planner", description: "Recherche et planification de mots-clés" },
        { name: "AnswerThePublic", description: "Découverte des questions posées par les utilisateurs" },
        { name: "Surfer SEO", description: "Optimisation de contenu basée sur l'analyse des SERP" },
        { name: "Yoast SEO", description: "Plugin WordPress pour l'optimisation on-page" },
        { name: "Grammarly", description: "Vérification grammaticale et stylistique pour un contenu de qualité" }
      ]
    },
    {
      category: "Suivi & Reporting",
      items: [
        { name: "Rank Tracker", description: "Suivi des positions pour vos mots-clés cibles" },
        { name: "Google Data Studio", description: "Création de tableaux de bord et de rapports personnalisés" },
        { name: "SEMrush Position Tracking", description: "Suivi du positionnement et comparaison avec la concurrence" },
        { name: "Ahrefs Rank Tracker", description: "Suivi des positions et de la visibilité globale" },
        { name: "Sistrix", description: "Analyse de la visibilité et des tendances SEO" }
      ]
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
                { label: 'Consultant SEO', href: '/consultant-referencement-naturel', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Consultant <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SEO</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Référencement Naturel
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Consultant SEO freelance spécialisé en <strong>référencement naturel</strong>, j'améliore la visibilité de votre site web sur Google et augmente votre trafic organique grâce à des stratégies SEO sur-mesure et durables.
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
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">Audit SEO</h3>
                          <p className="text-sm text-gray-600">Analyse Complète</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📈</div>
                          <h3 className="font-semibold text-gray-900">Trafic</h3>
                          <p className="text-sm text-gray-600">Augmentation Durable</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📝</div>
                          <h3 className="font-semibold text-gray-900">Contenu</h3>
                          <p className="text-sm text-gray-600">Stratégie Optimisée</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔗</div>
                          <h3 className="font-semibold text-gray-900">Backlinks</h3>
                          <p className="text-sm text-gray-600">Netlinking Qualitatif</p>
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
                Services de Consultant SEO
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'offre une gamme complète de services SEO pour améliorer la visibilité de votre site web sur les moteurs de recherche
                et générer un trafic organique qualifié et durable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {seoServices.map((service, index) => (
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

        {/* Facteurs SEO Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Facteurs SEO Importants
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le référencement naturel repose sur de nombreux facteurs qui influencent le positionnement de votre site dans les résultats de recherche.
                Voici les éléments clés sur lesquels je travaille pour améliorer votre visibilité.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {seoFactors.map((factor, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{factor.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600">
                    {factor.description}
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
                Pourquoi me choisir en tant que Consultant SEO Freelance ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec moi offre de nombreux avantages pour l'optimisation de votre présence en ligne.
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
                Mon Processus d'Optimisation SEO
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et transparente pour améliorer durablement votre visibilité sur les moteurs de recherche.
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

        {/* Outils SEO Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Outils SEO Professionnels
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'utilise une suite d'outils SEO professionnels pour analyser, optimiser et suivre les performances de votre site web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoTools.map((toolCategory, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {toolCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {toolCategory.items.map((tool, idx) => (
                      <div key={idx}>
                        <p className="font-medium text-gray-800 mb-1">{tool.name}</p>
                        <p className="text-gray-600 text-sm">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi le SEO est important Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi le SEO est Essentiel
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le référencement naturel est un investissement stratégique pour la croissance de votre entreprise en ligne.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">👁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visibilité & Notoriété
                </h3>
                <p className="text-gray-600">
                  Un bon référencement vous permet d'être visible là où vos clients potentiels vous cherchent. 
                  Apparaître en première page de Google renforce votre notoriété et votre crédibilité.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ROI & Coût-Efficacité
                </h3>
                <p className="text-gray-600">
                  Le SEO offre l'un des meilleurs retours sur investissement en marketing web. 
                  Contrairement au SEA (publicités), le trafic organique ne nécessite pas de paiement par clic.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trafic Qualifié & Durable
                </h3>
                <p className="text-gray-600">
                  Le SEO attire un trafic ciblé et qualifié, composé d'utilisateurs activement à la recherche de vos produits ou services.
                  Les résultats sont durables et s'améliorent avec le temps.
                </p>
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
                Vous avez des questions sur mes services de consultant SEO ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour voir des résultats en SEO ?
                </h3>
                <p className="text-gray-600">
                  Le SEO est un investissement à moyen et long terme. Les premiers résultats sont généralement visibles après 3 à 6 mois, 
                  selon la concurrence de votre secteur, l'état initial de votre site et l'ampleur des optimisations nécessaires. 
                  Les résultats continuent ensuite à s'améliorer progressivement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quels sont vos tarifs pour une prestation SEO ?
                </h3>
                <p className="text-gray-600">
                  Mes tarifs varient en fonction de l'ampleur du projet, de la concurrence de votre secteur et de vos objectifs. 
                  Je propose des formules d'accompagnement mensuel à partir de 800€/mois, ainsi que des prestations ponctuelles comme l'audit SEO (à partir de 1 200€).
                  Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Garantissez-vous des résultats en première page de Google ?
                </h3>
                <p className="text-gray-600">
                  Aucun consultant SEO sérieux ne peut garantir des positions spécifiques sur Google, car les algorithmes évoluent constamment et de nombreux facteurs 
                  sont hors de notre contrôle. Je m'engage cependant à mettre en œuvre les meilleures pratiques SEO et à vous fournir des résultats mesurables 
                  en termes d'amélioration du positionnement, d'augmentation du trafic organique et de la visibilité globale.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Travaillez-vous avec tous types de sites web ?
                </h3>
                <p className="text-gray-600">
                  Je travaille avec tous types de sites web (WordPress, Shopify, Wix, sites sur-mesure, etc.) et dans divers secteurs d'activité. 
                  Que vous soyez une PME, un e-commerce, un site vitrine ou un blog, je peux vous aider à améliorer votre visibilité en ligne.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment mesurez-vous les résultats de vos actions SEO ?
                </h3>
                <p className="text-gray-600">
                  Je mesure les résultats à travers plusieurs indicateurs clés : l'évolution du positionnement pour vos mots-clés cibles, 
                  l'augmentation du trafic organique, l'amélioration de la visibilité globale, le taux de conversion et le ROI. 
                  Je vous fournis des rapports détaillés et transparents pour suivre ces métriques.
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
