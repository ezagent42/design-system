import React from 'react';

const EZ_INPUT_CSS = `
.ez-field{display:inline-flex;flex-direction:column;gap:7px;font-family:var(--font-ui);}
.ez-field--full{display:flex;width:100%;}
.ez-field__label{font-weight:600;font-size:13px;color:var(--ink);}
.ez-input{display:flex;align-items:center;gap:10px;background:var(--ground-2);box-shadow:var(--edge);
  color:var(--ink);font-family:var(--font-ui);font-size:14px;transition:box-shadow .2s,background .2s;}
.ez-input--pill{border-radius:var(--r-pill);padding:12px 18px;}
.ez-input--box{border-radius:var(--r-sm);padding:11px 14px;}
.ez-input:focus-within{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus-ring);background:var(--card);}
.ez-input__icon{display:inline-flex;color:var(--ink-3);flex:none;}
.ez-input input{all:unset;flex:1;min-width:0;color:var(--ink);font-family:var(--font-ui);font-size:14px;}
.ez-input input::placeholder{color:var(--ink-3);}
.ez-input--invalid{box-shadow:inset 0 0 0 1px var(--danger);}
.ez-input--invalid:focus-within{box-shadow:inset 0 0 0 1px var(--danger),0 0 0 3px rgba(216,24,48,.22);}
.ez-input--disabled{opacity:.5;pointer-events:none;}
.ez-field__hint{font-size:12px;color:var(--ink-3);}
.ez-field__hint--err{color:var(--danger-text);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Text input with optional label, leading icon, and validation hint. */
export function Input({
  label, shape = 'pill', iconLeft = null, hint, invalid = false,
  disabled = false, full = false, className = '', id, ...rest
}) {
  ensureStyle('ez-input-css', EZ_INPUT_CSS);
  const fid = id || (label ? 'ez-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <label htmlFor={fid} className={['ez-field', full ? 'ez-field--full' : '', className].filter(Boolean).join(' ')}>
      {label && <span className="ez-field__label">{label}</span>}
      <span className={['ez-input', `ez-input--${shape}`, invalid ? 'ez-input--invalid' : '', disabled ? 'ez-input--disabled' : ''].filter(Boolean).join(' ')}>
        {iconLeft && <span className="ez-input__icon">{iconLeft}</span>}
        <input id={fid} disabled={disabled} aria-invalid={invalid || undefined} {...rest} />
      </span>
      {hint && <span className={['ez-field__hint', invalid ? 'ez-field__hint--err' : ''].filter(Boolean).join(' ')}>{hint}</span>}
    </label>
  );
}
