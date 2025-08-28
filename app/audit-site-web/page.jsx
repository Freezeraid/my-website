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
  title: 'Audit Web | Vitesse x3 | SEO Score 100/100',
  description: 'Audit web professionnel multipliant la vitesse par 3. Score SEO 100/100 garanti. Problèmes détectés. Performance maximale !',

  keywords: ['audit site web', 'audit performance', 'audit SEO', 'vitesse de chargement', 'core web vitals', 'analyse technique', 'optimisation site web', 'freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/audit-site-web',
  },
  openGraph: {
    title: 'Audit Web | Vitesse x3 | SEO Score 100/100',
    description: 'Audit web professionnel multipliant la vitesse par 3. Score SEO 100/100 garanti. Problèmes détectés. Performance maximale !',

    url: 'https://killiandoubre.com/audit-site-web',
  }
}

export default function AuditSiteWebPage() {
  const auditServices = [
    {
      icon: "⚡",
      title: "Audit de Performance",
      description: "Analyse approfondie de la vitesse de chargement et des performances de votre site web pour identifier les goulots d'étranglement et les opportunités d'optimisation.",
      features: [
        "Analyse des Core Web Vitals",
        "Optimisation des ressources (images, scripts, CSS)",
        "Amélioration du temps de chargement",
        "Rapport détaillé avec recommandations"
      ]
    },
    {
      icon: "🔍",
      title: "Audit SEO Technique",
      description: "Évaluation complète des aspects techniques qui impactent le référencement de votre site web sur les moteurs de recherche.",
      features: [
        "Analyse de la structure du site",
        "Vérification des balises meta et du balisage sémantique",
        "Identification des problèmes d'indexation",
        "Recommandations d'optimisation technique"
      ]
    },
    {
      icon: "📱",
      title: "Audit Mobile & Responsive",
      description: "Évaluation de l'expérience utilisateur sur mobile et de l'adaptabilité de votre site web à différentes tailles d'écran.",
      features: [
        "Test de compatibilité mobile",
        "Analyse de l'expérience utilisateur mobile",
        "Vérification du design responsive",
        "Optimisations pour l'indexation mobile-first"
      ]
    },
    {
      icon: "🔐",
      title: "Audit de Sécurité",
      description: "Identification des vulnérabilités et des risques de sécurité potentiels sur votre site web pour protéger vos données et celles de vos utilisateurs.",
      features: [
        "Vérification des protocoles de sécurité",
        "Analyse des vulnérabilités courantes",
        "Recommandations pour renforcer la sécurité",
        "Conformité RGPD et bonnes pratiques"
      ]
    }
  ]

  const auditAdvantages = [
    {
      title: "Diagnostic Précis et Actionnable",
      description: "Mon audit de site web fournit un diagnostic précis et des recommandations concrètes que vous pouvez mettre en œuvre immédiatement. Chaque problème identifié est accompagné d'une solution adaptée à votre situation spécifique."
    },
    {
      title: "Approche Holistique",
      description: "J'analyse votre site web sous tous ses aspects : performance technique, expérience utilisateur, référencement et sécurité. Cette vision globale permet d'identifier les interactions entre ces différents éléments et d'optimiser l'ensemble de votre présence en ligne."
    },
    {
      title: "Expertise Technique Approfondie",
      description: "En tant que développeur web full stack, je possède une compréhension approfondie des aspects techniques qui influencent la performance et le référencement d'un site web. Cette expertise me permet d'identifier des problèmes souvent négligés par les outils d'audit automatisés."
    },
    {
      title: "Priorisation Stratégique",
      description: "Je ne me contente pas de lister les problèmes, je les hiérarchise selon leur impact sur votre activité et la facilité de mise en œuvre. Cette approche vous permet de concentrer vos ressources sur les optimisations qui auront le plus grand impact sur votre site."
    }
  ]

  const auditProcess = [
    {
      number: "01",
      title: "Analyse Préliminaire",
      description: "Je commence par une analyse globale de votre site web pour comprendre son architecture, ses fonctionnalités et ses objectifs. Cette première étape permet d'identifier les points critiques à examiner plus en détail."
    },
    {
      number: "02",
      title: "Audit Technique Approfondi",
      description: "J'utilise des outils professionnels et mon expertise technique pour analyser en profondeur les performances, le SEO technique, l'expérience utilisateur et la sécurité de votre site web."
    },
    {
      number: "03",
      title: "Analyse des Résultats",
      description: "Je compile et analyse les données recueillies pour identifier les problèmes, les opportunités d'amélioration et les priorités d'optimisation en fonction de leur impact sur votre activité."
    },
    {
      number: "04",
      title: "Élaboration des Recommandations",
      description: "Je développe des recommandations précises et actionnables pour résoudre les problèmes identifiés et améliorer les performances globales de votre site web."
    },
    {
      number: "05",
      title: "Présentation du Rapport",
      description: "Je vous présente un rapport détaillé comprenant l'analyse, les recommandations et un plan d'action priorisé. Cette présentation inclut une explication claire des problèmes techniques et de leur impact sur votre activité."
    }
  ]

  const performanceFactors = [
    {
      icon: "⏱️",
      title: "Vitesse de Chargement",
      description: "La vitesse de chargement est un facteur crucial pour l'expérience utilisateur et le référencement. Un site lent peut augmenter le taux de rebond et réduire les conversions. J'analyse en détail les facteurs qui ralentissent votre site et propose des solutions d'optimisation."
    },
    {
      icon: "📊",
      title: "Core Web Vitals",
      description: "Les Core Web Vitals de Google mesurent l'expérience utilisateur en termes de chargement, d'interactivité et de stabilité visuelle. Ces métriques sont désormais des facteurs de classement importants que j'analyse en profondeur lors de l'audit."
    },
    {
      icon: "🖼️",
      title: "Optimisation des Ressources",
      description: "Les images, vidéos, scripts et feuilles de style non optimisés peuvent considérablement ralentir votre site. J'identifie les ressources problématiques et propose des solutions pour les optimiser sans compromettre la qualité."
    },
    {
      icon: "🔄",
      title: "Mise en Cache",
      description: "Une stratégie de mise en cache efficace peut considérablement améliorer les performances de votre site. J'analyse votre configuration actuelle et propose des optimisations pour réduire les temps de chargement pour les visiteurs récurrents."
    },
    {
      icon: "🌐",
      title: "Architecture Technique",
      description: "L'architecture technique de votre site (serveur, CMS, framework) influence directement ses performances. J'évalue si votre infrastructure actuelle est adaptée à vos besoins et propose des améliorations si nécessaire."
    },
    {
      icon: "📱",
      title: "Expérience Mobile",
      description: "Avec la majorité du trafic web provenant des appareils mobiles, l'optimisation de l'expérience mobile est essentielle. J'analyse les performances de votre site sur mobile et propose des améliorations spécifiques."
    }
  ]

  const auditTools = [
    {
      category: "Performance & Vitesse",
      items: [
        { name: "Google PageSpeed Insights", description: "Analyse de la vitesse de chargement et des Core Web Vitals" },
        { name: "GTmetrix", description: "Analyse détaillée des performances et recommandations d'optimisation" },
        { name: "WebPageTest", description: "Tests de performance multi-localisations et multi-appareils" },
        { name: "Lighthouse", description: "Audit complet des performances, de l'accessibilité et des bonnes pratiques" },
        { name: "Chrome DevTools", description: "Analyse approfondie du chargement et du rendu des pages" }
      ]
    },
    {
      category: "SEO Technique",
      items: [
        { name: "Screaming Frog", description: "Crawler pour l'audit technique approfondi de votre site" },
        { name: "Google Search Console", description: "Analyse de l'indexation et des performances dans les résultats de recherche" },
        { name: "Semrush Site Audit", description: "Identification des problèmes techniques impactant le SEO" },
        { name: "Ahrefs Site Audit", description: "Analyse complète des problèmes techniques SEO" },
        { name: "Schema Markup Validator", description: "Vérification des données structurées pour les rich snippets" }
      ]
    },
    {
      category: "UX & Accessibilité",
      items: [
        { name: "WAVE", description: "Évaluation de l'accessibilité web selon les normes WCAG" },
        { name: "Hotjar", description: "Analyse du comportement utilisateur avec heatmaps et enregistrements de session" },
        { name: "Mobile-Friendly Test", description: "Vérification de la compatibilité mobile" },
        { name: "BrowserStack", description: "Tests cross-browser et cross-device" },
        { name: "Axe", description: "Outil d'audit d'accessibilité automatisé" }
      ]
    },
    {
      category: "Sécurité & Performance",
      items: [
        { name: "SSL Server Test", description: "Analyse de la configuration SSL/TLS" },
        { name: "Security Headers", description: "Vérification des en-têtes de sécurité HTTP" },
        { name: "Observatory by Mozilla", description: "Audit de sécurité web complet" },
        { name: "WebPageTest", description: "Analyse des requêtes réseau et des ressources" },
        { name: "Pingdom", description: "Surveillance des temps de chargement et de la disponibilité" }
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
                { label: 'Audit de Site Web', href: '/audit-site-web', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Audit de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Site Web</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Performance & SEO
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance spécialisé en <strong>audit de performance</strong>, j'analyse en profondeur votre site web pour identifier les problèmes techniques, améliorer la vitesse de chargement et optimiser le référencement.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Demander un audit
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
                          <div className="text-3xl mb-2">⚡</div>
                          <h3 className="font-semibold text-gray-900">Performance</h3>
                          <p className="text-sm text-gray-600">Vitesse Optimale</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📊</div>
                          <h3 className="font-semibold text-gray-900">Core Web Vitals</h3>
                          <p className="text-sm text-gray-600">Analyse Complète</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO</h3>
                          <p className="text-sm text-gray-600">Audit Technique</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Mobile</h3>
                          <p className="text-sm text-gray-600">Expérience Optimisée</p>
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
                Services d'Audit de Site Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'offre une gamme complète de services d'audit pour identifier les problèmes techniques de votre site web,
                améliorer ses performances et optimiser son référencement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {auditServices.map((service, index) => (
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

        {/* Facteurs de Performance Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Facteurs de Performance Web
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                La performance d'un site web repose sur de nombreux facteurs techniques qui influencent l'expérience utilisateur et le référencement.
                Voici les éléments clés que j'analyse lors d'un audit de performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {performanceFactors.map((factor, index) => (
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
                Pourquoi me choisir pour votre Audit de Site Web ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un audit réalisé par un développeur web expérimenté offre une perspective unique et des recommandations techniques précises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {auditAdvantages.map((advantage, index) => (
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
                Mon Processus d'Audit
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et transparente pour identifier les problèmes techniques et proposer des solutions adaptées.
              </p>
            </div>
            
            <div className="space-y-8">
              {auditProcess.map((step, index) => (
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
                    {index < auditProcess.length - 1 && (
                      <div className="hidden md:block h-12 w-0.5 bg-blue-200 ml-8 mt-4"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outils d'Audit Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Outils d'Audit Professionnels
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'utilise une suite d'outils professionnels pour analyser en profondeur les performances et le référencement de votre site web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {auditTools.map((toolCategory, index) => (
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

        {/* Pourquoi l'audit est important Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi un Audit de Site Web est Essentiel
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un audit technique est un investissement stratégique pour améliorer les performances et la visibilité de votre site web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expérience Utilisateur
                </h3>
                <p className="text-gray-600">
                  Un site web rapide et réactif offre une meilleure expérience utilisateur, ce qui se traduit par un taux de rebond plus faible, 
                  un engagement accru et un taux de conversion plus élevé.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Référencement (SEO)
                </h3>
                <p className="text-gray-600">
                  La vitesse de chargement et les performances techniques sont des facteurs de classement importants pour Google. 
                  Un site optimisé a de meilleures chances d'apparaître en haut des résultats de recherche.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Retour sur Investissement
                </h3>
                <p className="text-gray-600">
                  L'amélioration des performances techniques peut avoir un impact significatif sur vos résultats commerciaux : 
                  augmentation du trafic, meilleur engagement et hausse des conversions.
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
