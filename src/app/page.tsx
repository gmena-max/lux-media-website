import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ResultsTicker from "@/components/ResultsTicker";
import ServicesPreview from "@/components/ServicesPreview";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import DashboardTeaser from "@/components/DashboardTeaser";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://luxmediacr.com",
  },
};

// FAQ JSON-LD for homepage only
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta trabajar con ustedes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gestión de redes sociales arranca desde $500/mes. Estrategia completa (contenido + pauta + reportes) desde $1,500/mes. En la consulta de diagnóstico definimos qué necesitás y cuánto cuesta exactamente — sin sorpresas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo es el proceso de trabajo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rápido. Día 1: diagnóstico de tu marca. Día 3-5: propuesta con metas claras. Semana 1: arrancamos ejecución. Cada semana recibís avances, cada mes un reporte con números reales.",
      },
    },
    {
      "@type": "Question",
      name: "¿En cuánto tiempo veo resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pauta pagada: leads desde la primera semana. Contenido orgánico: tracción real en 60-90 días. Te damos metas con fechas concretas desde el día 1 — no promesas vagas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Manejan la pauta o solo el contenido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todo. Estrategia, creativos, configuración técnica, pauta, optimización y reportes. Vos solo aprobás el contenido y cerrás ventas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de Costa Rica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros clientes actuales están en Costa Rica, pero trabajamos de forma 100% remota y podemos atender marcas en cualquier país de habla hispana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué industrias manejan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Salud (clínicas), deportes (TV nacional), tecnología (eventos internacionales) y educación. Trabajar con industrias distintas nos da un ángulo fresco que agencias de nicho no tienen.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main id="main-content" className="min-h-screen bg-[var(--background)] aurora-bg">
        <Hero />
        <ClientLogos />
        <ResultsTicker />
        <ServicesPreview />
        <Portfolio />
        <Process />
        <DashboardTeaser />
        <Testimonials />
        <About />
        <FAQ />
        <CtaBanner />
      </main>
    </>
  );
}
