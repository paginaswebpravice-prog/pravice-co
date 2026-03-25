"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons/faScaleBalanced";
import { motion } from "framer-motion";

export default function AboutUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    description:
      "Firma de abogados en Colombia especializada en asesoría jurídica empresarial y personal.",
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
            Quiénes somos
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <strong>Pravice Abogados</strong> es una{" "}
            <strong>firma de abogados en Bogotá, Colombia</strong> con más de{" "}
            <strong>25 años de experiencia</strong> brindando asesoría legal a
            empresas y personas. Contamos con abogados especializados en derecho
            empresarial, derecho comercial, recuperación de cartera, litigios,
            conciliación extrajudicial y asesoría jurídica corporativa en
            Colombia.
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que comenzó como un proyecto enfocado en{" "}
            <strong>recuperación de cartera en Colombia</strong> se ha
            transformado en una firma legal con abogados especializados en
            diferentes áreas del derecho, ofreciendo soluciones en cobro
            prejurídico, cobro jurídico, contratos comerciales, derecho
            societario, litigios empresariales y cumplimiento normativo para
            empresas en Bogotá y en toda Colombia.
          </motion.p>

          <motion.a
            className={styles.button}
            href="/#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FontAwesomeIcon icon={faScaleBalanced} /> Conoce nuestros servicios
          </motion.a>

          <ul className={styles.list}>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Innovar en la prestación de{" "}
              <strong>servicios legales en Bogotá y Colombia</strong>.
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Brindar{" "}
              <strong>
                soluciones jurídicas estratégicas para empresas y personas
              </strong>
              .
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Acompañar a nuestros clientes en procesos de{" "}
              <strong>
                recuperación de cartera, litigios y asesoría legal empresarial
              </strong>
              .
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
              alt="Equipo de abogados de Pravice Abogados en Colombia"
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
              "Pravice Abogados nos brindó un acompañamiento excepcional en
              nuestro proceso de recuperación de cartera y asesoría legal
              empresarial en Colombia."
            </p>
            <span>— Juan Camilo Restrepo, Gerente General</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
