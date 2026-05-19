import { createClient } from "next-sanity"
import { projectId, dataset, apiVersion } from "../../sanity/env"

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) throw new Error("SANITY_API_WRITE_TOKEN manquant dans .env.local")

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})
