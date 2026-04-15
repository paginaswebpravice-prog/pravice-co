"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

/* ================= ARTÍCULOS ================= */

const articles = [
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
    slug: "inteligencia-artificial-cobranzas",
    title: "Cómo la inteligencia artificial está revolucionando las cobranzas",
    description: "La IA está transformando la gestión de cartera en Colombia.",
    category: "cartera",
  },
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
      <div className={styles.grid}>
        {articles.map((article, i) => (
          <Card key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
