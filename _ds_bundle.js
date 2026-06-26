/* @ds-bundle: {"format":3,"namespace":"EzagentDesignSystem_b8e92c","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AppIcon","sourcePath":"components/surfaces/AppIcon.jsx"},{"name":"ColorPoints","sourcePath":"components/surfaces/ColorPoints.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c9b908dbe209","components/actions/IconButton.jsx":"23dbb198d40b","components/data-display/Avatar.jsx":"c3f57d63d286","components/data-display/Badge.jsx":"9c3cbebd0203","components/data-display/Card.jsx":"f3f84e8ffa80","components/data-display/Tag.jsx":"9c76c7e35360","components/feedback/Dialog.jsx":"ceab24407930","components/feedback/Toast.jsx":"a67a8db74588","components/feedback/Tooltip.jsx":"4684b71c7944","components/forms/Checkbox.jsx":"1ec0390b9f09","components/forms/Input.jsx":"493702321ded","components/forms/Radio.jsx":"c105a80f85a3","components/forms/SegmentedControl.jsx":"f7d285054781","components/forms/Select.jsx":"e0207d8b1334","components/forms/Toggle.jsx":"42eb1afc628b","components/navigation/Tabs.jsx":"5b6f04436bd3","components/surfaces/AppIcon.jsx":"aab3a04f8703","components/surfaces/ColorPoints.jsx":"d19ff9be29ed","components/surfaces/GlassPanel.jsx":"5349f1df3115","ui_kits/agent-builder/Builder.jsx":"fa076088e6cf","ui_kits/agent-builder/Panels.jsx":"e845c2cc5a4c","ui_kits/agent-console/Login.jsx":"49854bd25cfc","ui_kits/agent-console/Sidebar.jsx":"7f512d174569","ui_kits/agent-console/Workspace.jsx":"5fdbac41112c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EzagentDesignSystem_b8e92c = window.EzagentDesignSystem_b8e92c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_BTN_CSS = `
.ez-btn{font-family:var(--font-ui);font-weight:600;border:0;cursor:pointer;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;justify-content:center;gap:9px;white-space:nowrap;text-decoration:none;
  transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out),background .2s,filter .2s;}
.ez-btn--sm{font-size:13px;padding:9px 16px;}
.ez-btn--md{font-size:15px;padding:13px 24px;}
.ez-btn--lg{font-size:16px;padding:16px 30px;}
.ez-btn--full{width:100%;}
.ez-btn--primary{background:var(--accent);color:var(--on-accent);box-shadow:var(--shadow-accent);}
.ez-btn--primary:hover{transform:translateY(-2px);background:var(--accent-hover);box-shadow:0 16px 32px -8px rgba(11,92,255,.5);}
.ez-btn--secondary{background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-btn--secondary:hover{background:var(--ground-hover);transform:translateY(-1px);}
.ez-btn--ghost{background:transparent;color:var(--ink);}
.ez-btn--ghost:hover{background:var(--ground-2);}
.ez-btn--danger{background:var(--danger);color:#fff;box-shadow:0 10px 24px -8px rgba(216,24,48,.45);}
.ez-btn--danger:hover{transform:translateY(-2px);filter:brightness(1.06);}
.ez-btn:active{transform:translateY(0) scale(.98);}
.ez-btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
.ez-btn--disabled,.ez-btn:disabled{opacity:.42;cursor:not-allowed;box-shadow:none;transform:none;filter:none;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Ezagent primary button — pill, lifts on hover. Cobalt is the action color.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-button-css', EZ_BTN_CSS);
  const Tag = as;
  const cls = ['ez-btn', `ez-btn--${variant}`, `ez-btn--${size}`, full ? 'ez-btn--full' : '', disabled ? 'ez-btn--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_ICONBTN_CSS = `
.ez-iconbtn{font-family:var(--font-ui);border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;
  color:var(--ink-2);background:transparent;border-radius:var(--r-pill);
  transition:transform .2s var(--ease-out),background .2s,color .2s;}
.ez-iconbtn--sm{width:32px;height:32px;font-size:15px;}
.ez-iconbtn--md{width:40px;height:40px;font-size:18px;}
.ez-iconbtn--lg{width:48px;height:48px;font-size:21px;}
.ez-iconbtn:hover{background:var(--ground-2);color:var(--ink);}
.ez-iconbtn--solid{background:var(--card);box-shadow:var(--shadow-sm);color:var(--accent);}
.ez-iconbtn--solid:hover{transform:translateY(-1px);background:var(--card);}
.ez-iconbtn--accent{background:var(--accent);color:var(--on-accent);box-shadow:var(--shadow-accent);}
.ez-iconbtn--accent:hover{transform:translateY(-1px);background:var(--accent-hover);}
.ez-iconbtn:active{transform:scale(.93);}
.ez-iconbtn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
.ez-iconbtn:disabled{opacity:.42;cursor:not-allowed;box-shadow:none;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Square icon-only button. `variant` plain | solid (floating) | accent. */
function IconButton({
  variant = 'plain',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-iconbtn-css', EZ_ICONBTN_CSS);
  const cls = ['ez-iconbtn', `ez-iconbtn--${variant}`, `ez-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const PALETTE = ['var(--red)', 'var(--blueink)', 'var(--jade)', 'var(--blue)', 'var(--orange)'];
function pick(seed) {
  let h = 0;
  for (let i = 0; i < (seed || '').length; i++) h = h * 31 + seed.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Round (or squircle) avatar — image, or initials on a brand color derived from the name. */
function Avatar({
  src,
  name = '',
  size = 'md',
  squircle = false,
  color,
  className = '',
  ...rest
}) {
  ensureStyle('ez-avatar-css', EZ_AVATAR_CSS);
  const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const cls = ['ez-avatar', `ez-avatar--${size}`, squircle ? 'ez-avatar--squircle' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: !src ? {
      background: color || pick(name)
    } : undefined,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_BADGE_CSS = `
.ez-badge{font-family:var(--font-ui);font-weight:600;font-size:12px;line-height:1;padding:6px 12px;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;gap:6px;white-space:nowrap;}
.ez-badge__dot{width:7px;height:7px;border-radius:999px;background:currentColor;}
.ez-badge--info{background:var(--blue-wash);color:var(--blue-deep);}
.ez-badge--success{background:var(--jade-wash);color:var(--jade-deep);}
.ez-badge--danger{background:var(--red-wash);color:var(--red-deep);}
.ez-badge--warning{background:var(--orange-wash);color:#9A5410;}
.ez-badge--neutral{background:var(--ground-2);color:var(--ink-2);}
.ez-badge--solid{color:#fff;}
.ez-badge--solid.ez-badge--info{background:var(--accent);}
.ez-badge--solid.ez-badge--success{background:var(--success);}
.ez-badge--solid.ez-badge--danger{background:var(--danger);}
.ez-badge--solid.ez-badge--warning{background:var(--warning);}
.ez-badge--solid.ez-badge--neutral{background:var(--ink);}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Small status label — soft wash by default, `solid` for emphasis. */
function Badge({
  tone = 'info',
  solid = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-badge-css', EZ_BADGE_CSS);
  const cls = ['ez-badge', `ez-badge--${tone}`, solid ? 'ez-badge--solid' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ez-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_CARD_CSS = `
.ez-card{background:var(--card);border-radius:var(--r-lg);position:relative;}
.ez-card--flat{box-shadow:var(--edge);}
.ez-card--raised{box-shadow:var(--shadow-sm);}
.ez-card--floating{box-shadow:var(--shadow-card);}
.ez-card--pad{padding:30px 32px;}
.ez-card--pad-sm{padding:18px 20px;}
.ez-card--interactive{cursor:pointer;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out);}
.ez-card--interactive:hover{transform:translateY(-3px);box-shadow:var(--shadow-card);}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** The signature floating white surface. `elevation` sets the shadow depth. */
function Card({
  elevation = 'floating',
  padding = 'md',
  interactive = false,
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-card-css', EZ_CARD_CSS);
  const Tag = as;
  const pad = padding === 'none' ? '' : padding === 'sm' ? 'ez-card--pad-sm' : 'ez-card--pad';
  const cls = ['ez-card', `ez-card--${elevation}`, pad, interactive ? 'ez-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_TAG_CSS = `
.ez-tag{font-family:var(--font-ui);font-weight:500;font-size:13px;padding:6px 12px;border-radius:var(--r-pill);
  display:inline-flex;align-items:center;gap:8px;background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-tag__dot{width:9px;height:9px;border-radius:999px;flex:none;}
.ez-tag__x{border:0;background:transparent;cursor:pointer;color:var(--ink-3);display:inline-flex;align-items:center;
  padding:0;margin:-2px -4px -2px 0;border-radius:999px;transition:color .15s,background .15s;}
.ez-tag__x:hover{color:var(--ink);background:var(--ground-hover);}
.ez-tag__x svg{width:14px;height:14px;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Chip / token with an optional color dot and remove button. */
function Tag({
  color,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-tag-css', EZ_TAG_CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ez-tag', className].filter(Boolean).join(' ')
  }, rest), color && /*#__PURE__*/React.createElement("span", {
    className: "ez-tag__dot",
    style: {
      background: color
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "ez-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Modal dialog — frosted scrim, floating card, optional title & footer. Controlled via `open`. */
function Dialog({
  open = false,
  onClose,
  title,
  footer,
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-dialog-css', EZ_DIALOG_CSS);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ez-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['ez-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ez-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))), title && /*#__PURE__*/React.createElement("h2", {
    className: "ez-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ez-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ez-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 17h.01"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })
};

/** Notification toast — floating card with a colored status icon. Presentational. */
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  ensureStyle('ez-toast-css', EZ_TOAST_CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ez-toast', `ez-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ez-toast__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "ez-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "ez-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ez-toast__msg"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ez-toast__x",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Hover/focus tooltip — dark ink bubble. CSS-driven; wrap any trigger. */
function Tooltip({
  label,
  placement = 'top',
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-tooltip-css', EZ_TOOLTIP_CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ez-tooltip', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: `ez-tooltip__pop ez-tt-${placement}`,
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Checkbox — square, fills cobalt with a check when on. */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyle('ez-check-css', EZ_CHECK_CSS);
  const cls = ['ez-check', checked ? 'ez-check--on' : '', disabled ? 'ez-check--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ez-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: "ez-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Text input with optional label, leading icon, and validation hint. */
function Input({
  label,
  shape = 'pill',
  iconLeft = null,
  hint,
  invalid = false,
  disabled = false,
  full = false,
  className = '',
  id,
  ...rest
}) {
  ensureStyle('ez-input-css', EZ_INPUT_CSS);
  const fid = id || (label ? 'ez-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    className: ['ez-field', full ? 'ez-field--full' : '', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ez-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: ['ez-input', `ez-input--${shape}`, invalid ? 'ez-input--invalid' : '', disabled ? 'ez-input--disabled' : ''].filter(Boolean).join(' ')
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ez-input__icon"
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": invalid || undefined
  }, rest))), hint && /*#__PURE__*/React.createElement("span", {
    className: ['ez-field__hint', invalid ? 'ez-field__hint--err' : ''].filter(Boolean).join(' ')
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Radio button — single choice within a `name` group. */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyle('ez-radio-css', EZ_RADIO_CSS);
  const cls = ['ez-radio', checked ? 'ez-radio--on' : '', disabled ? 'ez-radio--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ez-radio__dot"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "ez-radio__label"
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_SEG_CSS = `
.ez-seg{display:inline-flex;background:var(--ground-2);border-radius:var(--r-pill);padding:4px;gap:2px;box-shadow:var(--edge);font-family:var(--font-ui);}
.ez-seg--box{border-radius:var(--r-sm);}
.ez-seg--full{display:flex;width:100%;}
.ez-seg__btn{flex:1;border:0;background:transparent;cursor:pointer;font-family:var(--font-ui);font-weight:600;font-size:13px;
  padding:7px 16px;border-radius:var(--r-pill);color:var(--ink-2);white-space:nowrap;transition:color .15s,background .2s,box-shadow .2s;}
.ez-seg--box .ez-seg__btn{border-radius:calc(var(--r-sm) - 4px);}
.ez-seg__btn:hover{color:var(--ink);}
.ez-seg__btn--on{background:var(--card);color:var(--ink);box-shadow:var(--shadow-sm);}
.ez-seg__btn:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Segmented control — pick one of a few short options (e.g. 设计 / 开发 / 预览). */
function SegmentedControl({
  options = [],
  value,
  onChange,
  shape = 'pill',
  full = false,
  className = '',
  ...rest
}) {
  ensureStyle('ez-seg-css', EZ_SEG_CSS);
  const items = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const cls = ['ez-seg', `ez-seg--${shape}`, full ? 'ez-seg--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: ['ez-seg__btn', value === it.value ? 'ez-seg__btn--on' : ''].filter(Boolean).join(' '),
    onClick: () => onChange && onChange(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_SELECT_CSS = `
.ez-select{position:relative;display:inline-flex;align-items:center;background:var(--ground-2);box-shadow:var(--edge);
  border-radius:var(--r-pill);font-family:var(--font-ui);transition:box-shadow .2s,background .2s;}
.ez-select--box{border-radius:var(--r-sm);}
.ez-select--full{display:flex;width:100%;}
.ez-select:focus-within{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus-ring);background:var(--card);}
.ez-select select{all:unset;flex:1;padding:12px 40px 12px 18px;color:var(--ink);font-family:var(--font-ui);font-size:14px;cursor:pointer;}
.ez-select--box select{padding:11px 38px 11px 14px;}
.ez-select__chev{position:absolute;right:15px;display:inline-flex;color:var(--ink-3);pointer-events:none;}
.ez-select--disabled{opacity:.5;pointer-events:none;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  className: "ez-select__chev",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));

/** Native select wrapped in the Ezagent field surface. */
function Select({
  options = [],
  shape = 'pill',
  full = false,
  disabled = false,
  value,
  onChange,
  className = '',
  children,
  ...rest
}) {
  ensureStyle('ez-select-css', EZ_SELECT_CSS);
  const cls = ['ez-select', `ez-select--${shape}`, full ? 'ez-select--full' : '', disabled ? 'ez-select--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    disabled: disabled
  }, rest), children || options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(Chevron, null));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** On/off switch — track turns cobalt when on. */
function Toggle({
  checked = false,
  onChange,
  label,
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyle('ez-toggle-css', EZ_TOGGLE_CSS);
  const cls = ['ez-toggle', checked ? 'ez-toggle--on' : '', `ez-toggle--${size}`, disabled ? 'ez-toggle--disabled' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("label", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e)
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ez-toggle__track"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "ez-toggle__label"
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_TABS_CSS = `
.ez-tabs{display:flex;gap:4px;font-family:var(--font-ui);}
.ez-tabs--underline{gap:24px;border-bottom:1px solid var(--line);}
.ez-tab{border:0;background:transparent;cursor:pointer;font-family:var(--font-ui);font-weight:600;font-size:14px;
  color:var(--ink-3);display:inline-flex;align-items:center;gap:8px;transition:color .15s;}
.ez-tab:hover{color:var(--ink-2);}
.ez-tab__count{font-family:var(--font-mono);font-size:11px;background:var(--ground-2);color:var(--ink-3);padding:2px 7px;border-radius:999px;}
/* underline */
.ez-tabs--underline .ez-tab{padding:0 0 14px;position:relative;}
.ez-tabs--underline .ez-tab::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2.5px;border-radius:3px;background:var(--accent);
  transform:scaleX(0);transition:transform .25s var(--ease-out);}
.ez-tabs--underline .ez-tab--on{color:var(--ink);}
.ez-tabs--underline .ez-tab--on::after{transform:scaleX(1);}
.ez-tabs--underline .ez-tab--on .ez-tab__count{background:var(--blue-wash);color:var(--blue-deep);}
/* pill */
.ez-tabs--pill .ez-tab{padding:9px 16px;border-radius:var(--r-pill);}
.ez-tabs--pill .ez-tab--on{background:var(--ground-2);color:var(--ink);box-shadow:var(--edge);}
.ez-tab:focus-visible{outline:3px solid var(--focus-ring);outline-offset:2px;border-radius:var(--r-sm);}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Tab bar — `underline` (default) or `pill`. Items can carry an icon and a count. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  ensureStyle('ez-tabs-css', EZ_TABS_CSS);
  const norm = items.map(it => typeof it === 'string' ? {
    value: it,
    label: it
  } : it);
  const cls = ['ez-tabs', `ez-tabs--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), norm.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: ['ez-tab', value === it.value ? 'ez-tab--on' : ''].filter(Boolean).join(' '),
    onClick: () => onChange && onChange(it.value)
  }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "ez-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/AppIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
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
function AppIcon({
  color = 'blue',
  size = 'md',
  variant = 'glass',
  glyph,
  badge,
  className = '',
  style,
  ...rest
}) {
  ensureStyle('ez-appicon-css', EZ_APPICON_CSS);
  const named = NAMED.includes(color);
  const inkGlyph = LIGHT_FILL.includes(color);

  // Named colors get a CSS class that wires the theme-aware brand variables.
  // Arbitrary CSS colors set the variables inline (no per-theme deepening available).
  let boxStyle = {
    ...style
  };
  if (!named) {
    boxStyle = {
      '--ez-brand': color,
      '--ez-brand-glyph': color,
      ...boxStyle
    };
  }
  const cls = ['ez-appicon', `ez-appicon--${variant}`, `ez-appicon--${size}`, named ? `ez-appicon--c-${color}` : 'ez-appicon--c-custom', inkGlyph ? 'ez-appicon--ink' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: boxStyle
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ez-appicon__glyph"
  }, glyph), badge != null && badge !== false && /*#__PURE__*/React.createElement("span", {
    className: "ez-appicon__badge"
  }, badge));
}
Object.assign(__ds_scope, { AppIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/AppIcon.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ColorPoints.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_POINTS_CSS = `
.ez-points{position:relative;border-radius:var(--r-md);background:var(--ground-2);box-shadow:var(--edge);overflow:hidden;}
.ez-points__dot{position:absolute;border-radius:999px;}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
const DEFAULT_COLORS = ['#D81830', '#0048A8', '#FFD400', '#0FA06E', '#0B5CFF', '#FF8A1E'];

// tiny seeded PRNG so the scatter is stable across renders
function mulberry32(a) {
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/** 点彩 — scattered solid color-points over a soft surface. The system's signature rhythm. */
function ColorPoints({
  count = 32,
  height = 150,
  colors = DEFAULT_COLORS,
  seed = 7,
  bare = false,
  className = '',
  style,
  children,
  ...rest
}) {
  ensureStyle('ez-points-css', EZ_POINTS_CSS);
  const rnd = mulberry32(seed);
  const dots = Array.from({
    length: count
  }, () => {
    const s = 5 + rnd() * 12;
    const c = colors[rnd() * colors.length | 0];
    return {
      left: (rnd() * 90 + 3).toFixed(2) + '%',
      top: (rnd() * 80 + 6).toFixed(2) + '%',
      size: s.toFixed(1) + 'px',
      bg: c,
      shadow: `0 2px 7px -5px ${c}`,
      opacity: (0.32 + rnd() * 0.3).toFixed(2)
    };
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ez-points', className].filter(Boolean).join(' '),
    style: {
      height,
      ...(bare ? {
        background: 'transparent',
        boxShadow: 'none'
      } : null),
      ...style
    }
  }, rest), dots.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ez-points__dot",
    style: {
      left: d.left,
      top: d.top,
      width: d.size,
      height: d.size,
      background: d.bg,
      boxShadow: d.shadow,
      opacity: d.opacity
    }
  })), children);
}
Object.assign(__ds_scope, { ColorPoints });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ColorPoints.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EZ_GLASS_CSS = `
.ez-glass{backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);
  border-radius:18px;padding:14px 16px;position:relative;}
.ez-glass--light{background:rgba(255,255,255,.55);box-shadow:0 20px 40px -16px rgba(15,15,15,.2),inset 0 0 0 1px rgba(255,255,255,.65);color:var(--ink);}
.ez-glass--dark{background:rgba(255,255,255,.15);box-shadow:inset 0 0 0 1px rgba(255,255,255,.32);color:#fff;}
:root[data-theme="dark"] .ez-glass--light{background:rgba(42,41,54,.5);box-shadow:0 20px 40px -16px rgba(0,0,0,.6),inset 0 0 0 1px rgba(244,242,236,.13);}
.ez-glass--chip{padding:8px 13px;border-radius:11px;font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.02em;display:inline-flex;align-items:center;}
.ez-glass--blur9{backdrop-filter:blur(9px) saturate(1.25);-webkit-backdrop-filter:blur(9px) saturate(1.25);}
`;
function ensureStyle(id, css) {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}

/** Frosted-glass (毛玻璃) surface that floats over color. `tone` light | dark. */
function GlassPanel({
  tone = 'light',
  chip = false,
  soft = false,
  className = '',
  style,
  children,
  ...rest
}) {
  ensureStyle('ez-glass-css', EZ_GLASS_CSS);
  const cls = ['ez-glass', `ez-glass--${tone}`, chip ? 'ez-glass--chip' : '', soft ? 'ez-glass--blur9' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-builder/Builder.jsx
try { (() => {
// Ezagent Builder · shell (header + 设计/开发/预览 segmented + tab routing)
const {
  Button,
  IconButton,
  SegmentedControl,
  AppIcon,
  Badge,
  Tooltip
} = window.EzagentDesignSystem_b8e92c;
const TriG = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 4l13 8-13 8z"
}));
function Builder() {
  const [tab, setTab] = React.useState('设计');
  const [cfg, setCfg] = React.useState({
    name: 'Research Agent',
    color: 'blue',
    instructions: '你是一名研究助理。抓取可信来源，交叉验证，并产出结构化的简报；引用每一条结论的出处。',
    tools: ['web', 'code'],
    autorun: true
  });
  const set = patch => setCfg(c => ({
    ...c,
    ...patch
  }));
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 24px',
      background: 'var(--card)',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ezagent-logo.png",
    alt: "Ezagent",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "/"), /*#__PURE__*/React.createElement(AppIcon, {
    color: cfg.color,
    size: "sm",
    glyph: /*#__PURE__*/React.createElement(TriG, null)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cn)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, cfg.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Draft"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['设计', '开发', '预览'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Version history"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "History"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "history"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "\u4FDD\u5B58 \xB7 Save"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "rocket"
    })
  }, "\u90E8\u7F72 \xB7 Deploy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--ground)',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, tab === '设计' && /*#__PURE__*/React.createElement(window.EzDesignPanel, {
    cfg: cfg,
    set: set
  }), tab === '开发' && /*#__PURE__*/React.createElement(window.EzDevPanel, {
    cfg: cfg
  }), tab === '预览' && /*#__PURE__*/React.createElement(window.EzPreviewPanel, {
    cfg: cfg
  }))));
}
Object.assign(window, {
  EzBuilder: Builder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-builder/Builder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-builder/Panels.jsx
try { (() => {
// Ezagent Builder · the three working panels (Design / Dev / Preview)
const {
  Button,
  IconButton,
  Input,
  Select,
  Toggle,
  Checkbox,
  AppIcon,
  Badge,
  Tag,
  Card,
  GlassPanel,
  ColorPoints,
  Avatar,
  Tabs
} = window.EzagentDesignSystem_b8e92c;
const Tri = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 4l13 8-13 8z"
}));
const COLORS = ['blue', 'red', 'yellow', 'jade', 'blueink', 'orange'];
function Field({
  label,
  children,
  hint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, label), children, hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 7
    }
  }, hint));
}
const SectionLabel = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: 'var(--font-mono)',
    fontSize: 10,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    margin: '0 0 16px'
  }
}, children);
function DesignPanel({
  cfg,
  set
}) {
  const TOOLS = [{
    id: 'web',
    name: 'web.search',
    desc: 'Search & read the web',
    color: 'var(--blue)'
  }, {
    id: 'code',
    name: 'code.run',
    desc: 'Execute Python sandbox',
    color: 'var(--jade)'
  }, {
    id: 'files',
    name: 'files.read',
    desc: 'Read uploaded files',
    color: 'var(--orange)'
  }, {
    id: 'sql',
    name: 'warehouse.query',
    desc: 'Query the data warehouse',
    color: 'var(--blueink)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Identity \xB7 \u8EAB\u4EFD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(AppIcon, {
    color: cfg.color,
    size: "lg",
    glyph: /*#__PURE__*/React.createElement(Tri, null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, COLORS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => set({
      color: c
    }),
    "aria-label": c,
    style: {
      width: 30,
      height: 30,
      borderRadius: 9,
      border: 0,
      cursor: 'pointer',
      background: `var(--${c})`,
      boxShadow: cfg.color === c ? '0 0 0 3px var(--card), 0 0 0 5px var(--accent)' : 'var(--edge)'
    }
  })))), /*#__PURE__*/React.createElement(Field, {
    label: "\u540D\u79F0 \xB7 Name"
  }, /*#__PURE__*/React.createElement(Input, {
    shape: "box",
    full: true,
    value: cfg.name,
    onChange: e => set({
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u6307\u4EE4 \xB7 Instructions",
    hint: "What should this agent do, and how should it behave?"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: cfg.instructions,
    onChange: e => set({
      instructions: e.target.value
    }),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      minHeight: 110,
      resize: 'vertical',
      background: 'var(--ground-2)',
      boxShadow: 'var(--edge)',
      borderRadius: 'var(--r-sm)',
      border: 0,
      padding: '12px 14px',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Model \xB7 \u6A21\u578B"), /*#__PURE__*/React.createElement(Field, {
    label: "Provider"
  }, /*#__PURE__*/React.createElement(Select, {
    shape: "box",
    full: true,
    options: ['Claude Sonnet 4.6', 'GPT-4o', 'Llama 3 70B']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Temperature"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "1",
    step: "0.1",
    defaultValue: "0.4",
    style: {
      width: '100%',
      accentColor: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement(Toggle, {
    checked: cfg.autorun,
    onChange: v => set({
      autorun: v
    }),
    label: "Auto-run on trigger"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Tools \xB7 \u5DE5\u5177"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, TOOLS.map(t => /*#__PURE__*/React.createElement("label", {
    key: t.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 6px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: t.color,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, t.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, t.desc)), /*#__PURE__*/React.createElement(Toggle, {
    size: "sm",
    checked: cfg.tools.includes(t.id),
    onChange: () => set({
      tools: cfg.tools.includes(t.id) ? cfg.tools.filter(x => x !== t.id) : [...cfg.tools, t.id]
    })
  })))))));
}
function DevPanel({
  cfg
}) {
  const sys = `# ${cfg.name}\n\n${cfg.instructions}\n\n## Tools\n${cfg.tools.map(t => '- ' + t).join('\n') || '- (none)'}`;
  const json = JSON.stringify({
    name: cfg.name,
    model: 'claude-sonnet-4.6',
    temperature: 0.4,
    auto_run: cfg.autorun,
    tools: cfg.tools
  }, null, 2);
  const [file, setFile] = React.useState('system.md');
  const body = file === 'system.md' ? sys : json;
  return /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    elevation: "floating"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '12px 16px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: file,
    onChange: setFile,
    items: ['system.md', 'config.json']
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Copy"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "copy"
  })))), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '20px 22px',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.7,
      color: 'var(--ink)',
      whiteSpace: 'pre-wrap',
      overflowX: 'auto'
    }
  }, body));
}
function PreviewPanel({
  cfg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      minHeight: 380,
      background: '#14131C',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement(ColorPoints, {
    count: 50,
    height: 420,
    seed: 6,
    bare: true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 560,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GlassPanel, {
    tone: "dark",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(AppIcon, {
    color: cfg.color,
    size: "sm",
    glyph: /*#__PURE__*/React.createElement(Tri, null)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: '#fff'
    }
  }, cfg.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.6)'
    }
  }, cfg.tools.length, " tools \xB7 preview")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Ready"))), /*#__PURE__*/React.createElement(GlassPanel, {
    tone: "dark",
    style: {
      alignSelf: 'flex-start',
      maxWidth: '85%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "\u4F60\u597D\uFF0C\u6211\u662F ", cfg.name, "\u3002", cfg.instructions.slice(0, 60), "\u2026 \u9700\u8981\u6211\u505A\u4EC0\u4E48\uFF1F")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      background: 'var(--accent)',
      color: '#fff',
      padding: '12px 16px',
      borderRadius: 16,
      borderBottomRightRadius: 6,
      fontSize: 14,
      maxWidth: '85%'
    }
  }, "\u5E2E\u6211\u6574\u7406\u672C\u5468\u7684\u7814\u7A76\u8FDB\u5C55\u3002")));
}
Object.assign(window, {
  EzDesignPanel: DesignPanel,
  EzDevPanel: DevPanel,
  EzPreviewPanel: PreviewPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-builder/Panels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-console/Login.jsx
try { (() => {
// Ezagent Console · Login screen
const {
  Button,
  Input,
  ColorPoints
} = window.EzagentDesignSystem_b8e92c;
function Login({
  onContinue
}) {
  const [email, setEmail] = React.useState('allen@ezagent.io');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 880,
      maxWidth: '100%',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      background: 'var(--card)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#14131C',
      padding: '40px 38px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 460
    }
  }, /*#__PURE__*/React.createElement(ColorPoints, {
    count: 60,
    height: 460,
    seed: 3,
    bare: true,
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ezagent-logo-dark.png",
    alt: "Ezagent",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: '-.02em',
      color: '#fff'
    }
  }, "EZAGENT")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cn)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.2,
      color: '#fff',
      letterSpacing: '.01em'
    }
  }, "\u7EC4\u7EC7\u7684 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--yellow)'
    }
  }, "IDE"), "\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'rgba(255,255,255,.6)',
      marginTop: 14,
      letterSpacing: '.03em'
    }
  }, "BUILD \xB7 RUN \xB7 SHIP AGENTS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 44px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-cn)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\u767B\u5F55 \xB7 Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--ink-2)',
      margin: '4px 0 22px'
    }
  }, "Welcome back to your agent workspace."), /*#__PURE__*/React.createElement(Input, {
    label: "\u5DE5\u4F5C\u90AE\u7BB1 \xB7 Work email",
    shape: "box",
    full: true,
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: onContinue,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "\u7EE7\u7EED \xB7 Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "OR"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "github"
    }),
    onClick: onContinue
  }, "Continue with GitHub"))));
}
Object.assign(window, {
  EzLogin: Login
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-console/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-console/Sidebar.jsx
try { (() => {
// Ezagent Console · left sidebar (agents list)
const {
  Button,
  AppIcon,
  Badge,
  Avatar,
  IconButton,
  Tooltip
} = window.EzagentDesignSystem_b8e92c;
const Tri = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 4l13 8-13 8z"
}));
const Dot = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}));
const Ring = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "4"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "8"
}));
const Sq = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("rect", {
  x: "5",
  y: "5",
  width: "14",
  height: "14",
  rx: "3"
}));
const Bars = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "4",
  width: "4",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "10",
  y: "4",
  width: "4",
  height: "16",
  rx: "2",
  opacity: ".6"
}), /*#__PURE__*/React.createElement("rect", {
  x: "16",
  y: "4",
  width: "4",
  height: "16",
  rx: "2"
}));
const AGENTS = [{
  id: 'research',
  name: 'Research Agent',
  sub: 'crawls + drafts briefs',
  color: 'blue',
  glyph: /*#__PURE__*/React.createElement(Tri, null),
  status: 'live'
}, {
  id: 'support',
  name: 'Support Triage',
  sub: 'routes tickets',
  color: 'red',
  glyph: /*#__PURE__*/React.createElement(Dot, null),
  status: 'live'
}, {
  id: 'ledger',
  name: 'Sane Ledger',
  sub: 'books & reconciles',
  color: 'jade',
  glyph: /*#__PURE__*/React.createElement(Ring, null),
  status: 'draft'
}, {
  id: 'ops',
  name: 'Ops Watcher',
  sub: 'monitors deploys',
  color: 'blueink',
  glyph: /*#__PURE__*/React.createElement(Sq, null),
  status: 'paused'
}, {
  id: 'analyst',
  name: 'Data Analyst',
  sub: 'queries warehouse',
  color: 'orange',
  glyph: /*#__PURE__*/React.createElement(Bars, null),
  status: 'draft'
}];
const STATUS = {
  live: {
    tone: 'success',
    label: 'Live'
  },
  draft: {
    tone: 'neutral',
    label: 'Draft'
  },
  paused: {
    tone: 'warning',
    label: 'Paused'
  }
};
function ensureSidebarCss() {
  if (document.getElementById('ez-console-sidebar-css')) return;
  const s = document.createElement('style');
  s.id = 'ez-console-sidebar-css';
  s.textContent = `
  .ez-agentrow{display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:var(--r-md);cursor:pointer;transition:background .15s;}
  .ez-agentrow:hover{background:var(--ground-2);}
  .ez-agentrow--on{background:var(--blue-wash);}
  .ez-agentrow--on:hover{background:var(--blue-wash);}
  `;
  document.head.appendChild(s);
}
function Sidebar({
  activeId,
  onSelect,
  agents = AGENTS
}) {
  ensureSidebarCss();
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 278,
      flex: 'none',
      background: 'var(--card)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '4px 6px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ezagent-logo.png",
    alt: "Ezagent",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 800,
      fontSize: 16,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, "EZAGENT"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "New workspace"
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "command"
  }))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus"
    })
  }, "\u65B0\u5EFA Agent \xB7 New"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2px 8px',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "Agents"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, agents.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      overflowY: 'auto',
      flex: 1,
      margin: '0 -4px'
    }
  }, agents.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    className: 'ez-agentrow' + (a.id === activeId ? ' ez-agentrow--on' : ''),
    onClick: () => onSelect(a.id)
  }, /*#__PURE__*/React.createElement(AppIcon, {
    color: a.color,
    size: "sm",
    glyph: a.glyph
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a.sub)), /*#__PURE__*/React.createElement(Badge, {
    tone: STATUS[a.status].tone,
    dot: true
  }, STATUS[a.status].label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 8px 4px',
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Allen Woods"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, "Allen Woods"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "Pro \xB7 ezagent.io")), /*#__PURE__*/React.createElement(IconButton, {
    size: "sm",
    label: "Settings"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }))));
}
Object.assign(window, {
  EzSidebar: Sidebar,
  EZ_AGENTS: AGENTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-console/Workspace.jsx
try { (() => {
// Ezagent Console · main chat workspace (header + thread + composer)
const {
  Button,
  IconButton,
  Select,
  Avatar,
  AppIcon,
  Badge,
  Tag,
  GlassPanel,
  ColorPoints,
  Tooltip,
  Tabs
} = window.EzagentDesignSystem_b8e92c;
function ensureWsCss() {
  if (document.getElementById('ez-console-ws-css')) return;
  const s = document.createElement('style');
  s.id = 'ez-console-ws-css';
  s.textContent = `
  .ez-msg{display:flex;gap:13px;max-width:760px;}
  .ez-msg__bubble{padding:13px 17px;border-radius:var(--r-md);font-size:15px;line-height:1.6;}
  .ez-msg--user{flex-direction:row-reverse;margin-left:auto;}
  .ez-msg--user .ez-msg__bubble{background:var(--accent);color:var(--on-accent);border-bottom-right-radius:6px;}
  .ez-msg--agent .ez-msg__bubble{background:var(--ground-2);color:var(--ink);border-bottom-left-radius:6px;}
  .ez-tool{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:12px;color:var(--ink-2);
    background:var(--card);box-shadow:var(--edge);border-radius:var(--r-sm);padding:8px 12px;margin-top:9px;}
  .ez-tool .dotpulse{width:7px;height:7px;border-radius:999px;background:var(--jade);}
  .ez-composer{display:flex;align-items:flex-end;gap:10px;background:var(--ground-2);box-shadow:var(--edge);
    border-radius:var(--r-lg);padding:10px 10px 10px 18px;transition:box-shadow .2s,background .2s;}
  .ez-composer:focus-within{background:var(--card);box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus-ring);}
  .ez-composer textarea{all:unset;flex:1;font-family:var(--font-ui);font-size:15px;color:var(--ink);line-height:1.5;
    padding:7px 0;max-height:120px;resize:none;}
  .ez-composer textarea::placeholder{color:var(--ink-3);}
  .ez-typing span{display:inline-block;width:6px;height:6px;border-radius:999px;background:var(--ink-3);margin:0 2px;animation:ez-bounce 1.2s infinite;}
  .ez-typing span:nth-child(2){animation-delay:.15s;} .ez-typing span:nth-child(3){animation-delay:.3s;}
  @keyframes ez-bounce{0%,60%,100%{transform:translateY(0);opacity:.4;}30%{transform:translateY(-5px);opacity:1;}}
  `;
  document.head.appendChild(s);
}
const SEED_THREAD = {
  research: [{
    role: 'user',
    text: '帮我研究一下 2026 年 AI agent 框架的格局，列出 5 个主流方案。'
  }, {
    role: 'agent',
    text: '好的，我会抓取最新来源并整理成简报。先做一次检索：',
    tool: 'web.search("AI agent frameworks 2026")'
  }, {
    role: 'agent',
    text: '找到 12 篇相关来源，正在归纳为 5 个主流方案与各自取舍。需要我同时生成对比表吗？'
  }],
  support: [{
    role: 'user',
    text: 'A customer says billing was charged twice. Triage this.'
  }, {
    role: 'agent',
    text: 'Pulling the account and recent charges.',
    tool: 'stripe.charges.list(customer)'
  }]
};
function Message({
  m,
  agent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'ez-msg ez-msg--' + m.role
  }, m.role === 'agent' ? /*#__PURE__*/React.createElement(AppIcon, {
    color: agent.color,
    size: "sm",
    glyph: agent.glyph
  }) : /*#__PURE__*/React.createElement(Avatar, {
    name: "Allen Woods"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ez-msg__bubble"
  }, m.text), m.tool && /*#__PURE__*/React.createElement("div", {
    className: "ez-tool"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dotpulse"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "terminal",
    style: {
      width: 14,
      height: 14
    }
  }), m.tool)));
}
function Workspace({
  agent
}) {
  ensureWsCss();
  const [tab, setTab] = React.useState('chat');
  const [messages, setMessages] = React.useState(SEED_THREAD[agent.id] || []);
  const [draft, setDraft] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const threadRef = React.useRef(null);
  React.useEffect(() => {
    setMessages(SEED_THREAD[agent.id] || []);
    setTab('chat');
  }, [agent.id]);
  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }, [messages, typing, tab]);
  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages(m => [...m, {
      role: 'user',
      text
    }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, {
        role: 'agent',
        text: '收到 — 正在执行该任务并调用所需工具。',
        tool: agent.id === 'support' ? 'tickets.assign(team)' : 'tool.run(task)'
      }]);
    }, 1300);
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--card)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 22px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(AppIcon, {
    color: agent.color,
    size: "sm",
    glyph: agent.glyph
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-cn)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--ink)'
    }
  }, agent.name), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Live")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 1
    }
  }, "run #a91f3c \xB7 3 tools \xB7 1.2k tokens")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Select, {
    shape: "pill",
    options: ['Claude Sonnet', 'GPT-4o', 'Llama 3']
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Share"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Share"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "share-2"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "play"
    })
  }, "\u8FD0\u884C \xB7 Run"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'chat',
      label: 'Chat',
      icon: /*#__PURE__*/React.createElement("i", {
        "data-lucide": "message-square",
        style: {
          width: 15,
          height: 15
        }
      })
    }, {
      value: 'runs',
      label: 'Runs',
      count: 24
    }, {
      value: 'tools',
      label: 'Tools',
      count: 6
    }, {
      value: 'logs',
      label: 'Logs'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    ref: threadRef,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, tab !== 'chat' ? /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'auto',
      textAlign: 'center',
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(ColorPoints, {
    count: 30,
    height: 140,
    seed: 9
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-cn)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--ink)',
      marginTop: 18
    }
  }, "\u6682\u65E0", tab === 'runs' ? '运行记录' : tab === 'tools' ? '工具' : '日志'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      marginTop: 6
    }
  }, "Switch to Chat to talk to this agent.")) : /*#__PURE__*/React.createElement(React.Fragment, null, messages.map((m, i) => /*#__PURE__*/React.createElement(Message, {
    key: i,
    m: m,
    agent: agent
  })), typing && /*#__PURE__*/React.createElement("div", {
    className: "ez-msg ez-msg--agent"
  }, /*#__PURE__*/React.createElement(AppIcon, {
    color: agent.color,
    size: "sm",
    glyph: agent.glyph
  }), /*#__PURE__*/React.createElement("div", {
    className: "ez-msg__bubble ez-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))), tab === 'chat' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "var(--blue)"
  }, "web.search"), /*#__PURE__*/React.createElement(Tag, {
    color: "var(--jade)"
  }, "code.run"), /*#__PURE__*/React.createElement(Tag, {
    color: "var(--orange)"
  }, "files.read")), /*#__PURE__*/React.createElement("div", {
    className: "ez-composer"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 1,
    placeholder: "\u7ED9 Agent \u53D1\u6D88\u606F \xB7 Message the agent\u2026",
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "plain",
    label: "Attach"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "paperclip"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "accent",
    label: "Send",
    onClick: send
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up"
  })))));
}
Object.assign(window, {
  EzWorkspace: Workspace
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-console/Workspace.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AppIcon = __ds_scope.AppIcon;

__ds_ns.ColorPoints = __ds_scope.ColorPoints;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

})();
