"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function LitigiosEmpresarialesColombia() {
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
          Litigios empresariales en Colombia: cómo proteger tu empresa
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los litigios empresariales en Colombia son una realidad para muchas
          empresas. Saber cómo enfrentarlos y prevenirlos es clave para proteger
          tus intereses, evitar pérdidas económicas y mantener la estabilidad de
          tu negocio.
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
            "¿Qué son los litigios empresariales?",
            "Principales causas de litigios",
            "Cómo prevenir conflictos legales",
            "Estrategias para enfrentar un litigio",
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
        <h2>¿Qué son los litigios empresariales?</h2>
        <p>
          Los litigios empresariales son conflictos legales que surgen entre
          empresas o entre una empresa y terceros, los cuales se resuelven a
          través de procesos judiciales o mecanismos alternativos como la
          conciliación o el arbitraje.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales causas de litigios en empresas
        </motion.h2>

        {[
          {
            title: "Incumplimiento de contratos",
            text: "Es una de las causas más comunes, cuando una de las partes no cumple con lo acordado en contratos comerciales.",
          },
          {
            title: "Conflictos entre socios",
            text: "Diferencias en la toma de decisiones, distribución de utilidades o manejo de la empresa pueden generar disputas legales.",
          },
          {
            title: "Problemas con proveedores o clientes",
            text: "Retrasos en pagos, incumplimientos o mala prestación de servicios pueden derivar en demandas.",
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

      {/* SECCIÓN 3 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo prevenir litigios empresariales</h2>
        <p>
          La mejor estrategia es la prevención. Contar con contratos bien
          redactados, asesoría legal constante y políticas internas claras puede
          reducir significativamente el riesgo de conflictos.
        </p>
        <p>
          Además, es recomendable documentar todos los acuerdos comerciales y
          mantener una comunicación clara con socios y clientes.
        </p>
      </motion.section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estrategias para enfrentar un litigio
        </motion.h2>

        {[
          {
            title: "Asesoría legal especializada",
            text: "Contar con abogados expertos en derecho comercial permite diseñar una estrategia adecuada para cada caso.",
          },
          {
            title: "Evaluar conciliación o arbitraje",
            text: "En muchos casos, estos mecanismos pueden resolver el conflicto de forma más rápida y económica que un proceso judicial.",
          },
          {
            title: "Gestión del riesgo",
            text: "Analizar el impacto del litigio en la empresa y tomar decisiones estratégicas para minimizar pérdidas.",
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
          Los litigios empresariales en Colombia pueden afectar seriamente la
          operación de una empresa. Sin embargo, con prevención, contratos bien
          estructurados y una estrategia legal adecuada, es posible proteger el
          negocio y enfrentar cualquier conflicto de manera efectiva.
        </p>
      </motion.section>
    </main>
  );
}
