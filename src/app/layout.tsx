import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lux Media | Agencia de Marketing Digital en Costa Rica",
  description: "Agencia de marketing digital premium en Costa Rica. Especialistas en redes sociales, producción de video, creación de contenido y estrategia de campañas.",
  keywords: ["marketing digital", "Costa Rica", "redes sociales", "producción de video", "agencia de marketing"],
  openGraph: {
    title: "Lux Media | Agencia de Marketing Digital",
    description: "Transformamos marcas con estrategias digitales de alto impacto",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
