"use client";

import styles from "./Videos.module.css";
import { motion } from "framer-motion";

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

export default function Videos() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Videos jurídicos y empresariales en Colombia
          </span>

          <h1 className={styles.title}>
            Videos jurídicos en Colombia: contenido legal y empresarial
            informativo
          </h1>

          <p className={styles.subtitle}>
            Acceda a contenido audiovisual sobre derecho empresarial, derecho
            laboral, conciliaciones, recuperación de cartera, divorcios y
            estrategias legales para empresas y personas en Colombia.
          </p>

          <div className={styles.actions}>
            <a
              href="https://abogadosespecialistas.com.co/video.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Ver portal principal
            </a>

            <a href="#videos" className={styles.secondary}>
              Explorar videos
            </a>
          </div>
        </motion.div>
      </section>

      <div className={styles.container}>
        {/* SEO SUPPORT BLOCK */}
        <motion.section
          className={styles.portalSeo}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Plataforma complementaria de recursos audiovisuales jurídicos</h2>

          <p>
            Pravice funciona como una plataforma complementaria de contenido
            audiovisual enfocada en temas jurídicos y empresariales en Colombia.
            Aquí encontrará videos informativos sobre conciliaciones, conflictos
            empresariales, derecho laboral, divorcios, cartera y diferentes
            situaciones legales frecuentes.
          </p>

          <p>
            Para conocer información más amplia sobre servicios jurídicos,
            asesoría legal especializada y diferentes áreas del derecho en
            Colombia, también puede visitar{" "}
            <a
              href="https://abogadosespecialistas.com.co/video.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abogados Especialistas
            </a>
            , portal principal donde se desarrolla contenido legal más completo
            y especializado.
          </p>

          <p>
            El objetivo de esta sección es servir como apoyo informativo y
            audiovisual para usuarios que buscan orientación inicial sobre temas
            jurídicos en Colombia.
          </p>
        </motion.section>

        {/* VIDEOS */}
        <section id="videos">
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <motion.article
                key={index}
                className={styles.videoCard}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <iframe
                  src={video.url}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className={styles.videoContent}>
                  <h3>{video.title}</h3>

                  <p>
                    Video informativo sobre procesos legales y situaciones
                    jurídicas frecuentes en Colombia.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTENT SEO */}
        <section className={styles.contentSeo}>
          <h2>
            Contenido audiovisual sobre derecho empresarial y servicios legales
            en Colombia
          </h2>

          <p>
            Los videos publicados en esta sección abordan diferentes áreas del
            derecho que impactan tanto a empresas como a personas en Colombia.
            Entre los temas más consultados se encuentran conciliaciones,
            derecho laboral, recuperación de cartera, conflictos empresariales,
            divorcios y procesos civiles.
          </p>

          <p>
            El contenido audiovisual permite comprender de forma más práctica
            conceptos legales, obligaciones empresariales y estrategias
            jurídicas utilizadas en Colombia para prevenir riesgos legales y
            resolver conflictos.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Este contenido tiene carácter
            informativo y educativo. Cada caso debe ser analizado de manera
            individual por profesionales del derecho.
          </div>

          <p>
            Si desea conocer más recursos jurídicos especializados, puede
            visitar el portal de{" "}
            <a
              href="https://abogadosespecialistas.com.co/video.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abogados Especialistas
            </a>
            , donde encontrará información adicional sobre servicios legales y
            asesoría jurídica en Colombia.
          </p>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Necesita asesoría legal en Colombia?
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo puede ayudarle en temas de derecho empresarial,
              conciliaciones, conflictos legales, cartera y asesoría jurídica
              integral.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Hablar por WhatsApp
              </a>

              <a
                href="https://abogadosespecialistas.com.co/video.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                Ir al portal principal
              </a>
            </div>
          </div>
        </section>

        {/* SEO TEXT */}
        <div className={styles.seoText}>
          videos jurídicos Colombia, contenido audiovisual legal Colombia,
          derecho empresarial Colombia, conciliaciones Colombia, abogados en
          Bogotá, recuperación de cartera Colombia, videos derecho laboral,
          recursos legales empresariales, abogados especialistas Colombia
        </div>

        {/* SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Videos jurídicos y empresariales en Colombia",
              description:
                "Colección de videos informativos sobre derecho empresarial, conciliaciones, cartera y servicios legales en Colombia.",
              url: "https://pravice.co/videos",
              publisher: {
                "@type": "Organization",
                name: "Pravice",
                url: "https://pravice.co",
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
