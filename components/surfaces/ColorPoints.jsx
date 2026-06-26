import React from 'react';

const EZ_POINTS_CSS = `
.ez-points{position:relative;border-radius:var(--r-md);background:var(--ground-2);box-shadow:var(--edge);overflow:hidden;}
.ez-points__dot{position:absolute;border-radius:999px;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

const DEFAULT_COLORS = ['#D81830', '#0048A8', '#FFD400', '#0FA06E', '#0B5CFF', '#FF8A1E'];

// tiny seeded PRNG so the scatter is stable across renders
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 点彩 — scattered solid color-points over a soft surface. The system's signature rhythm. */
export function ColorPoints({ count = 32, height = 150, colors = DEFAULT_COLORS, seed = 7, bare = false, className = '', style, children, ...rest }) {
  ensureStyle('ez-points-css', EZ_POINTS_CSS);
  const rnd = mulberry32(seed);
  const dots = Array.from({ length: count }, () => {
    const s = 5 + rnd() * 12;
    const c = colors[(rnd() * colors.length) | 0];
    return {
      left: (rnd() * 90 + 3).toFixed(2) + '%',
      top: (rnd() * 80 + 6).toFixed(2) + '%',
      size: s.toFixed(1) + 'px',
      bg: c,
      shadow: `0 2px 7px -5px ${c}`,
      opacity: (0.32 + rnd() * 0.3).toFixed(2),
    };
  });
  return (
    <div className={['ez-points', className].filter(Boolean).join(' ')}
         style={{ height, ...(bare ? { background: 'transparent', boxShadow: 'none' } : null), ...style }} {...rest}>
      {dots.map((d, i) => (
        <span key={i} className="ez-points__dot"
              style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: d.bg, boxShadow: d.shadow, opacity: d.opacity }} />
      ))}
      {children}
    </div>
  );
}
