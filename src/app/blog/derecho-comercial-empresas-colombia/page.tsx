import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho comercial para empresas en Colombia: contratos, riesgos y obligaciones | Pravice",
  description:
    "Conoce cómo funciona el derecho comercial para empresas en Colombia, qué contratos debes utilizar, riesgos legales frecuentes y cómo proteger tu negocio.",
  alternates: {
    canonical: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
  },

  openGraph: {
    title:
      "Derecho comercial para empresas en Colombia: contratos y riesgos legales",
    description:
      "Guía práctica sobre derecho comercial para empresas en Colombia: contratos, obligaciones legales y prevención de conflictos empresariales.",
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
                "Derecho comercial para empresas en Colombia: contratos, riesgos y obligaciones",
              description:
                "Guía práctica sobre derecho comercial para empresas en Colombia, contratos comerciales, obligaciones legales y prevención de riesgos empresariales.",
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
                    text: "El derecho comercial es la rama del derecho que regula las actividades mercantiles, contratos empresariales, sociedades y relaciones comerciales entre empresas y comerciantes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué protege el derecho comercial en una empresa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Protege aspectos como contratos comerciales, relaciones con proveedores, acuerdos societarios, obligaciones mercantiles y operaciones empresariales que pueden generar riesgos legales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los contratos comerciales más utilizados por las empresas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los más comunes son los contratos de compraventa, suministro, distribución, prestación de servicios, arrendamiento comercial y acuerdos societarios.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué riesgos legales puede tener una empresa sin contratos adecuados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La ausencia de contratos claros puede generar incumplimientos, conflictos comerciales, pérdidas económicas, dificultades para exigir obligaciones y procesos judiciales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Por qué es importante el derecho comercial para las empresas en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Porque permite reducir riesgos jurídicos, proteger operaciones comerciales, garantizar el cumplimiento normativo y fortalecer la seguridad legal del negocio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuándo una empresa necesita asesoría en derecho comercial?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Cuando va a celebrar contratos importantes, constituir sociedades, negociar acuerdos comerciales, gestionar conflictos empresariales o implementar medidas de cumplimiento legal.",
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
