import PageHero from "@/components/hero/PageHero"
import AtelierIntroSection from "@/components/sections/atelier/AtelierIntroSection"
import PedagogieSection from "@/components/sections/atelier/PedagogieSection"
import FideliteSection from "@/components/sections/atelier/FideliteSection"
import GalerieSection from "@/components/sections/atelier/GalerieSection"

export const revalidate = 60

export default function AtelierPage() {
  return (
    <>
      <PageHero
        pageName="l'atelier"
        supraLeft="DEPUIS 1985 · MÈRE EN FILLE"
        supraRight="TERRE LIBRE · PARIS IXe"
      />
      <AtelierIntroSection />
      <PedagogieSection />
      <FideliteSection />
      <GalerieSection />
    </>
  )
}
