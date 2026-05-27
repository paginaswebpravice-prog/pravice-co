"use client";

import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  const stats = [
    { number: "25+", label: "Años de trayectoria" },
    { number: "1500+", label: "Procesos acompañados" },
    { number: "300+", label: "Empresas atendidas" },
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
          Más de 25 años de trayectoria
          <span> acompañando empresas y personas en Colombia</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice Abogados</strong> contamos con experiencia en
          acompañamiento jurídico corporativo y consultoría legal para empresas
          y personas en distintas áreas del derecho y escenarios empresariales.
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
              title: "Acompañamiento corporativo",
              text: "Experiencia en consultoría y acompañamiento jurídico para empresas y organizaciones en Colombia.",
            },

            {
              title: "Cobertura nacional",
              text: "Atención jurídica presencial y virtual para clientes en distintas ciudades del país.",
            },

            {
              title: "Seguimiento estratégico",
              text: "Procesos orientados al análisis, prevención y acompañamiento legal continuo.",
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
