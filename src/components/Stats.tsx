"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Clientes Satisfechos" },
  { value: "200+", label: "Proyectos Completados" },
  { value: "5M+", label: "Alcance Generado" },
  { value: "3", label: "Años de Experiencia" },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--card-bg)]" />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
            Nuestro Impacto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Números que <span className="gradient-text">hablan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] text-center hover:border-[var(--accent)]/30 transition-all duration-300">
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 relative"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm md:text-base text-gray-400 relative">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
