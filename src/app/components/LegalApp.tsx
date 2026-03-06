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
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Legal App Pravice",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plataforma digital de Pravice Abogados que permite a los clientes consultar el estado de sus procesos legales, recibir notificaciones y acceder a documentos jurídicos de forma segura.",
    url: "https://legalapp.pravice.co",
    provider: {
      "@type": "Organization",
      name: "Pravice Abogados",
      url: "https://praviceabogados.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    featureList: [
      "Seguimiento de procesos legales en tiempo real",
      "Consulta directa con abogados",
      "Notificaciones automáticas de actualizaciones",
      "Acceso seguro a documentos legales",
    ],
  };

  return (
    <section
      className={styles.section}
      id="legalapp"
      aria-labelledby="legalapp-title"
    >
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}
        <h2 id="legalapp-title" className={styles.title}>
          Plataforma Legal para Clientes: <span>Legal App Pravice</span>
        </h2>

        <p className={styles.subtitle}>
          Con <strong>Legal App Pravice</strong>, nuestros clientes pueden
          realizar el <strong>seguimiento de su proceso legal online</strong>,
          consultar documentos, comunicarse con su abogado y recibir
          notificaciones automáticas sobre cualquier avance en su caso.
          Transparencia, control y acceso seguro desde cualquier dispositivo.
        </p>

        {/* FEATURES GRID */}
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGlasses} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Seguimiento de procesos legales en tiempo real</h3>
            <p>
              Consulta el estado actualizado de tu caso jurídico en cualquier
              momento sin necesidad de llamadas o visitas presenciales.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Comunicación directa con tu abogado</h3>
            <p>
              Realiza preguntas o solicita información adicional directamente a
              tu abogado desde la plataforma.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Notificaciones automáticas del proceso</h3>
            <p>
              Recibe alertas cuando haya avances, nuevos documentos o cambios
              importantes en tu proceso legal.
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.iconLine}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <div className={styles.line}></div>
            </div>
            <h3>Acceso seguro a documentos legales</h3>
            <p>
              Descarga y revisa tus documentos jurídicos de forma organizada y
              segura las 24 horas del día.
            </p>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className={styles.bottom}>
          <div className={styles.smallCard}>
            <h3>Disponible 24/7</h3>
            <p>
              Accede a tu expediente jurídico en cualquier momento desde
              cualquier lugar de Colombia.
            </p>
          </div>

          <div className={styles.smallCard}>
            <h3>Seguridad y privacidad</h3>
            <p>
              La plataforma utiliza protocolos de seguridad para proteger la
              información legal de nuestros clientes.
            </p>
          </div>

          <div className={styles.ctaCard}>
            <h3>Acceder a Legal App Pravice</h3>
            <p>
              Ingresa al portal de clientes para consultar el estado de tu caso
              y gestionar tu información legal.
            </p>

            <Link
              href="https://legalapp.pravice.co/login.php"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ingresar al portal de clientes Legal App Pravice"
            >
              Ingresar a Legal App
            </Link>

            <span>
              ¿Primera vez en la plataforma? Solicita tu acceso contactando con
              nuestro equipo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
