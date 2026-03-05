import styles from "../styles/Experience.module.css";
import Image from "next/image";

export default function Experience() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <h2 className={styles.title}>
          25 años de experiencia <span>protegiendo tus intereses</span>
        </h2>

        <p className={styles.subtitle}>
          En Pravice Abogados contamos con una trayectoria destacada en el
          ámbito legal, asesorando a empresas y personas en diversas áreas del
          derecho. Nuestro equipo está conformado por profesionales con amplia
          experiencia que brindan soluciones estratégicas adaptadas a cada
          cliente.
        </p>

        {/* IMAGE GRID */}
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/img1.jpg"
              alt="Proyecto 1"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img2.jpg"
              alt="Proyecto 2"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img3.jpg"
              alt="Proyecto 3"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img4.jpg"
              alt="Proyecto 4"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img5.jpg"
              alt="Proyecto 5"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img6.jpg"
              alt="Proyecto 6"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* INFO CARDS */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>📌 Áreas del derecho</h4>
            <p>Laboral · Civil · Penal · Comercial · Marcas · Insolvencia</p>
          </div>

          <div className={styles.card}>
            <h4>💻 Atención remota</h4>
            <p>
              Coordinamos en español con herramientas de trabajo remoto
              eficientes para toda Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <h4>🔗 Casos de éxito</h4>
            <p>
              Cada caso incluye un acompañamiento integral desde la consulta
              hasta la resolución final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
