"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useMenu } from "@/lib/context/MenuContext"

const NAV_LINKS = [
  { label: "pratiquer",  href: "/pratiquer",  fsVar: "var(--fs-page-name)"   },
  { label: "évènements", href: "/evenements", fsVar: "var(--fs-page-events)" },
  { label: "l'atelier", href: "/l-atelier",  fsVar: "var(--fs-page-name)"   },
  { label: "contact",   href: "/contact",    fsVar: "var(--fs-page-name)"   },
] as const

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]
const EASE_IN:  [number, number, number, number] = [0.7,  0, 0.84, 0]
const N = NAV_LINKS.length

type Props = {
  pageName: string
  supraLeft?: string
  supraRight?: string
  tagline?: string
  compact?: boolean
}

export default function PageHero({
  pageName,
  supraLeft,
  supraRight,
  tagline,
  compact = false,
}: Props) {
  const { isOpen, close } = useMenu()
  const pathname  = usePathname()
  const router    = useRouter()

  const [promotedIdx, setPromotedIdx] = useState<number | null>(null)
  const navigating = useRef(false)

  const fsVar      = compact ? "var(--fs-page-events)" : "var(--fs-page-name)"
  const currentIdx = NAV_LINKS.findIndex(l => l.href === pathname)
  const safeIdx    = currentIdx >= 0 ? currentIdx : 0
  const isPromoting = promotedIdx !== null

  // ── Helpers ──────────────────────────────────────────────────────────────

  function itemVisible(navIdx: number): boolean {
    if (isPromoting) return navIdx === promotedIdx
    return isOpen || navIdx === safeIdx
  }

  function staggerDelay(navIdx: number): number {
    const refIdx = isPromoting ? promotedIdx! : safeIdx
    const dist   = Math.abs(navIdx - refIdx)
    const opening = isOpen && !isPromoting
    return opening
      ? dist * 0.07
      : Math.max(0, (N - 1 - dist) * 0.07)
  }

  // Height: EASE_OUT on both open AND close → slow-start means items
  // have time to slide/fade before the wrapper clips them.
  function heightTrans(navIdx: number) {
    return {
      duration: 0.42,
      ease: EASE_OUT,
      delay: staggerDelay(navIdx),
    }
  }

  // x/opacity: EASE_IN on close (fast exit) vs EASE_OUT on open (smooth entry)
  function xTrans(navIdx: number) {
    const visible = itemVisible(navIdx)
    return {
      duration: visible ? 0.42 : 0.28,
      ease:     visible ? EASE_OUT : EASE_IN,
      delay:    staggerDelay(navIdx),
    }
  }

  // ── Navigation with promotion ─────────────────────────────────────────────

  function handleItemClick(e: React.MouseEvent, navIdx: number, href: string) {
    e.preventDefault()
    if (navigating.current) return
    // Clicking current page: just close
    if (navIdx === safeIdx) { close(); return }
    navigating.current = true
    setPromotedIdx(navIdx)
    // close() avant push : isPromoting reste true donc la promotion
    // tient visuellement jusqu'au démontage (navigation)
    setTimeout(() => {
      close()
      router.push(href)
      navigating.current = false
    }, 560)
  }

  // ── Sub-renders ───────────────────────────────────────────────────────────

  // Renders an item that is NOT the current page title
  function renderOtherItem(link: (typeof NAV_LINKS)[number], navIdx: number) {
    const visible    = itemVisible(navIdx)
    const isPromoted = navIdx === promotedIdx

    return (
      <motion.div
        key={link.href}
        initial={false}
        animate={{ height: visible ? "auto" : 0 }}
        transition={heightTrans(navIdx)}
        style={{ overflow: "hidden" }}
      >
        <motion.div
          animate={visible ? { x: 0, opacity: 1 } : { x: -44, opacity: 0 }}
          transition={xTrans(navIdx)}
          className="py-[0.3em]"
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href={link.href}
            onClick={(e) => handleItemClick(e, navIdx, link.href)}
            className="block font-archivo-black leading-[0.85] tracking-[-0.02em] cursor-pointer"
            style={{
              fontSize:   isPromoted ? link.fsVar : "2.25rem",
              color:      isPromoted ? "var(--color-ink)" : "color-mix(in srgb, var(--color-ink) 70%, transparent)",
              transition: `font-size 520ms cubic-bezier(${EASE_OUT.join(",")})`,
            }}
          >
            {link.label}
            {isPromoted && <span className="italic">.</span>}
          </a>
        </motion.div>
      </motion.div>
    )
  }

  // Renders the current page title (always visible unless being outpromoted)
  function renderCurrentTitle() {
    const visible   = itemVisible(safeIdx)
    const isOpening = isOpen && !isPromoting
    const h1Ease    = isOpening ? EASE_OUT.join(",") : EASE_IN.join(",")
    // Delay h1 shrink by 70ms when there are items above (safeIdx > 0) so the
    // first item above starts appearing before the title begins to resize —
    // prevents "évènements." from jumping between 2 lines and 1 line mid-animation.
    const h1Delay   = (isOpening && safeIdx > 0) ? "70ms" : "0ms"

    return (
      <motion.div
        key="current"
        initial={false}
        animate={{ height: visible ? "auto" : 0 }}
        transition={heightTrans(safeIdx)}
        style={{ overflow: "hidden" }}
      >
        <div className="py-[0.3em]">
          <h1
            className="font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink"
            style={{
              fontSize:            isOpening ? "2.25rem" : fsVar,
              transition:          `font-size 520ms cubic-bezier(${h1Ease}) ${h1Delay}`,
              textDecoration:      isOpening ? "underline" : "none",
              textUnderlineOffset: "8px",
              whiteSpace:          "nowrap",
            }}
          >
            {pageName}<span className="italic">.</span>
          </h1>
        </div>
      </motion.div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section className="bg-accent">

      {/* Barre éditoriale */}
      <div className="px-5 md:px-12 pt-2 pb-2">
        <div className="flex items-end justify-between">
          {supraLeft && (
            <p className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
              {supraLeft}
            </p>
          )}
          {supraRight && (
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink hidden md:block">
              {supraRight}
            </p>
          )}
        </div>
        <div className="h-px bg-ink/20 mt-2" />
      </div>

      {/* Contenu */}
      <div className="px-5 md:px-12 pt-8 pb-10 md:pt-12 md:pb-14">

        {/* Desktop : h1 statique (menu n'existe pas sur desktop) */}
        <h1
          className="hidden md:block font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink"
          style={{ fontSize: fsVar }}
        >
          {pageName}<span className="italic">.</span>
        </h1>

        {/* Mobile : liste ordonnée — items-above poussent le titre vers le bas */}
        <div className="md:hidden flex flex-col">
          {NAV_LINKS.slice(0, safeIdx).map((link, si) =>
            renderOtherItem(link, si)
          )}
          {renderCurrentTitle()}
          {NAV_LINKS.slice(safeIdx + 1).map((link, si) =>
            renderOtherItem(link, safeIdx + 1 + si)
          )}
        </div>

        {/* Tagline : desktop seulement */}
        {tagline && (
          <p className="hidden md:block font-news italic text-[22px] leading-[1.35] mt-6 text-ink max-w-[600px]">
            {tagline}
          </p>
        )}
      </div>

    </section>
  )
}
