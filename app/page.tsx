import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { PricingSection } from "@/components/sections/pricing"
import { ProjectsSection } from "@/components/sections/projects"
import { TechnologiesSection } from "@/components/sections/technologies"
import { SoftwareSection } from "@/components/sections/software"
import { ContactsSection } from "@/components/sections/contacts"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <ProjectsSection />
        <TechnologiesSection />
        <SoftwareSection />
        <ContactsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
