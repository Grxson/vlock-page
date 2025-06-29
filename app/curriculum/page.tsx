"use client"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function CurriculumPage() {
  const handleViewPDF = () => {
    // Aquí puedes poner la URL real del PDF
    window.open("/curriculum-vlock-constructora.pdf", "_blank")
  }

  const handleDownloadPDF = () => {
    // Aquí puedes poner la URL real del PDF para descarga
    const link = document.createElement("a")
    link.href = "/curriculum-vlock-constructora.pdf"
    link.download = "Curriculum-Vlock-Constructora.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">
              Curriculum Empresarial
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Descarga nuestro curriculum empresarial completo con información detallada sobre nuestra experiencia,
              proyectos y capacidades.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Logo - Optimizado para logo vertical con texto incluido */}
              <div className="mb-12 animate-scale-in">
                <div className="relative h-48 w-64 mx-auto mb-8">
                  <Image
                    src="/logo.webp"
                    alt="Vlock Constructora"
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Más de 10 años construyendo el futuro con excelencia, innovación y compromiso. Nuestro curriculum
                  empresarial contiene información detallada sobre nuestra trayectoria, proyectos destacados,
                  certificaciones y capacidades técnicas.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up animate-delay-300">
                <Button
                  onClick={handleViewPDF}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-lift flex items-center gap-3"
                >
                  <Eye className="h-6 w-6" />
                  Ver Curriculum
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg transition-all duration-300 hover-lift flex items-center gap-3 dark:border-red-400 dark:text-red-400"
                >
                  <Download className="h-6 w-6" />
                  Descargar Curriculum
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-400">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Información Incluida</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-left">
                    <li>• Historia y trayectoria empresarial</li>
                    <li>• Proyectos destacados con imágenes</li>
                    <li>• Certificaciones y reconocimientos</li>
                    <li>• Capacidades técnicas y equipamiento</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sectores de Experiencia</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-left">
                    <li>• Obra Civil e Infraestructura</li>
                    <li>• Construcción Industrial</li>
                    <li>• Edificaciones Comerciales</li>
                    <li>• Desarrollos Habitacionales</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Datos Destacados</h3>
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-left">
                    <li>• +500 proyectos completados</li>
                    <li>• +10 años de experiencia</li>
                    <li>• 100% proyectos a tiempo</li>
                    <li>• Equipo de +50 profesionales</li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg text-white animate-scale-in animate-delay-500">
                <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                <p className="text-red-100 mb-6">
                  Si requieres información adicional o tienes alguna pregunta específica sobre nuestros servicios,
                  contáctanos directamente.
                </p>
                <Button
                  onClick={() => (window.location.href = "/contacto")}
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 transition-colors duration-300"
                >
                  Contactar Ahora
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
