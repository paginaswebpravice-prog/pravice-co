"use client";

import styles from "../styles/About.module.css";
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    foundingDate: "1998",
    description:
      "Plataforma jurídica y corporativa en Colombia especializada en acompañamiento legal empresarial, gestión jurídica y soporte para organizaciones.",
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
        className={styles.section}
        id="about"
        aria-label="Pravice plataforma jurídica empresarial en Colombia"
      >
        <div className={styles.container}>
          <header>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Plataforma jurídica para empresas en Colombia con
              <span> más de 25 años de experiencia</span>
            </motion.h2>
          </header>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Desde 1998, Pravice acompaña a empresas y organizaciones mediante
            soluciones jurídicas, herramientas de gestión legal, seguimiento de
            procesos y orientación especializada en distintas áreas del derecho
            empresarial en Colombia.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro enfoque combina tecnología, organización jurídica y
            acompañamiento estratégico para ayudar a empresas a gestionar
            riesgos legales, fortalecer procesos internos y mejorar la toma de
            decisiones corporativas. Además, contamos con una{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              firma jurídica especializada
            </a>{" "}
            que presta servicios de representación judicial y asesoría legal en
            áreas específicas del derecho colombiano.
          </motion.p>

          <div className={styles.cards}>
            <motion.article
              className={styles.card}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Gestión jurídica empresarial</h3>

              <p>
                Facilitamos procesos de organización legal, seguimiento de
                asuntos corporativos y administración documental para empresas
                en Colombia.
              </p>
            </motion.article>

            <motion.article
              className={styles.card}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Acompañamiento legal estratégico</h3>

              <p>
                Apoyamos la toma de decisiones mediante orientación jurídica,
                análisis preventivo de riesgos y soporte profesional para
                organizaciones.
              </p>
            </motion.article>

            <motion.article
              className={styles.card}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3>Tecnología aplicada al derecho</h3>

              <p>
                Integramos herramientas digitales para mejorar el seguimiento de
                procesos, la gestión documental y la comunicación jurídica con
                nuestros clientes.
              </p>
            </motion.article>
          </div>

          <motion.p
            className={styles.seoText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Pravice es una plataforma jurídica empresarial en Colombia enfocada
            en gestión legal, tecnología aplicada al derecho, seguimiento de
            procesos, cumplimiento normativo y apoyo corporativo para empresas.
            Nuestro objetivo es facilitar el acceso a herramientas jurídicas,
            información especializada y acompañamiento profesional para
            organizaciones que buscan fortalecer su seguridad jurídica y
            optimizar sus procesos legales.
          </motion.p>
        </div>
      </section>
    </>
  );
}
