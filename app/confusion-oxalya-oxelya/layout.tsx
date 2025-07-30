import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confusion Oxalya ou Oxelya",
  description: "Confusion Oxalya ou Oxelya est un projet de création de contenu pour la marque Oxalya ou Oxelya. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxelya.",
  openGraph: {
    title: "Confusion Oxalya ou Oxelya",
    description: "Confusion Oxalya ou Oxelya est un projet de création de contenu pour la marque Oxalya ou Oxelya. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxelya.",
    url: "https://oxalya.xyz/confusion-oxalya-oxelya",
    siteName: "Confusion Oxalya ou Oxelya",
    images: [
      {
        url: "https://oxalya.xyz/confusion-oxalya-oxelya/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confusion Oxalya ou Oxelya",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confusion Oxalya ou Oxelya",
    description: "Confusion Oxalya ou Oxelya est un projet de création de contenu pour la marque Oxalya ou Oxelya. Il s'agit d'un projet de création de contenu pour la marque Oxalya ou Oxelya.",
    site: "https://oxalya.xyz/confusion-oxalya-oxelya",
    creator: "Confusion Oxalya ou Oxelya",
    images: [
      {
        url: "https://oxalya.xyz/confusion-oxalya-oxelya/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confusion Oxalya ou Oxelya",
      },
    ],
  },
  metadataBase: new URL("https://oxalya.xyz/confusion-oxalya-oxelya"),
  alternates: {
    canonical: "https://oxalya.xyz/confusion-oxalya-oxelya",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Confusion Oxalya ou Oxelya",
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

