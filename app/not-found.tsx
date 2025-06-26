import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Search, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      <main className="pt-20">
        {/* Error Section */}
        <section className="py-20 min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Error Code */}
              <div className="mb-8 animate-fade-in">
                <h1 className="text-9xl md:text-[12rem] font-bold text-red-600 dark:text-red-400 opacity-20">404</h1>
                <div className="relative -mt-16 md:-mt-24">
                  <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-up">
                    ¡Oops! Página no encontrada
                  </h2>
                </div>
              </div>

              {/* Error Message */}
              <div className="mb-12 animate-slide-in-up animate-delay-200">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  Lo sentimos, la página que estás buscando no existe o ha sido movida. Puede que el enlace esté roto o
                  que hayas escrito mal la dirección.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Pero no te preocupes, te ayudamos a encontrar lo que necesitas.
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
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3"
                  >
                    <Home className="h-5 w-5" />
                    Ir al Inicio
                  </Button>
                </Link>

                <Link href="/proyectos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 dark:border-red-400 dark:text-red-400 bg-transparent"
                  >
                    <Search className="h-5 w-5" />
                    Ver Proyectos
                  </Button>
                </Link>

                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 bg-transparent"
                  >
                    <Phone className="h-5 w-5" />
                    Contactar
                  </Button>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in animate-delay-500">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Enlaces útiles:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <Link
                    href="/servicios"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300 hover:underline"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/quienes-somos"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300 hover:underline"
                  >
                    Quiénes Somos
                  </Link>
                  <Link
                    href="/mision-vision"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300 hover:underline"
                  >
                    Misión y Visión
                  </Link>
                  <Link
                    href="/curriculum"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-300 hover:underline"
                  >
                    Curriculum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿Necesitas ayuda?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Si no encuentras lo que buscas, nuestro equipo está aquí para ayudarte. Contáctanos y te guiaremos hacia
                la información correcta.
              </p>
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-lift"
                >
                  Obtener Ayuda
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
