"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  services,
  CATEGORY_LABELS,
  type Service,
  type ServiceCategory,
} from "@/data/services";

interface MegaMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// Column order: growth → content → technology
const COLUMN_ORDER: ServiceCategory[] = ["growth", "content", "technology"];

function groupServicesByCategory(): Record<ServiceCategory, Service[]> {
  return COLUMN_ORDER.reduce((acc, category) => {
    acc[category] = services.filter((s) => s.category === category);
    return acc;
  }, {} as Record<ServiceCategory, Service[]>);
}

export default function MegaMenuPanel({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuPanelProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const grouped = groupServicesByCategory();

  // Click-outside detection
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      // Ignore clicks on the trigger button (it has its own toggle logic)
      const trigger = document.getElementById("mega-menu-trigger");
      if (trigger && trigger.contains(target)) return;
      if (panelRef.current && !panelRef.current.contains(target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 hidden md:block"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 pt-3">
            <div
              ref={panelRef}
              id="mega-menu-panel"
              role="region"
              aria-label="Menú de servicios"
              className="glass rounded-2xl border border-[var(--card-border)] shadow-2xl p-8 md:p-10"
            >
              {/* Top link: first focusable element per PRD a11y spec */}
              <div className="flex justify-end mb-6">
                <Link
                  href="/servicios"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50 rounded px-1"
                >
                  Ver todos los servicios
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* 3-column grid */}
              <div className="grid grid-cols-3 gap-8">
                {COLUMN_ORDER.map((category) => {
                  const items = grouped[category];
                  if (!items.length) return null;

                  return (
                    <div key={category} className="flex flex-col">
                      {/* Column header */}
                      <div className="mb-3">
                        <span className="text-[var(--accent)] text-xs font-semibold uppercase tracking-widest gold-glow-subtle">
                          {CATEGORY_LABELS[category]}
                        </span>
                        <div className="mt-2 h-px bg-gradient-to-r from-[var(--accent)]/40 via-[var(--accent)]/10 to-transparent" />
                      </div>

                      {/* Service cards */}
                      <div className="space-y-3">
                        {items.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/servicios/${service.slug}`}
                            onClick={onClose}
                            className="group flex gap-3 p-3 rounded-lg border-l-2 border-transparent hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                          >
                            <span
                              className="flex-shrink-0 text-xl leading-none pt-0.5"
                              aria-hidden="true"
                            >
                              {service.icon}
                            </span>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                                {service.title}
                              </div>
                              <p
                                className="mt-1 text-xs text-gray-400 leading-relaxed overflow-hidden"
                                style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {service.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
