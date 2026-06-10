import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pravice.co";

  // FECHA ESTÁTICA ÚLTIMA ACTUALIZACIÓN SEO
  const lastUpdate = new Date("2026-05-27");

  const blogArticles = [
    /* ================= CARTERA ================= */

    "como-recuperar-cartera-morosa",
    "gestion-cartera-sector-salud",
    "automatizacion-cobranzas",
    "errores-gestion-cartera",
    "recuperacion-cartera-empresas",
    "inteligencia-artificial-cobranzas",
    "futuro-cobranzas",
    "cliente-no-quiere-pagar",
    "empresa-no-paga-factura",
    "cobranza-prejuridica-colombia",
    "indicadores-gestion-cartera",
    "cartera-vencida-empresas",
    "proceso-cobro-juridico-colombia",
    "software-gestion-cartera",

    /* ================= CONFLICTOS ================= */

    "mediacion-empresarial",
    "resolucion-conflictos-empresariales",
    "conflictos-socios-empresas",
    "conflictos-laborales-empresas",
    "mecanismos-resolucion-conflictos",
    "arbitraje-colombia",
    "conflictos-contractuales",
    "negociacion-empresarial",
    "conflictos-clientes-empresas",
    "conflictos-proveedores",
    "resolucion-pacificaconflictos",
    "gestion-conflictos-organizacionales",

    /* ================= CONCILIACION ================= */

    "conciliacion-extrajudicial-colombia",
    "beneficios-conciliacion",
    "tipos-conciliacion-colombia",
    "conciliacion-laboral-colombia",
    "conciliacion-civil-colombia",
    "acta-conciliacion-colombia",
    "ventajas-conciliacion-empresas",
    "centros-conciliacion-colombia",
    "requisitos-conciliacion",
    "fracaso-conciliacion",
    "conciliacion-virtual-colombia",

    /* ================= DERECHO ================= */

    "derecho-empresarial-colombia",
    "derecho-comercial-empresas-colombia",
    "derecho-contractual-colombia",
    "derecho-societario-colombia",
    "derecho-administrativo-colombia",
    "litigios-empresariales-colombia",
    "abogado-empresarial-colombia",
    "responsabilidad-civil-empresas",
    "demandas-comerciales-colombia",
    "propiedad-intelectual-empresas",
    "habeas-data-empresas",

    /* ================= NORMATIVO ================= */

    "cumplimiento-normativo-colombia",
    "sarlaft-colombia",
    "compliance-empresarial-colombia",
    "proteccion-datos-empresas",
    "prevencion-lavado-activos",
    "gobierno-corporativo-colombia",
    "riesgo-legal-empresas",
    "auditoria-legal-empresas",
    "manual-cumplimiento-empresarial",
    "debida-diligencia-empresarial",
    "regulacion-empresarial-colombia-2026",

    /* ================= EMPRESARIAL ================= */

    "proteccion-juridica-empresarial",
    "asesoria-corporativa-empresas",
    "errores-legales-empresas-colombia",
    "como-proteger-empresa-legalmente",
    "riesgos-legales-empresas",
    "proveedor-incumple-contrato",
    "empresa-demandada-colombia",
    "evitar-demandas-empresas",
    "contratos-empresariales-colombia",
    "iguala-juridica-empresas",
    "asesoria-legal-pymes-colombia",
  ];

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

  // BLOG
  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  // ESPECIALIDADES
  const especialidadesUrls = especialidades.map((slug) => ({
    url: `${baseUrl}/especialidades/${slug}`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // COLOMBIANOS EN EL EXTERIOR
  const colombianosExteriorUrls = colombianosExterior.map((slug) => ({
    url: slug
      ? `${baseUrl}/colombianos-exterior/${slug}`
      : `${baseUrl}/colombianos-exterior`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: slug === "" ? 0.7 : 0.6,
  }));

  // ABOGADOS
  const abogadosUrls = abogados.map((slug) => ({
    url: slug ? `${baseUrl}/abogados/${slug}` : `${baseUrl}/abogados`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: slug === "" ? 0.75 : 0.7,
  }));

  return [
    // HOME
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },

    // PÁGINAS PRINCIPALES
    {
      url: `${baseUrl}/videos`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/abogados`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/especialidades`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/colombianos-exterior`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.6,
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
