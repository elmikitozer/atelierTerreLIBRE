import { writeClient } from "./lib/writeClient"
import { readFileSync } from "fs"
import { basename } from "path"

const ENFANTS = [
  "public/enfants/_DSC0879.jpg",
  "public/enfants/_DSC0882.jpg",
  "public/enfants/_DSC0889.jpg",
  "public/enfants/_DSC0890.jpg",
  "public/enfants/_DSC0898.jpg",
  "public/enfants/_DSC0899.jpg",
  "public/enfants/_DSC0904.jpg",
  "public/enfants/_DSC0906.jpg",
  "public/enfants/_DSC0908.jpg",
  "public/enfants/_DSC0912.jpg",
  "public/enfants/_DSC0914.jpg",
  "public/enfants/_DSC0916.jpg",
  "public/enfants/_DSC0917.jpg",
  "public/enfants/_DSC0918.jpg",
  "public/enfants/_DSC0922.jpg",
  "public/enfants/_DSC0924.jpg",
  "public/enfants/_DSC0926.jpg",
  "public/enfants/_DSC0928.jpg",
]

const ADULTES = [
  "public/adultes/_DSC0936.jpg",
  "public/adultes/_DSC0938.jpg",
  "public/adultes/_DSC0945.jpg",
  "public/adultes/_DSC0950.jpg",
  "public/adultes/_DSC0960.jpg",
  "public/adultes/_DSC0962.jpg",
  "public/adultes/_DSC0969.jpg",
  "public/adultes/_DSC0971.jpg",
  "public/adultes/_DSC0972.jpg",
  "public/adultes/_DSC0974.jpg",
  "public/adultes/_DSC0977.jpg",
  "public/adultes/_DSC0984.jpg",
  "public/adultes/_DSC0985.jpg",
  "public/adultes/_DSC0997.jpg",
  "public/adultes/_DSC0998.jpg",
  "public/adultes/_DSC1000.jpg",
  "public/adultes/_DSC1019.jpg",
]

function interleave(a: string[], b: string[]): string[] {
  const result: string[] = []
  const max = Math.max(a.length, b.length)
  for (let i = 0; i < max; i++) {
    if (a[i]) result.push(a[i])
    if (b[i]) result.push(b[i])
  }
  return result
}

async function uploadImage(filePath: string): Promise<string> {
  const fileBuffer = readFileSync(filePath)
  const filename = basename(filePath)
  const asset = await writeClient.assets.upload("image", fileBuffer, { filename })
  return asset._id
}

async function seed() {
  console.log("Seeding gallery...")

  const ordered = interleave(ENFANTS, ADULTES)

  for (let i = 0; i < ordered.length; i++) {
    const filePath = ordered[i]
    const fileName = basename(filePath, ".jpg")
    const docId = `galerie-${fileName.replace(/^_/, "")}`

    console.log(`  [${i + 1}/${ordered.length}] Uploading ${filePath}...`)

    const assetId = await uploadImage(filePath)

    await writeClient.createOrReplace({
      _id: docId,
      _type: "galerie",
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: assetId,
        },
      },
      order: i + 1,
    })

    console.log(`  ✓ ${docId} (order ${i + 1})`)
  }

  console.log(`Seeding terminé. ${ordered.length} photos uploadées.`)
}

seed().catch((err) => {
  console.error("Erreur :", err)
  process.exit(1)
})
