"use client";

import styles from "../styles/OfficeLocation.module.css";

export default function OfficeLocation() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestra oficina</h2>

        <p className={styles.description}>
          Puedes visitarnos en nuestra oficina en Bogotá. Estamos ubicados en
          una zona estratégica para brindar atención legal personalizada a
          nuestros clientes.
        </p>

        <div className={styles.mapWrapper}>
          <iframe
            title="Oficina de conciliación en derecho en Bogotá - Pravice Abogados"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.addressCard}>
          <h3>Pravice Abogados</h3>
          <p>Calle 98 # 22-64 Oficina 716</p>
          <p>Bogotá D.C., Colombia</p>
          <p>Tel: (601) 3099331</p>
        </div>
      </div>
    </section>
  );
}
