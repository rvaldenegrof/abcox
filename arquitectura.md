# ABCOX — Arquitectura y Propuesta Técnica

## Contexto del proyecto

Sitio web corporativo para ABCOX, empresa con más de 25 años de experiencia en reparación y mantención de lavadoras y secadoras. Objetivo principal: maximizar conversiones (leads) mediante WhatsApp, formulario de contacto y llamadas telefónicas.

---

## Stack tecnológico

### Frontend

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 15 (App Router) | Framework principal — SSG/SSR para SEO |
| React | 19 | UI — Server Components reducen JS al cliente |
| TypeScript | 5.x | Tipado estático obligatorio |
| Tailwind CSS | 4.x | Estilos utilitarios |
| Shadcn UI | latest | Componentes copy-paste sin vendor lock |
| Framer Motion | latest | Animaciones hero, stats y transiciones |
| Lucide React | latest | Iconografía (incluido en Shadcn) |

### Backend

| Tecnología | Rol |
|---|---|
| Next.js Server Actions | Formulario de contacto, acciones del servidor |
| Next.js API Routes (Edge) | Webhooks, generación OG images, rate limiting |
| Prisma | ORM tipado con TypeScript |
| PostgreSQL en Neon | BD serverless, integración nativa con Vercel |

### Formularios y validación

| Tecnología | Rol |
|---|---|
| React Hook Form | Manejo de estado de formularios |
| Zod | Validación compartida cliente/servidor |

### Servicios externos

| Servicio | Rol |
|---|---|
| Resend + React Email | Emails transaccionales (confirmación al cliente + notificación a ABCOX) |
| Google Analytics 4 | Analytics de comportamiento |
| Google Tag Manager | Gestión de eventos y conversiones |
| Vercel Analytics | Analytics ligero complementario, sin GDPR pesado |
| Vercel OG | Generación de Open Graph images dinámicas |

### SEO

| Tecnología | Rol |
|---|---|
| Next.js Metadata API | Meta tags, Open Graph, Twitter Cards |
| JSON-LD / Schema.org | LocalBusiness structured data |
| `sitemap.ts` | Sitemap automática generada por Next.js |
| `robots.ts` | Control de crawlers |

### Deployment

| Servicio | Rol |
|---|---|
| Vercel | Hosting principal (Edge Network) |
| Neon | PostgreSQL serverless (mismo datacenter Vercel) |

---

## Arquitectura de despliegue

```
Internet
    │
    ▼
  Vercel (Edge Network)
    ├── Next.js App (SSG + SSR)
    ├── API Routes (Edge Runtime)
    └── OG Image Generation
         │
         ├── Neon PostgreSQL (serverless)
         ├── Resend (emails transaccionales)
         ├── GA4 + GTM (analytics, cliente)
         └── WhatsApp (redirect simple, sin backend)
```

---

## Estructura de carpetas

```
tech_service/
├── src/
│   ├── app/
│   │   ├── (marketing)/              # Route group — páginas públicas
│   │   │   ├── page.tsx              # Home / Landing principal
│   │   │   ├── nosotros/
│   │   │   │   └── page.tsx
│   │   │   ├── servicios/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   └── contacto/
│   │   │       └── page.tsx
│   │   ├── (admin)/                  # Futuro: panel de gestión
│   │   │   └── dashboard/
│   │   │       ├── page.tsx
│   │   │       ├── contacts/
│   │   │       └── testimonials/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── og/
│   │   │       └── route.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── ui/                       # Shadcn UI (auto-generados)
│   │   ├── sections/
│   │   │   ├── HeroSection/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── StatsCounter.tsx
│   │   │   │   └── TrustBadges.tsx
│   │   │   ├── ServicesSection/
│   │   │   │   ├── index.tsx
│   │   │   │   └── ServiceCard.tsx
│   │   │   ├── BrandsSection/
│   │   │   │   └── index.tsx
│   │   │   ├── AboutSection/
│   │   │   │   ├── index.tsx
│   │   │   │   └── CoverageMap.tsx
│   │   │   ├── TestimonialsSection/
│   │   │   │   ├── index.tsx
│   │   │   │   └── TestimonialSlider.tsx
│   │   │   ├── FAQSection/
│   │   │   │   ├── index.tsx
│   │   │   │   └── FAQAccordion.tsx
│   │   │   └── ContactSection/
│   │   │       ├── index.tsx
│   │   │       └── ContactForm.tsx
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── index.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer/
│   │   │   │   └── index.tsx
│   │   │   └── FloatingWhatsApp/
│   │   │       └── index.tsx
│   │   └── shared/
│   │       ├── AnimatedNumber.tsx
│   │       ├── SectionWrapper.tsx
│   │       └── CTABanner.tsx
│   │
│   ├── actions/
│   │   ├── contact.ts
│   │   └── testimonials.ts
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── resend.ts
│   │   ├── validations/
│   │   │   └── contact.schema.ts
│   │   └── utils.ts
│   │
│   ├── hooks/
│   │   ├── use-intersection.ts
│   │   └── use-media-query.ts
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── brands.ts
│   │   └── faq.ts
│   │
│   └── types/
│       └── index.ts
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── brands/
│   └── icons/
│
├── emails/
│   ├── contact-confirmation.tsx
│   └── contact-notification.tsx
│
└── ...configuración
```

---

## Schema de base de datos (Prisma)

```prisma
model ContactSubmission {
  id            String   @id @default(cuid())
  name          String
  phone         String
  email         String
  commune       String
  brand         String
  equipmentType String   // "lavadora" | "secadora"
  problem       String   @db.Text
  status        Status   @default(PENDING)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Testimonial {
  id         String   @id @default(cuid())
  name       String
  commune    String
  rating     Int      // 1-5
  comment    String   @db.Text
  isApproved Boolean  @default(false)
  createdAt  DateTime @default(now())
}

model FAQ {
  id        String   @id @default(cuid())
  question  String
  answer    String   @db.Text
  order     Int      @default(0)
  isActive  Boolean  @default(true)
}

enum Status {
  PENDING
  CONTACTED
  SCHEDULED
  COMPLETED
  CANCELLED
}
```

---

## Estrategia de conversión (CRO)

### Prioridad 1 — Above the fold
- Hero con CTA doble: "Solicitar Servicio" (formulario) + "Contactar por WhatsApp" (conversión inmediata)
- Stats animados al hacer scroll: 25 años / clientes atendidos / reparaciones completadas
- Trust badges visibles: garantía, rapidez, marcas soportadas

### Prioridad 2 — Reducción de fricción
- Botón WhatsApp flotante visible en toda la página
- CTA sticky en móvil: barra inferior fija con ícono de teléfono y WhatsApp
- Formulario progresivo: primero datos básicos, luego descripción del problema

### Prioridad 3 — Construcción de confianza
- Grid de marcas reconocidas (LG, Samsung, Bosch, Mademsa...)
- Testimonios reales con nombre, comuna y calificación
- Badge de garantía prominente en hero y sección de servicios

---

## Estrategia SEO local

### Keywords objetivo
- reparación de lavadoras Santiago
- servicio técnico lavadoras a domicilio
- reparación de secadoras
- técnico lavadoras [comuna]
- mantención de lavadoras

### Implementación
- `LocalBusiness` + `Service` Schema.org en JSON-LD
- Metadata dinámica por página de servicio (`/servicios/reparacion-lavadoras`)
- Open Graph images dinámicas con Vercel OG
- Sitemap automática incluyendo páginas de servicios individuales
- `robots.txt` permitiendo indexación completa

---

## Decisiones de arquitectura

| Decisión | Elección | Motivo |
|---|---|---|
| Repo | Monorepo único | Suficiente para esta etapa |
| Admin panel | Route group `(admin)` interno | Más simple que CMS externo |
| Mapa de cobertura | Google Maps Embed | Más familiar para usuarios en Chile |
| BD hosting | Neon (no Supabase) | Mejor integración Vercel, branching dev/prod |
| OG Images | Vercel OG (`/api/og`) | Sin servidor separado, generación al vuelo |

---

## Roadmap de mejoras futuras

1. **Panel admin** — Gestión de contactos, testimonios y FAQ desde `/dashboard`
2. **Reservas online** — Calendario de disponibilidad de técnicos
3. **Seguimiento de órdenes** — El cliente puede ver el estado de su reparación con un código
4. **Blog / Contenido** — Artículos SEO sobre mantenimiento de electrodomésticos
5. **CRM básico** — Historial de clientes y equipos reparados
6. **App móvil (futuro)** — Para técnicos en terreno

---

*Documento generado el 2026-06-02 — Stack validado para producción en Vercel.*
