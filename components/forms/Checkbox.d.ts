import React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/** Square checkbox; fills cobalt with a white check when on. */
export function Checkbox(props: CheckboxProps): JSX.Element;
