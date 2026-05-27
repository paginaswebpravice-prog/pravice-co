import { Metadata } from "next";
import DerechoFamiliaContent from "./DerechoFamiliaContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-familia";

export const metadata: Metadata = {
  title:
    "Guía de derecho de familia en Colombia | Divorcios, custodia y alimentos",

  description:
    "Guía informativa sobre derecho de familia en Colombia: divorcios, custodia de menores, alimentos y sucesiones. Contenido educativo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Guía de derecho de familia en Colombia | Información legal",
    description:
      "Contenido informativo sobre derecho de familia en Colombia: divorcios, custodia, alimentos y procesos familiares.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og/derecho-familia.jpg",
        width: 1200,
        height: 630,
        alt: "Guía derecho de familia Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ================= SCHEMA SEO =================
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  name: "Guía de derecho de familia en Colombia",
  description:
    "Contenido educativo sobre derecho de familia en Colombia como apoyo informativo.",
  url: canonicalUrl,
  author: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
  },
  about: {
    "@type": "Thing",
    name: "Derecho de familia",
  },
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

      <DerechoFamiliaContent />
    </>
  );
}
