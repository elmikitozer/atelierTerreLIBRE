type Props = {
  kicker?: string
  title: React.ReactNode
  lead?: string | string[]
  id?: string
}

export default function SectionHead({ kicker, title, lead, id }: Props) {
  const leads = lead ? (Array.isArray(lead) ? lead : [lead]) : []

  return (
    <div id={id}>
      {kicker && (
        <p className="font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-mute mb-3">
          {kicker}
        </p>
      )}
      <h2 className="font-archivo-black text-[28px] md:text-[36px] leading-[0.95] tracking-tight text-ink">
        {title}
      </h2>
      {leads.map((p, i) => (
        <p
          key={i}
          className="font-news text-[16px] md:text-[18px] leading-[1.55] text-ink/80 mt-3"
        >
          {p}
        </p>
      ))}
    </div>
  )
}
