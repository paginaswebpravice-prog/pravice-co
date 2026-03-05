"use client";

import styles from "../styles/LegalApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faComments,
  faBell,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function LegalApp() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <h2 className={styles.title}>
          Legal App: tu caso, siempre <span>en tus manos</span>
        </h2>

        <p className={styles.subtitle}>
          Accede a nuestra plataforma web exclusiva y mantente al tanto de cada
          avance en tu proceso legal. Transparencia total, comunicación directa
          y notificaciones en tiempo real, desde cualquier dispositivo.
        </p>

        {/* FEATURES GRID */}
        <div className={styles.grid}>
          {/* Item 1 */}
          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGlasses} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Seguimiento en tiempo real</h3>
            <p>
              Consulta el estado actualizado de tu caso en cualquier momento.
              Sin llamadas de espera, sin incertidumbre.
            </p>
          </div>

          {/* Item 2 */}
          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Consultas y preguntas</h3>
            <p>
              Envía preguntas directamente a tu abogado a través de la
              plataforma ante cualquier novedad o duda que surja.
            </p>
          </div>

          {/* Item 3 */}
          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Notificaciones automáticas</h3>
            <p>
              Recibe alertas inmediatas sobre actualizaciones, documentos nuevos
              o cambios importantes en tu proceso.
            </p>
          </div>

          {/* Item 4 */}
          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Documentos seguros</h3>
            <p>
              Accede y descarga tus documentos legales de forma segura,
              organizada y disponible las 24 horas.
            </p>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className={styles.bottom}>
          <div className={styles.smallCard}>
            <h3>✅ Disponible 24/7</h3>
            <p>
              Accede a tu expediente en cualquier momento, desde cualquier lugar
              de Colombia.
            </p>
          </div>

          <div className={styles.smallCard}>
            <h3>🔒 100% seguro y privado</h3>
            <p>
              Tu información legal está protegida con los más altos estándares
              de seguridad digital.
            </p>
          </div>

          <div className={styles.ctaCard}>
            <h3>Accede a Legal App</h3>
            <p>
              Ingresa con tus credenciales y gestiona tu caso de forma ágil y
              transparente.
            </p>

            <Link
              href="https://legalapp.pravice.co/login.php"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ingresar a Legal App
            </Link>

            <span>¿Primera vez? Solicita tu acceso escribiéndonos.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
