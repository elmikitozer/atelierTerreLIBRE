"use client"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import PhotoFondatrices from "@/components/ui/PhotoFondatrices"
import { useMenu } from "@/lib/context/MenuContext"

const NAV_LINKS = [
  { label: "pratiquer",  href: "/pratiquer",  fsVar: "var(--fs-page-name)"   },
  { label: "évènements", href: "/evenements", fsVar: "var(--fs-page-events)" },
  { label: "l'atelier", href: "/l-atelier",  fsVar: "var(--fs-page-name)"   },
  { label: "contact",   href: "/contact",    fsVar: "var(--fs-page-name)"   },
] as const

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN:  [number, number, number, number] = [0.7,  0, 0.84, 0]

export default function HomeHero() {
  const { isOpen, immediate, close } = useMenu()
  const router    = useRouter()
  const [promotedIdx, setPromotedIdx] = useState<number | null>(null)
  const navigating = useRef(false)

  const isPromoting = promotedIdx !== null

  function handleItemClick(e: React.MouseEvent, navIdx: number, href: string) {
    e.preventDefault()
    if (navigating.current) return
    navigating.current = true
    setPromotedIdx(navIdx)
    // close() avant push : isPromoting reste true donc la promotion tient visuellement
    // jusqu'au démontage du composant (navigation)
    setTimeout(() => {
      close()
      router.push(href)
      navigating.current = false
    }, 560)
  }

  return (
    <section className="bg-yellow">

      {/* ── Barre éditoriale ────────────────────── */}
      <div className="px-5 md:px-12 pt-2 pb-2">
        <div className="flex items-end justify-between">
          <p className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
            De mère en fille — Paris
          </p>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink hidden md:block">
            Modelage &amp; céramique · depuis 1985
          </p>
        </div>
        <div className="h-px bg-ink/20 mt-2" />
      </div>

      {/* ── Desktop : split 7 / 5 ───────────────── */}
      <div className="hidden md:grid grid-cols-12">

        {/* Gauche */}
        <div className="col-span-7 bg-yellow px-12 pt-12 pb-14 overflow-hidden flex flex-col">
          <h1
            className="font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink"
            style={{ fontSize: "var(--fs-brand)" }}
          >
            <span className="block">terre</span>
            <span className="block italic -mt-[0.06em]">LIBRE</span>
          </h1>

          <div className="flex items-center gap-5 mt-10">
            <Link
              href="/pratiquer"
              className="px-6 py-3.5 rounded-full bg-ink text-yellow font-manrope font-semibold text-[14px]"
            >
              Découvrir les cours
            </Link>
            <Link
              href="/l-atelier"
              className="font-manrope text-[14px] underline underline-offset-4 text-ink"
            >
              Notre histoire →
            </Link>
          </div>

          <div className="mt-10 border-l-2 border-ink/20 pl-5">
            <p className="font-news italic text-[18px] leading-[1.35] text-ink/80">
              Libérez votre créativité, laissez la terre parler.
            </p>
            <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink/45 mt-2">
              — Sylvia &amp; Déborah, fondatrices
            </p>
          </div>
        </div>

        {/* Droite */}
        <div className="col-span-5 bg-cream px-8 pt-12 pb-14 flex flex-col">
          <div className="relative">
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <PhotoFondatrices priority sizes="(max-width: 768px) 100vw, 42vw" />
            </div>
            <div className="absolute -bottom-3 left-3 bg-ink text-yellow px-3 py-2 rounded-sm">
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase opacity-80">
                ↑ Sylvia &amp; Déborah
              </p>
              <p className="font-news italic text-[14px] leading-snug mt-0.5">
                Notre atelier, notre famille.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mb-3">
              Le mot des fondatrices
            </p>
            <p className="font-news text-[18px] leading-[1.5] text-ink">
              Atelier de modelage et de céramique{" "}
              <em>de mère en fille</em>, Terre Libre accueille son public —
              enfants et adultes — depuis 40 ans dans le 9<sup>e</sup>{" "}
              arrondissement de Paris.
            </p>
            <p className="font-news text-[15px] leading-[1.55] mt-3 text-ink/80">
              Créé par Sylvia Katuszewski, rejointe par sa fille Déborah il y
              a une quinzaine d&apos;années.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile : séquentiel ─────────────────── */}
      <div className="md:hidden">

        {/* Bloc jaune — position relative pour l'overlay items */}
        <div className="bg-yellow px-5 pt-12 pb-10 overflow-hidden relative flex flex-col gap-8">

          {/* h1 — reste en place, s'efface */}
          <h1
            className="font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink relative z-0"
            style={{
              fontSize: "var(--fs-brand)",
              opacity: isOpen ? 0.15 : 1,
              transition: immediate ? "none" : `opacity 350ms cubic-bezier(${isOpen ? EASE_OUT.join(",") : EASE_IN.join(",")})`,
            }}
          >
            <span className="block">terre</span>
            <span className="block italic -mt-[0.05em]">LIBRE</span>
          </h1>

          {/* CTAs + citation — s'effacent quand menu ouvert */}
          <motion.div
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: immediate ? 0 : 0.25, ease: EASE_IN }}
            style={{ pointerEvents: isOpen ? "none" : "auto" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/pratiquer"
                className="py-3.5 rounded-full bg-ink text-yellow font-manrope font-semibold text-[14px] text-center"
              >
                Découvrir les cours
              </Link>
              <Link
                href="/l-atelier"
                className="py-3.5 rounded-full border border-ink text-ink font-manrope font-semibold text-[14px] text-center"
              >
                Notre histoire
              </Link>
            </div>

            <div className="border-l-2 border-ink/20 pl-4">
              <p className="font-news italic text-[16px] leading-[1.35] text-ink/80">
                Libérez votre créativité, laissez la terre parler.
              </p>
              <p className="font-mono text-[8px] tracking-[0.18em] uppercase text-ink/45 mt-2">
                — Sylvia &amp; Déborah, fondatrices
              </p>
            </div>
          </motion.div>

          {/* Items menu — overlay absolu par-dessus le h1 */}
          <div
            className="absolute inset-0 pt-12 px-5 pb-10 flex flex-col gap-[0.6em] justify-start"
            style={{ pointerEvents: (isOpen && !isPromoting) ? "auto" : "none" }}
            aria-hidden={!isOpen}
          >
            {NAV_LINKS.map((link, i) => {
              const isPromoted  = i === promotedIdx
              // Fermeture simple : stagger inversé (dernier item ferme en premier)
              const closeDelay  = Math.max(0, (NAV_LINKS.length - 1 - i) * 0.07)
              const itemVisible = isPromoting ? isPromoted : isOpen

              return (
                <motion.div
                  key={link.href}
                  initial={false}
                  animate={itemVisible
                    ? { x: 0, opacity: 1 }
                    : { x: isPromoting && !isPromoted ? 0 : -44, opacity: 0 }
                  }
                  transition={{
                    duration: immediate ? 0 : (isOpen && !isPromoting ? 0.42 : isPromoted ? 0.42 : 0.22),
                    ease:     itemVisible ? EASE_OUT : EASE_IN,
                    delay:    immediate ? 0 : (isPromoting ? 0 : (isOpen ? i * 0.07 : closeDelay)),
                  }}
                >
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href={link.href}
                    onClick={(e) => handleItemClick(e, i, link.href)}
                    className="block font-archivo-black leading-[0.85] tracking-[-0.02em] cursor-pointer"
                    style={{
                      fontSize:   isPromoted ? link.fsVar : "2.25rem",
                      color:      isPromoted
                        ? "var(--color-ink)"
                        : "color-mix(in srgb, var(--color-ink) 75%, transparent)",
                      transition: `font-size 520ms cubic-bezier(${EASE_OUT.join(",")})`,
                    }}
                  >
                    {link.label}
                    {isPromoted && <span className="italic">.</span>}
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bloc crème — inchangé */}
        <div className="bg-cream px-5 pt-6 pb-10">
          <div className="relative">
            <div className="relative h-[360px] rounded-sm overflow-hidden">
              <PhotoFondatrices priority sizes="(max-width: 768px) 100vw, 42vw" />
            </div>
            <div className="absolute -bottom-3 left-3 bg-ink text-yellow px-3 py-2 rounded-sm">
              <p className="font-mono text-[8px] tracking-[0.22em] uppercase opacity-80">
                ↑ Sylvia &amp; Déborah
              </p>
              <p className="font-news italic text-[13px] leading-snug">
                Notre atelier, notre famille.
              </p>
            </div>
          </div>

          <div className="mt-9">
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-mute mb-2">
              Le mot des fondatrices
            </p>
            <p className="font-news text-[17px] leading-[1.5] text-ink">
              Atelier de modelage et de céramique{" "}
              <em>de mère en fille</em>, Terre Libre accueille son public —
              enfants et adultes — depuis 40 ans dans le 9<sup>e</sup>{" "}
              arrondissement de Paris.
            </p>
            <p className="font-news text-[14px] leading-[1.55] mt-2 text-ink/80">
              Créé par Sylvia Katuszewski, rejointe par sa fille Déborah il y
              a une quinzaine d&apos;années.
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
