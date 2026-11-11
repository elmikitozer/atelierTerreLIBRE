// Génère les icônes du site à partir des SVG de public/favicons.
// Usage : npm run build:favicons  (à relancer quand un SVG change)
// Les fichiers générés sont commités : ils ne sont pas reconstruits au build.
import sharp from "sharp"
import path from "path"
import { writeFile } from "fs/promises"

const publicDir = path.join(process.cwd(), "public")
const dir = path.join(publicDir, "favicons")

// Le SVG fait 32 px de côté : on le rastérise à haute densité pour que les
// tailles supérieures restent nettes.
function render(svg: string, size: number, opaque = false): Promise<Buffer> {
  const image = sharp(svg, { density: 72 * 16 }).resize(size, size)
  // iOS remplit en noir les zones transparentes : l'icône Apple n'a pas de canal alpha.
  return (opaque ? image.removeAlpha() : image).png().toBuffer()
}

// Conteneur ICO dont chaque entrée embarque un PNG (lu par tous les navigateurs).
function buildIco(images: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // réservé
  header.writeUInt16LE(1, 2) // type : icône
  header.writeUInt16LE(images.length, 4)

  let offset = 6 + 16 * images.length
  const entries = images.map(({ size, png }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size, 0) // largeur
    entry.writeUInt8(size, 1) // hauteur
    entry.writeUInt8(0, 2) // palette
    entry.writeUInt8(0, 3) // réservé
    entry.writeUInt16LE(1, 4) // plans
    entry.writeUInt16LE(32, 6) // bits par pixel
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += png.length
    return entry
  })

  return Buffer.concat([header, ...entries, ...images.map((image) => image.png)])
}

async function buildFavicons() {
  const faviconSvg = path.join(dir, "favicon.svg")
  const appleSvg = path.join(dir, "apple-touch-icon.svg")

  const pngs: { size: number; png: Buffer }[] = []
  for (const size of [16, 32, 48]) {
    const png = await render(faviconSvg, size)
    pngs.push({ size, png })
    await writeFile(path.join(dir, `favicon-${size}x${size}.png`), png)
    console.log(`✓ favicons/favicon-${size}x${size}.png`)
  }

  await writeFile(path.join(dir, "apple-touch-icon.png"), await render(appleSvg, 180, true))
  console.log("✓ favicons/apple-touch-icon.png")

  await writeFile(path.join(publicDir, "favicon.ico"), buildIco(pngs))
  console.log("✓ favicon.ico (16, 32, 48)")
}

buildFavicons().catch((error) => {
  console.error(error)
  process.exit(1)
})
