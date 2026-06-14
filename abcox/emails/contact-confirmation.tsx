import { Html } from "@react-email/html"
import { Head } from "@react-email/head"
import { Body } from "@react-email/body"
import { Container } from "@react-email/container"
import { Section } from "@react-email/section"
import { Text } from "@react-email/text"
import { Heading } from "@react-email/heading"
import { Hr } from "@react-email/hr"
import { Button } from "@react-email/button"
import { siteConfig } from "@/config/site"

interface ContactConfirmationEmailProps {
  name: string
}

export function ContactConfirmationEmail({ name }: ContactConfirmationEmailProps) {
  return (
    <Html lang="es">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          <Section
            style={{
              backgroundColor: "#1d4ed8",
              borderRadius: "12px 12px 0 0",
              padding: "32px",
              textAlign: "center",
            }}
          >
            <Heading style={{ color: "#ffffff", fontSize: "24px", margin: 0 }}>
              ABCOX Servicio Técnico
            </Heading>
          </Section>

          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0 0 12px 12px",
              padding: "32px",
            }}
          >
            <Heading as="h2" style={{ fontSize: "20px", color: "#0f172a" }}>
              ¡Hola {name}!
            </Heading>
            <Text style={{ color: "#475569", lineHeight: "1.6" }}>
              Recibimos tu solicitud de servicio técnico. Nuestro equipo la revisará y te
              contactará en un plazo máximo de 2 horas hábiles para coordinar la visita.
            </Text>
            <Text style={{ color: "#475569", lineHeight: "1.6" }}>
              Si necesitas atención inmediata, puedes contactarnos directamente por WhatsApp:
            </Text>
            <Button
              href={siteConfig.socialLinks.whatsapp}
              style={{
                backgroundColor: "#22c55e",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Escribir por WhatsApp
            </Button>
            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />
            <Text style={{ color: "#94a3b8", fontSize: "12px" }}>
              © {new Date().getFullYear()} {siteConfig.fullName} — {siteConfig.address}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
