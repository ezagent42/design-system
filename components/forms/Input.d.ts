import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** `pill` (rounded full) or `box` (rounded rect). @default 'pill' */
  shape?: 'pill' | 'box';
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  /** Helper or error text under the field. */
  hint?: string;
  /** Show invalid (red) state. */
  invalid?: boolean;
  /** Stretch to container width. */
  full?: boolean;
  disabled?: boolean;
}

/** Single-line text input on a sunken gray surface; focus ring in cobalt. */
export function Input(props: InputProps): JSX.Element;
