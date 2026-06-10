"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

/* ================= ARTÍCULOS ================= */

const articles = [
  /* ================= CARTERA ================= */

  {
    slug: "como-recuperar-cartera-morosa",
    title:
      "Cómo recuperar cartera morosa en Colombia de forma efectiva en 2026",
    description:
      "Aprende estrategias legales y financieras para recuperar cartera en Colombia.",
    category: "cartera",
  },
  {
    slug: "recuperacion-cartera-empresas",
    title:
      "Métodos efectivos para recuperación de cartera empresarial en Colombia",
    description:
      "Estrategias utilizadas por empresas en Colombia para mejorar su recaudo.",
    category: "cartera",
  },
  {
    slug: "errores-gestion-cartera",
    title:
      "Errores en la gestión de cartera en Colombia y cómo evitarlos fácilmente",
    description:
      "Evita fallos frecuentes que afectan el recaudo y la liquidez empresarial.",
    category: "cartera",
  },
  {
    slug: "gestion-cartera-sector-salud",
    title: "Gestión de cartera en el sector salud en Colombia: guía completa",
    description:
      "Estrategias especializadas para mejorar el recaudo en entidades de salud.",
    category: "cartera",
  },
  {
    slug: "automatizacion-cobranzas",
    title:
      "Automatización de cobranzas en empresas: cómo mejorar el recaudo en Colombia",
    description:
      "Cómo la tecnología está optimizando los procesos de recaudo y cobranza.",
    category: "cartera",
  },
  {
    slug: "futuro-cobranzas",
    title: "El futuro de las cobranzas en Colombia: tendencias y tecnología",
    description:
      "Tendencias tecnológicas y legales que transformarán la gestión de cartera.",
    category: "cartera",
  },
  {
    slug: "inteligencia-artificial-cobranzas",
    title:
      "Inteligencia artificial en cobranzas: cómo está cambiando la recuperación de cartera",
    description: "La IA está transformando la gestión de cartera en Colombia.",
    category: "cartera",
  },
  {
    slug: "cobranza-prejuridica-colombia",
    title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Cómo funciona la cobranza prejurídica y cuándo usarla antes de demandar.",
    category: "cartera",
  },
  {
    slug: "indicadores-gestion-cartera",
    title: "Indicadores de gestión de cartera: métricas clave para empresas",
    description:
      "KPIs esenciales para medir recuperación de cartera y morosidad.",
    category: "cartera",
  },
  {
    slug: "cartera-vencida-empresas",
    title: "Cómo reducir la cartera vencida en empresas colombianas",
    description:
      "Estrategias para disminuir mora y mejorar flujo de caja empresarial.",
    category: "cartera",
  },
  {
    slug: "proceso-cobro-juridico-colombia",
    title: "Cobro jurídico en Colombia: cómo funciona el proceso legal",
    description:
      "Paso a paso del proceso de cobro jurídico para empresas y acreedores.",
    category: "cartera",
  },
  {
    slug: "software-gestion-cartera",
    title: "Software de gestión de cartera: ventajas para empresas en Colombia",
    description: "Cómo los sistemas tecnológicos mejoran procesos de cobranza.",
    category: "cartera",
  },

  /* ================= CONFLICTOS ================= */

  {
    slug: "mediacion-empresarial",
    title: "Mediación empresarial en Colombia: solución rápida para conflictos",
    description:
      "Alternativa eficaz para resolver conflictos empresariales en Colombia.",
    category: "conflictos",
  },
  {
    slug: "resolucion-conflictos-empresariales",
    title: "Cómo resolver conflictos empresariales en Colombia: guía completa",
    description: "Mecanismos legales para resolver disputas empresariales.",
    category: "conflictos",
  },
  {
    slug: "conflictos-socios-empresas",
    title: "Cómo resolver conflictos entre socios de una empresa en Colombia",
    description:
      "Alternativas legales y estratégicas para disputas societarias.",
    category: "conflictos",
  },
  {
    slug: "conflictos-laborales-empresas",
    title: "Conflictos laborales en empresas: prevención y solución",
    description:
      "Cómo manejar conflictos laborales antes de llegar a demandas.",
    category: "conflictos",
  },
  {
    slug: "mecanismos-resolucion-conflictos",
    title: "Mecanismos alternativos de resolución de conflictos en Colombia",
    description: "Conciliación, arbitraje y mediación explicados fácilmente.",
    category: "conflictos",
  },
  {
    slug: "arbitraje-colombia",
    title: "Arbitraje en Colombia: qué es y cuándo conviene usarlo",
    description:
      "Cómo funciona el arbitraje como alternativa a los procesos judiciales.",
    category: "conflictos",
  },
  {
    slug: "conflictos-contractuales",
    title: "Conflictos contractuales en Colombia: causas y soluciones",
    description:
      "Problemas frecuentes en contratos y cómo resolverlos legalmente.",
    category: "conflictos",
  },
  {
    slug: "negociacion-empresarial",
    title: "Negociación empresarial efectiva para resolver conflictos",
    description:
      "Técnicas para negociar disputas comerciales de forma estratégica.",
    category: "conflictos",
  },
  {
    slug: "conflictos-clientes-empresas",
    title: "Cómo manejar conflictos con clientes en Colombia",
    description:
      "Estrategias legales y comerciales para resolver disputas con clientes.",
    category: "conflictos",
  },
  {
    slug: "conflictos-proveedores",
    title: "Qué hacer ante conflictos con proveedores en Colombia",
    description:
      "Acciones legales frente a incumplimientos y disputas comerciales.",
    category: "conflictos",
  },
  {
    slug: "resolucion-pacificaconflictos",
    title: "Resolución pacífica de conflictos en Colombia",
    description:
      "Métodos legales para solucionar conflictos sin llegar a juicio.",
    category: "conflictos",
  },
  {
    slug: "gestion-conflictos-organizacionales",
    title: "Gestión de conflictos organizacionales en empresas",
    description:
      "Cómo prevenir disputas internas que afectan la productividad.",
    category: "conflictos",
  },

  /* ================= CONCILIACIÓN ================= */
  {
    slug: "beneficios-conciliacion",
    title: "Beneficios de la conciliación extrajudicial en Colombia explicados",
    description:
      "Ventajas legales y económicas de resolver conflictos sin juicio.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-extrajudicial-colombia",
    title: "Conciliación extrajudicial en Colombia: cómo funciona paso a paso",
    description:
      "Cómo funciona la conciliación como mecanismo alternativo de solución de conflictos.",
    category: "conciliacion",
  },
  {
    slug: "tipos-conciliacion-colombia",
    title: "Tipos de conciliación en Colombia y cuándo aplicar cada uno",
    description:
      "Conoce los diferentes mecanismos de conciliación en Colombia.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-laboral-colombia",
    title: "Conciliación laboral en Colombia: guía práctica",
    description: "Cómo resolver conflictos laborales mediante conciliación.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-civil-colombia",
    title: "Conciliación civil en Colombia: casos más comunes",
    description:
      "Conflictos civiles que pueden resolverse sin proceso judicial.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-familiar-colombia",
    title: "Conciliación familiar en Colombia: alimentos, custodia y acuerdos",
    description: "Cómo funciona la conciliación en conflictos familiares.",
    category: "conciliacion",
  },
  {
    slug: "acta-conciliacion-colombia",
    title: "Acta de conciliación en Colombia: efectos legales y validez",
    description: "Qué valor jurídico tiene un acta de conciliación.",
    category: "conciliacion",
  },
  {
    slug: "ventajas-conciliacion-empresas",
    title: "Ventajas de la conciliación para empresas en Colombia",
    description:
      "Cómo la conciliación reduce costos y evita litigios empresariales.",
    category: "conciliacion",
  },
  {
    slug: "centros-conciliacion-colombia",
    title: "Centros de conciliación en Colombia: cómo funcionan",
    description:
      "Qué hacen los centros de conciliación y cuándo acudir a ellos.",
    category: "conciliacion",
  },
  {
    slug: "requisitos-conciliacion",
    title: "Requisitos para iniciar una conciliación en Colombia",
    description: "Documentos y pasos necesarios para solicitar conciliación.",
    category: "conciliacion",
  },
  {
    slug: "fracaso-conciliacion",
    title: "Qué pasa si una conciliación fracasa en Colombia",
    description:
      "Consecuencias legales cuando no se logra acuerdo conciliatorio.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-virtual-colombia",
    title: "Conciliación virtual en Colombia: cómo funciona",
    description: "Audiencias virtuales de conciliación y su validez legal.",
    category: "conciliacion",
  },

  /* ================= DERECHO EMPRESARIAL ================= */

  {
    slug: "litigios-empresariales-colombia",
    title:
      "Litigios empresariales en Colombia: cómo proteger tu empresa legalmente",
    description: "Cómo enfrentar procesos judiciales empresariales.",
    category: "derecho",
  },
  {
    slug: "proteccion-juridica-empresarial",
    title:
      "Protección jurídica empresarial en Colombia: guía para empresas 2026",
    description: "Estrategias legales para proteger tu empresa.",
    category: "derecho",
  },
  {
    slug: "derecho-empresarial-colombia",
    title:
      "Derecho empresarial en Colombia: guía completa para empresas y negocios",
    description:
      "Todo lo que debes saber sobre el marco jurídico de las empresas en Colombia.",
    category: "derecho",
  },
  {
    slug: "derecho-comercial-empresas-colombia",
    title: "Derecho comercial en Colombia para empresas: contratos y negocios",
    description:
      "Aspectos clave del derecho comercial aplicados a negocios y contratos.",
    category: "derecho",
  },
  {
    slug: "derecho-contractual-colombia",
    title: "Derecho contractual en Colombia: cómo hacer contratos seguros",
    description: "Cómo estructurar contratos sólidos y evitar riesgos legales.",
    category: "derecho",
  },
  {
    slug: "derecho-societario-colombia",
    title: "Derecho societario en Colombia: estructura legal de empresas",
    description:
      "Normas y estructura legal de sociedades comerciales en Colombia.",
    category: "derecho",
  },
  {
    slug: "derecho-administrativo-colombia",
    title: "Derecho administrativo en Colombia: relación empresa y Estado",
    description:
      "Relación entre empresas y el Estado en el marco del derecho administrativo.",
    category: "derecho",
  },
  {
    slug: "abogado-empresarial-colombia",
    title: "Qué hace un abogado empresarial en Colombia",
    description: "Funciones y beneficios de la asesoría jurídica empresarial.",
    category: "derecho",
  },
  {
    slug: "responsabilidad-civil-empresas",
    title: "Responsabilidad civil de las empresas en Colombia",
    description: "Cuándo una empresa puede enfrentar responsabilidad legal.",
    category: "derecho",
  },
  {
    slug: "demandas-comerciales-colombia",
    title: "Demandas comerciales en Colombia: cómo funcionan",
    description: "Procesos judiciales comerciales y defensa empresarial.",
    category: "derecho",
  },
  {
    slug: "propiedad-intelectual-empresas",
    title: "Propiedad intelectual para empresas en Colombia",
    description: "Cómo proteger marcas, software y activos intangibles.",
    category: "derecho",
  },
  {
    slug: "habeas-data-empresas",
    title: "Habeas Data en Colombia para empresas: obligaciones legales",
    description: "Protección de datos personales y cumplimiento empresarial.",
    category: "derecho",
  },

  /* ================= NORMATIVA ================= */
  {
    slug: "cumplimiento-normativo-colombia",
    title: "Cumplimiento normativo en Colombia (Compliance): guía empresarial",
    description:
      "Cómo asegurar que tu empresa cumpla con la regulación vigente.",
    category: "normativo",
  },
  {
    slug: "sarlaft-colombia",
    title: "SARLAFT en Colombia: qué es y cómo afecta a las empresas",
    description:
      "Guía completa sobre SARLAFT, prevención de lavado de activos y obligaciones empresariales.",
    category: "normativo",
  },
  {
    slug: "compliance-empresarial-colombia",
    title: "Compliance empresarial en Colombia: guía práctica para empresas",
    description:
      "Cómo implementar programas de cumplimiento normativo en empresas colombianas.",
    category: "normativo",
  },
  {
    slug: "proteccion-datos-empresas",
    title: "Protección de datos personales en Colombia para empresas",
    description:
      "Obligaciones legales de las empresas frente al tratamiento de datos personales.",
    category: "normativo",
  },
  {
    slug: "prevencion-lavado-activos",
    title: "Prevención de lavado de activos en empresas colombianas",
    description:
      "Medidas y controles para prevenir riesgos de lavado de activos y financiación del terrorismo.",
    category: "normativo",
  },
  {
    slug: "gobierno-corporativo-colombia",
    title: "Gobierno corporativo en Colombia: buenas prácticas empresariales",
    description:
      "Cómo implementar estructuras de gobierno corporativo en empresas colombianas.",
    category: "normativo",
  },
  {
    slug: "riesgo-legal-empresas",
    title: "Gestión del riesgo legal en empresas colombianas",
    description:
      "Cómo identificar y reducir riesgos jurídicos dentro de las organizaciones.",
    category: "normativo",
  },
  {
    slug: "auditoria-legal-empresas",
    title: "Auditoría legal empresarial en Colombia: qué es y para qué sirve",
    description:
      "Importancia de realizar auditorías legales preventivas en las empresas.",
    category: "normativo",
  },
  {
    slug: "manual-cumplimiento-empresarial",
    title: "Manual de cumplimiento empresarial: cómo elaborarlo correctamente",
    description:
      "Aspectos esenciales para crear políticas internas de cumplimiento normativo.",
    category: "normativo",
  },
  {
    slug: "debida-diligencia-empresarial",
    title: "Debida diligencia empresarial en Colombia: guía completa",
    description:
      "Cómo realizar procesos de due diligence para prevenir riesgos legales y financieros.",
    category: "normativo",
  },
  {
    slug: "regulacion-empresarial-colombia-2026",
    title: "Regulación empresarial en Colombia 2026: cambios y obligaciones",
    description:
      "Principales normas y obligaciones que impactan a las empresas colombianas en 2026.",
    category: "normativo",
  },

  /* ================= ESTRATEGIA CORPORATIVA ================= */

  {
    slug: "asesoria-corporativa-empresas",
    title: "Asesoría corporativa para empresas en Colombia: estrategia legal",
    description:
      "Servicios legales estratégicos para el crecimiento empresarial.",
    category: "empresarial",
  },
  {
    slug: "errores-legales-empresas-colombia",
    title:
      "7 errores legales que pueden costarle millones a tu empresa en Colombia",
    description:
      "Conoce los errores jurídicos más comunes que afectan empresas y cómo evitarlos.",
    category: "empresarial",
  },
  {
    slug: "cliente-no-quiere-pagar",
    title: "Cómo cobrar clientes que no quieren pagar en Colombia",
    description:
      "Estrategias legales y comerciales para recuperar pagos pendientes.",
    category: "empresarial",
  },
  {
    slug: "empresa-no-paga-factura",
    title: "Qué hacer si una empresa no quiere pagar una factura en Colombia",
    description:
      "Opciones legales y estrategias para recuperar dinero de clientes morosos.",
    category: "empresarial",
  },
  {
    slug: "como-proteger-empresa-legalmente",
    title: "Cómo proteger legalmente tu empresa en Colombia y evitar demandas",
    description:
      "Estrategias legales para reducir riesgos empresariales y proteger tu negocio.",
    category: "empresarial",
  },
  {
    slug: "riesgos-legales-empresas",
    title: "Principales riesgos legales que enfrentan las empresas en Colombia",
    description:
      "Problemas legales frecuentes que pueden afectar el crecimiento empresarial.",
    category: "empresarial",
  },
  {
    slug: "proveedor-incumple-contrato",
    title: "Qué hacer si un proveedor incumple un contrato en Colombia",
    description:
      "Acciones legales y comerciales frente a incumplimientos contractuales.",
    category: "empresarial",
  },
  {
    slug: "empresa-demandada-colombia",
    title: "Qué hacer si demandan a tu empresa en Colombia",
    description:
      "Guía legal para empresas que enfrentan procesos judiciales en Colombia.",
    category: "empresarial",
  },
  {
    slug: "evitar-demandas-empresas",
    title: "Cómo evitar demandas legales en empresas colombianas",
    description:
      "Medidas preventivas para reducir riesgos jurídicos empresariales.",
    category: "empresarial",
  },
  {
    slug: "contratos-empresariales-colombia",
    title:
      "Contratos empresariales en Colombia: errores que pueden generar demandas",
    description:
      "Cómo redactar contratos seguros y evitar conflictos comerciales.",
    category: "empresarial",
  },
  {
    slug: "iguala-juridica-empresas",
    title: "Iguala jurídica para empresas en Colombia: qué es y cómo funciona",
    description:
      "Cómo funciona el servicio de asesoría jurídica mensual para empresas.",
    category: "empresarial",
  },
  {
    slug: "asesoria-legal-pymes-colombia",
    title: "Asesoría legal para pymes en Colombia: por qué es importante",
    description:
      "Cómo una asesoría jurídica puede proteger y hacer crecer una pyme.",
    category: "empresarial",
  },
];

/* ================= SCHEMA ================= */

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog jurídico en Colombia",
  description:
    "Artículos sobre recuperación de cartera, conciliación y derecho empresarial en Colombia.",
  url: "https://pravice.co/blog",
  inLanguage: "es-CO",
  publisher: {
    "@type": "Organization",
    name: "Pravice",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://pravice.co/blog/${article.slug}`,
    name: article.title,
  })),
};

/* ================= CARD ================= */

function Card({ article, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${article.slug}`} className={styles.card}>
        <motion.div whileHover={{ scale: 1.04 }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span>Leer artículo →</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ================= COMPONENTE ================= */

export default function BlogSEO() {
  const groupedArticles = articles.reduce((acc: any, article) => {
    if (!acc[article.category]) acc[article.category] = [];
    acc[article.category].push(article);
    return acc;
  }, {});

  return (
    <section className={styles.section}>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Blog jurídico en Colombia: guías legales actualizadas 2026
        </h1>
        <p className={styles.description}>
          Aprende sobre recuperación de cartera, conciliación extrajudicial y
          derecho empresarial en Colombia.
        </p>
      </div>

      {/* GRID */}
      <div>
        {Object.entries(groupedArticles).map(([category, items]: any) => (
          <div key={category}>
            <h2 className={styles.categoryTitle}>
              Guías de {category.toUpperCase()} en Colombia
            </h2>

            <div className={styles.grid}>
              {items.map((article: any, i: number) => (
                <Card key={article.slug} article={article} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
