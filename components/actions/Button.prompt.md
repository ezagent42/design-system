**Button** — the pill action button; cobalt `primary` is the one true call-to-action, lifts 2px on hover.

```jsx
<Button variant="primary" onClick={save}>开始使用 · Get started →</Button>
<Button variant="secondary">查看组件</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger" iconLeft={<TrashIcon/>}>Delete</Button>
```

- `variant`: `primary` (default, cobalt) · `secondary` (neutral gray) · `ghost` (bare) · `danger` (red)
- `size`: `sm` · `md` (default) · `lg`; `full` stretches to width
- One primary per view. Pair primary + secondary; never two primaries side by side.
