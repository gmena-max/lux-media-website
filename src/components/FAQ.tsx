"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Cuánto cuesta trabajar con ustedes?",
    answer:
      "Cada proyecto es diferente. Diseñamos planes según tus objetivos, canales y volumen de contenido. Escríbenos para una cotización personalizada.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Llamada inicial → propuesta → arranque → ejecución mensual con reportes y ajustes continuos. Nos adaptamos a tu ritmo y necesidades.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer:
      "Contenido orgánico: 2-3 meses para tracción real. Pauta: resultados desde la primera semana. En tu consulta definimos metas claras con plazos concretos.",
  },
  {
    question: "¿Manejan la pauta o solo el contenido?",
    answer:
      "Ambos. Podemos crear solo contenido, solo pauta, o la estrategia completa. Tú decides qué necesitas.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Sí. Tenemos clientes en 6 países y creamos contenido en español, inglés y portugués.",
  },
  {
    question: "¿Qué industrias manejan?",
    answer:
      "Deportes, salud, tecnología, eventos, gastronomía, e-commerce y más. Trabajar con industrias distintas nos da perspectiva fresca para cada proyecto.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--background)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            ¿Tienes <span className="gradient-text">dudas</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Respondemos las preguntas más comunes sobre cómo trabajamos.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="bg-[rgba(17,17,17,0.5)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--card-border)]/50">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
