"use client";

import styles from "../AbogadoProfile.module.css";
import { motion } from "framer-motion";

export default function AlbertoCastroContent() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* IMAGE */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/doc-albertoImage.jpg"
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

          <p className={styles.role}>Abogado & Fundador</p>

          {/* ================= CARTA DE PRESENTACIÓN ================= */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Presentación profesional</h2>

            <p>
              Alberto Castro es abogado y fundador de Pravice Abogados, con
              experiencia en conciliación y gestión de cobros empresariales en
              Bogotá, Colombia.
            </p>

            <p>
              Su enfoque se centra en la resolución estratégica de conflictos
              financieros y en la estructuración de acuerdos que permitan a las
              empresas recuperar cartera de forma eficiente.
            </p>

            <p>
              Puedes ver su perfil completo en la firma aquí:{" "}
              <a
                href={
                  "https://abogadosespecialistas.com.co/abogados/abogados-alberto-castro.html"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Abogados Especialistas - Alberto Castro
              </a>
            </p>
          </motion.section>

          {/* ================= ENFOQUE PROFESIONAL ================= */}
          <motion.section
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Enfoque profesional</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>•</span>
                <p>Resolución estratégica de conflictos empresariales.</p>
              </div>

              <div className={styles.item}>
                <span>•</span>
                <p>Negociación y conciliación orientada a resultados.</p>
              </div>

              <div className={styles.item}>
                <span>•</span>
                <p>
                  Recuperación eficiente de cartera y activos empresariales.
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </section>

      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Alberto Castro",
            jobTitle: "Abogado y Fundador",
            image: "https://pravice.co/doc-albertoImage.jpg",
            worksFor: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            knowsAbout: [
              "Conciliación",
              "Recuperación de cartera",
              "Cobro jurídico",
              "Gestión de activos",
            ],
          }),
        }}
      />
    </main>
  );
}
