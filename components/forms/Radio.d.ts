import React from 'react';

export interface RadioProps {
  checked?: boolean;
  /** (value, event) => void */
  onChange?: (value: string | undefined, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  /** Group name — radios sharing a name are mutually exclusive. */
  name?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
}

/** Radio button for single-choice groups; fills cobalt when selected. */
export function Radio(props: RadioProps): JSX.Element;
