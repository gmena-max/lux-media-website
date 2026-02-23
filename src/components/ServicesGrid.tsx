"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  services,
  CATEGORY_LABELS,
  type ServiceCategory,
} from "@/data/services";

const categoryOrder: ServiceCategory[] = ["growth", "content", "technology"];

const categoryDescriptions: Record<ServiceCategory, string> = {
  growth: "Estrategias para atraer clientes y generar ventas medibles.",
  content: "Contenido que conecta con tu audiencia y construye tu marca.",
  technology: "Herramientas y sistemas que automatizan y escalan tu operación.",
};

export default function ServicesGrid() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="space-y-16 md:space-y-24">
      {categoryOrder.map((category) => {
        const categoryServices = services.filter(
          (s) => s.category === category
        );

        return (
          <section key={category}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest">
                {CATEGORY_LABELS[category]}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 font-display">
                {categoryDescriptions[category]}
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {categoryServices.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={isMobile ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    delay: isMobile ? 0 : index * 0.05,
                    duration: 0.4,
                  }}
                >
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="block p-6 rounded-xl glass-card glass-card-hover group h-full transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0" role="img">
                        {service.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white group-hover:text-[var(--accent)] transition-colors font-display">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[var(--accent)] text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                          Ver más
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
