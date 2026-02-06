"use client";

import Image from "next/image";

// Real Lux Media clients with their logos - with custom sizes
const clients = [
  { name: "Dojo Coding", logo: "/logos/dojo-coding-white.png", size: "w-36 h-14" },
  { name: "Deporte+", logo: "/logos/deporte-plus.jpg", size: "w-20 h-20" },
  { name: "Oftalmologica Mena", logo: "/logos/oftalmologica-mena-white.png", size: "w-36 h-36" },
  { name: "Ortodoncia Steinvorth", logo: "/logos/ortodoncia-steinvorth-white.png", size: "w-28 h-28" },
  { name: "Retainer Brite", logo: "/logos/retainer-brite-white.png", size: "w-32 h-14" },
  { name: "Blockchain Jungle", logo: "/logos/blockchain-jungle.png", size: "w-16 h-20" },
  { name: "Electric Animals", logo: "/logos/electric-animals.png", size: "w-56 h-36" },
  { name: "Centro Médico Cariari", logo: "/logos/centro-medico-cariari.png", size: "w-44 h-44" },
];

export default function ClientLogos() {
  return (
    <section className="py-8 overflow-hidden relative">
      {/* Subtle gradient that blends with both hero and next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">
          Marcas que confían en nosotros
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        {/* Scrolling logos */}
        <div className="flex animate-marquee items-center">
          {/* First set */}
          {clients.map((client) => (
            <div
              key={client.name}
              className={`flex-shrink-0 mx-10 ${client.size} relative`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <div
              key={`${client.name}-dup`}
              className={`flex-shrink-0 mx-10 ${client.size} relative`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
