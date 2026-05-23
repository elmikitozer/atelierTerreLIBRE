import type { Metadata } from 'next';
import PageHero from '@/components/hero/PageHero';

export const metadata: Metadata = {
  title: "L'atelier — Notre histoire",
  description:
    "Atelier de poterie et céramique de mère en fille à Paris 9e depuis 40 ans. Notre histoire, nos valeurs, Sylvia & Déborah.",
  alternates: { canonical: '/l-atelier' },
};
import AtelierIntroSection from '@/components/sections/atelier/AtelierIntroSection';
import PedagogieSection from '@/components/sections/atelier/PedagogieSection';
import FideliteSection from '@/components/sections/atelier/FideliteSection';
import GalerieSection from '@/components/sections/atelier/GalerieSection';

export const revalidate = 60;

export default function AtelierPage() {
  return (
    <>
      <PageHero
        pageName="l'atelier"
        supraLeft="DEPUIS 1985 · DE MÈRE EN FILLE"
        supraRight="TERRE LIBRE · Paris 9e"
      />
      <AtelierIntroSection />
      <PedagogieSection />
      <FideliteSection />
      <GalerieSection />
    </>
  );
}
