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
  faCheckCircle,
  faArrowRight,
  faGavel,
  faEarthAmericas,
  faBuildingColumns,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos notariales y judiciales",
  "Representación legal sin viajar a Colombia",
  "Atención para colombianos en cualquier país",
  "Consultas virtuales",
  "Elaboración de poderes especiales",
  "Acompañamiento jurídico personalizado",
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
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el exterior
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
            Proceso de divorcio para colombianos en el exterior
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
            Guía informativa para colombianos que viven fuera del país y
            necesitan conocer cómo funciona un proceso de divorcio en Colombia,
            incluyendo poderes especiales, representación legal y trámites sin
            necesidad de viajar.
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
              Conocer opciones legales
            </motion.a>

            <motion.div whileHover={{ y: -2 }}>
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
            Guía para colombianos que necesitan resolver procesos familiares
            desde otro país
          </motion.h2>

          <motion.p>
            Muchas personas que viven actualmente en Estados Unidos, España,
            Canadá, Australia, Chile, México y otros países necesitan resolver
            su situación matrimonial en Colombia sin desplazarse físicamente al
            país.
          </motion.p>

          <motion.p>
            Dependiendo de las condiciones del caso, el trámite puede realizarse
            mediante divorcio notarial cuando existe acuerdo entre las partes o
            mediante proceso judicial cuando existen conflictos relacionados con
            hijos, bienes, alimentos o desacuerdos.
          </motion.p>

          <motion.p>
            En muchos casos es posible adelantar el proceso mediante poder
            especial y representación legal en Colombia, evitando viajes
            innecesarios y facilitando el avance del trámite desde el exterior.
          </motion.p>

          <motion.div className={styles.extraInfo}>
            <p>
              Si deseas conocer información más amplia sobre causales,
              requisitos y tipos de procesos, puedes consultar nuestra{" "}
              <a
                href="https://abogadosespecialistas.com.co/divorcio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                guía principal sobre divorcio en Colombia
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* REQUISITOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.sectionTitle}>
            Requisitos para gestionar un divorcio desde el exterior
          </motion.h2>

          <motion.p className={styles.sectionDescription}>
            Los documentos y requisitos pueden variar dependiendo del tipo de
            proceso, si existen hijos menores, bienes o acuerdos entre las
            partes.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faFileSignature,
                title: "Poder especial",
                text: "Permite que un abogado represente el proceso en Colombia sin necesidad de viajar.",
              },
              {
                icon: faBuildingColumns,
                title: "Documentación",
                text: "Registro civil de matrimonio, identificación y demás soportes requeridos.",
              },
              {
                icon: faGavel,
                title: "Proceso judicial o notarial",
                text: "El trámite depende de si existe acuerdo o conflictos entre las partes.",
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
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className={styles.cardLink}>
                  Más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
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
          <motion.h2>Diferencias entre divorcio notarial y judicial</motion.h2>

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
              >
                <FontAwesomeIcon icon={faCheckCircle} />

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              El divorcio notarial suele aplicarse cuando ambas partes están de
              acuerdo respecto al proceso, mientras que el divorcio judicial se
              utiliza cuando existen desacuerdos o asuntos que requieren
              intervención de un juez de familia.
            </p>

            <p>
              Algunos casos también requieren acompañamiento relacionado con
              custodia, alimentos o conflictos patrimoniales. Puedes consultar
              más información sobre{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                derecho de familia en Colombia
              </a>
              .
            </p>
          </div>
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
          <motion.h2>¿Cómo funciona el proceso desde el exterior?</motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: "Se analiza el caso y el tipo de trámite aplicable.",
              },
              {
                number: "02",
                title: "Poder y documentos",
                text: "Se preparan los documentos necesarios para iniciar el proceso.",
              },
              {
                number: "03",
                title: "Representación",
                text: "El trámite avanza ante notaría o juzgado en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Se mantiene comunicación y actualización permanente.",
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
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
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
          <h2>
            Información complementaria sobre divorcio y derecho de familia en
            Colombia
          </h2>

          <p>
            Esta guía está enfocada especialmente en colombianos que residen
            fuera del país y necesitan entender cómo funciona la representación
            legal, los poderes especiales y los trámites familiares desde el
            exterior.
          </p>

          <p>
            Si deseas conocer información más amplia sobre causales de divorcio,
            tipos de procesos, requisitos legales, divorcio notarial, divorcio
            judicial y acompañamiento jurídico en Colombia, puedes consultar la
            guía principal especializada.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Guía principal sobre divorcios en Colombia</h3>

            <p>
              Accede a información detallada sobre procesos de divorcio,
              abogados de familia, separación de bienes y requisitos legales en
              Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/divorcio.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Ver guía completa de divorcio en Colombia
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* RELACIONADOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Temas relacionados para colombianos en el exterior
          </h2>

          <div className={styles.grid}>
            {[
              {
                icon: faGlobe,
                title: "Poderes en Colombia",
                text: "Documentos y representación para procesos desde el exterior.",
                link: "/colombianos-exterior/poderes-colombia",
              },
              {
                icon: faPeopleRoof,
                title: "Custodia y alimentos",
                text: "Procesos relacionados con hijos y obligaciones familiares.",
                link: "/colombianos-exterior/custodia-alimentos",
              },
              {
                icon: faScaleBalanced,
                title: "Sucesiones y herencias",
                text: "Procesos patrimoniales y sucesorales en Colombia.",
                link: "/colombianos-exterior/sucesiones-herencias",
              },
            ].map((item, index) => (
              <Link href={item.link} key={index} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </Link>
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
          }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>¿Necesitas información sobre procesos familiares en Colombia?</h2>

          <p>
            Nuestro equipo brinda acompañamiento jurídico para colombianos que
            residen fuera del país y necesitan resolver procesos legales en
            Colombia.
          </p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.05,
            }}
          >
            Recibir información del proceso
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
            name: "Guía de divorcio para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/divorcios-colombia",
            serviceType:
              "Información para colombianos en el exterior sobre procesos familiares en Colombia",
            mentions: [
              {
                "@type": "WebPage",
                name: "Guía de divorcio en Colombia",
                url: "https://abogadosespecialistas.com.co/divorcio.html",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
