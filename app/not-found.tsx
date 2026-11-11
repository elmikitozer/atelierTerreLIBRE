import type { Metadata } from "next"
import Link from "next/link"
import SiteLayout from "./(site)/layout"
import PageHero from "@/components/hero/PageHero"

export const metadata: Metadata = {
  title: "Page introuvable",
  // Next ajoute déjà <meta name="robots" content="noindex"> sur les 404 :
  // on neutralise seulement le "index, follow" hérité du layout racine.
  robots: null,
}

const LINKS = [
  { href: "/",           label: "Accueil",    desc: "Retour à la page d'accueil" },
  { href: "/pratiquer",  label: "Pratiquer",  desc: "Cours hebdomadaires et stages" },
  { href: "/evenements", label: "Évènements", desc: "Anniversaires, team building, privatisations" },
  { href: "/l-atelier",  label: "L'atelier",  desc: "Notre histoire, de mère en fille" },
  { href: "/contact",    label: "Contact",    desc: "Nous écrire, nous appeler, venir" },
]

// app/not-found.tsx n'hérite que du layout racine : on réutilise le layout
// du site pour garder le menu et le pied de page.
export default function NotFound() {
  return (
    <SiteLayout>
      <PageHero
        pageName="introuvable"
        supraLeft="PAGE INTROUVABLE"
        supraRight="TERRE LIBRE · Paris 9e"
        compact
      />
      <section className="px-5 md:px-12 py-14 md:py-20 bg-cream border-b border-ink/10">
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-5">
          Page introuvable
        </p>
        <p className="font-news text-[20px] md:text-[24px] leading-[1.4] text-ink max-w-[640px]">
          Cette page n&apos;existe pas, ou n&apos;existe plus.{" "}
          <em>L&apos;atelier, lui, est toujours là.</em>
        </p>

        <ul className="mt-10 border-t border-ink/10 max-w-[640px]">
          {LINKS.map(({ href, label, desc }) => (
            <li key={href} className="border-b border-ink/10">
              <Link
                href={href}
                className="flex items-baseline justify-between gap-6 py-4 hover:opacity-60 transition-opacity"
              >
                <span className="font-archivo-black text-[20px] md:text-[22px] leading-none text-ink">
                  {label}
                </span>
                <span className="font-news italic text-[14px] md:text-[15px] text-ink/70 text-right">
                  {desc} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  )
}
