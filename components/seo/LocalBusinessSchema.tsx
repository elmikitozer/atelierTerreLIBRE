export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://atelier-terre-libre.fr/#business",
    name: "Atelier Terre Libre",
    description:
      "Atelier de modelage et céramique à Paris 9e depuis 40 ans. Cours adultes et enfants, stages, anniversaires, team building. De mère en fille.",
    url: "https://atelier-terre-libre.fr",
    telephone: "+33618938588",
    email: "bonjour.atelierterrelibre@gmail.com",
    image: "https://atelier-terre-libre.fr/SylviaDeborah.jpg",
    logo: "https://atelier-terre-libre.fr/favicons/apple-touch-icon.png",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 rue de Vintimille",
      addressLocality: "Paris",
      postalCode: "75009",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8827362,
      longitude: 2.3294773,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/atelier_terre_libre",
      "https://www.facebook.com/atelier.terre.libre",
    ],
    areaServed: {
      "@type": "City",
      name: "Paris",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cours de poterie pour enfants",
          description:
            "Cours hebdomadaires à partir de 4 ans, mardi mercredi jeudi samedi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cours de poterie pour adultes",
          description:
            "Cours hebdomadaires en journée et soirée, du lundi au samedi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anniversaires d'enfants",
          description:
            "Animation d'anniversaires de 2h, à partir de 8 enfants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Team building",
          description:
            "Séances de team building en céramique pour entreprises",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
