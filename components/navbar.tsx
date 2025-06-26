"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors py-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Más grande */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-24 w-40">
                <Image src="/logo.webp" alt="Vlock Constructora" fill className="object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </Link>

              {/* Nosotros Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("nosotros")}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                >
                  Nosotros <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "nosotros" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border dark:border-gray-700">
                    <Link
                      href="/quienes-somos"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Quiénes somos
                    </Link>
                    <Link
                      href="/mision-vision"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Misión y Visión
                    </Link>
                    <Link
                      href="/curriculum"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Curriculum
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/servicios"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Servicios
              </Link>

              {/* Proyectos Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("proyectos")}
                  className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                >
                  Proyectos <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "proyectos" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border dark:border-gray-700">
                    <Link
                      href="/proyectos"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
                    >
                      Ver Todos los Proyectos
                    </Link>
                    <hr className="my-1 border-gray-200 dark:border-gray-600" />
                    <Link
                      href="/proyectos?status=terminados"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      Terminados
                    </Link>
                    <Link
                      href="/proyectos?status=en-proceso"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      En Proceso
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contacto"
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contacto
              </Link>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Inicio
              </Link>
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900 dark:text-white">Nosotros</div>
                <Link
                  href="/quienes-somos"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Quiénes somos
                </Link>
                <Link
                  href="/mision-vision"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Misión y Visión
                </Link>
                <Link
                  href="/curriculum"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Curriculum
                </Link>
              </div>
              <Link
                href="/servicios"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Servicios
              </Link>
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900 dark:text-white">Proyectos</div>
                <Link
                  href="/proyectos"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Ver Todos
                </Link>
                <Link
                  href="/proyectos?status=terminados"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  Terminados
                </Link>
                <Link
                  href="/proyectos?status=en-proceso"
                  className="block px-6 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  En Proceso
                </Link>
              </div>
              <Link
                href="/contacto"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
