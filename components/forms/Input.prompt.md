**Input** — single-line text field on a sunken gray surface; cobalt focus ring.

```jsx
<Input label="项目名称" placeholder="Untitled agent" iconLeft={<SearchIcon/>} />
<Input label="Email" shape="box" invalid hint="That doesn't look right" />
```

- `shape`: `pill` (default) · `box`; `full` stretches; `iconLeft` for a leading glyph
- `invalid` + `hint` show the error state in red
