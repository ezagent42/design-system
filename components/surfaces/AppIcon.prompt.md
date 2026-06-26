**AppIcon** — product/app icon. All variants are **theme-aware** (glyph contrast + fills retune under `data-theme="dark"`).

```jsx
<AppIcon color="blue" glyph={<PlayIcon/>} />                {/* glass (default) */}
<AppIcon color="red" variant="solid" glyph={<BellIcon/>} badge={3} />
<AppIcon color="orange" variant="bare" glyph={<BarsIcon/>} />
```
- `variant`: **glass** (default, over color/imagery) · **solid** (max emphasis) · **bare** (glyph only)
- `color`: red · blueink · blue · yellow · jade · orange · ink (or any CSS color) · `size`: sm · md · lg
- Glyphs use `currentColor`; the variant + theme decide white vs. brand-color vs. dark. Keep them single-color and geometric.
