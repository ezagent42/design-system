import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading dot color (CSS color or token var). */
  color?: string;
  /** If provided, renders an × remove button calling this handler. */
  onRemove?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

/** Neutral chip/token with optional color dot and dismiss button. For filters & selections. */
export function Tag(props: TagProps): JSX.Element;
