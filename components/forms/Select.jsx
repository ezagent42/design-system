import React from 'react';

const EZ_SELECT_CSS = `
.ez-select{position:relative;display:inline-flex;align-items:center;background:var(--ground-2);box-shadow:var(--edge);
  border-radius:var(--r-pill);font-family:var(--font-ui);transition:box-shadow .2s,background .2s;}
.ez-select--box{border-radius:var(--r-sm);}
.ez-select--full{display:flex;width:100%;}
.ez-select:focus-within{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus-ring);background:var(--card);}
.ez-select select{all:unset;flex:1;padding:12px 40px 12px 18px;color:var(--ink);font-family:var(--font-ui);font-size:14px;cursor:pointer;}
.ez-select--box select{padding:11px 38px 11px 14px;}
.ez-select__chev{position:absolute;right:15px;display:inline-flex;color:var(--ink-3);pointer-events:none;}
.ez-select--disabled{opacity:.5;pointer-events:none;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

const Chevron = () => (
  <svg className="ez-select__chev" width="16" height="16" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

/** Native select wrapped in the Ezagent field surface. */
export function Select({
  options = [], shape = 'pill', full = false, disabled = false, value, onChange, className = '', children, ...rest
}) {
  ensureStyle('ez-select-css', EZ_SELECT_CSS);
  const cls = ['ez-select', `ez-select--${shape}`, full ? 'ez-select--full' : '', disabled ? 'ez-select--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls}>
      <select value={value} onChange={onChange} disabled={disabled} {...rest}>
        {children || options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <Chevron />
    </span>
  );
}
