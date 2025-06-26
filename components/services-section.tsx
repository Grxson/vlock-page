"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { services, type Service } from "@/data/services"

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleContactRedirect = () => {
    window.location.href = "/contacto"
  }

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de construcción con la más alta calidad y tecnología de vanguardia para cada
            tipo de proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <Button onClick={() => setSelectedService(service)} className="w-full bg-blue-600 hover:bg-blue-700">
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedService?.name}</DialogTitle>
              <DialogDescription className="text-gray-600 dark:text-gray-400">
                Detalles completos sobre nuestro servicio de {selectedService?.name.toLowerCase()}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="relative h-64 w-full">
                <Image
                  src={selectedService?.image || ""}
                  alt={selectedService?.name || ""}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <DialogDescription className="text-gray-700 text-base leading-relaxed">
                {selectedService?.detailedDescription}
              </DialogDescription>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleContactRedirect}
                  className="bg-red-600 hover:bg-red-700 flex-1 transition-colors duration-300"
                >
                  Contactar Ahora
                </Button>
                <Button variant="outline" onClick={() => setSelectedService(null)} className="flex-1">
                  Cerrar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
