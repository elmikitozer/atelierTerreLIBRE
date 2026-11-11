import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/hero/PageHero';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = pageMetadata({
  title: 'Anniversaire poterie et team building',
  description:
    "Anniversaires d'enfants en céramique, team building et stages de poterie en famille à Paris 9e. Une parenthèse créative autour de la terre.",
  path: '/evenements',
});
import AnniversairesSection from '@/components/sections/evenements/AnniversairesSection';
import TeamBuildingSection from '@/components/sections/evenements/TeamBuildingSection';
import PrivatisationSection from '@/components/sections/evenements/PrivatisationSection';

export const revalidate = 60;

export default function EvenementsPage() {
  return (
    <>
      <BreadcrumbSchema name="Évènements" path="/evenements" />
      <PageHero
        pageName="évènements"
        supraLeft="ANNIVERSAIRES · TEAM BUILDING · PRIVATISATIONS"
        supraRight="TERRE LIBRE · Paris 9e"
        compact
      />
      <AnniversairesSection />
      <TeamBuildingSection />
      <PrivatisationSection />
    </>
  );
}
