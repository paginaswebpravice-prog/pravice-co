import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Asesoria en diversas areas del derecho | Pravice Abogados Especialistas",
  description:
    "Pravice Abogados Especialistas es una firma de abogados en Bogotá, Colombia, que ofrece asesoría legal en diversas áreas del derecho, incluyendo derecho civil, penal, laboral y comercial. Nuestro equipo de abogados altamente capacitados se dedica a brindar soluciones legales efectivas y personalizadas para nuestros clientes. Contáctanos hoy para una consulta gratuita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
