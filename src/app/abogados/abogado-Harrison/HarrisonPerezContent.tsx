"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function HarrisonPerezContent() {
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
              src="/doc-harrisonImage.jpg"
              alt="Harrison Pérez abogado en Bogotá Colombia"
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
            <h1 className={styles.title}>Harrison Pérez</h1>

            <p className={styles.role}>
              Especialista en Derecho Laboral, Comercial y de Familia
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
              Harrison Pérez forma parte del equipo de Pravice Abogados,
              enfocando su práctica profesional en derecho laboral, comercial,
              seguridad social y derecho de familia, acompañando tanto a
              personas como a empresas en diferentes escenarios jurídicos y
              consultivos.
            </p>

            <p>
              Su experiencia se orienta al análisis estratégico de conflictos y
              la construcción de soluciones jurídicas claras, preventivas y
              ajustadas a las necesidades de cada cliente.
            </p>

            <p>
              Puedes conocer el{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-harrison-perez.html"
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
              la reducción de riesgos y la resolución efectiva de conflictos.
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
            name: "Harrison Pérez",
            jobTitle:
              "Abogado especialista en derecho laboral, comercial y de familia",
            image: "https://pravice.co/doc-harrisonImage.jpg",
            url: "https://pravice.co/abogados/abogado-Harrison",
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
              "Derecho comercial",
              "Derecho de familia",
              "Seguridad social",
              "Asesoría jurídica empresarial",
            ],
          }),
        }}
      />
    </main>
  );
}
