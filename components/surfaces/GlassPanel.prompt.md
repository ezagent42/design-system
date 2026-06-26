**GlassPanel** — frosted-glass (毛玻璃) surface floating over color or imagery. Signature treatment.

```jsx
<GlassPanel tone="dark"><SegmentedControl .../></GlassPanel>   {/* over color blobs */}
<GlassPanel chip soft style={{position:'absolute',right:14,top:14}}>backdrop-blur(9px)</GlassPanel>
```
- `tone`: light (frosted white) · dark (frosted light, white text over color) · `chip` for a small mono label · `soft` = 9px blur
