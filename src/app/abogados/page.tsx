"use client";

import styles from "./AbogadosGrid.module.css";
import { useRouter } from "next/navigation";

const abogados = [
  {
    nombre: "Alberto Castro",
    slug: "alberto-castro",
    imagen: "/PERFIL ALBERTO CASTRO.jpg",
    alt: "Alberto Castro abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Leidy Tirado",
    slug: "leidy-tirado",
    imagen: "/PERFIL LEIDY TIRADO (1).jpg",
    alt: "Leidy Tirado abogada en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Angie Rivera ",
    slug: "angie-rivera",
    imagen: "/PERFIL ANGIE RIVERA (1).jpg",
    alt: "Angie Rivera abogada en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Guillermo Rodríguez",
    slug: "guillermo-rodriguez",
    imagen: "/PERFIL GUILLERMO RODRIGUEZ FAMILIA.jpg",
    alt: "Guillermo Rodríguez abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Harrison Pérez",
    slug: "harrison-perez",
    imagen: "/PERFIL HARRISON PEREZ COMERCIAL (1).jpg",
    alt: "Harrison Pérez abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Marcial Ortiz",
    slug: "marcial-ortiz",
    imagen: "/PERFIL MARCIAL ORTIZ.jpg",
    alt: "Marcial Ortiz abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Santiago Franco",
    slug: "santiago-franco",
    imagen: "/PERFIL SANTIAGO FRANCO.jpg",
    alt: "Santiago Franco abogado en derecho comercial en Bogotá Colombia",
  },
];

export default function AbogadosGrid() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestros abogados en Bogotá Colombia</h2>

      <div className={styles.grid}>
        {abogados.map((abogado, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => router.push(`/abogados/${abogado.slug}`)}
          >
            {/* IMAGEN COMPLETA */}
            <img src={abogado.imagen} alt={abogado.alt} loading="lazy" />

            {/* OVERLAY PARA MEJOR UX */}
            <div className={styles.overlay}>
              <span>Ver perfil</span>
            </div>

            {/* SEO OCULTO (IMPORTANTE) */}
            <p className={styles.seoText}>
              {abogado.nombre} abogado en Bogotá Colombia especializado en
              derecho comercial, asesoría jurídica empresarial y contratos.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
