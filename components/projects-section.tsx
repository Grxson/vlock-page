"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { Calendar, MapPin, Square } from "lucide-react"

export default function ProjectsSection() {
  const [statusFilter, setStatusFilter] = useState<"all" | "Terminados" | "En proceso">("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")

  const serviceTypes = useMemo(() => {
    const types = [...new Set(projects.map((project) => project.serviceType))]
    return types
  }, [])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const statusMatch = statusFilter === "all" || project.status === statusFilter
      const typeMatch = typeFilter === "all" || project.serviceType === typeFilter
      return statusMatch && typeMatch
    })
  }, [statusFilter, typeFilter])

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con la
            excelencia.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">Estado:</span>
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className={statusFilter === "all" ? "bg-blue-600" : ""}
              >
                Todos
              </Button>
              <Button
                variant={statusFilter === "Terminados" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Terminados")}
                className={statusFilter === "Terminados" ? "bg-blue-600" : ""}
              >
                Terminados
              </Button>
              <Button
                variant={statusFilter === "En proceso" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("En proceso")}
                className={statusFilter === "En proceso" ? "bg-blue-600" : ""}
              >
                En Proceso
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 self-center">Tipo:</span>
              <Button
                variant={typeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setTypeFilter("all")}
                className={typeFilter === "all" ? "bg-blue-600" : ""}
              >
                Todos
              </Button>
              {serviceTypes.map((type) => (
                <Button
                  key={type}
                  variant={typeFilter === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTypeFilter(type)}
                  className={typeFilter === type ? "bg-blue-600" : ""}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Terminados" ? "default" : "secondary"}
                      className={project.status === "Terminados" ? "bg-green-600" : "bg-orange-600"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-4 w-4" />
                    <span>{project.area}</span>
                  </div>
                  {project.completionDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Completado: {project.completionDate}</span>
                    </div>
                  )}
                </div>

                <Badge variant="outline" className="mb-4">
                  {project.serviceType}
                </Badge>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Ver Detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron proyectos con los filtros seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  )
}
