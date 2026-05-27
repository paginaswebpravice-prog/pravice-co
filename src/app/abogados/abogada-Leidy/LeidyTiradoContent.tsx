"use client";

import { motion } from "framer-motion";
import styles from "../AbogadoProfile.module.css";

export default function LeidyTiradoContent() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* IMAGE */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/doc-leidyImage.jpg"
              alt="Leidy Tirado en Bogotá Colombia"
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* INFO */}
        <motion.div
          className={styles.infoSide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Pravice Abogados</span>

          <div>
            <h1 className={styles.title}>Leidy Tirado</h1>
            <p className={styles.role}>Directora área comercial</p>
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
              Leidy Tirado forma parte del equipo de Pravice Abogados como
              directora del área comercial, enfocada en el acompañamiento a
              empresas en la estructuración de relaciones contractuales, gestión
              de cartera y prevención de riesgos legales en el ámbito
              empresarial.
            </p>

            <p>
              Su enfoque está orientado a la toma de decisiones jurídicas con
              visión comercial, apoyando la operación de empresas en Colombia
              con soluciones prácticas y estratégicas.
            </p>

            <p>
              Para conocer más sobre su trayectoria y experiencia profesional,
              puedes consultar el{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-leidy-tirado.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                perfil profesional de la abogada en detalle
              </a>
              .
            </p>
          </motion.section>

          {/* ENFOQUE PROFESIONAL (CORTO) */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque profesional</h2>

            <p>
              Su trabajo se centra en la gestión jurídica empresarial con un
              enfoque preventivo, claro y orientado a resultados, facilitando la
              toma de decisiones en entornos comerciales dinámicos.
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
            name: "Leidy Tirado",
            jobTitle: "Directora área comercial",
            image: "https://pravice.co/doc-leidyImage.jpg",
            url: "https://pravice.co/abogados/abogada-Leidy",
            worksFor: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bogotá",
              addressCountry: "CO",
            },
            areaServed: "Colombia",
            knowsAbout: [
              "Derecho comercial",
              "Recuperación de cartera",
              "Contratos empresariales",
              "Protección al consumidor",
            ],
          }),
        }}
      />
    </main>
  );
}
