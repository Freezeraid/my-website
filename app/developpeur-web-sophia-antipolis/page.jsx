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
  title: 'Développeur Web Sophia Antipolis | Création Sites & Applications | Freelance',
  description: 'Développeur web freelance à Sophia Antipolis spécialisé en création de sites web, applications SaaS et solutions Web innovantes. Expertise technique adaptée aux startups et entreprises tech de la technopole.',
  keywords: ['développeur web Sophia Antipolis', 'création site web Sophia Antipolis', 'freelance web Sophia Antipolis', 'développeur technopole', 'site internet Sophia Antipolis', 'création application web Sophia Antipolis', 'développeur SaaS Sophia Antipolis', 'agence web Sophia Antipolis', 'refonte site web Sophia Antipolis'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpeur-web-sophia-antipolis',
  },
  openGraph: {
    title: 'Développeur Web Sophia Antipolis | Création Sites & Applications | Freelance',
    description: 'Développeur web freelance à Sophia Antipolis spécialisé en création de sites web, applications SaaS et solutions Web innovantes. Expertise technique adaptée aux startups et entreprises tech de la technopole.',
    url: 'https://killiandoubre.com/developpeur-web-sophia-antipolis',
  }
}

// Données du service pour le schéma JSON-LD
const serviceData = {
  name: 'Développeur Web Freelance à Sophia Antipolis',
  description: 'Services de développement web sur-mesure à Sophia Antipolis : création de sites web, applications SaaS, plateformes web et optimisation technique pour startups et entreprises de la technopole.',
  slug: 'developpeur-web-sophia-antipolis',
  image: 'https://killiandoubre.com/photo_close.jpg',
  features: [
    'Création de sites web professionnels',
    'Développement d\'applications SaaS',
    'Solutions web pour startups',
    'Optimisation technique & performance',
    'Maintenance et support technique'
  ],
  faqs: [
    {
      question: 'Quels types de projets web développez-vous à Sophia Antipolis ?',
      answer: 'Je développe tous types de projets web pour les entreprises et startups de Sophia Antipolis : sites vitrines, applications SaaS, plateformes collaboratives, dashboards, API, intranets et solutions Web sur-mesure adaptés aux besoins spécifiques de chaque secteur d\'activité de la technopole, avec une attention particulière aux entreprises tech, R&D, biotech et services innovants.'
    },
    {
      question: 'Combien coûte le développement d\'une application web à Sophia Antipolis ?',
      answer: 'Le coût d\'un projet web à Sophia Antipolis varie selon vos besoins spécifiques. Les sites vitrines débutent à partir de 1500€, les applications web à partir de 5000€, et les plateformes SaaS sur-mesure à partir de 8000€. Je vous propose un devis détaillé et transparent après analyse approfondie de votre projet, de ses spécifications techniques et de vos objectifs business.'
    },
    {
      question: 'Proposez-vous des services de maintenance pour les applications web à Sophia Antipolis ?',
      answer: 'Oui, basé à Nice, je propose des services complets de maintenance et d\'évolution pour les applications web des entreprises de Sophia Antipolis. Cela inclut la correction de bugs, les mises à jour de sécurité, l\'amélioration des performances, l\'ajout de nouvelles fonctionnalités et l\'adaptation continue de votre solution aux évolutions technologiques et aux besoins de votre entreprise.'
    }
  ]
}

export default function DeveloppeurWebSophiaAntipolisPage() {
  const webServices = [
    {
      icon: "🖥️",
      title: "Sites Web Professionnels",
      description: "Conception et développement de sites web sur-mesure pour les entreprises et startups de Sophia Antipolis. Des sites vitrines élégants, responsive et optimisés pour convertir vos visiteurs en clients et valoriser votre expertise technologique dans cette technopole d'excellence.",
      features: [
        "Design contemporain adapté à l'identité de votre entreprise tech",
        "Compatibilité parfaite sur tous les appareils",
        "Optimisation pour le référencement local à Sophia Antipolis",
        "Intégration de fonctionnalités adaptées à votre secteur d'activité"
      ]
    },
    {
      icon: "⚙️",
      title: "Applications SaaS & Plateformes",
      description: "Développement d'applications SaaS et plateformes web innovantes pour les entreprises de Sophia Antipolis. Des solutions Web robustes et évolutives qui répondent aux exigences techniques élevées des acteurs de la technopole et facilitent la transformation numérique de votre organisation.",
      features: [
        "Architecture scalable et sécurisée",
        "Interfaces utilisateurs intuitives et réactives",
        "Intégration avec vos systèmes et API existants",
        "Déploiement continu et maintenance évolutive"
      ]
    },
    {
      icon: "🚀",
      title: "Solutions pour Startups",
      description: "Création de MVP (Minimum Viable Product) et solutions web agiles pour les startups de Sophia Antipolis. Des développements rapides et efficaces qui vous permettent de valider votre concept, attirer des investisseurs et accélérer votre croissance dans l'écosystème innovant de la technopole.",
      features: [
        "Développement itératif et méthodologie agile",
        "Focus sur les fonctionnalités essentielles",
        "Évolutivité technique pour accompagner votre croissance",
        "Conseil stratégique en architecture technique"
      ]
    },
    {
      icon: "⚡",
      title: "Optimisation & Performance",
      description: "Audit et optimisation de solutions web existantes pour les entreprises de Sophia Antipolis. Améliorez les performances, la sécurité et l'expérience utilisateur de vos applications pour répondre aux standards élevés attendus dans cette technopole d'excellence.",
      features: [
        "Audit technique complet et recommandations",
        "Optimisation des performances et du temps de chargement",
        "Renforcement de la sécurité et protection des données",
        "Amélioration de l'expérience utilisateur"
      ]
    }
  ]

  const localAdvantages = [
    {
      title: "Expertise de l'Écosystème Tech",
      description: "Ma compréhension approfondie de l'écosystème technologique de Sophia Antipolis me permet de créer des solutions parfaitement adaptées aux attentes des entreprises innovantes. Je comprends les spécificités du tissu économique de la technopole et les exigences techniques élevées qui y prévalent, entre R&D, deep tech, IA et services numériques avancés."
    },
    {
      title: "Accompagnement Technique & Stratégique",
      description: "En tant que développeur web freelance basé à Nice, je propose mes services aux entreprises de Sophia Antipolis avec une approche qui va au-delà du simple développement. Je vous accompagne dans la définition de votre stratégie technique, le choix des technologies et l'évolution de votre architecture pour garantir la pérennité de vos solutions Web."
    },
    {
      title: "Solutions Sur-Mesure pour Entreprises Tech",
      description: "Chaque projet étant unique, je développe des solutions entièrement personnalisées qui répondent précisément aux exigences spécifiques de votre entreprise à Sophia Antipolis. J'évite les approches standardisées pour créer des plateformes innovantes qui vous distinguent dans le paysage technologique compétitif de la technopole."
    },
    {
      title: "Support Technique & Évolution Continue",
      description: "Je vous propose un support technique réactif et une approche d'amélioration continue de votre solution web. Mon intervention garantit non seulement la stabilité de vos applications, mais aussi leur évolution constante pour intégrer les nouvelles technologies et répondre aux besoins changeants de votre entreprise dans cet environnement d'innovation."
    }
  ]

  const businessSectors = [
    {
      icon: "🔬",
      title: "R&D & Deep Tech",
      description: "Solutions web et applications pour les centres de recherche, laboratoires et entreprises deep tech de Sophia Antipolis. Plateformes spécialisées pour la gestion de données scientifiques, la collaboration entre chercheurs et la valorisation de vos innovations technologiques auprès de partenaires et investisseurs."
    },
    {
      icon: "🧠",
      title: "IA & Data Science",
      description: "Interfaces web et dashboards pour entreprises spécialisées en intelligence artificielle et data science à Sophia Antipolis. Solutions permettant de visualiser, analyser et présenter vos données et algorithmes avec des fonctionnalités avancées adaptées aux exigences techniques de ce secteur de pointe."
    },
    {
      icon: "🌐",
      title: "Télécoms & Réseaux",
      description: "Plateformes web pour entreprises de télécommunications et réseaux de Sophia Antipolis. Applications de monitoring, interfaces de gestion et solutions client adaptées aux spécificités de ce secteur historique de la technopole, avec une attention particulière à la performance et à la sécurité."
    },
    {
      icon: "💊",
      title: "Biotech & Santé",
      description: "Solutions Web pour entreprises de biotechnologie et santé de Sophia Antipolis. Sites web et applications respectant les normes strictes du secteur, facilitant la communication scientifique et la présentation de vos innovations médicales tout en garantissant la conformité réglementaire."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Analyse & Spécifications",
      description: "Je commence par une analyse approfondie de votre activité, vos objectifs business et vos besoins techniques spécifiques à Sophia Antipolis. Cette phase d'étude me permet d'établir des spécifications détaillées et de définir l'architecture optimale pour votre solution, en tenant compte des standards élevés de la technopole."
    },
    {
      number: "02",
      title: "Conception & Prototypage",
      description: "J'élabore une stratégie technique sur-mesure et crée des prototypes fonctionnels de votre solution. Nous collaborons étroitement pour valider les choix technologiques et affiner l'expérience utilisateur jusqu'à ce qu'ils correspondent parfaitement à votre vision et aux attentes de vos utilisateurs."
    },
    {
      number: "03",
      title: "Développement Agile",
      description: "Je développe votre solution avec une approche agile, en livrant régulièrement des fonctionnalités testables. Chaque itération est soigneusement programmée et testée pour garantir une qualité optimale, avec une communication transparente sur l'avancement et les choix techniques effectués."
    },
    {
      number: "04",
      title: "Tests & Optimisation",
      description: "Votre solution est rigoureusement testée à travers différents scénarios d'utilisation. J'optimise les performances, la sécurité et l'expérience utilisateur pour garantir une solution robuste et évolutive, capable de répondre aux exigences techniques élevées des entreprises de Sophia Antipolis."
    },
    {
      number: "05",
      title: "Déploiement & Évolution",
      description: "Après le déploiement, je reste à vos côtés pour assurer la stabilité de votre solution et planifier son évolution. Je propose un accompagnement continu pour adapter votre plateforme aux évolutions technologiques et aux nouveaux besoins de votre entreprise dans cet environnement d'innovation permanente."
    }
  ]

  const digitalStats = [
    {
      figure: "92%",
      description: "des entreprises de Sophia Antipolis considèrent leur présence web comme un élément stratégique essentiel pour leur développement et leur visibilité internationale"
    },
    {
      figure: "76%",
      description: "des startups de la technopole ont besoin de solutions web sur-mesure pour répondre à leurs besoins spécifiques et soutenir leur croissance rapide"
    },
    {
      figure: "83%",
      description: "des entreprises tech de Sophia Antipolis recherchent des développeurs comprenant les enjeux spécifiques de leur secteur d'activité"
    },
    {
      figure: "68%",
      description: "des projets web à Sophia Antipolis nécessitent une expertise technique avancée et une connaissance approfondie des dernières technologies"
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
                { label: 'Développeur Web Freelance à Sophia Antipolis', href: '/developpeur-web-sophia-antipolis', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Développeur Web Freelance à <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Sophia Antipolis</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Création de Sites Web & Applications
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur web freelance basé à <strong>Nice</strong>, je propose mes services aux entreprises et startups de <strong>Sophia Antipolis</strong> pour concevoir des sites internet et applications sur-mesure adaptés aux exigences techniques élevées de la technopole. Mon approche combine expertise technique, compréhension de l'écosystème d'innovation et accompagnement personnalisé pour la réussite de votre projet web.
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
                        alt="Killian DOUBRE - Développeur Web Freelance à Sophia Antipolis"
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
                          <div className="text-3xl mb-2">⚙️</div>
                          <h3 className="font-semibold text-gray-900">Applications</h3>
                          <p className="text-sm text-gray-600">SaaS</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🚀</div>
                          <h3 className="font-semibold text-gray-900">Solutions</h3>
                          <p className="text-sm text-gray-600">Startups</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">⚡</div>
                          <h3 className="font-semibold text-gray-900">Performance</h3>
                          <p className="text-sm text-gray-600">Technique</p>
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
                Services de Développement Web à Sophia Antipolis
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je propose une gamme complète de services de développement web pour les entreprises et startups de Sophia Antipolis.
                Chaque solution est élaborée sur-mesure pour répondre à vos besoins techniques spécifiques et renforcer votre position dans l'écosystème innovant de la technopole.
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

        {/* Secteurs d'activité Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Solutions Adaptées aux Secteurs de la Technopole
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des solutions web sur-mesure pour différents secteurs d'activité à Sophia Antipolis, en tenant compte des spécificités techniques et des exigences élevées de chaque domaine d'innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessSectors.map((sector, index) => (
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
                L'Importance du Web à Sophia Antipolis
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quelques chiffres qui démontrent l'importance d'une présence web professionnelle pour les entreprises de Sophia Antipolis, particulièrement dans cette technopole à forte concentration d'innovation et d'expertise technique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {digitalStats.map((stat, index) => (
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Collaborer avec moi présente de nombreux avantages pour votre projet web à Sophia Antipolis.
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

        {/* Processus Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Mon Processus de Développement
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une approche méthodique et collaborative pour transformer votre vision en une solution web performante et adaptée aux standards élevés de Sophia Antipolis.
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

        {/* Web Development Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Développement Web à Sophia Antipolis : Expertise Technique
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                En tant que développeur web proposant mes services à Sophia Antipolis, je comprends parfaitement les spécificités de cette technopole et les besoins des entreprises innovantes qui y sont implantées.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Excellence Technique
                </h3>
                <p className="text-gray-600">
                  Une expertise technique approfondie est essentielle pour répondre aux attentes élevées des entreprises de Sophia Antipolis. 
                  Je développe des solutions robustes, évolutives et performantes qui respectent les standards de qualité attendus dans cette technopole reconnue pour son excellence et son innovation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Agilité & Innovation
                </h3>
                <p className="text-gray-600">
                  L'agilité et la capacité d'innovation sont des valeurs fondamentales à Sophia Antipolis. 
                  Je travaille avec une méthodologie agile qui permet d'adapter rapidement votre solution aux évolutions du marché et aux nouvelles opportunités, tout en maintenant une communication transparente et une collaboration étroite tout au long du projet.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Écosystème Connecté
                </h3>
                <p className="text-gray-600">
                  Sophia Antipolis est un écosystème d'innovation où la collaboration et les synergies sont essentielles. 
                  Je développe des solutions qui s'intègrent parfaitement dans cet environnement connecté, en facilitant les interactions avec vos partenaires, clients et fournisseurs, et en vous permettant de tirer pleinement parti des opportunités offertes par la technopole.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Technologies & Stack Technique
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                J'utilise les technologies les plus modernes et performantes pour développer des solutions web de qualité pour les entreprises de Sophia Antipolis.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Front-End & Interfaces
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Langages & Frameworks</p>
                    <p className="text-gray-600">
                      React, Next.js, Vue.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">UX/UI & Design</p>
                    <p className="text-gray-600">
                      Responsive Design, Mobile-First, Figma, Adobe XD, Accessibilité Web, Animations & Transitions, Design System
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Performance & Optimisation</p>
                    <p className="text-gray-600">
                      Core Web Vitals, Lazy Loading, Code Splitting, Bundle Optimization, PWA, Service Workers
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Back-End & Infrastructure
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Langages & Frameworks</p>
                    <p className="text-gray-600">
                      Node.js, Express, NestJS, Python, Django, FastAPI, PHP, Laravel, GraphQL, REST API
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Bases de Données & Stockage</p>
                    <p className="text-gray-600">
                      PostgreSQL, MySQL, MongoDB, Redis, Firebase, Elasticsearch, AWS S3, Google Cloud Storage
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">DevOps & Cloud</p>
                    <p className="text-gray-600">
                      Docker, Kubernetes, CI/CD, AWS, Google Cloud, Azure, Vercel, Netlify, Monitoring, Logging
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Développer Votre Projet Web à Sophia Antipolis ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet web et obtenir un devis personnalisé. 
              Ensemble, créons une solution web performante qui répond parfaitement aux besoins techniques et aux ambitions de votre entreprise dans la technopole.
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
