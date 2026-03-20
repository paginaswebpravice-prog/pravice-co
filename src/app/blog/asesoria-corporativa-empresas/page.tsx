"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function AsesoriaCorporativaEmpresas() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Asesoría corporativa en Colombia: toma decisiones legales estratégicas
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La asesoría corporativa en Colombia es clave para que las empresas
          tomen decisiones legales informadas, reduzcan riesgos y aprovechen
          oportunidades de crecimiento en un entorno competitivo.
        </motion.p>
      </motion.section>

      {/* CONTENIDO */}
      <motion.section
        className={styles.contentBox}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Contenido</h3>
        <ul>
          {[
            "¿Qué es la asesoría corporativa?",
            "Importancia para las empresas",
            "Áreas clave de asesoría",
            "Beneficios estratégicos",
            "Conclusión",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* SECCIÓN 1 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es la asesoría corporativa?</h2>
        <p>
          La asesoría corporativa consiste en el acompañamiento legal continuo a
          las empresas para orientar sus decisiones, garantizar el cumplimiento
          normativo y optimizar su estructura jurídica.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Importancia de la asesoría corporativa</h2>
        <p>
          Contar con asesoría legal especializada permite a las empresas
          anticiparse a problemas, evitar sanciones y tomar decisiones con mayor
          seguridad.
        </p>
        <p>
          Además, facilita la planificación estratégica y el crecimiento
          sostenible del negocio.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Áreas clave de la asesoría corporativa
        </motion.h2>

        {[
          {
            title: "Gobierno corporativo",
            text: "Define la estructura de la empresa, roles y responsabilidades para una gestión eficiente.",
          },
          {
            title: "Contratos y negociaciones",
            text: "Apoya la elaboración y revisión de contratos para proteger los intereses del negocio.",
          },
          {
            title: "Cumplimiento legal",
            text: "Garantiza que la empresa cumpla con las normativas vigentes y evite riesgos legales.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* SECCIÓN 4 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Beneficios estratégicos para tu empresa</h2>
        <p>
          La asesoría corporativa permite optimizar procesos, reducir riesgos
          legales y mejorar la toma de decisiones en todos los niveles de la
          organización.
        </p>
        <p>
          También fortalece la confianza de inversionistas, socios y clientes,
          impulsando el crecimiento empresarial.
        </p>
      </motion.section>

      {/* CONCLUSIÓN */}
      <motion.section
        className={styles.conclusion}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>
        <p>
          La asesoría corporativa en Colombia es una herramienta fundamental
          para cualquier empresa que busque crecer de forma segura y
          estratégica. Un buen acompañamiento legal marca la diferencia en la
          sostenibilidad del negocio.
        </p>
      </motion.section>
    </main>
  );
}
