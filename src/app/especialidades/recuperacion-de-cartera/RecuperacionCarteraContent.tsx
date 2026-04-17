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
            Recuperación de cartera en Bogotá y Colombia
          </span>

          <h1 className={styles.title}>
            Recuperación de cartera en Colombia: soluciones legales efectivas
          </h1>

          <p className={styles.description}>
            Optimiza el recaudo de tu empresa con estrategias de recuperación de
            cartera en Colombia. Implementamos cobro prejurídico y jurídico en
            Bogotá y a nivel nacional para reducir la morosidad y mejorar tu
            flujo de caja.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recuperar cartera ahora
            </a>
            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la recuperación de cartera?
          </h2>

          <p className={styles.text}>
            La recuperación de cartera en Colombia es el conjunto de estrategias
            legales y administrativas utilizadas por empresas para recuperar
            dinero adeudado por clientes, proveedores o terceros. Este proceso
            es clave para mantener la estabilidad financiera de cualquier
            negocio.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> Una cartera vencida mal gestionada puede
            afectar gravemente la liquidez de una empresa y limitar su
            crecimiento.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde el volumen de operaciones comerciales
            es alto, contar con procesos estructurados de cobranza permite a las
            empresas reducir riesgos financieros y mejorar su flujo de caja.
          </p>

          <p className={styles.text}>
            La recuperación de cartera no solo implica cobrar, sino hacerlo de
            manera estratégica, legal y efectiva, evitando conflictos
            innecesarios y protegiendo la relación comercial cuando sea posible.
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
            Etapas de la recuperación de cartera
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Cobro prejurídico",
                text: "Gestión persuasiva para lograr el pago sin acudir a procesos judiciales.",
              },
              {
                title: "Cobro jurídico",
                text: "Inicio de procesos legales para exigir el pago de la obligación.",
              },
              {
                title: "Procesos ejecutivos",
                text: "Acciones legales rápidas para hacer efectivo el cobro mediante embargos.",
              },
              {
                title: "Negociación de acuerdos",
                text: "Reestructuración de deudas mediante acuerdos de pago.",
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
            Elegir correctamente la etapa de cobro permite maximizar la
            recuperación y reducir costos legales innecesarios.
          </p>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Importancia de recuperar cartera en Colombia
          </h2>

          <p className={styles.text}>
            En Colombia, la morosidad es uno de los principales problemas que
            enfrentan las empresas. La falta de pago afecta directamente la
            operación y puede generar dificultades financieras.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Liquidez empresarial",
                text: "Permite mantener flujo de caja constante.",
              },
              {
                title: "✔ Reducción de pérdidas",
                text: "Evita que las deudas se conviertan en incobrables.",
              },
              {
                title: "✔ Control financiero",
                text: "Mejora la gestión administrativa.",
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
            Riesgos de no gestionar la cartera a tiempo
          </h2>

          <div className={styles.warningBox}>
            ⚠ No gestionar oportunamente la cartera puede generar pérdida total
            de la deuda, problemas legales y afectación en la estabilidad
            financiera.
          </div>

          <p className={styles.text}>
            Entre más tiempo pase sin gestionar una deuda, más difícil será
            recuperarla. Por eso, es clave actuar de manera oportuna con
            estrategias adecuadas.
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
            Beneficios de una gestión profesional de cartera
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Mayor tasa de recuperación",
              "✔ Procesos legales efectivos",
              "✔ Reducción de morosidad",
              "✔ Mejor flujo de caja",
              "✔ Ahorro en costos legales",
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
          id="contacto"
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recupera tu cartera en Bogotá y Colombia
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo te ayuda a implementar estrategias efectivas de
              cobro prejurídico y jurídico para recuperar tus ingresos y
              fortalecer la estabilidad financiera de tu empresa.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
              >
                Solicitar asesoría
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                className={styles.secondary}
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
