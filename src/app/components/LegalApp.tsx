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
    applicationCategory: "LegalApplication",
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
    featureList: [
      "Seguimiento de procesos jurídicos",
      "Consulta de expedientes",
      "Gestión documental",
      "Notificaciones automáticas",
      "Comunicación con profesionales jurídicos",
    ],
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
          Legal App Pravice: plataforma para seguimiento de procesos legales en
          Colombia
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Con Legal App Pravice, empresas y clientes pueden consultar el estado
          de sus procesos jurídicos, acceder a documentos legales, recibir
          notificaciones y realizar seguimiento online desde cualquier lugar de
          Colombia.
        </motion.p>

        {/* FEATURES GRID */}

        <div className={styles.grid}>
          {[
            {
              icon: faGlasses,
              title: "Consulta el estado de tu proceso jurídico online",
              text: "Accede al avance de tus procesos legales, actuaciones y novedades desde una única plataforma digital.",
            },
            {
              icon: faComments,
              title: "Comunicación y seguimiento jurídico centralizado",
              text: "Mantén un canal organizado para resolver dudas y consultar información relacionada con tu proceso.",
            },
            {
              icon: faBell,
              title: "Alertas y novedades en tiempo real",
              text: "Recibe información sobre cambios, actualizaciones y movimientos importantes asociados a tu expediente.",
            },
            {
              icon: faLock,
              title: "Gestión digital de documentos jurídicos",
              text: "Consulta y descarga documentos legales desde un entorno seguro y organizado.",
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
              title: "Acceso permanente a tu información legal",
              text: "Accede a tu expediente jurídico en cualquier momento desde cualquier lugar.",
            },
            {
              title: "Protección de datos y confidencialidad",
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
            <h3>Gestiona tus procesos legales desde un solo lugar</h3>

            <p>
              Ingresa a Legal App para consultar expedientes, revisar documentos
              jurídicos y realizar seguimiento de tus procesos de manera
              digital.
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
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            maxWidth: "900px",
            margin: "50px auto 0",
            textAlign: "center",
          }}
        >
          Legal App Pravice es una plataforma digital diseñada para facilitar el
          seguimiento de procesos jurídicos, la gestión documental y la
          comunicación entre clientes y profesionales del derecho. Su enfoque
          permite centralizar información legal, optimizar tiempos de consulta y
          mejorar la experiencia de empresas y personas que requieren
          acompañamiento jurídico en Colombia.
        </motion.p>
      </div>
    </section>
  );
}
