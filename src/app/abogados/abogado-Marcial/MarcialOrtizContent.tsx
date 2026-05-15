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
              src="/doc-marcial.jpg"
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

          {/* PERFIL */}
          <div className={styles.card}>
            <h2>Perfil profesional</h2>

            <p>
              Abogado de la Universidad Militar Nueva Granada, especialista en
              Derecho Laboral por la Pontificia Universidad Javeriana y Magíster
              en Prevención de Riesgos Laborales por la Universidad
              Internacional de La Rioja (España).
            </p>

            <br />

            <p>
              Marcial Ortiz Ballesteros cuenta con amplia experiencia como
              Director de Recursos Humanos, consultor empresarial, litigante y
              docente universitario, integrando la práctica jurídica laboral con
              la gestión estratégica del talento humano y la prevención de
              riesgos en entornos organizacionales.
            </p>
          </div>

          {/* ÁREAS */}
          <div className={styles.card}>
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>⚖</span>

                <p>Derecho Laboral individual y colectivo.</p>
              </div>

              <div className={styles.item}>
                <span>👥</span>

                <p>Gestión de Recursos Humanos y relaciones laborales.</p>
              </div>

              <div className={styles.item}>
                <span>⚠</span>

                <p>Prevención de riesgos laborales y salud en el trabajo.</p>
              </div>

              <div className={styles.item}>
                <span>📑</span>

                <p>
                  Consultoría empresarial en cumplimiento normativo laboral.
                </p>
              </div>

              <div className={styles.item}>
                <span>🎓</span>

                <p>
                  Formación, capacitación y conferencias en temas laborales de
                  actualidad.
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
                  Integración de la perspectiva jurídica y la gestión humana
                  para prevenir conflictos laborales.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Diseño de estrategias laborales alineadas con la normatividad
                  vigente y los objetivos de la organización.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Acompañamiento técnico a empresas y firmas de abogados en
                  casos complejos y en la toma de decisiones estratégicas.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Formación continua a través de docencia y conferencias,
                  aportando actualización y claridad en materia laboral.
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
            name: "Marcial Ortiz",
            jobTitle: "Abogado especialista en derecho laboral",
            image: "https://pravice.co/PERFIL%20MARCIAL%20ORTIZ.jpg",
            description:
              "Abogado especialista en derecho laboral, recursos humanos y prevención de riesgos laborales en Bogotá Colombia.",
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
          }),
        }}
      />
    </main>
  );
}
