"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, Target, Rocket, Check } from "lucide-react";
import Contact from "@/components/Contact";

const deliverables = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Diagnóstico de tu presencia digital",
    description:
      "Revisamos tus redes, web y pauta actual con ojos frescos.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Análisis de tu competencia",
    description:
      "Qué están haciendo bien, dónde están débiles, y dónde estás vos.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Hoja de ruta clara",
    description:
      "Próximos pasos concretos con metas y plazos. Sin humo.",
  },
];

const bullets = [
  "Resultados medibles desde el primer mes",
  "Hablás directo con los fundadores — siempre",
  "Cada colón invertido se rastrea y se optimiza",
];

export default function ContactPage() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="pb-16 md:pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
              Tu Próximo Paso
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 font-display">
              Agendá tu{" "}
              <span className="gradient-text">diagnóstico gratuito</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              30 minutos con los fundadores. Analizamos tu marca, tu competencia
              y tu oportunidad real de crecimiento — sin compromiso.
            </p>
            <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
              Trabajamos con pocas marcas a la vez para dar atención real.
              Empezá con una conversación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-12 md:py-16 bg-[var(--card-bg)] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              Qué incluye tu diagnóstico
            </span>
            <h2 className="sr-only">Qué incluye tu diagnóstico</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={isMobile ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: isMobile ? 0 : index * 0.1,
                  duration: 0.4,
                }}
                className="p-6 rounded-2xl glass-card text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form (existing component) */}
      <Contact />

      {/* Positioning block */}
      <section className="py-16 md:py-24 bg-[var(--card-bg)] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder quote */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)]"
            >
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                &ldquo;No vendemos paquetes de posts. Vendemos crecimiento que
                se mide en clientes nuevos, no en likes.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm">
                  J&G
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    Jeaustin & Gabriel
                  </p>
                  <p className="text-gray-400 text-xs">Fundadores</p>
                </div>
              </div>
            </motion.div>

            {/* Check-marked bullets */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {bullets.map((text, index) => (
                <motion.div
                  key={text}
                  initial={isMobile ? false : { opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: isMobile ? 0 : 0.2 + index * 0.1,
                    duration: 0.4,
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
