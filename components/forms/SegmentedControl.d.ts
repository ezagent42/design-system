import React from 'react';

export interface SegOption { value: string; label: React.ReactNode; }

/**
 * Segmented control for switching among a few short modes.
 * @startingPoint section="Forms" subtitle="Segmented control / tab switch" viewport="700x140"
 */
export interface SegmentedControlProps {
  /** Options as strings or {value,label}. Keep to 2–4 short items. */
  options?: Array<string | SegOption>;
  /** Selected value. */
  value?: string;
  /** (value) => void */
  onChange?: (value: string) => void;
  /** `pill` or `box`. @default 'pill' */
  shape?: 'pill' | 'box';
  full?: boolean;
  className?: string;
}

/** Segmented control for switching among a few short modes. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
