import type { Metadata } from "next"
import PageHero from "@/components/hero/PageHero"

export const metadata: Metadata = {
  title: "Pratiquer — Cours et stages",
  description:
    "Cours hebdomadaires de poterie et céramique et stages à Paris 9e. Pour adultes et enfants dès 4 ans. Modelage, tournage, émaillage.",
  alternates: { canonical: "/pratiquer" },
}
import CallOutRentree from "@/components/sections/CallOutRentree"
import CoursHebdoSection from "@/components/sections/pratiquer/CoursHebdoSection"
import StagesSection from "@/components/sections/pratiquer/StagesSection"

export const revalidate = 60

export default function PratiquerPage() {
  return (
    <>
      <PageHero
        pageName="pratiquer"
        supraLeft="COURS HEBDOMADAIRES & STAGES"
        supraRight="TERRE LIBRE · PARIS 9e"
      />
      <CallOutRentree />
      <CoursHebdoSection />
      <StagesSection />
    </>
  )
}
