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
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Divorcio sin necesidad de viajar a Colombia",
  "Representación legal desde cualquier país del mundo",
  "Procesos notariales cuando existe acuerdo entre las partes",
  "Procesos judiciales en casos de conflicto",
  "Elaboración y autenticación de poderes especiales",
  "Acompañamiento jurídico durante todo el trámite",
];

export default function DivorciosColombiaContent() {
  return (
    <main className={styles.container}>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el exterior
          </motion.div>

          <motion.h1 className={styles.title}>
            Divorcio en Colombia desde el exterior: cómo hacerlo sin viajar y
            con poder legal
          </motion.h1>

          <motion.p className={styles.description}>
            Si vives en{" "}
            <strong>
              Estados Unidos, España, Canadá, Australia o cualquier país del
              mundo
            </strong>
            , puedes realizar tu divorcio en Colombia sin regresar al país. Aquí
            te explicamos cómo funciona el proceso con poder especial,
            representación legal y trámite notarial o judicial.
          </motion.p>

          <motion.div className={styles.actions}>
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              className={styles.primary}
            >
              Evaluar mi caso de divorcio
            </motion.a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Volver
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= INTRO ================= */}

      <section className={styles.info}>
        <motion.div>
          <motion.h2>
            ¿Se puede divorciar un colombiano desde el exterior?
          </motion.h2>

          <p>
            Sí. Un ciudadano colombiano puede iniciar su proceso de divorcio
            desde el exterior sin necesidad de viajar a{" "}
            <strong>Colombia</strong>, siempre que otorgue un poder especial a
            un abogado que lo represente ante notaría o juzgado.
          </p>

          <p>
            Este proceso es común en colombianos residentes en Estados Unidos,
            España, Canadá y otros países, donde la distancia impide asistir
            personalmente a audiencias o trámites.
          </p>

          <p>
            Dependiendo del caso, el divorcio puede ser: notarial (cuando hay
            acuerdo) o judicial (cuando existen conflictos sobre hijos, bienes o
            alimentos).
          </p>

          <div className={styles.extraInfo}>
            <p>
              Para una explicación más profunda sobre causales, tipos de
              divorcio y normativa general en Colombia, puedes consultar la{" "}
              <a
                href="https://abogadosespecialistas.com.co/divorcio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                guía completa de divorcio en Colombia
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= REQUISITOS ================= */}

      <section className={styles.services}>
        <motion.div>
          <h2 className={styles.sectionTitle}>
            Requisitos para divorciarse desde el exterior
          </h2>

          <p className={styles.sectionDescription}>
            Estos son los elementos esenciales para iniciar un divorcio en
            Colombia viviendo fuera del país.
          </p>

          <div className={styles.grid}>
            {[
              {
                icon: faFileSignature,
                title: "Poder especial",
                text: "Permite que un abogado en Colombia te represente en todo el proceso sin que tengas que viajar.",
              },
              {
                icon: faBuildingColumns,
                title: "Registro civil de matrimonio",
                text: "Documento obligatorio para iniciar el trámite de divorcio en Colombia.",
              },
              {
                icon: faGavel,
                title: "Definición del tipo de proceso",
                text: "Se determina si será divorcio notarial o judicial según el acuerdo entre las partes.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= BENEFICIOS ================= */}

      <section className={styles.benefits}>
        <motion.div>
          <h2>Ventajas del divorcio desde el exterior en Colombia</h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <div key={index} className={styles.benefit}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              El divorcio notarial es más rápido cuando hay mutuo acuerdo,
              mientras que el divorcio judicial aplica cuando existen conflictos
              entre las partes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PROCESO ================= */}

      <section className={styles.process}>
        <motion.div>
          <h2>¿Cómo es el proceso de divorcio desde el exterior?</h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta del caso",
                text: "Se analiza la situación y el tipo de divorcio aplicable.",
              },
              {
                number: "02",
                title: "Poder y documentos",
                text: "Se elabora el poder especial y se recopilan los documentos.",
              },
              {
                number: "03",
                title: "Inicio del trámite",
                text: "Se presenta el caso ante notaría o juzgado en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Acompañamiento hasta la finalización del proceso.",
              },
            ].map((step, index) => (
              <div key={index} className={styles.step}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SEO + CANONICAL DIFFERENTIATION ================= */}

      <section className={styles.seoSupport}>
        <motion.div>
          <h2>Divorcio en Colombia sin viajar: lo que debes saber</h2>

          <p>
            Este contenido está enfocado exclusivamente en colombianos en el
            exterior que necesitan entender cómo divorciarse sin regresar a
            Colombia mediante representación legal.
          </p>

          <p>
            Si buscas información más amplia sobre causales, jurisprudencia o
            derecho de familia general en Colombia, consulta la guía principal
            del portal especializado.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Guía completa de divorcio en Colombia</h3>

            <a
              href="https://abogadosespecialistas.com.co/divorcio.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Ver guía completa de divorcio{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <motion.div>
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>Inicia tu divorcio desde el exterior hoy mismo</h2>

          <p>
            Recibe asesoría legal y representación en Colombia sin necesidad de
            viajar.
          </p>

          <a href="https://wa.me/573114659315" className={styles.ctaButton}>
            Hablar con un abogado
          </a>
        </motion.div>
      </section>

      {/* ================= SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Divorcio para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/divorcios-colombia",
            serviceType:
              "Divorcio en Colombia desde el exterior con poder legal",
          }),
        }}
      />
    </main>
  );
}
