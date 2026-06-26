**Tabs** — section navigation; sliding cobalt underline (or pill).

```jsx
<Tabs items={[{value:'all',label:'All',count:12},{value:'mine',label:'Mine'}]} value={t} onChange={setT} />
<Tabs variant="pill" items={['Overview','Runs','Logs']} value={t} onChange={setT} />
```
- `variant`: underline (default) · pill · items support `icon` and `count`
