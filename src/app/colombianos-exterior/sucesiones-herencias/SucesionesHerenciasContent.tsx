"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuildingColumns,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faScaleBalanced,
  faFileSignature,
  faGavel,
  faPeopleRoof,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos sucesorales notariales y judiciales",
  "Representación legal sin viajar a Colombia",
  "Atención virtual desde cualquier país",
  "Revisión y preparación documental",
  "Acompañamiento jurídico integral",
  "Asesoría personalizada para herederos",
];

export default function SucesionesHerenciasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.04,
            }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            Sucesiones y herencias en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
          >
            Ayudamos a colombianos residentes en el exterior a realizar procesos
            de sucesión y herencia en Colombia con representación legal,
            atención virtual y acompañamiento durante cada etapa del trámite.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar asesoría
            </motion.a>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Abogados para sucesiones y herencias en Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Muchos colombianos que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver procesos de
            sucesión en Colombia relacionados con bienes, propiedades, cuentas,
            herencias y derechos patrimoniales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            La distancia y los procedimientos legales pueden dificultar el
            trámite, especialmente cuando existen varios herederos, bienes en
            distintas ciudades o diferencias entre las partes involucradas.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            En Pravice Abogados brindamos asesoría jurídica especializada para
            adelantar sucesiones notariales y judiciales desde el exterior,
            permitiendo que nuestros clientes puedan avanzar en el proceso sin
            necesidad de viajar a Colombia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro equipo acompaña cada etapa del trámite mediante revisión
            documental, elaboración de poderes, representación legal y atención
            virtual permanente para brindar tranquilidad y seguridad jurídica.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Servicios relacionados con sucesiones y herencias
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Analizamos cada caso de manera personalizada para definir el
            procedimiento más adecuado según la situación familiar, la
            existencia de bienes y los acuerdos entre herederos.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faBuildingColumns,
                title: "Sucesión notarial",
                text: "Procesos rápidos y organizados cuando existe acuerdo entre los herederos sobre la repartición de bienes.",
              },
              {
                icon: faGavel,
                title: "Sucesión judicial",
                text: "Representación jurídica en procesos judiciales cuando existen conflictos o desacuerdos entre las partes.",
              },
              {
                icon: faFileSignature,
                title: "Poderes especiales",
                text: "Elaboración de poderes para permitir representación legal desde el exterior sin viajar a Colombia.",
              },
              {
                icon: faScaleBalanced,
                title: "Asesoría patrimonial",
                text: "Orientación jurídica sobre derechos hereditarios, bienes y distribución patrimonial.",
              },
              {
                icon: faPeopleRoof,
                title: "Acuerdos entre herederos",
                text: "Acompañamiento legal para conciliaciones y acuerdos relacionados con herencias y repartición de bienes.",
              },
              {
                icon: faPhoneVolume,
                title: "Atención virtual",
                text: "Consultas online y seguimiento permanente para colombianos en el exterior.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className={styles.card}>
                  <motion.div
                    className={styles.icon}
                    whileHover={{
                      rotate: -6,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <motion.span
                    className={styles.cardLink}
                    whileHover={{ x: 5 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
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
            initial={{ opacity: 0, y: 25 }}
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
              transition={{ delay: 0.25, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Nuestro servicio está diseñado para facilitar los procesos
              sucesorales de colombianos que actualmente viven fuera del país y
              necesitan resolver trámites de herencia en Colombia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Brindamos acompañamiento cercano durante todas las etapas del
              proceso, explicando claramente los requisitos, tiempos y
              procedimientos necesarios para avanzar de manera segura y
              organizada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Buscamos proteger los derechos patrimoniales de nuestros clientes
              mediante representación jurídica confiable y atención
              personalizada desde cualquier lugar del mundo.
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona el proceso?
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: "Analizamos el caso y revisamos la situación de los bienes y herederos involucrados.",
              },
              {
                number: "02",
                title: "Documentación y poder",
                text: "Elaboramos poderes especiales y revisamos los documentos necesarios para iniciar la sucesión.",
              },
              {
                number: "03",
                title: "Representación legal",
                text: "Nuestro equipo adelanta el trámite ante notaría o juzgado en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento continuo",
                text: "Informamos avances y acompañamos el proceso hasta la finalización del trámite sucesoral.",
              },
            ].map((item, index) => (
              <motion.div
                className={styles.step}
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
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
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Necesitas resolver una sucesión en Colombia?
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
              scale: 1.04,
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
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
            name: "Sucesiones y herencias en Colombia para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
            serviceType: "Sucesiones y herencias en Colombia",
          }),
        }}
      />
    </main>
  );
}
