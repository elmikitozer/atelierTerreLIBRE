import type { Metadata } from "next";
import {
  Archivo_Black,
  Archivo,
  Manrope,
  Newsreader,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--nf-archivo-black",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--nf-archivo",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--nf-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--nf-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--nf-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atelier Terre Libre",
  description:
    "Atelier de modelage et de céramique de mère en fille, depuis 1985 dans le 9ᵉ arrondissement de Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${archivoBlack.variable} ${archivo.variable} ${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cream text-ink font-manrope antialiased">
        {children}
      </body>
    </html>
  );
}
