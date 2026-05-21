import { NextResponse } from "next/server"

const PLACE_ID = "ChIJa77nG0xu5kcRPDnoVe019MI"

export const revalidate = 86400

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: "API key manquante" }, { status: 500 })
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr`

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews,googleMapsUri",
      },
      next: { revalidate: 86400 },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Google Places API error:", errorText)
      return NextResponse.json(
        { error: "Erreur API Google", detail: errorText },
        { status: response.status }
      )
    }

    const data = await response.json()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reviews = (data.reviews || []).map((r: any) => ({
      author: r.authorAttribution?.displayName || "Anonyme",
      authorPhoto: r.authorAttribution?.photoUri || null,
      rating: r.rating,
      text: r.text?.text || r.originalText?.text || "",
      relativeTime: r.relativePublishTimeDescription || "",
    }))

    return NextResponse.json({
      rating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
      googleMapsUri: data.googleMapsUri ?? null,
    })
  } catch (error) {
    console.error("Erreur fetch Google reviews:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
