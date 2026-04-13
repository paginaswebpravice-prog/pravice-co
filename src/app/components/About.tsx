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
              Firma de abogados especializados en Bogotá y Colombia que
              <span>
                {" "}
                transforma desafíos legales en soluciones jurídicas sólidas
              </span>
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
            somos una
            <strong>
              firma de abogados especializados en Bogotá y Colombia
            </strong>
            , enfocada en derecho empresarial, derecho comercial, recuperación
            de cartera, cobro prejurídico, cobro jurídico y asesoría legal para
            empresas y personas. Brindamos soluciones jurídicas integrales
            orientadas a la prevención de riesgos legales, la protección del
            patrimonio y la solución eficiente de conflictos legales y
            comerciales en Colombia.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro equipo de{" "}
            <strong>abogados especializados en Colombia</strong> combina
            experiencia jurídica, estrategia legal, transparencia y un enfoque
            orientado a<strong>resultados legales reales</strong>. Trabajamos
            con empresas y particulares en procesos de litigios, conciliación
            extrajudicial, contratos comerciales, derecho societario y
            recuperación de cartera vencida, ofreciendo acompañamiento legal
            permanente y soluciones jurídicas eficientes.
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
              <h3>Abogados especializados</h3>
              <p>
                Contamos con abogados especializados en derecho empresarial,
                derecho comercial, litigios, recuperación de cartera y asesoría
                corporativa en Bogotá y Colombia.
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
              <h3>Transparencia y acompañamiento legal</h3>
              <p>
                Brindamos asesoría legal con comunicación clara, seguimiento
                permanente y estrategias jurídicas adaptadas a cada empresa o
                persona en Colombia.
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
              <h3>Soluciones legales efectivas</h3>
              <p>
                Transformamos problemas legales en soluciones jurídicas
                eficientes mediante estrategias legales, conciliación, litigios
                y gestión de recuperación de cartera.
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
            Pravice Abogados es una firma de abogados en Bogotá, Colombia, con
            más de 25 años de experiencia en asesoría legal empresarial, derecho
            comercial, litigios, recuperación de cartera, cobro prejurídico y
            cobro jurídico. Nuestros abogados corporativos brindan servicios
            legales a empresas y personas en Colombia, ofreciendo soluciones
            jurídicas en contratos comerciales, conciliación extrajudicial,
            derecho societario, cumplimiento normativo y resolución de
            conflictos empresariales.
          </motion.p>
        </div>
      </section>
    </>
  );
}
