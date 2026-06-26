import React from 'react';

export type IconButtonVariant = 'plain' | 'solid' | 'accent';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `plain` (bare) · `solid` (floating white) · `accent` (cobalt). @default 'plain' */
  variant?: IconButtonVariant;
  /** @default 'md' */
  size?: IconButtonSize;
  /** Accessible label (also the tooltip). Required for icon-only buttons. */
  label?: string;
  /** The icon/glyph. */
  children?: React.ReactNode;
}

/** Square, icon-only button for toolbars and dense controls. */
export function IconButton(props: IconButtonProps): JSX.Element;
