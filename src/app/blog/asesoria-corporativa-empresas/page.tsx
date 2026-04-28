import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia | Cómo tomar decisiones legales estratégicas en tu empresa",
  description:
    "La asesoría corporativa en Colombia ayuda a empresas en Bogotá y el país a tomar mejores decisiones legales, reducir riesgos y mejorar su crecimiento empresarial con respaldo jurídico experto.",

  alternates: {
    canonical: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
  },

  openGraph: {
    title:
      "Asesoría corporativa en Colombia: decisiones legales para empresas que quieren crecer",
    description:
      "Aprende cómo la asesoría corporativa en Colombia ayuda a reducir riesgos legales y tomar decisiones estratégicas en tu empresa.",
    url: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Asesoría corporativa en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Asesoría corporativa en Colombia: decisiones legales para empresas que quieren crecer",
    description:
      "La asesoría corporativa en Colombia ayuda a empresas a tomar mejores decisiones legales, reducir riesgos y mejorar su crecimiento empresarial.",
    image: "https://pravice.co/logo_pravice.png",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },
    url: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
    mainEntityOfPage:
      "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",

    keywords: [
      "asesoría corporativa Colombia",
      "abogados empresas Colombia",
      "riesgo legal empresarial",
      "consultoría legal empresas",
    ],

    articleSection: "Derecho corporativo",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article />
    </>
  );
}
