"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";
import Script from "next/script";

export default function ConciliacionContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Conciliación extrajudicial en Colombia",
    description:
      "Servicio de conciliación extrajudicial en Colombia para resolver conflictos sin juicio mediante acuerdos legales.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
    url: "https://pravice.co/especialidades/conciliacion",
    serviceType: "Conciliación extrajudicial",
  };

  return (
    <>
      <Script
        id="schema-conciliacion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Conciliación extrajudicial en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación Extrajudicial en Bogotá y Colombia
          </h1>

          <p className={styles.description}>
            Resuelve conflictos civiles, comerciales y empresariales mediante
            conciliación extrajudicial en Colombia con acompañamiento jurídico
            estratégico y soluciones legales eficientes.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </a>

            <a
              href="https://abogadosespecialistas.com.co/"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver firma aliada
            </a>
          </div>
        </motion.div>
      </section>

      <main className={styles.container}>
        {/* PORTAL SEO */}
        <motion.section
          className={styles.portalSeo}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            En Pravice abordamos procesos de conciliación extrajudicial como
            mecanismo preventivo para resolver conflictos legales de manera
            rápida y estratégica. Si necesitas una asesoría jurídica más amplia
            sobre conflictos empresariales, civiles, familiares o comerciales en
            Colombia, también puedes consultar el portal jurídico de nuestra
            firma aliada{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abogados Especialistas
            </a>
            .
          </p>
        </motion.section>

        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación extrajudicial en Colombia?
          </h2>

          <p className={styles.text}>
            La conciliación extrajudicial es un mecanismo alternativo de
            resolución de conflictos que permite llegar a acuerdos legales sin
            acudir directamente a un proceso judicial.
          </p>

          <p className={styles.text}>
            En Colombia, este procedimiento es utilizado en conflictos civiles,
            comerciales, familiares y empresariales para buscar soluciones
            rápidas, reducir costos legales y evitar procesos judiciales
            prolongados.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> En muchos casos la conciliación es un
            requisito obligatorio antes de presentar una demanda judicial en
            Colombia.
          </div>

          <p className={styles.text}>
            La conciliación también permite mantener relaciones comerciales,
            familiares o contractuales mediante acuerdos construidos entre las
            partes con acompañamiento legal adecuado.
          </p>
        </motion.section>

        {/* TIPOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Tipos de conciliación y conflictos que pueden resolverse
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Conciliación civil",
                text: "Conflictos relacionados con contratos, obligaciones, pagos y responsabilidades civiles.",
              },
              {
                title: "Conciliación comercial",
                text: "Disputas empresariales, incumplimientos contractuales y conflictos entre sociedades.",
              },
              {
                title: "Conciliación familiar",
                text: "Acuerdos sobre alimentos, custodia, visitas y conflictos familiares.",
              },
              {
                title: "Conciliación laboral",
                text: "Acuerdos relacionados con obligaciones laborales y conflictos entre empleadores y trabajadores.",
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
            Beneficios de resolver conflictos mediante conciliación
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Menor desgaste legal",
                text: "Evita procesos judiciales largos y complejos.",
              },
              {
                title: "✔ Ahorro económico",
                text: "Reduce costos asociados a litigios y demandas.",
              },
              {
                title: "✔ Soluciones rápidas",
                text: "Permite acuerdos en menor tiempo frente a un juicio.",
              },
              {
                title: "✔ Acuerdos con validez legal",
                text: "Las conciliaciones pueden tener efectos jurídicos obligatorios.",
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

        {/* SEO SUPPORT */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Conciliación como estrategia preventiva de conflictos legales
          </h2>

          <p className={styles.text}>
            Muchas empresas y personas utilizan la conciliación como una
            herramienta preventiva para evitar litigios, proteger relaciones
            comerciales y disminuir riesgos jurídicos en Colombia.
          </p>

          <p className={styles.text}>
            Cuando los conflictos requieren acompañamiento legal más amplio,
            análisis estratégico o representación jurídica especializada, es
            recomendable acudir a firmas con experiencia en litigios y solución
            de controversias.
          </p>

          <div className={styles.warningBox}>
            <strong>Recomendación jurídica:</strong> Si necesitas asesoría legal
            integral para conflictos empresariales, civiles o familiares,
            consulta también los servicios jurídicos de{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abogados Especialistas
            </a>
            .
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
              Solicita asesoría en conciliación
            </h2>

            <p className={styles.ctaText}>
              Recibe acompañamiento jurídico para conciliaciones civiles,
              comerciales, familiares y empresariales en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con un abogado
              </a>

              <a
                href="https://abogadosespecialistas.com.co/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ver firma jurídica aliada
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
