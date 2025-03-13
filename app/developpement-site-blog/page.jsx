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
  title: 'Création de Site de Blog | Développeur Web Freelance',
  description: 'Création de sites de blog professionnels et optimisés pour le SEO. Développeur web freelance spécialisé en blogs d\'entreprise, blogs personnels et plateformes de contenu.',
  keywords: ['site blog', 'création blog', 'blog professionnel', 'blog entreprise', 'blog personnel', 'plateforme de contenu', 'blog SEO', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-site-blog',
  },
  openGraph: {
    title: 'Création de Site de Blog | Développeur Web Freelance',
    description: 'Création de sites de blog professionnels et optimisés pour le SEO. Développeur web freelance spécialisé en blogs d\'entreprise, blogs personnels et plateformes de contenu.',
    url: 'https://killiandoubre.com/developpement-site-blog',
  }
}

export default function SiteBlogPage() {
  const blogServices = [
    {
      icon: "📝",
      title: "Blogs Professionnels",
      description: "Création de blogs d'entreprise et professionnels avec un design moderne et une architecture optimisée pour le référencement. Des plateformes de contenu qui renforcent votre expertise et votre visibilité.",
      features: [
        "Design sur-mesure adapté à votre identité",
        "Architecture optimisée pour le SEO",
        "Catégorisation et taxonomie efficaces"
      ]
    },
    {
      icon: "🔍",
      title: "SEO & Performance",
      description: "Blogs optimisés pour les moteurs de recherche et les performances. Une structure technique solide et des bonnes pratiques SEO pour maximiser votre visibilité et votre trafic organique.",
      features: [
        "Structure sémantique et URLs optimisées",
        "Temps de chargement ultra-rapides",
        "Balisage schema.org et métadonnées"
      ]
    },
    {
      icon: "📊",
      title: "Gestion & Analytics",
      description: "Interfaces d'administration intuitives et outils d'analyse performants. Tout ce dont vous avez besoin pour gérer efficacement votre blog et mesurer son impact.",
      features: [
        "Interface de publication intuitive",
        "Gestion des médias et des catégories",
        "Statistiques et analytics détaillés"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise Blog & Contenu",
      description: "En tant que développeur web freelance spécialisé en création de blogs, je maîtrise les spécificités techniques et éditoriales des plateformes de contenu. Cette expertise me permet de créer des blogs performants et optimisés pour vos objectifs."
    },
    {
      title: "Flexibilité et Personnalisation",
      description: "Je vous offre une flexibilité totale dans la conception de votre blog. Contrairement aux solutions standardisées, je développe une plateforme entièrement personnalisée qui répond précisément à vos besoins éditoriaux et marketing."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre blog, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins et une mise en œuvre plus précise de votre vision éditoriale."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs pour un blog professionnel de haute qualité. Vous bénéficiez d'une plateforme sur-mesure à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const blogTypes = [
    {
      icon: "🏢",
      title: "Blog d'Entreprise",
      description: "Pour les entreprises souhaitant renforcer leur autorité et leur visibilité. Un blog professionnel qui met en avant votre expertise, génère du trafic qualifié et soutient votre stratégie de contenu et d'inbound marketing."
    },
    {
      icon: "👤",
      title: "Blog Personnel",
      description: "Pour les créateurs de contenu, influenceurs et professionnels indépendants. Un blog personnel qui reflète votre identité, présente vos idées et vous permet de développer votre audience et votre communauté."
    },
    {
      icon: "📰",
      title: "Magazine en Ligne",
      description: "Pour les médias et publications en ligne. Une plateforme éditoriale complète avec gestion multi-auteurs, flux de publication avancés et fonctionnalités spécifiques aux médias numériques."
    },
    {
      icon: "🎓",
      title: "Blog Éducatif",
      description: "Pour les formateurs, écoles et plateformes d'apprentissage. Un blog éducatif structuré pour présenter des cours, tutoriels et ressources pédagogiques avec une navigation intuitive et une expérience d'apprentissage optimisée."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Stratégie & Architecture",
      description: "Nous définissons ensemble votre stratégie de contenu, votre ligne éditoriale et l'architecture de votre blog. Cette étape cruciale pose les fondations d'une plateforme efficace et alignée avec vos objectifs."
    },
    {
      number: "02",
      title: "Design & Expérience Utilisateur",
      description: "Je conçois l'interface de votre blog en mettant l'accent sur l'expérience de lecture et la mise en valeur de vos contenus. Le design est optimisé pour l'engagement et la rétention des lecteurs."
    },
    {
      number: "03",
      title: "Développement & Optimisation",
      description: "Je développe votre blog avec les technologies les plus adaptées à vos besoins. Chaque aspect technique est optimisé pour les performances, le SEO et l'expérience utilisateur."
    },
    {
      number: "04",
      title: "Tests & Déploiement",
      description: "Votre blog est rigoureusement testé sur différents appareils et navigateurs. Je vérifie également les performances SEO et l'accessibilité avant la mise en ligne."
    },
    {
      number: "05",
      title: "Formation & Support",
      description: "Je vous forme à l'utilisation de votre interface d'administration et vous accompagne dans vos premiers pas. Un support continu est disponible pour vous aider à tirer le meilleur parti de votre blog."
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
                { label: 'Site de Blog', href: '/developpement-site-blog', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Site de <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Partagez Votre Expertise
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>création de blogs</strong>, je conçois des plateformes de contenu performantes qui renforcent votre visibilité, votre expertise et votre engagement avec votre audience.
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
                        alt="Ma photo de profil"
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
                          <div className="text-3xl mb-2">📝</div>
                          <h3 className="font-semibold text-gray-900">Contenu</h3>
                          <p className="text-sm text-gray-600">Stratégie & Édition</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO</h3>
                          <p className="text-sm text-gray-600">Visibilité Maximale</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Responsive</h3>
                          <p className="text-sm text-gray-600">Tous Appareils</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📊</div>
                          <h3 className="font-semibold text-gray-900">Analytics</h3>
                          <p className="text-sm text-gray-600">Mesure d'Impact</p>
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
                Création de Sites de Blog
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des blogs professionnels qui mettent en valeur votre contenu et renforcent votre présence en ligne.
                Chaque blog est conçu sur-mesure pour répondre à vos objectifs éditoriaux et marketing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {blogServices.map((service, index) => (
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

        {/* Types de Blogs Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Types de Blogs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je crée différents types de blogs adaptés à vos objectifs et à votre audience cible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogTypes.map((type, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
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
                Pourquoi Choisir un Développeur Freelance ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec un développeur web freelance offre de nombreux avantages pour votre projet de blog.
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
                Mon Processus de Création
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique pour transformer votre vision éditoriale en un blog performant et engageant.
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

        {/* Pourquoi un blog Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer un Blog Professionnel ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un blog professionnel est un outil puissant pour renforcer votre présence en ligne, établir votre expertise et développer votre audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visibilité & SEO
                </h3>
                <p className="text-gray-600">
                  Un blog bien optimisé améliore considérablement votre référencement naturel et votre visibilité sur les moteurs de recherche.
                  Il vous permet d'attirer un trafic qualifié et ciblé vers votre site.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Expertise & Autorité
                </h3>
                <p className="text-gray-600">
                  Un blog vous permet de démontrer votre expertise et de vous positionner comme une autorité dans votre domaine.
                  Il renforce votre crédibilité et la confiance de vos clients potentiels.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Engagement & Conversion
                </h3>
                <p className="text-gray-600">
                  Un blog crée un lien direct avec votre audience et favorise l'engagement.
                  Il nourrit votre stratégie de contenu et contribue à convertir vos visiteurs en clients ou abonnés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fonctionnalités de Votre Blog
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des blogs complets avec toutes les fonctionnalités essentielles pour une gestion efficace de votre contenu.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contenu & Édition
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Éditeur de Contenu Avancé</p>
                    <p className="text-gray-600">
                      Éditeur visuel intuitif avec formatage avancé, insertion d'images, de vidéos et d'éléments interactifs.
                      Prévisualisation en temps réel et programmation de publication.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Organisation & Taxonomie</p>
                    <p className="text-gray-600">
                      Système de catégories, tags et taxonomies personnalisées pour une organisation optimale de votre contenu.
                      Archives, recherche avancée et navigation intuitive pour vos lecteurs.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Médias & Ressources</p>
                    <p className="text-gray-600">
                      Bibliothèque de médias avec gestion avancée des images, vidéos et documents.
                      Optimisation automatique des images et galeries visuelles attrayantes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Engagement & Performance
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Commentaires & Interaction</p>
                    <p className="text-gray-600">
                      Système de commentaires modéré avec notifications et réponses imbriquées.
                      Intégration avec les réseaux sociaux et outils de partage.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">SEO & Métadonnées</p>
                    <p className="text-gray-600">
                      Optimisation SEO avancée avec contrôle des métadonnées, URLs personnalisées et balisage schema.org.
                      Sitemaps XML automatiques et intégration avec Google Search Console.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Analytics & Mesure</p>
                    <p className="text-gray-600">
                      Tableaux de bord d'analytics intégrés pour suivre les performances de vos articles.
                      Mesure de l'engagement, du temps de lecture et des conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-gray-600">
                Vous avez des questions sur mes services de création de blog ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le prix d'un site de blog professionnel ?
                </h3>
                <p className="text-gray-600">
                  Le prix d'un blog professionnel varie généralement entre 2000€ et 6000€ selon la complexité du projet, les fonctionnalités requises 
                  et l'architecture éditoriale. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quelles plateformes utilisez-vous pour créer des blogs ?
                </h3>
                <p className="text-gray-600">
                  Je travaille principalement avec WordPress pour sa flexibilité et sa puissance, mais aussi avec des solutions headless CMS comme Strapi ou Contentful 
                  couplées à des frameworks modernes comme Next.js. Le choix dépend de vos besoins spécifiques et de vos objectifs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour créer un blog professionnel ?
                </h3>
                <p className="text-gray-600">
                  La création d'un blog professionnel prend généralement entre 4 et 10 semaines, selon la complexité du projet. 
                  Ce délai inclut la définition de la stratégie éditoriale, la conception, le développement, et la mise en place des premiers contenus.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment optimisez-vous un blog pour le SEO ?
                </h3>
                <p className="text-gray-600">
                  J'optimise les blogs pour le SEO à plusieurs niveaux : structure technique (vitesse, responsive, schema.org), architecture de l'information (taxonomies, URLs, liens internes), 
                  et outils éditoriaux (analyses de mots-clés, suggestions SEO pour les rédacteurs). L'objectif est de maximiser votre visibilité organique.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de rédaction de contenu ?
                </h3>
                <p className="text-gray-600">
                  Je me concentre sur le développement technique de votre blog, mais je peux vous mettre en relation avec des rédacteurs web professionnels 
                  pour la création de vos contenus. Je peux également vous conseiller sur votre stratégie éditoriale et vous former à l'optimisation SEO de vos articles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Lancer Votre Blog ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet de blog et obtenir un devis personnalisé. 
              Ensemble, créons une plateforme de contenu qui renforce votre visibilité et votre expertise.
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
