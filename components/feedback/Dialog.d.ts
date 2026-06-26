import React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the dialog is shown. */
  open?: boolean;
  /** Called on scrim click or × button. */
  onClose?: () => void;
  /** Heading (CN serif). */
  title?: React.ReactNode;
  /** Footer node, typically right-aligned Buttons. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

/** Centered modal over a frosted scrim; floating card with pop-in. Bring your own Buttons in `footer`. */
export function Dialog(props: DialogProps): JSX.Element | null;
