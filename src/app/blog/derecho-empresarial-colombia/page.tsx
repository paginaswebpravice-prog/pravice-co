import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho empresarial en Colombia: guía legal para proteger tu empresa en 2026",
  description:
    "Descubre cómo funciona el derecho empresarial en Colombia y aprende a proteger tu empresa, cumplir la ley y evitar riesgos legales.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-empresarial-colombia",
  },

  openGraph: {
    title:
      "Derecho empresarial en Colombia: cómo proteger tu empresa legalmente",
    description:
      "Guía completa sobre derecho empresarial en Colombia, aspectos legales clave y estrategias para proteger tu negocio.",
    url: "https://pravice.co/blog/derecho-empresarial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho empresarial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// Schema SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/derecho-empresarial-colombia",
  },
  headline:
    "Derecho empresarial en Colombia: guía legal para proteger tu empresa en 2026",
  description:
    "Descubre cómo funciona el derecho empresarial en Colombia y aprende a proteger tu empresa, cumplir la ley y evitar riesgos legales.",
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
  articleSection: "Derecho Empresarial",
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
