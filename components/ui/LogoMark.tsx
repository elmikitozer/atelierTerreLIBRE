type Props = {
  size?: number;
};

export default function LogoMark({ size = 44 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="22" fill="var(--color-accent)" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fontFamily="'Archivo Black', 'Arial Black', sans-serif"
        fontStyle="italic"
        fontSize="20"
        fill="#1a1814"
        letterSpacing="-1"
      >
        tL
      </text>
    </svg>
  );
}
