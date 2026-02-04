"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Gestión de Redes Sociales",
    description: "Hacemos crecer tu comunidad y convertimos seguidores en clientes con contenido que conecta.",
    features: ["Calendario de contenido mensual", "Community management", "Reportes de crecimiento", "Estrategia personalizada"],
    bgImage: "/bg-service-1.jpg",
    accentColor: "#F5B51A",
  },
  {
    id: 2,
    title: "Producción de Video",
    description: "Videos que cuentan tu historia y capturan la atención de tu audiencia en los primeros 3 segundos.",
    features: ["Videos para redes sociales", "Reels e historias", "Motion graphics", "Edición profesional"],
    bgImage: "/bg-service-2.jpg",
    accentColor: "#F5B51A",
  },
  {
    id: 3,
    title: "Meta Ads & Campañas",
    description: "Campañas de Facebook e Instagram que generan leads y ventas reales, no solo likes.",
    features: ["Segmentación precisa", "A/B testing", "Optimización continua", "Reportes de ROI"],
    bgImage: "/bg-service-3.jpg",
    accentColor: "#F5B51A",
  },
  {
    id: 4,
    title: "Cobertura de Eventos",
    description: "Capturamos cada momento de tu evento con drones, cámaras profesionales y equipo en sitio.",
    features: ["Fotografía profesional", "Video con drones", "Cobertura en vivo", "Entrega rápida"],
    bgImage: "/bg-service-4.jpg",
    accentColor: "#F5B51A",
  },
  {
    id: 5,
    title: "Branding & Diseño",
    description: "Creamos la identidad visual que hace que tu marca sea memorable y reconocible.",
    features: ["Diseño de logo", "Manual de marca", "Diseño gráfico", "Plantillas para redes"],
    bgImage: "/bg-service-5.jpg",
    accentColor: "#F5B51A",
  },
];

export default function SwipeableServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === services.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? services.length - 1 : prev - 1;
    });
  };

  const currentService = services[currentIndex];

  return (
    <section id="servicios" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {currentService.bgImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${currentService.bgImage}')` }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a0a]" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl"
            >
              {/* Title */}
              <h3
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: currentService.accentColor }}
              >
                {currentService.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {currentService.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {currentService.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: currentService.accentColor }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Navigation: Arrows + Dots */}
              <div className="flex items-center gap-6">
                {/* Left Arrow */}
                <button
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  style={{ borderColor: currentService.accentColor }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (isAnimating || index === currentIndex) return;
                        setIsAnimating(true);
                        setCurrentIndex(index);
                      }}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: index === currentIndex ? '2rem' : '0.5rem',
                        backgroundColor: index === currentIndex ? service.accentColor : '#4b5563',
                      }}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => paginate(1)}
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  style={{ borderColor: currentService.accentColor }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
