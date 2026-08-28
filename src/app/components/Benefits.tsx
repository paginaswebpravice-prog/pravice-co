import styles from "../styles/Benefits.module.css";

const benefits = [
  {
    number: "01",
    title: "Recupera tu cartera",
    description:
      "Impulsamos la recuperación de obligaciones pendientes mediante una gestión organizada, estratégica y enfocada en obtener resultados.",
  },
  {
    number: "02",
    title: "Reduce la cartera vencida",
    description:
      "Actuamos oportunamente sobre las obligaciones en mora para evitar que el deterioro de la cartera siga creciendo.",
  },
  {
    number: "03",
    title: "Ahorra tiempo y recursos",
    description:
      "Delegar la gestión de cobro permite que tu equipo se concentre en las actividades principales de la empresa.",
  },
  {
    number: "04",
    title: "Gestión profesional",
    description:
      "Contamos con procesos estructurados para realizar seguimiento a cada obligación y mantener una gestión constante.",
  },
  {
    number: "05",
    title: "Mayor control",
    description:
      "Centralizamos el seguimiento de la cartera para facilitar la organización, trazabilidad y toma de decisiones.",
  },
  {
    number: "06",
    title: "Protege tus relaciones",
    description:
      "Buscamos recuperar las obligaciones manteniendo una comunicación respetuosa y profesional con cada deudor.",
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits} id="beneficios">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>BENEFICIOS</span>

          <h2>
            Una gestión de cobranza pensada para <span>generar resultados</span>
          </h2>

          <p>
            No se trata solamente de cobrar. Se trata de gestionar tu cartera de
            manera estratégica para mejorar el flujo de caja, reducir la
            morosidad y darle mayor control a tu empresa.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article className={styles.card} key={benefit.number}>
              <div className={styles.number}>{benefit.number}</div>

              <div className={styles.content}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
