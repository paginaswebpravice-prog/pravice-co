"use client";

import Script from "next/script";
import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DerechoSocietarioContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Derecho Societario para Empresas y Gobierno Corporativo en Colombia",
    description:
      "Información sobre derecho societario, estructuras empresariales, tipos de sociedades y gestión corporativa en Colombia.",
    inLanguage: "es-CO",
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      {/* SCHEMA */}
      <Script
        id="schema-derecho-societario"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className={styles.hero}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Gobierno corporativo y gestión societaria
          </span>

          <h1 className={styles.title}>
            Derecho Societario para Empresas en Colombia: Gobierno Corporativo,
            Sociedades y Gestión Empresarial
          </h1>

          <p className={styles.description}>
            Conoce cómo el derecho societario ayuda a las empresas en Colombia
            mediante estructuras societarias, gobierno corporativo, reformas
            estatutarias, relaciones entre socios y procesos de crecimiento
            empresarial.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar orientación jurídica
            </a>

            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </div>
      </motion.section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* PORTAL SEO */}
        <section className={styles.portalSeo}>
          <p>
            Si buscas información especializada sobre registro de marca,
            protección de marca y propiedad industrial en Colombia, puedes
            visitar nuestro portal principal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/registro-de-marca.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados expertos en registro de marca en Colombia
            </a>
            , donde encontrarás contenido ampliado sobre registro marcario,
            protección de activos intangibles y procesos ante la
            Superintendencia de Industria y Comercio.
          </p>
        </section>

        {/* INTRO */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.section}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es el derecho societario y por qué es importante para las
            empresas en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho societario en Colombia regula la constitución,
            organización y funcionamiento de las sociedades comerciales y demás
            estructuras empresariales utilizadas por personas y organizaciones
            para desarrollar actividades económicas.
          </p>

          <p className={styles.text}>
            Esta área jurídica aborda temas relacionados con tipos de
            sociedades, derechos y obligaciones de socios, reformas
            estatutarias, administración corporativa y crecimiento empresarial.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Una adecuada estructura societaria
            permite mejorar la organización empresarial, reducir riesgos y
            facilitar el crecimiento corporativo.
          </div>

          <p className={styles.text}>
            En Colombia, las empresas suelen combinar estrategias societarias,
            contractuales y de propiedad intelectual para fortalecer su
            operación y proteger sus activos empresariales.
          </p>
        </motion.section>

        {/* ESTRUCTURAS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.section}
        >
          <h2 className={styles.subtitle}>
            Tipos de sociedades y estructuras empresariales utilizadas en
            Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Sociedad por Acciones Simplificada (SAS)",
                text: "Modelo empresarial flexible utilizado por emprendedores y empresas en Colombia.",
              },
              {
                title: "Sociedades limitadas",
                text: "Estructuras societarias enfocadas en participación y responsabilidad limitada.",
              },
              {
                title: "Sociedades anónimas",
                text: "Organizaciones corporativas utilizadas para operaciones empresariales de mayor tamaño.",
              },
              {
                title: "Estructuras corporativas",
                text: "Modelos organizacionales adaptados a necesidades comerciales y empresariales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.section}
        >
          <h2 className={styles.subtitle}>
            Gobierno corporativo y gestión societaria para empresas
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Organización empresarial</h4>
              <p>
                Facilita la administración y distribución de responsabilidades.
              </p>
            </div>

            <div>
              <h4>✔ Gestión entre socios</h4>
              <p>
                Permite establecer reglas claras de participación y toma de
                decisiones.
              </p>
            </div>

            <div>
              <h4>✔ Seguridad jurídica</h4>
              <p>
                Reduce contingencias legales y mejora la estabilidad
                empresarial.
              </p>
            </div>

            <div>
              <h4>✔ Crecimiento corporativo</h4>
              <p>
                Facilita procesos de expansión y reorganización empresarial.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MARCAS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.section}
        >
          <h2 className={styles.subtitle}>
            Registro de marca y protección empresarial en Colombia
          </h2>

          <p className={styles.text}>
            Además de la estructura societaria, muchas empresas en Colombia
            buscan proteger sus activos intangibles mediante estrategias de
            propiedad intelectual y registro de marca.
          </p>

          <p className={styles.text}>
            El registro marcario permite diferenciar productos, servicios y
            actividades comerciales dentro del mercado, fortaleciendo la
            identidad empresarial y la protección legal de los signos
            distintivos.
          </p>

          <div className={styles.warningBox}>
            ⚠ Operar una marca sin protección adecuada puede generar conflictos
            comerciales, riesgos reputacionales y limitaciones para el
            crecimiento empresarial.
          </div>

          <p className={styles.text}>
            Si deseas ampliar información sobre protección de marca y propiedad
            industrial en Colombia, puedes consultar también nuestro portal
            especializado de{" "}
            <a
              href="https://abogadosespecialistas.com.co/registro-de-marca.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              registro de marca y propiedad intelectual
            </a>
            .
          </p>
        </motion.section>

        {/* BENEFICIOS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.section}
        >
          <h2 className={styles.subtitle}>
            Beneficios de una correcta gestión societaria y corporativa
          </h2>

          <div className={styles.benefits}>
            <span>✔ Organización corporativa</span>
            <span>✔ Mejor administración empresarial</span>
            <span>✔ Prevención de conflictos societarios</span>
            <span>✔ Seguridad jurídica empresarial</span>
            <span>✔ Protección de activos empresariales</span>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          id="contacto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.cta}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Conoce más sobre gobierno corporativo y derecho societario para
              empresas
            </h2>

            <p className={styles.ctaText}>
              Conoce información relacionada con estructuras empresariales,
              sociedades comerciales, organización corporativa y protección de
              activos empresariales en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                className={styles.primary}
              >
                Solicitar orientación
              </a>

              <a
                href="https://abogadosespecialistas.com.co/registro-de-marca.html"
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
