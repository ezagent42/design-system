**SegmentedControl** — switch among 2–4 short modes (设计 / 开发 / 预览).

```jsx
<SegmentedControl options={['设计','开发','预览']} value={tab} onChange={setTab} />
<SegmentedControl shape="box" full options={['Day','Week','Month']} value={t} onChange={setT} />
```

- `shape`: `pill` (default) · `box`; `full` spreads evenly. Keep labels short.
