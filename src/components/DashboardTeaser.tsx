"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Mini chart SVG paths (static, SSR-safe) ── */

function MiniAreaChart() {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="teaser-area-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5B51A" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#F5B51A" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="teaser-area-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity={0.25} />
          <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
        </linearGradient>
      </defs>
      {/* Gold area — Leads */}
      <path
        d="M0,45 C20,40 40,35 60,30 C80,25 100,20 120,22 C140,24 160,15 180,10 L200,8 L200,60 L0,60Z"
        fill="url(#teaser-area-gold)"
      />
      <path
        d="M0,45 C20,40 40,35 60,30 C80,25 100,20 120,22 C140,24 160,15 180,10 L200,8"
        fill="none"
        stroke="#F5B51A"
        strokeWidth="1.5"
      />
      {/* Green area — Conversiones */}
      <path
        d="M0,52 C20,50 40,48 60,44 C80,40 100,38 120,36 C140,34 160,30 180,26 L200,22 L200,60 L0,60Z"
        fill="url(#teaser-area-green)"
      />
      <path
        d="M0,52 C20,50 40,48 60,44 C80,40 100,38 120,36 C140,34 160,30 180,26 L200,22"
        fill="none"
        stroke="#10B981"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MiniBarChart() {
  const bars = [
    { h: 70, color: "#F59E0B" },
    { h: 55, color: "#3B82F6" },
    { h: 40, color: "#10B981" },
    { h: 28, color: "#8B5CF6" },
    { h: 18, color: "#EF4444" },
  ];
  return (
    <div className="flex items-end gap-1.5 h-full w-full px-1">
      {bars.map((bar, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{ height: `${bar.h}%`, backgroundColor: bar.color, opacity: 0.85 }}
        />
      ))}
    </div>
  );
}

/* ── KPI mini cards for the floating panel ── */
const kpis = [
  { label: "Leads", value: "127", delta: "+18%", up: true },
  { label: "Conversión", value: "3.8%", delta: "+0.6%", up: true },
  { label: "ROAS", value: "4.2x", delta: "+0.5x", up: true },
  { label: "Alcance", value: "340K", delta: "+24%", up: true },
];

export default function DashboardTeaser() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      id="reportes"
      className="py-16 md:py-24 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,181,26,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left column — KPI methodology copy */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              Reportes en Tiempo Real
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5 font-display leading-tight">
              Sabés exactamente{" "}
              <span className="gradient-text">a dónde va cada colón.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Nada de PDFs mensuales que nadie lee. Tenés un dashboard con tus leads,
              tu inversión y tus resultados — actualizado en tiempo real, accesible desde el celular.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Si algo no funciona, lo ves antes que nosotros. Y ya lo estamos ajustando.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold hover:bg-[var(--accent-light)] transition-all duration-300 group shadow-lg shadow-[var(--accent)]/20"
            >
              Ver dashboard en vivo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right column — Floating dashboard preview */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: isMobile ? 0 : 0.2 }}
            className="relative"
          >
            {/* Glow behind the panel */}
            <div
              className="absolute -inset-4 pointer-events-none rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(245,181,26,0.08) 0%, transparent 60%)",
              }}
            />

            {/* The floating dashboard panel */}
            <Link
              href="/dashboard"
              className="block relative z-10 rounded-2xl overflow-hidden border border-[var(--accent)]/20 bg-[#111111] shadow-2xl shadow-black/50 hover:border-[var(--accent)]/40 hover:shadow-[var(--accent)]/10 transition-all duration-300 cursor-pointer"
              style={{
                transform: isMobile ? "none" : "perspective(1200px) rotateY(-4deg) rotateX(2deg)",
              }}
            >
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-[#0d0d0d]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-gray-500 ml-2 font-mono">
                  luxmediacr.com/dashboard
                </span>
              </div>

              {/* Dashboard content */}
              <div className="p-4 space-y-3">
                {/* KPI row */}
                <div className="grid grid-cols-4 gap-2">
                  {kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="bg-[#1a1a1a] rounded-lg p-2.5 border-t-2 border-[var(--accent)]/40"
                    >
                      <p className="text-[9px] text-gray-500 uppercase tracking-wide">
                        {kpi.label}
                      </p>
                      <p className="text-white font-bold text-sm md:text-base mt-0.5">
                        {kpi.value}
                      </p>
                      <span className="text-emerald-400 text-[10px] font-medium">
                        {kpi.delta} ↑
                      </span>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-5 gap-2">
                  {/* Area chart — takes 3 cols */}
                  <div className="col-span-3 bg-[#1a1a1a] rounded-lg p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wide mb-2">
                      Leads por mes
                    </p>
                    <div className="h-16">
                      <MiniAreaChart />
                    </div>
                  </div>
                  {/* Bar chart — takes 2 cols */}
                  <div className="col-span-2 bg-[#1a1a1a] rounded-lg p-3">
                    <p className="text-[9px] text-gray-500 uppercase tracking-wide mb-2">
                      Ingresos
                    </p>
                    <div className="h-16">
                      <MiniBarChart />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <p className="text-gray-600 text-xs mt-3 text-center">
              *Datos de demostración
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
