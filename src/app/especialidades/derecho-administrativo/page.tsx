import { Metadata } from "next";
import DerechoAdministrativoContent from "./DerechoAdministrativoContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-administrativo";

export const metadata: Metadata = {
  title:
    "Abogados en Derecho Administrativo en Bogotá | Defensa contra el Estado en Colombia",

  description:
    "¿Problemas con el Estado? Abogados en derecho administrativo en Bogotá. Defensa en procesos administrativos, contratación pública y demandas contra entidades en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados en Derecho Administrativo en Bogotá | Defensa contra el Estado",
    description:
      "Defiende tus derechos frente al Estado en Colombia. Abogados expertos en procesos administrativos, contratación pública y demandas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Abogados en derecho administrativo en Bogotá",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Abogados en derecho administrativo en Bogotá y Colombia",
  description:
    "¿Problemas con el Estado? Abogados en derecho administrativo en Bogotá. Defensa en procesos administrativos, contratación pública y demandas contra entidades en Colombia.",
  url: canonicalUrl,
  image: "https://pravice.co/logo_pravice.png",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  provider: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  serviceType: "Derecho administrativo y defensa contra el Estado",
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

      <DerechoAdministrativoContent />
    </>
  );
}
