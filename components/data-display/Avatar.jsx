import React from 'react';

const EZ_AVATAR_CSS = `
.ez-avatar{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;overflow:hidden;
  font-family:var(--font-ui);font-weight:700;color:#fff;flex:none;box-shadow:var(--edge);user-select:none;}
.ez-avatar--sm{width:28px;height:28px;font-size:11px;}
.ez-avatar--md{width:38px;height:38px;font-size:14px;}
.ez-avatar--lg{width:52px;height:52px;font-size:18px;}
.ez-avatar img{width:100%;height:100%;object-fit:cover;}
.ez-avatar--squircle{border-radius:var(--r-icon);}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

const PALETTE = ['var(--red)', 'var(--blueink)', 'var(--jade)', 'var(--blue)', 'var(--orange)'];
function pick(seed) {
  let h = 0; for (let i = 0; i < (seed || '').length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Round (or squircle) avatar — image, or initials on a brand color derived from the name. */
export function Avatar({ src, name = '', size = 'md', squircle = false, color, className = '', ...rest }) {
  ensureStyle('ez-avatar-css', EZ_AVATAR_CSS);
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const cls = ['ez-avatar', `ez-avatar--${size}`, squircle ? 'ez-avatar--squircle' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} style={!src ? { background: color || pick(name) } : undefined}
          title={name || undefined} {...rest}>
      {src ? <img src={src} alt={name} /> : (initials || '?')}
    </span>
  );
}
