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
  "Trámites legales en Colombia sin viajar desde el exterior",
  "Representación ante notarías, juzgados y entidades públicas",
  "Elaboración de poderes especiales y generales",
  "Asesoría desde USA, España, Canadá, Chile o cualquier país",
  "Acompañamiento en procesos familiares y civiles",
  "Revisión jurídica completa del poder antes de firmarlo",
];

const servicios = [
  {
    icon: faFileSignature,
    title: "Poderes especiales para Colombia",
    text: "Redacción y estructuración de poderes para trámites notariales, judiciales y administrativos desde el exterior.",
  },
  {
    icon: faScaleBalanced,
    title: "Representación legal en Colombia",
    text: "Actuamos en tu nombre ante juzgados, notarías y entidades públicas colombianas sin necesidad de tu presencia física.",
  },
  {
    icon: faPeopleRoof,
    title: "Procesos familiares desde el exterior",
    text: "Divorcios, custodia, alimentos, sucesiones y otros procesos de familia gestionados con poder especial.",
  },
  {
    icon: faBuildingColumns,
    title: "Trámites notariales internacionales",
    text: "Autenticaciones, declaraciones, escrituras y actos notariales desde consulados o apostilla.",
  },
  {
    icon: faGavel,
    title: "Procesos judiciales en Colombia",
    text: "Representación en procesos civiles, familiares y litigios en Colombia desde el extranjero.",
  },
  {
    icon: faUserTie,
    title: "Asesoría jurídica personalizada",
    text: "Te explicamos exactamente qué tipo de poder necesitas según tu caso específico en Colombia.",
  },
];

const steps = [
  {
    number: "01",
    title: "Evaluación del caso",
    text: "Analizamos el trámite que necesitas realizar en Colombia y el tipo de poder adecuado.",
  },
  {
    number: "02",
    title: "Redacción del poder",
    text: "Se elabora el documento con lenguaje jurídico correcto para evitar rechazos o devoluciones.",
  },
  {
    number: "03",
    title: "Autenticación en el exterior",
    text: "Te explicamos cómo firmarlo ante consulado colombiano, notario o apostillarlo.",
  },
  {
    number: "04",
    title: "Representación en Colombia",
    text: "El abogado actúa en tu nombre ante entidades colombianas hasta finalizar el trámite.",
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
        >
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el exterior
          </div>

          <h1 className={styles.title}>
            Poderes en Colombia desde el exterior: trámites legales sin viajar
          </h1>

          <p className={styles.description}>
            Si vives en Estados Unidos, España, Canadá o cualquier país, puedes
            realizar trámites legales en Colombia mediante poderes especiales.
            Aquí te explicamos cómo funciona la representación legal sin
            necesidad de viajar.
          </p>

          <div className={styles.actions}>
            <a href="https://wa.me/573114659315" className={styles.primary}>
              Solicitar asesoría legal
            </a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Volver
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTRO SEO (MUY IMPORTANTE PARA CTR + IA) */}
      <section className={styles.info}>
        <div>
          <h2>
            ¿Qué son los poderes en Colombia y para qué sirven desde el
            exterior?
          </h2>

          <p>
            Los poderes en Colombia permiten que una persona autorice a un
            abogado para actuar en su nombre dentro del país. Esto es clave para
            colombianos que viven en el exterior y necesitan realizar trámites
            sin regresar.
          </p>

          <p>
            Este mecanismo es ampliamente utilizado en casos de{" "}
            <strong>
              divorcio, sucesiones, compra y venta de bienes, trámites
              notariales y procesos judiciales
            </strong>
            .
          </p>

          <p>
            Dependiendo del país donde te encuentres, el poder puede firmarse en
            consulado colombiano o mediante apostilla internacional.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={styles.services}>
        <div>
          <h2 className={styles.sectionTitle}>
            Servicios legales con poderes desde el exterior
          </h2>

          <p className={styles.sectionDescription}>
            Te ayudamos a estructurar correctamente el poder para evitar errores
            que puedan retrasar tu trámite en Colombia.
          </p>

          <div className={styles.grid}>
            {servicios.map((item, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENIDO SEO EXTENDIDO (CLAVE PARA POSICIONAR) */}
      <section className={styles.articleContent}>
        <div>
          <h2>
            ¿Cómo hacer un poder desde Estados Unidos, España o cualquier país?
          </h2>

          <p>
            Si estás fuera de Colombia, puedes otorgar un poder de tres formas:
          </p>

          <ul>
            <li>Ante consulado colombiano en el exterior</li>
            <li>Ante notario extranjero con apostilla de La Haya</li>
            <li>Mediante documento autenticado según legislación local</li>
          </ul>

          <h3>¿Qué debe incluir un poder para Colombia?</h3>

          <p>
            Un poder válido debe especificar claramente las facultades del
            abogado, el tipo de proceso y los límites de la representación.
          </p>

          <p>
            Un error en la redacción puede causar rechazo en notarías o juzgados
            en Colombia.
          </p>

          <h3>Casos más comunes de uso de poderes</h3>

          <ul>
            <li>Divorcios en Colombia desde el exterior</li>
            <li>Sucesiones y herencias</li>
            <li>Venta de inmuebles</li>
            <li>Procesos de familia (custodia, alimentos)</li>
            <li>Trámites notariales y bancarios</li>
          </ul>

          <div className={styles.internalSeoCta}>
            <h3>¿Necesitas ayuda con tu poder en Colombia?</h3>
            <p>
              Te ayudamos a redactar y validar tu poder para evitar errores
              legales y retrasos en Colombia.
            </p>

            <a href="https://wa.me/573114659315">
              Hablar con un abogado
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta}>
        <div>
          <h2>¿Necesitas hacer un trámite en Colombia sin viajar?</h2>

          <p>
            Te asesoramos en la elaboración de poderes y representación legal
            desde cualquier país del mundo.
          </p>

          <a href="https://wa.me/573114659315" className={styles.ctaButton}>
            Consultar ahora
          </a>
        </div>
      </section>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Poderes para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
          }),
        }}
      />
    </main>
  );
}
