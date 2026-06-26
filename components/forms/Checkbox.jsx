import React from 'react';

const EZ_CHECK_CSS = `
.ez-check{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-ui);cursor:pointer;user-select:none;}
.ez-check input{position:absolute;opacity:0;width:0;height:0;}
.ez-check__box{width:22px;height:22px;border-radius:7px;background:var(--ground-2);box-shadow:var(--edge);
  display:inline-flex;align-items:center;justify-content:center;flex:none;transition:background .18s,box-shadow .18s;}
.ez-check__box svg{width:14px;height:14px;color:#fff;opacity:0;transform:scale(.6);transition:opacity .18s,transform .18s var(--ease-out);}
.ez-check--on .ez-check__box{background:var(--accent);box-shadow:none;}
.ez-check--on .ez-check__box svg{opacity:1;transform:scale(1);}
.ez-check__label{font-size:14px;font-weight:500;color:var(--ink);}
.ez-check--disabled{opacity:.45;cursor:not-allowed;}
.ez-check:focus-within .ez-check__box{outline:3px solid var(--focus-ring);outline-offset:2px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Checkbox — square, fills cobalt with a check when on. */
export function Checkbox({
  checked = false, onChange, label, disabled = false, className = '', ...rest
}) {
  ensureStyle('ez-check-css', EZ_CHECK_CSS);
  const cls = ['ez-check', checked ? 'ez-check--on' : '', disabled ? 'ez-check--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" checked={checked} disabled={disabled}
             onChange={(e) => onChange && onChange(e.target.checked, e)} {...rest} />
      <span className="ez-check__box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      {label && <span className="ez-check__label">{label}</span>}
    </label>
  );
}
