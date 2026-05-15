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
              alt="Santiago Franco abogado especialista en derecho penal y compliance en Bogotá Colombia"
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
            <p className={styles.role}>Especialista en Derecho Penal</p>
          </div>

          {/* DESCRIPCIÓN */}
          <div className={styles.card}>
            <h2>Perfil profesional</h2>

            <p>
              Abogado con sólida trayectoria en Derecho Penal, Derecho Penal
              Militar, Derecho Informático y Compliance. Especialista en
              prevención, detección y gestión de riesgos legales asociados a
              delitos económicos y tecnológicos, con formación académica
              nacional e internacional que respalda su enfoque estratégico y
              técnico.
            </p>

            <br />

            <p>
              Ha liderado litigios penales de alta complejidad, representando a
              personas naturales y jurídicas en asuntos de alta sensibilidad
              jurídica y reputacional.
            </p>
          </div>

          {/* ÁREAS */}
          <div className={styles.card}>
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>⚖</span>
                <p>Derecho Penal y Derecho Penal Militar.</p>
              </div>

              <div className={styles.item}>
                <span>🛡</span>
                <p>
                  Delitos económicos y tecnológicos (fraude, cibercrimen, uso
                  indebido de información, etc.)
                </p>
              </div>

              <div className={styles.item}>
                <span>💻</span>
                <p>
                  Derecho Informático y responsabilidad penal derivada del uso
                  de tecnologías.
                </p>
              </div>

              <div className={styles.item}>
                <span>📑</span>
                <p>
                  Diseño e implementación de programas de Compliance y
                  cumplimiento normativo.
                </p>
              </div>

              <div className={styles.item}>
                <span>🏢</span>
                <p>
                  Gestión de riesgos legales corporativos y asesoría preventiva
                  para empresas.
                </p>
              </div>
            </div>
          </div>

          {/* ENFOQUE */}
          <div className={styles.card}>
            <h2>Enfoque de trabajo</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Enfoque estratégico y técnico en litigios penales de alta
                  complejidad.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Prevención y gestión de riesgos mediante programas de
                  compliance ajustados a estándares internacionales.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Acompañamiento integral a personas y empresas en
                  investigaciones y procesos penales.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Integración de su sólida formación académica (Pontificia
                  Universidad Javeriana, Universidad Sergio Arboleda, LL.M. en
                  California Western School of Law, formación en Compliance con
                  ADEN School of Business y George Washington University) para
                  ofrecer soluciones jurídicas de alto nivel.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Santiago Franco",
            jobTitle: "Abogado especialista en derecho penal y compliance",
            image: "https://pravice.co/doc-santiagoImage.jpg",
            description:
              "Abogado especialista en derecho penal, compliance, delitos económicos, derecho informático y gestión de riesgos legales corporativos.",
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
