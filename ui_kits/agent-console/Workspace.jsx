// Ezagent Console · main chat workspace (header + thread + composer)
const { Button, IconButton, Select, Avatar, AppIcon, Badge, Tag, GlassPanel, ColorPoints, Tooltip, Tabs } = window.EzagentDesignSystem_b8e92c;

function ensureWsCss() {
  if (document.getElementById('ez-console-ws-css')) return;
  const s = document.createElement('style'); s.id = 'ez-console-ws-css';
  s.textContent = `
  .ez-msg{display:flex;gap:13px;max-width:760px;}
  .ez-msg__bubble{padding:13px 17px;border-radius:var(--r-md);font-size:15px;line-height:1.6;}
  .ez-msg--user{flex-direction:row-reverse;margin-left:auto;}
  .ez-msg--user .ez-msg__bubble{background:var(--accent);color:var(--on-accent);border-bottom-right-radius:6px;}
  .ez-msg--agent .ez-msg__bubble{background:var(--ground-2);color:var(--ink);border-bottom-left-radius:6px;}
  .ez-tool{display:inline-flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:12px;color:var(--ink-2);
    background:var(--card);box-shadow:var(--edge);border-radius:var(--r-sm);padding:8px 12px;margin-top:9px;}
  .ez-tool .dotpulse{width:7px;height:7px;border-radius:999px;background:var(--jade);}
  .ez-composer{display:flex;align-items:flex-end;gap:10px;background:var(--ground-2);box-shadow:var(--edge);
    border-radius:var(--r-lg);padding:10px 10px 10px 18px;transition:box-shadow .2s,background .2s;}
  .ez-composer:focus-within{background:var(--card);box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus-ring);}
  .ez-composer textarea{all:unset;flex:1;font-family:var(--font-ui);font-size:15px;color:var(--ink);line-height:1.5;
    padding:7px 0;max-height:120px;resize:none;}
  .ez-composer textarea::placeholder{color:var(--ink-3);}
  .ez-typing span{display:inline-block;width:6px;height:6px;border-radius:999px;background:var(--ink-3);margin:0 2px;animation:ez-bounce 1.2s infinite;}
  .ez-typing span:nth-child(2){animation-delay:.15s;} .ez-typing span:nth-child(3){animation-delay:.3s;}
  @keyframes ez-bounce{0%,60%,100%{transform:translateY(0);opacity:.4;}30%{transform:translateY(-5px);opacity:1;}}
  `;
  document.head.appendChild(s);
}

const SEED_THREAD = {
  research: [
    { role: 'user', text: '帮我研究一下 2026 年 AI agent 框架的格局，列出 5 个主流方案。' },
    { role: 'agent', text: '好的，我会抓取最新来源并整理成简报。先做一次检索：', tool: 'web.search("AI agent frameworks 2026")' },
    { role: 'agent', text: '找到 12 篇相关来源，正在归纳为 5 个主流方案与各自取舍。需要我同时生成对比表吗？' },
  ],
  support: [
    { role: 'user', text: 'A customer says billing was charged twice. Triage this.' },
    { role: 'agent', text: 'Pulling the account and recent charges.', tool: 'stripe.charges.list(customer)' },
  ],
};

function Message({ m, agent }) {
  return (
    <div className={'ez-msg ez-msg--' + m.role}>
      {m.role === 'agent'
        ? <AppIcon color={agent.color} size="sm" glyph={agent.glyph} />
        : <Avatar name="Allen Woods" />}
      <div>
        <div className="ez-msg__bubble">{m.text}</div>
        {m.tool && (
          <div className="ez-tool"><span className="dotpulse"></span><i data-lucide="terminal" style={{ width: 14, height: 14 }}></i>{m.tool}</div>
        )}
      </div>
    </div>
  );
}

function Workspace({ agent }) {
  ensureWsCss();
  const [tab, setTab] = React.useState('chat');
  const [messages, setMessages] = React.useState(SEED_THREAD[agent.id] || []);
  const [draft, setDraft] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const threadRef = React.useRef(null);

  React.useEffect(() => { setMessages(SEED_THREAD[agent.id] || []); setTab('chat'); }, [agent.id]);
  React.useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }, [messages, typing, tab]);

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setDraft('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: 'agent', text: '收到 — 正在执行该任务并调用所需工具。', tool: agent.id === 'support' ? 'tickets.assign(team)' : 'tool.run(task)' }]);
    }, 1300);
  }

  return (
    <main style={{ flex: 1, minWidth: 0, background: 'var(--card)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* header */}
      <header style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 22px', borderBottom: '1px solid var(--line)' }}>
        <AppIcon color={agent.color} size="sm" glyph={agent.glyph} />
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 19, color: 'var(--ink)' }}>{agent.name}</span>
            <Badge tone="success" dot>Live</Badge>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 1 }}>run #a91f3c · 3 tools · 1.2k tokens</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Select shape="pill" options={['Claude Sonnet', 'GPT-4o', 'Llama 3']} />
          <Tooltip label="Share"><IconButton label="Share"><i data-lucide="share-2"></i></IconButton></Tooltip>
          <Button variant="primary" iconLeft={<i data-lucide="play"></i>}>运行 · Run</Button>
        </div>
      </header>

      {/* tabs */}
      <div style={{ padding: '12px 22px 0' }}>
        <Tabs value={tab} onChange={setTab} items={[
          { value: 'chat', label: 'Chat', icon: <i data-lucide="message-square" style={{ width: 15, height: 15 }}></i> },
          { value: 'runs', label: 'Runs', count: 24 },
          { value: 'tools', label: 'Tools', count: 6 },
          { value: 'logs', label: 'Logs' },
        ]} />
      </div>

      {/* thread */}
      <div ref={threadRef} style={{ flex: 1, overflowY: 'auto', padding: '24px 22px', display: 'flex', flexDirection: 'column', gap: 18 }}>
        {tab !== 'chat' ? (
          <div style={{ margin: 'auto', textAlign: 'center', maxWidth: 360 }}>
            <ColorPoints count={30} height={140} seed={9} />
            <div style={{ fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 18, color: 'var(--ink)', marginTop: 18 }}>暂无{tab === 'runs' ? '运行记录' : tab === 'tools' ? '工具' : '日志'}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6 }}>Switch to Chat to talk to this agent.</div>
          </div>
        ) : (
          <>
            {messages.map((m, i) => <Message key={i} m={m} agent={agent} />)}
            {typing && (
              <div className="ez-msg ez-msg--agent">
                <AppIcon color={agent.color} size="sm" glyph={agent.glyph} />
                <div className="ez-msg__bubble ez-typing"><span></span><span></span><span></span></div>
              </div>
            )}
          </>
        )}
      </div>

      {/* composer */}
      {tab === 'chat' && (
        <div style={{ padding: '0 22px 20px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
            <Tag color="var(--blue)">web.search</Tag>
            <Tag color="var(--jade)">code.run</Tag>
            <Tag color="var(--orange)">files.read</Tag>
          </div>
          <div className="ez-composer">
            <textarea rows={1} placeholder="给 Agent 发消息 · Message the agent…" value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }} />
            <IconButton variant="plain" label="Attach"><i data-lucide="paperclip"></i></IconButton>
            <IconButton variant="accent" label="Send" onClick={send}><i data-lucide="arrow-up"></i></IconButton>
          </div>
        </div>
      )}
    </main>
  );
}

Object.assign(window, { EzWorkspace: Workspace });
