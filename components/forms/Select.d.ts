import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Options as strings or {value,label}. Ignored if children are passed. */
  options?: Array<string | SelectOption>;
  /** `pill` or `box`. @default 'pill' */
  shape?: 'pill' | 'box';
  full?: boolean;
  disabled?: boolean;
}

/** Native dropdown wrapped in the Ezagent field surface, with a cobalt focus ring. */
export function Select(props: SelectProps): JSX.Element;
