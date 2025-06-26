"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"
import { Target, Eye, Compass, Zap, Globe, Users } from "lucide-react"

export default function MisionVisionPage() {
  const objetivos = [
    {
      icon: <Target className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Liderazgo Regional",
      description: "Consolidarnos como la constructora líder en el norte de México para 2030.",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Expansión Nacional",
      description: "Expandir nuestras operaciones a nivel nacional con proyectos de gran envergadura.",
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Innovación Tecnológica",
      description: "Implementar tecnologías de vanguardia en todos nuestros procesos constructivos.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600 dark:text-red-400" />,
      title: "Desarrollo Humano",
      description: "Formar y desarrollar el mejor talento humano del sector constructivo.",
    },
  ]

  const compromisos = [
    {
      title: "Con Nuestros Clientes",
      description:
        "Entregar proyectos que superen sus expectativas, cumpliendo con los más altos estándares de calidad, tiempo y presupuesto.",
      color: "bg-red-100 dark:bg-red-900/20",
    },
    {
      title: "Con Nuestro Equipo",
      description:
        "Proporcionar un ambiente de trabajo seguro, oportunidades de crecimiento profesional y reconocimiento al talento.",
      color: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Con la Sociedad",
      description:
        "Contribuir al desarrollo de las comunidades donde operamos, generando empleo y promoviendo el crecimiento económico.",
      color: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Con el Medio Ambiente",
      description: "Implementar prácticas sustentables y tecnologías verdes que minimicen nuestro impacto ambiental.",
      color: "bg-yellow-100 dark:bg-yellow-900/20",
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">Misión y Visión</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Descubre el propósito que nos impulsa y la visión que guía nuestro camino hacia el futuro.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <Compass className="h-12 w-12 text-red-600 dark:text-red-400 mr-4" />
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Nuestra Misión</h2>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover-lift">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <strong className="text-red-600 dark:text-red-400">
                      Transformar ideas en realidades constructivas excepcionales
                    </strong>
                    , brindando soluciones integrales de construcción que superen las expectativas de nuestros clientes
                    a través de la innovación, calidad superior y compromiso inquebrantable.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ser una empresa de servicios y
                    construcción que destaque por su
                    calidad y profesionalismo, con base en
                    valores de responsabilidad, honestidad
                    y equipo, enfocados siempre en la
                    capacitación y la mejora continua para
                    lograr la satisfacción total de
                    nuestros clientes.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-96 animate-slide-in-right">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Misión de Vlock Constructora"
                  fill
                  className="object-cover rounded-lg shadow-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-96 animate-slide-in-left">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Visión de Vlock Constructora"
                  fill
                  className="object-cover rounded-lg shadow-lg hover-lift"
                />
              </div>
              <div className="animate-slide-in-right">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-red-600 dark:text-red-400 mr-4" />
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Nuestra Visión</h2>
                </div>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover-lift">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    <strong className="text-red-600 dark:text-red-400">
                      Ser la constructora líder y más respetada de México para 2030
                    </strong>
                    , reconocida por nuestra capacidad de innovación, compromiso con la sustentabilidad y excelencia en
                    la ejecución de proyectos de gran envergadura.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Aspiramos a ser el socio estratégico preferido para el desarrollo de infraestructura nacional,
                    estableciendo nuevos estándares de calidad en la industria y contribuyendo significativamente al
                    crecimiento económico y social del país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Objetivos Estratégicos</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Las metas específicas que nos guían hacia el cumplimiento de nuestra visión empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {objetivos.map((objetivo, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-600 hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-center mb-4">
                    {objetivo.icon}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">{objetivo.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{objetivo.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Compromisos</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Los compromisos que asumimos con todos nuestros stakeholders para construir un futuro mejor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {compromisos.map((compromiso, index) => (
                <div
                  key={index}
                  className={`${compromiso.color} p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in animate-delay-${(index + 1) * 100}`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{compromiso.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{compromiso.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-12 rounded-lg text-white animate-scale-in hover-lift">
              <h2 className="text-3xl font-bold mb-6">¿Listo para construir el futuro con nosotros?</h2>
              <p className="text-xl mb-8">
                Únete a nuestra misión de transformar el panorama constructivo mexicano. Juntos podemos hacer realidad
                tus proyectos más ambiciosos.
              </p>
              <button
                onClick={() => (window.location.href = "/contacto")}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover-lift"
              >
                Contactar Ahora
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
