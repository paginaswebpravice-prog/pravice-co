"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Process.module.css";
import { motion } from "framer-motion";
import {
  faBalanceScale,
  faChartBar,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Proceso de asesoría legal en Pravice Abogados",
    description:
      "Metodología de trabajo de Pravice Abogados para analizar, planificar y resolver casos legales en Colombia.",
  };

  const steps = [
    {
      icon: <FontAwesomeIcon icon={faPeopleCarry} />,
      title: "Asesoría legal inicial",
      text: "Analizamos tu situación legal en detalle para comprender el contexto del caso, identificar riesgos jurídicos y determinar las posibles soluciones legales disponibles.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartBar} />,
      title: "Análisis jurídico y planificación estratégica",
      text: "Nuestro equipo estudia la normativa aplicable, los antecedentes del caso y la documentación relevante para diseñar una estrategia legal personalizada.",
    },
    {
      icon: <FontAwesomeIcon icon={faBalanceScale} />,
      title: "Gestión del proceso y resolución",
      text: "Representamos tus intereses mediante negociación, conciliación o acciones judiciales según sea necesario.",
    },
  ];

  const stats = [
    {
      number: "25+",
      title: "Años de experiencia legal",
      text: "Trayectoria asesorando empresas y personas en diversas áreas del derecho.",
    },
    {
      number: "98",
      title: "Aliados estratégicos",
      text: "Red de profesionales y especialistas jurídicos.",
    },
    {
      number: "40%",
      title: "Casos resueltos favorablemente",
      text: "Resultados obtenidos mediante estrategias jurídicas efectivas.",
    },
    {
      number: "100%",
      title: "Compromiso con cada cliente",
      text: "Acompañamiento integral durante todo el proceso.",
    },
  ];

  return (
    <section className={styles.section} aria-labelledby="process-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}

        <motion.h2
          id="process-title"
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestro proceso legal <span>paso a paso</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice Abogados</strong> seguimos una metodología clara y
          estratégica para brindar <strong>asesoría jurídica efectiva</strong>.
        </motion.p>

        {/* TIMELINE */}

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={styles.arrow}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
              >
                {step.icon}
              </motion.div>

              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* STATS */}

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.stat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <h3>{stat.number}</h3>

              <p className={styles.statTitle}>{stat.title}</p>

              <span>{stat.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
