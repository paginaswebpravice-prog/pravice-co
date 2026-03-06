"use client";

import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COLUMNA 1 */}
        <div className={styles.col}>
          <h3 className={styles.logo}>
            Pravice <span>Abogados</span>
          </h3>

          <p>
            Firma de abogados especializada en asesoría legal integral en
            Bogotá, Colombia. Desde 1998 protegiendo los intereses de nuestros
            clientes con estrategia y experiencia.
          </p>

          <div className={styles.tag}>DERECHO · ESTRATEGIA · RESULTADOS</div>

          {/* REDES */}
          <div className={styles.socials}>
            <Link href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link href="#">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className={styles.col}>
          <h4>Áreas del Derecho</h4>

          <ul>
            <li>
              <Link href="#">Registro de Marca</Link>
            </li>
            <li>
              <Link href="#">Derecho Laboral</Link>
            </li>
            <li>
              <Link href="#">Insolvencia</Link>
            </li>
            <li>
              <Link href="#">Derecho Civil</Link>
            </li>
            <li>
              <Link href="#">Derecho Penal</Link>
            </li>
            <li>
              <Link href="#">Derecho Comercial</Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div className={styles.col}>
          <h4>Contacto</h4>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bogotá, Colombia</span>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} />
            <span>(601) 3099331 · (311) 465-9315</span>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info.pravice@abogadosespecialistas.com.co</span>
          </div>

          <Link
            href="https://wa.me/573114659315"
            target="_blank"
            className={styles.cta}
          >
            Consultar por WhatsApp
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © 2025 Pravice Abogados — Todos los derechos reservados · Política de
        privacidad · Aviso legal
      </div>
    </footer>
  );
}
