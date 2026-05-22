"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useMenu } from "@/lib/context/MenuContext"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export default function NavMobile() {
  const { isOpen, toggle, close } = useMenu()
  const pathname = usePathname()

  // Ferme le menu sur changement de page
  useEffect(() => { close() }, [pathname, close])

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      className="w-10 h-10 rounded-full bg-ink grid place-items-center relative"
    >
      {/* Ligne haute → diagonale / */}
      <motion.span
        className="absolute block w-4 h-[2px] bg-yellow"
        animate={isOpen ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
      />
      {/* Ligne courte → disparaît */}
      <motion.span
        className="absolute block w-2.5 h-[2px] bg-yellow"
        style={{ originX: "0%" }}
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Ligne basse → diagonale \ */}
      <motion.span
        className="absolute block w-4 h-[2px] bg-yellow"
        animate={isOpen ? { y: 0, rotate: -45 } : { y: 4, rotate: 0 }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
      />
    </button>
  )
}
