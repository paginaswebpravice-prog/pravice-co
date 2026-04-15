"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function LitigiosEmpresarialesColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Litigios empresariales en Colombia: cómo proteger tu empresa",
    description:
      "Guía completa sobre litigios empresariales en Colombia, causas comunes, prevención y estrategias legales para proteger tu negocio.",
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
      "@id": "https://pravice.co/blog/litigios-empresariales-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      {/* ✅ SCHEMA */}
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
            Litigios empresariales en Colombia: cómo proteger tu empresa
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Los litigios empresariales en Colombia son una realidad para muchas
            empresas en Bogotá y todo el país. Saber cómo prevenirlos y
            enfrentarlos es clave para evitar pérdidas económicas y proteger la
            estabilidad de tu negocio.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué son los litigios empresariales?</li>
            <li>Principales causas</li>
            <li>Cómo prevenir conflictos</li>
            <li>Estrategias legales</li>
            <li>Conclusión</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué son los litigios empresariales?</h2>

          <p>
            Los litigios empresariales son conflictos legales entre empresas o
            con terceros que se resuelven mediante procesos judiciales,
            conciliación o arbitraje.
          </p>

          <p>
            En Colombia, estos conflictos pueden surgir en diferentes áreas del
            derecho comercial, contractual o societario, afectando la operación
            y estabilidad financiera de las empresas.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales causas de litigios en Colombia</h2>

          <div className={styles.card}>
            <h3>Incumplimiento de contratos</h3>
            <p>
              Una de las causas más frecuentes en Bogotá y Colombia. Ocurre
              cuando una de las partes no cumple con las obligaciones pactadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos entre socios</h3>
            <p>
              Problemas en la toma de decisiones, manejo de la empresa o reparto
              de utilidades pueden generar disputas legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas con clientes o proveedores</h3>
            <p>
              Retrasos en pagos, incumplimientos o desacuerdos comerciales son
              causas comunes de demandas empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir litigios empresariales</h2>

          <p>
            La prevención es la mejor estrategia para evitar conflictos legales
            en Colombia.
          </p>

          <ul>
            <li>redactar contratos claros y detallados</li>
            <li>contar con asesoría legal constante</li>
            <li>establecer políticas internas</li>
            <li>documentar acuerdos comerciales</li>
          </ul>

          <p>
            Estas acciones reducen significativamente el riesgo de enfrentar
            procesos judiciales.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Estrategias para enfrentar un litigio</h2>

          <div className={styles.card}>
            <h3>Asesoría legal especializada</h3>
            <p>
              Contar con abogados expertos en derecho empresarial permite
              diseñar estrategias efectivas para cada caso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación y arbitraje</h3>
            <p>
              Son alternativas más rápidas y económicas que un proceso judicial
              tradicional en Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Gestión del riesgo legal</h3>
            <p>
              Evaluar el impacto del litigio y tomar decisiones estratégicas es
              clave para proteger la empresa.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            Los litigios empresariales en Colombia pueden afectar seriamente la
            operación de una empresa, especialmente en mercados competitivos
            como Bogotá.
          </p>

          <p>
            Sin embargo, con prevención, contratos sólidos y una estrategia
            legal adecuada, es posible minimizar riesgos y proteger el negocio a
            largo plazo.
          </p>
        </section>
      </main>
    </>
  );
}
