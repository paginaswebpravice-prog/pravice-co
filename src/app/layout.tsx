import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pravice.co"),

  title: {
    default: "Pravice Abogados | Equipo jurídico y soluciones legales",
    template: "%s | Pravice Abogados",
  },

  description:
    "Pravice Abogados es una firma jurídica en Colombia enfocada en acompañamiento legal, soluciones corporativas y orientación jurídica para empresas y personas.",

  keywords: [
    "Pravice Abogados",
    "firma jurídica Colombia",
    "equipo jurídico",
    "acompañamiento legal",
    "asesoría corporativa",
    "soluciones jurídicas",
    "orientación legal empresarial",
  ],

  authors: [{ name: "Pravice Abogados" }],
  creator: "Pravice Abogados",
  publisher: "Pravice Abogados",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pravice.co",
  },

  openGraph: {
    title: "Pravice Abogados | Soluciones jurídicas y acompañamiento legal",

    description:
      "Firma jurídica en Colombia enfocada en acompañamiento legal, soluciones corporativas y orientación jurídica para empresas y personas.",

    url: "https://pravice.co",

    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pravice Abogados - Firma jurídica en Colombia",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",

    name: "Pravice Abogados",

    url: "https://pravice.co",

    logo: "https://pravice.co/logo_pravice.png",

    image: "https://pravice.co/logo_pravice.png",

    description:
      "Firma jurídica en Colombia enfocada en acompañamiento legal, soluciones corporativas y orientación jurídica para empresas y personas.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },

    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-601-3099331",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: "Spanish",
    },

    parentOrganization: {
      "@type": "LegalService",
      name: "Abogados Especialistas",
      url: "https://abogadosespecialistas.com.co",
    },

    sameAs: [
      "https://www.facebook.com/praviceabogadosespecializados",
      "https://www.instagram.com/pravice_abogados/",
      "https://co.linkedin.com/company/praviceabogadosespecializados",
      "https://abogadosespecialistas.com.co",
    ],
  };

  return (
    <html lang="es-CO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MNESPQQ54T"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            window.gtag = function(){
              window.dataLayer.push(arguments);
            };

            window.gtag('js', new Date());

            window.gtag('config', 'G-MNESPQQ54T');
          `}
        </Script>

        {/* Schema */}
        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(schema)}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
