"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export const metadata = {
  title:
    "Derecho administrativo en Colombia: cómo actuar ante entidades públicas",
  description:
    "Guía para empresas sobre procesos administrativos en Colombia y con entidades públicas.",
};

export default function DerechoAdministrativoColombia() {
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
          Derecho administrativo en Colombia: cómo actuar ante entidades
          públicas
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El derecho administrativo en Colombia regula la relación entre las
          empresas y las entidades públicas. Conocer cómo funcionan los procesos
          administrativos es clave para evitar sanciones y proteger los
          intereses de tu negocio.
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
            "¿Qué es el derecho administrativo?",
            "Relación con las entidades públicas",
            "Principales procesos administrativos",
            "Cómo actuar ante una entidad pública",
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
        <h2>¿Qué es el derecho administrativo?</h2>
        <p>
          El derecho administrativo es la rama del derecho que regula la
          organización y funcionamiento del Estado, así como la relación entre
          las entidades públicas y los particulares, incluyendo las empresas.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Relación entre empresas y entidades públicas</h2>
        <p>
          Las empresas interactúan constantemente con entidades públicas a
          través de trámites, licencias, contratos estatales y procesos de
          inspección y control.
        </p>
        <p>
          Entender esta relación permite actuar de manera estratégica y evitar
          inconvenientes legales.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales procesos administrativos
        </motion.h2>

        {[
          {
            title: "Licencias y permisos",
            text: "Son autorizaciones necesarias para operar legalmente en determinados sectores económicos.",
          },
          {
            title: "Procesos sancionatorios",
            text: "Se inician cuando una empresa incumple normas y puede enfrentar multas o restricciones.",
          },
          {
            title: "Contratación estatal",
            text: "Permite a las empresas participar en contratos con el Estado bajo reglas específicas.",
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
          Cómo actuar ante una entidad pública
        </motion.h2>

        {[
          {
            title: "Cumplimiento normativo",
            text: "Asegurarse de cumplir con todas las obligaciones legales evita sanciones y problemas administrativos.",
          },
          {
            title: "Respuesta oportuna",
            text: "Atender requerimientos dentro de los plazos establecidos es clave para evitar consecuencias negativas.",
          },
          {
            title: "Asesoría legal",
            text: "Contar con expertos permite enfrentar procesos administrativos de forma estratégica y efectiva.",
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
          El derecho administrativo en Colombia es fundamental para la relación
          entre empresas y el Estado. Actuar correctamente frente a entidades
          públicas permite evitar sanciones, aprovechar oportunidades y proteger
          tu negocio.
        </p>
      </motion.section>
    </main>
  );
}
