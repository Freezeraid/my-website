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
  title: 'Création de Site Portfolio | Développeur Web Freelance',
  description: 'Création de sites portfolio professionnels et créatifs. Développeur web freelance spécialisé en design moderne, mise en valeur de vos projets et optimisation pour attirer des clients.',
  keywords: ['site portfolio', 'création portfolio en ligne', 'portfolio créatif', 'site web portfolio', 'portfolio professionnel', 'portfolio artiste', 'portfolio photographe', 'portfolio designer', 'développeur web freelance'],
  alternates: {
    canonical: 'https://killiandoubre.com/developpement-site-portfolio',
  },
  openGraph: {
    title: 'Création de Site Portfolio | Développeur Web Freelance',
    description: 'Création de sites portfolio professionnels et créatifs. Développeur web freelance spécialisé en design moderne, mise en valeur de vos projets et optimisation pour attirer des clients.',
    url: 'https://killiandoubre.com/developpement-site-portfolio',
  }
}

export default function SitePortfolioPage() {
  const portfolioServices = [
    {
      icon: "🎨",
      title: "Design Créatif & Unique",
      description: "Création de sites portfolio avec un design sur-mesure qui reflète votre identité et met en valeur votre travail. Des interfaces uniques qui captent l'attention et laissent une impression durable.",
      features: [
        "Design personnalisé selon votre style",
        "Animations et transitions élégantes",
        "Expérience utilisateur immersive"
      ]
    },
    {
      icon: "🖼️",
      title: "Galeries & Projets",
      description: "Mise en valeur optimale de vos projets et réalisations. Des galeries interactives et des présentations de projets qui mettent en lumière votre talent et votre expertise.",
      features: [
        "Galeries d'images haute résolution",
        "Présentations de projets détaillées",
        "Filtres et catégories personnalisables"
      ]
    },
    {
      icon: "📱",
      title: "Responsive & Performant",
      description: "Sites portfolio parfaitement adaptés à tous les appareils et optimisés pour des temps de chargement rapides. Une expérience fluide qui impressionne vos visiteurs, quel que soit leur appareil.",
      features: [
        "Adaptation parfaite sur mobile et tablette",
        "Chargement rapide des images et contenus",
        "Optimisation SEO pour plus de visibilité"
      ]
    }
  ]

  const freelanceAdvantages = [
    {
      title: "Approche Créative Personnalisée",
      description: "En tant que développeur web freelance, je vous propose une approche créative et personnalisée pour votre portfolio. Je prends le temps de comprendre votre univers, votre style et vos objectifs pour créer un site qui vous ressemble vraiment."
    },
    {
      title: "Flexibilité et Adaptabilité",
      description: "Je m'adapte à vos besoins spécifiques et à votre vision créative. Contrairement aux agences qui suivent souvent des processus standardisés, je vous offre une flexibilité totale pour façonner votre portfolio exactement comme vous le souhaitez."
    },
    {
      title: "Communication Directe",
      description: "Travaillez directement avec le développeur de votre portfolio, sans intermédiaires. Cette communication directe garantit que votre vision créative est parfaitement comprise et mise en œuvre avec précision."
    },
    {
      title: "Rapport Qualité-Prix Optimal",
      description: "Sans les frais généraux d'une agence, je vous propose des tarifs compétitifs pour un portfolio professionnel de haute qualité. Vous bénéficiez d'un site sur-mesure à un coût optimisé, avec une transparence totale sur les tarifs."
    }
  ]

  const portfolioTypes = [
    {
      icon: "🎭",
      title: "Portfolio Créatif",
      description: "Pour les artistes, designers, illustrateurs et créatifs. Un portfolio qui met en avant votre style unique et votre processus créatif à travers des galeries visuellement impressionnantes et des présentations de projets détaillées."
    },
    {
      icon: "📸",
      title: "Portfolio Photographe",
      description: "Pour les photographes professionnels. Un portfolio qui présente vos images avec un impact maximal, des galeries optimisées pour les photos haute résolution et une navigation intuitive par collections ou catégories."
    },
    {
      icon: "💼",
      title: "Portfolio Professionnel",
      description: "Pour les consultants, freelances et professionnels. Un portfolio qui met en avant votre expertise, vos services et vos réalisations avec un design élégant et professionnel qui inspire confiance."
    },
    {
      icon: "🏢",
      title: "Portfolio d'Entreprise",
      description: "Pour les agences et studios. Un portfolio qui présente vos projets, votre équipe et votre approche avec un design sophistiqué qui reflète l'identité de votre entreprise et attire de nouveaux clients."
    }
  ]

  const workProcess = [
    {
      number: "01",
      title: "Découverte & Inspiration",
      description: "Nous commençons par explorer votre univers, votre style et vos objectifs. Je m'immerge dans votre travail pour comprendre ce qui vous rend unique et comment le mettre en valeur efficacement."
    },
    {
      number: "02",
      title: "Conception & Direction Artistique",
      description: "Je crée des maquettes et prototypes qui traduisent visuellement votre identité. Nous collaborons étroitement pour affiner le design jusqu'à ce qu'il corresponde parfaitement à votre vision."
    },
    {
      number: "03",
      title: "Développement & Intégration",
      description: "Je développe votre portfolio avec les technologies les plus adaptées à vos besoins. Chaque élément est soigneusement codé pour offrir une expérience utilisateur fluide et immersive."
    },
    {
      number: "04",
      title: "Optimisation & Tests",
      description: "Votre portfolio est rigoureusement testé sur différents appareils et navigateurs. J'optimise les performances, le chargement des images et le référencement pour maximiser l'impact de votre site."
    },
    {
      number: "05",
      title: "Formation & Support",
      description: "Je vous forme à l'utilisation de votre portfolio et vous accompagne après le lancement. Vous pouvez ainsi mettre à jour facilement vos projets et faire évoluer votre site au fil du temps."
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
                { label: 'Développement de Site Portfolio', href: '/developpement-site-portfolio', current: true }
              ]} 
            />
            
            <div className="flex flex-col md:flex-row gap-12 items-center mt-12">
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Site <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Mettez en Valeur Votre Talent
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeur freelance spécialisé en <strong>création de sites portfolio</strong>, je conçois des sites vitrines créatifs et professionnels qui mettent en lumière votre travail et attirent de nouveaux clients ou opportunités.
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
                          <div className="text-3xl mb-2">🎨</div>
                          <h3 className="font-semibold text-gray-900">Design</h3>
                          <p className="text-sm text-gray-600">Créatif & Unique</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🖼️</div>
                          <h3 className="font-semibold text-gray-900">Projets</h3>
                          <p className="text-sm text-gray-600">Mise en Valeur</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">📱</div>
                          <h3 className="font-semibold text-gray-900">Responsive</h3>
                          <p className="text-sm text-gray-600">Tous Appareils</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-3xl mb-2">🔍</div>
                          <h3 className="font-semibold text-gray-900">SEO</h3>
                          <p className="text-sm text-gray-600">Visibilité Optimale</p>
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
                Création de Sites Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des sites portfolio qui mettent en valeur votre travail et votre talent de manière unique et mémorable.
                Chaque portfolio est conçu sur-mesure pour refléter votre identité et atteindre vos objectifs professionnels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {portfolioServices.map((service, index) => (
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

        {/* Types de Portfolio Section */}
        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Types de Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je crée différents types de portfolios adaptés à votre domaine d'activité et à vos objectifs spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioTypes.map((type, index) => (
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
                Travailler avec un développeur web freelance offre de nombreux avantages pour votre projet de portfolio.
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
                Une approche collaborative pour transformer votre vision en un portfolio qui vous ressemble.
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

        {/* Pourquoi un portfolio Section */}
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi Créer un Portfolio en Ligne ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Un portfolio professionnel est essentiel pour tout créatif ou professionnel souhaitant mettre en valeur son travail et attirer de nouvelles opportunités.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visibilité & Crédibilité
                </h3>
                <p className="text-gray-600">
                  Un portfolio en ligne vous donne une présence professionnelle sur le web et renforce votre crédibilité.
                  Il permet aux clients potentiels de découvrir votre travail et d'évaluer votre expertise.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Opportunités & Networking
                </h3>
                <p className="text-gray-600">
                  Un portfolio bien conçu attire de nouvelles opportunités professionnelles et facilite le networking.
                  Il vous permet d'être trouvé par des clients ou employeurs potentiels à la recherche de vos compétences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Évolution & Showcase
                </h3>
                <p className="text-gray-600">
                  Un portfolio en ligne évolue avec vous et votre travail. Il vous permet de présenter vos projets les plus récents
                  et de montrer votre progression et votre développement professionnel au fil du temps.
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
                Fonctionnalités de Votre Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Je développe des portfolios complets avec toutes les fonctionnalités essentielles pour mettre en valeur votre travail efficacement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Présentation & Design
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Design Personnalisé</p>
                    <p className="text-gray-600">
                      Design unique qui reflète votre identité et votre style.
                      Interface moderne, élégante et immersive qui capte l'attention.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Galeries & Projets</p>
                    <p className="text-gray-600">
                      Galeries d'images optimisées et présentations de projets détaillées.
                      Filtres par catégories et navigation intuitive pour une expérience utilisateur fluide.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">À Propos & Contact</p>
                    <p className="text-gray-600">
                      Section "À propos" personnalisée qui raconte votre histoire et présente votre parcours.
                      Formulaire de contact optimisé pour faciliter les prises de contact professionnelles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Technique & Performance
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Responsive & Mobile</p>
                    <p className="text-gray-600">
                      Adaptation parfaite à tous les appareils (ordinateurs, tablettes, smartphones).
                      Expérience utilisateur optimale quel que soit l'écran utilisé.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Performance & SEO</p>
                    <p className="text-gray-600">
                      Optimisation des images et temps de chargement rapides.
                      Référencement naturel optimisé pour une meilleure visibilité sur les moteurs de recherche.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Administration & Mise à jour</p>
                    <p className="text-gray-600">
                      Interface d'administration intuitive pour mettre à jour facilement vos projets.
                      Système de gestion de contenu adapté à vos besoins spécifiques.
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
                Vous avez des questions sur mes services de création de portfolio ? 
                Voici les réponses aux questions les plus courantes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quel est le prix d'un site portfolio ?
                </h3>
                <p className="text-gray-600">
                  Le prix d'un site portfolio professionnel varie généralement entre 1500€ et 5000€ selon la complexité du design, le nombre de projets à intégrer, 
                  et les fonctionnalités requises. Je vous propose un devis personnalisé après analyse précise de vos besoins.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Combien de temps faut-il pour créer un portfolio ?
                </h3>
                <p className="text-gray-600">
                  La création d'un site portfolio professionnel prend généralement entre 3 et 8 semaines, selon la complexité du projet. 
                  Ce délai inclut la phase de conception, le développement, l'intégration des projets et les tests sur différents appareils.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pourrai-je mettre à jour mon portfolio moi-même ?
                </h3>
                <p className="text-gray-600">
                  Oui, je développe des portfolios avec une interface d'administration intuitive qui vous permet de mettre à jour facilement vos projets et contenus. 
                  Je vous fournis également une formation personnalisée pour vous apprendre à gérer votre portfolio en toute autonomie.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Comment optimisez-vous les images pour un portfolio ?
                </h3>
                <p className="text-gray-600">
                  J'utilise des techniques avancées d'optimisation d'images pour garantir un chargement rapide tout en préservant la qualité visuelle : 
                  formats modernes (WebP), chargement progressif, lazy loading, et redimensionnement adaptatif selon les appareils.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Proposez-vous des services de maintenance pour les portfolios ?
                </h3>
                <p className="text-gray-600">
                  Oui, je propose des forfaits de maintenance pour garantir que votre portfolio reste performant, sécurisé et à jour. 
                  Ces services incluent les mises à jour techniques, l'optimisation continue et l'assistance pour l'ajout de nouveaux projets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Créer Votre Portfolio ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de votre projet de portfolio et obtenir un devis personnalisé. 
              Ensemble, créons un portfolio qui met en valeur votre talent et attire de nouvelles opportunités.
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
