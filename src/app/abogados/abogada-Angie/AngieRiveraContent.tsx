"use client";

import { motion } from "framer-motion";
import styles from "../AbogadoProfile.module.css";

export default function AngieRiveraContent() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        {/* ================= IMAGE ================= */}
        <motion.div
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/doc-angieImage.jpg"
              alt="Angie Rivera - Equipo jurídico Pravice"
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* ================= INFO ================= */}
        <motion.div
          className={styles.infoSide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Equipo Jurídico Pravice</span>

          <div>
            <h1 className={styles.title}>Angie Rivera</h1>
            <p className={styles.role}>Abogada</p>
          </div>

          {/* ================= CARTA DE PRESENTACIÓN ================= */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Carta de presentación</h2>

            <p>
              Recibe un cordial saludo. Mi nombre es Angie Rivera y hago parte
              del equipo jurídico de Pravice, donde participo en el apoyo de
              procesos relacionados con recuperación de cartera, conciliaciones
              y acuerdos de pago.
            </p>

            <p>
              Mi labor se integra dentro de las estrategias jurídicas del
              despacho, orientadas a la gestión eficiente de conflictos
              financieros y al acompañamiento de clientes en procesos
              empresariales.
            </p>

            <p>
              Puedes conocer más sobre el área principal de práctica en la que
              se enmarca este trabajo en nuestro servicio de{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados/abogados-angie-rivera.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                abogados especialistas en recuperación de cartera y procesos
                ejecutivos
              </a>
              .
            </p>
          </motion.div>

          {/* ================= ENFOQUE ================= */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Enfoque profesional</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <span>✓</span>
                <p>Trabajo coordinado dentro del equipo jurídico Pravice.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>Apoyo en conciliaciones y acuerdos de pago empresariales.</p>
              </div>

              <div className={styles.item}>
                <span>✓</span>
                <p>
                  Participación en estrategias de recuperación de cartera y
                  gestión de conflictos financieros.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
