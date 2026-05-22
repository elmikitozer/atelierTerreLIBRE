"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

const EASE = [0.16, 1, 0.3, 1] as const

// ── Stagger variants (shared between RevealList/RevealItem) ───────────────────

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: EASE },
  },
}

// ── Reveal — single element fade + rise ───────────────────────────────────────

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.56, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ── RevealList — stagger parent ───────────────────────────────────────────────

type RevealListProps = {
  children: ReactNode
  className?: string
}

export function RevealList({ children, className }: RevealListProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={listVariants}
    >
      {children}
    </motion.div>
  )
}

// ── RevealItem — stagger child (must live inside RevealList) ──────────────────

type RevealItemProps = {
  children: ReactNode
  className?: string
}

export function RevealItem({ children, className }: RevealItemProps) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
