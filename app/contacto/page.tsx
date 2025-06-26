"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ScrollToTopOnMount from "@/components/scroll-to-top-on-mount"
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactoPage() {
  const contactOptions = [
    {
      title: "Consulta General",
      description: "Para información general sobre nuestros servicios",
      message:
        "Hola, me interesa conocer más sobre los servicios de Vlock Constructora. ¿Podrían proporcionarme información general?",
      icon: <FaWhatsapp className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
    {
      title: "Solicitar Cotización",
      description: "Para solicitar una cotización de tu proyecto",
      message:
        "Hola, me gustaría solicitar una cotización para mi proyecto. ¿Podrían contactarme para discutir los detalles?",
      icon: <Phone className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
    {
      title: "Obra Civil",
      description: "Consultas específicas sobre obra civil e infraestructura",
      message:
        "Hola, estoy interesado en sus servicios de Obra Civil. ¿Podrían proporcionarme más información sobre sus capacidades en infraestructura?",
      icon: <CheckCircle className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
    {
      title: "Obra Industrial",
      description: "Para proyectos industriales y manufactureros",
      message:
        "Hola, necesito información sobre sus servicios de Obra Industrial. ¿Tienen experiencia en proyectos manufactureros?",
      icon: <CheckCircle className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
    {
      title: "Edificaciones Comerciales",
      description: "Centros comerciales, oficinas y locales",
      message:
        "Hola, estoy planeando un proyecto de edificación comercial. ¿Podrían proporcionarme información sobre sus servicios?",
      icon: <CheckCircle className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
    {
      title: "Desarrollos Habitacionales",
      description: "Viviendas y complejos residenciales",
      message:
        "Hola, me interesa desarrollar un proyecto habitacional. ¿Tienen experiencia en desarrollos residenciales?",
      icon: <CheckCircle className="h-8 w-8 text-red-600 dark:text-red-400" />,
    },
  ]

  const handleWhatsAppContact = (message: string) => {
    const whatsappUrl = `https://wa.me/+523312908259?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ScrollToTopOnMount />
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up">Contáctanos</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto animate-slide-in-up animate-delay-200">
              Estamos aquí para ayudarte con tu proyecto. Contáctanos por WhatsApp para una respuesta rápida y
              personalizada.
            </p>
          </div>
        </section>

        {/* How to Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Cómo Contactarnos?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Utilizamos WhatsApp como nuestro canal principal de comunicación para brindarte atención rápida y
                personalizada. Selecciona el tipo de consulta que mejor se adapte a tu necesidad.
              </p>
            </div>

            {/* WhatsApp Instructions */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 mb-16 animate-slide-in-up">
              <div className="flex items-center justify-center mb-6">
                <FaWhatsapp className="h-12 w-12 text-green-600 dark:text-green-400 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">WhatsApp Business</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-green-100 dark:bg-green-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Selecciona tu Consulta</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Elige el botón que mejor describa tu tipo de proyecto o consulta
                  </p>
                </div>
                <div>
                  <div className="bg-green-100 dark:bg-green-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mensaje Automático</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Se abrirá WhatsApp con un mensaje predeterminado que puedes personalizar
                  </p>
                </div>
                <div>
                  <div className="bg-green-100 dark:bg-green-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Respuesta Rápida</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nuestro equipo te responderá en horario laboral para ayudarte
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactOptions.map((option, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 hover-lift animate-scale-in animate-delay-${((index % 3) + 1) * 100}`}
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{option.icon}</div>
                    <CardTitle className="text-xl dark:text-white">{option.title}</CardTitle>
                    <CardDescription className="dark:text-gray-300">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleWhatsAppContact(option.message)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
                    >
                      <FaWhatsapp className="h-4 w-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Teléfonos</p>
                      <p className="text-gray-600 dark:text-gray-300">+52 (81) 1234-5678</p>
                      <p className="text-gray-600 dark:text-gray-300">+52 (81) 8765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Correos Electrónicos</p>
                      <p className="text-gray-600 dark:text-gray-300">info@vlock.com.mx</p>
                      <p className="text-gray-600 dark:text-gray-300">ventas@vlock.com.mx</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-600 dark:text-red-400 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Dirección</p>
                      <p className="text-gray-600 dark:text-gray-300">Av. Constitución 1234</p>
                      <p className="text-gray-600 dark:text-gray-300">Col. Centro, Monterrey, N.L.</p>
                      <p className="text-gray-600 dark:text-gray-300">C.P. 64000, México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Horarios de Atención</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">WhatsApp Business</p>
                      <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-300">Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Oficina</p>
                      <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600 dark:text-gray-300">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mt-6">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Nota:</strong> Para emergencias fuera del horario laboral, envía tu mensaje por WhatsApp y
                      te responderemos al siguiente día hábil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-scale-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">¿Tienes un proyecto en mente?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                No esperes más. Contáctanos hoy mismo y comencemos a hacer realidad tu proyecto de construcción.
              </p>
              <Button
                onClick={() =>
                  handleWhatsAppContact(
                    "Hola, tengo un proyecto en mente y me gustaría discutir las posibilidades con su equipo. ¿Podrían contactarme?",
                  )
                }
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-lift"
              >
                <FaWhatsapp className="h-6 w-6 mr-3" />
                Iniciar Conversación
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
