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
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            Divorcios en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
          >
            Si eres colombiano y resides fuera del país, puedes adelantar tu
            proceso de divorcio en Colombia sin necesidad de viajar. Nuestro
            equipo jurídico te acompaña en cada etapa del proceso con atención
            virtual y representación legal.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
            >
              Solicitar asesoría
            </motion.a>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/colombianos-exterior" className={styles.secondary}>
                Volver
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Abogados de divorcio para colombianos viviendo en el exterior
          </motion.h2>

          {[
            `Muchas parejas colombianas que actualmente viven en Estados Unidos,
            España, Canadá, Chile, Australia y otros países necesitan resolver
            su situación matrimonial en Colombia. Sin embargo, la distancia y
            los trámites legales pueden generar dudas sobre cómo iniciar el
            proceso.`,

            `En Pravice Abogados ofrecemos asesoría jurídica especializada para
            adelantar divorcios notariales y judiciales desde el exterior,
            permitiendo que nuestros clientes puedan realizar el proceso sin
            desplazarse a Colombia.`,

            `Nuestro equipo se encarga de la elaboración de poderes,
            representación legal, revisión documental y acompañamiento completo
            durante el trámite, brindando atención virtual y comunicación
            constante durante cada etapa del proceso.`,
          ].map((texto, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
              }}
              viewport={{ once: true }}
            >
              {texto}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* TIPOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            Tipos de divorcio que manejamos
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            Analizamos cada caso para determinar cuál es el procedimiento más
            adecuado según la situación de la pareja, la existencia de hijos,
            bienes y acuerdos entre las partes.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faBuildingColumns,
                title: "Divorcio notarial",
                text: `Procedimiento rápido y eficiente cuando existe acuerdo entre las
                partes sobre el divorcio, bienes, hijos y obligaciones.`,
              },
              {
                icon: faGavel,
                title: "Divorcio judicial",
                text: `Representación en procesos judiciales cuando no existe acuerdo o
                se requiere intervención de un juez de familia.`,
              },
              {
                icon: faScaleBalanced,
                title: "Custodia y alimentos",
                text: `Procesos relacionados con custodia de menores, visitas y cuotas
                alimentarias dentro del trámite de divorcio.`,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    rotate: 6,
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <motion.span className={styles.cardLink} whileHover={{ x: 4 }}>
                  Más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué hacer tu proceso con nosotros?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div
                className={styles.benefit}
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 6,
                  scale: 1.02,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </motion.div>

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.extraInfo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              viewport={{ once: true }}
            >
              Entendemos las dificultades que enfrentan los colombianos en el
              exterior al intentar resolver asuntos legales en Colombia. Por
              eso, nuestro servicio está diseñado para facilitar el proceso a
              distancia mediante asesoría virtual, revisión digital de
              documentos y representación legal integral.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.55 }}
              viewport={{ once: true }}
            >
              Nuestro objetivo es que puedas avanzar en tu divorcio de manera
              segura, organizada y eficiente, evitando desplazamientos
              innecesarios y manteniendo comunicación constante con nuestros
              abogados.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESO */}

      <section className={styles.process}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona el proceso?
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: `Analizamos tu caso y resolvemos dudas sobre el proceso de
                divorcio en Colombia.`,
              },
              {
                number: "02",
                title: "Poder y documentación",
                text: `Elaboramos el poder especial y revisamos los documentos
                necesarios para iniciar el trámite.`,
              },
              {
                number: "03",
                title: "Representación legal",
                text: `Nuestro equipo adelanta el proceso ante notaría o juzgado en
                Colombia.`,
              },
              {
                number: "04",
                title: "Seguimiento continuo",
                text: `Te mantenemos informado durante cada etapa hasta la finalización
                del proceso.`,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.12,
                    rotate: -3,
                  }}
                >
                  {step.number}
                </motion.span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
          }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            viewport={{ once: true }}
          >
            ¿Necesitas divorciarte en Colombia desde el exterior?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Recibe atención jurídica personalizada y representación legal sin
            importar el país en el que te encuentres.
          </motion.p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
          >
            Hablar con un abogado
          </motion.a>
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
