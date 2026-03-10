"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export default function ComoRecuperarCarteraMorosa() {
  return (
    <>
      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/Article"
      >
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title} itemProp="headline">
            Recuperación de cartera morosa: estrategias efectivas para empresas
          </h1>

          <meta
            itemProp="description"
            content="Artículo sobre recuperación de cartera morosa y estrategias efectivas para empresas."
          />

          <p className={styles.intro}>
            La recuperación de cartera morosa es uno de los mayores retos
            financieros para las empresas en Colombia y Latinoamérica. Cuando
            los clientes no pagan a tiempo, el flujo de caja se ve afectado y
            puede comprometer la estabilidad del negocio.
          </p>

          {/* Table of Contents SEO */}

          <nav className={styles.toc} aria-label="Tabla de contenido">
            <h2>Contenido</h2>

            <ul>
              <li>
                <a href="#cartera-morosa">¿Qué es la cartera morosa?</a>
              </li>
              <li>
                <a href="#estrategias">
                  Estrategias efectivas para recuperar cartera
                </a>
              </li>
              <li>
                <a href="#conclusion">Conclusión</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        <motion.section
          id="cartera-morosa"
          className={styles.section}
          {...fadeSection}
        >
          <h2>¿Qué es la cartera morosa?</h2>

          <p>
            Se considera cartera morosa cuando una deuda supera el plazo de pago
            acordado entre la empresa y el cliente.
          </p>
        </motion.section>

        <motion.section
          id="estrategias"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Estrategias efectivas para recuperar cartera</h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>1. Comunicación temprana con el cliente</h3>
            <p>
              Contactar al cliente antes de que la deuda se vuelva crítica
              permite encontrar soluciones amistosas.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>2. Automatizar recordatorios de pago</h3>
            <p>
              El uso de sistemas automáticos ayuda a enviar recordatorios y
              mantener un seguimiento constante.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>3. Ofrecer acuerdos de pago</h3>
            <p>
              Muchas veces los clientes sí desean pagar pero necesitan
              facilidades.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>4. Utilizar conciliación extrajudicial</h3>
            <p>
              La conciliación permite resolver conflictos de pago sin llegar a
              procesos judiciales largos.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>5. Apoyo de expertos en cobranzas</h3>
            <p>
              Contar con especialistas mejora la recuperación de cartera y
              reduce el riesgo financiero.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          id="conclusion"
          className={styles.conclusion}
          {...fadeSection}
        >
          <h2>Conclusión</h2>

          <p>
            Una estrategia integral de gestión de cartera permite mantener la
            estabilidad financiera de cualquier empresa.
          </p>
        </motion.section>
      </article>

      {/* Schema SEO */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Recuperación de cartera morosa: estrategias efectivas para empresas",
            description:
              "Artículo sobre recuperación de cartera morosa y estrategias efectivas para empresas.",
            author: {
              "@type": "Organization",
              name: "Centro de Conciliación",
            },
            publisher: {
              "@type": "Organization",
              name: "Centro de Conciliación",
            },
          }),
        }}
      />
    </>
  );
}
