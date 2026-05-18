"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/ui/LogoMark";
import NavMobile from "./NavMobile";

const NAV_LINKS = [
  { label: "Pratiquer", href: "/pratiquer" },
  { label: "Événements", href: "/evenements" },
  { label: "L'atelier", href: "/l-atelier" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-yellow">
      {/* ── Desktop ─────────────────────────────── */}
      <div className="hidden md:flex items-center justify-between px-12 py-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Atelier Terre Libre — Accueil"
        >
          <LogoMark size={44} />
          <span className="font-archivo-black text-[18px] leading-none text-ink">
            terre<span className="italic">LIBRE</span>
          </span>
        </Link>

        <nav
          className="flex items-center gap-9 font-manrope text-[14px] text-ink"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "underline underline-offset-4 decoration-2 font-semibold"
                  : "hover:underline underline-offset-4"
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-full bg-ink text-yellow font-semibold text-[13px]"
          >
            Cours d&apos;essai
          </Link>
        </nav>
      </div>

      {/* ── Mobile ──────────────────────────────── */}
      <div className="flex md:hidden items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Atelier Terre Libre — Accueil"
        >
          <LogoMark size={36} />
          <span className="font-archivo-black text-[15px] leading-none text-ink">
            terre<span className="italic">LIBRE</span>
          </span>
        </Link>
        <NavMobile />
      </div>
    </header>
  );
}
