"use client";

import styles from "../styles/VideosPreview.module.css";
import { motion } from "framer-motion";

export default function VideosPreview() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        name: "Actualidad jurídica y resolución de conflictos en Colombia",
        description:
          "Video informativo sobre divorcio por mutuo acuerdo en Colombia y orientación jurídica familiar.",
        thumbnailUrl: "https://i.ytimg.com/vi/eQFEueWd5tw/maxresdefault.jpg",
        uploadDate: "2021-11-09T12:00:00-05:00",
        duration: "PT4M30S",
        embedUrl: "https://www.youtube.com/embed/eQFEueWd5tw",
        contentUrl: "https://www.youtube.com/watch?v=eQFEueWd5tw",
        inLanguage: "es",
        publisher: {
          "@type": "Organization",
          name: "Pravice Abogados",
          logo: {
            "@type": "ImageObject",
            url: "https://pravice.co/logo.png",
          },
        },
      },
      {
        "@type": "VideoObject",
        name: "Gestión legal empresarial y derecho comercial en Colombia",
        description:
          "Contenido jurídico orientado a derecho comercial y asesoría empresarial en Colombia.",
        thumbnailUrl: "https://i.ytimg.com/vi/bVky48kidxg/maxresdefault.jpg",
        uploadDate: "2020-02-14T12:00:00-05:00",
        duration: "PT5M10S",
        embedUrl: "https://www.youtube.com/embed/bVky48kidxg",
        contentUrl: "https://www.youtube.com/watch?v=bVky48kidxg",
        inLanguage: "es",
        publisher: {
          "@type": "Organization",
          name: "Pravice Abogados",
          logo: {
            "@type": "ImageObject",
            url: "https://pravice.co/logo.png",
          },
        },
      },
      {
        "@type": "VideoObject",
        name: "Cumplimiento laboral y gestión de riesgos para empresas",
        description:
          "Video jurídico informativo sobre derecho laboral y relaciones laborales en Colombia.",
        thumbnailUrl: "https://i.ytimg.com/vi/sMcNzoPSo6Y/maxresdefault.jpg",
        uploadDate: "2021-10-13T12:00:00-05:00",
        duration: "PT4M50S",
        embedUrl: "https://www.youtube.com/embed/sMcNzoPSo6Y",
        contentUrl: "https://www.youtube.com/watch?v=sMcNzoPSo6Y",
        inLanguage: "es",
        publisher: {
          "@type": "Organization",
          name: "Pravice Abogados",
          logo: {
            "@type": "ImageObject",
            url: "https://pravice.co/logo.png",
          },
        },
      },
    ],
  };

  return (
    <section className={styles.section} id="videos-pravice">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Videos sobre gestión legal, cumplimiento normativo y actualidad
          jurídica en Colombia
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En Pravice compartimos videos educativos sobre cumplimiento normativo,
          gestión legal empresarial, prevención de riesgos jurídicos, actualidad
          legal colombiana y diferentes temas de interés para empresas y
          organizaciones., puedes visitar{" "}
          <a
            href="https://abogadosespecialistas.com.co/video.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abogados Especialistas
          </a>
          .
        </motion.p>

        <div className={styles.videoGrid}>
          <motion.div className={styles.videoCard}>
            <iframe
              src="https://www.youtube.com/embed/eQFEueWd5tw"
              title="Divorcio por mutuo acuerdo Bogotá"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div className={styles.videoCard}>
            <iframe
              src="https://www.youtube.com/embed/bVky48kidxg"
              title="Abogados derecho comercial Bogotá Colombia"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>

          <motion.div className={styles.videoCard}>
            <iframe
              src="https://www.youtube.com/embed/sMcNzoPSo6Y"
              title="Importancia del derecho laboral Colombia"
              loading="lazy"
              allowFullScreen
            />
          </motion.div>
        </div>

        <div className={styles.buttonContainer}>
          <a
            href="https://abogadosespecialistas.com.co/video.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Ver biblioteca jurídica completa →
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema),
          }}
        />
      </div>
      <div className={styles.seoContent}>
        <h3>
          Contenido jurídico para empresas, organizaciones y profesionales
        </h3>

        <p>
          Nuestros videos abordan temas relacionados con cumplimiento normativo,
          derecho corporativo, gestión legal empresarial, contratación,
          prevención de conflictos y cambios regulatorios que impactan a las
          organizaciones en Colombia.
        </p>

        <p>
          Este contenido está orientado a brindar información clara y práctica
          sobre aspectos legales que pueden influir en la toma de decisiones
          empresariales y en la gestión de riesgos jurídicos.
        </p>
      </div>
    </section>
  );
}
