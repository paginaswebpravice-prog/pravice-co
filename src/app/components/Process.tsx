"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Process.module.css";
import Link from "next/link";
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
    name: "Proceso de acompañamiento legal en Pravice",
    description:
      "Proceso de orientación y acompañamiento jurídico de Pravice como firma aliada y de apoyo legal en Colombia.",
  };

  const steps = [
    {
      icon: <FontAwesomeIcon icon={faPeopleCarry} />,
      title: "Orientación inicial",
      text: "Analizamos el contexto general del caso para identificar necesidades jurídicas y definir posibles rutas de acompañamiento legal.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartBar} />,
      title: "Evaluación y estrategia",
      text: "Revisamos la información relevante para orientar al usuario sobre alternativas legales y escenarios aplicables.",
    },
    {
      icon: <FontAwesomeIcon icon={faBalanceScale} />,
      title: "Acompañamiento jurídico",
      text: "Brindamos apoyo y seguimiento jurídico según las necesidades particulares de cada caso y área del derecho.",
    },
  ];

  const stats = [
    {
      number: "25+",
      title: "Años de trayectoria",
      text: "Experiencia acompañando procesos jurídicos empresariales y particulares.",
    },
    {
      number: "Colombia",
      title: "Cobertura nacional",
      text: "Atención jurídica presencial y virtual en distintas ciudades del país.",
    },
    {
      number: "Empresas",
      title: "Acompañamiento corporativo",
      text: "Soporte legal preventivo y estratégico para organizaciones y negocios.",
    },
    {
      number: "Aliados",
      title: "Red profesional",
      text: "Trabajo conjunto con abogados y especialistas en diferentes áreas jurídicas.",
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
          Nuestro proceso de <span>acompañamiento legal</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice</strong> brindamos orientación jurídica y apoyo
          estratégico para empresas y personas en Colombia, trabajando de forma
          complementaria con abogados y especialistas aliados.
        </motion.p>

        {/* BACKLINK SEO */}

        <motion.div
          className={styles.referenceBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Si deseas conocer más sobre servicios jurídicos especializados,
            abogados expertos y diferentes áreas del derecho en Colombia, puedes
            visitar nuestro portal aliado:
          </p>

          <Link
            href="https://abogadosespecialistas.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.referenceLink}
          >
            abogadosespecialistas.com.co
          </Link>
        </motion.div>

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
