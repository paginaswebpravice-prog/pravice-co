"use client";

import Script from "next/script";
import styles from "./AbogadosGrid.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const abogados = [
  {
    nombre: "Alberto Castro",
    slug: "abogado-Alberto",
    imagen: "/doc-albertoImage.jpg",
    alt: "Alberto Castro abogado especialista en derecho comercial en Colombia",
    cargo: "Más de 20 años apoyando empresas y negocios",
  },
  {
    nombre: "Leidy Tirado",
    slug: "abogada-Leidy",
    imagen: "/doc-leidyImage.jpg",
    alt: "Leidy Tirado abogada especialista en derecho corporativo en Colombia",
    cargo: "Dirección jurídica y estrategia empresarial",
  },
  {
    nombre: "Angie Rivera",
    slug: "abogada-Angie",
    imagen: "/doc-angieImage.jpg",
    alt: "Angie Rivera abogada especialista en procesos ejecutivos en Colombia",
    cargo: "Recuperación de cartera y procesos ejecutivos",
  },
  {
    nombre: "Guillermo Rodríguez",
    slug: "abogado-Guillermo",
    imagen: "/doc-guillermoImage.jpg",
    alt: "Guillermo Rodríguez abogado en Colombia especialista en derecho laboral y familia",
    cargo: "Litigios y representación judicial",
  },
  {
    nombre: "Harrison Pérez",
    slug: "abogado-Harrison",
    imagen: "/doc-harrisonImage.jpg",
    alt: "Harrison Pérez abogado especialista en derecho empresarial en Colombia",
    cargo: "Derecho laboral y gestión de relaciones laborales",
  },
  {
    nombre: "Marcial Ortiz",
    slug: "abogado-Marcial",
    imagen: "/doc-marcialImage.jpg",
    alt: "Marcial Ortiz abogado especialista en derecho laboral en Colombia",
    cargo: "Especialista en derecho laboral",
  },
  {
    nombre: "Santiago Franco",
    slug: "abogado-Santiago",
    imagen: "/doc-santiagoImage.jpg",
    alt: "Santiago Franco abogado penalista en Colombia",
    cargo: "Compliance y derecho penal corporativo",
  },
];

export default function AbogadosContent() {
  const router = useRouter();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Equipo jurídico Pravice",
    description:
      "Equipo jurídico de Pravice conformado por profesionales del derecho con experiencia en acompañamiento legal, consultoría jurídica empresarial y gestión de asuntos corporativos en Colombia.",
    provider: {
      "@type": "Organization",
      name: "Pravice",
      url: "https://pravice.co",
    },
  };

  return (
    <>
      <Script
        id="schema-abogados"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className={styles.section}>
        {/* ================= HEADER ================= */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className={styles.badge}>Nuestro equipo jurídico</span>

          <h1 className={styles.title}>
            Conoce al Equipo Jurídico de Pravice en Colombia
          </h1>

          <p className={styles.subtitle}>
            Profesionales con experiencia en derecho empresarial, derecho
            comercial, recuperación de cartera, litigios, compliance y
            acompañamiento jurídico corporativo.
            <br />
            <br />
            Si buscas información sobre abogados especialistas por área de
            práctica, también puedes consultar nuestro portal aliado{" "}
            <a
              href="https://abogadosespecialistas.com.co/abogados/index.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#004080", fontWeight: 600 }}
            >
              abogadosespecialistas.com.co
            </a>
            .
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className={styles.grid}>
          {abogados.map((abogado, index) => (
            <motion.article
              key={index}
              className={styles.card}
              onClick={() => router.push(`/abogados/${abogado.slug}`)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={abogado.imagen}
                  alt={abogado.alt}
                  width={500}
                  height={600}
                  className={styles.image}
                />

                <div className={styles.overlay}>
                  <span>Ver perfil</span>
                </div>
              </div>

              <div className={styles.info}>
                <h3>{abogado.nombre}</h3>
                <p>{abogado.cargo}</p>
              </div>

              <p className={styles.seoText}>
                {abogado.nombre} hace parte del equipo jurídico de Pravice en
                Colombia.
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
