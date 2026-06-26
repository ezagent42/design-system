import React from 'react';

const EZ_CARD_CSS = `
.ez-card{background:var(--card);border-radius:var(--r-lg);position:relative;}
.ez-card--flat{box-shadow:var(--edge);}
.ez-card--raised{box-shadow:var(--shadow-sm);}
.ez-card--floating{box-shadow:var(--shadow-card);}
.ez-card--pad{padding:30px 32px;}
.ez-card--pad-sm{padding:18px 20px;}
.ez-card--interactive{cursor:pointer;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out);}
.ez-card--interactive:hover{transform:translateY(-3px);box-shadow:var(--shadow-card);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** The signature floating white surface. `elevation` sets the shadow depth. */
export function Card({
  elevation = 'floating', padding = 'md', interactive = false, as = 'div', className = '', children, ...rest
}) {
  ensureStyle('ez-card-css', EZ_CARD_CSS);
  const Tag = as;
  const pad = padding === 'none' ? '' : padding === 'sm' ? 'ez-card--pad-sm' : 'ez-card--pad';
  const cls = ['ez-card', `ez-card--${elevation}`, pad, interactive ? 'ez-card--interactive' : '', className].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
