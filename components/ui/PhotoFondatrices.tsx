import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  objectPosition?: string;
};

export default function PhotoFondatrices({
  className = "",
  priority = false,
  sizes = "100vw",
  fill = true,
  objectPosition = "center 5%",
}: Props) {
  return (
    <Image
      src="/SylviaDeborah.jpg"
      alt="Sylvia et Déborah Katuszewski, fondatrices de l'Atelier Terre Libre"
      fill={fill}
      className={`object-cover ${className}`}
      style={{ objectPosition }}
      sizes={sizes}
      priority={priority}
    />
  );
}
