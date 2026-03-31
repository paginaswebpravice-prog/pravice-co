import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pravice.co";

  const blogArticles = [
    "como-recuperar-cartera-morosa",
    "gestion-cartera-sector-salud",
    "automatizacion-cobranzas",
    "errores-gestion-cartera",
    "recuperacion-cartera-empresas",
    "inteligencia-artificial-cobranzas",
    "futuro-cobranzas",
    "conciliacion-extrajudicial-colombia",
    "beneficios-conciliacion",
    "mediacion-empresarial",
    "resolucion-conflictos-empresariales",
    "derecho-empresarial-colombia",
    "derecho-comercial-empresas-colombia",
    "derecho-contractual-colombia",
    "derecho-societario-colombia",
    "derecho-administrativo-colombia",
    "litigios-empresariales-colombia",
    "cumplimiento-normativo-colombia",
    "proteccion-juridica-empresarial",
    "asesoria-corporativa-empresas",
  ];

  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // HOME
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // PÁGINAS
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/especialidades`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ARTÍCULOS BLOG
    ...blogUrls,
  ];
}
