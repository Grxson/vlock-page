"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ImageIcon, Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProjectGalleryProps {
    images: string[]
    projectTitle: string
    className?: string
}

export default function ProjectGallery({ images, projectTitle, className = "" }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    if (!images || images.length === 0) {
        return null
    }

    const nextImage = () => {
        setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
    }

    const previousImage = () => {
        setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") previousImage()
        if (e.key === "ArrowRight") nextImage()
        if (e.key === "Escape") setIsFullscreen(false)
    }

    return (
        <div className={`space-y-6 ${className}`}>
            {/* Main Image */}
            <div className="relative group">
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={images[selectedImage] || "/placeholder.svg"}
                        alt={`${projectTitle} - Imagen ${selectedImage + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={selectedImage === 0}
                    />

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {selectedImage + 1} / {images.length}
                    </div>

                    {/* Fullscreen Button */}
                    <button
                        onClick={() => setIsFullscreen(true)}
                        className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
                    >
                        <Maximize2 className="h-4 w-4" />
                    </button>

                    {/* Navigation Arrows on Image */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <ImageIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                        <h3 className="text-lg font-semibold">Galería de Imágenes</h3>
                    </div>

                    {/* Thumbnails Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`relative h-20 w-full overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group ${selectedImage === index
                                    ? "ring-4 ring-red-500 dark:ring-red-400 shadow-lg scale-105"
                                    : "hover:ring-2 hover:ring-red-300 dark:hover:ring-red-600"
                                    }`}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${projectTitle} - Miniatura ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                {/* Selected Indicator */}
                                {selectedImage === index && (
                                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                                        <div className="bg-red-500 text-white rounded-full p-1">
                                            <ImageIcon className="h-3 w-3" />
                                        </div>
                                    </div>
                                )}

                                {/* Image Number */}
                                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded backdrop-blur-sm">
                                    {index + 1}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={previousImage}
                            className="flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors bg-transparent"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Anterior
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={nextImage}
                            className="flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors bg-transparent"
                        >
                            Siguiente
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}

            {/* Fullscreen Modal */}
            <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
                <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95" onKeyDown={handleKeyDown}>
                    <DialogHeader className="sr-only">
                        <DialogTitle>Vista ampliada de {projectTitle}</DialogTitle>
                        <DialogDescription>
                            Imagen {selectedImage + 1} de {images.length} en vista de pantalla completa. Use las flechas para navegar
                            o presione Escape para cerrar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                            <Image
                                src={images[selectedImage] || "/placeholder.svg"}
                                alt={`${projectTitle} - Imagen ${selectedImage + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Navigation in Fullscreen */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={previousImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/80 transition-all hover:scale-110"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-4 rounded-full hover:bg-black/80 transition-all hover:scale-110"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                </>
                            )}

                            {/* Image Info */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                                {selectedImage + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
