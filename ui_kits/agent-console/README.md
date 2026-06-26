# Agent Console · UI kit

A faithful recreation of the **Ezagent** agent workspace — where you build, run, and chat with agents. Built strictly from the design-system foundations (no external product source was provided).

## Screens / flow
`index.html` is an interactive click-through:
1. **Login** (`Login.jsx`) — split card: 点彩 (ColorPoints) hero on `#14131C` + email/GitHub sign-in. Continue → workspace.
2. **Workspace** — `Sidebar.jsx` (agents list with squircle `AppIcon`s + status `Badge`s) beside `Workspace.jsx` (chat header, `Tabs`, message thread, tool-call chips, and a composer). Send a message → typing indicator → simulated agent reply with a tool call. Switch agents in the sidebar to load a different seeded thread.

## Composition
Reuses design-system primitives via `window.EzagentDesignSystem_b8e92c`: `Button`, `IconButton`, `Input`, `Select`, `Avatar`, `AppIcon`, `Badge`, `Tag`, `Tabs`, `GlassPanel`, `ColorPoints`, `Tooltip`. Icons via Lucide (CDN). No primitive is re-implemented here.

## Notes
- Everything is floating white cards on the gray ground with the signature layered shadow.
- Cobalt is the only action color; status uses the semantic washes.
- Fake data only — no real network or auth.
