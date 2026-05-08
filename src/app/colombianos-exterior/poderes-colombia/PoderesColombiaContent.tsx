"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileSignature,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faScaleBalanced,
  faBuildingColumns,
  faGavel,
  faUserTie,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Elaboración de poderes especiales",
  "Representación legal en Colombia",
  "Asesoría virtual desde cualquier país",
  "Acompañamiento en trámites legales",
  "Revisión y preparación documental",
  "Atención personalizada para colombianos en el exterior",
];

const servicios = [
  {
    icon: faFileSignature,
    title: "Poderes especiales",
    text: "Elaboración de poderes para procesos judiciales, notariales, administrativos y trámites legales en Colombia.",
  },
  {
    icon: faScaleBalanced,
    title: "Representación jurídica",
    text: "Actuación legal en nombre del cliente ante entidades, notarías y juzgados en Colombia.",
  },
  {
    icon: faBuildingColumns,
    title: "Trámites notariales",
    text: "Acompañamiento en autenticaciones, escrituras, sucesiones, divorcios y otros procedimientos notariales.",
  },
  {
    icon: faGavel,
    title: "Procesos judiciales",
    text: "Representación en procesos civiles, familiares y otros asuntos legales ante jueces en Colombia.",
  },
  {
    icon: faUserTie,
    title: "Asesoría personalizada",
    text: "Orientación jurídica para determinar qué tipo de poder necesitas según tu situación específica.",
  },
  {
    icon: faPhoneVolume,
    title: "Atención virtual",
    text: "Consultas online y seguimiento permanente para colombianos en cualquier parte del mundo.",
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    text: "Analizamos el trámite o proceso legal que necesitas realizar en Colombia.",
  },
  {
    number: "02",
    title: "Preparación del poder",
    text: "Elaboramos el documento y explicamos el proceso de firma y autenticación desde el exterior.",
  },
  {
    number: "03",
    title: "Representación legal",
    text: "Actuamos en tu nombre ante entidades, notarías o juzgados en Colombia.",
  },
  {
    number: "04",
    title: "Seguimiento continuo",
    text: "Informamos avances y acompañamos el trámite hasta su finalización.",
  },
];

export default function PoderesColombiaContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
            }}
            whileHover={{ scale: 1.04 }}
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <FontAwesomeIcon icon={faEarthAmericas} />
            </motion.div>
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Poderes y representación legal en Colombia
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ayudamos a colombianos en el exterior a realizar trámites y procesos
            legales en Colombia mediante poderes especiales y representación
            jurídica, evitando desplazamientos innecesarios al país.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
            >
              Solicitar asesoría
            </motion.a>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Abogados para poderes y trámites legales desde el exterior
          </motion.h2>

          {[
            "Muchos colombianos que viven en Estados Unidos, España, Canadá, Australia, Chile y otros países necesitan adelantar trámites en Colombia sin poder viajar personalmente.",
            "A través de poderes especiales es posible autorizar abogados o representantes para actuar legalmente en Colombia en procesos notariales, judiciales, familiares, civiles, empresariales y otros trámites administrativos.",
            "En Pravice Abogados brindamos asesoría integral para elaboración, revisión y utilización de poderes, garantizando que cada documento cumpla los requisitos necesarios según el tipo de trámite o proceso.",
            "Nuestro equipo acompaña a cada cliente durante todo el procedimiento mediante atención virtual, comunicación constante y representación legal profesional.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.55,
              }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Servicios relacionados con poderes en Colombia
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Analizamos cada situación para definir el tipo de poder y la
            estrategia jurídica más adecuada según el trámite que necesites
            realizar en Colombia.
          </motion.p>

          <div className={styles.grid}>
            {servicios.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  type: "spring",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                }}
              >
                <div className={styles.card}>
                  <motion.div
                    className={styles.icon}
                    whileHover={{
                      rotate: -8,
                      scale: 1.12,
                    }}
                    transition={{ type: "spring" }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <motion.span
                    className={styles.cardLink}
                    whileHover={{ x: 6 }}
                  >
                    Más información
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué realizar tu trámite con nosotros?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div
                key={index}
                className={styles.benefit}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 12,
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
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              Nuestro servicio está diseñado para facilitar los trámites legales
              de colombianos que actualmente residen fuera del país y necesitan
              actuar en Colombia sin viajar.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              viewport={{ once: true }}
            >
              Revisamos cuidadosamente cada documento y brindamos asesoría clara
              sobre autenticaciones, requisitos y procedimientos necesarios para
              evitar errores y retrasos en los procesos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.55 }}
              viewport={{ once: true }}
            >
              Buscamos que cada cliente pueda avanzar de manera segura,
              organizada y eficiente mediante representación legal confiable y
              atención personalizada.
            </motion.p>
          </motion.div>
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
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona el proceso?
          </motion.h2>

          <div className={styles.processGrid}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                    rotate: -6,
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
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            viewport={{ once: true }}
          >
            ¿Necesitas realizar un trámite legal en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Recibe asesoría jurídica y representación legal sin importar el país
            en el que te encuentres.
          </motion.p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.06,
              y: -4,
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
            name: "Poderes y representación legal en Colombia",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/poderes-colombia",
            serviceType: "Poderes y representación legal en Colombia",
          }),
        }}
      />
    </main>
  );
}
