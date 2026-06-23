import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia: cómo tomar decisiones legales sin riesgos (2026)",

  description:
    "Descubre cómo la asesoría corporativa ayuda a empresas en Colombia a tomar decisiones estratégicas, reducir riesgos legales y crecer con seguridad jurídica.",

  alternates: {
    canonical: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
  },

  openGraph: {
    title:
      "Asesoría corporativa en Colombia: guía para tomar mejores decisiones empresariales",
    description:
      "Aprende cómo la asesoría corporativa ayuda a reducir riesgos legales y mejorar la toma de decisiones en empresas colombianas.",
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
      "Asesoría corporativa en Colombia: cómo tomar decisiones legales sin riesgos (2026)",
    description:
      "Guía sobre asesoría corporativa en Colombia para empresas que buscan tomar mejores decisiones y reducir riesgos legales.",
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
      "decisiones empresariales legales",
      "riesgo legal empresas",
      "consultoría jurídica empresarial",
    ],

    articleSection: "Derecho corporativo",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Article />
    </>
  );
}
