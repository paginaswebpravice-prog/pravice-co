"use client";

import styles from "./AbogadosGrid.module.css";
import { useRouter } from "next/navigation";

const abogados = [
  {
    nombre: "Harrison Pérez",
    slug: "harrison-perez",
    imagen: "/PERFIL HARRISON PEREZ COMERCIAL (1).jpg",
    alt: "Harrison Pérez abogado en derecho comercial en Bogotá Colombia",
  },
  // agrega los otros 6 igual
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
