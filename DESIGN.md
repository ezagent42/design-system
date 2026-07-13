---
name: Ezagent Design System
description: 三原色为轴，柔软为形 — De Stijl primaries as the axis, soft floating surfaces as the form, for the Organization IDE
colors:
  vermilion: "#D81830"
  ink-blue: "#0048A8"
  signal-yellow: "#FFD400"
  jade: "#0FA06E"
  cobalt: "#0B5CFF"
  cobalt-hover: "#1466FF"
  cobalt-deep: "#0040C4"
  cobalt-wash: "#E7EEFF"
  amber: "#FF8A1E"
  jade-wash: "#DCF1E8"
  jade-deep: "#0A7A52"
  red-wash: "#FAE0E3"
  red-deep: "#B01228"
  amber-wash: "#FFEBD6"
  ground: "#E8E8EB"
  ground-sunken: "#EFEFF1"
  card-white: "#FFFFFF"
  ink: "#17171B"
  ink-2: "#56565E"
  ink-3: "#8A8A92"
  hairline: "#E2E2E6"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "50px"
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  cn-display:
    fontFamily: "Noto Serif SC, Songti SC, serif"
    fontSize: "50px"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 450
    lineHeight: 1.55
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
  mono:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  icon: "18px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  gutter: "22px"
  card-y: "30px"
  card-x: "32px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-hover}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  button-secondary:
    backgroundColor: "{colors.ground-sunken}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  button-danger:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  input:
    backgroundColor: "{colors.ground-sunken}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  input-focus:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  card-floating:
    backgroundColor: "{colors.card-white}"
    rounded: "{rounded.lg}"
    padding: "30px 32px"
  badge-success:
    backgroundColor: "{colors.jade-wash}"
    textColor: "{colors.jade-deep}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  badge-neutral:
    backgroundColor: "{colors.ground-sunken}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: Ezagent

## 1. Overview

**Creative North Star: "柔软的构成主义 · Soft Constructivism"**

Take the rigor of De Stijl — the three primaries straight off the Ezagent cube logo, pure color as structure, no gradients, no compromise — and soften the form until it floats. That tension is the whole system: **disciplined color, gentle surface**. Color blocks are flat and confident; the surfaces that carry them are white cards lifted off a calm light-gray ground by huge, layered soft shadows. The grid is rigid; the edges are made of light.

The system serves the **Organization IDE (组织 IDE)** — a workspace where people build, run, and ship their organization's AI agents. So it must disappear into the task: dense panels, consistent controls, a single action color, earned familiarity. It is bilingual at the core (`中文 · English`) — Chinese carries warmth and concept, English carries clarity and the technical term — and it speaks in three voices of type: heavy tight Inter for Latin display, Noto Serif SC for Chinese headings, Space Mono for data and metadata.

It explicitly rejects the AI-SaaS monoculture: no cream/sand body, no gradients or noise, no emoji as iconography, no hero-metric template, no identical icon-and-heading card grids. Warmth comes from the primaries, the serif Chinese headings, and the soft shadow — never from a warm-tinted near-white background.

**Key Characteristics:**
- De Stijl primaries (红 / 墨蓝 / 黄 + 翠) as the brand axis; a single bright cobalt as the only interactive color.
- Flat solid color over generous whitespace — never gradients, never grain.
- White cards floating on a light-gray ground via a six-layer signature soft shadow.
- Pills everywhere: buttons, inputs, badges, segmented controls.
- Bilingual zh/en voice with the interpunct `·` as house grammar.
- Full dark theme; WCAG AA contrast; reduced-motion respected.

## 2. Colors: The Primary-Axis Palette

A De Stijl axis of solid primaries for identity, one bright cobalt for every interaction, and a calm gray-to-ink neutral ramp underneath. Color is used as flat blocks with whitespace, never as gradients.

### Primary
- **Vermilion 红** (`#D81830`): the logo's signature primary; danger/destructive semantics and brand moments. A solid block, never a fill behind text.
- **Ink-Blue 墨蓝** (`#0048A8`): the structural logo blue. Identity and headings-on-color; deliberately *not* the interactive color (see the One-Voice Rule).
- **Signal-Yellow 黄** (`#FFD400`): the logo's third primary; high-energy accents and brand surfaces. Light fill → always takes a dark glyph/text.

### Secondary
- **Cobalt 钴蓝** (`#0B5CFF`): the single interactive color — primary buttons, focus rings, links, toggles, current selection. Hover lifts to `#1466FF`, pressed/on-wash text deepens to `#0040C4`.
- **Jade 翠** (`#0FA06E`): the extension color and `success` semantic; "Live" / healthy-run states.

### Tertiary
- **Amber 暖橙** (`#FF8A1E`): a vivid warm accent and the `warning` semantic. Used sparingly for emphasis and data categories.

### Neutral
- **Ground** (`#E8E8EB`): the app background — a calm light gray the cards float on.
- **Ground-Sunken** (`#EFEFF1`): recessed wells, inputs at rest, tracks.
- **Card White** (`#FFFFFF`): every floating surface.
- **Ink** (`#17171B`): primary foreground text.
- **Ink-2** (`#56565E`): secondary text. **Ink-3** (`#8A8A92`): captions, placeholders, icons (still ≥4.5:1 on white).
- **Hairline** (`#E2E2E6`): the rare 1px divider, used only where shadow can't carry structure.

### Named Rules
**The One-Voice Rule.** Cobalt `#0B5CFF` is the *only* interactive color. If something is clickable, selectable, or focused, it is cobalt; if it is cobalt, it is interactive. Structural ink-blue is identity, never an affordance. Never spend cobalt on decoration.

**The No-Gradient Rule.** 纯色与留白，而非渐变与噪声 — pure color and whitespace, never gradients and noise. Every fill is a single flat color. `background-clip: text` gradient headings are forbidden.

**The Wash Rule.** Each strong color has a soft tint "wash" (`--jade-wash`, `--red-wash`, `--cobalt-wash`, `--amber-wash`) paired with a deepened text tone. Status surfaces (badges, tags, selected rows) are wash + deep-text, never full-saturation behind small text.

## 3. Typography

**Display / UI Font:** Inter (with `system-ui`, `-apple-system`, sans-serif)
**CN Heading Font:** Noto Serif SC (with `Songti SC`, serif) · **CN Body/UI:** Noto Sans SC (with `PingFang SC`)
**Data / Label Font:** Space Mono (with `ui-monospace`, Menlo, monospace)

**Character:** Heavy, tight Inter display reads as confident and engineered; Noto Serif SC gives Chinese headings a written, human weight; Space Mono stamps data and metadata as precise and machine-true. The signature pairing is CN serif heading + heavy Inter display + mono overline.

### Hierarchy
- **Display** (Inter 800, 50px, line-height 1.14, `-0.02em`): hero and section heroes. Latin. Use `text-wrap: balance`.
- **CN Display** (Noto Serif SC 600, 50px, 1.14, `0.01em`): Chinese hero headings — serif, never sans.
- **Headline** (Inter 700, 30px, 1.3, `-0.02em`): section headings.
- **Title** (Inter 600, 18px, 1.3): card titles, panel headers, dialog titles.
- **Body** (Inter 450, 16px, 1.55, `-0.01em`): prose and UI copy. Cap prose at 65–75ch; dense panels and tables may run tighter.
- **Label** (Inter 600, 13px, 1.3): form labels, button text, list item names. Sentence case.
- **Overline / Mono** (Space Mono 400, 11px, `0.14em`, UPPERCASE): metadata, counts, run ids, kickers ("BUILD · RUN · SHIP", "1.2k tokens").

### Named Rules
**The CN-Serif Rule.** Chinese headings are Noto Serif SC, not a sans. The serif is where the brand's warmth and "written by a human" quality lives. Latin display stays heavy Inter.

**The Mono-Metadata Rule.** Numbers, units, code, run ids, overlines and kickers are Space Mono, lowercase units, terse (`0.5s ease`, `run #a91f3c`). Never set body or labels in mono.

**The Sentence-Case Rule.** EN UI labels are Sentence case ("Get started", "New agent"). ALL-CAPS is reserved exclusively for mono overlines.

## 4. Elevation: Edges Made of Light

This system is **lifted, not flat and not bordered**. Depth comes almost entirely from soft shadow: white cards float above the gray ground on huge, layered, low-opacity shadows — "edges made of light, not lines." Borders are avoided; a hairline divider appears only where shadow genuinely can't carry the structure. There are no gradients anywhere in the elevation language.

### Shadow Vocabulary
- **Edge** (`box-shadow: 0 0 0 1px rgba(15,15,15,.04)`): the lowest tier — a 1px light hairline for flat cards, inputs, secondary buttons.
- **Raised** (`--shadow-sm`: `0 1px 2px rgba(15,15,15,.04), 0 8px 24px -12px rgba(15,15,15,.14)`): raised cards, popovers, dropdowns.
- **Floating** (`--shadow-card`: a six-layer stack up to `0 60px 80px rgba(15,15,15,.07)`): the signature 招牌柔影 for primary floating cards and hover states.
- **Accent Glow** (`--shadow-accent`: `0 10px 24px -8px rgba(11,92,255,.5)`): the cobalt glow under primary buttons — the only colored shadow.
- **Frosted Pop** (`--shadow-pop`): for 毛玻璃 frosted-glass controls floating over color or imagery.

### Named Rules
**The Light-Edge Rule.** Structure is carried by elevation and tint, not by 1px gray borders. Reach for `--edge` / `--shadow-*` before a `border`. Side-stripe borders (`border-left` as a colored accent) are forbidden.

**The Lift-on-Hover Rule.** Interactive surfaces respond by lifting: buttons `translateY(-2px)` and deepen their shadow, cards `translateY(-3px)` into `--shadow-card`, press settles to `scale(.98)`. Calm at rest, buoyant on touch.

## 5. Components: Calm, Buoyant, Lifts to Meet You

Every interactive component carries the full state set — default, hover, focus-visible, active, disabled (and invalid for inputs). Controls are sober and floating at rest, and lift to meet the pointer. Affordances are consistent across the surface: one button shape, one form-control vocabulary, one icon style.

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** cobalt fill, white text, cobalt accent-glow; `padding: 13px 24px` (md). Hover lifts `translateY(-2px)` to `#1466FF` with a deeper glow.
- **Secondary:** sunken `#EFEFF1` fill, ink text, 1px light edge; hover shifts to `--ground-hover`, lifts `-1px`.
- **Ghost:** transparent, ink text; hover fills with `--ground-2`.
- **Danger:** vermilion fill, white text, red soft shadow.
- **States:** active `scale(.98)`; focus-visible `outline: 3px var(--focus-ring)` offset 2px; disabled `opacity: .42`, no shadow/transform.

### Inputs / Fields
- **Shape:** pill (`999px`, `12px 18px`) or box (`10px`, `11px 14px`).
- **At rest:** sunken `#EFEFF1` fill with a 1px light edge; placeholder is ink-3 (still ≥4.5:1).
- **Focus:** the field brightens to white and gains an inset cobalt ring plus a 3px cobalt focus halo (`inset 0 0 0 1px var(--accent), 0 0 0 3px var(--focus-ring)`).
- **Invalid:** inset vermilion ring; hint text switches to `--danger-text`. **Disabled:** `opacity: .5`, no pointer events.

### Chips — Badge / Tag
- **Style:** pill, soft **wash** background + deepened text per tone (info/success/danger/warning/neutral); optional 7px leading dot in `currentColor`.
- **Solid variant:** full-color fill with white text for maximum emphasis.

### Cards / Containers
- **Corner:** `22px` (`--r-lg`).
- **Background:** white card on the gray ground.
- **Shadow strategy:** three elevations — `flat` (edge), `raised` (`--shadow-sm`), `floating` (`--shadow-card`). Interactive cards lift `-3px` into floating on hover. See Elevation.
- **Border:** none. **Internal padding:** `30px 32px` (`18px 20px` compact).

### Navigation — Tabs
- Pill or underline tabs; default ink-2 → hover ink → active cobalt with the selection indicator in cobalt. Same focus ring as every control.

### AppIcon (signature)
The product/app icon: a geometric brand glyph (triangle, dot, ring, square, bars) inside a `18px` squircle. Variants: **glass** (default — brand-color glyph on a same-color frosted square, best over color/imagery), **solid** (white-or-dark glyph on a solid color squircle, max emphasis), **bare** (glyph only). Theme-aware: glyph contrast and fills retune automatically under `data-theme="dark"`; light fills (yellow) always take a dark glyph.

## 6. Do's and Don'ts

### Do:
- **Do** float white cards on the `#E8E8EB` ground with the six-layer `--shadow-card`; let elevation, not borders, carry structure ("edges made of light, not lines").
- **Do** spend cobalt `#0B5CFF` only on actions, focus, current selection, and state — the One-Voice Rule.
- **Do** pair copy as `中文 · English` with the interpunct `·`; CN headings in Noto Serif SC, data in Space Mono.
- **Do** use pills (`999px`) for buttons, inputs, badges, and segmented controls; lift on hover, settle to `scale(.98)` on press.
- **Do** ship every interactive component with default / hover / focus-visible / active / disabled (and invalid for inputs).
- **Do** hit WCAG AA (body ≥4.5:1, large ≥3:1, placeholders ≥4.5:1) and give every animation a `prefers-reduced-motion` end-state.

### Don't:
- **Don't** use gradients or noise anywhere — 纯色与留白，而非渐变与噪声. No `background-clip: text` gradient headings.
- **Don't** use emoji as personality or iconography; geometric brand glyphs and the cube logo carry it.
- **Don't** build identical icon-and-heading card grids repeated endlessly, and never nest cards.
- **Don't** use borders as the primary edge, and never a `border-left/right > 1px` colored side-stripe — use shadow and tint.
- **Don't** wrap the app in full-bleed chrome; fixed sidebars and top bars are their own floating cards.
- **Don't** put a white glyph on a light fill (yellow squircle → dark glyph), and don't reach for the cream/sand body, the hero-metric template, or tracked uppercase eyebrows on every section.
