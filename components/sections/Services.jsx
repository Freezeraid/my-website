export default function Services() {
    const services = [
      {
        title: "Développement Front-end",
        description: "Création d'interfaces modernes et réactives avec React.js",
        icon: "🎨"
      },
      {
        title: "Développement Back-end",
        description: "APIs robustes et performantes avec Node.js",
        icon: "⚙️"
      },
      {
        title: "Base de données",
        description: "Conception et optimisation avec MongoDB et SQL",
        icon: "🗄️"
      }
    ]
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mes Services
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Des solutions sur mesure pour vos projets web
            </p>
          </div>
  
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }