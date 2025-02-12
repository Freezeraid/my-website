import OptimizedImage from '../ui/OptimizedImage'

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <OptimizedImage
                src="/photo_close.jpg"
                alt="Ma photo de profil"
                fill
                priority
                className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4"
            />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Développeur Web Full Stack</span>
            <span className="block text-blue-600">React & Node.js</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Je crée des applications web modernes, performantes et optimisées pour répondre à vos besoins.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}