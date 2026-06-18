import { Metadata } from "next";
import DerechoComercialContent from "./DerechoComercialContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-comercial";

export const metadata: Metadata = {
  title:
    "Gestión Comercial Empresarial en Colombia | Riesgos Comerciales y Cumplimiento Empresarial",

  description:
    "Guía sobre gestión comercial empresarial, relaciones con clientes y proveedores, riesgos comerciales y cumplimiento empresarial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Gestión Comercial Empresarial en Colombia | Operaciones y Riesgos Comerciales",

    description:
      "Conoce cómo fortalecer la gestión comercial, prevenir conflictos empresariales y mejorar relaciones comerciales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Gestión Comercial Empresarial y Prevención de Riesgos Comerciales en Colombia",

  description:
    "Información sobre operaciones comerciales, gestión empresarial, cumplimiento corporativo y prevención de riesgos comerciales en Colombia.",

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

  mainEntityOfPage: canonicalUrl,

  image: "https://pravice.co/logo_pravice.png",

  inLanguage: "es-CO",
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

      <DerechoComercialContent />
    </>
  );
}
