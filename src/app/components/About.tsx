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
      "Plataforma y equipo jurídico orientado al acompañamiento legal y gestión de servicios jurídicos en Colombia.",
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
        aria-label="Pravice plataforma jurídica en Colombia"
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
              Acompañamiento jurídico y gestión legal con
              <span> visión estratégica y enfoque corporativo</span>
            </motion.h2>
          </header>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Desde 1998, Pravice desarrolla soluciones orientadas al
            acompañamiento jurídico, seguimiento de procesos y apoyo legal para
            empresas y personas en Colombia, integrando experiencia profesional,
            atención personalizada y herramientas de gestión legal.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro enfoque combina organización jurídica, acompañamiento
            estratégico y atención profesional en diferentes áreas legales,
            facilitando procesos de gestión, orientación y soporte corporativo.
            Además, contamos con una{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              firma jurídica de referencia
            </a>{" "}
            que integra parte del equipo profesional y áreas de práctica
            relacionadas.
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
              <h3>Acompañamiento profesional</h3>

              <p>
                Impulsamos procesos de apoyo jurídico y atención profesional con
                un enfoque cercano, estratégico y orientado a soluciones.
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
              <h3>Gestión y seguimiento legal</h3>

              <p>
                Facilitamos herramientas y procesos orientados a la
                organización, seguimiento y acompañamiento de asuntos jurídicos
                y corporativos.
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
              <h3>Soporte jurídico corporativo</h3>

              <p>
                Trabajamos con una visión preventiva y estratégica para apoyar
                procesos legales, comerciales y organizacionales en Colombia.
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
            Pravice es una plataforma orientada al acompañamiento jurídico,
            gestión legal y soporte corporativo en Colombia, integrando atención
            profesional, seguimiento de procesos y herramientas de apoyo legal
            para personas y empresas.
          </motion.p>
        </div>
      </section>
    </>
  );
}
