"use client";

import styles from "../styles/OfficeLocation.module.css";
import { motion } from "framer-motion";

export default function OfficeLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestra oficina
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Puedes visitarnos en nuestra oficina en Bogotá. Estamos ubicados en
          una zona estratégica para brindar atención legal personalizada a
          nuestros clientes.
        </motion.p>

        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Oficina de conciliación en derecho en Bogotá - Pravice Abogados"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <motion.div
          className={styles.addressCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Pravice Abogados</h3>
          <p>Calle 98 # 22-64 Oficina 716</p>
          <p>Bogotá D.C., Colombia</p>
          <p>Tel: (601) 3099331</p>
        </motion.div>
      </div>
    </section>
  );
}
