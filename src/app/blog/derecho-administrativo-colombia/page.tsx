import type { Metadata } from "next";
import DerechoAdministrativoColombia from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho Administrativo en Colombia: Cómo Evitar Multas y Sanciones de Entidades Públicas | Pravice",

  description:
    "Aprende cómo responder requerimientos de entidades públicas, evitar sanciones administrativas y proteger a tu empresa frente a procesos del Estado en Colombia.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-administrativo-colombia",
  },

  openGraph: {
    title:
      "Derecho Administrativo en Colombia: Guía para Empresas que Enfrentan Requerimientos y Sanciones",

    description:
      "Conoce cómo actuar frente a entidades públicas, inspecciones, investigaciones y procesos administrativos para reducir riesgos legales.",

    url: "https://pravice.co/blog/derecho-administrativo-colombia",

    type: "article",

    locale: "es_CO",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho Administrativo en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cómo Evitar Sanciones Administrativas en Colombia: Guía para Empresas",

    description:
      "Qué hacer ante requerimientos, investigaciones y multas de entidades públicas.",

    images: ["https://pravice.co/logo_pravice.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",

              headline:
                "Derecho Administrativo en Colombia: Cómo Evitar Multas y Sanciones de Entidades Públicas",

              description:
                "Guía práctica para empresas sobre procesos administrativos, requerimientos y defensa frente a entidades públicas.",

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
              dateModified: "2026-06-25",

              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://pravice.co/blog/derecho-administrativo-colombia",
              },
            },
          ]),
        }}
      />

      <DerechoAdministrativoColombia />
    </>
  );
}
