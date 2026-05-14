"use client";

// app/abogados/leidy-tirado/LeidyTiradoContent.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../AbogadoProfile.module.css";

export default function LeidyTiradoContent() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* ================= IMAGE ================= */}

        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/PERFIL LEIDY TIRADO (1).jpg"
              alt="Leidy Tirado directora área comercial en Bogotá Colombia"
              width={700}
              height={1200}
              priority
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* ================= INFO ================= */}

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

          {/* ================= PERFIL ================= */}

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Perfil profesional</h2>

            <p>
              Abogada de la Universidad Militar, experta en gestión comercial,
              con un profundo conocimiento de la Ley 1480 de 2011 (Estatuto del
              Consumidor) y garantías mobiliarias. Orientada a apoyar a los
              empresarios colombianos, ayudándolos a cumplir con las
              regulaciones comerciales, proteger sus derechos y optimizar sus
              operaciones, en un entorno legal dinámico.
            </p>
          </motion.div>

          {/* ================= ÁREAS ================= */}

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>⚖</span>

                <p>Derecho comercial y empresarial.</p>
              </div>

              <div className={styles.item}>
                <span>🛡</span>

                <p>Protección al consumidor.</p>
              </div>

              <div className={styles.item}>
                <span>💼</span>

                <p>Recuperación de cartera y cobro jurídico.</p>
              </div>

              <div className={styles.item}>
                <span>📄</span>

                <p>Diseño y revisión de contratos comerciales.</p>
              </div>
            </div>
          </motion.div>

          {/* ================= ENFOQUE ================= */}

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque de trabajo</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>✓</span>

                <p>Visión jurídica con criterio comercial.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>Lenguaje claro para gerencias y equipos comerciales.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Orientada a resultados y prevención de litigios innecesarios.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Leidy Tirado",
            image: "https://pravice.co/PERFIL%20LEIDY%20TIRADO%20(1).jpg",
            jobTitle: "Directora área comercial",
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
            url: "https://pravice.co/abogados/leidy-tirado",
            knowsAbout: [
              "Derecho comercial",
              "Recuperación de cartera",
              "Protección al consumidor",
              "Cobro jurídico",
              "Contratos comerciales",
            ],
          }),
        }}
      />
    </main>
  );
}
