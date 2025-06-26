"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { services, type Service } from "@/data/services"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleContactRedirect = () => {
    window.location.href = "/contacto"
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">Nuestros Servicios</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Ofrecemos soluciones integrales de construcción con la más alta calidad y tecnología de vanguardia para
              cada tipo de proyecto.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  id={service.id}
                  className={`hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 hover-lift animate-scale-in animate-delay-${((index % 3) + 1) * 100}`}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 dark:text-white">{service.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </CardDescription>
                    <Button
                      onClick={() => setSelectedService(service)}
                      className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300"
                    >
                      Ver más
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl dark:bg-gray-800 animate-scale-in">
            <DialogHeader>
              <DialogTitle className="text-2xl dark:text-white">{selectedService?.name}</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Información detallada sobre nuestro servicio de {selectedService?.name.toLowerCase()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {selectedService?.image && (
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={selectedService.image ?? "/placeholder.svg"}
                    alt={selectedService.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <DialogDescription className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {selectedService?.detailedDescription}
              </DialogDescription>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleContactRedirect}
                  className="bg-green-600 hover:bg-green-700 flex-1 transition-colors duration-300"
                >
                  Contactar Ahora
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 dark:border-gray-600 dark:text-gray-300 transition-colors duration-300"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
