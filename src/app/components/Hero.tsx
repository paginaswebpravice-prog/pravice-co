"use client";

import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Overlay oscuro */}
      <div className={styles.overlay}></div>

      {/* Contenido */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Especialistas en cada caso, excelencia en cada resultado
        </h1>

        <p className={styles.subtitle}>
          Agenda tu consulta con nuestros expertos y obtén la mejor solución
          legal. Desde 1998, protegiendo los intereses de empresas y personas en
          Colombia.
        </p>

        <div className={styles.buttons}>
          <Link
            href="https://legalapp.pravice.co/login.php"
            className={styles.primaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar mi caso
          </Link>

          <Link
            href="https://drive.google.com/file/d/1IIEGEpqNm_FiPhvKKWBSnr_iLbDXcBWV/view"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce Legal App
          </Link>
        </div>
      </div>
    </section>
  );
}
