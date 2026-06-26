---
name: ezagent-design
description: Use this skill to generate well-branded interfaces and assets for Ezagent — the Organization IDE (组织 IDE): De Stijl primaries on soft, floating surfaces — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **One-line essence:** 组织 IDE · Organization IDE. Primaries as axis, softness as form.
- **Link** `styles.css`; read components from `window.EzagentDesignSystem_b8e92c` after loading `_ds_bundle.js`.
- **Color:** cobalt `#0B5CFF` is the only action color; red/ink-blue/yellow/jade are the De Stijl axis; never use gradients.
- **Type:** Inter (Latin), Noto Serif SC (CN headings), Noto Sans SC (CN UI), Space Mono (data). All via Google Fonts CDN (`tokens/fonts.css`).
- **Form:** white cards, radius 22, layered soft shadow on a light-gray ground; pill controls; frosted glass over color; 点彩 color-points texture; squircle app icons.
- **Copy:** bilingual `中文 · English`, sentence case for EN UI, ALL-CAPS only for mono overlines, no emoji.
- **Icons:** Lucide (CDN) for UI; monochrome geometric glyphs for AppIcon tiles.
- **Dark theme:** `data-theme="dark"` on `<html>`.

## Files
- `readme.md` — full design guide (content, visual foundations, iconography, manifest).
- `tokens/` — all CSS custom properties + fonts.
- `components/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md` + demo card).
- `ui_kits/agent-console`, `ui_kits/agent-builder` — full product recreations.
- `slides/` — branded 16:9 slide templates.
- `assets/ezagent-logo.png` — logo.
