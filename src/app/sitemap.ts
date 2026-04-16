import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pravice.co";
  const today = new Date();

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
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // HOME
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },

    // PÁGINAS PRINCIPALES
    {
      url: `${baseUrl}/videos`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/abogados`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/especialidades`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // BLOG
    ...blogUrls,
  ];
}
