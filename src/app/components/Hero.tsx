"use client";

import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pravice",
    description:
      "Plataforma y equipo jurídico de apoyo orientado al acompañamiento legal y gestión de servicios jurídicos en Colombia.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <section
        className={styles.hero}
        id="hero"
        aria-label="Pravice plataforma jurídica en Colombia"
      >
        <div className={styles.overlay}></div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Acompañamiento jurídico y gestión legal en Colombia
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            En Pravice impulsamos soluciones de apoyo jurídico, seguimiento de
            procesos y acompañamiento profesional para personas y empresas en
            Colombia mediante herramientas legales y atención especializada.
          </motion.p>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Conoce también nuestra{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              firma jurídica de referencia
            </a>{" "}
            y el equipo profesional que integra nuestra red de apoyo legal.
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://legalapp.pravice.co/login.php"
                className={styles.primaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar mi caso
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://drive.google.com/file/d/1IIEGEpqNm_FiPhvKKWBSnr_iLbDXcBWV/view"
                className={styles.secondaryBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conoce Legal App
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://wa.me/573114659315"
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta por WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <p className={styles.seoText}>
          Pravice es una plataforma de apoyo y acompañamiento jurídico en
          Colombia orientada a la gestión legal, seguimiento de procesos y
          atención profesional para personas y empresas.
        </p>
      </section>
    </>
  );
}
