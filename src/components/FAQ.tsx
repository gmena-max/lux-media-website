"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto cuesta trabajar con ustedes?",
    answer:
      "Gestión de redes sociales arranca desde $500/mes. Estrategia completa (contenido + pauta + reportes) desde $1,500/mes. En la consulta de diagnóstico definimos qué necesitás y cuánto cuesta exactamente — sin sorpresas.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Rápido. Día 1: diagnóstico de tu marca. Día 3-5: propuesta con metas claras. Semana 1: arrancamos ejecución. Cada semana recibís avances, cada mes un reporte con números reales.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer:
      "Pauta pagada: leads desde la primera semana. Contenido orgánico: tracción real en 60-90 días. Te damos metas con fechas concretas desde el día 1 — no promesas vagas.",
  },
  {
    question: "¿Manejan la pauta o solo el contenido?",
    answer:
      "Todo. Estrategia, creativos, configuración técnica, pauta, optimización y reportes. Vos solo aprobás el contenido y cerrás ventas.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Nuestros clientes actuales están en Costa Rica, pero trabajamos de forma 100% remota y podemos atender marcas en cualquier país de habla hispana.",
  },
  {
    question: "¿Qué industrias manejan?",
    answer:
      "Salud (clínicas), deportes (TV nacional), tecnología (eventos internacionales) y educación. Trabajar con industrias distintas nos da un ángulo fresco que agencias de nicho no tienen.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lo que necesitás saber antes de trabajar con nosotros.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="bg-[rgba(17,17,17,0.6)] md:bg-[rgba(17,17,17,0.5)] md:backdrop-blur-sm rounded-2xl p-6 border border-[var(--card-border)]/50">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Accordion.Item
                  value={`faq-${index}`}
                  className="border-b border-[rgba(245,181,26,0.1)] last:border-b-0"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[var(--accent)]">
                      <span className="text-lg font-medium text-white group-hover:text-[var(--accent)] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <p className="pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
