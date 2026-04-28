import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho comercial en Colombia: guía práctica para empresas y contratos seguros | Pravice",
  description:
    "Aprende qué es el derecho comercial en Colombia, tipos de contratos empresariales, normativa vigente y cómo proteger legalmente tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
  },

  openGraph: {
    title:
      "Derecho comercial en Colombia: contratos, empresas y protección legal",
    description:
      "Guía completa sobre derecho comercial en Colombia, contratos empresariales y cómo proteger tu empresa legalmente.",
    url: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho comercial en Colombia",
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
                "Derecho comercial en Colombia: guía práctica para empresas y contratos seguros",
              description:
                "Guía completa sobre derecho comercial en Colombia, contratos empresariales y protección legal para empresas.",
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
                  "https://pravice.co/blog/derecho-comercial-empresas-colombia",
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
                  name: "Derecho comercial en Colombia",
                  item: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el derecho comercial en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es la rama del derecho que regula las actividades mercantiles, contratos empresariales y relaciones comerciales entre empresas y comerciantes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipos de contratos existen en el derecho comercial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Existen contratos como compraventa, distribución, suministro, arrendamiento comercial, franquicia y prestación de servicios, entre otros.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo proteger legalmente una empresa en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mediante contratos bien redactados, cumplimiento normativo, asesoría legal continua y gestión adecuada de riesgos comerciales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante el derecho comercial para empresas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Permite prevenir conflictos legales, asegurar relaciones comerciales y proteger los intereses económicos de la empresa.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <Article />
    </>
  );
}
