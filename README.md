# Ezagent Design System
### 组织 IDE · Organization IDE — 三原色为轴，柔软为形 (Primaries as axis, softness as form)

The design language for **Ezagent** — the **Organization IDE (组织 IDE)**: a workspace where people build, run, and ship their organization's AI agents. The system fuses **De Stijl primary color** (taken straight from the Ezagent cube logo) with **soft, floating surfaces**: light-gray ground, white cards lifted by huge layered shadows, pure color blocks, frosted glass, and 3D-rounded icons. The promise, in one line: **组织的 IDE · Organization IDE.**

> Consumers link a single file — `styles.css` — and read components from `window.EzagentDesignSystem_b8e92c`.

---

## Sources & provenance
Built from materials supplied by the user. Keep these on record (the reader may have access even if you don't):

- **Mood board** — the original bundled HTML mood board provided by the user was the authoritative source for color, type, form, motion, and motifs. The working copy has been removed from this repo; everything it informed now lives in `tokens/` and `guidelines/`.
- **Logo** — `uploads/LOGO.png` → `assets/ezagent-logo.png`. Isometric tri-color cube (red / blue / yellow), De Stijl.
- **GitHub** — `ezagent42/Design` (https://github.com/ezagent42/Design) was attached as the design repo but read as **empty** at build time. The broader Ezagent product context lives across the `ezagent42` org (e.g. `esr` — EZAgent Session Router, `autoservices`, `SaneLedger`, `monorepo`); explore those repos to design more faithfully against the real product. No product UI source was available, so the UI kits are original, faithful builds from these foundations.

If you can re-share an updated `ezagent42/Design` repo or real product screens/code, the UI kits can be tightened to match exactly.

---

## CONTENT FUNDAMENTALS — how Ezagent writes

**Bilingual, zh + en, side by side.** Copy pairs a Chinese phrase with its English equivalent, usually `中文 · English` (interpunct separated) or stacked (CN headline, EN subline). CN carries warmth and concept; EN carries clarity and the technical term.

- **Voice:** warm, confident, clear — never cute-for-cute's-sake. The positioning "组织 IDE · Organization IDE" sets the tone: take a whole organization's complexity and make it feel in-hand and buildable.
- **Person:** speak to the user as **你 / you** ("给 Agent 发消息", "Make it lovable"). Refer to the product as Ezagent, not "we", in UI.
- **Casing:** EN UI labels are **Sentence case** ("Get started", "New agent"), not Title Case. ALL-CAPS is reserved for mono overlines/metadata ("FOUNDATIONS", "BUILD · RUN · SHIP").
- **Concept words:** 组织 IDE (Organization IDE), 点彩 (color points), 毛玻璃 (frosted glass), 招牌柔影 (signature soft shadow) — these are the house vocabulary; reuse them.
- **Numbers & data:** in Space Mono, terse, lowercase units ("1.2k tokens", "0.5s ease", "run #a91f3c").
- **Punctuation:** the interpunct `·` is a signature separator. Full-width CN punctuation in CN copy (，。！), the em-dash for English asides.
- **Emoji:** not used in the brand (geometric glyphs and the logo carry personality instead). The only glyph-as-emoji is a contextual ✓ in a status badge.
- **Examples:** "开始使用 · Get started →" · "新建 Agent · New" · "给 Agent 发消息 · Message the agent…" · "纯色与留白，而非渐变与噪声。"

---

## VISUAL FOUNDATIONS

**Color.** The axis is the logo's three primaries — 红 `#D81830`, 墨蓝 `#0048A8`, 黄 `#FFD400` — plus 翠 jade `#0FA06E` as the extension/success color. **Two blues:** the structural ink-blue `#0048A8` (logo) and the bright cobalt `#0B5CFF`, which is the **single interactive/action color** — primary buttons, focus rings, links, toggles. 暖橙 `#FF8A1E` is a vivid accent. Neutrals run from a light-gray ground `#E8E8EB` up to ink `#17171B`; cards are pure white. Color is used as **solid blocks** with generous whitespace — **never gradients**. Each strong color has a soft tint "wash" (e.g. `--blue-wash`) for badges and status surfaces. A full **dark theme** (`:root[data-theme="dark"]`) brightens the axis to read on near-black `#16151C` with `#1E1C26` cards.

**Imagery vibe.** Pure-color-block backgrounds (often a single brand color or `#14131C` near-black), 3D **clay** characters and floating UI cards — friendly, rounded, never cluttered. Backgrounds are calm; the color does the talking. No photography-heavy or grainy treatments; imagery is clean and saturated.

**Typography.** Inter for Latin (display **800** tight `-0.02em`; UI **500/450**). **Noto Serif SC** for Chinese headings (600) — the serif gives weight and a written, human quality. Noto Sans SC for CN body/UI. **Space Mono** for data, code, labels, and overlines. CN serif headings + heavy Inter display + mono metadata is the signature type pairing.

**Spacing & layout.** 4px base rhythm. Generous gutters (`--gap-grid: 22px` between cards), card padding `30px 32px`. Content is a 12-column grid of **floating cards** on the ground; the app frame itself is `padding:16px; gap:16px`. Fixed elements (sidebars, top bars) are their own floating cards, not full-bleed chrome.

**Backgrounds.** Light-gray flat ground (no texture) for apps; near-black `#14131C` for hero/preview stages. The signature texture is **点彩 / ColorPoints** — scattered solid color-dots (the brand primaries) over a soft field, used sparingly as a hero backdrop or empty-state rhythm. No repeating patterns, no gradients.

**Elevation & cards.** Cards are white, radius **22px** (`--r-lg`), lifted by the **招牌柔影** — a 6-layer soft shadow (`--shadow-card`, up to 60–80px blur). "Edges made of light, not lines." Three steps: `--edge` (hairline 1px/4%) → `--shadow-sm` (raised) → `--shadow-card` (floating). Borders are avoided in favor of shadow; hairline dividers `--line` only where structure demands.

**Corner radii.** 10 (`sm`) / 16 (`md`) / 22 (`lg`) / 18 (squircle app icons) / pill (999px). Buttons, inputs, badges, segmented controls are **pills** by default.

**Transparency & blur.** 毛玻璃 frosted glass (`backdrop-blur(9–14px) saturate(1.3–1.4)`) for controls floating over color or imagery — two tones: frosted-white over imagery, frosted-light over color blobs. Used for floating control bars, chips, and preview overlays.

**Motion.** One signature: **FadeUpBlur** — `opacity 0→1`, `translateY(20px→0)`, `blur(8px→0)`, **500ms**, easing `cubic-bezier(.16,1,.3,1)` (`--ease-out`), staggered, **plays once**. Light, restrained, never looping on content. Reduced-motion shows the end state.

**Hover & press.** Primary actions **lift** (`translateY(-2px)`) and deepen their shadow on hover; neutral surfaces shift to `--ground-hover`; ghost fills with `--ground-2`. Press **scales down** slightly (`scale(.98)`) and settles. Focus is always a 3px cobalt ring (`--focus-ring`).

---

## ICONOGRAPHY

- **System icon set: Lucide** (CDN, `unpkg.com/lucide`), used across UI kits, cards, and components. Clean 2px-stroke line icons — they match the soft, modern, geometric feel. **This is a substitution** (the source provided no icon font/sprite); swap to an official Ezagent icon set when one exists. Stroke weight ~2.2–2.6 to sit confidently next to heavy Inter.
- **Brand glyphs (geometric):** product/app icons use **monochrome geometric primitives** — triangle, dot, ring, check, square, bars — filled white (or ink on yellow) inside a **squircle** solid-color tile. These are hand-built tiny SVGs in the kits, NOT Lucide; they're the brand's "app icon" language from the mood board. See `AppIcon`.
- **Emoji:** not used as iconography. Unicode is limited to the mono interpunct `·`, arrows in mono text, and a contextual ✓.
- **Logo:** `assets/ezagent-logo.png` — the tri-color cube, **transparent background**, tight-cropped (works on white cards and light grounds). For dark surfaces use `assets/ezagent-logo-dark.png` — same mark with a **brightened red/blue/yellow axis** so it reads on near-black (used in the Agent Console login hero). The original solid-white-background upload is preserved at `uploads/LOGO.png`. Min height 24px; clear space ≥ 0.5× mark height. Pair with the `EZAGENT` wordmark (Inter 800).

---

## Index / manifest

**Root**
- `styles.css` — the single entry point (imports only). Link this.
- `tokens/` — `fonts.css` (Google Fonts CDN), `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii/elevation/motion/glass), `base.css` (element resets + type helpers).
- `assets/ezagent-logo.png` — logo.
- `SKILL.md` — Agent-Skills-compatible entry for using this system in Claude Code.

**Foundations** (Design System tab — `guidelines/`): Colors (primaries, interactive, neutrals, semantic, dark), Type (display, CN heading, UI, mono), Spacing (scale, radii), Effects (elevation, glass, motion), Brand (logo, concept, color-points).

**Components** (`components/`, namespace `EzagentDesignSystem_b8e92c`):
- `actions/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Toggle**, **Checkbox**, **Radio**, **SegmentedControl**
- `data-display/` — **Badge**, **Tag**, **Avatar**, **Card**
- `surfaces/` — **GlassPanel**, **AppIcon**, **ColorPoints**
- `navigation/` — **Tabs**
- `feedback/` — **Dialog**, **Toast**, **Tooltip**

Each has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `*.card.html` demo per directory.

**UI kits** (`ui_kits/`):
- `agent-console/` — login → chat workspace (sidebar of agents, threaded chat, tool calls, composer). `index.html` + `Login/Sidebar/Workspace.jsx`.
- `agent-builder/` — 设计 / 开发 / 预览 builder (identity + tools config, generated config view, glass chat preview). `index.html` + `Builder/Panels.jsx`.

**Slides** (`slides/`): `TitleSlide`, `SectionSlide`, `ContentSlide`, `QuoteSlide`, `ComparisonSlide` — 1280×720, branded.

---

## Usage

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, AppIcon } = window.EzagentDesignSystem_b8e92c;
</script>
```

Dark theme: set `data-theme="dark"` on `<html>`. Everything reads from CSS custom properties, so theming, spacing, and color all flow from `tokens/`.

---

## Logo asset — TODO

Every logo reference in this system points at a PNG: `assets/ezagent-logo.png` (light, **not yet committed** — it exceeded the sync transfer cap) and `assets/ezagent-logo-dark.png` (dark, **present**). The light mark is used in `guidelines/brand-logo*.html`, `slides/TitleSlide.html`, and both UI kits.

Preferred fix: drop in **vector** logos (`assets/ezagent-logo.svg` + a dark variant) and repoint the `<img>` references to them — no PNG needed. Until a vector or the light PNG is supplied, those previews show a broken image for the light mark.

---

## License

Licensed under the [Apache License, Version 2.0](./LICENSE). © 2026 ezagent42.
