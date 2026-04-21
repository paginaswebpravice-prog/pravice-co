"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function RecuperacionCarteraEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Recuperación de cartera empresarial en Colombia: estrategias efectivas para mejorar flujo de caja",
    description:
      "Guía completa sobre recuperación de cartera empresarial en Colombia y Bogotá. Estrategias para mejorar el flujo de caja y reducir la morosidad.",
    image: "https://pravice.co/og-image.jpg",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://pravice.co/blog/recuperacion-cartera-empresarial-colombia",
    },
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
  };

  return (
    <>
      {/* ✅ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <motion.article
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* HERO */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Recuperación de cartera empresarial en Colombia: estrategias
            efectivas para mejorar flujo de caja
          </motion.h1>

          <motion.p
            className={styles.intro}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            En Colombia, especialmente en ciudades como Bogotá, la recuperación
            de cartera empresarial es clave para mantener la liquidez,
            garantizar la estabilidad financiera y evitar riesgos operativos en
            las empresas.
          </motion.p>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Una cartera vencida mal gestionada puede afectar el flujo de caja,
            limitar el crecimiento y generar pérdidas económicas significativas.
          </motion.p>
        </motion.header>

        {/* DEFINICIÓN */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            ¿Qué es la recuperación de cartera empresarial en Colombia?
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Es el conjunto de estrategias y procesos que utilizan las empresas
            para recuperar pagos pendientes de clientes.
          </motion.p>

          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <li>seguimiento de facturas vencidas</li>
            <li>comunicación con clientes</li>
            <li>negociación de acuerdos de pago</li>
            <li>uso de mecanismos legales</li>
          </motion.ul>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            Importancia de la recuperación de cartera en empresas de Colombia
          </motion.h2>

          <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <li>mejorar flujo de caja</li>
            <li>reducir morosidad</li>
            <li>mantener relaciones comerciales</li>
            <li>optimizar procesos financieros</li>
          </motion.ul>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Las empresas en Colombia que gestionan correctamente su cartera
            logran mayor estabilidad y crecimiento sostenible.
          </motion.p>
        </motion.section>

        {/* MÉTODOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            Métodos efectivos de recuperación de cartera empresarial en Colombia
          </motion.h2>

          {[
            {
              title: "1. Seguimiento constante de cartera",
              text: "Contactar oportunamente a los clientes permite evitar el vencimiento prolongado de las facturas.",
            },
            {
              title: "2. Comunicación directa con clientes morosos",
              text: "Hablar con el cliente ayuda a identificar causas del retraso y encontrar soluciones.",
            },
            {
              title: "3. Acuerdos de pago flexibles en Colombia",
              text: "Ofrecer planes flexibles facilita la recuperación del dinero sin afectar la relación comercial.",
            },
            {
              title: "4. Automatización de cobranzas empresariales",
              text: "Herramientas tecnológicas permiten mejorar la eficiencia y reducir errores.",
            },
            {
              title: "5. Políticas de crédito claras para empresas",
              text: "Definir condiciones desde el inicio reduce el riesgo de mora.",
            },
            {
              title: "6. Conciliación de cartera empresarial",
              text: "Permite resolver conflictos de pago sin acudir a procesos judiciales largos.",
            },
            {
              title: "7. Mecanismos legales de recuperación de cartera",
              text: "En casos extremos, acudir a procesos jurídicos protege los intereses financieros de la empresa.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.strategy}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section
          className={styles.conclusion}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            Conclusión sobre recuperación de cartera empresarial en Colombia
          </motion.h2>

          <motion.p>
            La recuperación de cartera empresarial en Colombia es un proceso
            fundamental para la salud financiera de cualquier empresa.
          </motion.p>

          <motion.p>
            Implementar estrategias de seguimiento, negociación y tecnología
            permite mejorar el recaudo y reducir riesgos financieros.
          </motion.p>
        </motion.section>
      </motion.article>
    </>
  );
}
