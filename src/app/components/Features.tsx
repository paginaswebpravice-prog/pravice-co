"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartLine,
  faFileLines,
  faBell,
  faUserShield,
  faClock,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Features.module.css";

const features = [
  {
    icon: faChartLine,
    title: "Consulta el estado de tu proceso",
    description:
      "Ingresa a LegalApp y consulta de forma clara el estado actual de los procesos jurídicos registrados en la plataforma.",
  },
  {
    icon: faFileLines,
    title: "Revisa la información de tu proceso",
    description:
      "Accede a la información disponible de tu proceso y consulta las actualizaciones que se hayan registrado.",
  },
  {
    icon: faBell,
    title: "Mantente al día con las novedades",
    description:
      "Consulta las novedades y movimientos registrados para conocer los avances relacionados con tu proceso.",
  },
  {
    icon: faUserShield,
    title: "Acceso privado y seguro",
    description:
      "Consulta la información asociada a tus procesos mediante un acceso personal diseñado para proteger tus datos.",
  },
  {
    icon: faClock,
    title: "Consulta cuando lo necesites",
    description:
      "LegalApp te permite consultar la información disponible de tus procesos sin depender de horarios de atención.",
  },
  {
    icon: faMobileScreenButton,
    title: "Accede desde cualquier dispositivo",
    description:
      "Consulta LegalApp desde computador, tablet o celular para revisar la información de tus procesos estés donde estés.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="funciones">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.eyebrow}>FUNCIONES DE LEGALAPP</span>

          <h2 className={styles.title}>
            Todo lo que necesitas para consultar tus procesos
          </h2>

          <p className={styles.description}>
            LegalApp centraliza la información de tus procesos jurídicos para
            que puedas consultar sus avances, novedades y datos relevantes de
            manera sencilla.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className={styles.card}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={feature.icon} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
