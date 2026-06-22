import type { Metadata } from "next";
import AbogadosContent from "./AbogadosContent";

export const metadata: Metadata = {
  title: "Equipo Jurídico Pravice | Conoce Nuestros Abogados en Colombia",
  description:
    "Conoce el equipo jurídico de Pravice en Colombia. Profesionales con experiencia en derecho empresarial, comercial, laboral, penal, recuperación de cartera y acompañamiento legal corporativo.",

  keywords: [
    "equipo jurídico Colombia",
    "abogados en Colombia",
    "abogados corporativos",
    "abogados empresariales",
    "profesionales jurídicos",
    "equipo legal Colombia",
    "abogados Bogotá",
    "Pravice abogados",
  ],
  alternates: {
    canonical: "https://pravice.co/abogados",
  },

  openGraph: {
    title: "Equipo Jurídico Pravice | Abogados con Experiencia en Colombia",

    description:
      "Conoce a los profesionales que integran el equipo jurídico de Pravice y su experiencia en distintas áreas del derecho.",

    url: "https://pravice.co/abogados",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ================= SEO SCHEMA =================
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pravice",
  url: "https://pravice.co",
  department: "Equipo jurídico",
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

      <AbogadosContent />
    </>
  );
}
