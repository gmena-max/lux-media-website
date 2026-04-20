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
import BlogPreview from "@/components/BlogPreview";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Lux Growth Engine — Motor de Crecimiento con IA y Pauta para PYMEs en Costa Rica",
  description:
    "Lux Growth Engine: publicidad, IA, automatización, contenido y datos bajo un mismo equipo. Un motor de crecimiento integrado para PYMEs costarricenses — cada peso se mide, cada resultado se escala.",
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
        text: "Trabajamos con PYMEs de Costa Rica en tres formatos: gestión de canal puntual (Meta o Google Ads), estrategia integral multicanal, o implementación completa con Business Brain (IA + CRM + dashboards). El precio se define en la llamada de diagnóstico según tu industria, canales y objetivos — propuesta en 48 horas, sin contratos anuales.",
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
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen bg-[var(--background)] aurora-bg">
        <Hero />
        <ClientLogos />
        <ResultsTicker />
        <ServicesPreview />
        <Portfolio />
        <Process />
        <DashboardTeaser />
        <Testimonials />
        <About />
        <BlogPreview posts={posts} />
        <FAQ />
        <CtaBanner />
      </main>
    </>
  );
}
