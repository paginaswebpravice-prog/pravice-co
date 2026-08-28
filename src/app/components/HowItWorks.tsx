"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faRightToBracket,
  faMagnifyingGlass,
  faFileCircleCheck,
  faBell,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/HowItWorks.module.css";

const steps = [
  {
    number: "01",
    icon: faRightToBracket,
    title: "Ingresa a LegalApp",
    description:
      "Accede a la plataforma utilizando tus datos de ingreso para consultar la información disponible de tus procesos.",
  },
  {
    number: "02",
    icon: faMagnifyingGlass,
    title: "Busca tu proceso",
    description:
      "Encuentra dentro de LegalApp el proceso que deseas consultar y accede a la información registrada.",
  },
  {
    number: "03",
    icon: faFileCircleCheck,
    title: "Consulta los avances",
    description:
      "Revisa el estado del proceso, la información disponible y las novedades que hayan sido registradas.",
  },
  {
    number: "04",
    icon: faBell,
    title: "Mantente informado",
    description:
      "Ingresa periódicamente para consultar las nuevas actualizaciones y conocer los avances de tu proceso.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="como-funciona">
      <div className={styles.container}>
        {/* HEADER */}

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.eyebrow}>¿CÓMO FUNCIONA?</span>

          <h2 className={styles.title}>Consulta tus procesos en pocos pasos</h2>

          <p className={styles.description}>
            LegalApp está diseñada para que puedas acceder fácilmente a la
            información disponible de tus procesos jurídicos y consultar sus
            avances desde un solo lugar.
          </p>
        </motion.div>

        {/* STEPS */}

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
            >
              {/* NUMBER */}

              <div className={styles.number}>{step.number}</div>

              {/* ICON */}

              <motion.div
                className={styles.icon}
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                }}
                transition={{ duration: 0.25 }}
              >
                <FontAwesomeIcon icon={step.icon} />
              </motion.div>

              {/* CONTENT */}

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {/* CONNECTOR */}

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          className={styles.action}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            ¿Ya tienes acceso a LegalApp? Consulta ahora la información de tus
            procesos.
          </p>

          <motion.a
            href="https://legalapp.pravice.co/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Ingresar a LegalApp
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
