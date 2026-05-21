import type { Metadata } from "next"
import {
  Archivo_Black,
  Archivo,
  Manrope,
  Newsreader,
  JetBrains_Mono,
} from "next/font/google"
import "./globals.css"
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--nf-archivo-black",
  subsets: ["latin"],
  display: "swap",
})

const archivo = Archivo({
  variable: "--nf-archivo",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
})

const manrope = Manrope({
  variable: "--nf-manrope",
  subsets: ["latin"],
  display: "swap",
})

const newsreader = Newsreader({
  variable: "--nf-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--nf-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier-terre-libre.fr"),
  title: {
    default: "Atelier Terre Libre",
    template: "%s — Atelier Terre Libre",
  },
  description:
    "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours adultes et enfants. De mère en fille.",
  keywords: [
    "atelier poterie Paris",
    "céramique Paris 9",
    "cours modelage enfants",
    "cours poterie adultes",
    "atelier terre",
    "anniversaire poterie enfant Paris",
    "team building céramique",
    "Sylvia Katuszewski",
    "Déborah Katuszewski",
  ],
  authors: [{ name: "Atelier Terre Libre" }],
  creator: "Atelier Terre Libre",
  publisher: "Atelier Terre Libre",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atelier-terre-libre.fr",
    siteName: "Atelier Terre Libre",
    title: "Atelier Terre Libre",
    description:
      "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours adultes et enfants. De mère en fille.",
    images: [
      {
        url: "/SylviaDeborah.jpg",
        width: 1200,
        height: 800,
        alt: "Sylvia et Déborah, fondatrices de l'Atelier Terre Libre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Terre Libre",
    description:
      "Atelier de modelage et céramique à Paris 9e depuis 40 ans.",
    images: ["/SylviaDeborah.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://atelier-terre-libre.fr",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${archivoBlack.variable} ${archivo.variable} ${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cream text-ink font-manrope antialiased">
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  )
}
