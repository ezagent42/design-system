# Product

## Register

product

## Users

People who build, run, and ship their organization's AI agents inside **Ezagent — the Organization IDE (组织 IDE)**. They work in an app context: configuring agent identity and tools, wiring workflows, watching runs, and chatting with agents (the agent-console and agent-builder surfaces). The audience is mixed zh/en, so the product speaks bilingually (中文 · English) — Chinese carries warmth and concept, English carries clarity and the technical term.

## Product Purpose

Ezagent is the Organization IDE: a workspace where a whole organization's AI agents are built, run, and shipped. **This repo is its design system** — a single-entry stylesheet (`styles.css`) plus a compiled component bundle exposed as `window.EzagentDesignSystem_b8e92c`, with tokens, guidelines, two UI kits, and brand surfaces. Its job is to keep every Ezagent surface consistent and on-brand, so product teams compose real screens from real components that map 1:1 onto shippable code.

This is a **dual-purpose design system**. The default register is `product` because most of the library (Button, IconButton, Input, Select, Toggle, Checkbox, Radio, SegmentedControl, Tabs, Dialog, Toast, Tooltip, Badge, Tag, Avatar, Card) serves app UI — the agent-console and agent-builder. The brand-leaning pieces (`templates/landing`, `slides/`, and the ColorPoints / GlassPanel hero surfaces) should be treated as `brand` and override the register per task.

## Brand Personality

Warm, confident, clear — never cute-for-cute's-sake. Three words: **warm · confident · clear**. The voice addresses the user as 你 / you and names the product as Ezagent (never "we") in UI. Copy is bilingual by default, paired as `中文 · English` with the interpunct `·` as the signature separator. EN UI labels are Sentence case; ALL-CAPS is reserved for mono overlines.

Identity in one line: **三原色为轴，柔软为形** — De Stijl primaries from the cube logo (红 red, 墨蓝 ink-blue, 黄 yellow, plus 翠 jade) as the brand axis; soft, floating white surfaces lifted by huge layered shadows as the form. Personality is carried by geometric brand glyphs and the tri-color cube logo — not by emoji.

## Anti-references

- **Gradients and noise.** "纯色与留白，而非渐变与噪声." Color is solid blocks over whitespace; never gradients, never grain.
- **Emoji as personality or iconography.** Geometric glyphs and the logo carry the personality instead.
- **Identical card grids.** Same-sized icon + heading + text cards repeated endlessly.
- **Borders as the primary edge.** Edges are "made of light, not lines" — reach for soft shadow and tint before a border.
- **Full-bleed chrome.** Fixed elements (sidebars, top bars) are their own floating cards, not edge-to-edge bars.
- Generic AI-SaaS defaults: cream/sand body backgrounds, navy-and-gold fintech, the hero-metric template, tracked uppercase eyebrows on every section.

## Design Principles

1. **三原色为轴，柔软为形.** Commit to the De Stijl primaries as the axis and express softness through floating surfaces and layered shadow — never through gradients.
2. **Edges made of light, not lines.** Elevation and tint do the structural work; shadow and wash come before a border.
3. **Bilingual as a first-class voice.** The 中文 · English pair carries warmth and clarity together; the interpunct is house grammar, not decoration.
4. **One interactive color.** Bright cobalt `--blue` is the single action color — buttons, focus rings, links, toggles. Structural ink-blue is identity, not interaction.
5. **Color does the talking; the canvas stays calm.** Solid color blocks over generous whitespace and calm grounds — restraint over stimulation.

## Accessibility & Inclusion

- Target **WCAG AA**: body text ≥ 4.5:1, large text (≥ 18px or bold ≥ 14px) ≥ 3:1, placeholder text ≥ 4.5:1.
- Full **dark theme** (`:root[data-theme="dark"]`) with a brightened axis so the brand reads on near-black surfaces.
- **Visible focus**: a 3px cobalt focus ring (`--focus-ring`) on `:focus-visible`.
- **Reduced motion respected**: the signature FadeUpBlur entrance shows its end state under `prefers-reduced-motion: reduce`.
- **Bilingual / mixed-script** content: Inter (Latin) + Noto Serif SC / Noto Sans SC (Chinese) + Space Mono (data) — type ramps tuned per script.
