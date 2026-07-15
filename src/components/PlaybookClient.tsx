// @ts-nocheck
import { useState } from 'react';
import { PB_HASH, PB_SECTIONS, PB_TPL, PB_SRC, PB_TPL_SRC } from '@/lib/content/playbook';
import TemplateViewer from './TemplateViewer';

async function sha256(s: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default function PlaybookClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [tpl, setTpl] = useState<any>(null);
  async function tryUnlock() {
    if ((await sha256(pw)) === PB_HASH) { setUnlocked(true); setErr(''); }
    else setErr('Wrong access key.');
  }
  if (!unlocked) return (
    <div className="diag-card" style={{ maxWidth: 480, margin: '38px auto 0', textAlign: 'center' }}>
      <h3>Owner access</h3>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', margin: '8px 0 16px' }}>The playbook holds delivery craft and engagement templates. Enter the access key.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && tryUnlock()} placeholder="Access key" style={{ flex: 1, border: '1.5px solid var(--line)', borderRadius: 8, padding: '10px 12px', fontFamily: 'var(--font-body)', fontSize: 14 }} />
        <button className="btn btn-primary" onClick={tryUnlock}>Unlock</button>
      </div>
      {err && <p style={{ color: 'var(--orange-deep)', fontSize: 13, marginTop: 10 }}>{err}</p>}
      <p style={{ fontSize: 11.5, color: 'var(--gray)', marginTop: 14 }}>Client-side gate: deterrence only. Real confidentiality requires Cloudflare Access on this build.</p>
    </div>
  );
  return (
    <div>
      {PB_SECTIONS.map((s: any) => (
        <div key={s.id} style={{ marginTop: 44 }}>
          <h3 style={{ borderBottom: '2px solid var(--orange)', paddingBottom: 8 }}>{s.t}</h3>
          {String(s.b).split('\n\n').map((p: string, i: number) => <p key={i} style={{ marginTop: 12, maxWidth: 780, whiteSpace: 'pre-wrap' }}>{p}</p>)}
          {PB_SRC[s.id] && <p className="attrib">{PB_SRC[s.id]}</p>}
        </div>
      ))}
      <div style={{ marginTop: 60 }}>
        <div className="eyebrow">Engagement templates</div>
        <h2>Twelve templates, in engagement order</h2>
        <div className="grid-3" style={{ marginTop: 26 }}>
          {PB_TPL.map((t: any, i: number) => (
            <div key={i} className="card clickable" onClick={() => setTpl(t)}>
              <span className="chip gray">{String(i + 1).padStart(2, '0')}</span>
              <h3 style={{ fontSize: 15.5 }}>{t.name}</h3>
              <p style={{ fontSize: 12.5 }}>{(t.intro || '').split('.')[0]}.</p>
              {PB_TPL_SRC[i] && <p style={{ fontSize: 11, color: 'var(--gray)', marginTop: 8 }}>{PB_TPL_SRC[i]}</p>}
              <span className="card-link">Open →</span>
            </div>
          ))}
        </div>
        {tpl && <TemplateViewer tpl={tpl} onClose={() => setTpl(null)} />}
      </div>
    </div>
  );
}
