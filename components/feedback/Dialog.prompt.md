**Dialog** — centered modal over a frosted scrim; floating card with pop-in.

```jsx
<Dialog open={open} onClose={close} title="删除 Agent？"
        footer={<><Button variant="ghost" onClick={close}>取消</Button><Button variant="danger">删除</Button></>}>
  This permanently removes the agent and its run history.
</Dialog>
```
- Controlled via `open`; `onClose` fires on scrim/×. Put right-aligned Buttons in `footer`.
