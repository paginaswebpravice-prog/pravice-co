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
    "errores-legales-empresas-colombia",
    "cliente-no-quiere-pagar",
    "empresa-no-paga-factura",
    "como-proteger-empresa-legalmente",
    "riesgos-legales-empresas",
    "proveedor-incumple-contrato",
    "empresa-demandada-colombia",
    "evitar-demandas-empresas",
    "contratos-empresariales-colombia",
    "iguala-juridica-empresas",
  ];

  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const especialidades = [
    "derecho-comercial",
    "recuperacion-de-cartera",
    "conciliacion",
    "litigios",
    "derecho-empresarial",
    "asesoria-corporativa",
    "derecho-contractual",
    "derecho-societario",
    "derecho-administrativo",
    "resolucion-de-conflictos",
    "cumplimiento-normativo",
    "proteccion-juridica-empresarial",
  ];

  const colombianosExterior = [
    "",
    "divorcios-colombia",
    "custodia-alimentos",
    "poderes-colombia",
    "sucesiones-herencias",
    "demandas-colombia",
    "asesoria-legal-virtual",
  ];

  const abogados = [
    "",
    "abogado-Alberto",
    "abogada-Leidy",
    "abogada-Angie",
    "abogado-Guillermo",
    "abogado-Harrison",
    "abogado-Marcial",
    "abogado-Santiago",
  ];

  const especialidadesUrls = especialidades.map((slug) => ({
    url: `${baseUrl}/especialidades/${slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const colombianosExteriorUrls = colombianosExterior.map((slug) => ({
    url: slug
      ? `${baseUrl}/colombianos-exterior/${slug}`
      : `${baseUrl}/colombianos-exterior`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: slug === "" ? 0.95 : 0.9,
  }));

  const abogadosUrls = abogados.map((slug) => ({
    url: slug ? `${baseUrl}/abogados/${slug}` : `${baseUrl}/abogados`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: slug === "" ? 0.95 : 0.9,
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
      url: `${baseUrl}/abogados`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/colombianos-exterior`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videos`,
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

    // COLOMBIANOS EXTERIOR
    ...colombianosExteriorUrls,

    // ESPECIALIDADES
    ...especialidadesUrls,

    // BLOG
    ...blogUrls,

    // ABOGADOS
    ...abogadosUrls,
  ];
}
