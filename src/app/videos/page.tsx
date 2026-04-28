import type { Metadata } from "next";
import VideosContent from "./VideosContent";

const canonicalUrl = "https://pravice.co/videos";

export const metadata: Metadata = {
  title:
    "Videos de Abogados en Bogotá Colombia | Derecho Comercial, Laboral y Familiar",

  description:
    "Explora videos legales en Bogotá Colombia sobre derecho comercial, laboral, familia, demandas, conciliaciones y cobro de cartera con abogados expertos.",

  keywords: [
    "abogados en Bogotá Colombia",
    "videos legales Colombia",
    "derecho comercial Bogotá",
    "derecho laboral Colombia",
    "abogados de familia Bogotá",
    "cobro de cartera Colombia",
    "asesoría jurídica empresas Bogotá",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Videos de Abogados en Bogotá Colombia | Derecho Comercial, Laboral y Familiar",

    description:
      "Contenido jurídico en video sobre derecho comercial, laboral, familia y asesoría legal en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Videos de abogados en Bogotá Colombia",
  description:
    "Explora videos legales en Bogotá Colombia sobre derecho comercial, laboral, familia, demandas, conciliaciones y cobro de cartera con abogados expertos.",
  url: canonicalUrl,
  inLanguage: "es-CO",
  isPartOf: {
    "@type": "WebSite",
    name: "Pravice",
    url: "https://pravice.co",
  },
  about: [
    "Derecho comercial",
    "Derecho laboral",
    "Derecho de familia",
    "Conciliación",
    "Cobro de cartera",
    "Asesoría jurídica empresarial",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <VideosContent />
    </>
  );
}
