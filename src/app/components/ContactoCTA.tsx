"use client";

import styles from "../styles/ContactoCTA.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactoCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}

        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Listo para proteger tus intereses{" "}
            <span>con expertos legales?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cuéntanos tu caso y nuestro equipo te responderá en menos de 24
            horas. El primer paso hacia la solución de tu problema legal
            comienza con una conversación.
          </motion.p>
        </div>

        {/* CONTACT GRID */}

        <div className={styles.grid}>
          {[
            {
              icon: faEnvelope,
              title: "Email",
              text: "info.pravice@abogadosespecialistas.com.co — Respondemos en menos de 24h laborales.",
              link: "mailto:info.pravice@abogadosespecialistas.com.co",
              label: "Enviar correo",
            },
            {
              icon: faPhone,
              title: "Teléfono",
              text: "(601) 3099331 · (311) 465-9315 Lunes a viernes 8h-18h, sábados 8h-13h",
              link: "tel:+573114659315",
              label: "Llamar ahora",
            },
            {
              icon: faWhatsapp,
              title: "WhatsApp",
              text: "Escríbenos directamente por WhatsApp para recibir orientación inicial sobre tu caso.",
              link: "https://wa.me/573114659315",
              label: "Abrir WhatsApp",
            },
            {
              icon: faLocationDot,
              title: "Dirección",
              text: "Calle 98 # 22-64 Of 716 — Bogotá D.C. También atendemos de forma remota.",
              link: "https://maps.google.com",
              label: "Ver en mapa",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <Link href={item.link} target="_blank">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
