"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  Grid,
} from "@tremor/react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

/* ── colors ──────────────────────────────────────── */
const COLORS = {
  amber: "#F59E0B",
  blue: "#3B82F6",
  emerald: "#10B981",
  violet: "#8B5CF6",
  rose: "#EF4444",
  yellow: "#EAB308",
  gold: "#F5B51A",
};

const CHANNEL_COLORS: Record<string, string> = {
  "Meta Ads": COLORS.amber,
  "Google Ads": COLORS.blue,
  "Orgánico": COLORS.emerald,
  "Referidos": COLORS.violet,
  "Email": COLORS.rose,
};

const DONUT_COLORS = [COLORS.amber, COLORS.blue, COLORS.emerald, COLORS.violet, COLORS.rose];

/* ── helpers ──────────────────────────────────────── */
function rand(min: number, max: number) {
  return Math.round(min + Math.random() * (max - min));
}

function generateMonthlyData() {
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];
  return months.map((m) => ({
    month: m,
    Leads: rand(30, 120),
    Conversiones: rand(10, 50),
  }));
}

function generateChannelData() {
  return [
    { channel: "Meta Ads", Ingresos: rand(8000, 25000) },
    { channel: "Google Ads", Ingresos: rand(5000, 18000) },
    { channel: "Orgánico", Ingresos: rand(3000, 12000) },
    { channel: "Referidos", Ingresos: rand(2000, 8000) },
    { channel: "Email", Ingresos: rand(1000, 6000) },
  ];
}

function generateTrafficData() {
  const raw = [rand(30, 50), rand(15, 30), rand(10, 25), rand(5, 15), rand(3, 10)];
  const sum = raw.reduce((a, b) => a + b, 0);
  const normalized = raw.map((v) => Math.round((v / sum) * 100));
  const diff = 100 - normalized.reduce((a, b) => a + b, 0);
  normalized[0] += diff;
  const names = ["Redes Sociales", "Búsqueda", "Directo", "Referidos", "Email"];
  return names.map((name, i) => ({ name, value: normalized[i] }));
}

/* ── custom tooltip ──────────────────────────────── */
interface TooltipPayload {
  name: string;
  value: number;
  color: string;
  payload: Record<string, unknown>;
}

function CustomTooltip({
  active,
  payload,
  label,
  formatter,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
  formatter?: (value: number, name: string) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1a1a] border border-white/20 rounded-lg px-3 py-2 shadow-xl">
      {label && <p className="text-gray-400 text-xs mb-1">{label}</p>}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: entry.color }} />
          <span className="text-gray-300">{entry.name}</span>
          <span className="text-white font-medium ml-auto pl-3">
            {formatter ? formatter(entry.value, entry.name) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function DonutTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
}) {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  return (
    <div className="bg-[#1a1a1a] border border-white/20 rounded-lg px-3 py-2 shadow-xl">
      <div className="flex items-center gap-2 text-sm">
        <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: entry.color }} />
        <span className="text-gray-300">{entry.name}</span>
        <span className="text-white font-medium ml-auto pl-3">{entry.value}%</span>
      </div>
    </div>
  );
}

/* ── KPI card ─────────────────────────────────────── */
interface KPI {
  title: string;
  metric: string;
  delta: string;
  deltaType: "increase" | "moderateIncrease" | "unchanged" | "moderateDecrease" | "decrease";
}

function KPICard({ kpi }: { kpi: KPI }) {
  return (
    <Card className="bg-[#1a1a1a] ring-1 ring-white/10 rounded-xl">
      <Text className="text-gray-400">{kpi.title}</Text>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-3 mt-2">
        <Metric className="text-white">{kpi.metric}</Metric>
        <BadgeDelta deltaType={kpi.deltaType} size="sm">
          {kpi.delta}
        </BadgeDelta>
      </Flex>
    </Card>
  );
}

/* ── main component ───────────────────────────────── */
export default function DashboardDemo() {
  const generateKPIs = useCallback((): KPI[] => [
    {
      title: "Leads este mes",
      metric: `${rand(85, 150)}`,
      delta: `+${rand(8, 25)}%`,
      deltaType: "increase",
    },
    {
      title: "Tasa de conversión",
      metric: `${(rand(25, 48) / 10).toFixed(1)}%`,
      delta: `+${(rand(3, 12) / 10).toFixed(1)}%`,
      deltaType: "moderateIncrease",
    },
    {
      title: "ROAS promedio",
      metric: `${(rand(28, 62) / 10).toFixed(1)}x`,
      delta: `+${(rand(2, 8) / 10).toFixed(1)}x`,
      deltaType: "increase",
    },
    {
      title: "Alcance social",
      metric: `${rand(180, 420)}K`,
      delta: `+${rand(10, 35)}%`,
      deltaType: "moderateIncrease",
    },
  ], []);

  const [kpis, setKpis] = useState<KPI[]>(generateKPIs);
  const [monthlyData, setMonthlyData] = useState(generateMonthlyData);
  const [channelData, setChannelData] = useState(generateChannelData);
  const [trafficData, setTrafficData] = useState(generateTrafficData);

  // Two-tier updates: KPIs update subtly every 3s, charts refresh every 12s
  useEffect(() => {
    const kpiInterval = setInterval(() => {
      setKpis((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        const fresh = generateKPIs();
        next[idx] = fresh[idx];
        if (Math.random() > 0.5) {
          const idx2 = (idx + 1 + Math.floor(Math.random() * (next.length - 1))) % next.length;
          next[idx2] = fresh[idx2];
        }
        return next;
      });
    }, 3000);

    const chartInterval = setInterval(() => {
      setMonthlyData(generateMonthlyData());
      setChannelData(generateChannelData());
      setTrafficData(generateTrafficData());
    }, 12000);

    return () => {
      clearInterval(kpiInterval);
      clearInterval(chartInterval);
    };
  }, [generateKPIs]);

  const donutTotal = trafficData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-8">
      {/* Disclaimer */}
      <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20">
        <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-gray-300">
          <span className="font-medium text-[var(--accent)]">Datos de demostración.</span>{" "}
          Este dashboard muestra métricas simuladas que se actualizan en tiempo real. Con Lux Media, tu dashboard tiene datos reales de tus campañas.
        </p>
      </div>

      {/* KPI Cards */}
      <Grid numItemsSm={2} numItemsLg={4} className="gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.title} kpi={kpi} />
        ))}
      </Grid>

      {/* Charts row */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Leads over time — Area Chart */}
        <Card className="bg-[#1a1a1a] ring-1 ring-white/10 rounded-xl">
          <h3 className="text-white font-medium text-lg mb-4">Leads por mes</h3>
          <ResponsiveContainer width="100%" height={256}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="gradLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.amber} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={COLORS.amber} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradConversiones" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.emerald} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={COLORS.emerald} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ color: "#d1d5db", fontSize: 12, paddingTop: 8 }}
                iconType="circle"
                iconSize={8}
              />
              <Area type="monotone" dataKey="Leads" stroke={COLORS.amber} strokeWidth={2} fill="url(#gradLeads)" />
              <Area type="monotone" dataKey="Conversiones" stroke={COLORS.emerald} strokeWidth={2} fill="url(#gradConversiones)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue by channel — Bar Chart */}
        <Card className="bg-[#1a1a1a] ring-1 ring-white/10 rounded-xl">
          <h3 className="text-white font-medium text-lg mb-4">Ingresos por canal (USD)</h3>
          <ResponsiveContainer width="100%" height={256}>
            <BarChart data={channelData}>
              <XAxis dataKey="channel" stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="#6b7280" tick={{ fill: "#9ca3af", fontSize: 12 }} axisLine={false} tickLine={false} width={65} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                content={
                  <CustomTooltip formatter={(v) => `$${(v / 1000).toFixed(1)}K`} />
                }
              />
              <Bar dataKey="Ingresos" radius={[4, 4, 0, 0]}>
                {channelData.map((entry) => (
                  <Cell key={entry.channel} fill={CHANNEL_COLORS[entry.channel] || COLORS.amber} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Traffic sources — Donut Chart */}
      <Card className="bg-[#1a1a1a] ring-1 ring-white/10 rounded-xl">
        <h3 className="text-white font-medium text-lg mb-4">Fuentes de tráfico</h3>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-52 h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  nameKey="name"
                  stroke="none"
                  label={false}
                >
                  {trafficData.map((_, i) => (
                    <Cell key={i} fill={DONUT_COLORS[i]} />
                  ))}
                </Pie>
                {/* Center label */}
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="22" fontWeight="bold">
                  {donutTotal}%
                </text>
                <Tooltip content={<DonutTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 flex-1">
            {trafficData.map((item, i) => (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: DONUT_COLORS[i] }} />
                <span className="text-gray-300 text-sm flex-1">{item.name}</span>
                <span className="text-white font-medium text-sm">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
