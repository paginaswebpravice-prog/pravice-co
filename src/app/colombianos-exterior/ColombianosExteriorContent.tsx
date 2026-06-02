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
      "Procesos de divorcio para colombianos residentes en el exterior con representación legal en Colombia.",
    icono: faPeopleRoof,
    link: "/colombianos-exterior/divorcios-colombia",
  },
  {
    titulo: "Custodia y alimentos",
    descripcion:
      "Procesos familiares relacionados con hijos, custodia y cuotas alimentarias.",
    icono: faScaleBalanced,
    link: "/colombianos-exterior/custodia-alimentos",
  },
  {
    titulo: "Poderes y representación",
    descripcion:
      "Poderes especiales para trámites notariales y judiciales en Colombia.",
    icono: faFileSignature,
    link: "/colombianos-exterior/poderes-colombia",
  },
  {
    titulo: "Sucesiones y herencias",
    descripcion: "Procesos sucesorales para colombianos fuera del país.",
    icono: faBuildingColumns,
    link: "/colombianos-exterior/sucesiones-herencias",
  },
  {
    titulo: "Demandas y litigios",
    descripcion: "Representación judicial en procesos civiles y familiares.",
    icono: faGavel,
    link: "/colombianos-exterior/demandas-colombia",
  },
  {
    titulo: "Asesoría legal virtual",
    descripcion:
      "Consultas jurídicas virtuales para colombianos en cualquier país.",
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
          <motion.div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1 className={styles.title}>
            Asesoría legal para colombianos en el exterior con procesos en
            Colombia
          </motion.h1>

          <motion.p className={styles.description}>
            Acompañamos colombianos residentes fuera del país en trámites y
            procesos legales en Colombia. Recibe representación jurídica,
            orientación virtual y apoyo profesional en asuntos familiares,
            sucesiones, poderes y litigios sin necesidad de viajar.
          </motion.p>

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <h2>
            Procesos legales en Colombia para colombianos que viven en el
            exterior
          </h2>

          <p>
            Muchos colombianos residentes en Estados Unidos, España, Canadá,
            Australia y otros países necesitan resolver situaciones legales en
            Colombia sin desplazarse físicamente. Esto incluye trámites
            familiares, procesos civiles, sucesiones, reclamaciones y
            representación judicial.
          </p>

          <p>
            Nuestro equipo brinda acompañamiento remoto para que puedas avanzar
            en procesos legales desde cualquier parte del mundo mediante
            atención virtual, reuniones online y representación jurídica en
            Colombia.
          </p>

          <p>
            Si necesitas apoyo en divorcios, custodia, alimentos, sucesiones o
            litigios familiares, también puedes consultar nuestra guía sobre{" "}
            <a
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados de familia en Colombia
            </a>
            , donde encontrarás información complementaria sobre procesos
            familiares y representación legal.
          </p>

          <p>
            Facilitamos la gestión documental, poderes especiales, coordinación
            notarial y representación ante juzgados colombianos para que puedas
            proteger tus derechos e intereses desde el exterior.
          </p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section id="servicios" className={styles.services}>
        <h2 className={styles.sectionTitle}>
          Servicios legales para colombianos en el exterior
        </h2>

        <p className={styles.sectionDescription}>
          Brindamos asesoría y representación legal en Colombia para personas
          que residen fuera del país y necesitan resolver trámites o procesos
          jurídicos de manera segura y remota.
        </p>

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
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Ventajas de recibir asesoría legal virtual en Colombia</h2>

          <p className={styles.sectionDescription}>
            La atención jurídica virtual permite resolver procesos legales en
            Colombia desde cualquier país con mayor comodidad y acompañamiento
            constante.
          </p>

          <div className={styles.benefitsGrid}>
            {[
              "Atención desde cualquier país",
              "Consultas virtuales",
              "Representación legal en Colombia",
              "Envío digital de documentos",
              "Acompañamiento personalizado",
              "Procesos sin necesidad de viajar",
            ].map((item, index) => (
              <motion.div className={styles.benefit} key={index}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
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
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>
            ¿Necesitas resolver un proceso legal en Colombia desde el exterior?
          </h2>

          <p>
            Recibe orientación jurídica, representación legal y acompañamiento
            remoto para avanzar en tus procesos en Colombia sin importar el país
            donde te encuentres.
          </p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
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
            name: "PRAVICE Abogados - Colombianos en el Exterior",
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior",
            serviceType: "Servicios legales para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
