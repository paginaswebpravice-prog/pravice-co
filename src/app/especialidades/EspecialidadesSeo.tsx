"use client";

/* ================= METADATA ================= */
export const metadata = {
  title:
    "Especialidades legales en Colombia | Derecho comercial, conciliación y litigios en Bogotá",

  description:
    "Servicios legales en Colombia: derecho comercial, recuperación de cartera, conciliación, litigios y asesoría empresarial en Bogotá.",

  keywords: [
    "abogados en Colombia",
    "derecho comercial Colombia",
    "recuperación de cartera Bogotá",
    "conciliación Colombia",
    "litigios empresariales Bogotá",
    "asesoría jurídica empresas Colombia",
  ],

  robots: "index, follow",

  alternates: {
    canonical: "https://pravice.co/especialidades",
  },

  openGraph: {
    title: "Especialidades legales en Colombia | Abogados en Bogotá",
    description:
      "Conoce nuestras especialidades legales en Colombia: conciliación, litigios, derecho comercial y asesoría empresarial.",
    url: "https://pravice.co/especialidades",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Servicios legales en Colombia",
    description: "Especialidades jurídicas en Bogotá y Colombia para empresas.",
  },
};

export default function EspecialidadesSeo() {
  const especialidades = [
    {
      titulo: "Derecho Comercial",
      descripcion:
        "Asesoría en derecho comercial en Colombia para empresas, contratos mercantiles y operaciones comerciales, con abogados especializados en Bogotá.",
      icono: "https://pravice.co/icons/derecho-comercial.svg",
    },
    {
      titulo: "Recuperación de Cartera",
      descripcion:
        "Recuperación de cartera en Colombia mediante estrategias de cobro prejurídico y jurídico, optimizando el recaudo de deudas empresariales.",
      icono: "https://pravice.co/icons/cartera.svg",
    },
    {
      titulo: "Conciliación",
      descripcion:
        "Conciliación extrajudicial en Colombia como mecanismo eficaz para resolver conflictos empresariales sin necesidad de procesos judiciales.",
      icono: "https://pravice.co/icons/conciliacion.svg",
    },
    {
      titulo: "Litigios",
      descripcion:
        "Representación en litigios empresariales en Colombia ante juzgados.",
      icono: "https://pravice.co/icons/litigios.svg",
    },
    {
      titulo: "Derecho Empresarial",
      descripcion:
        "Servicios de derecho empresarial en Bogotá para empresas en Colombia.",
      icono: "https://pravice.co/icons/empresarial.svg",
    },
    {
      titulo: "Asesoría Corporativa",
      descripcion:
        "Asesoría corporativa estratégica para empresas en Colombia.",
      icono: "https://pravice.co/icons/corporativa.svg",
    },
    {
      titulo: "Derecho Contractual",
      descripcion:
        "Elaboración y revisión de contratos comerciales en Colombia.",
      icono: "https://pravice.co/icons/contractual.svg",
    },
    {
      titulo: "Derecho Societario",
      descripcion: "Constitución y reorganización de sociedades en Colombia.",
      icono: "https://pravice.co/icons/societario.svg",
    },
    {
      titulo: "Derecho Administrativo",
      descripcion: "Asesoría en procesos administrativos en Colombia.",
      icono: "https://pravice.co/icons/administrativo.svg",
    },
    {
      titulo: "Resolución de Conflictos",
      descripcion:
        "Solución de conflictos empresariales mediante mecanismos legales.",
      icono: "https://pravice.co/icons/conflictos.svg",
    },
    {
      titulo: "Cumplimiento Normativo",
      descripcion:
        "Prevención de riesgos legales y cumplimiento normativo en Colombia.",
      icono: "https://pravice.co/icons/compliance.svg",
    },
    {
      titulo: "Protección Jurídica Empresarial",
      descripcion: "Estrategias para salvaguardar activos y operaciones.",
      icono: "https://pravice.co/icons/proteccion.svg",
    },
  ];

  const portales = [
    "https://cobrandoonline.com/",
    "https://recaudocarteraipsyeps.com/",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Especialidades legales en Colombia",
    url: "https://pravice.co/especialidades",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Especialidades Jurídicas",
      itemListElement: especialidades.map((esp) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: esp.titulo,
          description: esp.descripcion,
          image: esp.icono,
        },
      })),
    },
    sameAs: portales,
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
