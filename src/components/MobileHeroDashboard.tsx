"use client";

import { motion } from "framer-motion";

// ─── Data (easy to update) ──────────────────────────────────────────────────
const RINGS = [
  { value: "85%", label: "META ADS", color: "#22c55e", percent: 85 },
  { value: "4.2x", label: "ROAS", color: "#D4A843", percent: 92 },
  { value: "73%", label: "SEO", color: "#3b82f6", percent: 73 },
];

const STATS = [
  { value: "$2.1", delta: "▲ 31%", label: "COST/LEAD", color: "#D4A843" },
  { value: "156", delta: "▲ 33%", label: "VENTAS", color: "#22c55e" },
  { value: "#1", delta: "★", label: "GOOGLE", color: "rgba(255,255,255,0.85)" },
  { value: "+47%", delta: "▲", label: "ENGAGEMENT", color: "#22c55e" },
];

const TICKER = "ROAS 4.2x  |  Leads +312%  |  CTR 3.8%  |  CPC -23%  |  Revenue +$18K  |  Engagement +47%";

const CIRCUMFERENCE = 2 * Math.PI * 30; // r=30

// ─── Platform SVG paths ─────────────────────────────────────────────────────
const PLATFORMS = [
  { name: "Facebook", color: "#1877F2", bg: "rgba(24,119,242,0.15)", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { name: "Instagram", color: "#E4405F", bg: "rgba(228,64,95,0.15)", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "TikTok", color: "#ffffff", bg: "rgba(255,255,255,0.08)", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.43v-7.15a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-1.99-2.07 4.83 4.83 0 01-.01-2.45z" },
  { name: "Google", color: "#4285F4", bg: "rgba(66,133,244,0.12)", multicolor: true },
  { name: "YouTube", color: "#FF0000", bg: "rgba(255,0,0,0.1)", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { name: "LinkedIn", color: "#0A66C2", bg: "rgba(10,102,194,0.15)", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.12)", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
];

// ─── Styles (CSS-in-JSX for animations — Tailwind can't do @keyframes) ──────
const styles = `
  @keyframes ticker-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes ring-fill {
    from { stroke-dashoffset: ${CIRCUMFERENCE}; }
  }
  @keyframes chart-draw {
    from { stroke-dashoffset: 400; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes chart-fill-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes data-flow {
    0% { left: -3%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: 103%; opacity: 0; }
  }
  @keyframes plat-pulse {
    0%, 100% { transform: scale(1); opacity: 0.75; }
    50% { transform: scale(1.12); opacity: 1; }
  }
  @keyframes peak-glow {
    0%, 100% { r: 4; opacity: 0.6; }
    50% { r: 7; opacity: 1; }
  }
`;

// ─── Google icon (multicolor, needs separate paths) ─────────────────────────
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function MobileHeroDashboard() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{styles}</style>

      {/* ── Data flow lines (connecting bands) ── */}
      {[33, 58, 72].map((top) => (
        <div key={top} className="absolute left-0 right-0 h-px" style={{ top: `${top}%`, background: "rgba(212,168,67,0.04)" }}>
          <div className="absolute top-[-2px] w-1 h-1 rounded-full" style={{ background: "rgba(212,168,67,0.35)", animation: "data-flow 5s linear infinite" }} />
          <div className="absolute top-[-2px] w-1 h-1 rounded-full" style={{ background: "rgba(212,168,67,0.35)", animation: "data-flow 5s linear infinite", animationDelay: "-2.5s" }} />
        </div>
      ))}

      {/* ── Band 1: Metric Ticker ── */}
      <div
        className="absolute left-0 right-0 h-6 flex items-center overflow-hidden"
        style={{ top: "6%", borderTop: "1px solid rgba(212,168,67,0.1)", borderBottom: "1px solid rgba(212,168,67,0.1)" }}
      >
        <div
          className="flex gap-6 whitespace-nowrap text-[10px] font-semibold tracking-wide"
          style={{ color: "#D4A843", animation: "ticker-scroll 14s linear infinite" }}
        >
          {/* Duplicate for seamless loop */}
          {[0, 1].map((i) => (
            <span key={i} className="flex gap-6">
              {TICKER.split("  |  ").map((item) => (
                <span key={`${i}-${item}`}>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Band 2: Progress Rings ── */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-2" style={{ top: "11%" }}>
        {RINGS.map((ring, i) => {
          const offset = CIRCUMFERENCE - (ring.percent / 100) * CIRCUMFERENCE;
          return (
            <motion.div
              key={ring.label}
              className="flex flex-col items-center w-[100px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            >
              <svg width="88" height="88" viewBox="0 0 72 72" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                <circle
                  cx="36" cy="36" r="30" fill="none"
                  strokeWidth="6" strokeLinecap="round"
                  stroke={ring.color}
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={offset}
                  style={{
                    animation: `ring-fill 1.8s ease-out ${0.3 + i * 0.3}s both`,
                    filter: `drop-shadow(0 0 5px ${ring.color}80)`,
                  }}
                />
              </svg>
              <motion.span
                className="text-[18px] font-extrabold -mt-[54px] relative z-10"
                style={{ color: ring.color, textShadow: `0 0 18px ${ring.color}60` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.2 }}
              >
                {ring.value}
              </motion.span>
              <span className="text-[7px] text-white/30 uppercase tracking-wider mt-[30px]">
                {ring.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* ── Band 3: Mini Area Chart ── */}
      <motion.div
        className="absolute left-[6%] right-[6%] rounded-xl p-3"
        style={{
          top: "36%",
          height: "20%",
          background: "rgba(17,17,17,0.7)",
          border: "1px solid rgba(212,168,67,0.1)",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          <span className="text-[8px] text-white/40 font-semibold uppercase tracking-wide">
            Leads este mes
          </span>
          <div className="text-right">
            <motion.span
              className="text-[16px] font-extrabold block"
              style={{ color: "#22c55e" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            >
              312
            </motion.span>
            <motion.span
              className="text-[7px] block"
              style={{ color: "rgba(34,197,94,0.7)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
            >
              +24% vs anterior
            </motion.span>
          </div>
        </div>
        {/* Chart */}
        <svg viewBox="0 0 280 70" preserveAspectRatio="none" className="w-full" style={{ height: "calc(100% - 32px)" }}>
          <defs>
            <linearGradient id="mhd-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(34,197,94,0.25)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0,58 C30,54 50,48 80,42 C110,35 130,37 160,30 C190,23 210,18 240,12 C260,8 275,6 280,4 L280,70 L0,70 Z"
            fill="url(#mhd-area)"
            style={{ animation: "chart-fill-fade 0.8s ease-out 2.2s both" }}
          />
          <path
            d="M0,58 C30,54 50,48 80,42 C110,35 130,37 160,30 C190,23 210,18 240,12 C260,8 275,6 280,4"
            fill="none" stroke="#22c55e" strokeWidth="2"
            style={{
              strokeDasharray: 400,
              animation: "chart-draw 2s ease-out 1.8s both",
              filter: "drop-shadow(0 0 4px rgba(34,197,94,0.4))",
            }}
          />
          {/* Node dots */}
          {[[80, 42, 2.4], [160, 30, 2.7], [240, 12, 3.0], [280, 4, 3.2]].map(([cx, cy, delay]) => (
            <circle key={`${cx}`} cx={cx} cy={cy} r="3" fill="#22c55e" opacity="0">
              <animate attributeName="opacity" from="0" to="1" begin={`${delay}s`} dur="0.3s" fill="freeze" />
            </circle>
          ))}
          {/* Peak glow */}
          <circle cx="280" cy="4" r="4" fill="#22c55e" opacity="0" style={{ animation: "peak-glow 2s ease-in-out 3.4s infinite" }}>
            <animate attributeName="opacity" from="0" to="0.6" begin="3.3s" dur="0.3s" fill="freeze" />
          </circle>
        </svg>
      </motion.div>

      {/* ── Band 4: Stats Strip ── */}
      <div className="absolute left-[4%] right-[4%] flex gap-[6px]" style={{ top: "60%" }}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex-1 py-2 px-1 rounded-lg text-center"
            style={{ background: "rgba(17,17,17,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2.8 + i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="text-[15px] font-extrabold leading-tight" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-[7px] mt-[2px]" style={{ color: "#22c55e" }}>
              {stat.delta}
            </div>
            <div className="text-[6px] text-white/25 uppercase tracking-wider mt-[2px]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Band 5: Platform Icons ── */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-[10px]" style={{ top: "73%" }}>
        {PLATFORMS.map((p, i) => (
          <motion.div
            key={p.name}
            className="w-[32px] h-[32px] rounded-full flex items-center justify-center"
            style={{ background: p.bg, animation: `plat-pulse 3s ease-in-out ${i * 0.4}s infinite` }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ delay: 3.2 + i * 0.12, type: "spring", stiffness: 300, damping: 15 }}
          >
            {p.multicolor ? (
              <GoogleIcon />
            ) : (
              <svg viewBox="0 0 24 24" fill={p.color} className="w-[14px] h-[14px]">
                <path d={p.path} />
              </svg>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
