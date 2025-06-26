export interface Project {
  id: string
  title: string
  description: string
  image: string
  gallery: string[] // Nueva propiedad para la galería
  status: "Terminados" | "En proceso"
  serviceType: string
  location: string
  completionDate?: string
  area: string
}

export const projects: Project[] = [
  {
    id: "centro-comercial-plaza-norte",
    title: "Centro Comercial Plaza Norte",
    description: "Construcción de centro comercial de 15,000 m² con 3 niveles y estacionamiento subterráneo.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Fachada+Principal",
      "/placeholder.svg?height=300&width=400&text=Interior+Centro+Comercial",
      "/placeholder.svg?height=300&width=400&text=Estacionamiento",
      "/placeholder.svg?height=300&width=400&text=Área+de+Restaurantes",
      "/placeholder.svg?height=300&width=400&text=Vista+Aérea",
    ],
    status: "Terminados",
    serviceType: "Edificaciones Comerciales",
    location: "Monterrey, N.L.",
    completionDate: "Marzo 2024",
    area: "15,000 m²",
  },
  {
    id: "puente-vehicular-rio-santa-catarina",
    title: "Puente Vehicular Río Santa Catarina",
    description: "Construcción de puente vehicular de 4 carriles con ciclovía integrada.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Estructura+Principal",
      "/placeholder.svg?height=300&width=400&text=Ciclovía",
      "/placeholder.svg?height=300&width=400&text=Pilares",
      "/placeholder.svg?height=300&width=400&text=Vista+Nocturna",
      "/placeholder.svg?height=300&width=400&text=Proceso+Construcción",
    ],
    status: "En proceso",
    serviceType: "Obra Civil",
    location: "San Pedro, N.L.",
    area: "280 m lineales",
  },
  {
    id: "nave-industrial-logistica",
    title: "Nave Industrial Logística",
    description: "Construcción de nave industrial para centro de distribución con sistemas automatizados.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Interior+Nave",
      "/placeholder.svg?height=300&width=400&text=Sistemas+Automatizados",
      "/placeholder.svg?height=300&width=400&text=Área+de+Carga",
      "/placeholder.svg?height=300&width=400&text=Oficinas+Administrativas",
      "/placeholder.svg?height=300&width=400&text=Fachada+Exterior",
    ],
    status: "Terminados",
    serviceType: "Obra Industrial",
    location: "Apodaca, N.L.",
    completionDate: "Enero 2024",
    area: "8,500 m²",
  },
  {
    id: "residencial-valle-oriente",
    title: "Residencial Valle Oriente",
    description: "Desarrollo habitacional de 120 viviendas con amenidades y áreas verdes.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Casa+Modelo",
      "/placeholder.svg?height=300&width=400&text=Áreas+Verdes",
      "/placeholder.svg?height=300&width=400&text=Amenidades",
      "/placeholder.svg?height=300&width=400&text=Entrada+Principal",
      "/placeholder.svg?height=300&width=400&text=Vista+General",
    ],
    status: "En proceso",
    serviceType: "Desarrollos Habitacionales",
    location: "San Pedro, N.L.",
    area: "45,000 m²",
  },
  {
    id: "piso-concreto-planta-automotriz",
    title: "Piso de Concreto Planta Automotriz",
    description: "Instalación de piso industrial de alta resistencia para planta manufacturera.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Piso+Terminado",
      "/placeholder.svg?height=300&width=400&text=Proceso+Instalación",
      "/placeholder.svg?height=300&width=400&text=Área+Producción",
      "/placeholder.svg?height=300&width=400&text=Acabado+Pulido",
      "/placeholder.svg?height=300&width=400&text=Control+Calidad",
    ],
    status: "Terminados",
    serviceType: "Pisos de Concreto",
    location: "García, N.L.",
    completionDate: "Febrero 2024",
    area: "12,000 m²",
  },
  {
    id: "oficinas-corporativas-sustentables",
    title: "Oficinas Corporativas Sustentables",
    description: "Edificio de oficinas con certificación LEED y tecnologías verdes.",
    image: "/placeholder.svg?height=300&width=400",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400&text=Fachada+Verde",
      "/placeholder.svg?height=300&width=400&text=Paneles+Solares",
      "/placeholder.svg?height=300&width=400&text=Interior+Oficinas",
      "/placeholder.svg?height=300&width=400&text=Jardín+Vertical",
      "/placeholder.svg?height=300&width=400&text=Sistema+Captación+Agua",
    ],
    status: "En proceso",
    serviceType: "Construcción Sustentable",
    location: "Monterrey, N.L.",
    area: "6,800 m²",
  },
]
