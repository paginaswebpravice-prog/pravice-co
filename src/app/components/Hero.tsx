"use client";

import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Firma de Abogados",
    description:
      "Firma de abogados en Colombia especializada en asesoría legal para empresas y personas. Consulta tu caso con expertos legales.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Asesoría jurídica",
      "Consulta legal",
      "Representación legal",
      "Defensa jurídica",
    ],
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
        aria-label="Firma de abogados expertos en Colombia"
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
            Abogados especialistas en asesoría legal en Colombia
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Más de 25 años brindando <strong>soluciones jurídicas</strong> para
            empresas y personas. Nuestro equipo de{" "}
            <strong>abogados expertos</strong> te acompaña en cada proceso legal
            con profesionalismo, estrategia y resultados.
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
          </motion.div>
        </motion.div>

        <p className={styles.seoText}>
          Firma de abogados en Colombia especializada en derecho corporativo,
          civil, comercial y asesoría legal empresarial. Ofrecemos consultas
          jurídicas y representación legal para empresas y personas.
        </p>
      </section>
    </>
  );
}
