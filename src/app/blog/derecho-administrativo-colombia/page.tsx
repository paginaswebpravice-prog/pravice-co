import type { Metadata } from "next";
import DerechoAdministrativoColombia from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho administrativo en Colombia: cómo actuar ante entidades públicas y evitar sanciones legales",

  description:
    "Aprende cómo funciona el derecho administrativo en Colombia, cómo responder ante entidades públicas, evitar sanciones y proteger tu empresa frente al Estado.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-administrativo-colombia",
  },

  openGraph: {
    title:
      "Derecho administrativo en Colombia: cómo actuar ante el Estado sin riesgos legales",
    description:
      "Guía práctica sobre derecho administrativo en Colombia para empresas: cómo actuar ante entidades públicas y evitar sanciones.",
    url: "https://pravice.co/blog/derecho-administrativo-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho administrativo en Colombia",
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
      {/* =========================
         SCHEMA JSON-LD
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Derecho administrativo en Colombia: cómo actuar ante entidades públicas y evitar sanciones legales",
              description:
                "Guía sobre derecho administrativo en Colombia para empresas y cómo responder ante entidades públicas.",
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
              datePublished: "2026-01-01",
              dateModified: "2026-01-01",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://pravice.co/blog/derecho-administrativo-colombia",
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
                  name: "Derecho administrativo en Colombia",
                  item: "https://pravice.co/blog/derecho-administrativo-colombia",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el derecho administrativo en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la rama del derecho que regula la relación entre los ciudadanos o empresas y las entidades públicas del Estado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo aplica el derecho administrativo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aplica cuando una empresa o persona interactúa con entidades públicas, como en sanciones, contratos estatales o trámites administrativos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo evitar sanciones administrativas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cumpliendo la normativa vigente, respondiendo oportunamente a requerimientos del Estado y contando con asesoría legal especializada.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <DerechoAdministrativoColombia />
    </>
  );
}
