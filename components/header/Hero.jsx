import OptimizedImage from '../ui/OptimizedImage'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className={`relative min-h-[calc(100vh)] pt-28 flex items-center ${styles.heroGradient}`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`${styles.backgroundElement} top-32 right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-100 blur-3xl`} />
        <div className={`${styles.backgroundElement} bottom-20 left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-100 blur-3xl`} />
        <div className={`${styles.backgroundElement} top-40 left-[15%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-indigo-100 blur-3xl`} />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="text-center md:text-left space-y-4 mt-6 md:mt-0">
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight ${styles.gradientText}`}>
                Killian Doubre
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                Développeur Web Freelance
              </h1>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${styles.gradientText}`}>
                Création & Solutions
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Spécialisé dans la création de sites web et d'applications performantes, je transforme vos objectifs en sites ou applications web qui se démarquent. De l'architecture à l'expérience utilisateur, chaque ligne de code est optimisée pour votre succès.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  Me contacter
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  Voir mes services
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-full overflow-hidden w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
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
          </div>
        </div>

        <div className="flex justify-center pb-12 pt-6">
          <Link 
            href="#services"
            className={`${styles.scrollIndicator} cursor-pointer hover:scale-110 transition-transform duration-300`}
            aria-label="Aller à la section Services"
          >
            <svg 
              width="32" 
              height="32" 
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