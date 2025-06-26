import { Building2, Users, Award, Clock } from "lucide-react"

export default function AboutSection() {
  const stats = [
    {
      icon: <Building2 className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "500+",
      label: "Proyectos Completados",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "50+",
      label: "Profesionales",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "10+",
      label: "Años de Experiencia",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "100%",
      label: "Proyectos a Tiempo",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Por qué elegir Vlock?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos una empresa constructora con más de 10 años de experiencia, comprometida con la excelencia, innovación
            y la satisfacción total de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center animate-slide-in-up animate-delay-${(index + 1) * 100} hover-lift bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg`}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Experiencia</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                En Vlock Constructora, nos especializamos en brindar soluciones integrales de construcción que van desde
                obra civil e industrial hasta desarrollos habitacionales y construcción sustentable.
              </p>
              <p>
                Nuestro equipo de profesionales altamente capacitados utiliza las mejores prácticas de la industria y
                tecnología de vanguardia para garantizar que cada proyecto se complete con los más altos estándares de
                calidad.
              </p>
              <p>
                Nos enorgullecemos de mantener relaciones duraderas con nuestros clientes, basadas en la confianza,
                transparencia y resultados excepcionales.
              </p>
            </div>
          </div>
          <div className="relative h-96 animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg"></div>
            <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center hover-lift">
              <div className="text-center p-8">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Compromiso con la Calidad</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Cada proyecto es una oportunidad para demostrar nuestro compromiso con la excelencia y la innovación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
