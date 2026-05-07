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
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </div>

          <h1 className={styles.title}>
            Abogados para colombianos en el exterior
          </h1>

          <p className={styles.description}>
            Recibe asesoría legal en Colombia sin importar el país en el que te
            encuentres. Representamos colombianos en procesos de familia,
            sucesiones, poderes, demandas y trámites legales.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Hablar por WhatsApp
            </a>

            <Link href="#servicios" className={styles.secondary}>
              Ver servicios
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INFO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Asesoría legal para colombianos fuera de Colombia</h2>

          <p>
            Muchas personas que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver asuntos legales
            en Colombia sin viajar. En muchos casos, los procesos familiares,
            civiles y patrimoniales continúan avanzando en Colombia mientras la
            persona reside en el exterior, lo que genera preocupación,
            incertidumbre y dificultades para asistir presencialmente a
            audiencias, firmas o trámites notariales.
          </p>

          <p>
            Nuestro equipo brinda acompañamiento jurídico remoto para procesos
            familiares, civiles y empresariales, permitiendo que puedas avanzar
            en trámites y procesos desde cualquier lugar del mundo. Ofrecemos
            atención virtual, seguimiento constante y representación legal en
            Colombia para que puedas tomar decisiones informadas y proteger tus
            intereses sin necesidad de desplazarte.
          </p>

          <p>
            Contamos con experiencia apoyando colombianos en el exterior que
            necesitan iniciar divorcios en Colombia, reclamar cuotas
            alimentarias, tramitar sucesiones, otorgar poderes especiales,
            resolver conflictos familiares, adelantar procesos judiciales o
            recibir asesoría jurídica personalizada. Nuestro objetivo es
            facilitar cada proceso mediante comunicación clara, herramientas
            digitales y acompañamiento profesional.
          </p>

          <p>
            Sabemos que vivir fuera del país puede dificultar la gestión de
            documentos, tiempos judiciales y trámites notariales. Por eso,
            trabajamos con soluciones legales adaptadas a colombianos en el
            exterior, incluyendo reuniones virtuales, recepción digital de
            documentos y coordinación jurídica para representar tus intereses
            ante entidades, notarías y juzgados en Colombia.
          </p>

          <p>
            Si te encuentras en el exterior y necesitas apoyo legal en Colombia,
            nuestro equipo puede orientarte desde el primer contacto,
            explicándote los requisitos, etapas del proceso y alternativas
            legales disponibles según tu caso. Buscamos que tengas tranquilidad,
            respaldo jurídico y acompañamiento permanente durante todo el
            procedimiento.
          </p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section id="servicios" className={styles.services}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Servicios legales para colombianos en el exterior
        </motion.h2>

        <motion.p
          className={styles.sectionDescription}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Brindamos asesoría y representación legal en Colombia para colombianos
          que residen fuera del país y necesitan resolver procesos jurídicos de
          manera segura, rápida y con acompañamiento profesional. Nuestros
          servicios están enfocados en facilitar trámites legales a distancia,
          reduciendo desplazamientos y permitiendo avanzar en cada caso mediante
          atención virtual.
        </motion.p>

        <div className={styles.grid}>
          {servicios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link href={item.link} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icono} />
                </div>

                <h3>{item.titulo}</h3>

                <p>{item.descripcion}</p>

                <span className={styles.cardLink}>
                  Ver más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué elegir atención legal virtual?</h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            La atención legal virtual permite que colombianos en cualquier país
            puedan acceder a asesoría jurídica en Colombia de manera práctica,
            segura y eficiente. Nuestro enfoque combina tecnología,
            acompañamiento personalizado y representación legal para ayudarte a
            resolver tus procesos sin necesidad de viajar constantemente.
          </motion.p>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Atención desde cualquier país</span>
            </div>

            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Consultas por videollamada</span>
            </div>

            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Representación legal en Colombia</span>
            </div>

            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Envío digital de documentos</span>
            </div>

            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Acompañamiento personalizado</span>
            </div>

            <div className={styles.benefit}>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Procesos legales sin viajar</span>
            </div>
          </div>

          <motion.div
            className={styles.extraInfo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Nuestro equipo mantiene comunicación constante durante el proceso,
              brindando actualizaciones, orientación jurídica y acompañamiento
              estratégico para que tengas claridad sobre cada etapa del caso.
              Además, te ayudamos a gestionar documentación, poderes y
              requisitos necesarios para actuar legalmente desde el exterior.
            </p>

            <p>
              Trabajamos con enfoque humano y profesional, entendiendo que cada
              situación legal puede impactar aspectos familiares, personales y
              patrimoniales. Por eso buscamos ofrecer soluciones jurídicas
              claras, ágiles y enfocadas en proteger tus derechos en Colombia.
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
          <h2>Atendemos colombianos en países como:</h2>

          <p className={styles.sectionDescription}>
            Hemos atendido consultas y procesos legales de colombianos que
            residen en diferentes partes del mundo y necesitan apoyo jurídico en
            Colombia para resolver asuntos familiares, patrimoniales, civiles y
            empresariales.
          </p>

          <div className={styles.countryList}>
            <span>Estados Unidos</span>
            <span>España</span>
            <span>Canadá</span>
            <span>Australia</span>
            <span>México</span>
            <span>Chile</span>
            <span>Argentina</span>
            <span>Francia</span>
            <span>Alemania</span>
            <span>Italia</span>
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

          <h2>¿Necesitas resolver un proceso legal en Colombia?</h2>

          <p>
            Nuestro equipo puede ayudarte sin importar en qué país te
            encuentres. Recibe asesoría jurídica, representación legal y
            acompañamiento profesional para avanzar en tus procesos en Colombia
            de forma segura y eficiente.
          </p>

          <a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
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
