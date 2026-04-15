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
    headline: "Derecho contractual en Colombia: cómo hacer contratos seguros",
    description:
      "Guía completa sobre derecho contractual en Colombia, contratos empresariales, elementos legales y cómo evitar errores jurídicos.",
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
      "@id": "https://pravice.co/blog/derecho-contractual-colombia",
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
            Derecho contractual en Colombia: cómo hacer contratos seguros
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            El derecho contractual en Colombia es clave para garantizar acuerdos
            claros, seguros y legalmente válidos entre empresas y personas. Un
            contrato bien estructurado permite prevenir conflictos, proteger tu
            negocio y asegurar el cumplimiento de las obligaciones.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué es el derecho contractual?</li>
            <li>Elementos esenciales de un contrato</li>
            <li>Errores comunes al contratar</li>
            <li>Cómo hacer contratos seguros en Colombia</li>
            <li>Conclusión</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el derecho contractual?</h2>

          <p>
            El derecho contractual es la rama del derecho que regula los
            acuerdos entre personas o empresas, estableciendo derechos y
            obligaciones para cada parte involucrada.
          </p>

          <p>
            En Colombia, los contratos son fundamentales para formalizar
            relaciones comerciales, garantizar seguridad jurídica y evitar
            conflictos legales en las operaciones empresariales.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Elementos esenciales de un contrato en Colombia</h2>

          <div className={styles.card}>
            <h3>Consentimiento</h3>
            <p>
              Las partes deben manifestar su voluntad libremente, sin errores,
              engaños o presiones indebidas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Objeto</h3>
            <p>
              El contrato debe tener un objeto claro, lícito y posible de
              cumplir dentro del marco legal colombiano.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Causa</h3>
            <p>
              Debe existir una razón válida que justifique el acuerdo entre las
              partes.
            </p>
          </div>

          <p>
            Si alguno de estos elementos no se cumple, el contrato puede ser
            inválido o generar riesgos legales importantes.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Errores comunes al redactar contratos</h2>

          <p>
            Uno de los errores más frecuentes en Colombia es utilizar contratos
            genéricos que no se adaptan a las necesidades específicas del
            negocio.
          </p>

          <p>
            También es común omitir cláusulas clave como penalidades,
            terminación anticipada, confidencialidad o mecanismos de resolución
            de conflictos.
          </p>

          <p>
            Estos errores pueden generar disputas legales, pérdidas económicas y
            riesgos para la empresa.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo hacer contratos seguros en Colombia</h2>

          <div className={styles.card}>
            <h3>Redacción clara</h3>
            <p>
              Utilizar un lenguaje preciso y sin ambigüedades evita
              interpretaciones erróneas y conflictos futuros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cláusulas de protección</h3>
            <p>
              Incluir penalidades, garantías y mecanismos de solución de
              conflictos protege los intereses de las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría legal especializada</h3>
            <p>
              Contar con abogados expertos en derecho contractual en Colombia
              garantiza contratos sólidos y ajustados a la ley.
            </p>
          </div>

          <p>
            Un contrato bien estructurado es una herramienta estratégica para
            reducir riesgos y fortalecer relaciones comerciales.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            El derecho contractual en Colombia es fundamental para la seguridad
            jurídica de cualquier empresa.
          </p>

          <p>
            Elaborar contratos adecuados permite prevenir conflictos, proteger
            intereses y asegurar relaciones comerciales exitosas.
          </p>

          <p>
            Invertir en una correcta estructuración contractual es una decisión
            estratégica para el crecimiento empresarial.
          </p>
        </section>
      </main>
    </>
  );
}
