import type { Metadata } from "next";
import BlogSEO from "./BlogSeo";

export const metadata: Metadata = {
  title:
    "Blog jurídico en Colombia | Cobranzas, conciliación y derecho empresarial",
  description:
    "Blog jurídico en Colombia con guías sobre recuperación de cartera, conciliación extrajudicial, derecho empresarial y resolución de conflictos.",

  alternates: {
    canonical: "https://pravice.co/blog",
  },

  openGraph: {
    title:
      "Blog jurídico en Colombia | Cobranzas, conciliación y derecho empresarial",
    description:
      "Aprende sobre recuperación de cartera, conciliación y derecho empresarial en Colombia.",
    url: "https://pravice.co/blog",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  keywords: [
    "blog jurídico Colombia",
    "recuperación de cartera Colombia",
    "conciliación extrajudicial Colombia",
    "derecho empresarial Colombia",
    "cobranzas Colombia",
    "resolución de conflictos empresariales",
  ],
};

export default function Page() {
  return <BlogSEO />;
}
