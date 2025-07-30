import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oxalya - Vous cherchez Oxelya ?",
  description:
    "Oxalya.xyz vous redirige vers Oxelya, votre vrai partenaire digital. Beaucoup confondent Oxalya et Oxelya — ne faites pas l'erreur.",
  openGraph: {
    title: "Oxalya ou Oxelya ?",
    description:
      "Vous êtes tombé sur Oxalya.xyz en pensant à Oxelya ? Pas de souci, on vous guide vers la bonne destination.",
    url: "https://www.oxalya.xyz",
    siteName: "Oxelya",
    images: [
      {
        url: "https://www.oxalya.xyz/og-image.png", // Remplace avec ton image OG
        width: 1200,
        height: 630,
        alt: "Oxelya Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxalya - Redirection vers Oxelya",
    description:
      "Confusion entre Oxalya et Oxelya ? Cette page vous aide à trouver le bon site : oxelya.com.",
    site: "@oxelya", // Remplace avec ton handle Twitter si dispo
    creator: "@oxelya",
    images: ["https://www.oxalya.xyz/og-image.png"],
  },
  metadataBase: new URL("https://www.oxalya.xyz"),
  alternates: {
    canonical: "https://www.oxalya.xyz",
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "og:type": "website",
    "og:locale": "fr_FR",
    "og:site_name": "Oxelya",
  },
};

export default function RootLayout({
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
              name: "Oxalya",
              url: "https://www.oxalya.xyz",
              description:
                "Oxalya redirige vers Oxelya, le vrai site officiel. Beaucoup de personnes confondent Oxalya avec Oxelya.",
              sameAs: ["https://www.oxelya.com"],
              publisher: {
                "@type": "Organization",
                name: "Oxelya",
                url: "https://www.oxelya.com",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo et description */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Oxelya</h3>
                <p className="text-gray-300 mb-4">
                  Votre agence web et marketing digital de référence. 
                  Spécialisée en développement web, SEO et solutions digitales.
                </p>
                <div className="flex space-x-4">
                  <Link 
                    href="https://www.oxelya.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Site Officiel
                  </Link>
                  <Link 
                    href="https://www.oxelya.com/contact" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Pages de confusion */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Pages de Correction</h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/confusion-oxalya-oxelya" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Oxalya vs Oxelya
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/oxelya-ou-oxalia" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Oxelya ou Oxalia
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/oxelya-site-officiel" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Site Officiel Oxalya
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-400">Nos Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="https://www.oxelya.com/services/developpement-web" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Développement Web
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://www.oxelya.com/services/optimisation-seo-referencement" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Optimisation SEO
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://www.oxelya.com/services/conseil-informatique" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      Assistance informatique
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Oxelya. Tous droits réservés. | 
                <Link 
                  href="https://www.oxelya.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors ml-1"
                >
                  Site Officiel
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
