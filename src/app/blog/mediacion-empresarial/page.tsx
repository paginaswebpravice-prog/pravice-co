import type { Metadata } from "next";
import ArticuloMediacion from "./Article";

const canonicalUrl = "https://pravice.co/blog/mediacion-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Mediación empresarial en Colombia: cómo resolver conflictos sin ir a juicio | Bogotá | Pravice",
  description:
    "Descubre cómo funciona la mediación empresarial en Colombia y Bogotá. Resuelve conflictos comerciales de forma rápida, económica y sin procesos judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Mediación empresarial en Colombia: solución rápida sin litigios",
    description:
      "Aprende cómo resolver conflictos empresariales sin ir a juicio mediante mediación en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Mediación empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Mediación empresarial en Colombia: evita juicios y resuelve conflictos",
    description:
      "Solución rápida y efectiva para conflictos empresariales en Colombia.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Mediación empresarial en Colombia: cómo resolver conflictos sin ir a juicio",
  description:
    "Descubre cómo funciona la mediación empresarial en Colombia y Bogotá. Resuelve conflictos comerciales de forma rápida, económica y sin procesos judiciales.",
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
  articleSection: "Resolución de Conflictos Empresariales",
  keywords: [
    "mediación empresarial Colombia",
    "resolución de conflictos empresariales",
    "derecho comercial Colombia",
    "solución de conflictos Bogotá",
    "arreglo extrajudicial empresas",
    "conciliación empresarial Colombia",
    "evitar juicios empresas Colombia",
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

      <ArticuloMediacion />
    </>
  );
}
