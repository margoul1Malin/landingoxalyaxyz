import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oxelya ou Oxalia",
  description: "Oxelya ou Oxalia est un projet de création de contenu pour la marque Oxalya ou Oxalia. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxalia.",
  openGraph: {
    title: "Oxelya ou Oxalia",
    description: "Oxelya ou Oxalia est un projet de création de contenu pour la marque Oxalya ou Oxalia. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxalia.",
    url: "https://oxalya.xyz/oxelya-ou-oxalia",
    siteName: "Oxelya ou Oxalia",
    images: [
      {
        url: "https://oxalya.xyz/oxelya-ou-oxalia/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxelya ou Oxalia",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxelya ou Oxalia",
    description: "Oxelya ou Oxalia est un projet de création de contenu pour la marque Oxalya ou Oxalia. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxalia.",
    site: "https://oxalya.xyz/oxelya-ou-oxalia",
    creator: "Oxelya ou Oxalia",
    images: [
      {
        url: "https://oxalya.xyz/oxelya-ou-oxalia/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxelya ou Oxalia",
      },
    ],
  },
  metadataBase: new URL("https://oxalya.xyz/oxelya-ou-oxalia"),
  alternates: {
    canonical: "https://oxalya.xyz/oxelya-ou-oxalia",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Oxelya ou Oxalia",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
 
  );
}

