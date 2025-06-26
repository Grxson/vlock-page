"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { Calendar, MapPin, Square } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const [statusFilter, setStatusFilter] = useState<"all" | "Terminados" | "En proceso">("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize filters from URL params only once
  useEffect(() => {
    if (!isInitialized) {
      const statusParam = searchParams.get("status")
      const typeParam = searchParams.get("type")

      if (statusParam === "terminados") setStatusFilter("Terminados")
      else if (statusParam === "en-proceso") setStatusFilter("En proceso")
      else setStatusFilter("all")

      if (typeParam) setTypeFilter(typeParam)
      else setTypeFilter("all")

      setIsInitialized(true)
    }
  }, [searchParams, isInitialized])

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

  const handleStatusFilterChange = (newStatus: "all" | "Terminados" | "En proceso") => {
    setStatusFilter(newStatus)
  }

  const handleTypeFilterChange = (newType: string) => {
    setTypeFilter(newType)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-16">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">Nuestros Proyectos</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Descubre algunos de nuestros proyectos más destacados que demuestran nuestra experiencia y compromiso con
              la excelencia.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-12 space-y-4 animate-slide-in-up animate-delay-300">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">Estado:</span>
                  <Button
                    variant={statusFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusFilterChange("all")}
                    className={
                      statusFilter === "all" ? "bg-red-600 hover:bg-red-700" : "dark:border-gray-600 dark:text-gray-300"
                    }
                  >
                    Todos
                  </Button>
                  <Button
                    variant={statusFilter === "Terminados" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusFilterChange("Terminados")}
                    className={
                      statusFilter === "Terminados"
                        ? "bg-red-600 hover:bg-red-700"
                        : "dark:border-gray-600 dark:text-gray-300"
                    }
                  >
                    Terminados
                  </Button>
                  <Button
                    variant={statusFilter === "En proceso" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleStatusFilterChange("En proceso")}
                    className={
                      statusFilter === "En proceso"
                        ? "bg-red-600 hover:bg-red-700"
                        : "dark:border-gray-600 dark:text-gray-300"
                    }
                  >
                    En Proceso
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 self-center">Tipo:</span>
                  <Button
                    variant={typeFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTypeFilterChange("all")}
                    className={
                      typeFilter === "all" ? "bg-red-600 hover:bg-red-700" : "dark:border-gray-600 dark:text-gray-300"
                    }
                  >
                    Todos
                  </Button>
                  {serviceTypes.map((type) => (
                    <Button
                      key={type}
                      variant={typeFilter === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleTypeFilterChange(type)}
                      className={
                        typeFilter === type ? "bg-red-600 hover:bg-red-700" : "dark:border-gray-600 dark:text-gray-300"
                      }
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid - Cambiado a 4 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 hover-lift animate-scale-in animate-delay-${((index % 4) + 1) * 100}`}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant={project.status === "Terminados" ? "default" : "secondary"}
                          className={`text-xs ${project.status === "Terminados" ? "bg-green-600" : "bg-orange-600"}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2 dark:text-white line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-1 mb-3 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-3 w-3" />
                        <span>{project.area}</span>
                      </div>
                      {project.completionDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span className="truncate">Completado: {project.completionDate}</span>
                        </div>
                      )}
                    </div>

                    <Badge variant="outline" className="mb-3 text-xs dark:border-gray-600 dark:text-gray-300">
                      {project.serviceType}
                    </Badge>

                    <Link href={`/proyectos/${project.id}`}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 transition-colors duration-300 text-sm py-2">
                        Ver Detalles
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No se encontraron proyectos con los filtros seleccionados.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
