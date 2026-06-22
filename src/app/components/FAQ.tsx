"use client";

import styles from "../styles/FAQ.module.css";
import { motion } from "framer-motion";

const faqs = [
  {
    question:
      "¿Cómo solicitar una consulta jurídica para empresas en Colombia?",
    answer:
      "Puedes contactar a Pravice para exponer tu situación jurídica. Nuestro equipo realiza una evaluación inicial, revisa la información disponible y orienta sobre las alternativas de acompañamiento legal para empresas y organizaciones en Colombia.",
  },

  {
    question: "¿Cuánto tiempo puede durar un proceso legal en Colombia?",
    answer:
      "Los tiempos varían según el tipo de proceso, la complejidad del caso y la entidad o autoridad competente. En Pravice realizamos seguimiento permanente y mantenemos informados a nuestros clientes sobre el avance de cada actuación jurídica.",
  },

  {
    question:
      "¿Puedo recibir asesoría jurídica si me encuentro fuera de Bogotá?",
    answer:
      "Sí. Atendemos clientes en Bogotá, Medellín, Cali, Barranquilla y otras ciudades de Colombia mediante herramientas digitales, reuniones virtuales y canales de comunicación remota.",
  },

  {
    question: "¿Qué documentos necesito para iniciar una consulta legal?",
    answer:
      "Los documentos dependen de cada situación. Generalmente se recomienda reunir contratos, comunicaciones, certificados, facturas o cualquier soporte relacionado con el caso para facilitar el análisis jurídico inicial.",
  },

  {
    question: "¿Pravice realiza seguimiento de procesos legales?",
    answer:
      "Sí. Contamos con herramientas tecnológicas y procesos internos que permiten realizar seguimiento de actuaciones, gestión documental y acompañamiento jurídico continuo durante el desarrollo del caso.",
  },

  {
    question:
      "¿Las empresas pueden contratar acompañamiento jurídico permanente?",
    answer:
      "Sí. Muchas organizaciones requieren apoyo legal continuo para revisar contratos, gestionar riesgos jurídicos, fortalecer el cumplimiento normativo y acompañar decisiones empresariales estratégicas.",
  },

  {
    question: "¿Qué beneficios ofrece Legal App Pravice?",
    answer:
      "Legal App Pravice permite consultar información relacionada con procesos, acceder a documentos autorizados, recibir notificaciones y mantener comunicación con el equipo jurídico desde cualquier lugar de Colombia.",
  },

  {
    question:
      "¿Pravice presta servicios de acompañamiento jurídico corporativo?",
    answer:
      "Sí. Trabajamos con empresas de distintos sectores económicos brindando apoyo en gestión legal, seguimiento de asuntos corporativos, organización documental y acompañamiento jurídico estratégico.",
  },
];

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        <header>
          <motion.h2
            id="faq-title"
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Preguntas frecuentes sobre{" "}
            <span>acompañamiento jurídico en Colombia</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Resolvemos dudas frecuentes sobre procesos legales, gestión
            jurídica, seguimiento de casos, consultoría empresarial, Legal App
            Pravice y acompañamiento legal para empresas y personas en Colombia.
          </motion.p>
        </header>

        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
