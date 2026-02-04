"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Zap, Target } from "lucide-react";

const differentiators = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Tecnología + Creatividad",
    description: "Usamos IA y automatización para entregar resultados más rápido sin sacrificar calidad.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Servicio Personalizado",
    description: "Equipo pequeño = atención dedicada. Conocemos tu marca como si fuera nuestra.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Resultados Medibles",
    description: "Cada campaña tiene KPIs claros. Si no genera resultados, ajustamos la estrategia.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Full-Service",
    description: "Contenido, ads, eventos, branding - todo bajo un mismo techo para consistencia total.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Somos <span className="gradient-text">Lux Media</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Agencia de marketing digital con sede en San José, Costa Rica.
              Ayudamos a empresas y profesionales a crecer su presencia digital
              con estrategias que realmente funcionan.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Desde redes sociales y producción de video hasta campañas de Meta Ads
              y cobertura de eventos en vivo - somos tu equipo de marketing completo.
            </p>

            {/* Mission quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent border border-[var(--accent)]/20"
            >
              <p className="text-lg text-gray-300 italic">
                &ldquo;Creatividad respaldada por datos. Estrategia impulsada por resultados.&rdquo;
              </p>
              <p className="text-[var(--accent)] mt-3 font-medium text-sm">
                — Lux Media
              </p>
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
                  className="flex items-start gap-4 p-5 rounded-xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--accent)]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
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
