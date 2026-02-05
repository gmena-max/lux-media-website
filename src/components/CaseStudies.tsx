"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Calendar } from "lucide-react";

const caseStudies = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    client: "Deporte+",
    tagline: "De cero presencia a 3 millones de vistas mensuales",
    before: "Menos de 100K vistas/mes, sin presencia en redes",
    after: "3M+ vistas mensuales, ratings de TV en alza",
    category: "Deportes / TV",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    client: "DOJO Coding",
    tagline: "De bootcamp local a presencia global",
    before: "Bootcamp conocido solo en Costa Rica",
    after: "Presencia en CERN, 10+ eventos internacionales, plataforma con 500K votos",
    category: "Educación / Tech",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    client: "Dr. Diego Mena",
    tagline: "Agenda llena con campañas de Meta Ads",
    before: "Espacios vacíos en la agenda",
    after: "Agenda completa vía leads de WhatsApp",
    category: "Salud / Oftalmología",
  },
];

export default function CaseStudies() {
  return (
    <section id="casos" className="py-24 bg-[var(--card-bg)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Resultados <span className="gradient-text">reales</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transformaciones que hablan por sí solas.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative p-6 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--accent)]/50 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon and category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                    {study.icon}
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>

                {/* Client name */}
                <h3 className="text-xl font-bold text-white mb-2">{study.client}</h3>

                {/* Tagline */}
                <p className="text-[var(--accent)] font-medium mb-6">
                  {study.tagline}
                </p>

                {/* Before/After */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-gray-500 uppercase w-14 flex-shrink-0 pt-0.5">
                      Antes
                    </span>
                    <p className="text-sm text-gray-400">{study.before}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-[var(--accent)] uppercase w-14 flex-shrink-0 pt-0.5">
                      Después
                    </span>
                    <p className="text-sm text-white">{study.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
