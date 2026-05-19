import PageHero from "@/components/hero/PageHero"
import AnniversairesSection from "@/components/sections/evenements/AnniversairesSection"
import TeamBuildingSection from "@/components/sections/evenements/TeamBuildingSection"
import PrivatisationSection from "@/components/sections/evenements/PrivatisationSection"

export const revalidate = 60

export default function EvenementsPage() {
  return (
    <>
      <PageHero
        pageName="événements"
        supraLeft="ANNIVERSAIRES · TEAM BUILDING · PRIVATISATIONS"
        supraRight="TERRE LIBRE · PARIS IXe"
        compact
      />
      <AnniversairesSection />
      <TeamBuildingSection />
      <PrivatisationSection />
    </>
  )
}
