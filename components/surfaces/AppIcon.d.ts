import React from 'react';

export type AppIconColor = 'red' | 'blueink' | 'blue' | 'yellow' | 'jade' | 'orange' | 'ink' | string;
export type AppIconVariant = 'glass' | 'frost' | 'soft' | 'solid' | 'bare';

export interface AppIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Brand color name or any CSS color. @default 'blue' */
  color?: AppIconColor;
  /** @default 'md' (54px) */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Shape treatment (all theme-aware).
   * `glass` (default) — brand-color glyph on a same-color frosted square (best over color/imagery).
   * `frost` — white glyph on a saturated translucent frosted color square (solid punch + glass glow).
   * `soft` — deep brand glyph on an opaque same-color wash square (best on light/white surfaces).
   * `solid` — white (or dark) glyph on a solid color squircle.
   * `bare` — brand-color glyph only, no container.
   * @default 'glass'
   */
  variant?: AppIconVariant;
  /** Monochrome glyph node (an SVG using currentColor / fill). */
  glyph?: React.ReactNode;
  /** Notification badge content (number or ✓). Omit for none. */
  badge?: React.ReactNode;
}

/**
 * Product/app icon. Default `glass`: the brand-color glyph reads as the mark, on a same-color
 * frosted square that gives a light container, identity, and contrast (echoes GlassPanel).
 * @startingPoint section="Surfaces" subtitle="Glass-backed app icon tiles" viewport="700x180"
 */
export function AppIcon(props: AppIconProps): JSX.Element;
