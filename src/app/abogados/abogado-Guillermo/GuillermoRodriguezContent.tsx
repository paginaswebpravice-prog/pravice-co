"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function GuillermoRodriguezContent() {
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
              src="/doc-guillermoImage.jpg"
              alt="Guillermo Rodríguez abogado en Bogotá Colombia"
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
          <span className={styles.badge}>Pravice Abogados</span>

          <div>
            <h1 className={styles.title}>Guillermo Rodríguez</h1>

            <p className={styles.role}>
              Especialista en Derecho Laboral y Derecho de Familia
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
              Guillermo Rodríguez forma parte del equipo de Pravice Abogados,
              enfocando su práctica profesional en derecho laboral, seguridad
              social y derecho de familia, acompañando tanto a personas como a
              empresas en procesos jurídicos y consultivos.
            </p>

            <p>
              Su experiencia se orienta al manejo estratégico de conflictos
              laborales y familiares, priorizando soluciones claras, prácticas y
              ajustadas a las necesidades de cada caso.
            </p>

            <p>
              Puedes conocer el{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-guillermo-rodriguez.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                perfil profesional del abogado en detalle
              </a>
              .
            </p>
          </motion.section>

          {/* ENFOQUE PROFESIONAL */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque profesional</h2>

            <p>
              Su trabajo se caracteriza por un acompañamiento jurídico cercano,
              preventivo y estratégico, enfocado en la protección de derechos,
              la estabilidad jurídica y la resolución efectiva de conflictos.
            </p>
          </motion.section>
        </motion.div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Guillermo Rodríguez",
            jobTitle:
              "Abogado especialista en derecho laboral y derecho de familia",
            image: "https://pravice.co/doc-guillermoImage.jpg",
            url: "https://pravice.co/abogados/abogado-Guillermo",
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
              "Derecho laboral",
              "Derecho de familia",
              "Seguridad social",
              "Litigios laborales",
              "Procesos familiares",
            ],
          }),
        }}
      />
    </main>
  );
}
