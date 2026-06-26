import React from 'react';

export type BadgeTone = 'info' | 'success' | 'danger' | 'warning' | 'neutral';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic color. @default 'info' */
  tone?: BadgeTone;
  /** Filled (solid color, white text) instead of soft wash. */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Compact status label in a soft tint wash (or solid). New / Live / Alert / Draft. */
export function Badge(props: BadgeProps): JSX.Element;
