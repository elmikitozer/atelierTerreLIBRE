import PageHero from "@/components/hero/PageHero"
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
