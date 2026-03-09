import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pravice.co/"),

  title: {
    default: "Pravice Abogados | Firma de Abogados en Bogotá",
    template: "%s | Pravice Abogados",
  },
  description:
    "Pravice Abogados es una firma legal en Bogotá con más de 25 años de experiencia ofreciendo asesoría jurídica en derecho laboral, civil, comercial, penal y registro de marcas.",

  keywords: [
    "abogados en Bogotá",
    "firma de abogados en Colombia",
    "derecho laboral Bogotá",
    "derecho civil Colombia",
    "registro de marcas Colombia",
    "abogados especialistas Bogotá",
    "asesoría legal empresarial",
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

  openGraph: {
    title: "Pravice Abogados | Firma de abogados en Bogotá",
    description:
      "Firma de abogados en Colombia especializada en asesoría jurídica empresarial y personal. Más de 25 años de experiencia.",
    url: "https://pravice.co",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pravice Abogados - Firma de abogados en Bogotá",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    url: "https://pravice.co",
    logo: "https://pravice.co/logo_pravice.png",
    image: "https://pravice.co/logo_pravice.png",
    description:
      "Firma de abogados en Bogotá especializada en asesoría jurídica empresarial y personal.",
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
    sameAs: [
      "https://www.facebook.com/praviceabogadosespecializados",
      "https://www.instagram.com/pravice_abogados/",
      "https://co.linkedin.com/company/praviceabogadosespecializados",
    ],
  };

  return (
    <html lang="es-CO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
