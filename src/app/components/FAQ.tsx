import styles from "../styles/FAQ.module.css";

const faqs = [
  {
    question: "¿Qué tipo de cartera pueden gestionar?",
    answer:
      "Podemos gestionar diferentes tipos de cartera vencida y obligaciones pendientes de pago, de acuerdo con las características y necesidades de cada empresa. Analizamos el caso para definir la estrategia de gestión más adecuada.",
  },
  {
    question: "¿En qué momento debería iniciar una gestión de cobranza?",
    answer:
      "Lo ideal es actuar de manera oportuna. Una gestión temprana permite realizar seguimiento a las obligaciones pendientes antes de que la mora aumente y se vuelva más compleja su recuperación.",
  },
  {
    question: "¿La cobranza se realiza directamente con los deudores?",
    answer:
      "Sí. La gestión contempla el contacto y seguimiento de las obligaciones pendientes mediante diferentes canales de comunicación, buscando generar acuerdos y facilitar la recuperación de la cartera.",
  },
  {
    question:
      "¿Pueden gestionar una cartera que ya lleva varios meses vencida?",
    answer:
      "Sí. Podemos analizar obligaciones con diferentes niveles de mora y establecer una estrategia de gestión de acuerdo con las características de cada cartera.",
  },
  {
    question: "¿Cómo puedo conocer el estado de la gestión de mi cartera?",
    answer:
      "La gestión se realiza de manera organizada, permitiendo hacer seguimiento a las actuaciones realizadas sobre las obligaciones entregadas para cobranza y conocer su evolución.",
  },
  {
    question: "¿La gestión de cobranza garantiza la recuperación del dinero?",
    answer:
      "Ninguna estrategia de cobranza puede garantizar la recuperación total de una obligación. Sin embargo, una gestión organizada y oportuna puede aumentar las posibilidades de recuperación y contribuir a reducir los niveles de cartera vencida.",
  },
  {
    question: "¿Puedo entregar una cartera completa para su gestión?",
    answer:
      "Sí. Podemos analizar la cartera de tu empresa y determinar la estrategia de gestión más conveniente según el volumen, características de las obligaciones, antigüedad y demás factores relevantes.",
  },
  {
    question: "¿Cómo puedo solicitar información sobre el servicio?",
    answer:
      "Puedes comunicarte con nuestro equipo para contarnos sobre las necesidades de tu empresa y recibir orientación sobre el proceso de gestión de cartera.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>PREGUNTAS FRECUENTES</span>

          <h2>
            Resolvemos tus dudas sobre la <span>gestión de cartera</span>
          </h2>

          <p>
            Estas son algunas de las preguntas más frecuentes sobre nuestro
            servicio de cobranza y recuperación de cartera.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <details className={styles.item} key={index}>
              <summary>
                <span>{faq.question}</span>
                <span className={styles.icon}>+</span>
              </summary>

              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
