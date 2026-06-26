import React from 'react';

/**
 * 点彩 — scattered solid color-points, the Ezagent signature texture. Deterministic via `seed`.
 * @startingPoint section="Surfaces" subtitle="点彩 scattered color-points motif" viewport="700x180"
 */
export interface ColorPointsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of dots. @default 32 */
  count?: number;
  /** Canvas height in px. @default 150 */
  height?: number;
  /** Dot colors. @default the six brand primaries + jade/orange */
  colors?: string[];
  /** Seed for the deterministic scatter (same seed → same layout). @default 7 */
  seed?: number;
  /** Drop the surface bg/shadow and scatter dots transparently (overlay use). */
  bare?: boolean;
  /** Overlay content (e.g. a floating glass chip) rendered above the dots. */
  children?: React.ReactNode;
}

/** 点彩 — scattered solid color-points, the Ezagent signature texture. Deterministic via `seed`. */
export function ColorPoints(props: ColorPointsProps): JSX.Element;
