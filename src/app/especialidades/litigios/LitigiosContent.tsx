"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function LitigiosContent() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Litigios y procesos judiciales empresariales
          </span>

          <h1 className={styles.title}>
            Litigios empresariales en Colombia: gestión estratégica de procesos
            judiciales y controversias legales
          </h1>

          <p className={styles.description}>
            Conoce aspectos clave sobre litigios empresariales en Colombia,
            procesos civiles, comerciales y ejecutivos, así como estrategias de
            prevención y gestión jurídica para empresas y organizaciones.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar orientación jurídica
            </a>

            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PORTAL SEO */}
        <section className={styles.portalSeo}>
          <p>
            Si buscas representación judicial especializada y acompañamiento en
            procesos civiles, comerciales o litigios empresariales complejos,
            puedes consultar nuestro portal principal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/litigios-abogado-litigante.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados litigantes y litigios en Colombia
            </a>
            , donde encontrarás información más amplia sobre defensa judicial,
            estrategias procesales y representación legal empresarial.
          </p>
        </section>

        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué son los litigios empresariales y cómo funcionan en Colombia?
          </h2>

          <p className={styles.text}>
            Los litigios empresariales en Colombia corresponden a controversias
            legales que deben resolverse mediante procesos judiciales ante
            juzgados o tribunales. Estos conflictos pueden originarse por
            incumplimientos contractuales, disputas comerciales, obligaciones
            pendientes, conflictos societarios o reclamaciones civiles.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Una estrategia procesal adecuada puede
            reducir riesgos financieros, sanciones y afectaciones operativas
            para las empresas.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe una alta actividad económica y
            empresarial, los litigios comerciales y civiles forman parte del
            entorno corporativo y requieren análisis jurídico, gestión
            documental y seguimiento procesal constante.
          </p>

          <p className={styles.text}>
            La gestión de litigios no solo implica acudir a un proceso judicial,
            sino también evaluar riesgos, estructurar estrategias legales y
            analizar alternativas preventivas o conciliatorias según cada caso.
          </p>
        </motion.section>

        {/* TIPOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Tipos de litigios y procesos judiciales empresariales en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Litigios civiles",
                text: "Procesos relacionados con obligaciones, responsabilidad civil y conflictos patrimoniales.",
              },
              {
                title: "Litigios comerciales",
                text: "Controversias derivadas de contratos, relaciones mercantiles y operaciones empresariales.",
              },
              {
                title: "Procesos ejecutivos",
                text: "Acciones judiciales orientadas al cobro de obligaciones respaldadas jurídicamente.",
              },
              {
                title: "Conflictos contractuales",
                text: "Procesos asociados a incumplimientos o interpretación de acuerdos comerciales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className={styles.text}>
            Identificar correctamente el tipo de proceso judicial permite
            estructurar estrategias jurídicas más eficientes y mejorar la
            administración de riesgos legales empresariales.
          </p>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Importancia de la estrategia jurídica en litigios empresariales
          </h2>

          <p className={styles.text}>
            Los procesos judiciales pueden impactar la estabilidad financiera,
            reputacional y operativa de una empresa. Por ello, la planeación
            jurídica y el análisis preventivo son fundamentales dentro de la
            gestión empresarial moderna.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Análisis de riesgos",
                text: "Evaluación jurídica y procesal antes de iniciar acciones legales.",
              },
              {
                title: "✔ Gestión documental",
                text: "Organización de pruebas, contratos y soportes procesales.",
              },
              {
                title: "✔ Estrategia procesal",
                text: "Definición de mecanismos legales según cada controversia.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RIESGOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Riesgos de una mala gestión de litigios empresariales
          </h2>

          <div className={styles.warningBox}>
            ⚠ Una gestión inadecuada de procesos judiciales puede generar
            pérdidas económicas, sanciones, bloqueos operativos y afectaciones
            reputacionales para las empresas.
          </div>

          <p className={styles.text}>
            Muchas organizaciones subestiman la complejidad de los litigios
            civiles y comerciales, lo que puede ocasionar errores procesales,
            incumplimientos o decisiones desfavorables dentro de los procesos
            judiciales.
          </p>
        </motion.section>

        {/* BENEFICIOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Beneficios de una adecuada gestión de litigios y controversias
            legales
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención de riesgos legales",
              "✔ Mejor control procesal",
              "✔ Protección patrimonial empresarial",
              "✔ Estrategias jurídicas organizadas",
              "✔ Mayor seguridad jurídica",
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* CONTEXTO SEO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Litigios, defensa judicial y resolución de conflictos empresariales
          </h2>

          <p className={styles.text}>
            La resolución de controversias legales en Colombia puede involucrar
            procesos judiciales, conciliaciones, negociaciones y mecanismos
            alternativos dependiendo del tipo de conflicto y de la estrategia
            jurídica adoptada.
          </p>

          <p className={styles.text}>
            Las empresas suelen enfrentar disputas relacionadas con contratos,
            incumplimientos, obligaciones comerciales, recuperación de cartera y
            conflictos societarios, por lo que una adecuada planeación legal es
            esencial para reducir contingencias.
          </p>

          <p className={styles.text}>
            Si deseas ampliar información sobre representación judicial y
            litigios empresariales en Colombia, puedes consultar también nuestro
            portal especializado de{" "}
            <a
              href="https://abogadosespecialistas.com.co/litigios-abogado-litigante.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados litigantes y defensa judicial empresarial
            </a>
            .
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          id="contacto"
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Recibe orientación sobre litigios y procesos judiciales
              empresariales
            </h2>

            <p className={styles.ctaText}>
              Conoce estrategias jurídicas aplicadas a litigios civiles,
              comerciales y controversias empresariales en Colombia para mejorar
              la protección legal de tu empresa.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
              >
                Solicitar orientación
              </a>

              <a
                href="https://abogadosespecialistas.com.co/litigios-abogado-litigante.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ver portal especializado
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
