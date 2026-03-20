"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ResolucionConflictosEmpresariales() {
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
          Resolución de conflictos empresariales en Colombia
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los conflictos empresariales son comunes en el desarrollo de los
          negocios. Contar con mecanismos efectivos para resolverlos permite
          proteger las relaciones comerciales, evitar pérdidas económicas y
          mantener la estabilidad de la empresa.
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
            "¿Qué son los conflictos empresariales?",
            "Principales causas",
            "Mecanismos de resolución",
            "Ventajas de resolver conflictos a tiempo",
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
        <h2>¿Qué son los conflictos empresariales?</h2>
        <p>
          Son disputas que surgen entre empresas, socios, clientes o proveedores
          debido a incumplimientos, diferencias comerciales o desacuerdos en la
          gestión del negocio.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales causas de conflictos
        </motion.h2>

        {[
          {
            title: "Incumplimiento de contratos",
            text: "Cuando una de las partes no cumple con las obligaciones pactadas.",
          },
          {
            title: "Problemas entre socios",
            text: "Diferencias en decisiones estratégicas o distribución de utilidades.",
          },
          {
            title: "Relaciones comerciales deficientes",
            text: "Falta de claridad en acuerdos con clientes o proveedores.",
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
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mecanismos de resolución de conflictos
        </motion.h2>

        {[
          {
            title: "Negociación",
            text: "Las partes buscan un acuerdo directo sin intervención de terceros.",
          },
          {
            title: "Conciliación",
            text: "Un tercero imparcial facilita el diálogo para llegar a una solución.",
          },
          {
            title: "Arbitraje",
            text: "Un árbitro toma una decisión que es obligatoria para las partes.",
          },
          {
            title: "Proceso judicial",
            text: "Se acude a los tribunales cuando no es posible resolver el conflicto por otros medios.",
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

      {/* SECCIÓN 4 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Ventajas de resolver conflictos a tiempo</h2>
        <p>
          Actuar de manera oportuna permite reducir costos, evitar daños a la
          reputación y mantener relaciones comerciales.
        </p>
        <p>
          Además, facilita soluciones más rápidas y eficientes para las partes
          involucradas.
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
          La resolución de conflictos empresariales en Colombia es clave para la
          continuidad y estabilidad de cualquier negocio. Utilizar mecanismos
          adecuados permite proteger los intereses de la empresa y garantizar su
          crecimiento.
        </p>
      </motion.section>
    </main>
  );
}
