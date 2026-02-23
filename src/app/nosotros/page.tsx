import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Lux Media. Somos una agencia de marketing digital en Costa Rica obsesionada con resultados medibles para tu marca.",
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
