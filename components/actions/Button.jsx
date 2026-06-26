import React from 'react';

const EZ_BTN_CSS = `
.ez-btn{font-family:var(--font-ui);font-weight:600;border:0;cursor:pointer;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;justify-content:center;gap:9px;white-space:nowrap;text-decoration:none;
  transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out),background .2s,filter .2s;}
.ez-btn--sm{font-size:13px;padding:9px 16px;}
.ez-btn--md{font-size:15px;padding:13px 24px;}
.ez-btn--lg{font-size:16px;padding:16px 30px;}
.ez-btn--full{width:100%;}
.ez-btn--primary{background:var(--accent);color:var(--on-accent);box-shadow:var(--shadow-accent);}
.ez-btn--primary:hover{transform:translateY(-2px);background:var(--accent-hover);box-shadow:0 16px 32px -8px rgba(11,92,255,.5);}
.ez-btn--secondary{background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-btn--secondary:hover{background:var(--ground-hover);transform:translateY(-1px);}
.ez-btn--ghost{background:transparent;color:var(--ink);}
.ez-btn--ghost:hover{background:var(--ground-2);}
.ez-btn--danger{background:var(--danger);color:#fff;box-shadow:0 10px 24px -8px rgba(216,24,48,.45);}
.ez-btn--danger:hover{transform:translateY(-2px);filter:brightness(1.06);}
.ez-btn:active{transform:translateY(0) scale(.98);}
.ez-btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
.ez-btn--disabled,.ez-btn:disabled{opacity:.42;cursor:not-allowed;box-shadow:none;transform:none;filter:none;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Ezagent primary button — pill, lifts on hover. Cobalt is the action color.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-button-css', EZ_BTN_CSS);
  const Tag = as;
  const cls = [
    'ez-btn', `ez-btn--${variant}`, `ez-btn--${size}`,
    full ? 'ez-btn--full' : '', disabled ? 'ez-btn--disabled' : '', className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} disabled={Tag === 'button' ? disabled : undefined}
         aria-disabled={disabled || undefined} {...rest}>
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
