"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEarthAmericas,
  faGavel,
  faBuildingColumns,
  faFileSignature,
  faScaleBalanced,
  faPeopleRoof,
  faPassport,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos de herencia en Colombia sin viajar desde el exterior",
  "Sucesiones notariales y judiciales completas",
  "Representación legal para colombianos en el extranjero",
  "Acompañamiento en conflictos entre herederos",
  "Gestión de documentos y poderes especiales",
  "Seguimiento completo del proceso sucesoral",
];

export default function SucesionesHerenciasContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>
          <FontAwesomeIcon icon={faEarthAmericas} />
          Colombianos en el exterior
        </div>

        <h1 className={styles.title}>
          Sucesiones y herencias en Colombia desde el exterior
        </h1>

        <p className={styles.description}>
          Gestiona procesos de herencia en Colombia sin necesidad de viajar. Te
          explicamos cómo funcionan las sucesiones notariales y judiciales para
          colombianos residentes en el exterior.
        </p>

        <div className={styles.actions}>
          <a href="https://wa.me/573114659315" className={styles.primary}>
            Solicitar asesoría
          </a>

          <Link href="/colombianos-exterior" className={styles.secondary}>
            Volver
          </Link>
        </div>
      </section>

      {/* INTRO EXPANDIDO */}
      <section className={styles.info}>
        <div>
          <h2>¿Cómo funcionan las sucesiones en Colombia desde el exterior?</h2>

          <p>
            Cuando un familiar fallece en Colombia y los herederos se encuentran
            en el extranjero, es necesario adelantar un proceso de sucesión para
            repartir legalmente los bienes.
          </p>

          <p>
            Estos bienes pueden incluir propiedades, cuentas bancarias,
            vehículos, inversiones o derechos patrimoniales.
          </p>

          <p>
            Dependiendo del caso, el proceso puede ser notarial (si hay acuerdo)
            o judicial (si existen conflictos entre herederos).
          </p>

          <p>
            Los colombianos en el exterior pueden participar mediante poderes
            especiales sin necesidad de regresar al país.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>
          Tipos de procesos sucesorales en Colombia
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
            <h3>Sucesión notarial</h3>
            <p>
              Se realiza cuando todos los herederos están de acuerdo en la
              distribución de bienes.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faGavel} />
            </div>
            <h3>Sucesión judicial</h3>
            <p>
              Aplica cuando existen conflictos, disputas o desacuerdos entre
              herederos.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFileSignature} />
            </div>
            <h3>Poderes desde el exterior</h3>
            <p>
              Permiten que un abogado en Colombia represente a los herederos en
              el proceso.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faScaleBalanced} />
            </div>
            <h3>Asesoría patrimonial</h3>
            <p>
              Análisis jurídico de bienes y derechos hereditarios en Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faPeopleRoof} />
            </div>
            <h3>Acuerdos entre herederos</h3>
            <p>
              Acompañamiento en conciliaciones familiares y acuerdos de reparto.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faPassport} />
            </div>
            <h3>Atención internacional</h3>
            <p>
              Asesoría virtual para colombianos en cualquier país del mundo.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS EXPANDIDOS */}
      <section className={styles.benefits}>
        <div>
          <h2>Aspectos clave en sucesiones en Colombia</h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((b, i) => (
              <div className={styles.benefit} key={i}>
                <FontAwesomeIcon icon={faGavel} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO SUPPORT */}
      <section className={styles.seoSupport}>
        <div>
          <h2>Sucesiones en Colombia para colombianos en el exterior</h2>

          <p>
            Los procesos de sucesión pueden ser complejos cuando los herederos
            viven en diferentes países. Por eso es fundamental contar con
            representación legal en Colombia.
          </p>

          <p>
            Un abogado puede adelantar el proceso completo mediante poder,
            evitando que los herederos tengan que viajar.
          </p>

          <p>
            En casos de conflictos familiares, es posible iniciar procesos
            judiciales para resolver la distribución de bienes.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Guía completa de sucesiones en Colombia</h3>

            <Link
              href="https://abogadosespecialistas.com.co/proceso-de-sucesion.html"
              className={styles.seoLink}
              target="_blank"
            >
              Ver guía completa
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div>
          <h2>
            ¿Necesitas resolver una herencia en Colombia desde el exterior?
          </h2>

          <p>Recibe asesoría jurídica especializada en procesos sucesorales.</p>

          <a href="https://wa.me/573114659315" className={styles.ctaButton}>
            Hablar con un abogado
          </a>
        </div>
      </section>
    </main>
  );
}
