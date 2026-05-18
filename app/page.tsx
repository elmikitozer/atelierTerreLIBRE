import LogoMark from "@/components/ui/LogoMark";

const PALETTE = [
  { label: "yellow", hex: "#f1dd6a", bg: "bg-yellow", text: "text-ink" },
  { label: "yellow-soft", hex: "#f7ecb1", bg: "bg-yellow-soft", text: "text-ink" },
  { label: "cream", hex: "#faf7ee", bg: "bg-cream", text: "text-ink" },
  { label: "ink", hex: "#1a1814", bg: "bg-ink", text: "text-cream" },
  { label: "mute", hex: "#6a6358", bg: "bg-mute", text: "text-cream" },
  { label: "photo", hex: "#d6cfbf", bg: "bg-photo", text: "text-ink" },
] as const;

const PAGE_NAMES = [
  { name: "pratiquer", fsVar: "--fs-page-name" },
  { name: "événements", fsVar: "--fs-page-events" },
  { name: "l'atelier", fsVar: "--fs-page-name" },
  { name: "contact", fsVar: "--fs-page-name" },
] as const;

const FONTS = [
  {
    label: "Archivo Black — titres, logotype",
    cls: "font-archivo-black",
    sample: "Libérez votre créativité.",
    size: "text-4xl",
  },
  {
    label: "Archivo — contenu factuel",
    cls: "font-archivo",
    sample: "17 rue de Vintimille, 75009 Paris",
    size: "text-2xl",
  },
  {
    label: "Manrope — UI, boutons, corps",
    cls: "font-manrope",
    sample: "Cours hebdomadaires enfants & adultes dès 4 ans.",
    size: "text-2xl",
  },
  {
    label: "Newsreader — éditorial, citations",
    cls: "font-news italic",
    sample: "« Laissez la terre parler. »",
    size: "text-3xl",
  },
  {
    label: "JetBrains Mono — labels, meta",
    cls: "font-mono tracking-[0.2em] uppercase",
    sample: "De mère en fille — Paris IXe",
    size: "text-sm",
  },
] as const;

export default function DesignTest() {
  return (
    <main className="min-h-screen">

      {/* ── Section titre ── */}
      <div className="bg-ink text-yellow px-8 py-6 flex items-center justify-between">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase">
          Atelier Terre Libre — Design Tokens
        </p>
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase opacity-50">
          Étape 2 · Page de test
        </p>
      </div>

      {/* ── 1. Mot-marque principal ── */}
      <section className="bg-yellow px-8 pt-10 pb-8 overflow-hidden">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-4">
          01 — Mot-marque principal · clamp(4rem, 17vw, 14rem)
        </p>
        <h1
          className="font-archivo-black leading-[0.85] tracking-[-0.02em] text-ink"
          style={{ fontSize: "var(--fs-brand)" }}
        >
          terre <span className="italic">LIBRE</span>
        </h1>
      </section>

      {/* ── 2. Noms des pages internes ── */}
      <section className="bg-cream px-8 pt-10 pb-8 overflow-hidden">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-6">
          02 — Noms de pages internes · tester tous les viewports
        </p>
        <div className="space-y-2">
          {PAGE_NAMES.map(({ name, fsVar }) => (
            <div key={name} className="border-b border-ink/10 pb-3 overflow-hidden">
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mute mb-1">
                /{name} · {fsVar === "--fs-page-events" ? "clamp(3rem, 12.5vw, 11rem)" : "clamp(3.5rem, 15vw, 13rem)"}
              </p>
              <h2
                className="font-archivo-black leading-[0.86] tracking-[-0.02em] text-ink"
                style={{ fontSize: `var(${fsVar})` }}
              >
                {name}
                <span className="italic">.</span>
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Palette ── */}
      <section className="bg-ink px-8 pt-10 pb-10">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-yellow mb-6">
          03 — Palette
        </p>
        <div className="flex flex-wrap gap-3">
          {PALETTE.map(({ label, hex, bg, text }) => (
            <div
              key={label}
              className={`${bg} ${text} px-5 py-4 rounded-sm min-w-[140px]`}
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase font-semibold">
                {label}
              </p>
              <p className="font-mono text-[11px] mt-1 opacity-70">{hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Typographies ── */}
      <section className="bg-cream px-8 pt-10 pb-10 space-y-8">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute">
          04 — Typographies
        </p>
        {FONTS.map(({ label, cls, sample, size }) => (
          <div key={label} className="border-b border-ink/10 pb-8">
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-mute mb-3">
              {label}
            </p>
            <p className={`${cls} ${size} text-ink`}>{sample}</p>
          </div>
        ))}
      </section>

      {/* ── 5. LogoMark ── */}
      <section className="bg-yellow px-8 pt-10 pb-10">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-6">
          05 — LogoMark (proposition SVG — à affiner)
        </p>
        <div className="flex items-end gap-8">
          {[32, 44, 56, 72].map((s) => (
            <div key={s} className="flex flex-col items-center gap-2">
              <LogoMark size={s} />
              <p className="font-mono text-[9px] tracking-[0.15em] text-mute">{s}px</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-8">
          <LogoMark size={44} />
          <p className="font-archivo-black text-[18px] leading-none text-ink">
            terre<span className="italic">LIBRE</span>
          </p>
        </div>
        <p className="font-mono text-[9px] tracking-[0.15em] text-mute mt-3">
          ↑ Logotype complet · tel qu&apos;il apparaîtra dans la nav
        </p>
      </section>

    </main>
  );
}
