import type { Metadata } from "next";
import VideosContent from "./VideosContent";

const canonicalUrl = "https://pravice.co/videos";

export const metadata: Metadata = {
  title:
    "Videos jurídicos en Colombia | Recursos legales y empresariales | Pravice",

  description:
    "Videos jurídicos y empresariales en Colombia sobre conciliaciones, derecho laboral, recuperación de cartera, divorcios y conflictos legales.",

  keywords: [
    "videos jurídicos Colombia",
    "videos legales Colombia",
    "derecho empresarial Colombia",
    "videos conciliación Colombia",
    "videos abogados Colombia",
    "contenido legal audiovisual",
    "videos recuperación de cartera",
    "videos derecho laboral",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Videos jurídicos y empresariales en Colombia | Pravice",

    description:
      "Contenido audiovisual sobre derecho empresarial, conciliaciones, conflictos legales y recuperación de cartera en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Videos jurídicos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Videos jurídicos en Colombia | Pravice",
    description: "Contenido audiovisual jurídico y empresarial en Colombia.",
    images: ["https://pravice.co/logo_pravice.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Videos jurídicos en Colombia",
  description:
    "Contenido audiovisual sobre derecho empresarial, conciliaciones y temas legales en Colombia.",
  url: canonicalUrl,
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

      <VideosContent />
    </>
  );
}
