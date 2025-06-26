import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <div className="relative h-40 w-60">
                <Image src="/logo.webp" alt="Vlock Constructora" fill className="object-contain" />
              </div>
            </div>

            <p className="text-gray-300">
              Construyendo el futuro con excelencia, innovación y compromiso. Más de 10 años de experiencia en el sector
              de la construcción.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/servicios#obra-civil" className="hover:text-red-400 transition-colors">
                  Obra Civil
                </Link>
              </li>
              <li>
                <Link href="/servicios#obra-industrial" className="hover:text-red-400 transition-colors">
                  Obra Industrial
                </Link>
              </li>
              <li>
                <Link href="/servicios#pisos-concreto" className="hover:text-red-400 transition-colors">
                  Pisos de Concreto
                </Link>
              </li>
              <li>
                <Link href="/servicios#edificaciones-comerciales" className="hover:text-red-400 transition-colors">
                  Edificaciones Comerciales
                </Link>
              </li>
              <li>
                <Link href="/servicios#desarrollos-habitacionales" className="hover:text-red-400 transition-colors">
                  Desarrollos Habitacionales
                </Link>
              </li>
              <li>
                <Link href="/servicios#construccion-sustentable" className="hover:text-red-400 transition-colors">
                  Construcción Sustentable
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/quienes-somos" className="hover:text-red-400 transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/mision-vision" className="hover:text-red-400 transition-colors">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-red-400 transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-red-400 transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-red-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-red-400 transition-colors">
                  Solicitar Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-red-400" />
                <div>
                  <p>+52 (1) 33 1290-8259</p>
                  <p>+52 (1) 33 1700-6380</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-red-400" />
                <div>
                  <p>vlock.constructora@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-red-400 mt-1" />
                <div>
                  <p>C. Aldama 1949</p>
                  <p>Col. San Antonio, Guadalajara, Jal.</p>
                  <p>C.P. 44800, México</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm">© 2025 Vlock Constructora. Todos los derechos reservados.</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
