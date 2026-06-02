import { Metadata } from "next";
import ConciliacionContent from "./ConciliacionContent";

const canonicalUrl = "https://pravice.co/especialidades/conciliacion";

export const metadata: Metadata = {
  title: "Conciliación Extrajudicial en Colombia | Resolución de conflictos",

  description:
    "Servicio de conciliación extrajudicial en Colombia para resolver conflictos civiles, comerciales y empresariales mediante acuerdos legales y asesoría jurídica.",

  keywords: [
    "conciliación extrajudicial Colombia",
    "conciliación en Bogotá",
    "conciliación civil",
    "conciliación comercial",
    "resolución de conflictos",
    "abogados conciliación Colombia",
    "conciliación empresarial",
    "mecanismos alternativos de solución de conflictos",
    "conciliación legal Colombia",
    "acuerdos legales",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación Extrajudicial en Colombia | Solución de conflictos legales",

    description:
      "Resuelve conflictos civiles, comerciales y empresariales mediante conciliación extrajudicial en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación extrajudicial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conciliación Extrajudicial en Colombia | Resolución de conflictos",

    description:
      "Asesoría jurídica para conciliación extrajudicial y resolución de conflictos en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Conciliación extrajudicial en Colombia",
  description:
    "Servicio de conciliación extrajudicial para resolución de conflictos civiles, comerciales y empresariales en Colombia.",
  url: canonicalUrl,

  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },

  provider: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
  },

  serviceType: "Conciliación extrajudicial",
  inLanguage: "es-CO",

  sameAs: ["https://abogadosespecialistas.com.co/"],
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

      <ConciliacionContent />
    </>
  );
}
