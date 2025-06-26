import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Search, Home, Building2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      <main className="pt-20">
        {/* Error Section */}
        <section className="py-20 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Error Icon */}
              <div className="mb-8 animate-fade-in">
                <div className="bg-red-100 dark:bg-red-900/20 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                  <Building2 className="h-16 w-16 text-red-600 dark:text-red-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-up">
                  Proyecto no encontrado
                </h1>
              </div>

              {/* Error Message */}
              <div className="mb-12 animate-slide-in-up animate-delay-200">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  Lo sentimos, el proyecto que estás buscando no existe o ha sido removido de nuestro portafolio.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Te invitamos a explorar nuestros otros proyectos destacados.
                </p>
              </div>

              {/* Logo */}
              <div className="mb-12 animate-scale-in animate-delay-300">
                <div className="relative h-24 w-40 mx-auto opacity-60">
                  <Image src="/logo.webp" alt="Vlock Constructora" fill className="object-contain" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-up animate-delay-400">
                <Link href="/proyectos">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Ver Todos los Proyectos
                  </Button>
                </Link>

                <Link href="/proyectos?status=terminados">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 dark:border-red-400 dark:text-red-400 bg-transparent"
                  >
                    <Search className="h-5 w-5" />
                    Proyectos Terminados
                  </Button>
                </Link>

                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 bg-transparent"
                  >
                    <Home className="h-5 w-5" />
                    Ir al Inicio
                  </Button>
                </Link>
              </div>

              {/* Project Categories */}
              <div className="animate-fade-in animate-delay-500">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Explora nuestros proyectos por categoría:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <Link
                    href="/proyectos?type=Obra Civil"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Obra Civil</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Infraestructura y construcción civil</p>
                  </Link>

                  <Link
                    href="/proyectos?type=Obra Industrial"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Obra Industrial</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Instalaciones industriales</p>
                  </Link>

                  <Link
                    href="/proyectos?type=Edificaciones Comerciales"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comerciales</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Centros comerciales y oficinas</p>
                  </Link>

                  <Link
                    href="/proyectos?type=Desarrollos Habitacionales"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Habitacionales</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Desarrollos residenciales</p>
                  </Link>

                  <Link
                    href="/proyectos?type=Pisos de Concreto"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pisos Especializados</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Pisos de concreto industrial</p>
                  </Link>

                  <Link
                    href="/proyectos?type=Construcción Sustentable"
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 hover-lift"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sustentables</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Construcción eco-amigable</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿Buscas un proyecto específico?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Si estás buscando información sobre un proyecto en particular, contáctanos y te ayudaremos a encontrar
                lo que necesitas.
              </p>
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-lift"
                >
                  Contactar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
