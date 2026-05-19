import Image from "next/image"

type Props = {
  src: string
  alt: string
  sizes?: string
  objectPosition?: string
  className?: string
}

export default function SectionPhoto({
  src,
  alt,
  sizes = "(max-width: 768px) 0px, 40vw",
  objectPosition,
  className = "",
}: Props) {
  return (
    <div className={`relative aspect-[3/2] w-full rounded-sm overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        sizes={sizes}
      />
    </div>
  )
}
