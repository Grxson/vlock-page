export interface Service {
  id: string
  name: string
  description: string
  detailedDescription: string
  image: string
  category: string
}

export const services: Service[] = [
  {
    id: "obra-civil",
    name: "Obra Civil",
    description: "Infraestructura básica para desarrollos urbanos e industriales.",
    detailedDescription:
      "Realizamos obras civiles como terracerías, nivelaciones, cimentaciones, redes hidráulicas, drenaje y urbanización. Nuestra experiencia abarca desde parques industriales hasta fraccionamientos residenciales.",
    image: "/Servicios/obra-civil.webp?height=300&width=400&text=Obra+Civil",
    category: "Infraestructura",
  },
  {
    id: "obra-industrial",
    name: "Obra Industrial",
    description: "Construcción de plantas, naves y espacios productivos.",
    detailedDescription:
      "Desarrollamos obras industriales como naves de manufactura, almacenes logísticos, bardas perimetrales, muros interiores y áreas de producción. Diseñamos según los requerimientos operativos de cada empresa.",
    image: "/Servicios/obra-industrial.webp?height=300&width=400&text=Obra+Industrial",
    category: "Industrial",
  },
{
    id: "edificaciones-comerciales",
    name: "Edificaciones Comerciales",
    description: "Construcción y adecuación de espacios comerciales y corporativos.",
    detailedDescription:
      "Desarrollamos oficinas, locales comerciales, centros de atención y remodelaciones corporativas. Nos enfocamos en funcionalidad, diseño moderno y cumplimiento de normativas para negocios exitosos.",
    image: "/Servicios/edificaciones-comerciales.webp?height=300&width=400&text=Comercial",
    category: "Comercial",
  },
  {
    id: "remodelacion-y-mantenimiento",
    name: "Remodelación y Mantenimiento",
    description: "Rehabilitación de espacios para mayor funcionalidad y estética.",
    detailedDescription:
      "Ejecutamos remodelaciones integrales de oficinas, salas de espera, estaciones de servicio y áreas operativas. Ofrecemos mantenimiento correctivo y preventivo con soluciones modernas y adaptadas.",
    image: "/Servicios/remodelacion.webp?height=300&width=400&text=Remodelaciones",
    category: "Renovación",
  },
  {
    id: "desarrollos-residenciales",
    name: "Desarrollos Residenciales",
    description: "Construcción de viviendas multifamiliares y fraccionamientos.",
    detailedDescription:
      "Participamos en la edificación de torres de departamentos, conjuntos habitacionales y fraccionamientos urbanos. Nuestros proyectos están enfocados en diseño, seguridad y confort.",
    image: "/Servicios/desarrollos-residenciales.webp?height=300&width=400&text=Residencial",
    category: "Residencial",
  },
  {
    id: "urbanizacion-industrial",
    name: "Urbanización Industrial",
    description: "Preparación de parques industriales listos para operación.",
    detailedDescription:
      "Realizamos obras de urbanización en zonas industriales como vialidades, banquetas, alumbrado, instalaciones eléctricas, drenaje y acceso. Ideal para desarrolladores de parques empresariales.",
    image: "/Servicios/urbanizacion.webp?height=300&width=400&text=Urbanización",
    category: "Infraestructura",
  }
]
