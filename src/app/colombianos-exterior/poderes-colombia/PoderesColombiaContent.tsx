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
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Orientación jurídica para colombianos en el exterior",
  "Elaboración de poderes especiales y autenticaciones",
  "Representación legal en trámites familiares y civiles",
  "Atención virtual desde cualquier país",
  "Acompañamiento documental y revisión de requisitos",
  "Apoyo jurídico para actuaciones en Colombia sin viajar",
];

const servicios = [
  {
    icon: faFileSignature,
    title: "Poderes especiales",
    text: "Elaboración de poderes para trámites notariales, procesos judiciales y actuaciones administrativas en Colombia.",
  },
  {
    icon: faScaleBalanced,
    title: "Representación jurídica",
    text: "Representación legal ante notarías, entidades públicas y despachos judiciales en Colombia.",
  },
  {
    icon: faPeopleRoof,
    title: "Procesos familiares",
    text: "Acompañamiento jurídico en divorcios, custodia, sucesiones y otros asuntos de derecho de familia.",
  },
  {
    icon: faBuildingColumns,
    title: "Trámites notariales",
    text: "Asesoría para escrituras, autenticaciones, declaraciones y actuaciones notariales desde el exterior.",
  },
  {
    icon: faGavel,
    title: "Procesos judiciales",
    text: "Representación en procesos civiles y familiares que requieren actuación legal en Colombia.",
  },
  {
    icon: faUserTie,
    title: "Asesoría personalizada",
    text: "Orientación jurídica para identificar el tipo de poder y procedimiento más adecuado según cada caso.",
  },
];

const steps = [
  {
    number: "01",
    title: "Consulta inicial",
    text: "Analizamos el trámite, proceso o actuación legal que necesitas adelantar en Colombia.",
  },
  {
    number: "02",
    title: "Preparación documental",
    text: "Elaboramos el poder y explicamos el proceso de autenticación desde tu país de residencia.",
  },
  {
    number: "03",
    title: "Representación legal",
    text: "Actuamos en tu nombre ante entidades, notarías o juzgados en Colombia.",
  },
  {
    number: "04",
    title: "Seguimiento del proceso",
    text: "Brindamos acompañamiento continuo e información sobre el avance del trámite.",
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
            Colombianos en el exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Poderes y representación legal en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Asesoramos colombianos residentes en el exterior que necesitan
            realizar trámites legales, actuaciones notariales y procesos
            familiares en Colombia mediante poderes especiales y representación
            jurídica.
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

            <motion.div whileHover={{ scale: 1.04 }}>
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
            Abogados para colombianos en el exterior
          </motion.h2>

          {[
            "Muchos colombianos residentes en Estados Unidos, España, Canadá, Australia, Chile y otros países necesitan adelantar trámites legales en Colombia sin desplazarse físicamente.",
            "A través de poderes especiales es posible autorizar abogados para actuar en procesos notariales, trámites familiares, sucesiones, divorcios, actuaciones civiles y otros procedimientos legales.",
            "En Pravice brindamos acompañamiento jurídico para la elaboración y revisión de poderes, autenticaciones y representación legal en Colombia.",
            "Nuestro equipo ofrece atención virtual y asesoría personalizada para facilitar procesos legales desde cualquier parte del mundo.",
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

      {/* SERVICES */}

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
            Servicios legales para colombianos fuera del país
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Analizamos cada caso para definir la mejor estrategia jurídica y el
            tipo de representación legal más adecuado según el trámite o proceso
            en Colombia.
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

      {/* SEO SUPPORT */}

      <section className={styles.seoSupport}>
        <div>
          <h2>
            Apoyo jurídico para procesos familiares y representación en Colombia
          </h2>

          <p>
            Algunos trámites realizados mediante poderes especiales están
            relacionados con procesos de derecho de familia en Colombia, como
            divorcios, custodia, sucesiones, regulación de alimentos y otros
            asuntos legales familiares.
          </p>

          <p>
            Cuando el caso requiere acompañamiento especializado en litigios o
            procesos familiares complejos, es recomendable contar con abogados
            expertos en derecho de familia en Colombia.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Conoce más sobre abogados de familia en Colombia</h3>

            <p>
              Si necesitas información más específica sobre representación en
              procesos familiares, divorcios o asuntos legales familiares en
              Colombia, puedes consultar esta guía jurídica especializada.
            </p>

            <Link
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              className={styles.seoLink}
              target="_blank"
            >
              Ver abogados de familia
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLE */}

      <section className={styles.articleContent}>
        <div>
          <h2>¿Cómo funcionan los poderes para colombianos en el exterior?</h2>

          <p>
            Los poderes especiales permiten que una persona autorice a un
            abogado o representante en Colombia para actuar en su nombre en
            determinados trámites o procesos legales.
          </p>

          <p>
            Dependiendo del tipo de actuación, el poder puede requerir
            autenticación ante consulado colombiano, notario extranjero o
            apostilla según el país donde se encuentre el ciudadano colombiano.
          </p>

          <h3>Trámites frecuentes realizados mediante poderes en Colombia</h3>

          <ul>
            <li>Procesos de divorcio y asuntos familiares.</li>
            <li>Sucesiones y trámites hereditarios.</li>
            <li>Actuaciones notariales y autenticaciones.</li>
            <li>Representación en procesos civiles.</li>
            <li>Trámites ante entidades públicas y privadas.</li>
            <li>Firma de documentos y actuaciones administrativas.</li>
          </ul>

          <h3>Importancia de contar con asesoría jurídica adecuada</h3>

          <p>
            Cada proceso tiene requisitos diferentes relacionados con
            autenticaciones, alcance del poder y representación legal. Por esta
            razón, es importante revisar cada caso antes de iniciar cualquier
            actuación en Colombia.
          </p>

          <p>
            Una adecuada preparación documental ayuda a reducir errores,
            devoluciones y retrasos en trámites legales realizados desde el
            exterior.
          </p>

          <div className={styles.internalSeoCta}>
            <h3>
              ¿Necesitas apoyo en procesos familiares o representación legal en
              Colombia?
            </h3>

            <p>
              Puedes ampliar información sobre servicios jurídicos relacionados
              con derecho de familia y representación legal especializada en
              Colombia.
            </p>

            <Link
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              target="_blank"
            >
              Consultar abogados de familia
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

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
        </motion.div>
      </section>

      {/* PROCESS */}

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
            ¿Necesitas realizar trámites legales en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Recibe asesoría jurídica y acompañamiento legal desde cualquier
            país.
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
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/poderes-colombia",
            serviceType:
              "Poderes especiales y representación legal para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
