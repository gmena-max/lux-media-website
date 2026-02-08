"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Redes Sociales",
    description:
      "Tu competencia está publicando. Nosotros te ayudamos a destacar con contenido que conecta con tu audiencia y genera resultados.",
  },
  {
    id: 2,
    title: "Video & Reels",
    description:
      "El video domina las redes. Producción ágil de video que comunica tu mensaje en segundos.",
  },
  {
    id: 3,
    title: "Publicidad Digital",
    description:
      "Campañas en Meta, Google y más — diseñadas para generar leads y ventas reales, no métricas vacías.",
  },
  {
    id: 4,
    title: "IA & Automatización",
    description:
      "Flujos de trabajo automatizados, contenido potenciado con IA, y métricas en tiempo real. Más rápido, más inteligente.",
  },
  {
    id: 5,
    title: "Desarrollo Web",
    description:
      "Tu negocio necesita presencia digital. Landing pages y sitios web que convierten, con diseño moderno y velocidad optimizada.",
  },
  {
    id: 6,
    title: "SEO & Google",
    description:
      "Que te encuentren cuando buscan. Estrategia SEO y presencia en Google que convierte tráfico en clientes.",
  },
  {
    id: 7,
    title: "Eventos",
    description:
      "Tu evento merece más que fotos. Producción, cobertura y promoción profesional con drones, cámaras y equipo en sitio.",
  },
  {
    id: 8,
    title: "Branding",
    description:
      "La primera impresión cuenta. Identidad visual que hace tu marca reconocible y profesional en cada punto de contacto.",
  },
];

export default function SwipeableServices() {
  return (
    <section
      id="servicios"
      className="py-16 md:py-24 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)]/[0.02] to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-[var(--accent)] text-sm font-medium uppercase tracking-widest gold-glow-subtle">
            Servicios
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 font-display">
            Todo para crecer{" "}
            <span className="gradient-text">tu marca</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Contenido. Pauta. Web. Automatización. Todo conectado, todo medible.
          </p>
        </motion.div>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[rgba(17,17,17,0.5)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--card-border)]/50">
        <Accordion.Root type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${service.id}`}
                className="group/item border-b border-[rgba(245,181,26,0.1)] last:border-b-0 border-l-2 border-l-transparent hover:border-l-[rgba(245,181,26,0.2)] data-[state=open]:border-l-[var(--accent)]/30 data-[state=open]:pl-4 transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--accent)]">
                    <div className="flex items-center gap-6">
                      <span className="text-[var(--accent)] font-mono text-sm w-8">
                        {String(service.id).padStart(2, "0")}
                      </span>
                      <span className="text-xl md:text-2xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                        {service.title}
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
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
                  <div className="pb-6 pl-14">
                    <p className="text-gray-400 mb-4 max-w-2xl leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline"
                    >
                      Consultar
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
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
