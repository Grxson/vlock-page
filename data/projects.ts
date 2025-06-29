export interface Project {
  id: string
  title: string
  description: string
  image: string
  gallery: string[] // Nueva propiedad para la galería
  status: "Terminados" | "Terminados"
  serviceType: string
  location: string
  completionDate?: string
  area: string
}

export const projects: Project[] = [
  {
    "id": "nextipark-naves-industriales-zapopan",
    "title": "NextiPark - Preliminares para Naves Industriales",
    "description": "Trabajos preliminares para la construcción de naves industriales, incluyendo nivelación, limpieza y cimentación inicial.",
    "image": "/projects-images/NEXTIPARK/48.webp?height=300&width=400&text=NextiPark",
    "gallery": [
      "/projects-images/NEXTIPARK/48.webp?height=300&width=400&",
      "/projects-images/NEXTIPARK/49.webp?height=300&width=400&",
      "/projects-images/NEXTIPARK/50.webp?height=300&width=400&",
    ],
    "status": "Terminados",
    "serviceType": "Obra Civil",
    "location": "Zapopan, Jalisco",
    "area": "15,000 m²"
  },
  {
    "id": "torre-countryclub-muros-interiores",
    "title": "Torre de Departamentos Country Club",
    "description": "Colocación de muros interiores y de elevador en torre de departamentos de alto nivel.",
    "image": "/projects-images/TORRE-DE-DEPARTAMENTOS-COUNTRY-CLUB/51.webp?height=300&width=400&text=Country+Club",
    "gallery": [
      "/projects-images/TORRE-DE-DEPARTAMENTOS-COUNTRY-CLUB/51.webp?height=300&width=400&",
      "/projects-images/TORRE-DE-DEPARTAMENTOS-COUNTRY-CLUB/19.webp?height=300&width=400&",
      "/projects-images/TORRE-DE-DEPARTAMENTOS-COUNTRY-CLUB/52.webp?height=300&width=400&",
    ],
    "status": "Terminados",
    "serviceType": "Albañilería",
    "location": "Guadalajara, Jalisco",
    "area": "2,000 m²"
  },
  {
    "id": "pulso-park-el-salto",
    "title": "Pulso Park",
    "description": "Proyecto integral en parque industrial, con enfoque en infraestructura para empresas logísticas.",
    "image": "/projects-images/PULSO-PARK-EL-SALTO/53.webp?height=300&width=400&text=Pulso+Park",
    "gallery": [
      "/projects-images/PULSO-PARK-EL-SALTO/53.webp?height=300&width=400&text=Oficinas",
      "/projects-images/PULSO-PARK-EL-SALTO/54.webp?height=300&width=400&text=Calles+Interiores",
      "/projects-images/PULSO-PARK-EL-SALTO/55.webp?height=300&width=400&text=Fachada",
    ],
    "status": "Terminados",
    "serviceType": "Urbanización",
    "location": "El Salto, Jalisco",
    "area": "40,000 m²"
  },
  {
    "id": "hersheys-ampliacion-pastas",
    "title": "Hershey’s - Ampliación de Pastas",
    "description": "Construcción de muros perimetrales e interiores en la ampliación de planta de producción.",
    "image": "/projects-images/HERSHEY'S/56.webp?height=300&width=400&text=Hersheys",
    "gallery": [
      "/projects-images/HERSHEY'S/56.webp?height=300&width=400&text=Muros+Interiores",
      "/projects-images/HERSHEY'S/57.webp?height=300&width=400&text=Muros+Interiores",
      "/projects-images/HERSHEY'S/58.webp?height=300&width=400&text=Barda+Perimetral",
      "/projects-images/HERSHEY'S/59.webp?height=300&width=400&text=Estructura+Industrial",
      "/projects-images/HERSHEY'S/60.webp?height=300&width=400&text=Estructura+Industrial"
    ],
    "status": "Terminados",
    "serviceType": "Obra Industrial",
    "location": "El Salto, Jalisco",
    "area": "10,000 m²"
  },
  {
    "id": "hiker-cargo-remodelacion-oficinas",
    "title": "Hiker Cargo - Remodelación de Oficinas",
    "description": "Remodelación completa de oficinas corporativas y adecuaciones en instalaciones existentes.",
    "image": "/projects-images/HIKER-CARGO/61.webp?height=300&width=400&text=Hiker+Cargo",
    "gallery": [
      "/projects-images/HIKER-CARGO/61.webp?height=300&width=400&",
      "/projects-images/HIKER-CARGO/62.webp?height=300&width=400&",
      "/projects-images/HIKER-CARGO/63.webp?height=300&width=400&"
    ],
    "status": "Terminados",
    "serviceType": "Remodelación",
    "location": "Guadalajara y Hacienda Vieja El Castillo, Jalisco",
    "area": "800 m²"
  },
  {
    "id": "asa-combustibles-puerto-vallarta",
    "title": "Estación de Combustibles ASA",
    "description": "Trabajos de mantenimiento general, remodelación y construcción de barda perimetral prefabricada.",
    "image": "/projects-images/ESTACION-DE-COMBUSTIBLES-ASA/65.webp?height=300&width=400&text=ASA+Combustibles",
    "gallery": [
      "/projects-images/ESTACION-DE-COMBUSTIBLES-ASA/65.webp?height=300&width=400&text=Muro+Perimetral",
      "/projects-images/ESTACION-DE-COMBUSTIBLES-ASA/66.webp?height=300&width=400&text=Accesos"
    ],
    "status": "Terminados",
    "serviceType": "Mantenimiento y Prefabricados",
    "location": "Puerto Vallarta, Jalisco",
    "area": "2,500 m²"
  },
  {
    "id": "aeropuerto-guadalajara-salas",
    "title": "Aeropuerto de Guadalajara - Remodelación de Salas",
    "description": "Modernización y adecuación de salas de espera en aeropuerto internacional.",
    "image": "/projects-images/AEROPUERTO-DE-GUADALAJARA/67.webp?height=300&width=400&text=Aeropuerto+GDL",
    "gallery": [
      "/projects-images/AEROPUERTO-DE-GUADALAJARA/67.webp?height=300&width=400&",
      "/projects-images/AEROPUERTO-DE-GUADALAJARA/68.webp?height=300&width=400&",
      "/projects-images/AEROPUERTO-DE-GUADALAJARA/69.webp?height=300&width=400&"
    ],
    "status": "Terminados",
    "serviceType": "Remodelación",
    "location": "Guadalajara, Jalisco",
    "area": "1,200 m²"
  },
  {
    "id": "altosur-torre-departamentos",
    "title": "Fraccionamiento Altosur - Torre de Departamentos",
    "description": "Construcción de torre habitacional como parte del nuevo desarrollo urbano Altosur.",
    "image": "/projects-images/FRACCIONAMIENTO-ALTOSUR/71.webp?height=300&width=400&text=Altosur",
    "gallery": [
      "/projects-images/FRACCIONAMIENTO-ALTOSUR/71.webp?height=300&width=400&text=Obra+Gris",
      "/projects-images/FRACCIONAMIENTO-ALTOSUR/70.webp?height=300&width=400&text=Estructura+Vertical",
      "/projects-images/FRACCIONAMIENTO-ALTOSUR/72.webp?height=300&width=400&text=Vivienda"
    ],
    "status": "Terminados",
    "serviceType": "Construcción Habitacional",
    "location": "Guadalajara, Jalisco",
    "area": "5,000 m²"
  }
]
