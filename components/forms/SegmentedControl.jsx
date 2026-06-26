import React from 'react';

const EZ_SEG_CSS = `
.ez-seg{display:inline-flex;background:var(--ground-2);border-radius:var(--r-pill);padding:4px;gap:2px;box-shadow:var(--edge);font-family:var(--font-ui);}
.ez-seg--box{border-radius:var(--r-sm);}
.ez-seg--full{display:flex;width:100%;}
.ez-seg__btn{flex:1;border:0;background:transparent;cursor:pointer;font-family:var(--font-ui);font-weight:600;font-size:13px;
  padding:7px 16px;border-radius:var(--r-pill);color:var(--ink-2);white-space:nowrap;transition:color .15s,background .2s,box-shadow .2s;}
.ez-seg--box .ez-seg__btn{border-radius:calc(var(--r-sm) - 4px);}
.ez-seg__btn:hover{color:var(--ink);}
.ez-seg__btn--on{background:var(--card);color:var(--ink);box-shadow:var(--shadow-sm);}
.ez-seg__btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Segmented control — pick one of a few short options (e.g. 设计 / 开发 / 预览). */
export function SegmentedControl({
  options = [], value, onChange, shape = 'pill', full = false, className = '', ...rest
}) {
  ensureStyle('ez-seg-css', EZ_SEG_CSS);
  const items = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const cls = ['ez-seg', `ez-seg--${shape}`, full ? 'ez-seg--full' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="tablist" {...rest}>
      {items.map((it) => (
        <button key={it.value} role="tab" aria-selected={value === it.value}
                className={['ez-seg__btn', value === it.value ? 'ez-seg__btn--on' : ''].filter(Boolean).join(' ')}
                onClick={() => onChange && onChange(it.value)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}
