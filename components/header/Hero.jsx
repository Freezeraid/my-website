import OptimizedImage from '../ui/OptimizedImage'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className={`relative min-h-screen flex items-center ${styles.heroGradient}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`${styles.backgroundElement} top-20 right-[10%] w-[500px] h-[500px] bg-blue-100 blur-3xl`} />
        <div className={`${styles.backgroundElement} bottom-40 left-[5%] w-[400px] h-[400px] bg-purple-100 blur-3xl`} />
        <div className={`${styles.backgroundElement} top-40 left-[25%] w-[300px] h-[300px] bg-indigo-100 blur-3xl`} />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center lg:text-left lg:pr-8">
            <h2 className={`text-4xl mb-4 sm:text-5xl lg:text-6xl font-bold tracking-tight ${styles.gradientText}`}>
              Killian Doubre
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Développeur Web Full Stack
            </h1>
            <h2 className={`block text-3xl mt-2 font-bold tracking-tight ${styles.gradientText}`}>
              Création & Solutions
            </h2>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            Spécialisé dans la création de sites web et d'applications performantes, je transforme vos objectifs en solutions digitales qui se démarquent. De l'architecture à l'expérience utilisateur, chaque ligne de code est optimisée pour votre succès.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Me contacter
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Voir mes services
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <OptimizedImage
                  src="/photo_close.jpg"
                  alt="Ma photo de profil"
                  fill
                  priority
                  className="rounded-full overflow-hidden w-64 h-64 mx-auto mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <Link 
            href="#services"
            className={`${styles.scrollIndicator} cursor-pointer hover:scale-110 transition-transform duration-300`}
            aria-label="Aller à la section Services"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-blue-600 hover:text-blue-700"
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  )
}