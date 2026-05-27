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

export default function CumplimientoNormativoContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cumplimiento normativo laboral en Colombia",
    description:
      "Servicio de cumplimiento normativo laboral y compliance empresarial en Bogotá y Colombia para prevenir sanciones, demandas y riesgos jurídicos laborales.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <motion.section variants={fadeUp} className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Compliance laboral en Colombia</span>

          <h1 className={styles.title}>
            Cumplimiento normativo laboral en Bogotá: evita sanciones y riesgos
            legales en tu empresa
          </h1>

          <p className={styles.description}>
            Implementa estrategias de compliance laboral y cumplimiento
            normativo empresarial en Bogotá y Colombia para prevenir demandas,
            multas, conflictos laborales y riesgos jurídicos dentro de tu
            organización.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>

            <a
              href="https://abogadosespecialistas.com.co/derecho-del-trabajo.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver derecho laboral
            </a>
          </div>
        </div>
      </motion.section>

      {/* MAIN */}

      <main className={styles.container}>
        {/* INTRO */}

        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es el cumplimiento normativo laboral y por qué es importante en
            Colombia?
          </h2>

          <p className={styles.text}>
            El cumplimiento normativo laboral es el conjunto de políticas,
            controles y procedimientos que implementa una empresa para cumplir
            correctamente las obligaciones establecidas por la legislación
            laboral colombiana.
          </p>

          <p className={styles.text}>
            Este tipo de compliance empresarial permite reducir riesgos
            relacionados con contratos laborales, seguridad social, jornadas,
            despidos, reglamentos internos y obligaciones frente a trabajadores.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> Un sistema de cumplimiento laboral ayuda a
            prevenir sanciones del Ministerio del Trabajo, demandas laborales y
            conflictos internos.
          </div>
        </motion.section>

        {/* PORTAL SEO */}

        <motion.section variants={fadeUp} className={styles.portalSeo}>
          <h2 className={styles.subtitle}>
            Relación entre compliance laboral y derecho del trabajo en Colombia
          </h2>

          <p>
            El cumplimiento normativo empresarial está directamente relacionado
            con la correcta aplicación del derecho laboral colombiano dentro de
            las organizaciones. Las empresas deben garantizar el cumplimiento de
            obligaciones frente a trabajadores, contratos, seguridad social y
            normativas internas para evitar conflictos legales y sanciones.
          </p>

          <p>
            Si necesitas asesoría jurídica especializada en procesos laborales,
            defensa judicial o conflictos entre empleadores y trabajadores,
            puedes consultar esta guía sobre{" "}
            <a
              href="https://abogadosespecialistas.com.co/derecho-del-trabajo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              derecho del trabajo en Colombia
            </a>
            .
          </p>
        </motion.section>

        {/* COMPONENTES */}

        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Elementos clave del compliance laboral para empresas en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Contratación laboral",
                text: "Verificación de contratos y obligaciones laborales.",
              },
              {
                title: "Seguridad social",
                text: "Control del cumplimiento frente a salud, pensión y ARL.",
              },
              {
                title: "Reglamentos internos",
                text: "Implementación de políticas y manuales empresariales.",
              },
              {
                title: "Auditorías laborales",
                text: "Revisión preventiva de riesgos jurídicos laborales.",
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

        {/* IMPORTANCIA */}

        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios del cumplimiento laboral empresarial en Bogotá y Colombia
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Prevención de demandas",
                text: "Reduce conflictos laborales y riesgos jurídicos.",
              },
              {
                title: "✔ Seguridad jurídica",
                text: "Garantiza cumplimiento frente a normas laborales.",
              },
              {
                title: "✔ Protección empresarial",
                text: "Minimiza riesgos económicos y sancionatorios.",
              },
              {
                title: "✔ Mejor ambiente laboral",
                text: "Fortalece la organización y la gestión interna.",
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

        {/* RIESGOS */}

        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Riesgos de incumplir normas laborales en Colombia
          </h2>

          <p className={styles.text}>
            El incumplimiento de obligaciones laborales puede generar demandas,
            investigaciones administrativas, multas y afectaciones económicas
            para las empresas.
          </p>

          <div className={styles.warningBox}>
            ⚠ Errores en contratación, pagos, afiliaciones o manejo laboral
            pueden derivar en sanciones del Ministerio del Trabajo y procesos
            judiciales.
          </div>

          <p className={styles.text}>
            Implementar compliance laboral permite detectar riesgos antes de que
            se conviertan en problemas legales mayores.
          </p>
        </motion.section>

        {/* BENEFICIOS */}

        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Ventajas del compliance laboral empresarial
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención de sanciones laborales",
              "✔ Reducción de riesgos jurídicos",
              "✔ Mejor control empresarial",
              "✔ Cumplimiento normativo",
              "✔ Protección financiera",
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

        {/* CTA */}

        <motion.section id="contacto" variants={fadeUp} className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Fortalece el cumplimiento laboral de tu empresa hoy
            </h2>

            <p className={styles.ctaText}>
              Implementa estrategias de compliance laboral y reduce riesgos
              legales, sanciones y conflictos en tu organización.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                className={styles.primary}
              >
                Hablar con un abogado
              </a>

              <a
                href="https://abogadosespecialistas.com.co/derecho-del-trabajo.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ver portal laboral
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
