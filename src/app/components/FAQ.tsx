"use client";

import styles from "../styles/FAQ.module.css";

const faqs = [
  {
    question: "¿Cuánto tiempo dura un proceso legal?",
    answer:
      "Los tiempos varían según la complejidad del caso. Te informamos desde el inicio sobre los plazos estimados para que puedas planificar con tranquilidad.",
  },
  {
    question: "¿Puedo migrar mi caso desde otro abogado?",
    answer:
      "Por supuesto. Analizamos tu situación actual y te orientamos sobre cómo continuar el proceso de la mejor manera posible.",
  },
  {
    question: "¿Cuál es el costo de la asesoría?",
    answer:
      "Cada caso es único. Ofrecemos presupuestos personalizados según el alcance y la complejidad. Contáctanos para recibir una propuesta sin compromiso.",
  },
  {
    question: "¿Trabajan con clientes fuera de Bogotá?",
    answer:
      "Sí, trabajamos con clientes en toda Colombia. Nos coordinamos de forma remota con herramientas eficientes en español.",
  },
  {
    question: "¿Ofrecen soporte continuo durante el proceso?",
    answer:
      "Sí. Te acompañamos en cada etapa del proceso legal, desde la consulta inicial hasta la resolución final del caso.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Básicamente contarnos tu caso. Te guiamos desde la consulta inicial hasta la estrategia y el proceso legal completo.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas frecuentes</h2>

        <p className={styles.subtitle}>
          Resolvemos las dudas más comunes antes de empezar. Si no encuentras tu
          respuesta aquí, escríbenos directamente y te respondemos sin
          compromiso.
        </p>

        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.card}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
