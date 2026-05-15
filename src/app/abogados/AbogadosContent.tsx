"use client";

import styles from "./AbogadosGrid.module.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const abogados = [
  {
    nombre: "Alberto Castro",
    slug: "abogado-Alberto",
    imagen: "/doc-alberto.jpg",
    alt: "Alberto Castro abogado especialista en recuperación de cartera y derecho comercial en Bogotá Colombia",
    cargo: "Fundador y experto en recuperación de cartera",
  },
  {
    nombre: "Leidy Tirado",
    slug: "abogada-Leidy",
    imagen: "/doc-leidy.jpg",
    alt: "Leidy Tirado abogada especialista en derecho comercial y empresarial en Bogotá Colombia",
    cargo: "Directora área comercial y derecho empresarial",
  },
  {
    nombre: "Angie Rivera",
    slug: "abogada-Angie",
    imagen: "/doc-angie.jpg",
    alt: "Angie Rivera abogada especialista en recuperación de cartera y procesos ejecutivos en Bogotá Colombia",
    cargo: "Especialista en cartera y procesos ejecutivos",
  },
  {
    nombre: "Guillermo Rodríguez",
    slug: "abogado-Guillermo",
    imagen: "/doc-guillermo.jpg",
    alt: "Guillermo Rodríguez abogado especialista en derecho en Bogotá Colombia",
    cargo: "Abogado especialista en derecho laboral y de familia",
  },
  {
    nombre: "Harrison Pérez",
    slug: "abogado-Harrison",
    imagen: "/doc-harrison.jpg",
    alt: "Harrison Pérez abogado especialista en derecho comercial en Bogotá Colombia",
    cargo: "Especialista en derecho comercial, laboral y de familia",
  },
  {
    nombre: "Marcial Ortiz",
    slug: "abogado-Marcial",
    imagen: "/doc-marcial.jpg",
    alt: "Marcial Ortiz abogado especialista en recuperación de cartera en Bogotá Colombia",
    cargo: "Especialista en derecho laboral",
  },
  {
    nombre: "Santiago Franco",
    slug: "abogado-Santiago",
    imagen: "/doc-santiago.jpg",
    alt: "Santiago Franco abogado penalista y compliance en Bogotá Colombia",
    cargo: "Especialista en derecho penal y compliance",
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
          Abogados especialistas en Bogotá para empresas y personas
        </h2>

        <p className={styles.subtitle}>
          Conoce nuestro equipo de abogados expertos en derecho comercial,
          recuperación de cartera, derecho penal, compliance y asesoría jurídica
          empresarial en Bogotá Colombia.
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
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.imageWrapper}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={abogado.imagen}
                  alt={abogado.alt}
                  width={500}
                  height={600}
                  className={styles.image}
                  loading="lazy"
                />
              </motion.div>

              <div className={styles.overlay}>
                <span>Ver perfil profesional</span>
              </div>
            </div>

            <div className={styles.info}>
              <h3>{abogado.nombre}</h3>

              <p>{abogado.cargo}</p>
            </div>

            <p className={styles.seoText}>
              {abogado.nombre} abogado especialista en Bogotá Colombia con
              experiencia en asesoría jurídica, derecho comercial, recuperación
              de cartera, procesos ejecutivos y representación legal para
              empresas y personas.
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
            name: "Abogados especialistas en Bogotá Colombia",
            description:
              "Equipo de abogados especialistas en derecho comercial, recuperación de cartera, compliance, derecho penal y asesoría jurídica empresarial en Bogotá Colombia.",
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
