import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"
import { Building2, Users, Award, Clock, Shield, Lightbulb, Heart, Target } from "lucide-react"

export default function QuienesSomosPage() {
  const stats = [
    {
      icon: <Building2 className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "500+",
      label: "Proyectos Completados",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "50+",
      label: "Profesionales Especializados",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "10+",
      label: "Años de Experiencia",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600 dark:text-red-400" />,
      number: "100%",
      label: "Proyectos Entregados a Tiempo",
    },
  ]

  const valores = [
    {
      icon: <Shield className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Integridad",
      description:
        "Actuamos con honestidad y transparencia en todas nuestras relaciones comerciales, manteniendo los más altos estándares éticos.",
    },
    {
      icon: <Award className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Excelencia",
      description:
        "Nos comprometemos a superar las expectativas en cada proyecto, utilizando las mejores prácticas y tecnologías disponibles.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Innovación",
      description:
        "Adoptamos nuevas tecnologías y metodologías para ofrecer soluciones constructivas más eficientes y sustentables.",
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Compromiso",
      description:
        "Nos dedicamos completamente a cada proyecto, asegurando la satisfacción total de nuestros clientes y el cumplimiento de plazos.",
    },
    {
      icon: <Users className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Trabajo en Equipo",
      description:
        "Fomentamos la colaboración y comunicación efectiva entre todos los miembros de nuestro equipo y stakeholders.",
    },
    {
      icon: <Target className="h-12 w-12 text-red-600 dark:text-red-400" />,
      title: "Responsabilidad",
      description:
        "Asumimos la responsabilidad total por nuestros proyectos, desde la planificación hasta la entrega final.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">¿Quiénes Somos?</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Conoce la historia, experiencia y valores que nos han convertido en líderes del sector constructivo en
              México.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Fundada en 2016, <strong className="text-red-600 dark:text-red-400">Vlock Constructora</strong>{" "}
                    nació con la visión de transformar el panorama constructivo mexicano a través de la innovación,
                    calidad y compromiso con nuestros clientes.
                  </p>
                  <p>
                    Durante más de 10 años, hemos crecido desde una pequeña empresa hasta convertirnos en una
                    de las constructoras más respetadas de México.
                  </p>
                  <p>
                    Nuestro equipo de profesionales altamente capacitados trabaja con los más altos estándares de calidad y seguridad, garantizando resultados excepcionales que superan las expectativas de nuestros clientes.
                  </p>
                  <p>
                    Hoy en día, continuamos expandiendo nuestros horizontes, incorporando tecnologías de vanguardia y
                    prácticas sustentables para construir no solo edificaciones, sino también un futuro mejor para las
                    comunidades que servimos.
                  </p>
                </div>
              </div>
              <div className="relative h-96 lg:h-full animate-slide-in-right">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Equipo de Vlock Constructora"
                  fill
                  className="object-cover rounded-lg shadow-lg hover-lift"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-20 animate-fade-in hover-lift">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Nuestra Experiencia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="animate-slide-in-left">
                  <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                    Sectores de Especialización
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Obra Civil e Infraestructura</li>
                    <li>• Construcción Industrial</li>
                    <li>• Edificaciones Comerciales</li>
                    <li>• Desarrollos Habitacionales</li>
                    <li>• Pisos de Concreto Especializados</li>
                    <li>• Construcción Sustentable</li>
                    <li>• Remodelaciones y Renovaciones</li>
                  </ul>
                </div>
                <div className="animate-slide-in-right">
                  <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                    Certificaciones y Reconocimientos
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Certificación ISO 9001:2015</li>
                    <li>• Registro ante CMIC</li>
                    <li>• Certificación LEED Green Associate</li>
                    <li>• Premio a la Excelencia Constructiva 2023</li>
                    <li>• Reconocimiento Empresa Socialmente Responsable</li>
                    <li>• Certificación en Seguridad Industrial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Los principios que guían cada decisión y acción en Vlock Constructora, definiendo quiénes somos y cómo
                trabajamos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in animate-delay-${((index % 3) + 1) * 100}`}
                >
                  <div className="flex justify-center mb-6">{valor.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">{valor.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Profesionales altamente capacitados y comprometidos con la excelencia en cada proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Equipo Directivo",
                  description: "Liderazgo estratégico con más de 20 años de experiencia en el sector constructivo.",
                },
                {
                  title: "Ingenieros y Arquitectos",
                  description:
                    "Profesionales certificados especializados en diseño, planificación y ejecución de proyectos.",
                },
                {
                  title: "Personal Técnico",
                  description:
                    "Técnicos especializados y operarios certificados que garantizan la calidad en cada detalle.",
                },
              ].map((team, index) => (
                <div key={index} className={`text-center animate-slide-in-up animate-delay-${(index + 1) * 100}`}>
                  <div className="relative h-64 w-64 mx-auto mb-6 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt={team.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{team.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
