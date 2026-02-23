"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMarquee } from "@/hooks/useMarquee";

const clients = [
  { name: "Dojo Coding", logo: "/logos/dojo-coding-white.png" },
  { name: "Deporte+", logo: "/logos/deporte-plus.jpg" },
  { name: "Oftalmologica Mena", logo: "/logos/oftalmologica-mena-white.png", size: "md:w-64 md:h-48" },
  { name: "Ortodoncia Steinvorth", logo: "/logos/ortodoncia-steinvorth-white.png" },
{ name: "Blockchain Jungle", logo: "/logos/blockchain-jungle.png" },
  { name: "Electric Animals", logo: "/logos/electric-animals.png", size: "md:w-56 md:h-40" },
  { name: "Centro Médico Cariari", logo: "/logos/centro-medico-cariari.png", size: "md:w-64 md:h-48" },
];

function LogoItem({ client }: { client: (typeof clients)[0] }) {
  return (
    <div className={`flex-shrink-0 mx-4 md:mx-10 w-32 h-24 md:w-44 md:h-32 ${client.size || ""} relative`}>
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 128px, 256px"
        quality={90}
      />
    </div>
  );
}

export default function ClientLogos() {
  const {
    containerRef,
    trackRef,
    handleMouseEnter,
    handleMouseLeave,
    nudgeLeft,
    nudgeRight,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useMarquee({ speed: 80, nudgeDistance: 280 });

  return (
    <section className="py-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-xs uppercase tracking-widest mb-6">
          <span className="text-gray-500">Marcas que </span>
          <span className="text-[var(--accent)]">generan resultados</span>
          <span className="text-gray-500"> con nosotros</span>
        </p>
      </div>

      {/* Marquee container */}
      <div
        ref={containerRef}
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        {/* Arrow buttons — desktop only, show on hover */}
        <button
          onClick={nudgeLeft}
          aria-label="Ver anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[var(--card-border)] text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nudgeRight}
          aria-label="Ver siguiente"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-[var(--card-border)] text-gray-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrolling track — 3x duplication for seamless loop */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex items-center will-change-transform">
            {[0, 1, 2].map((setIndex) =>
              clients.map((client) => (
                <LogoItem
                  key={`${client.name}-${setIndex}`}
                  client={client}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
