"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import Link from "next/link";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons/faScaleBalanced";
import { motion } from "framer-motion";

export default function AboutUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice",
    description:
      "Firma jurídica y plataforma de acompañamiento legal en Colombia.",
  };

  return (
    <section
      className={styles.section}
      id="aboutUs"
      aria-labelledby="aboutus-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <motion.h2
            id="aboutus-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Equipo jurídico y acompañamiento legal en Colombia
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <strong>Pravice</strong> es una firma jurídica y plataforma de
            acompañamiento legal en Colombia orientada a empresas, emprendedores
            y personas que requieren consultoría jurídica, orientación
            estratégica y apoyo profesional en diferentes áreas del derecho.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro equipo trabaja junto a abogados y profesionales aliados para
            facilitar procesos de consultoría legal, gestión documental,
            cumplimiento normativo y acompañamiento jurídico empresarial y
            particular.
          </motion.p>

          {/* BACKLINK SEO */}

          <motion.div
            className={styles.referenceBox}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Si deseas conocer más sobre nuestros abogados especialistas,
              representación judicial y áreas jurídicas específicas, puedes
              visitar:
            </p>

            <Link
              href="https://abogadosespecialistas.com.co/quienes-somos.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.referenceLink}
            >
              abogadosespecialistas.com.co/quienes-somos.html
            </Link>
          </motion.div>

          <motion.a
            className={styles.button}
            href="/abogados"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FontAwesomeIcon icon={faScaleBalanced} /> Ver abogados y
            profesionales aliados
          </motion.a>

          <ul className={styles.list}>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Consultoría jurídica y acompañamiento legal para empresas y
              personas en Colombia.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Herramientas digitales para seguimiento de procesos y gestión
              legal.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Red de abogados especializados en derecho corporativo, comercial,
              contractual, laboral y otras áreas jurídicas.
            </motion.li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src="/foto-grupal.jpg"
              alt="Equipo jurídico de Pravice y profesionales aliados en Colombia"
              fill
              className={styles.image}
            />
          </motion.div>

          <motion.div
            className={styles.testimonial}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              "Pravice nos ayudó a organizar nuestros procesos legales y contar
              con acompañamiento jurídico oportuno para la toma de decisiones
              empresariales."
            </p>

            <span>— Cliente corporativo</span>
          </motion.div>
        </div>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          Con más de 25 años de trayectoria, Pravice participa en procesos de
          consultoría legal, acompañamiento jurídico empresarial, cumplimiento
          normativo, derecho corporativo, derecho comercial y gestión
          estratégica para organizaciones en Colombia.
        </motion.p>
      </div>
    </section>
  );
}
