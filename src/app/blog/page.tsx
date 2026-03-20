"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

/* ================= ARTÍCULOS ================= */

const articles = [
  // 🟢 CARTERA
  {
    slug: "como-recuperar-cartera-morosa",
    title: "Cómo recuperar cartera morosa de manera efectiva en 2026",
    description:
      "Aprende las estrategias legales y financieras más efectivas para recuperar cartera vencida sin afectar la relación con tus clientes.",
    category: "cartera",
  },
  {
    slug: "gestion-cartera-sector-salud",
    title: "Gestión de cartera en IPS y EPS: estrategias efectivas",
    description:
      "Descubre cómo mejorar la recuperación de cartera en el sector salud.",
    category: "cartera",
  },
  {
    slug: "automatizacion-cobranzas",
    title: "Automatización de cobranzas: cómo mejorar tu recaudo",
    description: "La automatización puede aumentar la recuperación de cartera.",
    category: "cartera",
  },
  {
    slug: "errores-gestion-cartera",
    title: "7 errores comunes en la gestión de cartera",
    description: "Evita errores frecuentes en cuentas por cobrar.",
    category: "cartera",
  },
  {
    slug: "recuperacion-cartera-empresas",
    title: "Métodos efectivos de recuperación de cartera empresarial",
    description: "Conoce estrategias usadas por empresas exitosas.",
    category: "cartera",
  },
  {
    slug: "inteligencia-artificial-cobranzas",
    title: "Cómo la inteligencia artificial está revolucionando las cobranzas",
    description: "La IA está transformando la gestión de cartera.",
    category: "cartera",
  },
  {
    slug: "futuro-cobranzas",
    title: "El futuro de las cobranzas en Latinoamérica",
    description: "Tendencias clave en recuperación de cartera.",
    category: "cartera",
  },

  // 🟡 CONFLICTOS
  {
    slug: "conciliacion-extrajudicial-colombia",
    title: "Conciliación extrajudicial en Colombia: guía completa",
    description: "Todo sobre conciliación y cómo evitar procesos judiciales.",
    category: "conflictos",
  },
  {
    slug: "beneficios-conciliacion",
    title: "Beneficios de la conciliación para empresas",
    description: "Ventajas de resolver conflictos sin juicio.",
    category: "conflictos",
  },
  {
    slug: "mediacion-empresarial",
    title: "Mediación empresarial: solución rápida para conflictos",
    description: "Alternativa eficaz para resolver disputas.",
    category: "conflictos",
  },
  {
    slug: "resolucion-conflictos-empresariales",
    title: "Resolución de conflictos empresariales en Colombia",
    description: "Mecanismos legales para resolver conflictos.",
    category: "conflictos",
  },

  // 🔵 DERECHO
  {
    slug: "derecho-empresarial-colombia",
    title: "Derecho empresarial en Colombia: claves para proteger tu negocio",
    description: "Guía completa para estructurar tu empresa legalmente.",
    category: "derecho",
  },
  {
    slug: "derecho-comercial-empresas-colombia",
    title: "Derecho comercial en Colombia: guía para empresas",
    description: "Cómo proteger tu empresa en contratos.",
    category: "derecho",
  },
  {
    slug: "derecho-contractual-colombia",
    title: "Derecho contractual en Colombia: cómo hacer contratos seguros",
    description: "Aprende a redactar contratos seguros.",
    category: "derecho",
  },
  {
    slug: "derecho-societario-colombia",
    title: "Derecho societario en Colombia: creación y gestión de empresas",
    description: "Todo sobre constitución de sociedades.",
    category: "derecho",
  },
  {
    slug: "derecho-administrativo-colombia",
    title: "Derecho administrativo en Colombia",
    description: "Cómo actuar ante entidades públicas.",
    category: "derecho",
  },
  {
    slug: "litigios-empresariales-colombia",
    title: "Litigios empresariales en Colombia",
    description: "Cómo enfrentar procesos judiciales.",
    category: "derecho",
  },
  {
    slug: "cumplimiento-normativo-colombia",
    title: "Cumplimiento normativo en Colombia",
    description: "Evita sanciones legales.",
    category: "derecho",
  },
  {
    slug: "proteccion-juridica-empresarial",
    title: "Protección jurídica empresarial en Colombia",
    description: "Estrategias legales clave.",
    category: "derecho",
  },
  {
    slug: "asesoria-corporativa-empresas",
    title: "Asesoría corporativa en Colombia",
    description: "Decisiones legales estratégicas.",
    category: "derecho",
  },
];

/* ================= AGRUPACIÓN ================= */

const grouped = {
  cartera: articles.filter((a) => a.category === "cartera"),
  conflictos: articles.filter((a) => a.category === "conflictos"),
  derecho: articles.filter((a) => a.category === "derecho"),
};

/* ================= CARD ================= */

function Card({ article, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${article.slug}`} className={styles.card}>
        <motion.div
          whileHover={{ scale: 1.04, y: -6 }}
          whileTap={{ scale: 0.97 }}
        >
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span className={styles.link}>Leer artículo →</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

/* ================= COMPONENTE ================= */

export default function BlogPage() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Blog Jurídico</h1>
        <p className={styles.description}>
          Guías legales sobre recuperación de cartera, conciliación y derecho
          empresarial en Colombia.
        </p>
      </div>

      {/* 🟢 CARTERA */}
      <h2 className={styles.categoryTitle}>
        Recuperación de cartera y cobranzas
      </h2>
      <div className={styles.grid}>
        {grouped.cartera.map((article, i) => (
          <Card key={article.slug} article={article} index={i} />
        ))}
      </div>

      {/* 🟡 CONFLICTOS */}
      <h2 className={styles.categoryTitle}>
        Resolución de conflictos empresariales
      </h2>
      <div className={styles.grid}>
        {grouped.conflictos.map((article, i) => (
          <Card key={article.slug} article={article} index={i} />
        ))}
      </div>

      {/* 🔵 DERECHO */}
      <h2 className={styles.categoryTitle}>Derecho empresarial en Colombia</h2>
      <div className={styles.grid}>
        {grouped.derecho.map((article, i) => (
          <Card key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
