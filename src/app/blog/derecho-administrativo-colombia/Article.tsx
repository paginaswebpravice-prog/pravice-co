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
      "Derecho administrativo en Colombia: cómo actuar ante entidades públicas y evitar sanciones legales",
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
            públicas y evitar sanciones legales
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
            sanciones y responder correctamente ante el Estado.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Guía práctica de derecho administrativo en Colombia</h3>
          <ul>
            <li>Qué es el derecho administrativo</li>
            <li>Relación entre empresas y entidades públicas</li>
            <li>Procesos administrativos más comunes</li>
            <li>Cómo actuar ante el Estado en Colombia</li>
            <li>Conclusión y recomendaciones legales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es el derecho administrativo en Colombia y cómo funciona el
            Estado?
          </h2>

          <p>
            El derecho administrativo regula la organización del Estado y la
            relación entre entidades públicas y empresas en Colombia.
          </p>

          <p>
            Define los procedimientos administrativos y las obligaciones legales
            de las empresas frente a la administración pública.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Relación entre empresas y entidades públicas en Colombia: lo que
            debes saber
          </h2>

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
          <h2>
            Principales procesos administrativos en Colombia que debes conocer
          </h2>

          <div className={styles.card}>
            <h3>Licencias y permisos obligatorios</h3>
            <p>
              Son necesarios para operar legalmente en ciertos sectores en
              Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos sancionatorios del Estado</h3>
            <p>Pueden generar multas, sanciones o cierres de actividades.</p>
          </div>

          <div className={styles.card}>
            <h3>Contratación estatal en Colombia</h3>
            <p>
              Permite a las empresas trabajar con entidades públicas bajo normas
              específicas.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Cómo actuar correctamente ante entidades públicas en Colombia</h2>

          <div className={styles.card}>
            <h3>Cumplimiento normativo obligatorio</h3>
            <p>Cumplir con la ley reduce riesgos legales y evita sanciones.</p>
          </div>

          <div className={styles.card}>
            <h3>Respuesta oportuna a requerimientos</h3>
            <p>Responder dentro de los plazos legales es clave.</p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría legal especializada</h3>
            <p>
              Contar con abogados expertos permite enfrentar procesos de forma
              estratégica.
            </p>
          </div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>Conclusión: cómo evitar problemas con el Estado en Colombia</h2>

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
