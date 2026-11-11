import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /index servait une copie de l'accueil en 200.
      { source: "/index", destination: "/", permanent: true },
    ]
  },
  images: {
    // Filet de sécurité : aucune image ne doit passer par l'optimiseur Vercel
    // (loaders dédiés), mais si une y revient, elle génère peu de variantes.
    // Ces largeurs servent aussi au srcset des loaders (voir lib/localImageLoader.ts).
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [256, 384],
    minimumCacheTTL: 2678400, // 31 jours
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/uogui2w1/**",
      },
    ],
  },
};

export default nextConfig;
