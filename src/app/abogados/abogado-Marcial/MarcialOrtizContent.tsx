"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function MarcialOrtizContent() {
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
              src="/doc-marcialImage.jpg"
              alt="Marcial Ortiz abogado especialista en derecho laboral en Bogotá Colombia"
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
          <span className={styles.badge}>Pravice Abogados · Colombia</span>

          <div>
            <h1 className={styles.title}>Marcial Ortiz</h1>

            <p className={styles.role}>Especialista en Derecho Laboral</p>
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
              Marcial Ortiz Ballesteros hace parte del equipo jurídico de
              Pravice Abogados, enfocando su ejercicio profesional en Derecho
              Laboral, relaciones laborales y prevención de riesgos en entornos
              empresariales.
            </p>

            <p>
              Su trayectoria integra experiencia en consultoría, gestión humana
              y asesoría jurídica laboral, brindando acompañamiento estratégico
              a empresas y organizaciones en Colombia.
            </p>

            <p>
              Puedes conocer el{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-marcial-ortiz.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                perfil profesional de Marcial Ortiz en detalle
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
              Su enfoque se orienta a la prevención de conflictos laborales, el
              cumplimiento normativo y la construcción de estrategias jurídicas
              alineadas con la gestión humana y los objetivos organizacionales.
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
            name: "Marcial Ortiz",
            jobTitle: "Abogado especialista en derecho laboral",
            image: "https://pravice.co/doc-marcialImage.jpg",
            url: "https://pravice.co/abogados/abogado-Marcial",
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
              "Relaciones laborales",
              "Gestión humana",
              "Prevención de riesgos laborales",
            ],
          }),
        }}
      />
    </main>
  );
}
