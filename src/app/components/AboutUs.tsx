import styles from "../styles/AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles.section} id="aboutUs">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>Quiénes somos</h2>

          <p className={styles.description}>
            Desde 1998, en Pravice Abogados hemos revolucionado la forma de
            prestar servicios legales. Lo que inició con la recuperación de
            cartera, hoy es una firma integral con expertos en todas las áreas
            del derecho. Cada caso es único y merece un especialista.
          </p>

          <button className={styles.button}>🚀 NUESTRA MISIÓN</button>

          <ul className={styles.list}>
            <li>Innovar en la prestación de servicios legales</li>
            <li>Brindar soluciones estratégicas y resultados efectivos</li>
            <li>Acompañar a nuestros clientes en cada paso del proceso</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/team.jpg"
              alt="Equipo Pravice"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.testimonial}>
            <p>
              "Pravice Abogados nos brindó un acompañamiento excepcional. Son un
              equipo confiable y altamente profesional."
            </p>
            <span>— Juan Camilo Restrepo, Gerente General</span>
          </div>
        </div>
      </div>
    </section>
  );
}
