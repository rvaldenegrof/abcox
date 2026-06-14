import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper"
import { faqs } from "@/config/faq"

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <SectionHeader
        label="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        description="Encuentra respuesta a las preguntas más comunes sobre nuestro servicio."
      />
      <div className="mx-auto max-w-3xl">
        <Accordion className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-slate-100 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
