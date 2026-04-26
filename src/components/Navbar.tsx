"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";
import MegaMenuPanel from "./MegaMenuPanel";
import {
  services,
  CATEGORY_LABELS,
  type Service,
  type ServiceCategory,
} from "@/data/services";

// Top-level nav items. "Servicios" is rendered separately (mega-menu trigger).
const NAV_ITEMS = [
  { path: "/", hash: "inicio", label: "Inicio" },
  { path: "/servicios", hash: "servicios", label: "Servicios" },
  { path: "/portafolio", hash: "portafolio", label: "Portafolio" },
  { path: "/nosotros", hash: "nosotros", label: "Nosotros" },
  { path: "/blog", hash: "blog", label: "Blog" },
  { path: "/contacto", hash: "contacto", label: "Contacto" },
];

// Mobile drawer order for grouped services
const MOBILE_COLUMN_ORDER: ServiceCategory[] = [
  "growth",
  "content",
  "technology",
];

function groupServicesByCategory(): Record<ServiceCategory, Service[]> {
  return MOBILE_COLUMN_ORDER.reduce((acc, category) => {
    acc[category] = services.filter((s) => s.category === category);
    return acc;
  }, {} as Record<ServiceCategory, Service[]>);
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Hover intent timers (desktop mega-menu)
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Auto-close mega-menu on scroll
  useEffect(() => {
    if (!isMegaMenuOpen) return;

    function handleScrollClose() {
      setIsMegaMenuOpen(false);
    }

    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [isMegaMenuOpen]);

  // Escape key closes mega-menu + returns focus to trigger
  useEffect(() => {
    if (!isMegaMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMegaMenuOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMegaMenuOpen]);

  // Reset mobile Servicios submenu when drawer closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Clean up any pending timers on unmount
  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  function clearTimers() {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function handleMegaEnter() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (openTimerRef.current) return; // already queued
    openTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(true);
      openTimerRef.current = null;
    }, 150);
  }

  function handleMegaLeave() {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) return; // already queued
    closeTimerRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
      closeTimerRef.current = null;
    }, 300);
  }

  function handleMegaToggleClick() {
    clearTimers();
    setIsMegaMenuOpen((prev) => !prev);
  }

  function isActive(item: (typeof NAV_ITEMS)[number]) {
    if (item.path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.path);
  }

  const servicesActive = pathname.startsWith("/servicios");
  const groupedServices = groupServicesByCategory();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-black/80 md:bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group">
          <div className="absolute inset-0 bg-[var(--accent)]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src="/logo-full.png"
            alt="Lux Media"
            width={160}
            height={70}
            sizes="(max-width: 768px) 146px, 330px"
            quality={90}
            className="h-12 md:h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);

            // "Inicio" on homepage scrolls to top; otherwise always navigate to the page
            if (item.path === "/" && isHome) {
              return (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`text-sm transition-colors line-animation pb-1 ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            // "Servicios" = mega-menu trigger button (no <Link>)
            if (item.path === "/servicios") {
              return (
                <button
                  key={item.hash}
                  id="mega-menu-trigger"
                  ref={triggerRef}
                  type="button"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  aria-controls="mega-menu-panel"
                  onClick={handleMegaToggleClick}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className={`text-sm transition-colors line-animation pb-1 inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 rounded ${
                    servicesActive || isMegaMenuOpen
                      ? "text-[var(--accent)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className={`w-3 h-3 transition-transform duration-200 ${
                      isMegaMenuOpen ? "rotate-180" : ""
                    }`}
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
                </button>
              );
            }

            return (
              <Link
                key={item.hash}
                href={item.path}
                className={`text-sm transition-colors line-animation pb-1 ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <motion.a
            href={CONTACT.getWhatsAppUrl(
              "Hola, me interesa una consulta para mi marca."
            )}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { event_label: "Navbar CTA" })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 text-sm font-semibold transition-all"
            style={{
              background: "transparent",
              border: "1px solid rgba(212, 168, 67, 0.4)",
              borderRadius: "10px",
              color: "#D4A843",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212, 168, 67, 0.08)";
              e.currentTarget.style.borderColor = "rgba(212, 168, 67, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(212, 168, 67, 0.4)";
            }}
          >
            Consulta gratis
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-[var(--accent)] transition-colors duration-200 p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop mega-menu panel — rendered inside <nav> so it inherits z-50 */}
      <MegaMenuPanel
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onMouseEnter={handleMegaEnter}
        onMouseLeave={handleMegaLeave}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item);

                if (item.path === "/" && isHome) {
                  return (
                    <button
                      key={item.hash}
                      type="button"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setTimeout(
                          () => window.scrollTo({ top: 0, behavior: "smooth" }),
                          150
                        );
                      }}
                      className={`text-left transition-colors min-h-11 flex items-center ${
                        active
                          ? "text-[var(--accent)]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                // Servicios expands inline into a flat list with section headers
                if (item.path === "/servicios") {
                  return (
                    <div key={item.hash} className="flex flex-col">
                      <button
                        type="button"
                        aria-expanded={isMobileServicesOpen}
                        aria-controls="mobile-services-panel"
                        onClick={() =>
                          setIsMobileServicesOpen((prev) => !prev)
                        }
                        className={`text-left transition-colors min-h-11 flex items-center justify-between gap-2 ${
                          servicesActive
                            ? "text-[var(--accent)]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <svg
                          aria-hidden="true"
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
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
                      </button>

                      <AnimatePresence initial={false}>
                        {isMobileServicesOpen && (
                          <motion.div
                            id="mobile-services-panel"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-1 flex flex-col gap-4">
                              {MOBILE_COLUMN_ORDER.map((category) => {
                                const items = groupedServices[category];
                                if (!items.length) return null;

                                return (
                                  <div
                                    key={category}
                                    className="flex flex-col"
                                  >
                                    {/* Non-interactive section header */}
                                    <div
                                      className="flex items-center gap-3 py-2"
                                      aria-hidden="true"
                                    >
                                      <span className="h-px flex-1 bg-[var(--card-border)]/60" />
                                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] gold-glow-subtle">
                                        {CATEGORY_LABELS[category]}
                                      </span>
                                      <span className="h-px flex-1 bg-[var(--card-border)]/60" />
                                    </div>

                                    <div className="flex flex-col">
                                      {items.map((service) => (
                                        <Link
                                          key={service.slug}
                                          href={`/servicios/${service.slug}`}
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                          className="flex items-start gap-3 min-h-11 py-2 px-1 border-t border-[var(--card-border)]/50 first:border-t-0 hover:text-[var(--accent)] transition-colors"
                                        >
                                          <span
                                            className="flex-shrink-0 text-lg leading-none pt-1"
                                            aria-hidden="true"
                                          >
                                            {service.icon}
                                          </span>
                                          <div className="flex-1 min-w-0">
                                            <div className="text-sm font-semibold text-white">
                                              {service.title}
                                            </div>
                                            <p className="text-xs text-gray-400 leading-snug mt-0.5">
                                              {service.shortDescription}
                                            </p>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}

                              <Link
                                href="/servicios"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)] min-h-11"
                              >
                                Ver todos los servicios
                                <span aria-hidden="true">→</span>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.hash}
                    href={item.path}
                    className={`transition-colors min-h-11 flex items-center ${
                      active
                        ? "text-[var(--accent)]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={CONTACT.getWhatsAppUrl(
                  "Hola, me interesa una consulta para mi marca."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { event_label: "Navbar Mobile CTA" })}
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-black px-6 py-2.5 rounded-full text-sm font-semibold text-center"
              >
                Consulta gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
