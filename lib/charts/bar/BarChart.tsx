"use client";

import React, { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DataPoint {
  x: string | number;
  y: number;
}

export type ColorScheme =
  | "ocean"
  | "sunset"
  | "forest"
  | "monochrome"
  | "candy"
  | string[];

export interface BarChartProps {
  /** Array of {x, y} data points */
  data: DataPoint[];
  /** Chart title */
  title?: string;
  /** Chart subtitle / description */
  subtitle?: string;
  /** Width in px (default: 100%) */
  width?: number | string;
  /** Height in px (default: 400) */
  height?: number;
  /** Color scheme preset or custom hex array */
  colorScheme?: ColorScheme;
  /** Show value labels on top of bars */
  showValues?: boolean;
  /** Show gridlines */
  showGrid?: boolean;
  /** Show X-axis label */
  xLabel?: string;
  /** Show Y-axis label */
  yLabel?: string;
  /** Bar border radius in px */
  barRadius?: number;
  /** Gap between bars (0–1) */
  barGap?: number;
  /** Animate on mount */
  animated?: boolean;
  /** Format Y-axis tick values */
  yFormatter?: (value: number) => string;
  /** Format tooltip value */
  tooltipFormatter?: (point: DataPoint) => string;
  /** Background color override */
  background?: string;
  /** Font family override */
  fontFamily?: string;
  /** Callback on bar click */
  onBarClick?: (point: DataPoint, index: number) => void;
  /** Barchart Classes */
  className?: string;
}

// ─── Color Palettes ───────────────────────────────────────────────────────────

const SCHEMES: Record<string, string[]> = {
  ocean: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#0284c7", "#0369a1", "#bae6fd"],
  sunset: ["#f97316", "#fb923c", "#fdba74", "#ea580c", "#c2410c", "#fed7aa"],
  forest: ["#22c55e", "#4ade80", "#86efac", "#16a34a", "#15803d", "#bbf7d0"],
  monochrome: [
    "#1e293b",
    "#334155",
    "#475569",
    "#64748b",
    "#94a3b8",
    "#cbd5e1",
  ],
  candy: ["#ec4899", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981", "#f43f5e"],
};

function resolveColors(scheme: ColorScheme): string[] {
  if (Array.isArray(scheme)) return scheme;
  return SCHEMES[scheme] ?? SCHEMES.ocean;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function niceMax(value: number): number {
  if (value === 0) return 10;
  const mag = Math.pow(10, Math.floor(Math.log10(value)));
  return Math.ceil(value / mag) * mag;
}

function defaultYFormatter(v: number): string {
  if (Math.abs(v) >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (Math.abs(v) >= 1_000) return `${(v / 1_000).toFixed(1)}k`;
  return String(v);
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  point: DataPoint | null;
  formatted: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BarChart({
  data = [],
  title,
  subtitle,
  width = "100%",
  height = 400,
  colorScheme = "ocean",
  showValues = false,
  showGrid = true,
  xLabel,
  yLabel,
  barRadius = 6,
  barGap = 0.25,
  animated = true,
  yFormatter = defaultYFormatter,
  tooltipFormatter,
  background = "#0f172a",
  fontFamily = "'DM Mono', 'Fira Mono', monospace",
  onBarClick,
  className,
}: BarChartProps) {
  const colors = resolveColors(colorScheme);
  const [mounted, setMounted] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    point: null,
    formatted: "",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animated) {
      const t = setTimeout(() => setMounted(true), 80);
      return () => clearTimeout(t);
    }
    setMounted(true);
  }, [animated]);

  if (!data.length) {
    return (
      <div
        style={{
          width,
          height,
          background,
          fontFamily,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#64748b",
          borderRadius: 16,
          fontSize: 14,
        }}
      >
        No data provided
      </div>
    );
  }

  // ── Layout constants ────────────────────────────────────────────────────────
  const PAD_TOP = title ? 72 : 32;
  const PAD_BOTTOM = xLabel ? 72 : 52;
  const PAD_LEFT = yLabel ? 80 : 60;
  const PAD_RIGHT = 24;
  const GRID_LINES = 5;

  const maxY = niceMax(Math.max(...data.map((d) => d.y)));
  const chartH = height - PAD_TOP - PAD_BOTTOM;

  // ── Bar geometry ────────────────────────────────────────────────────────────
  // We render as SVG with a foreignObject for the container width trick
  // but here we compute relative units assuming 100% width via viewBox tricks.
  // Instead, we use a CSS-driven approach: flex layout for bars.

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    point: DataPoint,
  ) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const formatted = tooltipFormatter
      ? tooltipFormatter(point)
      : `${point.x}: ${yFormatter(point.y)}`;
    setTooltip({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      point,
      formatted,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip((prev) => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // Grid line values
  const gridValues = Array.from(
    { length: GRID_LINES + 1 },
    (_, i) => (maxY / GRID_LINES) * i,
  ).reverse();

  const accentColor = colors[0];

  return (
    <div
      ref={containerRef}
      style={{
        width,
        background,
        padding: "28px 28px 20px",
        fontFamily,
        position: "relative",
        boxSizing: "border-box",
      }}
      className={className}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      {(title || subtitle) && (
        <div style={{ marginBottom: 24 }}>
          {title && (
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#f1f5f9",
                letterSpacing: "0.01em",
                marginBottom: 4,
              }}
            >
              {title}
            </div>
          )}
          {subtitle && (
            <div
              style={{
                fontSize: 12,
                color: "#64748b",
                letterSpacing: "0.03em",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      )}

      {/* ── Chart area ─────────────────────────────────────────────────── */}
      <div style={{ display: "flex", gap: 12 }}>
        {/* Y-axis label */}
        {yLabel && (
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: 11,
              color: "#475569",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {yLabel}
          </div>
        )}

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Grid + Bars */}
          <div
            style={{
              position: "relative",
              height,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Grid lines + Y-tick labels */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingBottom: PAD_BOTTOM,
                paddingTop: 8,
              }}
            >
              {gridValues.map((v, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "#475569",
                      width: 38,
                      textAlign: "right",
                      flexShrink: 0,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {yFormatter(v)}
                  </span>
                  {showGrid && (
                    <div
                      style={{
                        flex: 1,
                        height: 1,
                        background:
                          i === gridValues.length - 1
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(255,255,255,0.05)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bars row */}
            <div
              style={{
                position: "absolute",
                bottom: PAD_BOTTOM,
                top: 8,
                left: 54,
                right: 0,
                display: "flex",
                alignItems: "flex-end",
                gap: `${(barGap * 100) / data.length}%`,
                padding: `0 ${barGap * 40}px`,
              }}
            >
              {data.map((point, i) => {
                const pct = maxY > 0 ? (point.y / maxY) * 100 : 0;
                const color = colors[i % colors.length];
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                      justifyContent: "flex-end",
                      cursor: onBarClick ? "pointer" : "default",
                    }}
                    onClick={() => onBarClick?.(point, i)}
                    onMouseEnter={(e) => handleMouseEnter(e, point)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Value label */}
                    {showValues && mounted && (
                      <span
                        style={{
                          fontSize: 10,
                          color,
                          marginBottom: 4,
                          letterSpacing: "0.04em",
                          opacity: mounted ? 1 : 0,
                          transition: "opacity 0.4s ease",
                          transitionDelay: `${i * 60}ms`,
                        }}
                      >
                        {yFormatter(point.y)}
                      </span>
                    )}

                    {/* The bar */}
                    <div
                      style={{
                        width: "100%",
                        height: mounted ? `${pct}%` : "0%",
                        background: `linear-gradient(to top, ${color}cc, ${color})`,
                        borderRadius: `${barRadius}px ${barRadius}px 0 0`,
                        transition: animated
                          ? `height 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 50}ms`
                          : "none",
                        boxShadow: `0 0 20px ${color}44`,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Sheen */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(120deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
                        }}
                      />
                    </div>

                    {/* X tick label */}
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 11,
                        color: "#64748b",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {String(point.x)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* X-axis label */}
          {xLabel && (
            <div
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "#475569",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              {xLabel}
            </div>
          )}
        </div>
      </div>

      {/* ── Tooltip ────────────────────────────────────────────────────── */}
      {tooltip.visible && tooltip.point && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 14,
            top: tooltip.y - 12,
            background: "#1e293b",
            border: `1px solid ${accentColor}55`,
            borderRadius: 8,
            padding: "8px 12px",
            fontSize: 12,
            color: "#f1f5f9",
            pointerEvents: "none",
            zIndex: 10,
            whiteSpace: "nowrap",
            boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}22`,
            letterSpacing: "0.02em",
          }}
        >
          <span style={{ color: accentColor }}>{tooltip.formatted}</span>
        </div>
      )}
    </div>
  );
}
