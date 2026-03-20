"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function CumpliminetoNromativoColombia() {
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
          Cumplimiento normativo en Colombia: evita sanciones legales
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El cumplimiento normativo en Colombia es fundamental para que las
          empresas operen dentro del marco legal, eviten sanciones y reduzcan
          riesgos. Implementar un sistema de compliance adecuado protege tu
          negocio y fortalece su reputación.
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
            "¿Qué es el cumplimiento normativo?",
            "Importancia del compliance",
            "Principales riesgos legales",
            "Cómo implementar un programa de cumplimiento",
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
        viewport={{ once: true }}
      >
        <h2>¿Qué es el cumplimiento normativo?</h2>
        <p>
          El cumplimiento normativo o compliance es el conjunto de políticas,
          procedimientos y controles que implementa una empresa para asegurar
          que cumple con las leyes, regulaciones y estándares aplicables.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Importancia del compliance en las empresas</h2>
        <p>
          Contar con un programa de cumplimiento permite prevenir sanciones,
          mejorar la gestión interna y generar confianza con clientes,
          inversionistas y autoridades.
        </p>
        <p>
          Además, ayuda a identificar riesgos legales antes de que se conviertan
          en problemas graves.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales riesgos legales en Colombia
        </motion.h2>

        {[
          {
            title: "Incumplimiento tributario",
            text: "Errores o evasión en obligaciones fiscales pueden generar sanciones económicas importantes.",
          },
          {
            title: "Violación de normas laborales",
            text: "No cumplir con derechos de los trabajadores puede derivar en multas y demandas.",
          },
          {
            title: "Falta de regulación interna",
            text: "La ausencia de políticas claras aumenta el riesgo de errores y responsabilidades legales.",
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
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cómo implementar un programa de cumplimiento
        </motion.h2>

        {[
          {
            title: "Diagnóstico legal",
            text: "Identificar los riesgos y obligaciones aplicables a la empresa.",
          },
          {
            title: "Políticas internas",
            text: "Establecer normas claras de actuación para empleados y directivos.",
          },
          {
            title: "Capacitación",
            text: "Formar al equipo en cumplimiento normativo y buenas prácticas.",
          },
          {
            title: "Monitoreo y control",
            text: "Evaluar continuamente el cumplimiento y ajustar las estrategias.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CONCLUSIÓN */}
      <motion.section
        className={styles.conclusion}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>
        <p>
          El cumplimiento normativo en Colombia es esencial para evitar
          sanciones y garantizar la estabilidad empresarial. Implementar un
          programa de compliance permite operar con seguridad jurídica y
          fortalecer el crecimiento del negocio.
        </p>
      </motion.section>
    </main>
  );
}
