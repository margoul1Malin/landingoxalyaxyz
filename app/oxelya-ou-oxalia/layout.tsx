import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oxelya ou Oxalia",
  description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia.",
  openGraph: {
    title: "Oxelya ou Oxalia",
    description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia.",
    url: "https://www.oxalya.xyz/oxelya-ou-oxalia",
    siteName: "Oxelya ou Oxalia",
    images: [
      {
        url: "https://www.oxalya.xyz/oxelya-ou-oxalia/og-image.png",
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
    description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia.",
    site: "https://www.oxalya.xyz/oxelya-ou-oxalia",
    creator: "Oxelya ou Oxalia",
    images: [
      {
        url: "https://www.oxalya.xyz/oxelya-ou-oxalia/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxelya ou Oxalia",
      },
    ],
  },
  metadataBase: new URL("https://www.oxalya.xyz/oxelya-ou-oxalia"),
  alternates: {
    canonical: "https://www.oxalya.xyz/oxelya-ou-oxalia",
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

