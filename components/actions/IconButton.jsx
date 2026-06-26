import React from 'react';

const EZ_ICONBTN_CSS = `
.ez-iconbtn{font-family:var(--font-ui);border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;
  color:var(--ink-2);background:transparent;border-radius:var(--r-pill);
  transition:transform .2s var(--ease-out),background .2s,color .2s;}
.ez-iconbtn--sm{width:32px;height:32px;font-size:15px;}
.ez-iconbtn--md{width:40px;height:40px;font-size:18px;}
.ez-iconbtn--lg{width:48px;height:48px;font-size:21px;}
.ez-iconbtn:hover{background:var(--ground-2);color:var(--ink);}
.ez-iconbtn--solid{background:var(--card);box-shadow:var(--shadow-sm);color:var(--accent);}
.ez-iconbtn--solid:hover{transform:translateY(-1px);background:var(--card);}
.ez-iconbtn--accent{background:var(--accent);color:var(--on-accent);box-shadow:var(--shadow-accent);}
.ez-iconbtn--accent:hover{transform:translateY(-1px);background:var(--accent-hover);}
.ez-iconbtn:active{transform:scale(.93);}
.ez-iconbtn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
.ez-iconbtn:disabled{opacity:.42;cursor:not-allowed;box-shadow:none;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Square icon-only button. `variant` plain | solid (floating) | accent. */
export function IconButton({
  variant = 'plain', size = 'md', label, className = '', children, ...rest
}) {
  ensureStyle('ez-iconbtn-css', EZ_ICONBTN_CSS);
  const cls = ['ez-iconbtn', `ez-iconbtn--${variant}`, `ez-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
