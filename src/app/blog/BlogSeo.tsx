"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

/* ================= ARTÍCULOS ================= */

const articles = [
  /* ================= CARTERA ================= */

  {
    slug: "como-recuperar-cartera-morosa",
    title: "Cómo recuperar cartera morosa de manera efectiva en 2026",
    description:
      "Aprende estrategias legales y financieras para recuperar cartera en Colombia.",
    category: "cartera",
  },
  {
    slug: "recuperacion-cartera-empresas",
    title: "Métodos efectivos de recuperación de cartera empresarial",
    description:
      "Estrategias utilizadas por empresas en Colombia para mejorar su recaudo.",
    category: "cartera",
  },
  {
    slug: "errores-gestion-cartera",
    title: "Errores comunes en la gestión de cartera y cómo evitarlos",
    description:
      "Evita fallos frecuentes que afectan el recaudo y la liquidez empresarial.",
    category: "cartera",
  },
  {
    slug: "gestion-cartera-sector-salud",
    title: "Gestión de cartera en el sector salud en Colombia",
    description:
      "Estrategias especializadas para mejorar el recaudo en entidades de salud.",
    category: "cartera",
  },
  {
    slug: "automatizacion-cobranzas",
    title: "Automatización de cobranzas en empresas modernas",
    description:
      "Cómo la tecnología está optimizando los procesos de recaudo y cobranza.",
    category: "cartera",
  },
  {
    slug: "futuro-cobranzas",
    title: "El futuro de las cobranzas en Colombia",
    description:
      "Tendencias tecnológicas y legales que transformarán la gestión de cartera.",
    category: "cartera",
  },
  {
    slug: "inteligencia-artificial-cobranzas",
    title: "Cómo la inteligencia artificial está revolucionando las cobranzas",
    description: "La IA está transformando la gestión de cartera en Colombia.",
    category: "cartera",
  },

  /* ================= CONCILIACIÓN / CONFLICTOS ================= */

  {
    slug: "mediacion-empresarial",
    title: "Mediación empresarial: solución rápida para conflictos",
    description:
      "Alternativa eficaz para resolver conflictos empresariales en Colombia.",
    category: "conflictos",
  },
  {
    slug: "resolucion-conflictos-empresariales",
    title: "Resolución de conflictos empresariales en Colombia",
    description: "Mecanismos legales para resolver disputas empresariales.",
    category: "conflictos",
  },
  {
    slug: "beneficios-conciliacion",
    title: "Beneficios de la conciliación extrajudicial en Colombia",
    description:
      "Ventajas legales y económicas de resolver conflictos sin juicio.",
    category: "conciliacion",
  },
  {
    slug: "conciliacion-extrajudicial-colombia",
    title: "Conciliación extrajudicial en Colombia: guía completa",
    description:
      "Cómo funciona la conciliación como mecanismo alternativo de solución de conflictos.",
    category: "conciliacion",
  },

  /* ================= DERECHO EMPRESARIAL ================= */

  {
    slug: "litigios-empresariales-colombia",
    title: "Litigios empresariales en Colombia",
    description: "Cómo enfrentar procesos judiciales empresariales.",
    category: "derecho",
  },
  {
    slug: "proteccion-juridica-empresarial",
    title: "Protección jurídica empresarial en Colombia",
    description: "Estrategias legales para proteger tu empresa.",
    category: "derecho",
  },
  {
    slug: "derecho-empresarial-colombia",
    title: "Derecho empresarial en Colombia: guía completa",
    description:
      "Todo lo que debes saber sobre el marco jurídico de las empresas en Colombia.",
    category: "derecho",
  },
  {
    slug: "derecho-comercial-empresas-colombia",
    title: "Derecho comercial en Colombia para empresas",
    description:
      "Aspectos clave del derecho comercial aplicados a negocios y contratos.",
    category: "derecho",
  },
  {
    slug: "derecho-contractual-colombia",
    title: "Derecho contractual en Colombia",
    description: "Cómo estructurar contratos sólidos y evitar riesgos legales.",
    category: "derecho",
  },
  {
    slug: "derecho-societario-colombia",
    title: "Derecho societario en Colombia",
    description:
      "Normas y estructura legal de sociedades comerciales en Colombia.",
    category: "derecho",
  },
  {
    slug: "derecho-administrativo-colombia",
    title: "Derecho administrativo en Colombia",
    description:
      "Relación entre empresas y el Estado en el marco del derecho administrativo.",
    category: "derecho",
  },
  {
    slug: "cumplimiento-normativo-colombia",
    title: "Cumplimiento normativo en Colombia (Compliance)",
    description:
      "Cómo asegurar que tu empresa cumpla con la regulación vigente.",
    category: "normativo",
  },

  /* ================= ESTRATEGIA CORPORATIVA ================= */

  {
    slug: "asesoria-corporativa-empresas",
    title: "Asesoría corporativa para empresas en Colombia",
    description:
      "Servicios legales estratégicos para el crecimiento empresarial.",
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
        <h1 className={styles.title}>Blog jurídico en Colombia</h1>
        <p className={styles.description}>
          Aprende sobre recuperación de cartera, conciliación extrajudicial y
          derecho empresarial en Colombia.
        </p>
      </div>

      {/* GRID */}
      <div>
        {Object.entries(groupedArticles).map(([category, items]: any) => (
          <div key={category}>
            <h2 className={styles.categoryTitle}>{category.toUpperCase()}</h2>

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
