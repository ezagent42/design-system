import React from 'react';

const EZ_TAG_CSS = `
.ez-tag{font-family:var(--font-ui);font-weight:500;font-size:13px;padding:6px 12px;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;gap:8px;background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-tag__dot{width:9px;height:9px;border-radius:999px;flex:none;}
.ez-tag__x{border:0;background:transparent;cursor:pointer;color:var(--ink-3);display:inline-flex;align-items:center;
  padding:0;margin:-2px -4px -2px 0;border-radius:999px;transition:color .15s,background .15s;}
.ez-tag__x:hover{color:var(--ink);background:var(--ground-hover);}
.ez-tag__x svg{width:14px;height:14px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Chip / token with an optional color dot and remove button. */
export function Tag({ color, onRemove, className = '', children, ...rest }) {
  ensureStyle('ez-tag-css', EZ_TAG_CSS);
  return (
    <span className={['ez-tag', className].filter(Boolean).join(' ')} {...rest}>
      {color && <span className="ez-tag__dot" style={{ background: color }}></span>}
      {children}
      {onRemove && (
        <button className="ez-tag__x" aria-label="Remove" onClick={onRemove}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </span>
  );
}
