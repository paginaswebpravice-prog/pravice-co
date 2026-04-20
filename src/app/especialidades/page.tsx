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
  faUserTie,
  faTrademark,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

interface Especialidad {
  titulo: string;
  descripcion: string;
  icono: any;
  link: string;
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
        "Asesoría en derecho comercial en Colombia para empresas, contratos mercantiles y operaciones comerciales, con abogados especializados en Bogotá.",
      icono: faScaleBalanced,
      link: "/especialidades/derecho-comercial",
    },
    {
      titulo: "Recuperación de Cartera",
      descripcion:
        "Recuperación de cartera en Colombia mediante estrategias de cobro prejurídico y jurídico, optimizando el recaudo de deudas empresariales.",
      icono: faFileContract,
      link: "/especialidades/recuperacion-de-cartera",
    },
    {
      titulo: "Conciliación",
      descripcion:
        "Conciliación extrajudicial en Colombia como mecanismo eficaz para resolver conflictos empresariales sin necesidad de procesos judiciales.",
      icono: faHandshake,
      link: "/especialidades/conciliacion",
    },
    {
      titulo: "Litigios",
      descripcion:
        "Representación en litigios empresariales en Colombia ante juzgados, con abogados expertos en procesos judiciales y demandas ejecutivas.",
      icono: faGavel,
      link: "/especialidades/litigios",
    },
    {
      titulo: "Derecho Empresarial",
      descripcion:
        "Servicios de derecho empresarial en Bogotá para la estructuración, protección y crecimiento legal de empresas en Colombia.",
      icono: faBuilding,
      link: "/especialidades/derecho-empresarial",
    },
    {
      titulo: "Asesoría Corporativa",
      descripcion:
        "Asesoría corporativa estratégica para empresas en Colombia, enfocada en toma de decisiones legales, cumplimiento y gestión de riesgos.",
      icono: faBriefcase,
      link: "/especialidades/asesoria-corporativa",
    },
    {
      titulo: "Derecho Contractual",
      descripcion:
        "Elaboración y revisión de contratos comerciales en Colombia, garantizando seguridad jurídica en acuerdos empresariales.",
      icono: faFileSignature,
      link: "/especialidades/derecho-contractual",
    },
    {
      titulo: "Derecho Societario",
      descripcion:
        "Constitución y reorganización de sociedades en Colombia, con abogados especializados en derecho societario en Bogotá.",
      icono: faUsers,
      link: "/especialidades/derecho-societario",
    },
    {
      titulo: "Derecho Administrativo",
      descripcion:
        "Asesoría en procesos administrativos en Colombia y representación ante entidades públicas para empresas y particulares.",
      icono: faLandmark,
      link: "/especialidades/derecho-administrativo",
    },
    {
      titulo: "Resolución de Conflictos",
      descripcion:
        "Solución de conflictos empresariales mediante negociación, conciliación y mecanismos legales eficientes en Colombia.",
      icono: faBalanceScale,
      link: "/especialidades/resolucion-de-conflictos",
    },
    {
      titulo: "Cumplimiento Normativo",
      descripcion:
        "Cumplimiento normativo en Colombia para empresas, prevención de riesgos legales y adaptación a regulaciones vigentes.",
      icono: faClipboardCheck,
      link: "/especialidades/cumplimiento-normativo",
    },
    {
      titulo: "Protección Jurídica Empresarial",
      descripcion:
        "Estrategias de protección jurídica empresarial en Colombia para salvaguardar activos, contratos y operaciones comerciales.",
      icono: faShieldHalved,
      link: "/especialidades/proteccion-juridica-empresarial",
    },
  ];

  const portales: Portal[] = [
    {
      nombre: "Cobrando Online",
      descripcion:
        "Plataforma especializada en recuperación de cartera en Colombia, cobro prejurídico y gestión de deudas empresariales.",
      link: "https://cobrandoonline.com/",
    },
    {
      nombre: "Recaudo Cartera IPS y EPS",
      descripcion:
        "Soluciones jurídicas para recuperación de cartera en el sector salud en Colombia, IPS y EPS.",
      link: "https://recaudocarteraipsyeps.com/",
    },
    {
      nombre: "Derecho Laboral",
      descripcion:
        "Asesoría en derecho laboral en Colombia para empresas y trabajadores, con abogados especializados en relaciones laborales y conflictos laborales.",
      link: "https://pravice-abogadoslaboralistas.vercel.app/",
    },
    {
      nombre: " Marcas y Patentes",
      descripcion:
        "Protección de propiedad intelectual en Colombia, registro de marcas y patentes para empresas y emprendedores.",
      link: "https://marcas-y-patentes.vercel.app",
    },
    {
      nombre: "Gestion de Cartera en Cali",
      descripcion:
        "Servicios de gestión de cartera en Cali, Colombia, para optimizar el recaudo de deudas empresariales y mejorar la liquidez.",
      link: "https://gestion-cartera-cali-pravice.vercel.app/",
    },
    {
      nombre: "Gestion de Cartera en Bucaramanga",
      descripcion:
        "Soluciones de gestión de cartera en Bucaramanga, Colombia, para empresas que buscan mejorar su recuperación de deudas y flujo de caja.",
      link: "https://gestion-cartera-bucaramanga-iota.vercel.app/",
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
            Especialidades legales en Bogotá y Colombia
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
            Somos una firma de abogados especializados en Bogotá y Colombia, con
            amplia experiencia en derecho empresarial, derecho comercial,
            recuperación de cartera y litigios. Brindamos servicios legales
            estratégicos a empresas y particulares, ofreciendo soluciones en
            cobro prejurídico, cobro jurídico, conciliación extrajudicial y
            asesoría corporativa. Nuestro enfoque combina experiencia jurídica,
            análisis estratégico y gestión eficiente para proteger los intereses
            legales y financieros de nuestros clientes en Colombia.
          </motion.p>

          {/* ESPECIALIDADES */}

          <div className={styles.cards}>
            {especialidades.map((esp, index) => (
              <motion.a
                key={index}
                className={styles.card}
                href={esp.link}
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
              </motion.a>
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
