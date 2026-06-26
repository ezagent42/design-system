import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. If omitted, initials of `name` are shown. */
  src?: string;
  /** Person/agent name — drives initials and (if no color) the auto brand color. */
  name?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Use squircle radius instead of a full circle. */
  squircle?: boolean;
  /** Override the fallback background color. */
  color?: string;
}

/** Avatar — image or initials on an auto brand color picked from the name. */
export function Avatar(props: AvatarProps): JSX.Element;
