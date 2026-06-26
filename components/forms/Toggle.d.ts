import React from 'react';

export interface ToggleProps {
  /** Controlled on/off state. */
  checked?: boolean;
  /** (checked: boolean, event) => void */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional trailing label. */
  label?: string;
  /** @default 'md' */
  size?: 'sm' | 'md';
  disabled?: boolean;
  className?: string;
}

/** Switch control; track fills cobalt when on. Use for instant settings. */
export function Toggle(props: ToggleProps): JSX.Element;
