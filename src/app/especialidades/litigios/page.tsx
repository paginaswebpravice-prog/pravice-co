import { Metadata } from "next";
import LitigiosContent from "./LitigiosContent";

const canonicalUrl = "https://pravice.co/especialidades/litigios";

export const metadata: Metadata = {
  title:
    "Litigios empresariales y procesos judiciales en Colombia | Gestión jurídica corporativa",

  description:
    "Información sobre litigios empresariales, procesos judiciales civiles y comerciales en Colombia, gestión de controversias legales y estrategias jurídicas corporativas.",

  keywords: [
    "litigios empresariales Colombia",
    "procesos judiciales empresariales",
    "litigios comerciales Colombia",
    "procesos civiles empresas",
    "controversias legales empresariales",
    "defensa judicial empresarial",
    "gestión jurídica corporativa",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Litigios empresariales y controversias legales en Colombia",

    description:
      "Conoce información sobre litigios civiles, comerciales y procesos judiciales empresariales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
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
  headline: "Litigios empresariales y procesos judiciales en Colombia",
  description:
    "Información sobre litigios civiles, comerciales, controversias legales y gestión jurídica empresarial en Colombia.",
  mainEntityOfPage: canonicalUrl,
  inLanguage: "es-CO",
  about: [
    "Litigios empresariales",
    "Procesos judiciales",
    "Defensa judicial",
    "Controversias comerciales",
  ],
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
      name: "Abogados litigantes y litigios en Colombia",
      url: "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
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

      <LitigiosContent />
    </>
  );
}
