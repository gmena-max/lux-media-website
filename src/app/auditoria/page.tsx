import type { Metadata } from "next";
import AuditoriaPage from "@/components/AuditoriaPage";

export const metadata: Metadata = {
  title: "Auditoría Digital Gratuita",
  description:
    "Analizamos tu presencia digital completa — Instagram, Facebook, sitio web, Google Business Profile, LinkedIn y WhatsApp. Puntuación de 0 a 60 + 5 acciones inmediatas. Gratis, sin compromiso.",
  alternates: {
    canonical: "https://luxmediacr.com/auditoria",
  },
};

export default function AuditoriaRoute() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40">
      <AuditoriaPage />
    </main>
  );
}
