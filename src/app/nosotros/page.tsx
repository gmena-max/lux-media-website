import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Lux Media — Jeaustin Campos, David Montero y Gabriel Mena. Lux Growth Engine: un motor de crecimiento con IA, pauta y automatización para PYMEs en Costa Rica, obsesionado con resultados medibles.",
  alternates: {
    canonical: "https://luxmediacr.com/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 md:pt-40">
      <AboutPage />
    </main>
  );
}
