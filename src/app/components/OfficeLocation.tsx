"use client";

import styles from "../styles/OfficeLocation.module.css";
import { motion } from "framer-motion";

export default function OfficeLocation() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",

    name: "Pravice Abogados",

    url: "https://pravice.co",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 98 # 22-64 Oficina 716",
      addressLocality: "Bogotá",
      addressRegion: "Bogotá D.C.",
      postalCode: "110221",
      addressCountry: "CO",
    },

    telephone: "+57 311 465 9315",

    areaServed: [
      {
        "@type": "City",
        name: "Bogotá",
      },
      {
        "@type": "Country",
        name: "Colombia",
      },
    ],
  };

  return (
    <section className={styles.section} aria-labelledby="office-location-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className={styles.container}>
        <motion.h2
          id="office-location-title"
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Oficina jurídica en Bogotá
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Nuestra oficina se encuentra ubicada en Bogotá D.C., desde donde
          coordinamos procesos de acompañamiento jurídico, consultoría legal,
          gestión documental y atención para empresas y personas en Colombia.
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Atendemos clientes en Bogotá, Medellín, Cali, Barranquilla,
          Bucaramanga y otras ciudades del país mediante canales presenciales y
          virtuales que facilitan el seguimiento de asuntos legales y
          corporativos.
        </motion.p>

        <motion.div
          className={styles.mapWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Oficina jurídica Pravice en Bogotá"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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

          <p>+57 311 465 9315</p>
        </motion.div>

        <div className={styles.seoContent}>
          <h3>Atención jurídica para empresas y personas en Colombia</h3>

          <p>
            Pravice desarrolla procesos de acompañamiento jurídico, consultoría
            legal, seguimiento de asuntos corporativos y gestión documental para
            clientes en Bogotá y otras ciudades de Colombia. Nuestro enfoque se
            orienta a facilitar la organización legal y el apoyo estratégico en
            diferentes escenarios empresariales y particulares.
          </p>
        </div>
      </div>
    </section>
  );
}
