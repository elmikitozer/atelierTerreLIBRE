// Génère les variantes WebP des photos de /public servies par LocalImage.
// Usage : npm run build:images  (à relancer quand une photo change ou s'ajoute)
import sharp from "sharp"
import path from "path"
import { mkdir } from "fs/promises"
import { LOCAL_IMAGE_WIDTHS } from "../lib/localImageLoader"

// Photos affichées via <LocalImage> (chemins relatifs à /public).
const SOURCES = [
  "SylviaDeborah.jpg",
  "teamBuilding.jpg",
  "enfants/_DSC0877.jpg",
  "enfants/_DSC0885.jpg",
  "enfants/_DSC0896.jpg",
  "adultes/_DSC0989.jpg",
]

const QUALITY = 80
const publicDir = path.join(process.cwd(), "public")
const outDir = path.join(publicDir, "optimized")

async function buildImages() {
  for (const source of SOURCES) {
    const base = source.replace(/\.[a-z]+$/i, "")
    await mkdir(path.dirname(path.join(outDir, base)), { recursive: true })
    for (const width of LOCAL_IMAGE_WIDTHS) {
      const out = path.join(outDir, `${base}-${width}.webp`)
      // Jamais d'agrandissement : une source plus petite garde sa largeur.
      const info = await sharp(path.join(publicDir, source))
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(out)
      console.log(`✓ ${path.relative(publicDir, out)} (${info.width}px, ${Math.round(info.size / 1024)} Ko)`)
    }
  }
}

buildImages().catch((error) => {
  console.error(error)
  process.exit(1)
})
