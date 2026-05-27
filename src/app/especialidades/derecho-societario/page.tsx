import { Metadata } from "next";
import DerechoSocietarioContent from "./DerechoSocietarioContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-societario";

export const metadata: Metadata = {
  title:
    "Derecho societario y estructuras empresariales en Colombia | Gestión corporativa",

  description:
    "Información sobre derecho societario en Colombia, sociedades comerciales, organización empresarial, estructuras corporativas y gestión societaria.",

  keywords: [
    "derecho societario Colombia",
    "sociedades comerciales Colombia",
    "estructuras empresariales",
    "gestión corporativa",
    "sociedades SAS Colombia",
    "organización empresarial",
    "derecho corporativo Colombia",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Derecho societario y gestión empresarial en Colombia",

    description:
      "Conoce aspectos relacionados con sociedades comerciales, estructuras corporativas y organización empresarial en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/og-derecho-societario.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SCHEMA SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Derecho societario y estructuras empresariales en Colombia",
  description:
    "Información sobre derecho societario, estructuras corporativas, sociedades comerciales y gestión empresarial en Colombia.",
  mainEntityOfPage: canonicalUrl,
  inLanguage: "es-CO",

  publisher: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },

  mentions: [
    {
      "@type": "WebPage",
      name: "Registro de marca en Colombia",
      url: "https://abogadosespecialistas.com.co/registro-de-marca.html",
    },
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

      <DerechoSocietarioContent />
    </>
  );
}
