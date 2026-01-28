"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Cliente 1", placeholder: "LOGO" },
  { name: "Cliente 2", placeholder: "LOGO" },
  { name: "Cliente 3", placeholder: "LOGO" },
  { name: "Cliente 4", placeholder: "LOGO" },
  { name: "Cliente 5", placeholder: "LOGO" },
  { name: "Cliente 6", placeholder: "LOGO" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 border-y border-[var(--card-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10"
        >
          Marcas que confían en nosotros
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-24 h-12 flex items-center justify-center text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
            >
              {/* Replace with actual client logos */}
              <div className="text-xs font-medium tracking-wider opacity-50 hover:opacity-100 transition-opacity">
                {client.placeholder}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
