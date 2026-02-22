"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CONTACT } from "@/constants/contact";
import { trackEvent } from "@/lib/gtag";

// Section IDs on the homepage that correspond to each nav link
const NAV_ITEMS = [
  { path: "/", hash: "inicio", label: "Inicio" },
  { path: "/servicios", hash: "servicios", label: "Servicios" },
  { path: "/portafolio", hash: "portafolio", label: "Portafolio" },
  { path: "/nosotros", hash: "nosotros", label: "Nosotros" },
  { path: "/contacto", hash: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("inicio");

  // Scroll-based active section detection (homepage only)
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    if (!isHome) return;

    const hashes = NAV_ITEMS.map((item) => item.hash);
    for (const hash of [...hashes].reverse()) {
      const element = document.getElementById(hash);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveHash(hash);
          break;
        }
      }
    }
  }, [isHome]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Smooth-scroll to a section, accounting for fixed navbar height
  function scrollToSection(hash: string) {
    const el = document.getElementById(hash);
    if (!el) return;
    const navbarHeight = 80; // approximate fixed navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // Determine href and active state for each nav item
  function getNavHref(item: (typeof NAV_ITEMS)[number]) {
    if (isHome) {
      return `#${item.hash}`;
    }
    return item.path;
  }

  function isActive(item: (typeof NAV_ITEMS)[number]) {
    if (isHome) {
      return activeHash === item.hash;
    }
    // Exact match for "/" or startsWith for nested routes like /servicios/slug
    if (item.path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.path);
  }

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
            className="h-16 md:h-36 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const href = getNavHref(item);
            const active = isActive(item);

            // On homepage, use button for programmatic scroll; on other pages, use <Link>
            if (isHome) {
              return (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => scrollToSection(item.hash)}
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

            return (
              <Link
                key={item.hash}
                href={href}
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
            href={CONTACT.getWhatsAppUrl()}
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
            Agendar consulta
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const href = getNavHref(item);
                const active = isActive(item);

                if (isHome) {
                  return (
                    <button
                      key={item.hash}
                      type="button"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        // Small delay so menu closes before scroll starts
                        setTimeout(() => scrollToSection(item.hash), 150);
                      }}
                      className={`text-left transition-colors ${
                        active
                          ? "text-[var(--accent)]"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.hash}
                    href={href}
                    className={`transition-colors ${
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
                href={CONTACT.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { event_label: "Navbar Mobile CTA" })}
                className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] text-black px-6 py-2.5 rounded-full text-sm font-semibold text-center"
              >
                Agendar consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
