import { Metadata } from "next";
import CumplimientoNormativoArticle from "./Article";

export const metadata: Metadata = {
  title:
    "Cumplimiento normativo en Colombia: guía para evitar multas y riesgos legales empresariales",

  description:
    "Descubre cómo implementar un programa de cumplimiento normativo en Colombia, reducir riesgos legales, evitar multas de la DIAN, SIC, UGPP y proteger tu empresa frente a sanciones y demandas.",
  alternates: {
    canonical: "https://pravice.co/blog/cumplimiento-normativo-colombia",
  },

  keywords: [
    "cumplimiento normativo colombia",
    "compliance colombia",
    "compliance empresarial",
    "programa de cumplimiento normativo",
    "riesgos legales empresariales",
    "sanciones empresariales colombia",
    "multas empresas colombia",
    "auditoria de cumplimiento",
    "gobierno corporativo colombia",
    "prevencion de riesgos legales",
    "cumplimiento regulatorio",
    "compliance corporativo",
    "consultoria compliance colombia",
    "cumplimiento empresarial",
    "control interno empresas",
    "gestion de riesgos legales",
    "cumplimiento legal empresas",
    "evitar sanciones empresariales",
  ],

  openGraph: {
    title:
      "Cumplimiento normativo en Colombia: cómo evitar multas, sanciones y riesgos empresariales",
    description:
      "Guía práctica sobre compliance en Colombia: cómo evitar sanciones legales, reducir riesgos y fortalecer tu empresa.",
    url: "https://pravice.co/blog/cumplimiento-normativo-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo-pravice.png",
        width: 1200,
        height: 630,
        alt: "Cumplimiento normativo en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* SCHEMA JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Cumplimiento normativo en Colombia: evita multas y sanciones legales en tu empresa",
              description:
                "Guía completa sobre cumplimiento normativo en Colombia y cómo implementar un programa de compliance empresarial.",
              image: "https://pravice.co/logo-pravice.png",
              author: {
                "@type": "Organization",
                name: "Pravice",
              },
              publisher: {
                "@type": "Organization",
                name: "Pravice",
                logo: {
                  "@type": "ImageObject",
                  url: "https://pravice.co/logo-pravice.png",
                },
              },
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://pravice.co/blog/cumplimiento-normativo-colombia",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://pravice.co",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://pravice.co/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Cumplimiento normativo en Colombia",
                  item: "https://pravice.co/blog/cumplimiento-normativo-colombia",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el cumplimiento normativo en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es el conjunto de procesos y políticas que una empresa implementa para cumplir con las leyes y regulaciones vigentes en Colombia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante el compliance empresarial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite evitar sanciones, multas y riesgos legales, además de mejorar la reputación y sostenibilidad de la empresa.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos evita el cumplimiento normativo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Evita sanciones legales, pérdidas económicas, problemas reputacionales y posibles procesos judiciales.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CumplimientoNormativoArticle />
    </>
  );
}
