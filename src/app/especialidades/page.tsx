"use client";

import styles from "./Especialidades.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScaleBalanced,
  faFileContract,
  faHandshake,
  faGavel,
  faBuilding,
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
  link: string;
}

export default function Especialidades() {
  const especialidades: Especialidad[] = [
    {
      titulo: "Derecho comercial y operaciones empresariales",
      descripcion:
        "Aspectos jurídicos relacionados con contratos mercantiles, operaciones comerciales y actividad empresarial en Colombia.",
      icono: faScaleBalanced,
      link: "/especialidades/derecho-comercial",
    },
    {
      titulo: "Gestión y recuperación de cartera",
      descripcion:
        "Estrategias jurídicas y mecanismos aplicados a procesos de recaudo y recuperación de obligaciones comerciales.",
      icono: faFileContract,
      link: "/especialidades/recuperacion-de-cartera",
    },
    {
      titulo: "Conciliación y mecanismos alternativos",
      descripcion:
        "Métodos orientados a la resolución de conflictos mediante conciliación y negociación extrajudicial.",
      icono: faHandshake,
      link: "/especialidades/conciliacion",
    },
    {
      titulo: "Procesos judiciales y resolución de disputas",
      descripcion:
        "Información sobre litigios, representación judicial y manejo estratégico de controversias legales.",
      icono: faGavel,
      link: "/especialidades/litigios",
    },
    {
      titulo: "Estructura y organización empresarial",
      descripcion:
        "Soluciones relacionadas con estructura jurídica, crecimiento corporativo y operación empresarial.",
      icono: faBuilding,
      link: "/especialidades/derecho-empresarial",
    },
    {
      titulo: "Derecho de familia",
      descripcion:
        "Asesoría legal en divorcios, custodia, alimentos, sucesiones y conflictos familiares en Colombia.",
      icono: faUsers,
      link: "/especialidades/derecho-familia",
    },
    {
      titulo: "Contratos y seguridad jurídica",
      descripcion:
        "Revisión, análisis y estructuración de acuerdos comerciales y documentos contractuales.",
      icono: faFileSignature,
      link: "/especialidades/derecho-contractual",
    },
    {
      titulo: "Derecho societario y sociedades comerciales",
      descripcion:
        "Aspectos legales relacionados con constitución, reorganización y gestión societaria.",
      icono: faUsers,
      link: "/especialidades/derecho-societario",
    },
    {
      titulo: "Relaciones con entidades y regulación administrativa",
      descripcion:
        "Procesos administrativos y gestión jurídica frente a entidades públicas y regulatorias.",
      icono: faLandmark,
      link: "/especialidades/derecho-administrativo",
    },
    {
      titulo: "Resolución estratégica de conflictos",
      descripcion:
        "Alternativas jurídicas enfocadas en prevención, negociación y solución de controversias empresariales.",
      icono: faBalanceScale,
      link: "/especialidades/resolucion-de-conflictos",
    },
    {
      titulo: "Cumplimiento normativo y prevención legal",
      descripcion:
        "Prácticas orientadas al cumplimiento regulatorio y mitigación de riesgos legales empresariales.",
      icono: faClipboardCheck,
      link: "/especialidades/cumplimiento-normativo",
    },
    {
      titulo: "Protección jurídica para empresas",
      descripcion:
        "Herramientas legales para fortalecer la seguridad jurídica y protección de operaciones comerciales.",
      icono: faShieldHalved,
      link: "/especialidades/proteccion-juridica-empresarial",
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
            Conoce nuestras áreas de práctica jurídica empresarial en Colombia
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
            Explora las principales áreas de práctica jurídica empresarial en
            Colombia. Encuentra información sobre derecho comercial,
            recuperación de cartera, conciliación, contratos, cumplimiento
            normativo, litigios y derecho societario para empresas y
            organizaciones.
          </motion.p>

          {/* ENLACE CONTEXTUAL HACIA EL PORTAL PRINCIPAL */}

          <motion.div
            className={styles.portalPrincipal}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Si buscas servicios jurídicos empresariales y acompañamiento legal
              especializado en Colombia, puedes visitar nuestro portal principal
              de{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados-especialistas.html"
                target="_blank"
                rel="noopener"
              >
                soluciones jurídicas empresariales en Colombia
              </a>
              , donde encontrarás información ampliada sobre conciliación,
              litigios, contratos y estrategias legales corporativas.
            </p>
          </motion.div>

          {/* ESPECIALIDADES */}

          <div className={styles.cards}>
            {especialidades.map((esp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={esp.link}
                  className={styles.card}
                  itemProp="hasOfferCatalog"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <FontAwesomeIcon
                      icon={esp.icono}
                      className={styles.icono}
                    />
                  </motion.div>

                  <h3>{esp.titulo}</h3>

                  <p>{esp.descripcion}</p>

                  <span className={styles.cardLink}>Explorar especialidad</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CONTEXTO SEO */}

          <section className={styles.contextoSeo}>
            <h2>
              ¿Cuáles son las principales áreas de práctica jurídica para
              empresas en Colombia?
            </h2>

            <p>
              Las empresas y organizaciones enfrentan retos legales relacionados
              con contratos, cumplimiento normativo, recuperación de cartera,
              conflictos comerciales y relaciones societarias. Cada área de
              práctica jurídica permite abordar riesgos específicos y mejorar la
              seguridad legal de las operaciones empresariales.
            </p>

            <p>
              Comprender las diferentes especialidades jurídicas facilita la
              toma de decisiones estratégicas, la prevención de contingencias y
              la correcta estructuración de procesos legales dentro del entorno
              corporativo en Colombia.
            </p>

            <p>
              Para conocer soluciones jurídicas empresariales y servicios
              legales especializados, también puedes consultar nuestro portal
              principal de{" "}
              <a
                href="https://abogadosespecialistas.com.co/abogados-especialistas.html"
                target="_blank"
                rel="noopener"
              >
                servicios jurídicos empresariales en Colombia
              </a>
              .
            </p>
          </section>

          {/* FAQ 
          <section className={styles.faq}>
            <h2>
              Preguntas frecuentes sobre especialidades jurídicas empresariales
            </h2>

            <h3>¿Qué es una especialidad jurídica empresarial?</h3>

            <p>
              Es un área específica del derecho enfocada en resolver necesidades
              legales de empresas, organizaciones y actividades comerciales.
            </p>

            <h3>
              ¿Cuáles son las áreas jurídicas más utilizadas por las empresas?
            </h3>

            <p>
              Derecho comercial, derecho societario, contratos, recuperación de
              cartera, conciliación, litigios y cumplimiento normativo.
            </p>

            <h3>
              ¿Por qué es importante conocer las diferentes áreas de práctica
              jurídica?
            </h3>

            <p>
              Porque permite identificar riesgos legales, mejorar la toma de
              decisiones y fortalecer la seguridad jurídica de las operaciones
              empresariales.
            </p>

            <h3>
              ¿Qué especialidad jurídica ayuda a recuperar deudas empresariales?
            </h3>

            <p>
              La recuperación de cartera y los procesos de cobro prejurídico y
              jurídico están orientados a la gestión y recuperación de
              obligaciones pendientes.
            </p>
          </section>
          */}
        </div>
      </section>

      {/* SCHEMA SEO */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Especialidades jurídicas empresariales",
            areaServed: "Colombia",

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Áreas de práctica jurídica",

              itemListElement: especialidades.map((esp) => ({
                "@type": "Offer",

                itemOffered: {
                  "@type": "Service",
                  name: esp.titulo,
                  description: esp.descripcion,
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}
