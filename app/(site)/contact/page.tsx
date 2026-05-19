import PageHero from "@/components/hero/PageHero"
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection"
import CarteSection from "@/components/sections/contact/CarteSection"
import FormulaireSection from "@/components/sections/contact/FormulaireSection"

export default function ContactPage() {
  return (
    <>
      <PageHero
        pageName="contact"
        supraLeft="NOUS ÉCRIRE · VENIR NOUS VOIR · 75009 PARIS"
        supraRight="TERRE LIBRE · PARIS IXe"
        tagline="Un mot, un appel, une visite — on adore qu'on vienne voir l'atelier."
      />
      <ContactInfoSection />
      <CarteSection />
      <FormulaireSection />
    </>
  )
}
