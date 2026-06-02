"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGavel,
  faScaleBalanced,
  faPassport,
  faCheckCircle,
  faEarthAmericas,
  faBuildingColumns,
  faPeopleRoof,
  faArrowUpRightFromSquare,
  faFileSignature,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Representación judicial sin necesidad de viajar a Colombia",
  "Atención virtual para colombianos en cualquier país",
  "Procesos civiles, familiares y patrimoniales",
  "Acompañamiento jurídico personalizado",
  "Seguimiento permanente del proceso",
  "Elaboración de poderes y documentos legales",
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
            Demandas y procesos judiciales en Colombia para colombianos en el
            exterior
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
            En Pravice acompañamos colombianos que viven fuera del país en
            procesos civiles, familiares y litigios en Colombia mediante
            representación judicial virtual y seguimiento permanente sin
            necesidad de desplazarse.
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
            Representación legal para colombianos fuera del país
          </motion.h2>

          {[
            `Muchos colombianos que viven en Estados Unidos, España, Canadá, Chile, Australia y otros países necesitan iniciar o responder procesos judiciales en Colombia relacionados con conflictos familiares, patrimoniales, civiles o contractuales.`,

            `La distancia suele dificultar la atención presencial de audiencias, diligencias y trámites judiciales. Por ello, en Pravice brindamos acompañamiento jurídico remoto y representación judicial para colombianos en el exterior.`,

            `Nuestro equipo se encarga de la revisión del caso, elaboración de poderes, presentación de demandas, seguimiento procesal y comunicación constante durante cada etapa del proceso judicial en Colombia.`,
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

      {/* SERVICES */}

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
            Procesos judiciales que acompañamos
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
            Prestamos representación y acompañamiento jurídico en diferentes
            procesos legales en Colombia para personas que actualmente residen
            en el exterior.
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
                text: "Representación en divorcios, alimentos, custodia, visitas, sucesiones y otros asuntos de familia.",
              },
              {
                icon: faBuildingColumns,
                title: "Litigios patrimoniales",
                text: "Acompañamiento en disputas sobre bienes, herencias, propiedades y derechos patrimoniales en Colombia.",
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

      {/* SEO SUPPORT */}

      <section className={styles.seoSupport}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            Procesos familiares y demandas en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Algunos procesos judiciales para colombianos en el exterior están
            relacionados con conflictos familiares, divorcios, alimentos,
            custodia, sucesiones y otros asuntos legales ante jueces de familia
            en Colombia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Si deseas ampliar información específica sobre representación en
            procesos familiares y abogados de familia en Colombia, puedes
            consultar la guía principal desarrollada por el equipo de abogados
            especializados.
          </motion.p>

          <motion.div
            className={styles.seoLinkBox}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
            >
              <FontAwesomeIcon icon={faLandmark} />
            </motion.div>

            <h3>Guía de abogados de familia en Colombia</h3>

            <p>
              Accede al contenido especializado sobre derecho de familia,
              divorcios, custodia, alimentos y representación judicial en
              Colombia.
            </p>

            <motion.a
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              Ver guía principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ARTICLE */}

      <section className={styles.articleContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo iniciar una demanda en Colombia desde el exterior?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Los colombianos que viven fuera del país pueden iniciar procesos
            judiciales en Colombia mediante representación legal otorgada a un
            abogado a través de poder especial o poder consular, dependiendo del
            tipo de proceso y país de residencia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Actualmente muchos trámites permiten avanzar de manera virtual,
            facilitando la atención jurídica de personas que no pueden viajar a
            Colombia para participar directamente en el proceso judicial.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            viewport={{ once: true }}
          >
            Aspectos importantes antes de iniciar el proceso
          </motion.h3>

          <ul>
            <li>Revisión jurídica y viabilidad del caso.</li>
            <li>Definición del tipo de proceso judicial.</li>
            <li>Recolección de documentos y pruebas.</li>
            <li>Elaboración de poderes y autorizaciones.</li>
            <li>Seguimiento permanente del expediente.</li>
            <li>Comunicación virtual durante todas las etapas.</li>
          </ul>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Demandas familiares para colombianos en el exterior
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
          >
            Una gran parte de las consultas de colombianos fuera del país está
            relacionada con conflictos familiares, procesos de divorcio,
            custodia de menores, alimentos, visitas y sucesiones en Colombia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Para profundizar específicamente sobre representación en derecho de
            familia, puedes consultar la guía principal de abogados de familia
            en Colombia desarrollada por el portal especializado.
          </motion.p>

          <div className={styles.internalSeoCta}>
            <h3>¿Buscas información específica sobre abogados de familia?</h3>

            <p>
              Conoce más sobre divorcios, custodia, alimentos y representación
              judicial en Colombia para procesos familiares.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al contenido principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </motion.div>
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
              Nuestro objetivo es que los colombianos en el exterior puedan
              ejercer y proteger sus derechos en Colombia mediante procesos
              judiciales claros, organizados y con acompañamiento jurídico
              permanente.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              Priorizamos la comunicación constante, el seguimiento procesal y
              la atención virtual para facilitar el desarrollo de los procesos
              sin importar el país donde se encuentre el cliente.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS */}

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
                text: "Analizamos el caso y revisamos la situación jurídica del proceso en Colombia.",
              },
              {
                number: "02",
                title: "Documentación y poder",
                text: "Preparamos el poder especial y los documentos necesarios para la representación.",
              },
              {
                number: "03",
                title: "Representación judicial",
                text: "Asumimos el proceso ante juzgados y entidades correspondientes.",
              },
              {
                number: "04",
                title: "Seguimiento continuo",
                text: "Informamos avances y mantenemos comunicación permanente durante todo el proceso.",
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
            ¿Necesitas iniciar un proceso judicial en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            viewport={{ once: true }}
          >
            Nuestro equipo brinda representación legal y acompañamiento jurídico
            para colombianos en el exterior.
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
            name: "Demandas y Procesos Judiciales en Colombia para Colombianos en el Exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/demandas-colombia",
            serviceType:
              "Representación judicial para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
