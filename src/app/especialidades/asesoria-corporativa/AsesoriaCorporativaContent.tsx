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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function AsesoriaCorporativaContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Asesoría corporativa en Colombia",
    description:
      "Servicio de asesoría corporativa para empresas en Bogotá y Colombia con enfoque estratégico y legal.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ================= HERO ================= */}
        <motion.section variants={fadeUp} className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

            <h1 className={styles.title}>
              Asesoría Corporativa en Bogotá: Abogados para Empresas que Quieren
              Crecer sin Riesgos
            </h1>

            <p className={styles.description}>
              Toma decisiones empresariales con respaldo legal. Asesoría
              corporativa en Bogotá y Colombia para empresas que buscan crecer
              con seguridad jurídica y visión estratégica.
            </p>

            <div className={styles.actions}>
              <a href="#contacto" className={styles.primary}>
                Solicitar asesoría
              </a>
              <a href="/blog" className={styles.secondary}>
                Ver blog legal
              </a>
            </div>
          </div>
        </motion.section>

        {/* ================= INTRO ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es la asesoría corporativa y por qué es clave para tu empresa
            en Colombia?
          </h2>

          <p className={styles.text}>
            La asesoría corporativa en Colombia es un servicio legal estratégico
            enfocado en acompañar a las empresas en la toma de decisiones
            jurídicas, financieras y organizacionales, asegurando que cada
            acción esté alineada con la normativa vigente.
          </p>

          <p className={styles.text}>
            En Bogotá, donde se concentra gran parte del sector empresarial, la
            asesoría corporativa se ha convertido en una herramienta esencial
            para empresas que buscan crecer de forma estructurada, minimizar
            riesgos y optimizar sus procesos internos.
          </p>

          <div className={styles.highlightBox}>
            <strong>Enfoque estratégico:</strong> La asesoría corporativa no
            solo responde a problemas legales, sino que guía el rumbo de la
            empresa hacia decisiones más seguras y rentables.
          </div>

          <p className={styles.text}>
            Este tipo de servicio abarca áreas como derecho empresarial,
            cumplimiento normativo, gobierno corporativo, contratos y gestión de
            riesgos legales.
          </p>
        </motion.section>

        {/* ================= SERVICIOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicios de asesoría corporativa en Bogotá que protegen y hacen
            crecer tu empresa
          </h2>

          <p className={styles.text}>
            Una firma de abogados especializada en asesoría corporativa en
            Bogotá ofrece acompañamiento integral en todas las etapas del
            desarrollo empresarial.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Toma de decisiones estratégicas</h3>
              <p>
                Análisis legal para decisiones empresariales clave con menor
                riesgo.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Gobierno corporativo</h3>
              <p>
                Estructuración de órganos de control y administración
                empresarial.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Cumplimiento normativo</h3>
              <p>
                Adaptación de la empresa a las regulaciones vigentes en
                Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Gestión de riesgos</h3>
              <p>
                Identificación y prevención de riesgos legales y financieros.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ================= IMPORTANCIA ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué la asesoría corporativa es esencial para empresas en
            Bogotá?
          </h2>

          <p className={styles.text}>
            Bogotá es el principal centro económico de Colombia, con un entorno
            altamente competitivo y regulado. En este escenario, la asesoría
            corporativa permite a las empresas operar con mayor claridad y
            respaldo legal.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Decisiones seguras</h4>
              <p>Reduce la incertidumbre en procesos empresariales.</p>
            </div>

            <div>
              <h4>✔ Organización empresarial</h4>
              <p>Estructuras claras que mejoran la eficiencia.</p>
            </div>

            <div>
              <h4>✔ Prevención legal</h4>
              <p>Evita conflictos antes de que ocurran.</p>
            </div>

            <div>
              <h4>✔ Crecimiento estratégico</h4>
              <p>Expansión con bases legales sólidas.</p>
            </div>
          </div>
        </motion.section>

        {/* ================= ERRORES ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Errores legales que pueden afectar tu empresa si no tienes asesoría
            corporativa
          </h2>

          <p className={styles.text}>
            Muchas empresas en Colombia toman decisiones sin respaldo legal, lo
            que puede generar consecuencias negativas a corto y largo plazo.
          </p>

          <div className={styles.warningBox}>
            ⚠ Decisiones sin asesoría pueden generar sanciones, conflictos
            internos, pérdida de dinero y riesgos legales graves.
          </div>

          <p className={styles.text}>
            Desde problemas entre socios hasta incumplimientos normativos, estos
            errores pueden afectar directamente la estabilidad y reputación de
            la empresa.
          </p>
        </motion.section>

        {/* ================= BENEFICIOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios reales de contratar asesoría corporativa en Colombia
          </h2>

          <div className={styles.benefits}>
            <span>✔ Mejor toma de decisiones</span>
            <span>✔ Reducción de riesgos legales</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Protección empresarial</span>
            <span>✔ Crecimiento sostenible</span>
          </div>

          <p className={styles.text}>
            La asesoría corporativa permite a las empresas operar con mayor
            seguridad, eficiencia y visión estratégica en el mercado colombiano.
          </p>
        </motion.section>

        {/* ================= ENFOQUE NACIONAL ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Asesoría corporativa en Bogotá y toda Colombia: atención para
            empresas en crecimiento
          </h2>

          <p className={styles.text}>
            Aunque Bogotá es el principal centro empresarial del país, la
            asesoría corporativa en Colombia se extiende a empresas en todo el
            territorio nacional.
          </p>

          <p className={styles.text}>
            Gracias a la digitalización y a los modelos de atención remota, es
            posible brindar acompañamiento legal estratégico a empresas en
            diferentes ciudades, garantizando el cumplimiento de la normativa
            colombiana.
          </p>

          <div className={styles.highlightBox}>
            Empresas de cualquier sector pueden beneficiarse de una asesoría
            corporativa profesional, sin importar su ubicación en Colombia.
          </div>
        </motion.section>

        {/* ================= CTA ================= */}
        <motion.section id="contacto" variants={fadeUp} className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Habla hoy con un abogado corporativo en Bogotá y protege tu
              empresa
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados está listo para acompañarte en la toma
              de decisiones estratégicas, proteger tu empresa y ayudarte a
              crecer con seguridad jurídica.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
              >
                Solicitar asesoría corporativa ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
