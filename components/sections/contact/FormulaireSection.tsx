"use client"

import { useState } from "react"
import { Reveal } from "@/components/ui/Reveal"

const SUJETS = [
  "Cours d'essai",
  "Inscriptions",
  "Anniversaire",
  "Team building",
  "Privatisation",
  "Autre",
]

type Errors = {
  nom?: string
  email?: string
  sujet?: string
  message?: string
}

export default function FormulaireSection() {
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [sujet, setSujet] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Errors>({})

  function validate(): Errors {
    const e: Errors = {}
    if (!nom.trim()) e.nom = "Votre nom est requis."
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Adresse email invalide."
    if (!sujet) e.sujet = "Choisissez un sujet."
    if (!message.trim() || message.trim().length < 10)
      e.message = "Message trop court (10 caractères min)."
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    const to = "bonjour.atelierterrelibre@gmail.com"
    const subject = encodeURIComponent(`[Contact site] ${sujet} — ${nom}`)
    const body = encodeURIComponent(
      `Bonjour,\n\n${message}\n\n—\n${nom}\n${email}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <section className="px-5 md:px-12 py-14 md:py-20 bg-yellow border-b border-ink/10">
      <div className="md:grid md:grid-cols-12 md:gap-16">

        {/* Colonne gauche — intro */}
        <Reveal delay={0} className="md:col-span-5 mb-10 md:mb-0">
          <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-ink/60 mb-4">
            Écrivez-nous
          </p>
          <h2 className="font-archivo-black text-[28px] md:text-[36px] leading-[0.95] text-ink mb-6">
            Un mot, <span className="italic">un essai.</span>
          </h2>
          <p className="font-news text-[16px] md:text-[17px] leading-[1.65] text-ink">
            Inscriptions, cours d&apos;essai, anniversaires, devis team building,
            privatisations — on répond à tout, simplement.
          </p>
          <p className="font-news italic text-[14px] text-ink/55 mt-5 leading-snug">
            Ou écrivez directement à{" "}
            <a
              href="mailto:bonjour.atelierterrelibre@gmail.com"
              className="underline underline-offset-4"
            >
              bonjour.atelierterrelibre@gmail.com
            </a>
          </p>
        </Reveal>

        {/* Colonne droite — formulaire */}
        <Reveal delay={0.1} className="md:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

            {/* Nom */}
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 block mb-2">
                Nom
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Prénom Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full bg-white/60 border border-ink/20 rounded-sm px-4 py-3 font-news text-[15px] text-ink placeholder-ink/30 focus:outline-none focus:border-ink/60 transition-colors"
              />
              {errors.nom && (
                <p className="font-mono text-[10px] tracking-[0.1em] text-red-700 mt-1">{errors.nom}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="vous@exemple.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/60 border border-ink/20 rounded-sm px-4 py-3 font-news text-[15px] text-ink placeholder-ink/30 focus:outline-none focus:border-ink/60 transition-colors"
              />
              {errors.email && (
                <p className="font-mono text-[10px] tracking-[0.1em] text-red-700 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Sujet — pills */}
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 block mb-3">
                Sujet
              </label>
              <div className="flex flex-wrap gap-2">
                {SUJETS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSujet(s)}
                    className={`font-manrope text-[13px] font-medium px-4 py-2 rounded-full border transition-all ${
                      sujet === s
                        ? "bg-ink text-yellow border-ink"
                        : "bg-transparent text-ink border-ink/30 hover:border-ink/70"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.sujet && (
                <p className="font-mono text-[10px] tracking-[0.1em] text-red-700 mt-2">{errors.sujet}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60 block mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Quelques mots..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full bg-white/60 border border-ink/20 rounded-sm px-4 py-3 font-news text-[15px] text-ink placeholder-ink/30 focus:outline-none focus:border-ink/60 transition-colors resize-none"
              />
              {errors.message && (
                <p className="font-mono text-[10px] tracking-[0.1em] text-red-700 mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full md:w-auto bg-ink text-cream font-manrope font-semibold text-[14px] px-10 py-4 rounded-full hover:opacity-80 transition-opacity"
              >
                Envoyer le message →
              </button>
            </div>

          </form>
        </Reveal>

      </div>
    </section>
  )
}
