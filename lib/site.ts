// Source unique de l'URL publique du site (sans slash final).
// Définie par NEXT_PUBLIC_SITE_URL ; repli sur l'hôte de production.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.atelier-terre-libre.fr"
).replace(/\/+$/, "")
