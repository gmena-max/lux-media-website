"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contact";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  whatsappMessage?: string;
  urgency?: string;
}

export default function CtaBanner({
  title = "Tu competencia no está esperando",
  subtitle = "Cada día sin una estrategia digital es un día que pierdes clientes potenciales.",
  buttonText = "Empezar ahora",
  whatsappMessage = "Hola, quiero empezar a trabajar mi estrategia digital.",
  urgency,
}: CtaBannerProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--card-bg)] to-[var(--background)]" />

      {/* Warm aurora glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(245,181,26,0.06)_0%,transparent_60%)]" />

      {/* Animated accent */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Border accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Urgency badge */}
          {urgency && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[var(--accent)] text-sm font-medium">{urgency}</span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={CONTACT.getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 animate-glow-pulse"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {buttonText}
            </motion.a>

            <a
              href="#contacto"
              className="text-gray-400 hover:text-white transition-colors px-6 py-4"
            >
              Escríbenos directo
            </a>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 text-sm mt-8"
          >
            Respuesta en menos de 24 horas · Consulta de 30 minutos
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
