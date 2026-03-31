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
          "Proceso de divorcio por mutuo acuerdo en Bogotá Colombia, requisitos legales, costos y asesoría jurídica.",
        thumbnailUrl: "https://i.ytimg.com/vi/eQFEueWd5tw/maxresdefault.jpg",
        uploadDate: "2024-10-01",
        duration: "PT4M30S",
        embedUrl: "https://www.youtube.com/embed/eQFEueWd5tw",
        contentUrl: "https://www.youtube.com/watch?v=eQFEueWd5tw",
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
          "Servicios de derecho comercial en Bogotá Colombia para empresas, contratos, sociedades y asesoría jurídica empresarial.",
        thumbnailUrl: "https://i.ytimg.com/vi/bVky48kidxg/maxresdefault.jpg",
        uploadDate: "2024-10-05",
        duration: "PT5M10S",
        embedUrl: "https://www.youtube.com/embed/bVky48kidxg",
        contentUrl: "https://www.youtube.com/watch?v=bVky48kidxg",
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
          "Explicación sobre la importancia del derecho laboral en Colombia para empresas y trabajadores.",
        thumbnailUrl: "https://i.ytimg.com/vi/sMcNzoPSo6Y/maxresdefault.jpg",
        uploadDate: "2024-10-10",
        duration: "PT4M50S",
        embedUrl: "https://www.youtube.com/embed/sMcNzoPSo6Y",
        contentUrl: "https://www.youtube.com/watch?v=sMcNzoPSo6Y",
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
          Videos de nuestros abogados en Bogotá - Pravice Abogados
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conozca nuestros servicios legales en Bogotá Colombia a través de
          nuestros videos sobre derecho tributario, derecho comercial, asesoría
          jurídica empresarial, conciliaciones y servicios legales para empresas
          y personas en Colombia.
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
          <a href="/videos" className={styles.primaryBtn}>
            Ver todos los videos
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
