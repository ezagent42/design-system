import React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status color & icon. @default 'info' */
  tone?: 'info' | 'success' | 'danger' | 'warning';
  /** Bold title line. */
  title?: React.ReactNode;
  /** Supporting message (children). */
  children?: React.ReactNode;
  /** If set, renders a dismiss × calling this. */
  onClose?: () => void;
}

/** Floating notification card with a colored status icon. Presentational — drive show/hide yourself. */
export function Toast(props: ToastProps): JSX.Element;
