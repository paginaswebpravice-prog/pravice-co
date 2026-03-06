"use client";

import styles from "../styles/ContactoCTA.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function ContactoCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>
            ¿Listo para proteger tus intereses{" "}
            <span>con expertos legales?</span>
          </h2>

          <p>
            Cuéntanos tu caso y nuestro equipo te responderá en menos de 24
            horas. El primer paso hacia la solución de tu problema legal
            comienza con una conversación.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className={styles.grid}>
          {/* EMAIL */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <h3>Email</h3>

            <p>
              info.pravice@abogadosespecialistas.com.co — Respondemos en menos
              de 24h laborales.
            </p>

            <Link href="mailto:info.pravice@abogadosespecialistas.com.co">
              Enviar correo
            </Link>
          </div>

          {/* TELEFONO */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <h3>Teléfono</h3>

            <p>
              (601) 3099331 · (311) 465-9315 <br />
              Lunes a viernes 8h-18h, sábados 8h-13h
            </p>

            <Link href="tel:+573114659315">Llamar ahora</Link>
          </div>

          {/* WHATSAPP */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            <h3>WhatsApp</h3>

            <p>
              Escríbenos directamente por WhatsApp para recibir orientación
              inicial sobre tu caso.
            </p>

            <Link href="https://wa.me/573114659315" target="_blank">
              Abrir WhatsApp
            </Link>
          </div>

          {/* DIRECCION */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <h3>Dirección</h3>

            <p>
              Calle 98 # 22-64 Of 716 <br />
              Bogotá D.C. — También atendemos de forma remota.
            </p>

            <Link href="https://maps.google.com" target="_blank">
              Ver en mapa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
