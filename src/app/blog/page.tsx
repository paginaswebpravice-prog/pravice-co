"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Blog.module.css";

const articles = [
  {
    slug: "como-recuperar-cartera-morosa",
    title: "Cómo recuperar cartera morosa de manera efectiva en 2026",
    description:
      "Aprende las estrategias legales y financieras más efectivas para recuperar cartera vencida sin afectar la relación con tus clientes.",
  },
  {
    slug: "conciliacion-extrajudicial-colombia",
    title: "Conciliación extrajudicial en Colombia: guía completa",
    description:
      "Todo lo que debes saber sobre la conciliación extrajudicial, cuándo aplicarla y cómo puede evitar procesos judiciales costosos.",
  },
  {
    slug: "gestion-cartera-sector-salud",
    title: "Gestión de cartera en IPS y EPS: estrategias efectivas",
    description:
      "Descubre cómo mejorar la recuperación de cartera en el sector salud con procesos organizados y herramientas legales.",
  },
  {
    slug: "automatizacion-cobranzas",
    title: "Automatización de cobranzas: cómo mejorar tu recaudo",
    description:
      "La automatización de procesos de cobro puede aumentar la recuperación de cartera y reducir costos operativos.",
  },
  {
    slug: "errores-gestion-cartera",
    title: "7 errores comunes en la gestión de cartera",
    description:
      "Evita los errores más comunes que cometen las empresas al momento de gestionar sus cuentas por cobrar.",
  },
  {
    slug: "beneficios-conciliacion",
    title: "Beneficios de la conciliación para empresas",
    description:
      "La conciliación puede ahorrar tiempo y dinero en conflictos comerciales. Conoce sus principales ventajas.",
  },
  {
    slug: "recuperacion-cartera-empresas",
    title: "Métodos efectivos de recuperación de cartera empresarial",
    description:
      "Conoce las mejores estrategias de cobranza utilizadas por empresas exitosas.",
  },
  {
    slug: "inteligencia-artificial-cobranzas",
    title: "Cómo la inteligencia artificial está revolucionando las cobranzas",
    description:
      "La IA está transformando la gestión de cartera con predicción de pagos y automatización.",
  },
  {
    slug: "mediacion-empresarial",
    title: "Mediación empresarial: solución rápida para conflictos",
    description:
      "La mediación es una alternativa eficaz para resolver conflictos comerciales sin acudir a procesos judiciales.",
  },
  {
    slug: "futuro-cobranzas",
    title: "El futuro de las cobranzas en Latinoamérica",
    description:
      "Analizamos las tendencias que marcarán la recuperación de cartera en los próximos años.",
  },
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Jurídico de Pravice Abogados",
    url: "https://pravice.co/blog",
    description:
      "Artículos jurídicos sobre conciliación, recuperación de cartera y derecho empresarial en Colombia.",
    publisher: {
      "@type": "Organization",
      name: "Pravice Abogados",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },
    blogPost: articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://pravice.co/blog/${article.slug}`,
      description: article.description,
      author: {
        "@type": "Organization",
        name: "Pravice Abogados",
      },
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className={styles.section}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className={styles.title}>Blog Jurídico</h1>

          <p className={styles.description}>
            Encuentra guías, estrategias legales y tendencias sobre
            conciliación, gestión de cartera y recuperación de pagos para
            empresas en Colombia y Latinoamérica.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${article.slug}`} className={styles.card}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>

                  <span className={styles.link}>Leer artículo →</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
