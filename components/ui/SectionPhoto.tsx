import LocalImage from "./LocalImage"

type Props = {
  src: string
  alt: string
  sizes?: string
  objectPosition?: string
  className?: string
  loading?: "eager" | "lazy"
  fetchPriority?: "high" | "low" | "auto"
}

export default function SectionPhoto({
  src,
  alt,
  sizes = "(max-width: 767px) 0px, 40vw",
  objectPosition,
  className = "",
  loading,
  fetchPriority,
}: Props) {
  return (
    <div className={`relative aspect-[3/2] w-full rounded-sm overflow-hidden ${className}`}>
      <LocalImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        sizes={sizes}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </div>
  )
}
