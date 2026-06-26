import React from 'react';

/**
 * The floating white surface every layout is built from — radius 22, layered soft shadow.
 * @startingPoint section="Surfaces" subtitle="Floating white card surface" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Shadow depth. `flat` (hairline) · `raised` (soft) · `floating` (signature layered). @default 'floating' */
  elevation?: 'flat' | 'raised' | 'floating';
  /** Inner padding. @default 'md' */
  padding?: 'none' | 'sm' | 'md';
  /** Lift on hover (for clickable cards). */
  interactive?: boolean;
  /** Render as another tag. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** The floating white surface every layout is built from — radius 22, layered soft shadow. */
export function Card(props: CardProps): JSX.Element;
