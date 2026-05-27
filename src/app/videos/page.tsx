import type { Metadata } from "next";
import VideosContent from "./VideosContent";

const canonicalUrl = "https://pravice.co/videos";

export const metadata: Metadata = {
  title: "Videos jurídicos en Colombia | Pravice",

  description:
    "Contenido audiovisual e informativo sobre temas legales, conciliaciones, derecho empresarial y recuperación de cartera en Colombia.",

  keywords: [
    "videos jurídicos Colombia",
    "contenido legal audiovisual",
    "videos legales Colombia",
    "recursos jurídicos",
    "videos derecho empresarial",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Videos jurídicos en Colombia | Pravice",

    description:
      "Contenido audiovisual sobre temas jurídicos y empresariales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <VideosContent />;
}
