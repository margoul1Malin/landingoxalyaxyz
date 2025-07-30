#!/bin/bash

# Liste de dossiers à générer
folders=("app/confusion-oxalya-oxelya" "app/oxalya-site-officiel" "app/oxelya-ou-oxalia") # Ajoute ici tous les noms que tu veux

# Template de page.tsx
page_content='export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-10">
      <div>
        <h1 className="text-4xl font-bold mb-4">[NAME]</h1>
        <p className="text-lg text-gray-500">
          Cette page est destinée à corriger une confusion fréquente avec le nom "[NAME]".
        </p>
      </div>
    </main>
  )
}
'

# Template de layout.tsx sans contenu spécifique
layout_content='import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "",
    type: "website",
  },
  twitter: {
    card: "",
    title: "",
    description: "",
    site: "",
    creator: "",
    images: [""],
  },
  metadataBase: new URL(""),
  alternates: {
    canonical: "",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "",
    "og:locale": "",
    "og:site_name": "",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "",
              url: "",
              description: "",
              sameAs: [""],
              publisher: {
                "@type": "Organization",
                name: "",
                url: "",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
'

# Génération des fichiers pour chaque dossier
for name in "${folders[@]}"
do
  echo "🔧 Création pour le dossier : $name"
  mkdir -p "$name"

  # page.tsx
  page_path="$name/page.tsx"
  echo "${page_content//\[NAME\]/$name}" > "$page_path"
  echo "✅ (ré)écrit : $page_path"

  # layout.tsx
  layout_path="$name/layout.tsx"
  echo "$layout_content" > "$layout_path"
  echo "✅ (ré)écrit : $layout_path"

  echo "------"
done
