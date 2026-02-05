"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1M+", label: "Alcance generado" },
  { value: "15+", label: "Proyectos completados" },
  { value: "6", label: "Clientes activos" },
];

export default function ValueProp() {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/3 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-xs md:text-sm text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
