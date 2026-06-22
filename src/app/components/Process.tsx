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
      title: "Diagnóstico y orientación jurídica inicial",
      text: "Analizamos la situación jurídica de la empresa o persona, identificando riesgos, necesidades y posibles alternativas de actuación.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartBar} />,
      title: "Análisis legal y definición de estrategia",
      text: "Revisamos documentos, antecedentes y contexto jurídico para definir una ruta de trabajo alineada con los objetivos del caso.",
    },
    {
      icon: <FontAwesomeIcon icon={faBalanceScale} />,
      title: "Seguimiento y acompañamiento continuo",
      text: "Brindamos apoyo permanente durante el desarrollo del proceso, facilitando seguimiento, comunicación y gestión jurídica.",
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
      title: "Atención jurídica en Colombia",
      text: "Atención presencial y virtual para empresas y personas en Bogotá y diferentes ciudades del país.",
    },
    {
      number: "Empresas",
      title: "Consultoría legal empresarial",
      text: "Apoyo jurídico para empresas en temas corporativos, contractuales, comerciales y de cumplimiento normativo.",
    },
    {
      number: "Aliados",
      title: "Red de abogados especializados",
      text: "Acceso a profesionales con experiencia en diferentes áreas jurídicas según las necesidades de cada caso.",
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
          Proceso de asesoría y acompañamiento jurídico en Colombia
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice</strong> desarrollamos procesos de consultoría
          legal, acompañamiento jurídico empresarial y orientación legal para
          personas y organizaciones en Colombia, apoyándonos en una red de
          abogados y especialistas en distintas áreas del derecho.
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
            Si buscas representación judicial, abogados especialistas o
            servicios jurídicos enfocados en áreas específicas del derecho
            colombiano, puedes consultar nuestro portal aliado:
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
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: "50px",
            maxWidth: "950px",
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          Nuestro proceso de acompañamiento jurídico está diseñado para
          empresas, emprendedores y personas que requieren orientación legal,
          consultoría jurídica, gestión de riesgos y apoyo estratégico en
          Colombia. Trabajamos en coordinación con profesionales especializados
          para ofrecer soluciones ajustadas a cada necesidad.
        </motion.p>
      </div>
    </section>
  );
}
