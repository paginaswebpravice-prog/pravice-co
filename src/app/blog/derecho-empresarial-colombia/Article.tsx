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
    headline:
      "Derecho empresarial en Colombia: claves para proteger tu negocio",
    description:
      "Guía completa sobre derecho empresarial en Colombia, aspectos legales clave y cómo proteger tu empresa.",
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
      "@id": "https://pravice.co/blog/derecho-empresarial-colombia",
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
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Derecho empresarial en Colombia: claves para proteger tu negocio
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            El derecho empresarial en Colombia es fundamental para la creación,
            operación y crecimiento de cualquier negocio. Conocer sus principios
            permite estructurar correctamente tu empresa, cumplir con la ley y
            protegerla frente a riesgos legales.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué es el derecho empresarial?</li>
            <li>Importancia para las empresas</li>
            <li>Aspectos legales clave</li>
            <li>Cómo proteger tu negocio</li>
            <li>Conclusión</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el derecho empresarial?</h2>

          <p>
            El derecho empresarial es el conjunto de normas que regulan la
            actividad de las empresas, incluyendo su constitución,
            funcionamiento, relaciones comerciales y cumplimiento de
            obligaciones legales.
          </p>

          <p>
            En Colombia, este marco jurídico abarca áreas como el derecho
            comercial, contractual, laboral y tributario, siendo esencial para
            la estabilidad y crecimiento de cualquier organización.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Importancia del derecho empresarial</h2>

          <p>
            Aplicar correctamente el derecho empresarial permite evitar
            sanciones, reducir riesgos legales y tomar decisiones estratégicas
            basadas en la normativa vigente.
          </p>

          <p>
            Además, fortalece la confianza con clientes, inversionistas y
            aliados comerciales, lo que facilita el crecimiento sostenible del
            negocio.
          </p>

          <p>
            Una empresa que cumple con la ley tiene mayores oportunidades de
            expansión y estabilidad en el mercado.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Aspectos legales clave en Colombia</h2>

          <div className={styles.card}>
            <h3>Constitución de la empresa</h3>
            <p>
              Elegir el tipo de sociedad adecuado define la responsabilidad
              legal, la estructura organizacional y el alcance del negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos comerciales</h3>
            <p>
              Los contratos bien redactados permiten prevenir conflictos y
              proteger los intereses de la empresa en sus relaciones
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Cumplir con obligaciones legales, tributarias y regulatorias es
              clave para evitar sanciones y garantizar la operación del negocio.
            </p>
          </div>

          <p>
            Estos elementos forman la base de una gestión empresarial sólida y
            legalmente segura.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo proteger tu negocio legalmente</h2>

          <p>
            Contar con asesoría legal constante permite anticiparse a problemas
            y tomar decisiones informadas en cada etapa del negocio.
          </p>

          <p>
            También es fundamental implementar políticas internas, mantener
            documentación organizada y actualizar contratos de acuerdo con los
            cambios en la legislación colombiana.
          </p>

          <p>
            La prevención legal es una de las mejores estrategias para
            garantizar la sostenibilidad empresarial.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            El derecho empresarial en Colombia es una herramienta esencial para
            garantizar la estabilidad, crecimiento y protección de cualquier
            empresa.
          </p>

          <p>
            Una correcta gestión legal permite prevenir conflictos, optimizar
            procesos y asegurar el éxito a largo plazo.
          </p>
        </section>
      </main>
    </>
  );
}
