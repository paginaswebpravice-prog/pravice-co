"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function AlbertoCastroContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        {/* FOTO */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/doc-alberto.jpg"
              alt="Alberto Castro abogado en Bogotá Colombia"
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* INFO */}
        <motion.div
          className={styles.infoSide}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Pravice Abogados</span>

          <h1 className={styles.title}>Alberto Castro</h1>

          <p className={styles.role}>Fundador</p>

          {/* PERFIL */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Perfil profesional</h2>

            <p>
              Fundador de la firma, se destaca como uno de los mejores
              conciliadores y expertos en gestión de cobros de la ciudad. Su
              habilidad para resolver disputas complejas con deudores de alto
              perfil lo ha convertido en un líder reconocido en la recuperación
              de activos. Con un enfoque práctico, directo y altamente efectivo,
              ha logrado obtener resultados inmediatos y satisfactorios para sus
              clientes, optimizando tiempo y recursos en cada negociación.
            </p>
          </motion.section>

          {/* ESPECIALIDADES */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Conciliación y resolución de disputas con deudores de alto
                  perfil.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Gestión de cobros y recuperación de activos para empresas.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Diseño de soluciones personalizadas para deudores que no
                  cumplen sus obligaciones.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ENFOQUE */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque de trabajo</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>•</span>
                <p>
                  Enfoque práctico, directo y orientado a resultados inmediatos.
                </p>
              </div>

              <div className={styles.item}>
                <span>•</span>
                <p>
                  Creación de estrategias hechas a la medida de las necesidades
                  de cada empresa.
                </p>
              </div>

              <div className={styles.item}>
                <span>•</span>
                <p>
                  Negociación y mediación para alcanzar acuerdos beneficiosos
                  para las empresas.
                </p>
              </div>

              <div className={styles.item}>
                <span>•</span>
                <p>
                  Compromiso con la eficacia y una gestión integral en la
                  recuperación de cartera y activos.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alberto Castro",
            jobTitle: "Abogado y Fundador",
            image: "https://pravice.co/doc-alberto.jpg",
            url: "https://pravice.co/abogados/abogado-Alberto",
            worksFor: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressCountry: "CO",
            },
            knowsAbout: [
              "Cobro jurídico",
              "Recuperación de cartera",
              "Conciliación",
              "Gestión de activos",
            ],
          }),
        }}
      />
    </main>
  );
}
