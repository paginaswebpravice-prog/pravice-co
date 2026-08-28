import Link from "next/link";
import styles from "../styles/FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.backgroundShape}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>HABLEMOS DE TU CARTERA</span>

          <h2>
            Es momento de tomar el control de tus{" "}
            <span>obligaciones pendientes</span>
          </h2>

          <p>
            Cuéntanos las necesidades de tu empresa y conozcamos juntos la mejor
            manera de gestionar y recuperar tu cartera.
          </p>

          <div className={styles.actions}>
            <Link
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocer nuestros servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
