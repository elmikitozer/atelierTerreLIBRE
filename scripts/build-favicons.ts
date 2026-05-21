import sharp from "sharp"
import path from "path"

const dir = path.join(process.cwd(), "public/favicons")

async function buildFavicons() {
  const faviconSvg = path.join(dir, "favicon.svg")
  const appleSvg   = path.join(dir, "apple-touch-icon.svg")

  await sharp(faviconSvg).resize(16,  16).png().toFile(path.join(dir, "favicon-16x16.png"))
  await sharp(faviconSvg).resize(32,  32).png().toFile(path.join(dir, "favicon-32x32.png"))
  await sharp(appleSvg).resize(180, 180).png().toFile(path.join(dir, "apple-touch-icon.png"))

  console.log("✓ favicon-16x16.png")
  console.log("✓ favicon-32x32.png")
  console.log("✓ apple-touch-icon.png")
}

buildFavicons().catch(console.error)
