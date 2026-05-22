import Link from "next/link"
import { getRentree } from "@/lib/sanity/queries"
import { Reveal } from "@/components/ui/Reveal"

export default async function CallOutRentree() {
  const rentree = await getRentree()

  return (
    <Reveal>
    <section className="bg-ink text-yellow px-5 md:px-12 py-8 md:py-10">
      <div className="max-w-screen-lg mx-auto md:flex md:items-center md:gap-12">

        <div className="shrink-0">
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.22em] uppercase opacity-70">
            Inscriptions ouvertes
          </p>
          {rentree ? (
            <div className="mt-2 space-y-1">
              <p className="font-archivo-black text-[20px] md:text-[24px] leading-tight">
                Rentrée adultes — {rentree.dateAdultes}
              </p>
              <p className="font-archivo-black text-[20px] md:text-[24px] leading-tight">
                Rentrée enfants — {rentree.dateEnfants}
              </p>
            </div>
          ) : (
            <p className="font-news italic text-[18px] mt-2">
              Inscriptions à venir.
            </p>
          )}
        </div>

        <div className="mt-5 md:mt-0 md:border-l md:border-yellow/20 md:pl-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="font-news italic text-[14px] md:text-[15px] leading-snug opacity-85">
            Adultes &amp; enfants — séances au trimestre ou à l&apos;année.
          </p>
          <Link
            href="/contact"
            className="shrink-0 font-manrope font-semibold text-[13px] underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Nous écrire →
          </Link>
        </div>

      </div>
    </section>
    </Reveal>
  )
}
