export const faqs = [
  {
    question: "¿Cuánto cuesta el diagnóstico?",
    answer:
      "El diagnóstico técnico no tiene costo si decides realizar la reparación con nosotros. Si decides no reparar, cobramos un valor mínimo por la visita a domicilio.",
  },
  {
    question: "¿Cuánto demora una reparación?",
    answer:
      "La mayoría de las reparaciones se realizan el mismo día de la visita. En casos que requieren repuestos, el tiempo puede extenderse entre 24 y 48 horas hábiles.",
  },
  {
    question: "¿Qué garantía tienen los trabajos realizados?",
    answer:
      "Todos nuestros trabajos tienen una garantía de 3 meses en mano de obra y 6 meses en los repuestos instalados.",
  },
  {
    question: "¿Qué comunas tienen cobertura?",
    answer:
      "Cubrimos más de 30 comunas del Gran Santiago. Contáctanos directamente para confirmar cobertura en tu sector.",
  },
  {
    question: "¿Trabajan con todas las marcas?",
    answer:
      "Sí, trabajamos con todas las marcas del mercado: LG, Samsung, Whirlpool, Mademsa, Fensa, Bosch, Electrolux, Mabe, Sindelen, Daewoo y muchas más.",
  },
  {
    question: "¿Los repuestos son originales?",
    answer:
      "Utilizamos repuestos originales o de primera calidad, siempre informando al cliente antes de proceder con el reemplazo.",
  },
  {
    question: "¿Cómo puedo solicitar un servicio?",
    answer:
      "Puedes contactarnos por WhatsApp, llamarnos directamente o completar el formulario de contacto en esta página. Respondemos en menos de 2 horas en horario hábil.",
  },
  {
    question: "¿Tienen horarios de atención?",
    answer:
      "Atendemos de lunes a viernes de 8:30 a 19:00 horas y sábados de 9:00 a 14:00 horas.",
  },
] as const

export type FAQ = (typeof faqs)[number]
