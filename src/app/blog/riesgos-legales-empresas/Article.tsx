"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function RiesgosLegalesEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Principales riesgos legales que enfrentan las empresas en Colombia",
    description:
      "Guía completa sobre riesgos legales empresariales en Colombia y cómo prevenir demandas, sanciones y conflictos.",
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
      "@id": "https://pravice.co/blog/riesgos-legales-empresas",
    },
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
  };

  return (
    <>
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
            Principales riesgos legales que enfrentan las empresas en Colombia
            en 2026
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Muchas empresas en Colombia enfrentan riesgos legales que pueden
            generar demandas, sanciones económicas, pérdida de dinero y
            problemas operativos si no cuentan con prevención jurídica adecuada.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Identificar los riesgos legales empresariales más comunes permite
            tomar decisiones estratégicas para proteger la estabilidad y el
            crecimiento de cualquier negocio en Colombia.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué encontrarás en esta guía</h3>

          <ul>
            <li>Qué son los riesgos legales empresariales</li>
            <li>Principales problemas jurídicos en empresas</li>
            <li>Cómo prevenir demandas y sanciones</li>
            <li>Estrategias de protección jurídica empresarial</li>
            <li>Conclusión y recomendaciones legales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué son los riesgos legales empresariales?</h2>

          <p>
            Los riesgos legales empresariales son situaciones que pueden afectar
            económicamente o jurídicamente a una empresa debido al
            incumplimiento de normas, contratos o regulaciones.
          </p>

          <p>
            En Colombia, estos riesgos pueden surgir en áreas laborales,
            comerciales, tributarias, contractuales o administrativas.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            Principales riesgos legales que afectan a las empresas en Colombia
          </h2>

          <div className={styles.card}>
            <h3>Incumplimientos contractuales</h3>

            <p>
              Contratos mal redactados o incumplidos pueden generar demandas y
              pérdidas económicas importantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Demandas laborales</h3>

            <p>
              Problemas con empleados, despidos o incumplimientos laborales son
              una de las principales causas de conflictos empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sanciones por incumplimiento normativo</h3>

            <p>
              No cumplir regulaciones puede ocasionar multas, investigaciones o
              restricciones operativas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas tributarios y fiscales</h3>

            <p>
              Errores en obligaciones tributarias pueden generar sanciones
              económicas y procesos administrativos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir riesgos legales en tu empresa</h2>

          <p>
            La prevención jurídica empresarial es clave para reducir conflictos
            y proteger la operación de cualquier negocio.
          </p>

          <div className={styles.card}>
            <h3>Contratos empresariales sólidos</h3>

            <p>
              Tener contratos claros y bien estructurados reduce riesgos de
              incumplimiento y conflictos legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica constante</h3>

            <p>
              Contar con abogados especializados permite anticipar problemas y
              tomar decisiones estratégicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo empresarial</h3>

            <p>
              Implementar procesos internos de cumplimiento ayuda a evitar
              sanciones y riesgos regulatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Gestión preventiva de conflictos</h3>

            <p>
              Resolver problemas a tiempo evita litigios largos y costosos para
              la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>
            Por qué la protección jurídica empresarial es importante en Colombia
          </h2>

          <p>
            Las empresas que implementan prevención legal tienen mayor
            estabilidad financiera, reducen conflictos y generan mayor confianza
            frente a clientes, proveedores e inversionistas.
          </p>

          <p>
            En mercados competitivos como Bogotá y otras ciudades de Colombia,
            una estrategia jurídica sólida puede marcar la diferencia entre el
            crecimiento y los problemas legales constantes.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: cómo reducir riesgos legales empresariales en Colombia
          </h2>

          <p>
            Identificar y prevenir riesgos legales permite proteger el
            patrimonio, la operación y la estabilidad de cualquier empresa en
            Colombia.
          </p>

          <p>
            Implementar asesoría jurídica, contratos adecuados y estrategias de
            cumplimiento normativo ayuda a evitar demandas, sanciones y pérdidas
            económicas innecesarias.
          </p>
        </section>
      </main>
    </>
  );
}
