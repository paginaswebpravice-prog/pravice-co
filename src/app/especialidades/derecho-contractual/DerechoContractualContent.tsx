"use client";

import Script from "next/script";
import Link from "next/link";
import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export default function DerechoContractualContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Gestión Contractual y Contratos Empresariales en Colombia",
    description:
      "Información sobre gestión contractual, negociación de contratos, acuerdos comerciales y prevención de riesgos contractuales para empresas.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      <Script
        id="schema-derecho-contractual"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Gestión contractual y acuerdos comerciales
          </span>

          <h1 className={styles.title}>
            Contratos Empresariales en Colombia: Gestión Contractual y
            Prevención de Riesgos Comerciales
          </h1>

          <p className={styles.description}>
            Conoce cómo una adecuada gestión contractual ayuda a las empresas en
            Colombia a fortalecer relaciones con proveedores, clientes y aliados
            comerciales, reduciendo riesgos e incumplimientos contractuales.
          </p>

          <div className={styles.actions}>
            <a
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.primary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoría
            </a>

            <Link href="/" className={styles.secondary}>
              Ver más servicios
            </Link>
          </div>
        </div>
      </motion.section>

      <main className={styles.container}>
        {/* SEO SUPPORT */}

        <motion.section
          className={styles.portalSeo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>
            Si buscas asesoría jurídica integral para empresas, cumplimiento
            legal y acompañamiento en conflictos empresariales, puedes visitar
            el portal principal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados especialistas en Colombia
            </a>
            , donde encontrarás información sobre representación empresarial,
            litigios, derecho comercial y servicios legales corporativos.
          </p>
        </motion.section>

        {/* INTRO */}

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            ¿Por qué la gestión contractual es clave para las empresas en
            Colombia?
          </h2>

          <p className={styles.text}>
            El derecho contractual regula los acuerdos legales entre personas,
            empresas y organizaciones mediante contratos que establecen
            derechos, obligaciones y responsabilidades.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Un contrato bien estructurado ayuda a
            prevenir conflictos, incumplimientos y pérdidas económicas.
          </div>

          <p className={styles.text}>
            En Colombia, los contratos comerciales son fundamentales para
            relaciones con proveedores, clientes, aliados estratégicos,
            empleados y socios comerciales.
          </p>

          <p className={styles.text}>
            Contar con asesoría jurídica en contratación permite reducir riesgos
            legales, mejorar negociaciones y proteger los intereses económicos
            de las empresas.
          </p>
        </motion.section>

        {/* SERVICIOS */}

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Aspectos fundamentales de la gestión contractual empresarial
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Elaboración de contratos",
                text: "Redacción de contratos civiles, comerciales y empresariales adaptados a cada negocio.",
              },
              {
                title: "Revisión contractual",
                text: "Análisis de cláusulas, riesgos jurídicos y obligaciones contractuales.",
              },
              {
                title: "Negociación de acuerdos",
                text: "Acompañamiento legal en negociaciones y acuerdos comerciales.",
              },
              {
                title: "Incumplimientos contractuales",
                text: "Asesoría en conflictos derivados de incumplimientos y disputas contractuales.",
              },
              {
                title: "Contratos comerciales",
                text: "Contratos de prestación de servicios, distribución, suministro y alianzas empresariales.",
              },
              {
                title: "Asesoría preventiva",
                text: "Prevención de riesgos jurídicos mediante contratos claros y estratégicos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* IMPORTANCIA */}

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Beneficios de una adecuada gestión de contratos empresariales
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Seguridad jurídica",
                text: "Define obligaciones y responsabilidades de forma clara.",
              },
              {
                title: "✔ Prevención de conflictos",
                text: "Reduce disputas legales y problemas contractuales.",
              },
              {
                title: "✔ Protección financiera",
                text: "Ayuda a minimizar pérdidas económicas por incumplimientos.",
              },
              {
                title: "✔ Relaciones comerciales sólidas",
                text: "Fortalece acuerdos entre empresas y aliados estratégicos.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
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

        {/* ARTICULO SEO */}

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Errores frecuentes en contratos empresariales y cómo prevenirlos
          </h2>

          <p className={styles.text}>
            Muchas empresas enfrentan problemas jurídicos por contratos mal
            redactados, cláusulas ambiguas o ausencia de mecanismos claros de
            cumplimiento.
          </p>

          <div className={styles.warningBox}>
            ⚠ Un contrato sin revisión jurídica puede generar incumplimientos,
            sanciones económicas y conflictos comerciales.
          </div>

          <p className={styles.text}>
            Algunos errores frecuentes incluyen definir obligaciones poco
            claras, no regular penalidades por incumplimiento, utilizar modelos
            genéricos sin adaptación al negocio y omitir mecanismos de solución
            de controversias.
          </p>

          <p className={styles.text}>
            La asesoría preventiva en contratación permite detectar riesgos
            antes de firmar acuerdos y mejorar la protección jurídica de la
            empresa.
          </p>
        </motion.section>

        {/* BENEFICIOS */}

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Ventajas de fortalecer la gestión contractual de una empresa
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención de riesgos legales",
              "✔ Contratos personalizados",
              "✔ Protección patrimonial",
              "✔ Seguridad jurídica empresarial",
              "✔ Mejor negociación contractual",
              "✔ Reducción de conflictos",
            ].map((b, i) => (
              <motion.span key={i} whileHover={{ scale: 1.08 }}>
                {b}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* APOYO SEO */}

        <motion.section
          className={styles.portalSeo}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>
            Si tu empresa necesita acompañamiento jurídico más amplio en temas
            comerciales, societarios o conflictos empresariales, también puedes
            consultar el portal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados especialistas
            </a>{" "}
            para ampliar información sobre representación legal corporativa en
            Colombia.
          </p>
        </motion.section>

        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className={styles.subtitle}>
            Incumplimiento de contratos comerciales en Colombia
          </h2>

          <p className={styles.text}>
            Uno de los riesgos más frecuentes para las empresas es el
            incumplimiento de contratos por parte de proveedores, clientes o
            aliados estratégicos.
          </p>

          <p className={styles.text}>
            Una adecuada gestión contractual permite establecer obligaciones
            claras, mecanismos de seguimiento y procedimientos para resolver
            controversias antes de que se conviertan en conflictos empresariales
            mayores.
          </p>
        </motion.section>

        {/* CTA */}

        <motion.section
          id="contacto"
          className={styles.cta}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Fortalece la gestión contractual de tu empresa
            </h2>

            <p className={styles.ctaText}>
              Recibe acompañamiento jurídico para contratos empresariales,
              negociaciones y prevención de riesgos legales.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con un abogado
              </a>

              <a
                href="https://abogadosespecialistas.com.co/"
                className={styles.secondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Portal jurídico principal
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
