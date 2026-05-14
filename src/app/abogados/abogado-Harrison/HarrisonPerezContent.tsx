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
              src="/doc-harrison.jpg"
              alt="Harrison Pérez abogado especialista en derecho laboral, comercial y de familia en Bogotá Colombia"
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
            <h1 className={styles.title}>Harrison Pérez</h1>

            <p className={styles.role}>
              Especialista en Derecho Laboral, Comercial y de Familia
            </p>
          </div>

          {/* PERFIL */}
          <div className={styles.card}>
            <h2>Perfil profesional</h2>

            <p>
              Abogado con más de 5 años de experiencia en Derecho Laboral,
              Seguridad Social, Derecho Comercial y Derecho de Familia, dedicado
              a la asesoría y representación de personas, familias,
              trabajadores, empleadores y empresas en conflictos de alta
              sensibilidad jurídica.
            </p>

            <br />

            <p>
              Harrison Pérez Calderón se destaca por su enfoque técnico,
              estratégico y conciliador, orientado a prevenir contingencias,
              proteger derechos e intereses y resolver disputas de manera
              eficiente, brindando acompañamiento cercano y soluciones ajustadas
              a las necesidades de cada cliente.
            </p>
          </div>

          {/* ÁREAS */}
          <div className={styles.card}>
            <h2>Áreas de especialidad</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>⚖</span>

                <p>
                  Contratos laborales, modalidades de vinculación y asesoría en
                  relaciones de trabajo.
                </p>
              </div>

              <div className={styles.item}>
                <span>📑</span>

                <p>
                  Despidos, sanciones disciplinarias, reclamaciones laborales y
                  acreencias derivadas de la relación laboral.
                </p>
              </div>

              <div className={styles.item}>
                <span>🛡</span>

                <p>
                  Asesoría en Seguridad Social: afiliaciones, prestaciones,
                  incapacidades y pensiones.
                </p>
              </div>

              <div className={styles.item}>
                <span>🤝</span>

                <p>
                  Contratos comerciales, estructuración de negocios jurídicos y
                  revisión de acuerdos empresariales.
                </p>
              </div>

              <div className={styles.item}>
                <span>💼</span>

                <p>
                  Procesos ejecutivos, cobro de cartera y conflictos derivados
                  de incumplimientos contractuales.
                </p>
              </div>

              <div className={styles.item}>
                <span>🔐</span>

                <p>
                  Asesoría preventiva en riesgos comerciales, fraude y
                  contingencias jurídicas empresariales.
                </p>
              </div>

              <div className={styles.item}>
                <span>👨‍👩‍👧</span>

                <p>
                  Procesos de divorcio, cesación de efectos civiles y
                  liquidación de sociedades conyugales y uniones maritales de
                  hecho.
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
                  Fijación, modificación y cobro de cuotas alimentarias,
                  sucesiones y partición de herencias.
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
                  Análisis jurídico preventivo para reducir riesgos y evitar
                  litigios innecesarios en escenarios laborales, comerciales y
                  familiares.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Diseño de estrategias claras y efectivas para la protección de
                  derechos, patrimonio e intereses de cada cliente.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Acompañamiento cercano y humano en procesos de alta carga
                  emocional y jurídica, brindando claridad y confianza durante
                  todo el proceso.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Gestión estratégica de conflictos comerciales y laborales con
                  orientación técnica, preventiva y enfocada en resultados.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Priorización de soluciones conciliatorias y mecanismos
                  eficientes de resolución de conflictos.
                </p>
              </div>

              <div className={styles.item}>
                <span>✓</span>

                <p>
                  Comunicación directa, transparente y oportuna, facilitando una
                  toma de decisiones informada y alineada con los objetivos del
                  cliente.
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
            name: "Harrison Pérez",
            jobTitle:
              "Abogado especialista en derecho laboral, comercial y de familia",
            image: "https://pravice.co/doc-harrison.jpg",
            description:
              "Abogado especialista en derecho laboral, derecho comercial, seguridad social y derecho de familia en Bogotá Colombia.",
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
          }),
        }}
      />
    </main>
  );
}
