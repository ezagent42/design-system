import React from 'react';

const EZ_TOGGLE_CSS = `
.ez-toggle{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-ui);cursor:pointer;user-select:none;}
.ez-toggle__track{width:50px;height:30px;border-radius:999px;background:var(--ink-4);position:relative;
  box-shadow:inset 0 1px 3px rgba(0,0,0,.18);transition:background .25s var(--ease-out);flex:none;}
.ez-toggle__track::after{content:"";position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:999px;
  background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.25);transition:transform .25s var(--ease-out);}
.ez-toggle--on .ez-toggle__track{background:var(--accent);}
.ez-toggle--on .ez-toggle__track::after{transform:translateX(20px);}
.ez-toggle--sm .ez-toggle__track{width:40px;height:24px;}
.ez-toggle--sm .ez-toggle__track::after{width:18px;height:18px;}
.ez-toggle--sm.ez-toggle--on .ez-toggle__track::after{transform:translateX(16px);}
.ez-toggle__label{font-size:14px;font-weight:500;color:var(--ink);}
.ez-toggle--disabled{opacity:.45;cursor:not-allowed;}
.ez-toggle input{position:absolute;opacity:0;width:0;height:0;}
.ez-toggle:focus-within .ez-toggle__track{outline:3px solid var(--focus-ring);outline-offset:2px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** On/off switch — track turns cobalt when on. */
export function Toggle({
  checked = false, onChange, label, size = 'md', disabled = false, className = '', ...rest
}) {
  ensureStyle('ez-toggle-css', EZ_TOGGLE_CSS);
  const cls = ['ez-toggle', checked ? 'ez-toggle--on' : '', `ez-toggle--${size}`, disabled ? 'ez-toggle--disabled' : '', className].filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" role="switch" checked={checked} disabled={disabled}
             onChange={(e) => onChange && onChange(e.target.checked, e)} {...rest} />
      <span className="ez-toggle__track"></span>
      {label && <span className="ez-toggle__label">{label}</span>}
    </label>
  );
}
