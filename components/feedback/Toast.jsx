import React from 'react';

const EZ_TOAST_CSS = `
.ez-toast{display:inline-flex;align-items:flex-start;gap:12px;background:var(--card);border-radius:var(--r-md);
  box-shadow:var(--shadow-card);padding:14px 16px;font-family:var(--font-ui);max-width:380px;position:relative;}
.ez-toast__icon{width:30px;height:30px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;flex:none;color:#fff;}
.ez-toast__icon svg{width:17px;height:17px;}
.ez-toast--info .ez-toast__icon{background:var(--accent);}
.ez-toast--success .ez-toast__icon{background:var(--success);}
.ez-toast--danger .ez-toast__icon{background:var(--danger);}
.ez-toast--warning .ez-toast__icon{background:var(--warning);}
.ez-toast__body{padding-top:2px;}
.ez-toast__title{font-weight:600;font-size:14px;color:var(--ink);}
.ez-toast__msg{font-size:13px;color:var(--ink-2);margin-top:2px;line-height:1.5;}
.ez-toast__x{border:0;background:transparent;cursor:pointer;color:var(--ink-3);padding:2px;margin:-2px -4px 0 4px;border-radius:999px;flex:none;}
.ez-toast__x:hover{color:var(--ink);}
.ez-toast__x svg{width:15px;height:15px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

const ICONS = {
  info: <path d="M12 16v-4M12 8h.01" />,
  success: <path d="M20 6 9 17l-5-5" />,
  danger: <path d="M12 8v5M12 17h.01" />,
  warning: <path d="M12 9v4M12 17h.01" />,
};

/** Notification toast — floating card with a colored status icon. Presentational. */
export function Toast({ tone = 'info', title, children, onClose, className = '', ...rest }) {
  ensureStyle('ez-toast-css', EZ_TOAST_CSS);
  return (
    <div className={['ez-toast', `ez-toast--${tone}`, className].filter(Boolean).join(' ')} role="status" {...rest}>
      <span className="ez-toast__icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">{ICONS[tone]}</svg>
      </span>
      <div className="ez-toast__body">
        {title && <div className="ez-toast__title">{title}</div>}
        {children && <div className="ez-toast__msg">{children}</div>}
      </div>
      {onClose && (
        <button className="ez-toast__x" aria-label="Dismiss" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
