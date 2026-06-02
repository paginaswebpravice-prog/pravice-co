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

export default function ResolucionConflictosContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Resolución de conflictos empresariales en Colombia",
    description:
      "Servicio de resolución de conflictos empresariales, conciliación y negociación legal en Bogotá y Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      <Script
        id="schema-resolucion-conflictos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className={styles.badge}>
            Resolución de conflictos empresariales en Colombia
          </span>

          <h1 className={styles.title}>
            Resolución de conflictos en Bogotá y Colombia para empresas y
            relaciones comerciales
          </h1>

          <p className={styles.description}>
            La resolución de conflictos permite a empresas y organizaciones en
            Colombia solucionar disputas comerciales, contractuales y
            societarias mediante negociación, conciliación y estrategias legales
            preventivas.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría legal
            </a>

            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver portal jurídico aliado
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <main className={styles.container}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la resolución de conflictos empresariales y por qué es
            importante?
          </h2>

          <p className={styles.text}>
            La resolución de conflictos en Colombia reúne mecanismos legales y
            estratégicos que buscan solucionar disputas entre empresas, socios,
            clientes o proveedores antes de llegar a litigios complejos.
          </p>

          <p className={styles.text}>
            Una adecuada gestión de conflictos empresariales permite reducir
            riesgos financieros, proteger relaciones comerciales y evitar
            procesos judiciales prolongados.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Resolver un conflicto de manera
            temprana puede evitar demandas, sanciones económicas y afectaciones
            reputacionales para una empresa.
          </div>

          <p className={styles.text}>
            En Bogotá y otras ciudades de Colombia, muchas organizaciones
            utilizan mecanismos alternativos como conciliación y negociación
            para proteger la continuidad de sus operaciones.
          </p>
        </motion.section>

        {/* PORTAL SEO */}
        <motion.section
          className={styles.portalSeo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Asesoría jurídica empresarial y conflictos legales en Colombia
          </h2>

          <p>
            Si necesitas acompañamiento jurídico integral para conflictos
            comerciales, conciliaciones, incumplimientos contractuales o
            disputas empresariales, puedes consultar también el portal aliado{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abogados Especialistas
            </a>
            , enfocado en asesoría legal corporativa y representación jurídica
            en Colombia.
          </p>
        </motion.section>

        {/* MÉTODOS */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Métodos de resolución de conflictos utilizados en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Negociación empresarial",
                text: "Búsqueda de acuerdos estratégicos entre las partes involucradas.",
              },
              {
                title: "Conciliación extrajudicial",
                text: "Mecanismo legal para resolver conflictos sin necesidad de juicio.",
              },
              {
                title: "Arbitraje",
                text: "Solución mediante tribunal arbitral especializado.",
              },
              {
                title: "Litigio judicial",
                text: "Representación legal cuando no es posible alcanzar acuerdos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Cómo evitar litigios empresariales mediante estrategias preventivas
          </h2>

          <p className={styles.text}>
            Muchas disputas legales se originan por incumplimientos
            contractuales, diferencias societarias o desacuerdos comerciales mal
            gestionados.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Prevención de riesgos",
                text: "Reduce conflictos legales antes de escalar.",
              },
              {
                title: "✔ Protección financiera",
                text: "Disminuye costos asociados a litigios.",
              },
              {
                title: "✔ Continuidad empresarial",
                text: "Protege la operación y reputación del negocio.",
              },
              {
                title: "✔ Relaciones comerciales",
                text: "Permite conservar vínculos estratégicos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONFLICTOS EMPRESARIALES */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Conflictos empresariales más comunes en Bogotá y Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Incumplimientos contractuales",
                text: "Problemas derivados del incumplimiento de obligaciones pactadas.",
              },
              {
                title: "Conflictos societarios",
                text: "Diferencias entre socios o accionistas.",
              },
              {
                title: "Disputas comerciales",
                text: "Desacuerdos con clientes o proveedores.",
              },
              {
                title: "Cobro de obligaciones",
                text: "Recuperación de pagos pendientes y cartera.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            ⚠ Ignorar un conflicto empresarial puede generar consecuencias
            financieras, operativas y legales de alto impacto.
          </div>
        </motion.section>

        {/* BENEFICIOS */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Beneficios de resolver conflictos con apoyo legal especializado
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Soluciones estratégicas",
              "✔ Reducción de riesgos jurídicos",
              "✔ Protección reputacional",
              "✔ Mayor estabilidad empresarial",
              "✔ Ahorro de tiempo y costos",
            ].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recibe asesoría para resolución de conflictos empresariales
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo jurídico analiza conflictos comerciales,
              contractuales y societarios para ayudarte a encontrar soluciones
              legales estratégicas en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text=Hola,%20necesito%20asesoría%20sobre%20resolución%20de%20conflictos&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Solicitar asesoría
              </a>

              <a
                href="https://abogadosespecialistas.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ir a Abogados Especialistas
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
