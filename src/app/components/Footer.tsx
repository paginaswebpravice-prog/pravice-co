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
  faClock,
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

          <p className={styles.description}>
            Firma de abogados especializada en asesoría legal integral en
            Bogotá, Colombia. Desde 1998 brindamos soluciones jurídicas
            estratégicas para empresas y personas.
          </p>

          <div className={styles.tag}>DERECHO · ESTRATEGIA · RESULTADOS</div>

          <div className={styles.socials}>
            <Link href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link href="#" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link href="https://wa.me/573114659315" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className={styles.col}>
          <h4>Navegación</h4>

          <ul>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/areas">Áreas de práctica</Link>
            </li>
            <li>
              <Link href="/equipo">Nuestro equipo</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
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

        {/* COLUMNA 4 */}
        <div className={styles.col}>
          <h4>Contacto</h4>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bogotá, Colombia</span>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+576013099331">(601) 3099331</a>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:info.pravice@abogadosespecialistas.com.co">
              info.pravice@abogadosespecialistas.com.co
            </a>
          </div>

          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faClock} />
            <span>Lunes a Viernes — 8:00am a 6:00pm</span>
          </div>

          <Link
            href="https://wa.me/573114659315"
            target="_blank"
            className={styles.cta}
          >
            Consulta por WhatsApp
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2025 Pravice Abogados — Todos los derechos reservados</p>

        <div className={styles.legalLinks}>
          <Link href="/privacidad">Política de privacidad</Link>
          <Link href="/terminos">Términos y condiciones</Link>
          <Link href="/cookies">Política de cookies</Link>
        </div>
      </div>
    </footer>
  );
}
