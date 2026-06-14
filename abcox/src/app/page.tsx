import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { BrandsSection } from "@/components/sections/BrandsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
