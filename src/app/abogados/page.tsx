import type { Metadata } from "next";
import AbogadosContent from "./AbogadosContent";

export const metadata: Metadata = {
  title: "Equipo de abogados en Colombia | Pravice",
  description:
    "Conoce el equipo jurídico de Pravice en Colombia, especialistas en derecho empresarial, laboral, penal y familiar.",

  alternates: {
    canonical: "https://pravice.co/abogados",
  },

  openGraph: {
    title: "Equipo de abogados en Colombia | Pravice",
    description:
      "Conoce nuestro equipo de abogados especializados en diferentes áreas del derecho en Colombia.",
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
