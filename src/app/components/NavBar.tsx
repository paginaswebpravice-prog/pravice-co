"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Pravice <span>Abogados</span>
        </Link>

        {/* MENU */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link href="/">Inicio</Link>
          <Link href="/areas">Áreas de práctica</Link>
          <Link href="/equipo">Nuestro equipo</Link>
          <Link href="/especialidades">Especialidades</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto" className={styles.cta}>
            Contacto
          </Link>
        </nav>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
