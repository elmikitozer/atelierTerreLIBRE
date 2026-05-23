import type { Metadata } from 'next';
import PageHero from '@/components/hero/PageHero';

export const metadata: Metadata = {
  title: 'Contact — Nous écrire, nous appeler',
  description:
    '17 rue de Vintimille, 75009 Paris. Métro Place de Clichy. Cours de poterie et céramique : nous écrire, nous appeler, venir.',
  alternates: { canonical: '/contact' },
};
import ContactInfoSection from '@/components/sections/contact/ContactInfoSection';
import CarteSection from '@/components/sections/contact/CarteSection';
import FormulaireSection from '@/components/sections/contact/FormulaireSection';

export default function ContactPage() {
  return (
    <>
      <PageHero
        pageName="contact"
        supraLeft="NOUS ÉCRIRE · VENIR NOUS VOIR · 75009 PARIS"
        supraRight="TERRE LIBRE · Paris 9e"
        tagline="Un mot, un appel, une visite — on adore qu'on vienne voir l'atelier."
      />
      <ContactInfoSection />
      <CarteSection />
      <FormulaireSection />
    </>
  );
}
