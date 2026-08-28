import styles from "../styles/Security.module.css";

const securityItems = [
  {
    number: "01",
    title: "Información protegida",
    description:
      "Tratamos la información relacionada con tu cartera de manera responsable y bajo criterios de confidencialidad.",
  },
  {
    number: "02",
    title: "Gestión confidencial",
    description:
      "La información de tu empresa y de tus clientes se maneja con discreción durante todo el proceso de cobranza.",
  },
  {
    number: "03",
    title: "Procesos organizados",
    description:
      "Trabajamos con procesos estructurados que permiten mantener un seguimiento ordenado de cada gestión realizada.",
  },
];

export default function Security() {
  return (
    <section className={styles.security} id="seguridad">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>SEGURIDAD Y CONFIANZA</span>

            <h2>
              Tu información merece una gestión{" "}
              <span>segura y responsable</span>
            </h2>

            <p>
              Entendemos que la gestión de cartera implica información
              importante para tu empresa. Por eso, trabajamos bajo principios de
              confidencialidad, organización y responsabilidad en cada etapa del
              proceso.
            </p>

            <p>
              Nuestro objetivo es ayudarte a recuperar tu cartera sin perder de
              vista algo fundamental: la confianza de tu empresa y de las
              personas con las que se relaciona.
            </p>
          </div>

          <div className={styles.items}>
            {securityItems.map((item) => (
              <article className={styles.item} key={item.number}>
                <div className={styles.icon}>
                  <span>{item.number}</span>
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
