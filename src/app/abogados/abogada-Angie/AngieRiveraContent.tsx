"use client";

// app/abogados/angie-rivera/AngieRiveraContent.tsx

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../AbogadoProfile.module.css";

export default function AngieRiveraContent() {
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
              src="/PERFIL ANGIE RIVERA (1).jpg"
              alt="Angie Rivera abogada en Bogotá Colombia"
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
            <h1 className={styles.title}>Angie Rivera</h1>

            <p className={styles.role}>Abogada</p>
          </div>

          {/* ================= DESCRIPCIÓN ================= */}

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Perfil profesional</h2>

            <p>
              Abogada experta en gestión de cartera, conciliaciones y acuerdos
              de pago. Se ha posicionado como especialista en derecho comercial
              y procesos ejecutivos. Con una destacada trayectoria en la
              recuperación de activos y la resolución de conflictos financieros,
              se ha consolidado como un referente en la creación de estrategias
              efectivas que permiten a las empresas recuperar su liquidez de
              manera eficiente y sin complicaciones.
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

                <p>Gestión de cartera y recuperación de activos.</p>
              </div>

              <div className={styles.item}>
                <span>🤝</span>

                <p>Conciliaciones y acuerdos de pago.</p>
              </div>

              <div className={styles.item}>
                <span>📄</span>

                <p>Derecho comercial y procesos ejecutivos.</p>
              </div>

              <div className={styles.item}>
                <span>🏛</span>

                <p>Resolución de conflictos financieros para empresas.</p>
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

                <p>Enfoque práctico y personalizado para cada caso.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>Enfoque práctico y personalizado para cada caso.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Compromiso con el éxito empresarial de sus clientes,
                  optimizando la gestión de cobros y asegurando soluciones
                  estratégicas alineadas con los objetivos de cada empresa.
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
            name: "Angie Rivera",
            image: "https://pravice.co/PERFIL%20ANGIE%20RIVERA%20(1).jpg",
            jobTitle: "Abogada",
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
            url: "https://pravice.co/abogados/angie-rivera",
            knowsAbout: [
              "Recuperación de cartera",
              "Derecho comercial",
              "Procesos ejecutivos",
              "Conciliaciones",
              "Acuerdos de pago",
            ],
          }),
        }}
      />
    </main>
  );
}
