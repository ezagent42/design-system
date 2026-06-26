// Ezagent Builder · the three working panels (Design / Dev / Preview)
const { Button, IconButton, Input, Select, Toggle, Checkbox, AppIcon, Badge, Tag, Card, GlassPanel, ColorPoints, Avatar, Tabs } = window.EzagentDesignSystem_b8e92c;

const Tri = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>;
const COLORS = ['blue', 'red', 'yellow', 'jade', 'blueink', 'orange'];

function Field({ label, children, hint }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', marginBottom: 8 }}>{label}</div>
      {children}
      {hint && <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 7 }}>{hint}</div>}
    </div>
  );
}

const SectionLabel = ({ children }) => (
  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)', margin: '0 0 16px' }}>{children}</div>
);

function DesignPanel({ cfg, set }) {
  const TOOLS = [
    { id: 'web', name: 'web.search', desc: 'Search & read the web', color: 'var(--blue)' },
    { id: 'code', name: 'code.run', desc: 'Execute Python sandbox', color: 'var(--jade)' },
    { id: 'files', name: 'files.read', desc: 'Read uploaded files', color: 'var(--orange)' },
    { id: 'sql', name: 'warehouse.query', desc: 'Query the data warehouse', color: 'var(--blueink)' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 18, alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Card padding="md">
          <SectionLabel>Identity · 身份</SectionLabel>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginBottom: 18 }}>
            <AppIcon color={cfg.color} size="lg" glyph={<Tri />} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {COLORS.map((c) => (
                <button key={c} onClick={() => set({ color: c })} aria-label={c}
                  style={{ width: 30, height: 30, borderRadius: 9, border: 0, cursor: 'pointer', background: `var(--${c})`,
                    boxShadow: cfg.color === c ? '0 0 0 3px var(--card), 0 0 0 5px var(--accent)' : 'var(--edge)' }} />
              ))}
            </div>
          </div>
          <Field label="名称 · Name">
            <Input shape="box" full value={cfg.name} onChange={(e) => set({ name: e.target.value })} />
          </Field>
          <Field label="指令 · Instructions" hint="What should this agent do, and how should it behave?">
            <textarea value={cfg.instructions} onChange={(e) => set({ instructions: e.target.value })}
              style={{ width: '100%', boxSizing: 'border-box', minHeight: 110, resize: 'vertical', background: 'var(--ground-2)',
                boxShadow: 'var(--edge)', borderRadius: 'var(--r-sm)', border: 0, padding: '12px 14px',
                fontFamily: 'var(--font-ui)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink)' }} />
          </Field>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Card padding="md">
          <SectionLabel>Model · 模型</SectionLabel>
          <Field label="Provider">
            <Select shape="box" full options={['Claude Sonnet 4.6', 'GPT-4o', 'Llama 3 70B']} />
          </Field>
          <Field label="Temperature">
            <input type="range" min="0" max="1" step="0.1" defaultValue="0.4" style={{ width: '100%', accentColor: 'var(--accent)' }} />
          </Field>
          <Toggle checked={cfg.autorun} onChange={(v) => set({ autorun: v })} label="Auto-run on trigger" />
        </Card>

        <Card padding="md">
          <SectionLabel>Tools · 工具</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {TOOLS.map((t) => (
              <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 6px', cursor: 'pointer' }}>
                <span style={{ width: 9, height: 9, borderRadius: 999, background: t.color, flex: 'none' }}></span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink)' }}>{t.name}</span>
                  <span style={{ display: 'block', fontSize: 12, color: 'var(--ink-3)' }}>{t.desc}</span>
                </span>
                <Toggle size="sm" checked={cfg.tools.includes(t.id)} onChange={() => set({ tools: cfg.tools.includes(t.id) ? cfg.tools.filter((x) => x !== t.id) : [...cfg.tools, t.id] })} />
              </label>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function DevPanel({ cfg }) {
  const sys = `# ${cfg.name}\n\n${cfg.instructions}\n\n## Tools\n${cfg.tools.map((t) => '- ' + t).join('\n') || '- (none)'}`;
  const json = JSON.stringify({ name: cfg.name, model: 'claude-sonnet-4.6', temperature: 0.4, auto_run: cfg.autorun, tools: cfg.tools }, null, 2);
  const [file, setFile] = React.useState('system.md');
  const body = file === 'system.md' ? sys : json;
  return (
    <Card padding="none" elevation="floating">
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '12px 16px', borderBottom: '1px solid var(--line)' }}>
        <Tabs variant="pill" value={file} onChange={setFile} items={['system.md', 'config.json']} />
        <span style={{ marginLeft: 'auto' }}>
          <IconButton size="sm" label="Copy"><i data-lucide="copy"></i></IconButton>
        </span>
      </div>
      <pre style={{ margin: 0, padding: '20px 22px', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, color: 'var(--ink)', whiteSpace: 'pre-wrap', overflowX: 'auto' }}>{body}</pre>
    </Card>
  );
}

function PreviewPanel({ cfg }) {
  return (
    <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', minHeight: 380, background: '#14131C', padding: 28 }}>
      <ColorPoints count={50} height={420} seed={6} bare style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <GlassPanel tone="dark" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <AppIcon color={cfg.color} size="sm" glyph={<Tri />} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{cfg.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.6)' }}>{cfg.tools.length} tools · preview</div>
          </div>
          <span style={{ marginLeft: 'auto' }}><Badge tone="success" dot>Ready</Badge></span>
        </GlassPanel>
        <GlassPanel tone="dark" style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
          <span style={{ color: '#fff', fontSize: 14, lineHeight: 1.6 }}>你好，我是 {cfg.name}。{cfg.instructions.slice(0, 60)}… 需要我做什么？</span>
        </GlassPanel>
        <div style={{ alignSelf: 'flex-end', background: 'var(--accent)', color: '#fff', padding: '12px 16px', borderRadius: 16, borderBottomRightRadius: 6, fontSize: 14, maxWidth: '85%' }}>
          帮我整理本周的研究进展。
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EzDesignPanel: DesignPanel, EzDevPanel: DevPanel, EzPreviewPanel: PreviewPanel });
