"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Services.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  faBalanceScale,
  faBarChart,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Metodología de atención jurídica de Pravice Abogados",
    description:
      "Proceso de acompañamiento y orientación jurídica desarrollado por Pravice Abogados en Colombia.",
  };

  const steps = [
    {
      icon: <FontAwesomeIcon icon={faPeopleCarry} />,
      title: "Diagnóstico jurídico y empresarial",
      text: "Analizamos la situación legal de la empresa para identificar riesgos, oportunidades de mejora y necesidades de cumplimiento normativo.",
    },

    {
      icon: <FontAwesomeIcon icon={faBarChart} />,
      title: "Diseño de estrategia legal",
      text: "Definimos acciones enfocadas en gestión contractual, protección empresarial, recuperación de cartera y fortalecimiento corporativo.",
    },

    {
      icon: <FontAwesomeIcon icon={faBalanceScale} />,
      title: "Implementación y seguimiento",
      text: "Realizamos seguimiento continuo para apoyar la ejecución de procesos jurídicos y la prevención de contingencias empresariales.",
    },
  ];

  const stats = [
    {
      number: "25+",
      title: "Años de experiencia jurídica",
      text: "Experiencia acompañando empresas y personas en distintos escenarios jurídicos.",
    },

    {
      number: "98",
      title: "Profesionales y aliados estratégicos",
      text: "Red de apoyo jurídico y profesionales especializados.",
    },

    {
      number: "Nacional",
      title: "Cobertura empresarial en Colombia",
      text: "Acompañamiento jurídico para clientes en distintas ciudades del país.",
    },

    {
      number: "Integral",
      title: "Acompañamiento empresarial",
      text: "Comunicación y acompañamiento durante el desarrollo del caso.",
    },
  ];

  return (
    <section
      className={styles.section}
      aria-labelledby="services-title"
      id="services"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}

        <motion.h2
          id="services-title"
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Soluciones jurídicas empresariales para prevenir riesgos y
          <span> fortalecer la gestión legal</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ayudamos a empresas en Colombia a fortalecer su gestión legal mediante
          estrategias de cumplimiento normativo, recuperación de cartera,
          derecho societario, derecho comercial y acompañamiento jurídico
          corporativo.
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

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginTop: "50px",
            maxWidth: "950px",
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          Pravice desarrolla soluciones orientadas a la gestión legal
          empresarial, cumplimiento normativo, recuperación de cartera, derecho
          comercial, derecho contractual y derecho societario en Colombia. Si
          buscas representación judicial especializada o servicios jurídicos
          avanzados, puedes consultar el{" "}
          <Link
            href="https://abogadosespecialistas.com.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            portal principal de Abogados Especialistas.
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
