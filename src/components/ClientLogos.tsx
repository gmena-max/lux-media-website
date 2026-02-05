"use client";

import Image from "next/image";

// Real Lux Media clients with their logos - with custom sizes
const clients = [
  {
    name: "Dojo Coding",
    logo: "/logos/dojo-coding-logo.png",
    width: "w-24",
  },
  {
    name: "Deporte+",
    logo: "/logos/deporte+logo.jpg",
    width: "w-32", // Bigger
  },
  {
    name: "Oftalmologica Mena",
    logo: "/logos/oftalmologica-mena-logo.png",
    width: "w-32", // Bigger
  },
  {
    name: "Ortodoncia Steinvorth",
    logo: "/logos/ortodoncia-steinvorth-logo.png",
    width: "w-24",
  },
  {
    name: "Retainer Brite",
    logo: "/logos/LOGO BRITE.png",
    width: "w-24",
  },
  {
    name: "Blockchain Jungle",
    logo: "/logos/BLOCKCHAIN JUNGLE LOGO.png",
    width: "w-32", // Bigger
  },
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
              className={`flex-shrink-0 mx-8 ${client.width} h-14 relative`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="128px"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client) => (
            <div
              key={`${client.name}-dup`}
              className={`flex-shrink-0 mx-8 ${client.width} h-14 relative`}
            >
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
