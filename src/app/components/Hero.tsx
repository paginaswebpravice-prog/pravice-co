"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLaptop,
  faShieldHalved,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Fondo decorativo */}

      <div className={styles.backgroundShapeOne}></div>
      <div className={styles.backgroundShapeTwo}></div>

      <div className={styles.container}>
        {/* CONTENIDO */}

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
          >
            <FontAwesomeIcon icon={faLaptop} />
            Plataforma de seguimiento de procesos
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
          >
            Consulta y haz seguimiento de tus procesos en LegalApp
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
          >
            Accede a LegalApp para consultar la información disponible sobre tus
            procesos de manera rápida, sencilla y desde cualquier lugar.
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
          >
            <motion.a
              href="https://legalapp.pravice.co/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
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

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link href="/#como-funciona" className={styles.secondaryBtn}>
                ¿Cómo funciona?
              </Link>
            </motion.div>
          </motion.div>

          {/* BENEFICIOS RÁPIDOS */}

          <motion.div
            className={styles.quickBenefits}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.6,
            }}
          >
            <div className={styles.quickBenefit}>
              <span className={styles.quickIcon}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>

              <span>Consulta tus procesos</span>
            </div>

            <div className={styles.quickBenefit}>
              <span className={styles.quickIcon}>
                <FontAwesomeIcon icon={faShieldHalved} />
              </span>

              <span>Acceso seguro</span>
            </div>
          </motion.div>
        </motion.div>

        {/* VISUAL DERECHO */}

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className={styles.dashboard}>
            <div className={styles.dashboardHeader}>
              <div className={styles.logoPlaceholder}>
                Legal<span>App</span>
              </div>

              <div className={styles.status}>
                <span></span>
                Plataforma en línea
              </div>
            </div>

            <div className={styles.dashboardBody}>
              <div className={styles.dashboardWelcome}>
                <span>LEGALAPP</span>

                <h2>
                  Consulta tus
                  <br />
                  procesos
                </h2>

                <p>
                  Accede a la información disponible de tus procesos desde un
                  solo lugar.
                </p>
              </div>

              <div className={styles.processPreview}>
                <div className={styles.processTop}>
                  <span>Mis procesos</span>

                  <span className={styles.processCount}>03</span>
                </div>

                <div className={styles.processLine}>
                  <span className={styles.processDot}></span>

                  <div>
                    <strong>Proceso jurídico</strong>
                    <small>Información disponible</small>
                  </div>
                </div>

                <div className={styles.processLine}>
                  <span className={styles.processDot}></span>

                  <div>
                    <strong>Proceso en seguimiento</strong>
                    <small>Consulta las actualizaciones</small>
                  </div>
                </div>

                <div className={styles.processLine}>
                  <span className={styles.processDot}></span>

                  <div>
                    <strong>Información del proceso</strong>
                    <small>Consulta en línea</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.dashboardFooter}>
              <span>Acceso desde cualquier lugar</span>

              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* INDICADOR */}

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
      >
        <span></span>
        Descubre cómo funciona
      </motion.div>
    </section>
  );
}
