import type { TimeSlot } from "@/lib/sanity/queries"

type Props = {
  slots: TimeSlot[]
}

export default function ScheduleTable({ slots }: Props) {
  return (
    <div>
      {slots.map((slot, i) => (
        <div
          key={i}
          className="border-b border-ink/10 py-2.5 md:flex md:items-baseline md:gap-5"
        >
          {/* Jour */}
          <div className="font-archivo font-semibold text-[14px] md:text-[15px] text-ink w-full md:w-[120px] md:shrink-0">
            {slot.day}
          </div>
          {/* Horaires */}
          <div className="font-mono text-[12px] md:text-[13px] tracking-[0.04em] text-ink/80 mt-0.5 md:mt-0 flex-1">
            {slot.hours.join("  ·  ")}
          </div>
        </div>
      ))}
    </div>
  )
}
