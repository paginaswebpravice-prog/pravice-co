"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function DerechoSocietarioColombia() {
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
          Derecho societario en Colombia: creación y gestión de empresas
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El derecho societario en Colombia regula la creación, organización y
          funcionamiento de las empresas. Conocer estas normas es fundamental
          para estructurar correctamente tu negocio y garantizar su crecimiento
          legal y sostenible.
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
            "¿Qué es el derecho societario?",
            "Tipos de sociedades en Colombia",
            "Constitución de una empresa",
            "Gestión y obligaciones legales",
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
        <h2>¿Qué es el derecho societario?</h2>
        <p>
          El derecho societario es la rama del derecho que regula la creación,
          estructura y funcionamiento de las sociedades comerciales, así como
          las relaciones entre socios y las obligaciones legales de la empresa.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tipos de sociedades en Colombia
        </motion.h2>

        {[
          {
            title: "Sociedad por Acciones Simplificada (SAS)",
            text: "Es la forma más común en Colombia por su flexibilidad y facilidad de constitución.",
          },
          {
            title: "Sociedad Limitada (LTDA)",
            text: "Limita la responsabilidad de los socios al monto de sus aportes.",
          },
          {
            title: "Sociedad Anónima (S.A.)",
            text: "Ideal para empresas grandes que requieren mayor estructura y control corporativo.",
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
        <h2>Constitución de una empresa en Colombia</h2>
        <p>
          Crear una empresa implica definir el tipo de sociedad, elaborar los
          estatutos, registrarla ante la Cámara de Comercio y cumplir con los
          requisitos legales y tributarios.
        </p>
        <p>
          Una correcta constitución evita problemas futuros y facilita la
          operación del negocio.
        </p>
      </motion.section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Gestión y obligaciones legales
        </motion.h2>

        {[
          {
            title: "Gobierno corporativo",
            text: "Establecer roles, funciones y procesos de decisión dentro de la empresa.",
          },
          {
            title: "Cumplimiento normativo",
            text: "Cumplir con obligaciones legales, contables y tributarias es clave para evitar sanciones.",
          },
          {
            title: "Relación entre socios",
            text: "Definir claramente derechos y deberes previene conflictos internos.",
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
          El derecho societario en Colombia es esencial para crear y gestionar
          empresas de manera adecuada. Una estructura legal sólida permite
          prevenir conflictos, cumplir con la ley y garantizar el crecimiento
          empresarial.
        </p>
      </motion.section>
    </main>
  );
}
