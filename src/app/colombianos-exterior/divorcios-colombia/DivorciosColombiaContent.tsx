"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPeopleRoof,
  faScaleBalanced,
  faFileSignature,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faArrowRight,
  faGavel,
  faEarthAmericas,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Divorcios notariales y judiciales",
  "Representación legal sin viajar a Colombia",
  "Atención para colombianos en cualquier país",
  "Consultas virtuales por videollamada",
  "Elaboración de poderes especiales",
  "Acompañamiento personalizado",
];

export default function DivorciosColombiaContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </div>

          <h1 className={styles.title}>
            Divorcios en Colombia desde el exterior
          </h1>

          <p className={styles.description}>
            Si eres colombiano y resides fuera del país, puedes adelantar tu
            proceso de divorcio en Colombia sin necesidad de viajar. Nuestro
            equipo jurídico te acompaña en cada etapa del proceso con atención
            virtual y representación legal.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Solicitar asesoría
            </a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Volver
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Abogados de divorcio para colombianos viviendo en el exterior</h2>

          <p>
            Muchas parejas colombianas que actualmente viven en Estados Unidos,
            España, Canadá, Chile, Australia y otros países necesitan resolver
            su situación matrimonial en Colombia. Sin embargo, la distancia y
            los trámites legales pueden generar dudas sobre cómo iniciar el
            proceso.
          </p>

          <p>
            En Pravice Abogados ofrecemos asesoría jurídica especializada para
            adelantar divorcios notariales y judiciales desde el exterior,
            permitiendo que nuestros clientes puedan realizar el proceso sin
            desplazarse a Colombia.
          </p>

          <p>
            Nuestro equipo se encarga de la elaboración de poderes,
            representación legal, revisión documental y acompañamiento completo
            durante el trámite, brindando atención virtual y comunicación
            constante durante cada etapa del proceso.
          </p>
        </motion.div>
      </section>

      {/* TIPOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Tipos de divorcio que manejamos
          </h2>

          <p className={styles.sectionDescription}>
            Analizamos cada caso para determinar cuál es el procedimiento más
            adecuado según la situación de la pareja, la existencia de hijos,
            bienes y acuerdos entre las partes.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>

              <h3>Divorcio notarial</h3>

              <p>
                Procedimiento rápido y eficiente cuando existe acuerdo entre las
                partes sobre el divorcio, bienes, hijos y obligaciones.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Divorcio judicial</h3>

              <p>
                Representación en procesos judiciales cuando no existe acuerdo o
                se requiere intervención de un juez de familia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>

              <h3>Custodia y alimentos</h3>

              <p>
                Procesos relacionados con custodia de menores, visitas y cuotas
                alimentarias dentro del trámite de divorcio.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué hacer tu proceso con nosotros?</h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <div className={styles.benefit} key={index}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              Entendemos las dificultades que enfrentan los colombianos en el
              exterior al intentar resolver asuntos legales en Colombia. Por
              eso, nuestro servicio está diseñado para facilitar el proceso a
              distancia mediante asesoría virtual, revisión digital de
              documentos y representación legal integral.
            </p>

            <p>
              Nuestro objetivo es que puedas avanzar en tu divorcio de manera
              segura, organizada y eficiente, evitando desplazamientos
              innecesarios y manteniendo comunicación constante con nuestros
              abogados.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROCESO */}

      <section className={styles.process}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>¿Cómo funciona el proceso?</h2>

          <div className={styles.processGrid}>
            <div className={styles.step}>
              <span>01</span>
              <h3>Consulta inicial</h3>
              <p>
                Analizamos tu caso y resolvemos dudas sobre el proceso de
                divorcio en Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <h3>Poder y documentación</h3>
              <p>
                Elaboramos el poder especial y revisamos los documentos
                necesarios para iniciar el trámite.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <h3>Representación legal</h3>
              <p>
                Nuestro equipo adelanta el proceso ante notaría o juzgado en
                Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>
              <h3>Seguimiento continuo</h3>
              <p>
                Te mantenemos informado durante cada etapa hasta la finalización
                del proceso.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>¿Necesitas divorciarte en Colombia desde el exterior?</h2>

          <p>
            Recibe atención jurídica personalizada y representación legal sin
            importar el país en el que te encuentres.
          </p>

          <a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un abogado
          </a>
        </motion.div>
      </section>

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Divorcios en Colombia para Colombianos en el Exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/divorcios-colombia",
            serviceType: "Divorcios en Colombia",
          }),
        }}
      />
    </main>
  );
}
