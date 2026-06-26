import React from 'react';

const EZ_TABS_CSS = `
.ez-tabs{display:flex;gap:4px;font-family:var(--font-ui);}
.ez-tabs--underline{gap:24px;border-bottom:1px solid var(--line);}
.ez-tab{border:0;background:transparent;cursor:pointer;font-family:var(--font-ui);font-weight:600;font-size:14px;
  color:var(--ink-3);display:inline-flex;align-items:center;gap:8px;transition:color .15s;}
.ez-tab:hover{color:var(--ink-2);}
.ez-tab__count{font-family:var(--font-mono);font-size:11px;background:var(--ground-2);color:var(--ink-3);padding:2px 7px;border-radius:999px;}
/* underline */
.ez-tabs--underline .ez-tab{padding:0 0 14px;position:relative;}
.ez-tabs--underline .ez-tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2.5px;border-radius:3px;background:var(--accent);
  transform:scaleX(0);transition:transform .25s var(--ease-out);}
.ez-tabs--underline .ez-tab--on{color:var(--ink);}
.ez-tabs--underline .ez-tab--on::after{transform:scaleX(1);}
.ez-tabs--underline .ez-tab--on .ez-tab__count{background:var(--blue-wash);color:var(--blue-deep);}
/* pill */
.ez-tabs--pill .ez-tab{padding:9px 16px;border-radius:var(--r-pill);}
.ez-tabs--pill .ez-tab--on{background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-tab:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;border-radius:var(--r-sm);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Tab bar — `underline` (default) or `pill`. Items can carry an icon and a count. */
export function Tabs({ items = [], value, onChange, variant = 'underline', className = '', ...rest }) {
  ensureStyle('ez-tabs-css', EZ_TABS_CSS);
  const norm = items.map((it) => (typeof it === 'string' ? { value: it, label: it } : it));
  const cls = ['ez-tabs', `ez-tabs--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="tablist" {...rest}>
      {norm.map((it) => (
        <button key={it.value} role="tab" aria-selected={value === it.value}
                className={['ez-tab', value === it.value ? 'ez-tab--on' : ''].filter(Boolean).join(' ')}
                onClick={() => onChange && onChange(it.value)}>
          {it.icon}{it.label}
          {it.count != null && <span className="ez-tab__count">{it.count}</span>}
        </button>
      ))}
    </div>
  );
}
