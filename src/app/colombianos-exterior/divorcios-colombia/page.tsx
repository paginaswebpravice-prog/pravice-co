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
  "Divorcio sin viajar a Colombia desde cualquier país",
  "Representación legal completa mediante poder especial",
  "Trámite notarial o judicial según tu caso",
  "Acompañamiento para colombianos en EE.UU., España, Canadá y más",
  "Seguimiento del proceso en Colombia en tiempo real",
  "Gestión completa de documentos y poderes",
];

export default function DivorciosColombiaContent() {
  return (
    <main className={styles.container}>
      {/* ================= HERO (CTR OPTIMIZADO) ================= */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85 }}
        >
          <motion.div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Divorcio internacional para colombianos
          </motion.div>

          <motion.h1 className={styles.title}>
            Divorcio en Colombia viviendo en el exterior: cómo hacerlo sin
            viajar y sin complicaciones
          </motion.h1>

          <motion.p className={styles.description}>
            Si vives fuera de Colombia y necesitas divorciarte, puedes hacerlo
            legalmente mediante poder especial. Aquí te explicamos cómo funciona
            el proceso, cuánto tarda, qué documentos necesitas y cuándo aplica
            el divorcio notarial o judicial.
          </motion.p>

          <motion.div className={styles.actions}>
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Evaluar mi caso de divorcio
            </motion.a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Ver otros trámites
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= INTRO (SEO LONG TAIL) ================= */}

      <section className={styles.info}>
        <motion.div>
          <motion.h2>
            Divorcio para colombianos fuera del país: lo que debes saber antes
            de iniciar
          </motion.h2>

          <motion.p>
            Miles de colombianos que viven en el exterior necesitan resolver su
            situación matrimonial en Colombia sin regresar al país. Esto es
            completamente posible mediante representación legal.
          </motion.p>

          <motion.p>
            El proceso de divorcio puede realizarse desde países como Estados
            Unidos, España, Canadá, Chile, México, Alemania o Australia, siempre
            que se otorgue un poder especial a un abogado en Colombia.
          </motion.p>

          <motion.p>
            Dependiendo del caso, el trámite puede ser notarial (cuando hay
            mutuo acuerdo) o judicial (cuando existen conflictos). Ambos
            procesos pueden adelantarse sin que el cliente viaje a Colombia.
          </motion.p>

          <div className={styles.extraInfo}>
            <p>
              ¿Quieres entender el divorcio completo en Colombia?{" "}
              <a
                href="https://abogadosespecialistas.com.co/divorcio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta la guía jurídica principal aquí
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= REQUISITOS ================= */}

      <section className={styles.services}>
        <motion.div>
          <motion.h2 className={styles.sectionTitle}>
            Requisitos para divorciarse desde el exterior (Colombia)
          </motion.h2>

          <motion.p className={styles.sectionDescription}>
            Estos son los documentos y condiciones básicas para iniciar un
            divorcio en Colombia viviendo fuera del país.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faFileSignature,
                title: "Poder especial autenticado",
                text: "Permite que un abogado en Colombia actúe en tu nombre durante todo el proceso.",
              },
              {
                icon: faBuildingColumns,
                title: "Registro civil de matrimonio",
                text: "Documento obligatorio para iniciar el proceso de divorcio en Colombia.",
              },
              {
                icon: faGavel,
                title: "Definición del tipo de divorcio",
                text: "Se determina si es notarial (acuerdo) o judicial (conflicto).",
              },
            ].map((item, index) => (
              <motion.div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <span className={styles.cardLink}>
                  Ver detalles <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= BENEFICIOS (SEO + UX) ================= */}

      <section className={styles.benefits}>
        <motion.div>
          <motion.h2>
            Ventajas del divorcio desde el exterior en Colombia
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div key={index} className={styles.benefit}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              El divorcio notarial es más rápido cuando existe acuerdo entre las
              partes. El judicial se usa cuando hay hijos, bienes o conflictos
              sin resolver.
            </p>

            <p>
              En ambos casos, la representación legal desde el exterior evita
              desplazamientos y reduce tiempos del proceso.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className={styles.process}>
        <motion.div>
          <motion.h2>
            Cómo funciona el divorcio desde el exterior paso a paso
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Evaluación del caso",
                text: "Se revisa si el divorcio es notarial o judicial.",
              },
              {
                number: "02",
                title: "Poder y documentos",
                text: "Se prepara la documentación legal desde el país donde estés.",
              },
              {
                number: "03",
                title: "Radicación en Colombia",
                text: "El abogado inicia el proceso ante notaría o juzgado.",
              },
              {
                number: "04",
                title: "Seguimiento completo",
                text: "Te informamos cada avance del proceso en Colombia.",
              },
            ].map((step, index) => (
              <motion.div key={index} className={styles.step}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SEO SUPPORT ================= */}

      <section className={styles.seoSupport}>
        <motion.div>
          <h2>Divorcio en Colombia desde el exterior: guía complementaria</h2>

          <p>
            Esta página está enfocada en colombianos que viven fuera del país y
            necesitan resolver su divorcio sin regresar a Colombia.
          </p>

          <p>
            Si buscas información jurídica general sobre divorcio en Colombia,
            puedes consultar la guía principal del derecho de familia.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Guía completa de divorcio en Colombia</h3>

            <p>
              Información sobre causales, procesos notariales, judiciales y
              régimen de bienes en Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/divorcio.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Ver guía oficial
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.cta}>
        <motion.div>
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>Inicia tu divorcio en Colombia sin viajar desde el exterior</h2>

          <p>
            Recibe asesoría legal para evaluar tu caso y empezar el proceso
            desde cualquier país.
          </p>

          <a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
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
              "Divorcio en Colombia desde el exterior con representación legal",
          }),
        }}
      />
    </main>
  );
}
