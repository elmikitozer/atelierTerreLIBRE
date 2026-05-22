import type { Metadata } from "next"
import PageHero from "@/components/hero/PageHero"

export const metadata: Metadata = {
  title: "Événements — Anniversaires, team building, privatisation",
  description:
    "Anniversaires d'enfants, team building d'entreprise, privatisation de l'atelier. Atelier Terre Libre, Paris 9e.",
  alternates: { canonical: "/evenements" },
}
import AnniversairesSection from "@/components/sections/evenements/AnniversairesSection"
import TeamBuildingSection from "@/components/sections/evenements/TeamBuildingSection"
import PrivatisationSection from "@/components/sections/evenements/PrivatisationSection"

export const revalidate = 60

export default function EvenementsPage() {
  return (
    <>
      <PageHero
        pageName="évènements"
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
