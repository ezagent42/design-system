// Ezagent Console · left sidebar (agents list)
const { Button, AppIcon, Badge, Avatar, IconButton, Tooltip } = window.EzagentDesignSystem_b8e92c;

const Tri = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>;
const Dot = () => <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="9" /></svg>;
const Ring = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><circle cx="12" cy="12" r="8" /></svg>;
const Sq = () => <svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="3" /></svg>;
const Bars = () => <svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="4" height="16" rx="2" /><rect x="10" y="4" width="4" height="16" rx="2" opacity=".6" /><rect x="16" y="4" width="4" height="16" rx="2" /></svg>;

const AGENTS = [
  { id: 'research', name: 'Research Agent', sub: 'crawls + drafts briefs', color: 'blue', glyph: <Tri />, status: 'live' },
  { id: 'support', name: 'Support Triage', sub: 'routes tickets', color: 'red', glyph: <Dot />, status: 'live' },
  { id: 'ledger', name: 'Sane Ledger', sub: 'books & reconciles', color: 'jade', glyph: <Ring />, status: 'draft' },
  { id: 'ops', name: 'Ops Watcher', sub: 'monitors deploys', color: 'blueink', glyph: <Sq />, status: 'paused' },
  { id: 'analyst', name: 'Data Analyst', sub: 'queries warehouse', color: 'orange', glyph: <Bars />, status: 'draft' },
];

const STATUS = {
  live: { tone: 'success', label: 'Live' },
  draft: { tone: 'neutral', label: 'Draft' },
  paused: { tone: 'warning', label: 'Paused' },
};

function ensureSidebarCss() {
  if (document.getElementById('ez-console-sidebar-css')) return;
  const s = document.createElement('style'); s.id = 'ez-console-sidebar-css';
  s.textContent = `
  .ez-agentrow{display:flex;align-items:center;gap:12px;padding:9px 10px;border-radius:var(--r-md);cursor:pointer;transition:background .15s;}
  .ez-agentrow:hover{background:var(--ground-2);}
  .ez-agentrow--on{background:var(--blue-wash);}
  .ez-agentrow--on:hover{background:var(--blue-wash);}
  `;
  document.head.appendChild(s);
}

function Sidebar({ activeId, onSelect, agents = AGENTS }) {
  ensureSidebarCss();
  return (
    <aside style={{
      width: 278, flex: 'none', background: 'var(--card)', borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-card)', padding: 18, display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      {/* brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '4px 6px' }}>
        <img src="../../assets/ezagent-logo.png" alt="Ezagent" style={{ height: 30 }} />
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 16, letterSpacing: '-.02em', color: 'var(--ink)' }}>EZAGENT</span>
        <span style={{ marginLeft: 'auto' }}>
          <Tooltip label="New workspace"><IconButton size="sm" label="Search"><i data-lucide="command"></i></IconButton></Tooltip>
        </span>
      </div>

      <Button variant="primary" full iconLeft={<i data-lucide="plus"></i>}>新建 Agent · New</Button>

      {/* agents */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 8px', marginTop: 2 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Agents</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--ink-4)' }}>{agents.length}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto', flex: 1, margin: '0 -4px' }}>
        {agents.map((a) => (
          <div key={a.id} className={'ez-agentrow' + (a.id === activeId ? ' ez-agentrow--on' : '')} onClick={() => onSelect(a.id)}>
            <AppIcon color={a.color} size="sm" glyph={a.glyph} />
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.sub}</div>
            </div>
            <Badge tone={STATUS[a.status].tone} dot>{STATUS[a.status].label}</Badge>
          </div>
        ))}
      </div>

      {/* user */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 8px 4px', borderTop: '1px solid var(--line)' }}>
        <Avatar name="Allen Woods" />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)' }}>Allen Woods</div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Pro · ezagent.io</div>
        </div>
        <IconButton size="sm" label="Settings"><i data-lucide="settings"></i></IconButton>
      </div>
    </aside>
  );
}

Object.assign(window, { EzSidebar: Sidebar, EZ_AGENTS: AGENTS });
