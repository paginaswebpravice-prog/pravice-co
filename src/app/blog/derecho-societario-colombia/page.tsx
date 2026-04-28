import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho societario en Colombia: cómo crear empresas (SAS, LTDA y SA) paso a paso",
  description:
    "Guía completa sobre derecho societario en Colombia. Aprende cómo crear una empresa, tipos de sociedades (SAS, LTDA, SA) y obligaciones legales en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-societario-colombia",
  },

  openGraph: {
    title:
      "Derecho societario en Colombia: guía para crear empresas legalmente",
    description:
      "Descubre cómo crear una empresa en Colombia, tipos de sociedades y requisitos legales paso a paso.",
    url: "https://pravice.co/blog/derecho-societario-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/derecho-societario-colombia",
  },
  headline:
    "Derecho societario en Colombia: cómo crear empresas (SAS, LTDA y SA) paso a paso",
  description:
    "Guía completa sobre derecho societario en Colombia. Aprende cómo crear una empresa, tipos de sociedades (SAS, LTDA, SA) y obligaciones legales en Bogotá y todo el país.",
  image: "https://pravice.co/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
  },
  publisher: {
    "@type": "Organization",
    name: "Pravice",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Derecho Societario",
  keywords: [
    "derecho societario Colombia",
    "crear empresa Colombia",
    "SAS Colombia",
    "LTDA Colombia",
    "SA Colombia",
    "constitución de empresas Bogotá",
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

      <Article />
    </>
  );
}
