"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

/* =========================
   ANIMACIONES
========================= */
const fadeSection = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export default function Article() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Derecho societario en Colombia: cómo crear y gestionar empresas",
      description:
        "Guía completa sobre derecho societario en Colombia, tipos de sociedades, creación de empresas y obligaciones legales en Bogotá y todo el país.",
      image: "https://pravice.co/og-image.jpg",
      author: {
        "@type": "Organization",
        name: "Pravice Abogados",
      },
      publisher: {
        "@type": "Organization",
        name: "Pravice Abogados",
        logo: {
          "@type": "ImageObject",
          url: "https://pravice.co/logo_pravice.png",
        },
      },
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://pravice.co/blog/derecho-societario-colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es el derecho societario en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es la rama del derecho que regula la creación, organización y funcionamiento de las sociedades comerciales en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es la sociedad más usada en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La SAS es la más utilizada en Colombia por su flexibilidad y facilidad de creación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo crear una empresa en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debes definir el tipo de sociedad, registrar la empresa en Cámara de Comercio, obtener el RUT y cumplir obligaciones legales.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <main
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* HERO */}
        <motion.section className={styles.hero} {...fadeSection}>
          <h1 className={styles.title} itemProp="headline">
            Derecho societario en Colombia: cómo crear y gestionar empresas
            legalmente
          </h1>

          <p className={styles.description} itemProp="description">
            El derecho societario en Colombia regula la creación, organización y
            funcionamiento de las empresas. Conocer estas normas es clave para
            estructurar correctamente tu negocio en Bogotá y en todo el país,
            evitando riesgos legales y asegurando su crecimiento.
          </p>
        </motion.section>

        {/* TOC */}
        <motion.section className={styles.contentBox} {...fadeSection}>
          <h2>Contenido</h2>
          <ul>
            <li>¿Qué es el derecho societario?</li>
            <li>Tipos de sociedades en Colombia</li>
            <li>Cómo crear una empresa</li>
            <li>Obligaciones legales</li>
            <li>Conclusión</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Qué es el derecho societario en Colombia?</h2>

          <p>
            El derecho societario regula la creación, estructura y
            funcionamiento de las sociedades comerciales en Colombia.
          </p>

          <p>
            Define aspectos como la responsabilidad de los socios, la toma de
            decisiones y la distribución de utilidades dentro de una empresa.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Tipos de sociedades en Colombia</h2>

          {[
            {
              title: "Sociedad por Acciones Simplificada (SAS)",
              text: "La más utilizada en Colombia por su flexibilidad y facilidad de creación.",
            },
            {
              title: "Sociedad Limitada (LTDA)",
              text: "Limita la responsabilidad de los socios al capital aportado.",
            },
            {
              title: "Sociedad Anónima (S.A.)",
              text: "Ideal para grandes empresas con múltiples accionistas.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Cómo crear una empresa en Colombia</h2>

          <ul>
            <li>Definir el tipo de sociedad</li>
            <li>Redactar estatutos</li>
            <li>Registro en Cámara de Comercio</li>
            <li>Obtener RUT en la DIAN</li>
            <li>Cumplir obligaciones tributarias</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Obligaciones legales de las empresas</h2>

          {[
            {
              title: "Cumplimiento normativo",
              text: "Cumplir con normas tributarias, laborales y comerciales en Colombia.",
            },
            {
              title: "Gobierno corporativo",
              text: "Definir roles y responsabilidades dentro de la empresa.",
            },
            {
              title: "Relación entre socios",
              text: "Establecer acuerdos claros para evitar conflictos.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>Conclusión</h2>

          <p>
            El derecho societario en Colombia es esencial para crear y gestionar
            empresas de forma legal, segura y eficiente.
          </p>

          <p>
            Implementar una estructura adecuada desde el inicio permite evitar
            conflictos y garantizar el crecimiento empresarial en Bogotá y todo
            el país.
          </p>
        </motion.section>
      </main>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
