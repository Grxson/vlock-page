"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"
import { ArrowLeft, Calendar, MapPin, Square, ChevronLeftIcon, ChevronRightIcon, Users, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"
import ProjectGallery from "@/components/project-gallery"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [currentProject, setCurrentProject] = useState(projects.find((p) => p.id === projectId))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const index = projects.findIndex((p) => p.id === projectId)
    setCurrentIndex(index)
    setCurrentProject(projects[index])
    setSelectedImage(0) // Resetear imagen seleccionada
  }, [projectId])

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proyecto no encontrado</h1>
            <Link href="/proyectos">
              <Button className="bg-red-600 hover:bg-red-700">Volver a Proyectos</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6 animate-slide-in-left">
              <Link href="/proyectos">
                <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Volver a Proyectos
                </Button>
              </Link>
            </div>
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{currentProject.title}</h1>
              <div className="flex justify-center">
                <Badge
                  variant={currentProject.status === "Terminados" ? "default" : "secondary"}
                  className={`text-lg px-4 py-2 ${currentProject.status === "Terminados" ? "bg-green-600" : "bg-orange-600"}`}
                >
                  {currentProject.status}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Project Gallery */}
              <div className="animate-slide-in-left">
                <ProjectGallery
                  images={currentProject.gallery || [currentProject.image]}
                  projectTitle={currentProject.title}
                />
              </div>

              {/* Project Info */}
              <div className="animate-slide-in-right">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información del Proyecto</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>
                      <strong>Ubicación:</strong> {currentProject.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Square className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>
                      <strong>Área:</strong> {currentProject.area}
                    </span>
                  </div>
                  {currentProject.completionDate && (
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <span>
                        <strong>Fecha de Completación:</strong> {currentProject.completionDate}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <Users className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <span>
                      <strong>Tipo de Servicio:</strong> {currentProject.serviceType}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Descripción del Proyecto</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{currentProject.description}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Este proyecto representa uno de nuestros trabajos más destacados en el área de{" "}
                    {currentProject.serviceType.toLowerCase()}, demostrando nuestra capacidad para entregar soluciones
                    de alta calidad que superan las expectativas de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Specifications */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Especificaciones Técnicas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Square className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Área Total</h4>
                  <p className="text-gray-600 dark:text-gray-300">{currentProject.area}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Estado</h4>
                  <p className="text-gray-600 dark:text-gray-300">{currentProject.status}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <MapPin className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ubicación</h4>
                  <p className="text-gray-600 dark:text-gray-300">{currentProject.location}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Users className="h-8 w-8 text-red-600 dark:text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Categoría</h4>
                  <p className="text-gray-600 dark:text-gray-300">{currentProject.serviceType}</p>
                </div>
              </div>
            </div>

            {/* Navigation - Responsive */}
            <div className="animate-slide-in-up">
              {/* Desktop Navigation */}
              <div className="hidden md:flex justify-between items-center">
                <div className="flex-1">
                  {previousProject && (
                    <Link href={`/proyectos/${previousProject.id}`}>
                      <Button
                        variant="outline"
                        className="flex items-center gap-3 hover-lift bg-white dark:bg-gray-800 border-2 border-red-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 p-4 shadow-lg hover:shadow-xl h-12"
                      >
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                          <ChevronLeftIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-red-600 dark:text-red-400">Proyecto Anterior</div>
                          <div className="font-semibold text-gray-900 dark:text-white truncate max-w-48">
                            {previousProject.title}
                          </div>
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>

                <div className="flex-1 text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full inline-block">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Proyecto {currentIndex + 1} de {projects.length}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex justify-end">
                  {nextProject && (
                    <Link href={`/proyectos/${nextProject.id}`}>
                      <Button
                        variant="outline"
                        className="flex items-center gap-3 hover-lift bg-white dark:bg-gray-800 border-2 border-red-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 p-4 shadow-lg hover:shadow-xl h-12"
                      >
                        <div className="text-right">
                          <div className="text-sm font-medium text-red-600 dark:text-red-400">Siguiente Proyecto</div>
                          <div className="font-semibold text-gray-900 dark:text-white truncate max-w-48">
                            {nextProject.title}
                          </div>
                        </div>
                        <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                          <ChevronRightIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden space-y-4">
                <div className="text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full inline-block">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Proyecto {currentIndex + 1} de {projects.length}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {previousProject && (
                    <Link href={`/proyectos/${previousProject.id}`}>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-4 hover-lift p-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-2 border-red-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-400 hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <div className="bg-red-500 p-3 rounded-full">
                          <ChevronLeftIcon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-center flex-1">
                          <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">
                            Proyecto Anterior
                          </div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                            {previousProject.title}
                          </div>
                        </div>
                      </Button>
                    </Link>
                  )}

                  {nextProject && (
                    <Link href={`/proyectos/${nextProject.id}`}>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-4 hover-lift p-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-2 border-red-200 dark:border-red-800 hover:border-red-500 dark:hover:border-red-400 hover:from-red-100 hover:to-red-200 dark:hover:from-red-900/30 dark:hover:to-red-800/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <div className="text-center flex-1">
                          <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">
                            Siguiente Proyecto
                          </div>
                          <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                            {nextProject.title}
                          </div>
                        </div>
                        <div className="bg-red-500 p-3 rounded-full">
                          <ChevronRightIcon className="h-6 w-6 text-white" />
                        </div>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg text-white text-center animate-scale-in">
              <h3 className="text-2xl font-bold mb-4">¿Interesado en un proyecto similar?</h3>
              <p className="text-red-100 mb-6">
                Contáctanos para discutir cómo podemos ayudarte a realizar tu próximo proyecto de construcción.
              </p>
              <Button
                onClick={() => (window.location.href = "/contacto")}
                className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 transition-colors duration-300"
              >
                Ir a Contacto
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
