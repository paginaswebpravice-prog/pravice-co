"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function SantiagoFrancoContent() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* IMAGE SIDE */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/doc-santiagoImage.jpg"
              alt="Santiago Franco abogado en Bogotá Colombia"
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* INFO SIDE */}
        <motion.div
          className={styles.infoSide}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>
            Pravice Abogados · Bogotá Colombia
          </span>

          <div>
            <h1 className={styles.title}>Santiago Franco</h1>

            <p className={styles.role}>
              Especialista en Derecho Penal y Compliance
            </p>
          </div>

          {/* CARTA DE PRESENTACIÓN */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Carta de presentación</h2>

            <p>
              Santiago Franco forma parte del equipo jurídico de Pravice
              Abogados, enfocando su práctica profesional en Derecho Penal,
              Compliance y gestión estratégica de riesgos legales para personas
              y empresas.
            </p>

            <p>
              Su experiencia integra litigio penal, prevención de contingencias
              jurídicas y acompañamiento corporativo en escenarios de alta
              sensibilidad legal y reputacional.
            </p>

            <p>
              Puede conocer el perfil profesional del abogado en detalle en
              nuestra{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-santiago-franco.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                página institucional de referencia
              </a>
              .
            </p>
          </motion.section>

          {/* ENFOQUE */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque profesional</h2>

            <p>
              Su enfoque profesional se orienta a la prevención de riesgos,
              análisis estratégico de conflictos penales y acompañamiento
              jurídico corporativo con una visión técnica, preventiva y enfocada
              en soluciones efectivas.
            </p>
          </motion.section>
        </motion.div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Santiago Franco",
            jobTitle: "Especialista en Derecho Penal y Compliance",
            image: "https://pravice.co/doc-santiagoImage.jpg",
            url: "https://pravice.co/abogados/abogado-Santiago",
            worksFor: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressCountry: "CO",
            },
          }),
        }}
      />
    </main>
  );
}
