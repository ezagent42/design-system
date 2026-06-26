**Select** — native dropdown wrapped in the Ezagent field surface.

```jsx
<Select options={['设计','开发','预览']} value={v} onChange={e=>setV(e.target.value)} />
<Select shape="box" full options={[{value:'gpt',label:'GPT-4o'},{value:'claude',label:'Claude'}]} />
```

- Pass `options` (strings or `{value,label}`) or your own `<option>` children
- `shape`: `pill` (default) · `box`
