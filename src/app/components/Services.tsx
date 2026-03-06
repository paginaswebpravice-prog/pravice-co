"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faPeopleCarryBox,
  faScaleBalanced,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Services.module.css";

const services = [
  {
    icon: faRegistered,
    title: "Registro de Marca",
    text: "Protege tu negocio con exclusividad. Te asesoramos en todo el proceso para garantizar un registro exitoso ante la SIC.",
  },
  {
    icon: faPeopleCarryBox,
    title: "Derecho Laboral",
    text: "Asesoría y representación en temas laborales para empleadores y trabajadores, asegurando el cumplimiento de la ley.",
  },
  {
    icon: faScaleBalanced,
    title: "Insolvencia",
    text: "Te asesoramos en cada etapa del proceso de insolvencia, desde la evaluación financiera hasta la negociación con acreedores.",
  },
  {
    icon: faFileInvoice,
    title: "Derecho Comercial",
    text: "Creación de empresas, contratos comerciales, resolución de conflictos entre socios y cumplimiento legal empresarial.",
  },
];

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios legales de Pravice Abogados",
    description:
      "Portafolio de servicios legales ofrecidos por Pravice Abogados en áreas como derecho laboral, comercial, insolvencia y registro de marca.",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.text,
      provider: {
        "@type": "Organization",
        name: "Pravice Abogados",
        url: "https://praviceabogados.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
    })),
  };

  return (
    <section className={styles.section} id="services">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Portafolio de servicios que <span>marcan la diferencia</span>
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En Pravice Abogados, contamos con un equipo de especialistas en
          diversas áreas del derecho para ofrecerte soluciones efectivas y
          personalizadas. Cada servicio está diseñado para resolver un problema
          real.
        </motion.p>

        {/* GRID */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
