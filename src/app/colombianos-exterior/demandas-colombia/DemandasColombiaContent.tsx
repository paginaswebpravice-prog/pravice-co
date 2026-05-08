"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGavel,
  faScaleBalanced,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faBuildingColumns,
  faFileSignature,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Representación judicial sin viajar a Colombia",
  "Procesos civiles y familiares",
  "Atención virtual desde cualquier país",
  "Acompañamiento jurídico personalizado",
  "Seguimiento constante del proceso",
  "Elaboración de poderes especiales",
];

export default function DemandasColombiaContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            Demandas y litigios en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
          >
            Representamos colombianos que viven fuera del país en procesos
            judiciales y litigios en Colombia. Nuestro equipo jurídico brinda
            acompañamiento integral en demandas civiles, familiares y otros
            procesos legales sin necesidad de viajar.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
            >
              Solicitar asesoría
            </motion.a>

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
            >
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
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Abogados para procesos judiciales de colombianos en el exterior
          </motion.h2>

          {[
            `Muchos colombianos que residen en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan iniciar o responder
            demandas en Colombia relacionadas con asuntos civiles, familiares,
            patrimoniales o contractuales.`,

            `La distancia puede dificultar el seguimiento del proceso y la
            asistencia presencial a audiencias o diligencias judiciales. Por
            eso, en Pravice Abogados ofrecemos representación legal integral
            para colombianos en el exterior, permitiendo avanzar en procesos
            judiciales sin necesidad de desplazarse al país.`,

            `Nuestro equipo se encarga de la revisión del caso, elaboración de
            poderes, preparación documental, representación ante juzgados y
            seguimiento permanente del proceso, manteniendo comunicación
            constante con nuestros clientes mediante atención virtual.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Procesos y litigios que manejamos
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            Brindamos acompañamiento jurídico en diferentes tipos de procesos
            judiciales para colombianos que necesitan resolver asuntos legales
            en Colombia desde el exterior.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faGavel,
                title: "Demandas civiles",
                text: "Procesos relacionados con incumplimientos contractuales, obligaciones económicas, conflictos patrimoniales y reclamaciones civiles.",
              },
              {
                icon: faPeopleRoof,
                title: "Procesos familiares",
                text: "Representación en conflictos familiares relacionados con custodia, alimentos, divorcios, visitas y otros procesos ante jueces de familia.",
              },
              {
                icon: faBuildingColumns,
                title: "Litigios patrimoniales",
                text: "Asesoría y representación en disputas relacionadas con bienes, herencias, propiedades y derechos patrimoniales en Colombia.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateX: 2,
                }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué realizar tu proceso con nosotros?
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
                    rotate: 8,
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
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Entendemos la complejidad que representa para los colombianos en
              el exterior enfrentar procesos judiciales en Colombia. Nuestro
              servicio está diseñado para ofrecer soluciones legales claras,
              eficientes y seguras mediante atención virtual y representación
              jurídica integral.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              Nuestro objetivo es que puedas ejercer y proteger tus derechos en
              Colombia sin importar el país en el que te encuentres, manteniendo
              seguimiento permanente y acompañamiento jurídico durante cada
              etapa del proceso.
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona el proceso?
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: "Analizamos el caso y revisamos la situación jurídica del proceso o demanda en Colombia.",
              },
              {
                number: "02",
                title: "Documentación y poder",
                text: "Elaboramos el poder especial y solicitamos los documentos necesarios para la representación legal.",
              },
              {
                number: "03",
                title: "Representación judicial",
                text: "Nuestro equipo asume la representación ante juzgados y entidades correspondientes en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento continuo",
                text: "Informamos cada avance del proceso y mantenemos comunicación permanente durante todas las etapas judiciales.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.55,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    rotate: -4,
                  }}
                >
                  {item.number}
                </motion.span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
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
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            ¿Necesitas representación legal en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            viewport={{ once: true }}
          >
            Nuestro equipo puede ayudarte en procesos judiciales y litigios sin
            importar el país en el que te encuentres.
          </motion.p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
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
            name: "Demandas y Litigios en Colombia para Colombianos en el Exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/demandas-colombia",
            serviceType: "Demandas y litigios en Colombia",
          }),
        }}
      />
    </main>
  );
}
