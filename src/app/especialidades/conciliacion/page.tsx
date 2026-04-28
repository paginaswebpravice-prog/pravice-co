import { Metadata } from "next";
import ConciliacionContent from "./ConciliacionContent";

const canonicalUrl = "https://pravice.co/especialidades/conciliacion";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Bogotá y Colombia | Evita juicios y resuelve conflictos rápido",

  description:
    "Resuelve conflictos mediante conciliación extrajudicial en Colombia. Ahorra tiempo, reduce costos y evita procesos judiciales con asesoría legal en Bogotá y todo el país.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación en Bogotá y Colombia | Soluciona conflictos sin ir a juicio",

    description:
      "Solución legal rápida y efectiva para resolver conflictos sin juicio en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación extrajudicial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Conciliación extrajudicial en Bogotá y Colombia",
  description:
    "Resuelve conflictos mediante conciliación extrajudicial en Colombia. Ahorra tiempo, reduce costos y evita procesos judiciales con asesoría legal en Bogotá y todo el país.",
  url: canonicalUrl,
  image: "https://pravice.co/og-image.jpg",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  provider: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  serviceType: "Conciliación extrajudicial",
  inLanguage: "es-CO",
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
