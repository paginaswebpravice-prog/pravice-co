// app/abogados/guillermo-rodriguez/GuillermoRodriguezContent.tsx

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
              alt="Guillermo Rodríguez abogado especialista en derecho laboral y derecho de familia en Bogotá Colombia"
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
            <h1 className={styles.title}>Guillermo Rodríguez</h1>

            <p className={styles.role}>
              Especialista en Derecho Laboral y Derecho de Familia
            </p>
          </div>

          {/* PERFIL */}
          <div className={styles.card}>
            <h2>Perfil profesional</h2>

            <p>
              Abogado especializado en Derecho Laboral, Seguridad Social y
              Derecho de Familia, con más de 10 años de experiencia asesorando y
              representando personas y empresas en escenarios judiciales y
              extrajudiciales.
            </p>

            <br />

            <p>
              Su trayectoria profesional se ha caracterizado por un enfoque
              técnico, estratégico y humano, permitiéndole acompañar tanto a
              empleadores y trabajadores como a familias en la resolución de
              conflictos complejos, priorizando siempre la protección de los
              derechos, la estabilidad jurídica y la búsqueda de soluciones
              efectivas.
            </p>
          </div>

          {/* ESPECIALIDADES */}
          <div className={styles.card}>
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>⚖</span>
                <p>
                  Derecho Laboral individual y colectivo, asesoría preventiva y
                  litigios laborales.
                </p>
              </div>

              <div className={styles.item}>
                <span>🛡</span>
                <p>
                  Seguridad Social, accidentes de trabajo y gestión de riesgos
                  laborales.
                </p>
              </div>

              <div className={styles.item}>
                <span>📑</span>
                <p>
                  Elaboración y revisión de contratos laborales, reglamentos
                  internos y políticas corporativas.
                </p>
              </div>

              <div className={styles.item}>
                <span>👨‍👩‍👧</span>
                <p>
                  Procesos de divorcio, cesación de efectos civiles y
                  liquidación de sociedades conyugales.
                </p>
              </div>

              <div className={styles.item}>
                <span>👶</span>
                <p>
                  Custodia de menores, regulación de visitas, patria potestad y
                  acuerdos de crianza.
                </p>
              </div>

              <div className={styles.item}>
                <span>💰</span>
                <p>
                  Fijación, reajuste y cobro de cuotas alimentarias, sucesiones
                  y partición de herencias.
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
                  Acompañamiento integral en procedimientos judiciales y
                  administrativos en materia laboral y familiar.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Diseño de estrategias jurídicas preventivas ajustadas a las
                  necesidades de cada cliente y al cumplimiento normativo.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Manejo técnico y conciliador de conflictos familiares,
                  priorizando soluciones efectivas con el menor desgaste
                  emocional posible.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Protección de los derechos e intereses de trabajadores,
                  empleadores y núcleos familiares mediante un acompañamiento
                  cercano, claro y estratégico.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Capacitación y asesoría especializada para fortalecer la
                  gestión de relaciones laborales y la prevención de conflictos.
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
            name: "Guillermo Rodríguez",
            jobTitle:
              "Abogado especialista en derecho laboral y derecho de familia",
            image: "https://pravice.co/doc-guillermo.jpg",
            description:
              "Abogado especialista en derecho laboral, seguridad social y derecho de familia con amplia experiencia en litigios, asesoría preventiva y representación judicial.",
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
          }),
        }}
      />
    </main>
  );
}
