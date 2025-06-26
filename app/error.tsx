"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertTriangle, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

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
                  <AlertTriangle className="h-16 w-16 text-red-600 dark:text-red-400" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-in-up">
                  ¡Algo salió mal!
                </h1>
              </div>

              {/* Error Message */}
              <div className="mb-12 animate-slide-in-up animate-delay-200">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                  Lo sentimos, ha ocurrido un error inesperado. Nuestro equipo técnico ha sido notificado y está
                  trabajando para solucionarlo.
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Puedes intentar recargar la página o regresar al inicio.
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
                <Button
                  onClick={reset}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3"
                >
                  <RefreshCw className="h-5 w-5" />
                  Intentar de nuevo
                </Button>

                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 dark:border-red-400 dark:text-red-400 bg-transparent"
                  >
                    <Home className="h-5 w-5" />
                    Ir al Inicio
                  </Button>
                </Link>

                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-400 text-gray-600 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-3 text-lg transition-all duration-300 hover-lift flex items-center gap-3 bg-transparent"
                  >
                    <Phone className="h-5 w-5" />
                    Reportar Error
                  </Button>
                </Link>
              </div>

              {/* Error Details (for development) */}
              {process.env.NODE_ENV === "development" && (
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto text-left animate-fade-in animate-delay-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Detalles del Error (Solo en desarrollo):
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-mono break-all">{error.message}</p>
                  {error.digest && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Error ID: {error.digest}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">¿El problema persiste?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Si continúas experimentando problemas, por favor contáctanos. Nuestro equipo técnico te ayudará a
                resolver cualquier inconveniente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-lift"
                  >
                    Contactar Soporte
                  </Button>
                </Link>
                <Link href="/servicios">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover-lift dark:border-red-400 dark:text-red-400 bg-transparent"
                  >
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
