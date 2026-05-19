export default function HomeQuote() {
  return (
    <section className="bg-cream border-b border-ink/10 px-8 md:px-12 py-16 md:py-20">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Guillemet décoratif */}
        <div
          className="hidden md:block col-span-1 font-archivo-black italic leading-[0.7] text-ink/15 select-none"
          aria-hidden="true"
          style={{ fontSize: "clamp(6rem, 10vw, 10rem)" }}
        >
          &ldquo;
        </div>

        {/* Citation */}
        <div className="col-span-12 md:col-span-11">
          <blockquote>
            <p className="font-news italic text-[24px] md:text-[36px] leading-[1.2] text-ink max-w-[900px]">
              Libérez votre créativité, laissez la terre parler.
            </p>
            <footer className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mt-5">
              — Sylvia &amp; Déborah, fondatrices
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
