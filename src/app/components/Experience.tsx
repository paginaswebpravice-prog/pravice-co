"use client";

import styles from "../styles/Experience.module.css";
import { motion } from "framer-motion";

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
          Firma jurídica con más de 25 años de experiencia en Colombia
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          En Pravice acompañamos empresas, emprendedores y personas mediante
          consultoría legal, acompañamiento jurídico corporativo y gestión de
          riesgos legales en Colombia, con más de 25 años de experiencia.
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
              title: "Asesoría jurídica para empresas",
              text: "Apoyamos empresas en procesos de consultoría legal, cumplimiento normativo, contratación y toma de decisiones jurídicas estratégicas.",
            },

            {
              title: "Atención jurídica en toda Colombia",
              text: "Prestamos acompañamiento legal para empresas y personas en Bogotá, Medellín, Cali, Barranquilla y demás ciudades del país.",
            },

            {
              title: "Prevención y gestión de riesgos legales",
              text: "Ayudamos a identificar riesgos jurídicos, contractuales, laborales y corporativos antes de que se conviertan en conflictos o contingencias para la organización.",
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
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: "40px",
            maxWidth: "950px",
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          Pravice es una firma jurídica en Colombia con experiencia en derecho
          corporativo, derecho comercial, derecho contractual, cumplimiento
          normativo, recuperación de cartera y asesoría legal empresarial.
          Nuestro enfoque está orientado a la prevención de riesgos y al
          acompañamiento estratégico de empresas y organizaciones.
        </motion.p>
      </div>
    </section>
  );
}
