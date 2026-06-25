"use client";

import Script from "next/script";
import styles from "./Article.module.css";
import { motion } from "framer-motion";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "7 errores en la gestión de cartera que hacen perder dinero a tu empresa",
    description:
      "Descubre los errores más comunes al gestionar cartera y aprende cómo recuperar pagos pendientes de forma más eficiente.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/errores-gestion-cartera",
    },
    author: {
      "@type": "Organization",
      name: "Pravice",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },
    datePublished: "2025-01-10",
    dateModified: "2025-01-10",
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className={styles.article}>
        {/* HERO */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.title}>
            7 errores en la gestión de cartera que hacen perder dinero a tu
            empresa (y cómo evitarlos)
          </h1>

          <p className={styles.intro}>
            ¿Tu empresa tiene clientes que pagan tarde o simplemente dejan
            vencer las facturas? En muchos casos el problema no es únicamente la
            mora de los clientes, sino errores dentro de la gestión de cartera.
            Identificarlos a tiempo puede mejorar el recaudo, proteger el flujo
            de caja y reducir las pérdidas financieras.
          </p>

          <p className={styles.intro}>
            En esta guía conocerás los errores más frecuentes que cometen las
            empresas colombianas al administrar su cartera y qué estrategias
            pueden ayudarte a aumentar la recuperación de pagos sin deteriorar
            la relación comercial con tus clientes.
          </p>
        </motion.header>

        {/* INTRO */}
        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            ¿Qué es la gestión de cartera y por qué puede afectar la liquidez de
            una empresa?
          </h2>

          <p>
            La gestión de cartera consiste en administrar y recuperar las
            cuentas por cobrar de una empresa, asegurando que los clientes
            cumplan con sus obligaciones de pago en Colombia.
          </p>

          <ul>
            <li>seguimiento de facturas</li>
            <li>control de pagos</li>
            <li>negociación con clientes</li>
            <li>recuperación de deudas</li>
          </ul>
        </motion.section>

        {/* ERRORES */}
        {[
          {
            title:
              "Error #1: Otorgar crédito sin evaluar la capacidad de pago del cliente",
            text: "Otorgar crédito sin analizar al cliente aumenta el riesgo de incumplimiento.",
          },
          {
            title:
              "Error #2: No tener políticas claras para cobrar las facturas",
            text: "No tener procesos definidos genera desorden y baja recuperación.",
          },
          {
            title:
              "Error #3: Esperar demasiado para hacer seguimiento a las cuentas por cobrar",
            text: "Esperar demasiado reduce la probabilidad de pago.",
          },
          {
            title:
              "Error #4: Gestionar la cartera únicamente con procesos manuales",
            text: "La falta de automatización genera errores y pérdida de control.",
          },
          {
            title:
              "Error #5: No ofrecer alternativas de pago cuando el cliente tiene dificultades",
            text: "La flexibilidad mejora la recuperación de cartera.",
          },
          {
            title:
              "Error #6: Ignorar los conflictos comerciales que retrasan los pagos",
            text: "Los problemas comerciales afectan directamente el pago.",
          },
          {
            title:
              "Error #7: Esperar demasiado para iniciar un proceso de recuperación de cartera",
            text: "No acudir a conciliación o cobro jurídico limita la recuperación.",
          },
        ].map((item, i) => (
          <motion.section
            key={i}
            className={styles.section}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.section>
        ))}

        {/* CONSEJOS */}
        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            Cómo mejorar la gestión de cartera y recuperar más facturas sin
            aumentar los conflictos
          </h2>

          <ul>
            <li>definir políticas de crédito</li>
            <li>automatizar procesos</li>
            <li>hacer seguimiento constante</li>
            <li>negociar acuerdos de pago</li>
            <li>usar conciliación extrajudicial</li>
          </ul>
        </motion.section>

        {/* CONCLUSION */}
        <motion.section
          className={styles.conclusion}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            Conclusión: una buena gestión de cartera mejora la liquidez de tu
            empresa
          </h2>

          <p>
            Evitar errores en la gestión de cartera en Colombia permite mejorar
            el flujo de caja, reducir riesgos financieros y fortalecer la
            estabilidad empresarial.
          </p>

          <p>
            Implementar estrategias adecuadas y herramientas legales es clave
            para una recuperación efectiva.
          </p>
        </motion.section>

        <ArticleCTA
          title="¿Tu empresa tiene problemas para recuperar facturas? Conoce cómo mejorar la gestión de cartera"
          description="Descubre estrategias para optimizar la gestión de cartera, reducir la mora, fortalecer los procesos de cobranza y evaluar cuándo es conveniente acudir a mecanismos de recuperación de cartera en Colombia."
          href="https://abogadosespecialistas.com.co/"
          badge="Cobranza empresarial y cartera"
          buttonText="Solicitar asesoría jurídica"
        />
      </article>
    </>
  );
}
