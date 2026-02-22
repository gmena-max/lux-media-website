import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portafolio — Nuestro Trabajo",
  description:
    "Conoce los proyectos que hemos realizado: eventos, campañas digitales, producción audiovisual y más. Resultados reales para marcas reales.",
  alternates: {
    canonical: "https://luxmediacr.com/portafolio",
  },
};

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Portafolio" },
          ]}
        />
        <PortfolioGrid />
      </div>
    </main>
  );
}
