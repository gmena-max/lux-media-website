"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    setMounted(true);

    // Respect prefers-reduced-motion — poster stays
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Small delay on mobile to let poster paint first
    const timer = setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;

      const onCanPlay = () => setVideoReady(true);
      video.addEventListener("canplay", onCanPlay, { once: true });

      // If already loaded (cached), show immediately
      if (video.readyState >= 3) {
        setVideoReady(true);
      }

      video.load();
      video.play().catch(() => {
        // Autoplay blocked — poster stays visible
      });
    }, mobile ? 100 : 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden"
    >
      {/* Poster image as CSS background — always visible instantly, no state dependency */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/video/hero-poster-mobile.jpg" />
          <img
            src="/video/hero-poster.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Video — fades in once loaded, serves mobile or desktop sources */}
      {mounted && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          {isMobile ? (
            <>
              <source src="/video/hero-bg-mobile.webm" type="video/webm" />
              <source src="/video/hero-bg-mobile.mp4" type="video/mp4" />
            </>
          ) : (
            <>
              <source src="/video/hero-bg.webm" type="video/webm" />
              <source src="/video/hero-bg.mp4" type="video/mp4" />
            </>
          )}
        </video>
      )}

      {/* Subtle overall darkening for navbar legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0,0,0,0.15)" }}
      />

      {/* Bottom gradient for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 20%, transparent 45%)",
        }}
      />

      {/* Top vignette for navbar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%)",
        }}
      />

      {/* Content overlay — anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-14 md:pb-16 px-6 text-center">
        {/* SEO headline */}
        <h1 className="text-base md:text-lg font-medium uppercase tracking-[0.2em] text-white/70 mb-3">
          Agencia de marketing digital que convierte — Costa Rica
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/55 mb-8 max-w-xl mx-auto">
          IA, datos y estrategia para marcas que quieren crecer.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={CONTACT.getWhatsAppUrl(
              "Hola, me interesa una consulta gratuita para mi marca. Vi su sitio web."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", { event_label: "Hero CTA" })
            }
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-black rounded-[14px] transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #D4A843, #c49a35)",
              boxShadow: "0 4px 30px rgba(212,168,67,0.25)",
            }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar consulta gratuita
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
          <Link
            href="/portafolio"
            onClick={() =>
              trackEvent("cta_click", {
                event_label: "Hero - Ver resultados",
              })
            }
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-[14px] transition-all duration-200 bg-white/[0.06] border border-white/10 text-white/70 hover:bg-white/[0.12] hover:border-white/25 hover:text-white"
          >
            Ver resultados
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
