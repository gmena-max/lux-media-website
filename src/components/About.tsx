"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Zap, Target } from "lucide-react";

const differentiators = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "IA como Ventaja",
    description: "Creamos más rápido, analizamos en tiempo real, y optimizamos constantemente. La IA no es un extra — es cómo trabajamos.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Atención Dedicada",
    description: "Respuesta rápida, comunicación directa, cero intermediarios.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Obsesión por Resultados",
    description: "Si algo no funciona, lo ajustamos. Medimos todo para asegurar que cada colón genere retorno.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Solución Integral",
    description: "Contenido, ads, web y automatización. Una estrategia, un equipo, cero fragmentación.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 font-display">
              Tu equipo de crecimiento
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white">Somos Lux Media</strong>, una agencia de marketing digital
                en Costa Rica que combina creatividad, estrategia y tecnología para hacer crecer marcas.
              </p>
              <p>
                Cada marca trabaja con un equipo dedicado que conoce tu estrategia, tu audiencia y tus metas.
              </p>
              <p>
                Redes sociales, video, publicidad digital, desarrollo web y cobertura de eventos.
                Una visión integrada, un solo equipo.
              </p>
            </div>

            {/* Client quote instead of self-quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[rgba(245,181,26,0.2)]"
            >
              <p className="text-lg text-gray-300 italic mb-4">
                &ldquo;Fundamos Lux Media con una idea simple: que cada marca merece un equipo que se obsesione con sus resultados como si fueran propios.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm">
                  J&G
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Jeaustin & Gabriel</p>
                  <p className="text-gray-500 text-xs">Fundadores</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                  className="flex items-start gap-4 p-5 rounded-xl glass-card glass-card-hover cursor-default group icon-bounce"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                    <span className="icon">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
