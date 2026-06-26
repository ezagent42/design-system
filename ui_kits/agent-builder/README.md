# Agent Builder · UI kit

An interactive recreation of the **Ezagent** agent-builder — configure an agent, inspect its generated config, and preview it. Built from the design-system foundations; the **设计 / 开发 / 预览** (Design / Dev / Preview) segmented control is taken straight from the mood board.

## Flow
`index.html` opens on the builder with the **设计** tab. Switch tabs in the top SegmentedControl:
- **设计 · Design** (`DesignPanel`) — identity (squircle `AppIcon` + color picker, name), instructions textarea, model card, and a tools list with toggles. Edits update live.
- **开发 · Dev** (`DevPanel`) — the generated `system.md` and `config.json`, in Space Mono, switchable via pill tabs. Reflects your design edits.
- **预览 · Preview** (`PreviewPanel`) — a frosted-glass chat preview floating over the 点彩 ColorPoints field.

## Composition
- `Builder.jsx` — top bar + tab state + shared `cfg` object.
- `Panels.jsx` — the three panels.
Reuses `Button`, `IconButton`, `Input`, `Select`, `Toggle`, `AppIcon`, `Badge`, `Tag`, `Card`, `GlassPanel`, `ColorPoints`, `SegmentedControl`, `Tabs` from `window.EzagentDesignSystem_b8e92c`. Icons via Lucide.

## Notes
Fake data only. The config panes are derived from the in-memory `cfg`, so editing the name/instructions/tools in Design updates Dev and Preview.
