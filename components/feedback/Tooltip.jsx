import React from 'react';

const EZ_TOOLTIP_CSS = `
.ez-tooltip{position:relative;display:inline-flex;}
.ez-tooltip__pop{position:absolute;z-index:50;background:var(--ink);color:var(--card);font-family:var(--font-ui);font-weight:500;
  font-size:12px;line-height:1.3;padding:7px 11px;border-radius:8px;white-space:nowrap;pointer-events:none;
  opacity:0;transform:translateY(4px);transition:opacity .15s,transform .15s var(--ease-out);box-shadow:var(--shadow-sm);}
.ez-tooltip:hover .ez-tooltip__pop,.ez-tooltip:focus-within .ez-tooltip__pop{opacity:1;transform:translateY(0);}
.ez-tooltip__pop::after{content:"";position:absolute;width:8px;height:8px;background:var(--ink);transform:rotate(45deg);}
.ez-tt-top{bottom:calc(100% + 9px);left:50%;transform:translateX(-50%) translateY(4px);}
.ez-tooltip:hover .ez-tt-top,.ez-tooltip:focus-within .ez-tt-top{transform:translateX(-50%) translateY(0);}
.ez-tt-top::after{top:100%;left:50%;margin:-4px 0 0 -4px;}
.ez-tt-bottom{top:calc(100% + 9px);left:50%;transform:translateX(-50%) translateY(-4px);}
.ez-tooltip:hover .ez-tt-bottom,.ez-tooltip:focus-within .ez-tt-bottom{transform:translateX(-50%) translateY(0);}
.ez-tt-bottom::after{bottom:100%;left:50%;margin:0 0 -4px -4px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

/** Hover/focus tooltip — dark ink bubble. CSS-driven; wrap any trigger. */
export function Tooltip({ label, placement = 'top', className = '', children, ...rest }) {
  ensureStyle('ez-tooltip-css', EZ_TOOLTIP_CSS);
  return (
    <span className={['ez-tooltip', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      <span className={`ez-tooltip__pop ez-tt-${placement}`} role="tooltip">{label}</span>
    </span>
  );
}
