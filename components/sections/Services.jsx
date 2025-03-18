import styles from './Services.module.css'
import Link from 'next/link'

export default function Services() {
  const clientServices = [
    {
      icon: "🎯",
      title: "Sites Web Performants",
      description: "Des sites web modernes qui convertissent. Performance optimale, design sur-mesure et expérience utilisateur exceptionnelle pour votre succès en ligne.",
      features: [
        "Performance SEO maximale",
        "Design responsive moderne",
        "Vitesse de chargement optimisée"
      ]
    },
    {
      icon: "💼",
      title: "Solutions E-commerce",
      description: "Transformez votre activité avec une boutique en ligne performante. De la conception à la mise en production, je vous accompagne vers le succès.",
      features: [
        "Tunnel de vente optimisé",
        "Intégration paiement sécurisée",
        "Backend robuste et évolutif"
      ]
    },
    {
      icon: "🚀",
      title: "Applications Web",
      description: "Des applications web complexes et performantes. Du prototype au produit final, je développe des solutions sur-mesure qui répondent à vos besoins.",
      features: [
        "Architecture évolutive",
        "Sécurité renforcée",
        "Interface intuitive"
      ]
    }
  ]

  return (
    <section id="services" className={`py-24 ${styles.gradientBg}`}>
      <div className={styles.decorativeLine + ' ' + styles.top}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`${styles.sectionTitle} text-4xl font-bold mb-6`}>
            Développement Web Sur-mesure
          </h2>
          <p className="text-lg text-blue-50 max-w-3xl mx-auto">
            Propulsez votre entreprise avec des solutions web sur mesure qui convertissent. Votre vision mérite une réalisation exceptionnelle qui ne se contente pas de répondre à vos attentes, mais les redéfinit complètement !
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {clientServices.map((service, index) => (
            <div key={index} className={`${styles.card} p-8 rounded-xl`}>
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
        
        <div className="mt-32">
          <h2 className={`${styles.sectionTitle} text-4xl font-bold mb-6`}>
            Expertise Technique
          </h2>
          <p className="text-lg text-blue-50 text-center max-w-3xl mx-auto mb-16">
            Développeur Web Freelance & Full Stack passionné, je maîtrise les technologies modernes 
            pour créer des applications web robustes et évolutives.
          </p>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${styles.card} p-8 rounded-xl`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Stack Technique
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-800 mb-2">Frontend</p>
                <p className="text-gray-600">
                  Expertise en <span className={styles.highlight}>React.js</span> et son écosystème.
                  Création d'interfaces utilisateur modernes, réactives et performantes.
                  Maîtrise de Next.js pour des applications SEO-friendly.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-2">Backend</p>
                <p className="text-gray-600">
                  Architecture backend robuste avec <span className={styles.highlight}>Node.js</span> et <span className={styles.highlight}>Golang</span>.
                  Développement d'APIs RESTful et GraphQL performantes.
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-2">Base de données</p>
                <p className="text-gray-600">
                  Expertise en <span className={styles.highlight}>MongoDB</span> et <span className={styles.highlight}>SQL</span>.
                  Conception de schémas de base de données optimisés et requêtes performantes.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} p-8 rounded-xl`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Disponibilité
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-3">Freelance</h4>
                <p className="text-gray-600 mb-4">
                  Disponible pour des missions de développement web. 
                  Je m'adapte à vos besoins et délais pour délivrer des produits 
                  de qualité.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-3">CDI</h4>
                <p className="text-gray-600">
                  Ouvert aux opportunités en CDI. 
                  Je cherche à rejoindre une équipe dynamique où je pourrai 
                  apporter mon expertise et continuer à évoluer.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-block mt-6 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decorativeLine + ' ' + styles.bottom}></div>
    </section>
  )
}