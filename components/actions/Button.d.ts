import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Pill action button. Cobalt `primary` lifts on hover; `secondary`/`ghost` stay calm.
 * @startingPoint section="Actions" subtitle="Primary / secondary / ghost / danger buttons" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = cobalt action; `secondary` = neutral; `ghost` = bare; `danger` = red. */
  variant?: ButtonVariant;
  /** Padding / type scale. @default 'md' */
  size?: ButtonSize;
  /** Stretch to container width. */
  full?: boolean;
  disabled?: boolean;
  /** Element/glyph rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element/glyph rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as another tag, e.g. 'a'. @default 'button' */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

/**
 * Pill action button. Cobalt `primary` lifts on hover; `secondary`/`ghost` stay calm.
 */
export function Button(props: ButtonProps): JSX.Element;
