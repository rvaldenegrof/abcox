export const services = [
  {
    slug: "reparacion-lavadoras",
    title: "Reparación de Lavadoras",
    shortDescription:
      "Diagnóstico y reparación completa de lavadoras de todas las marcas y modelos.",
    description:
      "Reparamos fallas eléctricas, mecánicas y electrónicas en lavadoras frontales y de carga superior. Trabajamos con todas las marcas del mercado.",
    icon: "WashingMachine",
    features: [
      "Diagnóstico sin costo",
      "Repuestos originales",
      "Garantía en el trabajo",
      "Atención a domicilio",
    ],
  },
  {
    slug: "reparacion-secadoras",
    title: "Reparación de Secadoras",
    shortDescription:
      "Servicio técnico especializado en secadoras a gas y eléctricas.",
    description:
      "Reparamos todo tipo de fallas en secadoras: resistencias, termostatos, motores, tambores y sistemas de control.",
    icon: "Wind",
    features: [
      "Técnicos certificados",
      "Repuestos originales",
      "Garantía en el trabajo",
      "Atención a domicilio",
    ],
  },
  {
    slug: "mantencion-preventiva",
    title: "Mantención Preventiva",
    shortDescription:
      "Mantén tu equipo en óptimas condiciones y evita fallas costosas.",
    description:
      "Realizamos mantenciones periódicas para prolongar la vida útil de tu lavadora o secadora, limpieza profunda y revisión de componentes clave.",
    icon: "Shield",
    features: [
      "Limpieza profunda",
      "Revisión de componentes",
      "Informe técnico",
      "Recomendaciones personalizadas",
    ],
  },
  {
    slug: "diagnostico-tecnico",
    title: "Diagnóstico Técnico",
    shortDescription:
      "Identificamos la falla exacta de tu equipo con precisión.",
    description:
      "Utilizamos equipos de diagnóstico para identificar con exactitud el problema de tu equipo antes de iniciar cualquier reparación.",
    icon: "Search",
    features: [
      "Diagnóstico preciso",
      "Presupuesto detallado",
      "Sin compromiso",
      "Informe escrito",
    ],
  },
  {
    slug: "instalacion",
    title: "Instalación y Puesta en Marcha",
    shortDescription:
      "Instalación correcta de tu nuevo equipo con verificación completa.",
    description:
      "Instalamos tu lavadora o secadora nueva asegurando conexiones correctas, nivelación y prueba de funcionamiento.",
    icon: "Settings",
    features: [
      "Instalación profesional",
      "Nivelación correcta",
      "Prueba de funcionamiento",
      "Asesoría de uso",
    ],
  },
  {
    slug: "servicio-domicilio",
    title: "Servicio a Domicilio",
    shortDescription:
      "Vamos donde estés. Reparación en el lugar, sin traslados.",
    description:
      "Nuestros técnicos se desplazan hasta tu hogar con todas las herramientas necesarias. Sin costo de traslado en las comunas con cobertura.",
    icon: "Home",
    features: [
      "Cobertura en 30+ comunas",
      "Horarios flexibles",
      "Sin costo de traslado",
      "Respuesta en 24 horas",
    ],
  },
] as const

export type Service = (typeof services)[number]
