import React from 'react';

const EZ_GLASS_CSS = `
.ez-glass{backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);
  border-radius:18px;padding:14px 16px;position:relative;}
.ez-glass--light{background:rgba(255,255,255,.55);box-shadow:0 20px 40px -16px rgba(15,15,15,.2),inset 0 0 0 1px rgba(255,255,255,.65);color:var(--ink);}
.ez-glass--dark{background:rgba(255,255,255,.15);box-shadow:inset 0 0 0 1px rgba(255,255,255,.32);color:#fff;}
:root[data-theme="dark"] .ez-glass--light{background:rgba(42,41,54,.5);box-shadow:0 20px 40px -16px rgba(0,0,0,.6),inset 0 0 0 1px rgba(244,242,236,.13);}
.ez-glass--chip{padding:8px 13px;border-radius:11px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.02em;display:inline-flex;align-items:center;}
.ez-glass--blur9{backdrop-filter:blur(9px) saturate(1.25);-webkit-backdrop-filter:blur(9px) saturate(1.25);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Frosted-glass (毛玻璃) surface that floats over color. `tone` light | dark. */
export function GlassPanel({ tone = 'light', chip = false, soft = false, className = '', style, children, ...rest }) {
  ensureStyle('ez-glass-css', EZ_GLASS_CSS);
  const cls = ['ez-glass', `ez-glass--${tone}`, chip ? 'ez-glass--chip' : '', soft ? 'ez-glass--blur9' : '', className].filter(Boolean).join(' ');
  return <div className={cls} style={style} {...rest}>{children}</div>;
}
