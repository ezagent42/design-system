**Radio** — single choice within a `name` group; fills cobalt when selected.

```jsx
<Radio name="plan" value="pro" checked={p==='pro'} onChange={setP} label="Pro" />
<Radio name="plan" value="team" checked={p==='team'} onChange={setP} label="Team" />
```

- `onChange(value, event)`. Share one `name` across the group.
