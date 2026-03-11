"use client";

import styles from "./Especialidades.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faArrowUpRightFromSquare,
  faScaleBalanced,
  faFileContract,
  faHandshake,
  faGavel,
  faBuilding,
  faBriefcase,
  faFileSignature,
  faUsers,
  faLandmark,
  faBalanceScale,
  faClipboardCheck,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

interface Especialidad {
  titulo: string;
  descripcion: string;
  icono: any;
}

interface Portal {
  nombre: string;
  descripcion: string;
  link: string;
}

export default function Especialidades() {
  const especialidades: Especialidad[] = [
    {
      titulo: "Derecho Comercial",
      descripcion:
        "Asesoría jurídica integral para empresas, contratos mercantiles y operaciones comerciales.",
      icono: faScaleBalanced,
    },
    {
      titulo: "Recuperación de Cartera",
      descripcion:
        "Estrategias legales y administrativas para optimizar el recaudo de cartera.",
      icono: faFileContract,
    },
    {
      titulo: "Conciliación",
      descripcion:
        "Solución de conflictos mediante mecanismos alternativos y conciliación extrajudicial.",
      icono: faHandshake,
    },
    {
      titulo: "Litigios",
      descripcion:
        "Representación jurídica en procesos judiciales ante distintas jurisdicciones.",
      icono: faGavel,
    },
    {
      titulo: "Derecho Empresarial",
      descripcion:
        "Acompañamiento legal en la estructuración y desarrollo de empresas.",
      icono: faBuilding,
    },
    {
      titulo: "Asesoría Corporativa",
      descripcion:
        "Servicios jurídicos estratégicos para la toma de decisiones empresariales.",
      icono: faBriefcase,
    },
    {
      titulo: "Derecho Contractual",
      descripcion:
        "Elaboración, revisión y negociación de contratos civiles y comerciales.",
      icono: faFileSignature,
    },
    {
      titulo: "Derecho Societario",
      descripcion:
        "Constitución, transformación y reorganización de sociedades comerciales.",
      icono: faUsers,
    },
    {
      titulo: "Derecho Administrativo",
      descripcion:
        "Asesoría y representación en procesos ante entidades públicas y administrativas.",
      icono: faLandmark,
    },
    {
      titulo: "Resolución de Conflictos",
      descripcion:
        "Mecanismos jurídicos para la solución eficiente de disputas empresariales y comerciales.",
      icono: faBalanceScale,
    },
    {
      titulo: "Cumplimiento Normativo",
      descripcion:
        "Asesoría en cumplimiento legal, regulación empresarial y gestión de riesgos jurídicos.",
      icono: faClipboardCheck,
    },
    {
      titulo: "Protección Jurídica Empresarial",
      descripcion:
        "Estrategias legales para proteger los intereses jurídicos y patrimoniales de las empresas.",
      icono: faShieldHalved,
    },
  ];

  const portales: Portal[] = [
    {
      nombre: "Cobrando Online",
      descripcion:
        "Plataforma especializada en procesos de cobro y recuperación de cartera.",
      link: "https://www.cobrandoonline.com/",
    },
    {
      nombre: "Recaudo Cartera IPS y EPS",
      descripcion:
        "Soluciones jurídicas y administrativas para el recaudo de cartera en el sector salud.",
      link: "https://www.recaudocarteraipsyeps.com/",
    },
    {
      nombre: "",
      descripcion: "",
      link: "",
    },
  ];

  return (
    <>
      <section
        id="especialidades"
        className={styles.especialidades}
        itemScope
        itemType="https://schema.org/LegalService"
      >
        <div className={styles.container}>
          {/* TITULO */}

          <motion.h2
            className={styles.titulo}
            itemProp="name"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestras Especialidades
          </motion.h2>

          {/* DESCRIPCION */}

          <motion.p
            className={styles.descripcion}
            itemProp="description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro equipo jurídico cuenta con amplia experiencia en diferentes
            áreas del derecho, brindando soluciones estratégicas a empresas y
            particulares.
          </motion.p>

          {/* ESPECIALIDADES */}

          <div className={styles.cards}>
            {especialidades.map((esp, index) => (
              <motion.div
                key={index}
                className={styles.card}
                itemScope
                itemType="https://schema.org/Service"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <FontAwesomeIcon icon={esp.icono} className={styles.icono} />
                </motion.div>

                <h3 itemProp="name">{esp.titulo}</h3>
                <p itemProp="description">{esp.descripcion}</p>
              </motion.div>
            ))}
          </div>

          {/* PORTALES */}

          <div className={styles.portalesWrapper}>
            <motion.h3
              className={styles.tituloPortales}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faGlobeAmericas} />
              Visita nuestros portales especializados
            </motion.h3>

            <div className={styles.portalesGrid}>
              {portales.map((portal, index) => (
                <motion.a
                  key={index}
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.portalCard}
                  title={portal.nombre}
                  aria-label={`Visitar portal ${portal.nombre}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h4>{portal.nombre}</h4>
                  <p>{portal.descripcion}</p>

                  <span className={styles.portalLink}>
                    Visitar portal
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA SEO */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Nuestras Especialidades",
            areaServed: "Colombia",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Especialidades Jurídicas",
              itemListElement: especialidades.map((esp) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: esp.titulo,
                  description: esp.descripcion,
                },
              })),
            },
            sameAs: portales.map((portal) => portal.link),
          }),
        }}
      />
    </>
  );
}
