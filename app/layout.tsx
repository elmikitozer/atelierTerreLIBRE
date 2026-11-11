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
import { SITE_URL } from "@/lib/site"
import { OG_BASE, TWITTER_BASE } from "@/lib/seo"

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atelier Terre Libre",
    template: "%s — Atelier Terre Libre",
  },
  description:
    "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours adultes et enfants. De mère en fille.",
  authors: [{ name: "Atelier Terre Libre" }],
  creator: "Atelier Terre Libre",
  publisher: "Atelier Terre Libre",
  // Repli pour les pages sans métadonnées propres (404) ; les pages du site
  // déclarent les leurs via pageMetadata (lib/seo.ts).
  openGraph: {
    ...OG_BASE,
    url: SITE_URL,
    title: "Atelier Terre Libre",
    description:
      "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours adultes et enfants. De mère en fille.",
  },
  twitter: {
    ...TWITTER_BASE,
    title: "Atelier Terre Libre",
    description:
      "Atelier de modelage et céramique à Paris 9e depuis 40 ans.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
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
