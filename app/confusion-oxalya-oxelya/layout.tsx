import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confusion Oxalya ou Oxelya",
  description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia ni Xelya.",
  openGraph: {
    title: "Confusion Oxalya ou Oxelya",
    description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia ni Xelya.",
    url: "https://www.oxalya.xyz/confusion-oxalya-oxelya",
    siteName: "Confusion Oxalya ou Oxelya",
    images: [
      {
        url: "https://www.oxalya.xyz/confusion-oxalya-oxelya/og-image.png",
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
    description: "Oxelya est une agence de développement web et ce n'est pas Oxalya ou Oxalia ni Xelya.",
    site: "https://www.oxalya.xyz/confusion-oxalya-oxelya",
    creator: "Confusion Oxalya ou Oxelya",
    images: [
      {
        url: "https://www.oxalya.xyz/confusion-oxalya-oxelya/og-image.png",
        width: 1200,
        height: 630,
        alt: "Confusion Oxalya ou Oxelya",
      },
    ],
  },
  metadataBase: new URL("https://www.oxalya.xyz/confusion-oxalya-oxelya"),
  alternates: {
    canonical: "https://www.oxalya.xyz/confusion-oxalya-oxelya",
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

