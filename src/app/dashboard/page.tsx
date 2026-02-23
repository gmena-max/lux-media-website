import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import DashboardDemo from "@/components/DashboardDemo";

export const metadata: Metadata = {
  title: "Dashboard Demo — Reportes en Tiempo Real",
  description:
    "Ejemplo interactivo de los dashboards en tiempo real que Lux Media crea para sus clientes. KPIs, gráficos y métricas que se actualizan automáticamente.",
  alternates: {
    canonical: "https://luxmediacr.com/dashboard",
  },
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-36 md:pt-52 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Dashboard" },
          ]}
        />

        <div className="mb-10">
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Dashboard
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">
            Reportes en tiempo real
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Así se ve tener visibilidad total de tus campañas. Cada cliente de
            Lux Media tiene acceso a un dashboard dedicado con sus métricas
            reales.
          </p>
        </div>

        <DashboardDemo />
      </div>
    </main>
  );
}
