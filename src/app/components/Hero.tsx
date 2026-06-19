"use client";

import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",

    name: "Pravice",

    description:
      "Firma jurídica y plataforma empresarial en Colombia especializada en derecho corporativo, cumplimiento normativo, contratos empresariales, recuperación de cartera y gestión legal preventiva.",

    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },

    url: "https://pravice.co",
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
        aria-label="Firma jurídica empresarial en Colombia"
      >
        <div className={styles.overlay}></div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={styles.badge}
          >
            Soluciones jurídicas para empresas en Colombia
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Firma jurídica para empresas en Colombia: derecho corporativo,
            cumplimiento normativo y gestión legal empresarial
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            En Pravice acompañamos empresas en Colombia mediante soluciones de
            derecho corporativo, cumplimiento normativo, gestión contractual,
            recuperación de cartera y fortalecimiento de procesos jurídicos
            empresariales orientados a la prevención de riesgos legales.
          </motion.p>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Pravice hace parte de un ecosistema jurídico empresarial
            complementado por nuestra{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              firma jurídica aliada
            </a>
            , especializada en litigios, representación judicial y servicios
            legales especializados en Colombia.
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
          Pravice es una firma jurídica empresarial en Colombia enfocada en
          derecho corporativo, cumplimiento normativo, contratos empresariales,
          recuperación de cartera, derecho societario, derecho comercial,
          gestión legal preventiva y fortalecimiento de procesos jurídicos para
          empresas. Nuestro objetivo es ayudar a las organizaciones a reducir
          riesgos legales, mejorar el cumplimiento normativo y fortalecer su
          estructura jurídica para crecer con mayor seguridad.
        </p>
      </section>
    </>
  );
}
