"use client";

import styles from "../styles/About.module.css";
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    url: "https://pravice.co",
    foundingDate: "1998",
    description:
      "Pravice Abogados es una firma de abogados en Colombia especializada en asesoría jurídica para empresas y personas.",
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
        aria-label="Firma de abogados Pravice en Colombia"
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
              Firma de abogados en Colombia que{" "}
              <span>transforma desafíos legales en soluciones sólidas</span>
            </motion.h2>
          </header>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Desde <strong>1998</strong>, en <strong>Pravice Abogados</strong>{" "}
            brindamos <strong>servicios legales especializados</strong> para
            empresas y personas en Colombia.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro enfoque combina <strong>especialización jurídica</strong>,
            <strong> transparencia</strong> y una estrategia orientada a{" "}
            <strong>resultados reales</strong>.
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
              <h3>Especialización jurídica</h3>
              <p>
                Cada caso requiere conocimiento profundo. Contamos con abogados
                especialistas en diferentes áreas del derecho.
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
              <h3>Transparencia en cada proceso</h3>
              <p>
                Mantenemos comunicación clara con nuestros clientes durante todo
                el proceso legal.
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
              <h3>Resultados legales comprobados</h3>
              <p>
                Transformamos desafíos legales complejos en soluciones jurídicas
                efectivas para empresas y personas.
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
            Pravice Abogados es una firma de abogados en Colombia con más de 25
            años de experiencia en asesoría legal y recuperación de cartera.
          </motion.p>
        </div>
      </section>
    </>
  );
}
