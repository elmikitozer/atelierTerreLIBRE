import LocalImage from "./LocalImage";

type Props = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  objectPosition?: string;
  alt?: string;
};

export default function PhotoFondatrices({
  className = "",
  priority = false,
  sizes = "100vw",
  fill = true,
  objectPosition = "center 5%",
  alt = "Sylvia et Déborah Katuszewski, fondatrices de l'Atelier Terre Libre",
}: Props) {
  return (
    <LocalImage
      src="/SylviaDeborah.jpg"
      alt={alt}
      fill={fill}
      className={`object-cover ${className}`}
      style={{ objectPosition }}
      sizes={sizes}
      priority={priority}
    />
  );
}
