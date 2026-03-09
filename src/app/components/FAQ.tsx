"use client";

import styles from "../styles/FAQ.module.css";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto tiempo dura un proceso legal en Colombia?",
    answer:
      "La duración de un proceso legal depende del tipo de caso, la complejidad del conflicto y la carga de trabajo de los juzgados. En Pravice Abogados analizamos cada situación y te informamos desde el inicio los tiempos estimados del proceso.",
  },
  {
    question: "¿Puedo cambiar de abogado y trasladar mi caso?",
    answer:
      "Sí. Es posible trasladar tu proceso legal a otro abogado. Nuestro equipo revisa tu expediente, analiza el estado del caso y te orienta sobre cómo continuar el proceso de la forma más conveniente.",
  },
  {
    question: "¿Cuánto cuesta una asesoría con un abogado?",
    answer:
      "El costo de una asesoría legal depende del tipo de consulta y la complejidad del caso. En Pravice Abogados ofrecemos evaluaciones personalizadas para brindarte una propuesta clara y transparente.",
  },
  {
    question: "¿Pravice Abogados trabaja con clientes fuera de Bogotá?",
    answer:
      "Sí. Atendemos clientes en todo Colombia. Gracias a herramientas digitales y atención remota podemos asesorar empresas y personas sin importar su ubicación.",
  },
  {
    question: "¿Ofrecen acompañamiento durante todo el proceso legal?",
    answer:
      "Sí. Nuestro equipo brinda acompañamiento completo desde la asesoría inicial, el análisis del caso, la estrategia jurídica y la gestión del proceso hasta su resolución.",
  },
  {
    question: "¿Qué necesito para iniciar un proceso legal?",
    answer:
      "Para empezar solo necesitas contarnos tu situación. Analizaremos tu caso, revisaremos los documentos disponibles y definiremos la estrategia legal más adecuada.",
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
            Preguntas frecuentes sobre <span>servicios legales</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Respondemos algunas de las preguntas más comunes sobre asesoría
            jurídica, procesos legales y servicios de abogados en Colombia.
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
