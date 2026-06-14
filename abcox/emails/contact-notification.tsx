import { Html } from "@react-email/html"
import { Head } from "@react-email/head"
import { Body } from "@react-email/body"
import { Container } from "@react-email/container"
import { Section } from "@react-email/section"
import { Text } from "@react-email/text"
import { Heading } from "@react-email/heading"
import { Hr } from "@react-email/hr"

interface ContactNotificationEmailProps {
  submission: {
    id: string
    name: string
    phone: string
    email: string
    commune: string
    brand: string
    equipmentType: string
    problem: string
  }
}

export function ContactNotificationEmail({ submission }: ContactNotificationEmailProps) {
  const rows = [
    { label: "ID", value: submission.id },
    { label: "Nombre", value: submission.name },
    { label: "Teléfono", value: submission.phone },
    { label: "Email", value: submission.email },
    { label: "Comuna", value: submission.commune },
    { label: "Marca", value: submission.brand },
    { label: "Tipo de equipo", value: submission.equipmentType },
  ]

  return (
    <Html lang="es">
      <Head />
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
          <Section
            style={{
              backgroundColor: "#1e293b",
              borderRadius: "12px 12px 0 0",
              padding: "24px 32px",
            }}
          >
            <Heading style={{ color: "#ffffff", fontSize: "18px", margin: 0 }}>
              Nueva solicitud de servicio
            </Heading>
          </Section>

          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0 0 12px 12px",
              padding: "32px",
            }}
          >
            {rows.map(({ label, value }) => (
              <div key={label}>
                <Text style={{ margin: "4px 0", fontSize: "12px", color: "#94a3b8" }}>
                  {label}
                </Text>
                <Text style={{ margin: "0 0 12px", fontSize: "14px", color: "#0f172a", fontWeight: "bold" }}>
                  {value}
                </Text>
              </div>
            ))}
            <Hr style={{ borderColor: "#e2e8f0", margin: "16px 0" }} />
            <Text style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "4px" }}>
              Descripción del problema
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#334155",
                backgroundColor: "#f1f5f9",
                padding: "12px",
                borderRadius: "8px",
                lineHeight: "1.6",
              }}
            >
              {submission.problem}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
