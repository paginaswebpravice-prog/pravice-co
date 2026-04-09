"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function LitigiosPage() {
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
          <span className={styles.badge}>Litigios en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Litigios en Colombia: representación legal estratégica para empresas
          </h1>

          <p className={styles.description}>
            Defiende los intereses de tu empresa con abogados expertos en
            litigios en Colombia. Representación judicial en Bogotá y a nivel
            nacional en procesos civiles, comerciales y ejecutivos.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Iniciar proceso legal
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
            ¿Qué son los litigios en Colombia?
          </h2>

          <p className={styles.text}>
            Los litigios en Colombia son procesos judiciales mediante los cuales
            una persona o empresa acude a los tribunales para resolver un
            conflicto legal. Estos procesos son fundamentales cuando no es
            posible llegar a un acuerdo previo entre las partes.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Un litigio mal gestionado puede generar
            pérdidas económicas significativas y afectar la estabilidad de una
            empresa.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe una alta actividad
            empresarial, los litigios comerciales, civiles y contractuales son
            frecuentes, por lo que contar con representación legal especializada
            es clave para obtener resultados favorables.
          </p>

          <p className={styles.text}>
            Un buen manejo del litigio no solo implica conocimiento jurídico,
            sino también estrategia, análisis del caso y una correcta ejecución
            procesal.
          </p>
        </motion.section>

        {/* TIPOS DE LITIGIOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Tipos de litigios más comunes en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Litigios civiles",
                text: "Conflictos entre personas o empresas relacionados con obligaciones y bienes.",
              },
              {
                title: "Litigios comerciales",
                text: "Disputas derivadas de contratos, negocios y relaciones empresariales.",
              },
              {
                title: "Procesos ejecutivos",
                text: "Acciones legales para exigir el pago de deudas con respaldo jurídico.",
              },
              {
                title: "Litigios contractuales",
                text: "Incumplimiento de contratos entre empresas o particulares.",
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
            Identificar correctamente el tipo de litigio permite diseñar una
            estrategia legal adecuada y aumentar las probabilidades de éxito.
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
            Importancia de una buena estrategia de litigio
          </h2>

          <p className={styles.text}>
            En Colombia, los procesos judiciales pueden ser complejos y
            prolongados. Por esta razón, contar con una estrategia clara desde
            el inicio es fundamental.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Análisis del caso",
                text: "Evaluación detallada para definir la mejor estrategia.",
              },
              {
                title: "✔ Representación efectiva",
                text: "Defensa sólida ante juzgados y tribunales.",
              },
              {
                title: "✔ Reducción de riesgos",
                text: "Minimiza pérdidas económicas y legales.",
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
            Riesgos de no contar con asesoría en litigios
          </h2>

          <div className={styles.warningBox}>
            ⚠ Enfrentar un proceso judicial sin asesoría especializada puede
            resultar en pérdidas económicas, sanciones legales y fallos
            desfavorables.
          </div>

          <p className={styles.text}>
            Muchas empresas en Bogotá y Colombia subestiman la complejidad de
            los litigios, lo que puede llevar a errores procesales y
            consecuencias graves.
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
            Beneficios de contar con abogados litigantes
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Defensa legal especializada",
              "✔ Estrategias jurídicas efectivas",
              "✔ Mayor probabilidad de éxito",
              "✔ Protección de intereses empresariales",
              "✔ Acompañamiento durante todo el proceso",
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
              Abogados expertos en litigios en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo te representa en procesos judiciales en Colombia
              con estrategias legales sólidas, defendiendo los intereses de tu
              empresa en cada etapa del litigio.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Iniciar proceso legal
              </a>

              <a
                href="https://api.whatsapp.com"
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
