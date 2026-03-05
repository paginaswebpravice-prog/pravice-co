"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* TOPBAR */}
      <div className={styles.topbar}>
        <div className={styles.topContainer}>
          <div className={styles.info}>
            <span>📍 Bogotá, Colombia</span>
            <span>✉️ contacto@pravice.com</span>
          </div>

          <div className={styles.socials}>
            <Link href="#">FB</Link>
            <Link href="#">IG</Link>
            <Link href="#">IN</Link>
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
            <Link href="/">Inicio</Link>
            <Link href="/areas">Áreas de práctica</Link>
            <Link href="/equipo">Equipo</Link>
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
