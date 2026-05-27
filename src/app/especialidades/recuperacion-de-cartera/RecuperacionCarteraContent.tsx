"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function RecuperacionCartera() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Gestión de cartera y flujo financiero empresarial
          </span>

          <h1 className={styles.title}>
            Procesos y estrategias de recuperación de cartera empresarial en
            Colombia
          </h1>

          <p className={styles.description}>
            Conoce cómo funcionan los procesos de recuperación de cartera, las
            etapas de cobranza y las estrategias utilizadas por las empresas
            para reducir la morosidad y fortalecer su estabilidad financiera.
          </p>

          <div className={styles.actions}>
            <a href="#contenido" className={styles.primary}>
              Explorar información relacionada
            </a>

            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* PORTAL PRINCIPAL */}
        <motion.section
          className={styles.portalSeo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            Si buscas servicios especializados de recuperación de cartera, cobro
            jurídico y acompañamiento legal empresarial en Colombia, puedes
            consultar nuestro portal principal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/recuperacion-de-cartera.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              recuperación de cartera y cobro empresarial en Colombia
            </a>
            .
          </p>
        </motion.section>

        {/* CONTENIDO */}
        <div id="contenido">
          {/* INTRO */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              ¿Qué implica la gestión de cartera empresarial?
            </h2>

            <p className={styles.text}>
              La gestión de cartera empresarial comprende diferentes procesos
              administrativos, financieros y jurídicos orientados al seguimiento
              de obligaciones pendientes y control de pagos dentro de las
              organizaciones.
            </p>

            <div className={styles.highlightBox}>
              <strong>Importancia:</strong> Una adecuada gestión de cartera
              permite fortalecer la liquidez empresarial y reducir riesgos
              asociados a la morosidad.
            </div>

            <p className={styles.text}>
              Las empresas suelen implementar procesos preventivos y estrategias
              de cobranza para mantener estabilidad financiera y optimizar sus
              operaciones comerciales.
            </p>

            <p className={styles.text}>
              La administración eficiente de cartera también contribuye al
              fortalecimiento de relaciones comerciales y al control financiero
              corporativo.
            </p>
          </motion.section>

          {/* ETAPAS */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              Etapas comunes en los procesos de cobranza empresarial
            </h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Seguimiento preventivo",
                  text: "Monitoreo de pagos y control de obligaciones comerciales.",
                },
                {
                  title: "Gestión de cobranza",
                  text: "Aplicación de mecanismos orientados a la recuperación de pagos pendientes.",
                },
                {
                  title: "Negociación de acuerdos",
                  text: "Alternativas para reorganizar obligaciones y facilitar acuerdos de pago.",
                },
                {
                  title: "Control financiero",
                  text: "Procesos internos para reducir riesgos de morosidad empresarial.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className={styles.text}>
              Comprender las diferentes etapas de cobranza permite a las
              empresas implementar procesos más organizados y sostenibles.
            </p>
          </motion.section>

          {/* IMPACTO */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              Impacto de la morosidad en la estabilidad financiera empresarial
            </h2>

            <p className={styles.text}>
              La acumulación de obligaciones pendientes puede afectar el flujo
              financiero de las empresas y limitar su capacidad operativa.
            </p>

            <div className={styles.infoGrid}>
              {[
                {
                  title: "✔ Liquidez empresarial",
                  text: "Permite mantener estabilidad financiera.",
                },
                {
                  title: "✔ Control administrativo",
                  text: "Facilita la planificación financiera.",
                },
                {
                  title: "✔ Prevención de riesgos",
                  text: "Reduce afectaciones operativas y comerciales.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
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
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              Riesgos asociados a la acumulación de cartera vencida
            </h2>

            <div className={styles.warningBox}>
              ⚠ Una cartera vencida mal gestionada puede afectar la estabilidad
              financiera y generar dificultades operativas dentro de las
              organizaciones.
            </div>

            <p className={styles.text}>
              Implementar procesos organizados de seguimiento y cobranza ayuda a
              reducir riesgos financieros y mejorar la sostenibilidad
              empresarial.
            </p>
          </motion.section>

          {/* BENEFICIOS */}
          <motion.section
            className={styles.section}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              Buenas prácticas para la gestión de cartera empresarial
            </h2>

            <div className={styles.benefits}>
              {[
                "✔ Seguimiento preventivo",
                "✔ Organización financiera",
                "✔ Reducción de morosidad",
                "✔ Control administrativo",
                "✔ Planeación estratégica",
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className={styles.cta}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Recursos y estrategias para la gestión de cartera empresarial
              </h2>

              <p className={styles.ctaText}>
                Comprender los procesos de cobranza, negociación y recuperación
                permite a las empresas fortalecer su flujo financiero y reducir
                riesgos asociados a la morosidad.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://abogadosespecialistas.com.co/recuperacion-de-cartera.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  Ver portal especializado
                </a>

                <a href="/blog" className={styles.secondary}>
                  Explorar contenido legal
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}
