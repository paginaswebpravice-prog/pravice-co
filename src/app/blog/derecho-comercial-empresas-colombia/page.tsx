"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function DerechoComercialEmpresasColombia() {
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
          Derecho comercial en Colombia: guía para empresas y contratos
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El derecho comercial en Colombia regula las actividades empresariales,
          los contratos y las relaciones entre comerciantes. Entender estas
          normas permite proteger tu empresa y evitar riesgos legales.
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
            "¿Qué es el derecho comercial?",
            "Normativa en Colombia",
            "Tipos de contratos comerciales",
            "Importancia para empresas",
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
        <h2>¿Qué es el derecho comercial?</h2>
        <p>
          Es la rama del derecho que regula las actividades económicas de las
          empresas, incluyendo contratos, obligaciones y actos de comercio.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Normativa en Colombia</h2>
        <p>
          En Colombia, el Código de Comercio establece las principales reglas
          para la constitución de empresas, contratos y actividades comerciales.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contratos comerciales
        </motion.h2>

        {[
          {
            title: "Compraventa",
            text: "Regula la compra y venta de bienes o servicios.",
          },
          {
            title: "Suministro",
            text: "Entrega periódica de productos o servicios.",
          },
          {
            title: "Sociedad",
            text: "Define la relación entre socios y capital.",
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
        <h2>Importancia para las empresas</h2>
        <p>
          Aplicar correctamente el derecho comercial permite reducir riesgos
          legales, mejorar contratos y proteger el negocio.
        </p>
      </motion.section>

      {/* CONCLUSIÓN */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>
        <p>
          El derecho comercial es fundamental para operar de forma segura en
          Colombia y garantizar el crecimiento empresarial.
        </p>
      </motion.section>
    </main>
  );
}
