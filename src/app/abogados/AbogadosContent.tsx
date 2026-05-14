"use client";

import styles from "./AbogadosGrid.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const abogados = [
  {
    nombre: "Alberto Castro",
    slug: "abogado-Alberto",
    imagen: "/PERFIL ALBERTO CASTRO.jpg",
    alt: "Alberto Castro abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Leidy Tirado",
    slug: "abogada-Leidy",
    imagen: "/PERFIL LEIDY TIRADO (1).jpg",
    alt: "Leidy Tirado abogada en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Angie Rivera",
    slug: "abogada-Angie",
    imagen: "/PERFIL ANGIE RIVERA (1).jpg",
    alt: "Angie Rivera abogada en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Guillermo Rodríguez",
    slug: "abogado-Guillermo",
    imagen: "/PERFIL GUILLERMO RODRIGUEZ FAMILIA.jpg",
    alt: "Guillermo Rodríguez abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Harrison Pérez",
    slug: "abogado-Harrison",
    imagen: "/PERFIL HARRISON PEREZ COMERCIAL (1).jpg",
    alt: "Harrison Pérez abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Marcial Ortiz",
    slug: "abogado-Marcial",
    imagen: "/PERFIL MARCIAL ORTIZ.jpg",
    alt: "Marcial Ortiz abogado en derecho comercial en Bogotá Colombia",
  },
  {
    nombre: "Santiago Franco",
    slug: "abogado-Santiago",
    imagen: "/PERFIL SANTIAGO FRANCO.jpg",
    alt: "Santiago Franco abogado en derecho comercial en Bogotá Colombia",
  },
];

export default function AbogadosGrid() {
  const router = useRouter();

  return (
    <section className={styles.section}>
      {/* TITULO */}
      <motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className={styles.badge}>Equipo Jurídico</span>

        <h2 className={styles.title}>
          Abogados especialistas en Bogotá Colombia
        </h2>

        <p className={styles.subtitle}>
          Conoce nuestro equipo de abogados y encuentra asesoría jurídica
          especializada para empresas y personas.
        </p>
      </motion.div>

      {/* GRID */}
      <div className={styles.grid}>
        {abogados.map((abogado, index) => (
          <motion.article
            key={index}
            className={styles.card}
            onClick={() => router.push(`/abogados/${abogado.slug}`)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.imageWrapper}>
              <motion.img
                src={abogado.imagen}
                alt={abogado.alt}
                loading="lazy"
                className={styles.image}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              <div className={styles.overlay}>
                <span>Ver perfil</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3>{abogado.nombre}</h3>

              <p>Abogado especialista en Bogotá Colombia</p>
            </div>

            <p className={styles.seoText}>
              {abogado.nombre} abogado en Bogotá Colombia especializado en
              derecho comercial, asesoría jurídica empresarial y contratos.
            </p>
          </motion.article>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Equipo de abogados en Bogotá Colombia",
            itemListElement: abogados.map((a, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: a.nombre,
              url: `https://pravice.co/abogados/${a.slug}`,
              image: `https://pravice.co${a.imagen}`,
            })),
          }),
        }}
      />
    </section>
  );
}
