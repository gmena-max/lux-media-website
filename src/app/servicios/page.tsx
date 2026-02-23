import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce todos nuestros servicios de marketing digital: Meta Ads, Google Ads, SEO, redes sociales, video, branding, automatización con IA y más.",
  alternates: {
    canonical: "https://luxmediacr.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios" },
          ]}
        />
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4 font-display">
            Todo lo que tu marca necesita
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estrategia, contenido, publicidad y datos — integrados bajo un
            mismo equipo para maximizar tu crecimiento.
          </p>
        </div>

        <ServicesGrid />
      </div>
    </main>
  );
}
