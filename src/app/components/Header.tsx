"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOPBAR */}
      <div className={styles.topbar}>
        <div className={styles.topContainer}>
          <div className={styles.info}>
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> Calle 98 # 22-64 OF 716
              Bogotá D.C.
            </span>

            <span>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              info.pravice@abogadosespecialistas.com.co
            </span>

            <span>
              <FontAwesomeIcon icon={faPhone} /> (601) 3099331
            </span>
          </div>

          <div className={styles.socials}>
            <Link href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>

            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Pravice <span>Abogados</span>
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
            <Link href="#hero">Inicio</Link>
            <Link href="/areas">Áreas de práctica</Link>
            <Link href="/equipo">Equipo</Link>
            <Link href="/especialidades">Especialidades</Link>
            <Link href="/blog">Blog</Link>

            <Link href="/contacto" className={styles.cta}>
              Contacto
            </Link>
          </nav>

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
