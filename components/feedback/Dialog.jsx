import React from 'react';

const EZ_DIALOG_CSS = `
.ez-dialog__scrim{position:fixed;inset:0;background:rgba(15,15,15,.32);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
  display:flex;align-items:center;justify-content:center;padding:24px;z-index:1000;animation:ez-dlg-fade .2s ease-out;}
.ez-dialog{background:var(--card);border-radius:var(--r-lg);box-shadow:var(--shadow-card);width:100%;max-width:480px;
  padding:28px 30px;position:relative;animation:ez-dlg-pop .3s var(--ease-out);}
.ez-dialog__close{position:absolute;top:18px;right:18px;border:0;background:transparent;cursor:pointer;color:var(--ink-3);
  width:34px;height:34px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;transition:background .15s,color .15s;}
.ez-dialog__close:hover{background:var(--ground-2);color:var(--ink);}
.ez-dialog__close svg{width:18px;height:18px;}
.ez-dialog__title{font-family:var(--font-cn);font-weight:600;font-size:24px;letter-spacing:.01em;color:var(--ink);margin:0 36px 8px 0;}
.ez-dialog__body{font-size:15px;line-height:1.6;color:var(--ink-2);}
.ez-dialog__footer{display:flex;gap:12px;justify-content:flex-end;margin-top:26px;}
@keyframes ez-dlg-fade{from{opacity:0}to{opacity:1}}
@keyframes ez-dlg-pop{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.ez-dialog,.ez-dialog__scrim{animation:none}}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Modal dialog — frosted scrim, floating card, optional title & footer. Controlled via `open`. */
export function Dialog({ open = false, onClose, title, footer, className = '', children, ...rest }) {
  ensureStyle('ez-dialog-css', EZ_DIALOG_CSS);
  if (!open) return null;
  return (
    <div className="ez-dialog__scrim" onClick={onClose}>
      <div className={['ez-dialog', className].filter(Boolean).join(' ')} role="dialog" aria-modal="true"
           onClick={(e) => e.stopPropagation()} {...rest}>
        {onClose && (
          <button className="ez-dialog__close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        )}
        {title && <h2 className="ez-dialog__title">{title}</h2>}
        <div className="ez-dialog__body">{children}</div>
        {footer && <div className="ez-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
