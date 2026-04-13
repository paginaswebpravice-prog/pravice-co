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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const emailUser = "servicioalcliente";
  const emailDomain = "pravice.co";
  const email = `${emailUser}@${emailDomain}`;

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("waBubbleShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowBubble(true);
        localStorage.setItem("waBubbleShown", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
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
              <Link
                href="https://www.facebook.com/praviceabogadosespecializados"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>

              <Link
                href="https://www.instagram.com/pravice_abogados/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>

              <Link
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                target="_blank"
              >
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
                <Link href="#hero">Inicio</Link>
              </li>
              <li>
                <Link href="#services">Servicios</Link>
              </li>
              <li>
                <Link href="#legalapp">Legal App</Link>
              </li>
              <li>
                <Link href="#about">Nosotros</Link>
              </li>
              <li>
                <Link href="/especialidades">Especialidades</Link>
              </li>
              <li>
                <Link href="/abogados">Nuestro abogados</Link>
              </li>
              <li>
                <Link href="/videos">Videos</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.col}>
            <h4>Especialidades</h4>

            <ul>
              <li>
                <Link href="/especialidades/derecho-comercial">
                  Derecho Comercial
                </Link>
              </li>
              <li>
                <Link href="/especialidades/recuperacion-de-cartera">
                  Recuperación de Cartera
                </Link>
              </li>
              <li>
                <Link href="/especialidades/conciliacion">Conciliación</Link>
              </li>
              <li>
                <Link href="/especialidades/litigios">Litigios</Link>
              </li>
              <li>
                <Link href="/especialidades/derecho-empresarial">
                  Derecho Empresarial
                </Link>
              </li>
              <li>
                <Link href="/especialidades/asesoria-corporativa">
                  Asesoría Corporativa
                </Link>
              </li>
              <li>
                <Link href="/especialidades/derecho-contractual">
                  Derecho Contractual
                </Link>
              </li>
              <li>
                <Link href="/especialidades/derecho-societario">
                  Derecho Societario
                </Link>
              </li>
              <li>
                <Link href="/especialidades/derecho-administrativo">
                  Derecho Administrativo
                </Link>
              </li>
              <li>
                <Link href="/especialidades/resolucion-de-conflictos">
                  Resolución de Conflictos
                </Link>
              </li>
              <li>
                <Link href="/especialidades/cumplimiento-normativo">
                  Cumplimiento Normativo
                </Link>
              </li>
              <li>
                <Link href="/especialidades/proteccion-juridica-empresarial">
                  Protección Jurídica Empresarial
                </Link>
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
              <a href={`mailto:${email}`}>
                {emailUser}@{emailDomain}
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
          <p>
            © {new Date().getFullYear()} Pravice Abogados — Todos los derechos
            reservados
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacidad">Política de privacidad</Link>
            <Link href="/terminos">Términos y condiciones</Link>
            <Link href="/cookies">Política de cookies</Link>
          </div>
        </div>
      </footer>

      {/* BURBUJA WHATSAPP */}
      {showBubble && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.whatsappBubble}
        >
          <p>¿Necesitas asesoría legal?</p>
          <span>Te respondemos por WhatsApp ahora</span>
          <button onClick={() => setShowBubble(false)}>×</button>
        </motion.div>
      )}

      {/* BOTÓN WHATSAPP */}
      <Link
        href="https://wa.me/573114659315"
        target="_blank"
        className={styles.whatsappFloat}
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </>
  );
}
