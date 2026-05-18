"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Pratiquer", href: "/pratiquer" },
  { label: "Événements", href: "/evenements" },
  { label: "L'atelier", href: "/l-atelier" },
  { label: "Contact", href: "/contact" },
] as const;

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="w-10 h-10 rounded-full bg-ink grid place-items-center"
      >
        <div className="space-y-1.5">
          <div className="w-4 h-[2px] bg-yellow" />
          <div className="w-3 h-[2px] bg-yellow" />
        </div>
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 bg-yellow flex flex-col transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {/* Barre haute */}
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/40">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
            className="w-10 h-10 rounded-full bg-ink grid place-items-center"
          >
            <span className="text-yellow text-xl leading-none select-none">×</span>
          </button>
        </div>

        {/* Séparateur */}
        <div className="mx-5 h-px bg-ink/15" />

        {/* Liens */}
        <nav
          aria-label="Navigation principale"
          className="flex flex-col flex-1 justify-center px-8 gap-5"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={`font-archivo-black text-[2.6rem] leading-none tracking-[-0.02em] text-ink transition-opacity ${
                pathname === href
                  ? "underline underline-offset-8"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-8 pb-12">
          <div className="h-px bg-ink/15 mb-6" />
          <Link
            href="/contact"
            onClick={close}
            className="block w-full py-4 rounded-full bg-ink text-yellow font-manrope font-semibold text-[15px] text-center"
          >
            Cours d&apos;essai
          </Link>
        </div>
      </div>
    </>
  );
}
