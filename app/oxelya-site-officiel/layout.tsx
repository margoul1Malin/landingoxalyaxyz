import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oxalya Site Officiel",
  description: "Oxelya Site Officiel est le site officiel de la marque Oxelya. Il s'agit d'un site officiel de la marque Oxelya.",
  openGraph: {
    title: "Oxalya Site Officiel",
    description: "Oxalya Site Officiel est le site officiel de la marque Oxalya. Il s'agit d'un site officiel de la marque Oxalya.",
    url: "https://oxalya.xyz/oxalya-site-officiel",
    siteName: "Oxalya Site Officiel",
    images: [
      {
        url: "https://oxalya.xyz/oxelya-site-officiel/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxelya Site Officiel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxelya Site Officiel",
    description: "Oxelya Site Officiel est le site officiel de la marque Oxelya. Il s'agit d'un site officiel de la marque Oxelya.",
    site: "https://oxalya.xyz/oxelya-site-officiel",
    creator: "Oxelya Site Officiel",
    images: [
      {
        url: "https://oxalya.xyz/oxelya-site-officiel/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxelya Site Officiel",
      },
    ],
  },
  metadataBase: new URL("https://oxalya.xyz/oxelya-site-officiel"),
  alternates: {
    canonical: "https://oxalya.xyz/oxelya-site-officiel",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Oxelya Site Officiel",
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

