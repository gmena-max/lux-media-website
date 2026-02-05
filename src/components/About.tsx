"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Zap, Target } from "lucide-react";

const differentiators = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Velocidad + Calidad",
    description: "Usamos IA y automatización para entregar más rápido sin sacrificar la calidad que tu marca merece.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Atención Dedicada",
    description: "Somos un equipo pequeño por diseño. Conocemos tu marca como si fuera nuestra.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Obsesión por Resultados",
    description: "Si algo no funciona, lo ajustamos. Medimos todo para asegurar que cada colón genere retorno.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Todo Bajo un Techo",
    description: "Contenido, ads, eventos, branding. Un equipo, una visión, consistencia total.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[var(--card-bg)] relative overflow-hidden">
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
              No somos una agencia más
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white">Somos Lux Media</strong>, una agencia de marketing digital
                basada en Costa Rica que trabaja diferente.
              </p>
              <p>
                Mientras otras agencias te tratan como un número más en su lista de clientes,
                nosotros nos convertimos en una extensión de tu equipo. Conocemos tu negocio,
                entendemos tu audiencia, y nos obsesionamos con tus resultados.
              </p>
              <p>
                Desde redes sociales y producción de video hasta campañas de Meta Ads y
                cobertura de eventos — todo lo que necesitas para crecer, bajo un mismo techo.
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
                &ldquo;Lux Media no construyó DOJO — amplificó todo lo que somos. Esa es la diferencia entre una agencia y un partner real.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center text-black font-semibold text-sm">
                  DB
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Daniel Bejarano</p>
                  <p className="text-gray-500 text-xs">CEO, Dojo Coding</p>
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
