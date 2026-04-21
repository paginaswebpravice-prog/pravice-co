"use client";

import styles from "./Videos.module.css";
import { motion } from "framer-motion";

export default function Videos() {
  const videos = [
    {
      title:
        "Cómo demandar por estafa en Colombia: pasos legales y asesoría en Bogotá",
      url: "https://www.youtube.com/embed/DPQ9xUDyJEc",
      id: "DPQ9xUDyJEc",
    },
    {
      title:
        "Divorcio por mutuo acuerdo en Bogotá: proceso, requisitos y costos en Colombia",
      url: "https://www.youtube.com/embed/eQFEueWd5tw",
      id: "eQFEueWd5tw",
    },
    {
      title:
        "Divorcio sin mutuo acuerdo en Colombia: qué hacer y cómo iniciar el proceso legal",
      url: "https://www.youtube.com/embed/q_b7N9qqWWM",
      id: "q_b7N9qqWWM",
    },
    {
      title:
        "Abogados de familia en Bogotá: divorcios, custodia y asesoría legal en Colombia",
      url: "https://www.youtube.com/embed/365WDDynZlc",
      id: "365WDDynZlc",
    },
    {
      title:
        "Derecho laboral en Colombia para trabajadores: derechos, despidos y reclamaciones",
      url: "https://www.youtube.com/embed/0mx-AE4GzIc",
      id: "0mx-AE4GzIc",
    },
    {
      title:
        "Derecho laboral para empleadores en Bogotá: contratos, despidos y obligaciones legales",
      url: "https://www.youtube.com/embed/8NqdWyNrRQI",
      id: "8NqdWyNrRQI",
    },
    {
      title:
        "Importancia del derecho laboral en Colombia: evita demandas y protege tu empresa",
      url: "https://www.youtube.com/embed/sMcNzoPSo6Y",
      id: "sMcNzoPSo6Y",
    },
    {
      title:
        "Recaudo de cartera en salud en Colombia: cómo recuperar cartera en IPS y EPS",
      url: "https://www.youtube.com/embed/4UzdDo8n22Y",
      id: "4UzdDo8n22Y",
    },
    {
      title:
        "Cobro de cartera en Colombia: proceso legal para recuperar dinero paso a paso",
      url: "https://www.youtube.com/embed/jXeBEImbDl8",
      id: "jXeBEImbDl8",
    },
    {
      title:
        "Derecho comercial en Colombia: asesoría legal para empresas en Bogotá",
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
          Videos de abogados en Bogotá: asesoría legal, demandas, divorcios y
          derecho laboral en Colombia
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore nuestros videos legales en Bogotá Colombia sobre derecho
          comercial, derecho laboral, derecho de familia, conciliaciones,
          demandas, cobro de cartera y asesoría jurídica empresarial. Contenido
          creado por abogados expertos en Colombia para empresas y personas.
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
            Videos legales en Bogotá: asesoría de abogados en derecho comercial,
            laboral y familiar en Colombia
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
