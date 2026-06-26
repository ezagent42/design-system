import React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Optional count pill. */
  count?: number;
}

/**
 * Tab bar with a sliding cobalt underline (or pill) and optional icons + counts.
 * @startingPoint section="Navigation" subtitle="Underline / pill tab bar" viewport="700x130"
 */
export interface TabsProps {
  /** Tabs as strings or {value,label,icon,count}. */
  items?: Array<string | TabItem>;
  value?: string;
  onChange?: (value: string) => void;
  /** `underline` (default) or `pill`. */
  variant?: 'underline' | 'pill';
  className?: string;
}

/** Tab bar with a sliding cobalt underline (or pill) and optional icons + counts. */
export function Tabs(props: TabsProps): JSX.Element;
