// Ezagent Builder · shell (header + 设计/开发/预览 segmented + tab routing)
const { Button, IconButton, SegmentedControl, AppIcon, Badge, Tooltip } = window.EzagentDesignSystem_b8e92c;

const TriG = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>;

function Builder() {
  const [tab, setTab] = React.useState('设计');
  const [cfg, setCfg] = React.useState({
    name: 'Research Agent',
    color: 'blue',
    instructions: '你是一名研究助理。抓取可信来源，交叉验证，并产出结构化的简报；引用每一条结论的出处。',
    tools: ['web', 'code'],
    autorun: true,
  });
  const set = (patch) => setCfg((c) => ({ ...c, ...patch }));

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      {/* top bar */}
      <header style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 24px', background: 'var(--card)', boxShadow: 'var(--shadow-sm)', zIndex: 5 }}>
        <img src="../../assets/ezagent-logo.png" alt="Ezagent" style={{ height: 28 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-3)' }}>/</span>
        <AppIcon color={cfg.color} size="sm" glyph={<TriG />} />
        <span style={{ fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 18, color: 'var(--ink)' }}>{cfg.name}</span>
        <Badge tone="neutral">Draft</Badge>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
          <SegmentedControl options={['设计', '开发', '预览']} value={tab} onChange={setTab} />
          <Tooltip label="Version history"><IconButton label="History"><i data-lucide="history"></i></IconButton></Tooltip>
          <Button variant="secondary">保存 · Save</Button>
          <Button variant="primary" iconLeft={<i data-lucide="rocket"></i>}>部署 · Deploy</Button>
        </div>
      </header>

      {/* canvas */}
      <div style={{ flex: 1, overflowY: 'auto', background: 'var(--ground)', padding: '26px 28px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          {tab === '设计' && <window.EzDesignPanel cfg={cfg} set={set} />}
          {tab === '开发' && <window.EzDevPanel cfg={cfg} />}
          {tab === '预览' && <window.EzPreviewPanel cfg={cfg} />}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EzBuilder: Builder });
