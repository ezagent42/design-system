import React from 'react';

const EZ_RADIO_CSS = `
.ez-radio{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-ui);cursor:pointer;user-select:none;}
.ez-radio input{position:absolute;opacity:0;width:0;height:0;}
.ez-radio__dot{width:22px;height:22px;border-radius:999px;background:var(--ground-2);box-shadow:var(--edge);
  display:inline-flex;align-items:center;justify-content:center;flex:none;transition:box-shadow .18s;}
.ez-radio__dot::after{content:"";width:10px;height:10px;border-radius:999px;background:#fff;opacity:0;transform:scale(.4);transition:opacity .18s,transform .18s var(--ease-out);}
.ez-radio--on .ez-radio__dot{background:var(--accent);box-shadow:none;}
.ez-radio--on .ez-radio__dot::after{opacity:1;transform:scale(1);}
.ez-radio__label{font-size:14px;font-weight:500;color:var(--ink);}
.ez-radio--disabled{opacity:.45;cursor:not-allowed;}
.ez-radio:focus-within .ez-radio__dot{outline:3px solid var(--focus-ring);outline-offset:2px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Radio button — single choice within a `name` group. */
export function Radio({
  checked = false, onChange, label, name, value, disabled = false, className = '', ...rest
}) {
  ensureStyle('ez-radio-css', EZ_RADIO_CSS);
  const cls = ['ez-radio', checked ? 'ez-radio--on' : '', disabled ? 'ez-radio--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled}
             onChange={(e) => onChange && onChange(value, e)} {...rest} />
      <span className="ez-radio__dot"></span>
      {label && <span className="ez-radio__label">{label}</span>}
    </label>
  );
}
