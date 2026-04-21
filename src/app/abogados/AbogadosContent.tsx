"use client";

import styles from "./AbogadosGrid.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    nombre: "Angie Rivera",
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
      {/* TÍTULO (OPTIMIZADO CTR) */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Abogados en Bogotá Colombia | Especialistas en derecho empresarial
      </motion.h2>

      {/* GRID */}
      <div className={styles.grid}>
        {abogados.map((abogado, index) => (
          <motion.div
            key={index}
            className={styles.card}
            onClick={() => router.push(`/abogados/${abogado.slug}`)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={abogado.imagen}
              alt={abogado.alt}
              loading="lazy"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                initial={{ y: 10, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Ver perfil
              </motion.span>
            </motion.div>

            <p className={styles.seoText}>
              {abogado.nombre} abogado en Bogotá Colombia especializado en
              derecho comercial, asesoría jurídica empresarial y contratos.
            </p>
          </motion.div>
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
