"use client";

import styles from "../styles/LegalApp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faComments,
  faBell,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LegalApp() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Legal App Pravice",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Plataforma digital de Pravice Abogados que permite a los clientes consultar el estado de sus procesos legales, recibir notificaciones y acceder a documentos jurídicos de forma segura.",
    url: "https://legalapp.pravice.co",
    provider: {
      "@type": "Organization",
      name: "Pravice Abogados",
      url: "https://www.pravice.co/",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
  };

  return (
    <section
      className={styles.section}
      id="legalapp"
      aria-labelledby="legalapp-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}

        <motion.h2
          id="legalapp-title"
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Plataforma Legal para Clientes: <span>Legal App Pravice</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Con <strong>Legal App Pravice</strong>, nuestros clientes pueden
          realizar el <strong>seguimiento de su proceso legal online</strong>,
          consultar documentos, comunicarse con su abogado y recibir
          notificaciones automáticas sobre cualquier avance en su caso.
        </motion.p>

        {/* FEATURES GRID */}

        <div className={styles.grid}>
          {[
            {
              icon: faGlasses,
              title: "Seguimiento de procesos legales en tiempo real",
              text: "Consulta el estado actualizado de tu caso jurídico en cualquier momento sin necesidad de llamadas.",
            },
            {
              icon: faComments,
              title: "Comunicación directa con tu abogado",
              text: "Realiza preguntas o solicita información adicional directamente a tu abogado desde la plataforma.",
            },
            {
              icon: faBell,
              title: "Notificaciones automáticas del proceso",
              text: "Recibe alertas cuando haya avances, nuevos documentos o cambios importantes.",
            },
            {
              icon: faLock,
              title: "Acceso seguro a documentos legales",
              text: "Descarga y revisa tus documentos jurídicos de forma organizada y segura.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.iconLine}>
                <motion.div
                  className={styles.icon}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>

                <div className={styles.line}></div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CARDS */}

        <div className={styles.bottom}>
          {[
            {
              title: "Disponible 24/7",
              text: "Accede a tu expediente jurídico en cualquier momento desde cualquier lugar.",
            },
            {
              title: "Seguridad y privacidad",
              text: "La plataforma utiliza protocolos de seguridad para proteger la información legal.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={styles.smallCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}

          <motion.div
            className={styles.ctaCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Acceder a Legal App Pravice</h3>

            <p>
              Ingresa al portal de clientes para consultar el estado de tu caso
              y gestionar tu información legal.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="https://legalapp.pravice.co/login.php"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ingresar a Legal App
              </Link>
            </motion.div>

            <span>
              ¿Primera vez en la plataforma? Solicita tu acceso contactando con
              nuestro equipo.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
