**AppIcon** — product/app icon. All variants are **theme-aware** (glyph contrast + fills retune under `data-theme="dark"`).

```jsx
<AppIcon color="blue" glyph={<PlayIcon/>} />                {/* glass (default) */}
<AppIcon color="red" variant="frost" glyph={<BellIcon/>} badge={3} />
<AppIcon color="jade" variant="soft" glyph={<CheckIcon/>} />
<AppIcon color="blueink" variant="solid" glyph={<SquareIcon/>} />
<AppIcon color="orange" variant="bare" glyph={<BarsIcon/>} />
```
- `variant`: **glass** (over color/imagery) · **frost** (solid punch + glass glow) · **soft** (light/white surfaces) · **solid** (max emphasis) · **bare**
- `color`: red · blueink · blue · yellow · jade · orange · ink (or any CSS color) · `size`: sm · md · lg
- Glyphs use `currentColor`; the variant + theme decide white vs. brand-color vs. dark. Keep them single-color and geometric.
