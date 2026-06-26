import React from 'react';

const EZ_BADGE_CSS = `
.ez-badge{font-family:var(--font-ui);font-weight:600;font-size:12px;line-height:1;padding:6px 12px;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;gap:6px;white-space:nowrap;}
.ez-badge__dot{width:7px;height:7px;border-radius:999px;background:currentColor;}
.ez-badge--info{background:var(--blue-wash);color:var(--blue-deep);}
.ez-badge--success{background:var(--jade-wash);color:var(--jade-deep);}
.ez-badge--danger{background:var(--red-wash);color:var(--red-deep);}
.ez-badge--warning{background:var(--orange-wash);color:#9A5410;}
.ez-badge--neutral{background:var(--ground-2);color:var(--ink-2);}
.ez-badge--solid{color:#fff;}
.ez-badge--solid.ez-badge--info{background:var(--accent);}
.ez-badge--solid.ez-badge--success{background:var(--success);}
.ez-badge--solid.ez-badge--danger{background:var(--danger);}
.ez-badge--solid.ez-badge--warning{background:var(--warning);}
.ez-badge--solid.ez-badge--neutral{background:var(--ink);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Small status label — soft wash by default, `solid` for emphasis. */
export function Badge({ tone = 'info', solid = false, dot = false, className = '', children, ...rest }) {
  ensureStyle('ez-badge-css', EZ_BADGE_CSS);
  const cls = ['ez-badge', `ez-badge--${tone}`, solid ? 'ez-badge--solid' : '', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{dot && <span className="ez-badge__dot"></span>}{children}</span>;
}
