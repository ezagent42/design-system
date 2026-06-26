import React from 'react';

const EZ_APPICON_CSS = `
.ez-appicon{position:relative;display:inline-flex;align-items:center;justify-content:center;flex:none;}
/* ---- container sizes ---- */
.ez-appicon--sm{width:34px;height:34px;}
.ez-appicon--md{width:54px;height:54px;}
.ez-appicon--lg{width:74px;height:74px;}
/* ---- glyph sizing per variant ---- */
.ez-appicon__glyph{position:relative;z-index:2;display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%;}
.ez-appicon__glyph svg{width:52%;height:52%;}
.ez-appicon--bare .ez-appicon__glyph svg{width:74%;height:74%;}
.ez-appicon--solid .ez-appicon__glyph svg{width:46%;height:46%;}
.ez-appicon--frost .ez-appicon__glyph svg{width:48%;height:48%;}

/* ============ per-color brand variables (theme-aware) ============
   --ez-brand        : the fill base color
   --ez-brand-glyph  : the glyph color for brand-colored variants (soft/glass/bare),
                       deepened for light hues in LIGHT mode, bright in dark mode */
.ez-appicon--c-blue    { --ez-brand:var(--blue);    --ez-brand-glyph:var(--blue); }
.ez-appicon--c-blueink { --ez-brand:var(--blueink); --ez-brand-glyph:var(--blueink); }
.ez-appicon--c-red     { --ez-brand:var(--red);     --ez-brand-glyph:var(--red); }
.ez-appicon--c-jade    { --ez-brand:var(--jade);    --ez-brand-glyph:var(--jade); }
.ez-appicon--c-ink     { --ez-brand:var(--ink);     --ez-brand-glyph:var(--ink); }
.ez-appicon--c-yellow  { --ez-brand:var(--yellow);  --ez-brand-glyph:#C99A00; }
.ez-appicon--c-orange  { --ez-brand:var(--orange);  --ez-brand-glyph:#D96E00; }
:root[data-theme="dark"] .ez-appicon--c-yellow { --ez-brand-glyph:var(--yellow); }
:root[data-theme="dark"] .ez-appicon--c-orange { --ez-brand-glyph:var(--orange); }

/* ---- solid: full color fill, contrast glyph ---- */
.ez-appicon--solid{border-radius:var(--r-icon);background:var(--ez-brand);
  box-shadow:0 10px 22px -10px rgba(15,15,15,.4);color:#fff;}
.ez-appicon--solid.ez-appicon--sm{border-radius:11px;}
.ez-appicon--solid.ez-appicon--lg{border-radius:22px;}

/* ---- frost: solid-style frosted glass — saturated translucent color + white glyph + luminous edge ---- */
.ez-appicon--frost{border-radius:var(--r-icon);color:#fff;
  background:color-mix(in srgb, var(--ez-brand) 88%, transparent);
  backdrop-filter:blur(8px) saturate(1.3);-webkit-backdrop-filter:blur(8px) saturate(1.3);
  box-shadow:inset 0 1px 1px rgba(255,255,255,.55), inset 0 0 0 1px rgba(255,255,255,.22),
    0 10px 22px -10px color-mix(in srgb, var(--ez-brand) 60%, transparent);}
.ez-appicon--frost.ez-appicon--sm{border-radius:11px;}
.ez-appicon--frost.ez-appicon--lg{border-radius:22px;}

/* ---- soft: opaque same-color wash + deep brand glyph (best on light surfaces) ---- */
.ez-appicon--soft{border-radius:var(--r-icon);color:var(--ez-brand-glyph);
  background:color-mix(in srgb, var(--ez-brand) 17%, var(--card));
  box-shadow:0 5px 14px -10px rgba(15,15,15,.45);}
.ez-appicon--soft.ez-appicon--sm{border-radius:11px;}
.ez-appicon--soft.ez-appicon--lg{border-radius:22px;}

/* ---- glass: brand glyph on same-color frosted square (best over color/imagery) ---- */
.ez-appicon--glass{border-radius:13px;color:var(--ez-brand-glyph);
  background:color-mix(in srgb, var(--ez-brand) 15%, transparent);
  backdrop-filter:blur(10px) saturate(1.4);-webkit-backdrop-filter:blur(10px) saturate(1.4);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.7), 0 6px 16px -9px rgba(15,15,15,.35);}
.ez-appicon--glass.ez-appicon--md{border-radius:16px;}
.ez-appicon--glass.ez-appicon--lg{border-radius:21px;}

/* ---- bare: brand glyph only ---- */
.ez-appicon--bare{background:transparent;color:var(--ez-brand-glyph);}

/* ============ DARK MODE — brand colors brighten, so flip glyph + retune fills ============ */
/* white glyph reads poorly on brightened colors → use a deep ink glyph */
:root[data-theme="dark"] .ez-appicon--solid,
:root[data-theme="dark"] .ez-appicon--frost{color:#15131C;}
/* yellow fill is light in BOTH themes → always a dark glyph */
.ez-appicon--solid.ez-appicon--ink,
.ez-appicon--frost.ez-appicon--ink,
:root[data-theme="dark"] .ez-appicon--solid.ez-appicon--ink,
:root[data-theme="dark"] .ez-appicon--frost.ez-appicon--ink{color:#2E2400;}
/* soft: lift the wash a touch on near-black so it stays visible */
:root[data-theme="dark"] .ez-appicon--soft{
  background:color-mix(in srgb, var(--ez-brand) 26%, var(--card));
  box-shadow:0 6px 16px -10px rgba(0,0,0,.7);}
/* frost: gentler inner highlight on dark */
:root[data-theme="dark"] .ez-appicon--frost{
  box-shadow:inset 0 1px 1px rgba(255,255,255,.35), inset 0 0 0 1px rgba(255,255,255,.14),
    0 10px 22px -10px color-mix(in srgb, var(--ez-brand) 50%, transparent);}
/* glass: edge from light tint instead of white border on dark */
:root[data-theme="dark"] .ez-appicon--glass{
  box-shadow:inset 0 0 0 1px rgba(244,242,236,.18), 0 6px 16px -9px rgba(0,0,0,.6);}

/* ---- badge ---- */
.ez-appicon__badge{position:absolute;top:-7px;right:-7px;min-width:20px;height:20px;border-radius:999px;background:var(--red);
  color:#fff;font-family:var(--font-ui);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;
  padding:0 5px;box-shadow:0 4px 10px -3px rgba(216,24,48,.55);border:2px solid var(--card);z-index:3;}
`;

function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style'); s.id = id; s.textContent = css;
  document.head.appendChild(s);
}

const NAMED = ['red', 'blueink', 'blue', 'yellow', 'jade', 'orange', 'ink'];
// fills whose light tint needs a dark glyph in solid/frost (white would wash out)
const LIGHT_FILL = ['yellow'];

/**
 * Product/app icon. `variant`:
 *  - 'glass' (default) — brand-color glyph on a same-color frosted square (best over color/imagery)
 *  - 'frost' — white glyph on a saturated, translucent frosted color square (solid punch + glass glow)
 *  - 'soft'  — deep brand glyph on an opaque same-color wash square (best on light/white surfaces)
 *  - 'solid' — white (or dark) glyph on a solid color squircle
 *  - 'bare'  — brand-color glyph only, no container
 * All variants are theme-aware: glyph contrast and fills retune automatically under data-theme="dark".
 */
export function AppIcon({ color = 'blue', size = 'md', variant = 'glass', glyph, badge, className = '', style, ...rest }) {
  ensureStyle('ez-appicon-css', EZ_APPICON_CSS);
  const named = NAMED.includes(color);
  const inkGlyph = LIGHT_FILL.includes(color);

  // Named colors get a CSS class that wires the theme-aware brand variables.
  // Arbitrary CSS colors set the variables inline (no per-theme deepening available).
  let boxStyle = { ...style };
  if (!named) {
    boxStyle = { '--ez-brand': color, '--ez-brand-glyph': color, ...boxStyle };
  }

  const cls = [
    'ez-appicon', `ez-appicon--${variant}`, `ez-appicon--${size}`,
    named ? `ez-appicon--c-${color}` : 'ez-appicon--c-custom',
    inkGlyph ? 'ez-appicon--ink' : '', className,
  ].filter(Boolean).join(' ');

  return (
    <span className={cls} style={boxStyle} {...rest}>
      <span className="ez-appicon__glyph">{glyph}</span>
      {badge != null && badge !== false && <span className="ez-appicon__badge">{badge}</span>}
    </span>
  );
}
