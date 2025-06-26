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
    description: "Construcción de infraestructura pública y privada con los más altos estándares de calidad.",
    detailedDescription:
      "Nos especializamos en la construcción de infraestructura civil incluyendo carreteras, puentes, sistemas de drenaje, obras hidráulicas y proyectos de urbanización. Contamos con maquinaria especializada y un equipo técnico altamente capacitado para garantizar la excelencia en cada proyecto.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Infraestructura",
  },
  {
    id: "obra-industrial",
    name: "Obra Industrial",
    description: "Construcción de instalaciones industriales adaptadas a las necesidades específicas de cada cliente.",
    detailedDescription:
      "Desarrollamos proyectos industriales completos incluyendo naves industriales, plantas de producción, almacenes especializados y centros de distribución. Nuestro enfoque se centra en la funcionalidad, seguridad y eficiencia operativa.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Industrial",
  },
  {
    id: "pisos-concreto",
    name: "Pisos de Concreto",
    description: "Instalación de pisos de concreto industriales y comerciales de alta resistencia.",
    detailedDescription:
      "Ofrecemos soluciones integrales en pisos de concreto para uso industrial, comercial y residencial. Utilizamos tecnología de punta para garantizar durabilidad, resistencia y acabados perfectos. Incluye pisos pulidos, estampados y con tratamientos especiales.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Especializado",
  },
  {
    id: "edificaciones-comerciales",
    name: "Edificaciones Comerciales",
    description: "Construcción de espacios comerciales modernos y funcionales.",
    detailedDescription:
      "Construimos centros comerciales, oficinas corporativas, locales comerciales y espacios de retail. Nos enfocamos en crear ambientes que maximicen la experiencia del usuario y la rentabilidad del negocio, cumpliendo con todas las normativas comerciales.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Comercial",
  },
  {
    id: "desarrollos-habitacionales",
    name: "Desarrollos Habitacionales",
    description: "Construcción de viviendas y desarrollos residenciales de calidad.",
    detailedDescription:
      "Desarrollamos proyectos habitacionales desde viviendas unifamiliares hasta complejos residenciales. Nos especializamos en crear espacios habitables que combinen comodidad, funcionalidad y diseño arquitectónico contemporáneo.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Residencial",
  },
  {
    id: "remodelaciones",
    name: "Remodelaciones",
    description: "Renovación y modernización de espacios existentes.",
    detailedDescription:
      "Transformamos espacios existentes mediante remodelaciones integrales o parciales. Desde renovaciones residenciales hasta modernización de oficinas y locales comerciales, adaptándonos a las nuevas necesidades y tendencias del mercado.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Renovación",
  },
  {
    id: "construccion-sustentable",
    name: "Construcción Sustentable",
    description: "Proyectos eco-amigables con tecnologías verdes y materiales sustentables.",
    detailedDescription:
      "Implementamos prácticas de construcción sustentable utilizando materiales eco-amigables, sistemas de eficiencia energética, captación de agua pluvial y tecnologías verdes. Contribuimos al cuidado del medio ambiente sin comprometer la calidad.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sustentable",
  },
]
