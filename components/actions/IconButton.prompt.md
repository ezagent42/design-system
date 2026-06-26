**IconButton** — square icon-only button for toolbars, list rows, and dense headers.

```jsx
<IconButton label="Settings"><GearIcon/></IconButton>
<IconButton variant="solid" label="Play"><PlayIcon/></IconButton>
<IconButton variant="accent" size="lg" label="New"><PlusIcon/></IconButton>
```

- `variant`: `plain` (bare, hover fill) · `solid` (floating white card) · `accent` (cobalt)
- `size`: `sm` 32 · `md` 40 · `lg` 48
- Always pass `label` — it sets `aria-label` and the tooltip.
