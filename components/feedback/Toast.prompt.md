**Toast** — floating notification card with a colored status icon. Presentational.

```jsx
<Toast tone="success" title="Deployed" onClose={dismiss}>Agent is live at /research.</Toast>
<Toast tone="danger" title="Run failed">Tool timed out after 30s.</Toast>
```
- `tone`: info · success · danger · warning. Stack them in a fixed corner container you control.
