export const siteConfig = {
  name: "ABCOX",
  fullName: "ABCOX Servicio Técnico",
  description:
    "Servicio técnico especializado en reparación y mantención de lavadoras y secadoras. Más de 25 años de experiencia. Atención a domicilio en Santiago.",
  url: "https://abcox.cl",
  phone: "+56912345678",
  whatsapp: "+56912345678",
  email: "contacto@abcox.cl",
  address: "Santiago, Chile",
  yearsOfExperience: 25,
  stats: [
    { label: "Años de experiencia", value: 25, suffix: "+" },
    { label: "Clientes atendidos", value: 5000, suffix: "+" },
    { label: "Reparaciones completadas", value: 12000, suffix: "+" },
    { label: "Comunas con cobertura", value: 30, suffix: "+" },
  ],
  socialLinks: {
    whatsapp: "https://wa.me/56912345678",
    instagram: "https://instagram.com/abcox",
    facebook: "https://facebook.com/abcox",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Preguntas Frecuentes", href: "/#faq" },
    { label: "Contacto", href: "/#contacto" },
  ],
} as const
