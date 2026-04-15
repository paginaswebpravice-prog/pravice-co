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

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Derecho comercial en Colombia: guía para empresas y contratos",
    description:
      "Guía completa sobre derecho comercial en Colombia, contratos empresariales, normativa vigente y cómo proteger tu empresa legalmente.",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/derecho-comercial-empresas-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
            Derecho comercial en Colombia: guía para empresas y contratos
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            El derecho comercial en Colombia regula las actividades
            empresariales, los contratos y las relaciones entre comerciantes.
            Comprender estas normas permite proteger tu empresa, evitar
            conflictos legales y tomar decisiones estratégicas con seguridad
            jurídica.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué es el derecho comercial?</li>
            <li>Normativa en Colombia</li>
            <li>Tipos de contratos comerciales</li>
            <li>Importancia para las empresas</li>
            <li>Conclusión</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el derecho comercial?</h2>

          <p>
            El derecho comercial es la rama del derecho que regula las
            actividades económicas de las empresas, incluyendo actos de
            comercio, contratos, obligaciones mercantiles y relaciones entre
            comerciantes.
          </p>

          <p>
            En Colombia, esta área jurídica es fundamental para garantizar que
            las empresas operen dentro del marco legal y desarrollen sus
            actividades de forma segura y eficiente.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Normativa del derecho comercial en Colombia</h2>

          <p>
            El principal marco normativo es el Código de Comercio, que regula la
            constitución de empresas, los contratos comerciales y las
            actividades económicas en el país.
          </p>

          <p>
            También existen normas complementarias relacionadas con competencia,
            propiedad intelectual, derecho societario y protección al
            consumidor.
          </p>

          <p>
            Cumplir con la normativa comercial en Colombia es clave para evitar
            sanciones legales y garantizar la estabilidad del negocio.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Tipos de contratos comerciales en Colombia</h2>

          <div className={styles.card}>
            <h3>Contrato de compraventa</h3>
            <p>
              Regula la compra y venta de bienes o servicios entre empresas,
              estableciendo derechos y obligaciones para ambas partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contrato de suministro</h3>
            <p>
              Permite la entrega periódica de productos o servicios, siendo
              clave en relaciones comerciales continuas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contrato de sociedad</h3>
            <p>
              Define la relación entre socios, aportes de capital y distribución
              de utilidades dentro de una empresa.
            </p>
          </div>

          <p>
            Una correcta redacción de contratos comerciales es fundamental para
            prevenir conflictos y proteger los intereses empresariales.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Importancia del derecho comercial para las empresas</h2>

          <p>
            Aplicar correctamente el derecho comercial permite operar con
            seguridad jurídica, reducir riesgos legales y fortalecer las
            relaciones comerciales.
          </p>

          <p>
            También facilita la negociación de contratos, la prevención de
            conflictos y el crecimiento sostenible del negocio en Colombia.
          </p>

          <p>
            Contar con asesoría legal especializada en derecho comercial es una
            decisión estratégica que protege el futuro de la empresa.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            El derecho comercial en Colombia es una herramienta esencial para
            cualquier empresa que quiera operar de forma segura y eficiente.
          </p>

          <p>
            Comprender la normativa, utilizar contratos adecuados y contar con
            asesoría legal permite proteger el negocio y aprovechar
            oportunidades de crecimiento.
          </p>
        </section>
      </main>
    </>
  );
}
