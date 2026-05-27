"use client";

import Script from "next/script";
import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DerechoEmpresarialContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Protección jurídica empresarial en Colombia",
    description:
      "Información sobre protección jurídica empresarial, cumplimiento legal, riesgos corporativos y estructura empresarial en Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <Script
        id="schema-proteccion-juridica-empresarial"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <motion.section variants={fadeUp} className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Información empresarial en Colombia
          </span>

          <h1 className={styles.title}>
            Protección jurídica empresarial en Colombia: gestión legal,
            cumplimiento y prevención de riesgos corporativos
          </h1>

          <p className={styles.description}>
            Conoce cómo funciona la protección jurídica empresarial en Colombia,
            qué riesgos legales enfrentan las empresas y cuáles son las medidas
            más utilizadas para fortalecer la seguridad corporativa y el
            cumplimiento normativo.
          </p>

          <div className={styles.actions}>
            <a href="#informacion" className={styles.primary}>
              Ver información
            </a>

            <a
              href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Portal especializado
            </a>
          </div>
        </div>
      </motion.section>

      {/* ================= MAIN ================= */}
      <main className={styles.container}>
        {/* ================= INTRO ================= */}
        <motion.section
          variants={fadeUp}
          className={styles.section}
          id="informacion"
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la protección jurídica empresarial en Colombia?
          </h2>

          <p className={styles.text}>
            La protección jurídica empresarial reúne estrategias legales,
            mecanismos de prevención y estructuras normativas que permiten a las
            empresas reducir riesgos y operar con mayor seguridad jurídica.
          </p>

          <p className={styles.text}>
            En Colombia, las organizaciones deben cumplir obligaciones
            comerciales, societarias, laborales, contractuales y regulatorias,
            por lo que la gestión legal empresarial se convierte en un aspecto
            fundamental para la estabilidad corporativa.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> La prevención legal suele ser más
            eficiente y menos costosa que enfrentar litigios o sanciones
            empresariales.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe una alta actividad económica y
            empresarial, muchas compañías fortalecen sus procesos internos para
            disminuir contingencias jurídicas y mejorar el cumplimiento
            normativo.
          </p>
        </motion.section>

        {/* ================= PORTAL SEO ================= */}
        <motion.section variants={fadeUp} className={styles.portalSeo}>
          <h2 className={styles.subtitle}>
            Portal especializado en derecho comercial y empresarial
          </h2>

          <p>
            Si deseas ampliar la información sobre derecho comercial, protección
            empresarial, contratos mercantiles y gestión legal corporativa,
            puedes visitar el portal especializado en{" "}
            <a
              href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              derecho comercial y mercantil en Colombia
            </a>
            .
          </p>
        </motion.section>

        {/* ================= TEMAS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Áreas relacionadas con la protección jurídica empresarial
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Cumplimiento normativo",
                text: "Procesos internos orientados al cumplimiento de obligaciones legales y regulatorias.",
              },
              {
                title: "Gestión de riesgos",
                text: "Identificación y prevención de riesgos jurídicos, financieros y corporativos.",
              },
              {
                title: "Contratos empresariales",
                text: "Estructuración y revisión de acuerdos comerciales y corporativos.",
              },
              {
                title: "Gobierno corporativo",
                text: "Definición de políticas, funciones y controles dentro de la organización.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= IMPORTANCIA ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia de la protección jurídica para las empresas
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Seguridad jurídica",
                text: "Facilita decisiones empresariales con respaldo legal.",
              },
              {
                title: "✔ Prevención de conflictos",
                text: "Reduce riesgos relacionados con contratos y operaciones.",
              },
              {
                title: "✔ Organización corporativa",
                text: "Fortalece procesos internos y estructuras empresariales.",
              },
              {
                title: "✔ Continuidad empresarial",
                text: "Ayuda a proteger la estabilidad y sostenibilidad del negocio.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= RIESGOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Riesgos legales frecuentes en empresas colombianas
          </h2>

          <p className={styles.text}>
            Muchas organizaciones enfrentan riesgos relacionados con
            incumplimientos regulatorios, errores contractuales, conflictos
            societarios y problemas derivados de una gestión jurídica
            insuficiente.
          </p>

          <div className={styles.warningBox}>
            ⚠ La ausencia de controles legales adecuados puede generar
            sanciones, pérdidas económicas, conflictos internos y afectaciones
            reputacionales.
          </div>

          <p className={styles.text}>
            Por esta razón, cada vez más empresas incorporan mecanismos de
            prevención jurídica y fortalecimiento corporativo dentro de sus
            operaciones.
          </p>
        </motion.section>

        {/* ================= BENEFICIOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Aspectos clave de la gestión jurídica empresarial
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención legal",
              "✔ Cumplimiento corporativo",
              "✔ Gestión contractual",
              "✔ Reducción de riesgos",
              "✔ Seguridad empresarial",
            ].map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* ================= CTA SEO ================= */}
        <motion.section variants={fadeUp} className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Más información sobre derecho comercial y protección empresarial
            </h2>

            <p className={styles.ctaText}>
              Explora contenido relacionado con empresas, contratos,
              cumplimiento legal y riesgos corporativos en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ir al portal especializado
              </a>

              <a href="/blog" className={styles.secondary}>
                Ver blog jurídico
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
