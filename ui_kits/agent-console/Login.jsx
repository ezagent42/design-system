// Ezagent Console · Login screen
const { Button, Input, ColorPoints } = window.EzagentDesignSystem_b8e92c;

function Login({ onContinue }) {
  const [email, setEmail] = React.useState('allen@ezagent.io');
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{
        width: 880, maxWidth: '100%', display: 'grid', gridTemplateColumns: '1.05fr .95fr',
        background: 'var(--card)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-card)', overflow: 'hidden',
      }}>
        {/* left · color-points hero */}
        <div style={{ position: 'relative', background: '#14131C', padding: '40px 38px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 460 }}>
          <ColorPoints count={60} height={460} seed={3} bare style={{ position: 'absolute', inset: 0, borderRadius: 0 }} />
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="../../assets/ezagent-logo-dark.png" alt="Ezagent" style={{ height: 40 }} />
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 19, letterSpacing: '-.02em', color: '#fff' }}>EZAGENT</span>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 30, lineHeight: 1.2, color: '#fff', letterSpacing: '.01em' }}>
              组织的 <span style={{ color: 'var(--yellow)' }}>IDE</span>。
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,.6)', marginTop: 14, letterSpacing: '.03em' }}>
              BUILD · RUN · SHIP AGENTS
            </div>
          </div>
        </div>
        {/* right · form */}
        <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
          <h1 style={{ fontFamily: 'var(--font-cn)', fontWeight: 600, fontSize: 26, color: 'var(--ink)', margin: 0 }}>登录 · Sign in</h1>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: '4px 0 22px' }}>Welcome back to your agent workspace.</p>
          <Input label="工作邮箱 · Work email" shape="box" full value={email} onChange={(e) => setEmail(e.target.value)} />
          <div style={{ height: 14 }} />
          <Button variant="primary" full onClick={onContinue} iconRight={<i data-lucide="arrow-right"></i>}>继续 · Continue</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
            <span style={{ flex: 1, height: 1, background: 'var(--line)' }}></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)' }}>OR</span>
            <span style={{ flex: 1, height: 1, background: 'var(--line)' }}></span>
          </div>
          <Button variant="secondary" full iconLeft={<i data-lucide="github"></i>} onClick={onContinue}>Continue with GitHub</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EzLogin: Login });
