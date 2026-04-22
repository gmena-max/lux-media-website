"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

// Card reading order is LOCKED: BB → Voice Agent → GEO.
// F-pattern attention optimization per PRD §4 / §9:
// - BB leads: umbrella / broadest scope, natural entry point.
// - Voice Agent center: most concrete outcome, strongest hook for skeptics.
// - GEO closes: aspirational / frontier wedge.
const frentes = [
  {
    icon: "🧠",
    title: "Business Brain",
    valueProp:
      "Un cerebro que aprende tu negocio y responde en WhatsApp, IG y Facebook mientras vos dormís.",
    href: "/servicios/business-brain",
  },
  {
    icon: "☎️",
    title: "Voice Agent",
    valueProp:
      "Contesta tu teléfono 24/7 en español, califica leads y agenda citas sin que tu equipo deje de vender.",
    href: "/servicios/voice-agent",
  },
  {
    icon: "✨",
    title: "Posicionamiento GEO",
    valueProp:
      "Cuando tu cliente le pregunta a ChatGPT, que tu marca sea la respuesta.",
    href: "/servicios/posicionamiento-geo",
  },
];

export default function ThreeFrentesSpotlight() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-[var(--background)]"
      aria-labelledby="three-frentes-heading"
    >
      {/* Radial aurora glow — subtle gold spotlight anchored top-center.
          Intentionally slightly stronger than other sections because this is
          the flagship-differentiator moment. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,181,26,0.08)_0%,transparent_60%)]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            LUX GROWTH ENGINE
          </span>
          <h2
            id="three-frentes-heading"
            className="text-4xl md:text-6xl font-bold font-display mt-4"
          >
            Un motor, 3 frentes
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Tres servicios de IA que corren juntos para hacer crecer tu negocio — sin
            agencias fragmentadas ni integraciones rotas.
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 items-stretch">
          {frentes.map((frente, index) => (
            <motion.div
              key={frente.title}
              initial={
                isMobile ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: isMobile ? 0.3 : 0.5,
                delay: isMobile ? 0 : index * 0.1,
              }}
              className="h-full"
            >
              <Link
                href={frente.href}
                className="block p-8 rounded-2xl glass-card relative overflow-hidden group h-full hover:border-[var(--accent)]/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 focus-visible:outline-none"
              >
                {/* Soft gold glow on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />

                <span className="text-5xl md:text-6xl mb-6 block" aria-hidden>
                  {frente.icon}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
                  {frente.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {frente.valueProp}
                </p>

                <span className="text-[var(--accent)] font-medium inline-flex items-center gap-2 mt-6 group-hover:gap-3 transition-all">
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing bridge line — no fragile count, reinforces "motor" metaphor,
            arrow bridges visually into ServicesPreview below. */}
        <motion.p
          initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          className="text-gray-500 text-base md:text-lg text-center flex items-center justify-center gap-2 mt-16"
        >
          Meta Ads, SEO, video, web — lo demás del motor, abajo.
          <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-[var(--accent)]" aria-hidden />
        </motion.p>
      </div>
    </section>
  );
}
