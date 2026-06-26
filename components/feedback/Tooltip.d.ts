import React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** @default 'top' */
  placement?: 'top' | 'bottom';
  /** The trigger element. */
  children?: React.ReactNode;
}

/** Dark ink tooltip shown on hover/focus of its wrapped trigger. */
export function Tooltip(props: TooltipProps): JSX.Element;
