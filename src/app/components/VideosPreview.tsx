"use client";

import styles from "../styles/VideosPreview.module.css";
import { motion } from "framer-motion";

export default function VideosPreview() {
  const videoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        name: "Divorcio por mutuo acuerdo Bogotá",
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
        name: "Abogados derecho comercial Bogotá Colombia",
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
        name: "Importancia del derecho laboral Colombia",
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
          Contenido audiovisual jurídico y orientación legal en Colombia
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          En <strong>Pravice Abogados</strong> compartimos contenido jurídico
          informativo sobre derecho laboral, comercial, familiar y asesoría
          empresarial. Si deseas conocer información más amplia sobre nuestro
          equipo jurídico y servicios legales especializados, puedes visitar{" "}
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
            Ver contenido jurídico →
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(videoSchema),
          }}
        />
      </div>
    </section>
  );
}
