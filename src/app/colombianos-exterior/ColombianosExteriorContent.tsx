"use client";

import styles from "./ColombianosExterior.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEarthAmericas,
  faScaleBalanced,
  faPeopleRoof,
  faFileSignature,
  faGavel,
  faPhoneVolume,
  faPassport,
  faBuildingColumns,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const servicios = [
  {
    titulo: "Divorcios en Colombia",
    descripcion:
      "Procesos de divorcio desde el exterior con representación legal en Colombia.",
    icono: faPeopleRoof,
    link: "/colombianos-exterior/divorcios-colombia",
  },
  {
    titulo: "Custodia y alimentos",
    descripcion:
      "Asesoría en procesos relacionados con hijos, custodia y cuotas alimentarias.",
    icono: faScaleBalanced,
    link: "/colombianos-exterior/custodia-alimentos",
  },
  {
    titulo: "Poderes y representación",
    descripcion:
      "Elaboración de poderes para trámites y procesos legales en Colombia.",
    icono: faFileSignature,
    link: "/colombianos-exterior/poderes-colombia",
  },
  {
    titulo: "Sucesiones y herencias",
    descripcion:
      "Procesos sucesorales para colombianos residentes fuera del país.",
    icono: faBuildingColumns,
    link: "/colombianos-exterior/sucesiones-herencias",
  },
  {
    titulo: "Demandas y litigios",
    descripcion:
      "Representación judicial en procesos civiles y familiares en Colombia.",
    icono: faGavel,
    link: "/colombianos-exterior/demandas-colombia",
  },
  {
    titulo: "Asesoría legal virtual",
    descripcion:
      "Consultas legales online para colombianos en cualquier parte del mundo.",
    icono: faPhoneVolume,
    link: "/colombianos-exterior/asesoria-legal-virtual",
  },
];

export default function ColombianosExteriorContent() {
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            whileHover={{ scale: 1.04 }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
          >
            Abogados para colombianos en el exterior
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
            Recibe asesoría legal en Colombia sin importar el país en el que te
            encuentres. Representamos colombianos en procesos de familia,
            sucesiones, poderes, demandas y trámites legales.
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
              Hablar por WhatsApp
            </motion.a>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="#servicios" className={styles.secondary}>
                Ver servicios
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* INFO */}

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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Asesoría legal para colombianos fuera de Colombia
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Muchas personas que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver asuntos legales
            en Colombia sin viajar. En muchos casos, los procesos familiares,
            civiles y patrimoniales continúan avanzando en Colombia mientras la
            persona reside en el exterior, lo que genera preocupación,
            incertidumbre y dificultades para asistir presencialmente a
            audiencias, firmas o trámites notariales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro equipo brinda acompañamiento jurídico remoto para procesos
            familiares, civiles y empresariales, permitiendo que puedas avanzar
            en trámites y procesos desde cualquier lugar del mundo. Ofrecemos
            atención virtual, seguimiento constante y representación legal en
            Colombia para que puedas tomar decisiones informadas y proteger tus
            intereses sin necesidad de desplazarte.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Contamos con experiencia apoyando colombianos en el exterior que
            necesitan iniciar divorcios en Colombia, reclamar cuotas
            alimentarias, tramitar sucesiones, otorgar poderes especiales,
            resolver conflictos familiares, adelantar procesos judiciales o
            recibir asesoría jurídica personalizada. Nuestro objetivo es
            facilitar cada proceso mediante comunicación clara, herramientas
            digitales y acompañamiento profesional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Sabemos que vivir fuera del país puede dificultar la gestión de
            documentos, tiempos judiciales y trámites notariales. Por eso,
            trabajamos con soluciones legales adaptadas a colombianos en el
            exterior, incluyendo reuniones virtuales, recepción digital de
            documentos y coordinación jurídica para representar tus intereses
            ante entidades, notarías y juzgados en Colombia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Si te encuentras en el exterior y necesitas apoyo legal en Colombia,
            nuestro equipo puede orientarte desde el primer contacto,
            explicándote los requisitos, etapas del proceso y alternativas
            legales disponibles según tu caso. Buscamos que tengas tranquilidad,
            respaldo jurídico y acompañamiento permanente durante todo el
            procedimiento.
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section id="servicios" className={styles.services}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Servicios legales para colombianos en el exterior
        </motion.h2>

        <motion.p
          className={styles.sectionDescription}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Brindamos asesoría y representación legal en Colombia para colombianos
          que residen fuera del país y necesitan resolver procesos jurídicos de
          manera segura, rápida y con acompañamiento profesional.
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
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
            >
              <Link href={item.link} className={styles.card}>
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    rotate: -6,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <FontAwesomeIcon icon={item.icono} />
                </motion.div>

                <h3>{item.titulo}</h3>

                <p>{item.descripcion}</p>

                <motion.span className={styles.cardLink} whileHover={{ x: 4 }}>
                  Ver más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
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
            ¿Por qué elegir atención legal virtual?
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            La atención legal virtual permite que colombianos en cualquier país
            puedan acceder a asesoría jurídica en Colombia de manera práctica,
            segura y eficiente.
          </motion.p>

          <div className={styles.benefitsGrid}>
            {[
              "Atención desde cualquier país",
              "Consultas por videollamada",
              "Representación legal en Colombia",
              "Envío digital de documentos",
              "Acompañamiento personalizado",
              "Procesos legales sin viajar",
            ].map((item, index) => (
              <motion.div
                className={styles.benefit}
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
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
            <p>
              Nuestro equipo mantiene comunicación constante durante el proceso,
              brindando actualizaciones, orientación jurídica y acompañamiento
              estratégico para que tengas claridad sobre cada etapa del caso.
            </p>

            <p>
              Trabajamos con enfoque humano y profesional, entendiendo que cada
              situación legal puede impactar aspectos familiares, personales y
              patrimoniales.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* PAISES */}

      <section className={styles.countries}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Atendemos colombianos en países como:
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Hemos atendido consultas y procesos legales de colombianos que
            residen en diferentes partes del mundo.
          </motion.p>

          <div className={styles.countryList}>
            {[
              "Estados Unidos",
              "España",
              "Canadá",
              "Australia",
              "México",
              "Chile",
              "Argentina",
              "Francia",
              "Alemania",
              "Italia",
            ].map((country, index) => (
              <motion.span
                key={country}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.35,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
              >
                {country}
              </motion.span>
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

          <h2>¿Necesitas resolver un proceso legal en Colombia?</h2>

          <p>
            Nuestro equipo puede ayudarte sin importar en qué país te
            encuentres. Recibe asesoría jurídica, representación legal y
            acompañamiento profesional para avanzar en tus procesos en Colombia
            de forma segura y eficiente.
          </p>

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
            Solicitar asesoría
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
            name: "Pravice Abogados - Colombianos en el Exterior",
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior",
            serviceType: "Asesoría legal para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
