import Link from "next/link";
import LogoMark from "@/components/ui/LogoMark";

const NAV_LINKS = [
  { label: "Pratiquer", href: "/pratiquer" },
  { label: "Événements", href: "/evenements" },
  { label: "L'atelier", href: "/l-atelier" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-yellow">
      {/* ── Colonnes principales ─────────────────── */}
      <div className="px-8 md:px-12 pt-14 pb-8 grid grid-cols-12 gap-8">

        {/* Col 1 — Logotype + navigation rapide */}
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <LogoMark size={48} />
            <span className="font-archivo-black text-[26px] leading-[0.9] text-ink">
              terre<span className="italic">LIBRE</span>
            </span>
          </div>
          <p className="font-news italic text-[15px] leading-snug text-ink/75 max-w-[240px] mb-6">
            Atelier de modelage et céramique de mère en fille, depuis 1985.
          </p>
          <ul className="space-y-1.5">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-manrope text-[14px] text-ink hover:underline underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 — Adresse */}
        <div className="col-span-6 md:col-span-3">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink mb-3">
            Atelier
          </p>
          <a
            href="https://maps.google.com/?q=17+rue+de+Vintimille+75009+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="font-archivo text-[14px] leading-relaxed text-ink hover:underline underline-offset-4"
          >
            <address className="not-italic">
              atelier terre libre<br />
              17 rue de Vintimille<br />
              75009 Paris
            </address>
          </a>
        </div>

        {/* Col 3 — Contact */}
        <div className="col-span-6 md:col-span-4">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink mb-3">
            Nous écrire
          </p>
          <div className="font-archivo text-[14px] leading-relaxed text-ink space-y-1">
            <a
              href="mailto:bonjour.atelierterrelibre@gmail.com"
              className="block hover:underline underline-offset-4 break-all"
            >
              bonjour.atelierterrelibre@gmail.com
            </a>
            <a
              href="tel:+33618938588"
              className="block hover:underline underline-offset-4"
            >
              06 18 93 85 88 — Déborah
            </a>
          </div>
        </div>
      </div>

      {/* ── Barre inférieure ─────────────────────── */}
      <div className="border-t border-ink/20 mx-8 md:mx-12" />
      <div className="px-8 md:px-12 py-5 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink">
          © 2026 — Atelier Terre Libre
        </p>
        <div className="flex items-center gap-4">
          {/* <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink">
            Design &amp; développement : Mikaya Yevou
          </p> */}
          <div className="flex gap-2">
            <a
              href="https://instagram.com/atelierterrelibre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-ink text-yellow grid place-items-center hover:opacity-80 transition-opacity"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* TODO: ajouter la vraie URL Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-ink text-yellow grid place-items-center hover:opacity-80 transition-opacity"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
