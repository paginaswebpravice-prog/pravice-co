import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },

      // Bots importantes (IA + SEO)
      {
        userAgent: ["Googlebot", "Bingbot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://pravice.co/sitemap.xml",
  };
}
