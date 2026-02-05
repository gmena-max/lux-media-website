"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONTACT } from "@/constants/contact";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1a1a1a, #111111)",
      }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-[10%] pt-32 pb-16">
        {/* Two-column grid */}
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN - Text content */}
          <div className="max-w-[600px]">
            {/* === MESSAGE BLOCK === */}
            <div className="mb-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-sm text-[#9CA3AF]">+15 marcas impulsadas en Costa Rica</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight mb-4 font-display"
              >
                <span className="text-white">Tu próximo cliente está en redes</span>
                <br />
                <span
                  className="relative inline-block text-[#D4A843]"
                  style={{ textShadow: "0 0 60px rgba(212, 168, 67, 0.4)" }}
                >
                  Nosotros lo traemos
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#D4A843] to-[#E5B94E]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed"
              >
                Contenido que atrae, pauta que convierte, estrategia que escala.
              </motion.p>
            </div>

            {/* === ACTION BLOCK === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* Service list */}
              <p className="text-sm md:text-base text-[#6B7280] mb-4 tracking-wide">
                Redes sociales · <span className="text-white font-medium">Video profesional</span> · <span className="text-white font-medium">Meta Ads</span> · Desarrollo web · Eventos
              </p>

              {/* Trust checkmarks */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 text-sm text-[#9CA3AF]">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Resultados en 30 días
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sin sorpresas
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Respuesta en 48h
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href={CONTACT.getWhatsAppUrl("Hola, quiero una consulta gratuita para mi marca.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-[#D4A843] hover:bg-[#E5B94E] text-black px-7 py-3.5 rounded-full font-semibold text-base shadow-lg shadow-[#D4A843]/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consulta gratuita
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <a
                  href="#portafolio"
                  className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors px-4 py-3.5 text-base"
                >
                  Ver nuestro trabajo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Gold radial glow behind mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4A843]/[0.08] rounded-full blur-[100px]" />

            {/* Phone mockup with float animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative w-[280px] h-[560px] bg-[#1a1a1a] rounded-[3rem] border-[8px] border-[#2a2a2a] shadow-2xl shadow-black/50 overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-10" />

                {/* Screen content - Instagram-style feed */}
                <div className="absolute inset-2 top-8 bg-[#111] rounded-[2rem] overflow-hidden">
                  {/* Instagram header */}
                  <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/10">
                    <span className="text-white font-semibold text-sm">luxmedia.cr</span>
                    <div className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20" />
                      <div className="w-5 h-5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Feed posts */}
                  <div className="space-y-3 p-2">
                    {/* Post 1 */}
                    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                      <div className="relative h-32">
                        <Image
                          src="/portfolio/dojo-hackathon.jpg"
                          alt="Portfolio"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500/60" />
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                      <div className="relative h-32">
                        <Image
                          src="/portfolio/deporte-plus.jpg"
                          alt="Portfolio"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500/60" />
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                        <div className="w-4 h-4 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Post 3 partial */}
                    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                      <div className="relative h-20">
                        <Image
                          src="/portfolio/blockchain-jungle.jpg"
                          alt="Portfolio"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 bg-[#D4A843] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                +1.2K seguidores
              </motion.div>

              {/* Floating engagement card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute -left-16 top-1/3 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 shadow-xl"
              >
                <p className="text-[#4ADE80] text-sm font-bold">+340%</p>
                <p className="text-[#6B7280] text-xs">engagement</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar - full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 w-full mt-16 pt-8 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto px-[10%] flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { value: "1M+", label: "ALCANCE GENERADO" },
            { value: "4.2x", label: "ROAS PROMEDIO" },
            { value: "+200", label: "PIEZAS CREADAS" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-[#D4A843]">{stat.value}</p>
              <p className="text-[11px] text-[#6B7280] uppercase tracking-[2px] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile mockup - shown only on tablet/mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="lg:hidden relative z-10 flex justify-center mt-12 px-[10%]"
      >
        <div className="relative w-[200px] h-[400px] bg-[#1a1a1a] rounded-[2rem] border-[6px] border-[#2a2a2a] shadow-xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1a1a1a] rounded-b-xl z-10" />
          <div className="absolute inset-1.5 top-6 bg-[#111] rounded-[1.5rem] overflow-hidden">
            <Image
              src="/portfolio/dojo-hackathon.jpg"
              alt="Portfolio"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#6B7280] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-[#D4A843] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
