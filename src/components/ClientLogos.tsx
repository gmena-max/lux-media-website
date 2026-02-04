"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Real Lux Media clients with their logos
const clients = [
  {
    name: "Dojo Coding",
    logo: "/logos/dojo-coding-logo.png",
  },
  {
    name: "Deporte+",
    logo: "/logos/deporte+logo.jpg",
  },
  {
    name: "Oftalmologica Mena",
    logo: "/logos/oftalmologica-mena-logo.png",
  },
  {
    name: "Ortodoncia Steinvorth",
    logo: "/logos/ortodoncia-steinvorth-logo.png",
  },
  {
    name: "Retainer Brite",
    logo: "/logos/LOGO BRITE.png",
  },
  {
    name: "Blockchain Jungle",
    logo: "/logos/BLOCKCHAIN JUNGLE LOGO.png",
  },
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative w-28 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="112px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
