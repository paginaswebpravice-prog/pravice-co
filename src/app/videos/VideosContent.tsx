"use client";

import styles from "./Videos.module.css";
import { motion } from "framer-motion";

export default function Videos() {
  const videos = [
    {
      title:
        "Cómo demandar por estafa en Colombia: guía legal y pasos para recuperar su dinero",
      url: "https://www.youtube.com/embed/DPQ9xUDyJEc",
      id: "DPQ9xUDyJEc",
    },
    {
      title:
        "Divorcio por mutuo acuerdo en Bogotá: requisitos, costos y proceso legal en Colombia",
      url: "https://www.youtube.com/embed/eQFEueWd5tw",
      id: "eQFEueWd5tw",
    },
    {
      title:
        "Divorcio sin acuerdo en Colombia: qué hacer y cómo iniciar el proceso legal",
      url: "https://www.youtube.com/embed/q_b7N9qqWWM",
      id: "q_b7N9qqWWM",
    },
    {
      title:
        "Abogados de familia en Bogotá: divorcios, custodia y asesoría legal confiable",
      url: "https://www.youtube.com/embed/365WDDynZlc",
      id: "365WDDynZlc",
    },
    {
      title:
        "Derecho laboral en Colombia: derechos del trabajador, despidos y reclamaciones",
      url: "https://www.youtube.com/embed/0mx-AE4GzIc",
      id: "0mx-AE4GzIc",
    },
    {
      title:
        "Derecho laboral para empresas en Bogotá: contratos, despidos y obligaciones legales",
      url: "https://www.youtube.com/embed/8NqdWyNrRQI",
      id: "8NqdWyNrRQI",
    },
    {
      title:
        "Derecho laboral en Colombia: cómo evitar demandas y proteger su empresa",
      url: "https://www.youtube.com/embed/sMcNzoPSo6Y",
      id: "sMcNzoPSo6Y",
    },
    {
      title:
        "Cómo recuperar cartera en salud en Colombia: estrategias legales para IPS y clínicas",
      url: "https://www.youtube.com/embed/4UzdDo8n22Y",
      id: "4UzdDo8n22Y",
    },
    {
      title:
        "Cobro de cartera en Colombia: proceso legal para recuperar deudas paso a paso",
      url: "https://www.youtube.com/embed/jXeBEImbDl8",
      id: "jXeBEImbDl8",
    },
    {
      title:
        "Derecho comercial en Bogotá: asesoría legal para empresas y negocios en Colombia",
      url: "https://www.youtube.com/embed/bVky48kidxg",
      id: "bVky48kidxg",
    },
  ];

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ================= HERO SEO ================= */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Videos de abogados en Bogotá: divorcios, demandas y asesoría legal en
          Colombia
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore videos legales creados por abogados expertos en Bogotá
          Colombia sobre derecho comercial, derecho laboral, divorcios,
          conciliaciones, cobro de cartera y asesoría jurídica para empresas y
          personas.
        </motion.p>

        {/* ================= GRID VIDEOS ================= */}
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className={styles.videoCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <iframe
                src={video.url}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h3>{video.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* ================= CONTENIDO SEO FUERTE ================= */}
        <section className={styles.seoBlock}>
          <h2>
            Videos legales en Bogotá sobre divorcios, derecho laboral, cobro de
            cartera y asesoría jurídica empresarial
          </h2>

          <p>
            En Pravice Abogados, firma ubicada en Bogotá Colombia, ofrecemos
            contenido jurídico en video enfocado en derecho comercial, derecho
            laboral, derecho de familia y asesoría jurídica empresarial. Nuestro
            objetivo es brindar información clara, confiable y útil para
            empresas y personas en Colombia.
          </p>

          <p>
            Estos videos explican temas como demandas por estafa en Colombia,
            divorcios por mutuo acuerdo, procesos sin acuerdo, cobro de cartera,
            conciliaciones legales y obligaciones laborales. Todo el contenido
            está diseñado por abogados especialistas en Bogotá con experiencia
            en litigio y asesoría legal.
          </p>

          <p>
            Si busca abogados en Bogotá Colombia o asesoría jurídica confiable,
            estos videos le permitirán entender mejor sus derechos y tomar
            decisiones informadas en temas legales.
          </p>
        </section>

        {/* ================= SEO OCULTO ================= */}
        <p className={styles.seoText}>
          abogados en Bogotá Colombia videos legales, derecho comercial
          Colombia, abogados derecho laboral Bogotá, abogados de familia
          Colombia, asesoría jurídica empresas Bogotá, conciliaciones legales
          Colombia, abogados expertos Bogotá Colombia, firma de abogados Bogotá
          Pravice
        </p>

        {/* ================= SCHEMA AVANZADO ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Videos de abogados en Bogotá Colombia",
              description:
                "Videos legales sobre derecho comercial, laboral, familiar y asesoría jurídica en Bogotá Colombia.",
              publisher: {
                "@type": "Organization",
                name: "Pravice Abogados",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bogotá",
                  addressCountry: "CO",
                },
              },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: videos.map((video, index) => ({
                  "@type": "VideoObject",
                  position: index + 1,
                  name: video.title,
                  embedUrl: video.url,
                  thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
                  uploadDate: "2024-01-01",
                })),
              },
            }),
          }}
        />
      </div>
    </main>
  );
}
