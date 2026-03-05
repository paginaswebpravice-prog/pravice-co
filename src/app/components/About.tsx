"use client";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Una firma que <span>transforma desafíos legales</span> en soluciones
          sólidas
        </h2>

        <p className={styles.description}>
          Desde 1998, en Pravice Abogados hemos revolucionado la forma de
          prestar servicios legales, priorizando la especialización, la
          transparencia y los resultados reales. Lo que inició con la
          recuperación de cartera, hoy es una firma integral con expertos en
          todas las áreas del derecho.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Especialización</h3>
            <p>
              Cada caso es único y merece un especialista. Nuestro equipo cuenta
              con expertos en cada área del derecho.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Transparencia</h3>
            <p>
              Comunicación clara y honesta en cada etapa del proceso. Siempre
              sabrás cómo avanza tu caso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Resultados reales</h3>
            <p>
              Un historial sólido de casos resueltos con éxito. Convertimos los
              desafíos legales en soluciones efectivas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
