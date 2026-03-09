"use client";

import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

export default function Experience() {
  const stats = [
    { number: "25+", label: "Años de experiencia" },
    { number: "1500+", label: "Casos asesorados" },
    { number: "300+", label: "Empresas asesoradas" },
    { number: "Colombia", label: "Cobertura nacional" },
  ];

  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.container}>
        {/* TITLE */}

        <motion.h2
          id="experience-title"
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Más de 25 años de experiencia{" "}
          <span>en servicios legales en Colombia</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice Abogados</strong> contamos con más de
          <strong> 25 años de experiencia en asesoría jurídica</strong>,
          representando a empresas y personas en múltiples áreas del derecho.
        </motion.p>

        {/* STATS */}

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.stat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.number}>{stat.number}</span>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CARDS */}

        <div className={styles.cards}>
          {[
            {
              title: "Áreas del derecho",
              text: "Derecho laboral, civil, penal, comercial, registro de marcas y procesos de insolvencia.",
            },
            {
              title: "Atención en toda Colombia",
              text: "Asesoría jurídica presencial y remota con herramientas digitales seguras.",
            },
            {
              title: "Casos complejos",
              text: "Acompañamiento legal integral desde la consulta inicial hasta la resolución.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
