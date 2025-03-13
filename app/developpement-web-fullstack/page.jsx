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
  title: 'Développement Web Full Stack | Node.js & React | Développeur Freelance',
  description: 'Services de développement web full stack avec Node.js et React. Développeur freelance spécialisé en applications web modernes, performantes et évolutives pour les entreprises.',
  keywords: ['développement web full stack', 'développeur Node.js', 'développeur React', 'MERN stack', 'JavaScript', 'applications web', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-web-fullstack',
  },
  openGraph: {
    title: 'Développement Web Full Stack | Node.js & React | Développeur Freelance',
    description: 'Services de développement web full stack avec Node.js et React. Développeur freelance spécialisé en applications web modernes, performantes et évolutives pour les entreprises.',
    url: 'https://killiandoubre.com/developpement-web-fullstack',
  }
}

export default function DeveloppementWebFullStackPage() {
  const fullStackServices = [
    {
      icon: "⚛️",
      title: "Applications Web React",
      description: "Développement d'applications web modernes avec React et Next.js. Des interfaces utilisateur réactives, performantes et optimisées pour une expérience utilisateur exceptionnelle.",
      features: [
        "Interfaces utilisateur dynamiques et réactives",
        "Optimisation des performances et du SEO",
        "Architecture robuste et maintenable"
      ]
    },
    {
      icon: "🔌",
      title: "APIs & Backend Node.js",
      description: "Création d'APIs RESTful et de services backend avec Node.js et Express. Des solutions backend évolutives, sécurisées et performantes pour alimenter vos applications.",
      features: [
        "APIs RESTful ou GraphQL",
        "Authentification et sécurité avancées",
        "Optimisation des performances"
      ]
    },
    {
      icon: "🗄️",
      title: "Bases de Données & Cloud",
      description: "Conception et implémentation de solutions de stockage de données adaptées à vos besoins. Intégration avec les services cloud pour une scalabilité optimale.",
      features: [
        "MongoDB, PostgreSQL, MySQL",
        "Solutions cloud (AWS, Google Cloud, Azure)",
        "Optimisation des requêtes et performances"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Expertise Full Stack Spécialisée",
      description: "En tant que développeur full stack spécialisé en Node.js et React, je maîtrise l'ensemble de la chaîne de développement web moderne. Cette expertise de bout en bout me permet de créer des applications cohérentes et optimisées à tous les niveaux."
    },
    {
      title: "Solutions Sur-Mesure",
      description: "Je développe des solutions entièrement personnalisées qui répondent précisément aux besoins spécifiques de votre entreprise. Contrairement aux solutions prêtes à l'emploi, mes développements s'adaptent parfaitement à vos processus métier."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre projet, sans intermédiaires. Cette communication directe garantit une meilleure compréhension de vos besoins et une mise en œuvre plus précise de vos exigences techniques et fonctionnelles."
    },
    {
      title: "Flexibilité et Réactivité",
      description: "Je vous offre une flexibilité totale dans le développement de votre projet. Contrairement aux grandes agences, je peux m'adapter rapidement aux changements de priorités et aux évolutions de vos besoins avec une grande réactivité."
    }
  ]

  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "React", description: "Bibliothèque JavaScript pour créer des interfaces utilisateur interactives" },
        { name: "Next.js", description: "Framework React pour le rendu côté serveur et la génération de sites statiques" },
        { name: "Redux", description: "Gestion d'état prévisible pour les applications JavaScript" },
        { name: "TypeScript", description: "Superset de JavaScript avec typage statique" },
        { name: "Tailwind CSS", description: "Framework CSS utilitaire pour un développement rapide" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "Environnement d'exécution JavaScript côté serveur" },
        { name: "Express", description: "Framework web minimaliste pour Node.js" },
        { name: "NestJS", description: "Framework Node.js progressif pour construire des applications serveur efficaces" },
        { name: "GraphQL", description: "Langage de requête pour les APIs" },
        { name: "REST API", description: "Architecture pour les systèmes distribués" }
      ]
    },
    {
      category: "Bases de Données",
      items: [
        { name: "MongoDB", description: "Base de données NoSQL orientée documents" },
        { name: "PostgreSQL", description: "Système de gestion de base de données relationnelle" },
        { name: "MySQL", description: "Système de gestion de base de données relationnelle open source" },
        { name: "Redis", description: "Store de structure de données en mémoire" },
        { name: "Prisma", description: "ORM nouvelle génération pour Node.js et TypeScript" }
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker", description: "Plateforme de conteneurisation" },
        { name: "AWS", description: "Services cloud d'Amazon Web Services" },
        { name: "Google Cloud", description: "Plateforme cloud de Google" },
        { name: "CI/CD", description: "Intégration et déploiement continus" },
        { name: "Git", description: "Système de contrôle de version" }
      ]
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Spécifications",
      description: "Nous commençons par une analyse approfondie de vos besoins, objectifs et contraintes techniques. Cette phase cruciale permet de définir les spécifications fonctionnelles et techniques de votre projet."
    },
    {
      number: "02",
      title: "Architecture & Conception",
      description: "Je conçois l'architecture technique de votre application en mettant l'accent sur la scalabilité, la maintenabilité et les performances. Les choix technologiques sont adaptés à vos besoins spécifiques."
    },
    {
      number: "03",
      title: "Développement Itératif",
      description: "Je développe votre application de manière itérative, avec des cycles de développement courts et des démonstrations régulières. Cette approche agile permet d'ajuster le développement en fonction de vos retours."
    },
    {
      number: "04",
      title: "Tests & Assurance Qualité",
      description: "Chaque fonctionnalité est rigoureusement testée pour garantir sa fiabilité et ses performances. Tests unitaires, d'intégration et end-to-end pour une qualité irréprochable."
    },
    {
      number: "05",
      title: "Déploiement & Support",
      description: "Je déploie votre application dans un environnement de production sécurisé et vous accompagne après la mise en ligne. Formation, documentation et support technique pour assurer le succès de votre projet."
    }
  ]

  const projectTypes = [
    {
      icon: "🚀",
      title: "Applications Web Complexes",
      description: "Développement d'applications web métier complexes avec des fonctionnalités avancées. Solutions sur-mesure pour optimiser vos processus internes et améliorer la productivité de vos équipes."
    },
    {
      icon: "🔄",
      title: "Intégrations & API",
      description: "Création d'APIs et intégration avec des systèmes tiers. Connectez vos différents outils et plateformes pour un écosystème digital cohérent et efficace."
    },
    {
      icon: "📊",
      title: "Tableaux de Bord & Analytics",
      description: "Développement de tableaux de bord interactifs et d'outils d'analyse de données. Visualisez vos données métier et prenez des décisions éclairées basées sur des insights précis."
    },
    {
      icon: "🛠️",
      title: "Modernisation d'Applications",
      description: "Refonte et modernisation d'applications existantes. Transformez vos solutions obsolètes en applications modernes, performantes et évolutives avec les dernières technologies web."
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
                { label: 'Développement Web Full Stack', href: '/developpement-web-fullstack', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développement <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Full Stack</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Node.js & React
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>développement web full stack</strong>, je crée des applications web modernes, performantes et évolutives avec Node.js et React pour répondre aux besoins spécifiques de votre entreprise.
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
                          <div className="text-3xl mb-2">⚛️</div>
                          <h3 className="font-semibold text-gray-900">React</h3>
                          <p className="text-sm text-gray-600">Frontend Moderne</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🟢</div>
                          <h3 className="font-semibold text-gray-900">Node.js</h3>
                          <p className="text-sm text-gray-600">Backend Performant</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🗄️</div>
                          <h3 className="font-semibold text-gray-900">MongoDB</h3>
                          <p className="text-sm text-gray-600">Base de Données</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">☁️</div>
                          <h3 className="font-semibold text-gray-900">Cloud</h3>
                          <p className="text-sm text-gray-600">Déploiement</p>
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
                Développement Web Full Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des applications web complètes, du frontend au backend, en utilisant les technologies modernes du JavaScript.
                Chaque solution est conçue sur-mesure pour répondre aux besoins spécifiques de votre entreprise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {fullStackServices.map((service, index) => (
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

        {/* Types de Projets Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Types de Projets
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe différents types d'applications web adaptées aux besoins spécifiques des entreprises.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectTypes.map((type, index) => (
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

        {/* Technologies Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies Maîtrisées
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je maîtrise un large éventail de technologies modernes pour développer des applications web performantes et évolutives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {tech.category}
                  </h3>
                  <div className="space-y-4">
                    {tech.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="font-medium text-gray-800 mb-1">{item.name}</p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
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
                Pourquoi me choisir pour le développement de votre application Full-Stack ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Travailler avec un moi offre de nombreux avantages pour votre projet d'application web.
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
                Mon Processus de Développement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et collaborative pour transformer vos idées en solutions web performantes.
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

        {/* Pourquoi le développement full stack Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir le Développement Full Stack ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le développement full stack avec Node.js et React offre de nombreux avantages pour vos projets web.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Performance & Rapidité
                </h3>
                <p className="text-gray-600">
                  Node.js et React sont optimisés pour les performances. Temps de chargement rapides, 
                  interfaces fluides et expérience utilisateur réactive pour vos applications web.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Évolutivité & Maintenabilité
                </h3>
                <p className="text-gray-600">
                  Architecture modulaire et évolutive qui s'adapte à la croissance de votre entreprise.
                  Code maintenable et extensible pour des évolutions futures simplifiées.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Cohérence & Efficacité
                </h3>
                <p className="text-gray-600">
                  JavaScript sur toute la stack pour une cohérence technique et une efficacité de développement.
                  Partage de code entre frontend et backend pour une meilleure productivité.
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
                Vous avez des questions sur mes services de développement web full stack ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le coût d'un projet de développement web full stack ?
                </h3>
                <p className="text-gray-600">
                  Le coût d'un projet de développement web full stack varie généralement entre 5 000€ et 50 000€ selon la complexité du projet, les fonctionnalités requises 
                  et l'envergure de l'application. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour développer une application web full stack ?
                </h3>
                <p className="text-gray-600">
                  Le développement d'une application web full stack prend généralement entre 2 et 6 mois, selon la complexité du projet. 
                  Je recommande une approche par phases, avec des livraisons régulières de fonctionnalités pour vous permettre de voir l'avancement du projet.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pourquoi choisir Node.js et React pour mon projet ?
                </h3>
                <p className="text-gray-600">
                  Node.js et React sont des technologies modernes, performantes et largement adoptées dans l'industrie. Elles permettent de développer des applications web rapides, 
                  réactives et évolutives. De plus, l'utilisation de JavaScript sur toute la stack simplifie la maintenance et l'évolution de votre application.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment assurez-vous la sécurité des applications web ?
                </h3>
                <p className="text-gray-600">
                  La sécurité est une priorité dans mes développements. J'implémente les meilleures pratiques de sécurité : authentification robuste, 
                  protection contre les attaques courantes (XSS, CSRF, injections SQL), chiffrement des données sensibles, et audits de sécurité réguliers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance pour les applications web ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance pour garantir le bon fonctionnement et l'évolution de votre application web. 
                  Ces services incluent les mises à jour de sécurité, l'optimisation des performances, le support technique, et l'ajout de nouvelles fonctionnalités.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet de développement web et obtenir un devis personnalisé. 
              Ensemble, transformons votre vision en une application web performante et évolutive.
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
