type Props = {
  duration: string
  amount: number
  unit?: string
  /** "light" = bg-cream (défaut), "dark" = bg-ink text-yellow */
  variant?: "light" | "dark"
}

export default function PriceCard({ duration, amount, unit, variant = "light" }: Props) {
  const isDark = variant === "dark"

  return (
    <div
      className={`rounded-sm p-5 flex flex-col gap-1 ${
        isDark ? "bg-ink text-yellow" : "bg-cream border border-ink/10"
      }`}
    >
      <p
        className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
          isDark ? "opacity-70" : "text-mute"
        }`}
      >
        {duration}
      </p>
      <p className="font-archivo-black text-[28px] leading-none">
        {amount} €
      </p>
      {unit && (
        <p
          className={`font-mono text-[10px] tracking-[0.15em] uppercase ${
            isDark ? "opacity-60" : "text-mute"
          }`}
        >
          {unit}
        </p>
      )}
    </div>
  )
}
