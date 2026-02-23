"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Users, Zap, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: <Zap className="w-5 h-5" />, text: "IA aplicada a tu marketing" },
  { icon: <Users className="w-5 h-5" />, text: "Equipo dedicado, cero intermediarios" },
  { icon: <Target className="w-5 h-5" />, text: "Cada colón se mide" },
  { icon: <Sparkles className="w-5 h-5" />, text: "Contenido + pauta + tech, un equipo" },
];

export default function About() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-[var(--card-bg)] relative overflow-hidden">
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-display">
              No somos una agencia más
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white">Somos tu departamento de marketing externo.</strong>{" "}
                Estrategia, contenido, pauta, automatización e inteligencia artificial — todo bajo un mismo equipo que conoce tu negocio.
              </p>
              <p>
                Trabajamos con pocas marcas a la vez para darle a cada una la atención que merece. Sin intermediarios, sin excusas, sin métricas vacías.
              </p>
            </div>

            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 mt-6 text-[var(--accent)] hover:text-[var(--accent-light)] font-medium transition-colors group"
            >
              Conoce al equipo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right content - Compact highlights */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={isMobile ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ delay: isMobile ? 0 : index * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-300 font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
