import SectionPhoto from "./SectionPhoto"

type Props = {
  src: string
  alt: string
  sizes?: string
  objectPosition?: string
  caption?: string
  hidePhotoOnMobile?: boolean
  className?: string
  children: React.ReactNode
}

export default function IntroWithPhoto({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 40vw",
  objectPosition,
  caption,
  hidePhotoOnMobile = false,
  className = "",
  children,
}: Props) {
  const photoColClass = hidePhotoOnMobile
    ? "hidden md:block md:col-span-5"
    : "mt-8 md:mt-0 md:col-span-5"

  return (
    <div className={`md:grid md:grid-cols-12 md:gap-10 ${className}`}>
      <div className="md:col-span-7">{children}</div>
      <div className={photoColClass}>
        <SectionPhoto src={src} alt={alt} sizes={sizes} objectPosition={objectPosition} />
        {caption && (
          <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-mute mt-2">
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}
