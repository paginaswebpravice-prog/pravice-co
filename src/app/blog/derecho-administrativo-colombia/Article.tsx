"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

/* =========================
   ANIMACIONES
========================= */

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function DerechoAdministrativoColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Derecho administrativo en Colombia: cómo actuar ante entidades públicas",
    description:
      "Guía completa sobre derecho administrativo en Colombia, procesos con entidades públicas y cómo evitar sanciones legales.",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/derecho-administrativo-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Derecho administrativo en Colombia: cómo actuar ante entidades
            públicas
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            El derecho administrativo en Colombia regula la relación entre
            empresas y entidades públicas. Conocer estos procesos permite evitar
            sanciones, responder correctamente a requerimientos oficiales y
            proteger tu negocio.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué es el derecho administrativo?</li>
            <li>Relación con entidades públicas en Colombia</li>
            <li>Procesos administrativos más comunes</li>
            <li>Cómo actuar correctamente ante el Estado</li>
            <li>Conclusión</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Qué es el derecho administrativo?</h2>

          <p>
            El derecho administrativo regula la organización del Estado y la
            relación entre entidades públicas y empresas en Colombia.
          </p>

          <p>
            Define cómo deben actuar las autoridades, los procedimientos
            administrativos y los derechos y obligaciones de las empresas.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Relación entre empresas y entidades públicas en Colombia</h2>

          <p>
            Las empresas interactúan con entidades públicas mediante trámites,
            licencias, inspecciones y procesos administrativos.
          </p>

          <p>
            Una mala gestión puede generar sanciones, multas o restricciones
            legales que afectan la operación del negocio.
          </p>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Principales procesos administrativos</h2>

          <div className={styles.card}>
            <h3>Licencias y permisos</h3>
            <p>
              Son obligatorios para operar en ciertos sectores y su ausencia
              puede generar sanciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos sancionatorios</h3>
            <p>
              Se presentan cuando hay incumplimientos legales y pueden implicar
              multas o cierres.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratación estatal</h3>
            <p>
              Permite a empresas trabajar con el Estado bajo normas específicas.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Cómo actuar ante una entidad pública</h2>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>Cumplir con la ley reduce riesgos legales y evita sanciones.</p>
          </div>

          <div className={styles.card}>
            <h3>Respuesta oportuna</h3>
            <p>Atender requerimientos dentro de los plazos es fundamental.</p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría legal</h3>
            <p>
              Contar con expertos permite enfrentar procesos de forma
              estratégica.
            </p>
          </div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>Conclusión</h2>

          <p>
            El derecho administrativo en Colombia es clave para la relación
            entre empresas y el Estado.
          </p>

          <p>
            Comprender los procesos y actuar correctamente permite evitar
            sanciones y proteger la estabilidad del negocio.
          </p>
        </motion.section>
      </main>
    </>
  );
}
