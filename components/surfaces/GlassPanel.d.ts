import React from 'react';

/**
 * Frosted-glass (毛玻璃) surface — a signature Ezagent treatment for controls floating over color or imagery.
 * @startingPoint section="Surfaces" subtitle="Frosted glass panel over color" viewport="700x200"
 */
export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `light` (frosted white, dark text) over imagery; `dark` (frosted light) over color blobs. @default 'light' */
  tone?: 'light' | 'dark';
  /** Compact mono chip styling (e.g. a floating label). */
  chip?: boolean;
  /** Softer 9px blur instead of 14px. */
  soft?: boolean;
  children?: React.ReactNode;
}

/** Frosted-glass (毛玻璃) surface — a signature Ezagent treatment for controls floating over color or imagery. */
export function GlassPanel(props: GlassPanelProps): JSX.Element;
