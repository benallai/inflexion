// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/lib/i18n';
import { retrieve } from '@/lib/corpus';
import { ASK_SYSTEM } from '@/lib/content/askSystem';

const ENDPOINT = 'https://api.anthropic.com/v1/messages';

export default function AskChat() {
  const { lang } = useLang();
  const [history, setHistory] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [keyInput, setKeyInput] = useState('');
  const [busy, setBusy] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => { try { setKey(sessionStorage.getItem('inflexion_ask_key') || ''); } catch {} }, []);
  useEffect(() => { if (box.current) box.current.scrollTop = box.current.scrollHeight; }, [history, busy]);

  async function send(qRaw?: string) {
    const q = (qRaw ?? input).trim();
    if (!q || busy) return;
    setInput('');
    const chunks = retrieve(q, 8);
    let ctx = '', total = 0;
    chunks.forEach((c: any) => { if (total < 12000) { ctx += '[[' + c.section + ' · ' + c.title + ']]\n' + c.text + '\n\n'; total += c.text.length; } });
    const msgs = history.map((m) => ({ role: m.role, content: m.role === 'user' ? m.raw : m.rawA }));
    msgs.push({ role: 'user', content: 'INSTRUCTIONS:\n' + ASK_SYSTEM + '\n\nCONTEXT PASSAGES FROM THE INFLEXION PLATFORM:\n\n' + ctx + '\n\nUSER QUESTION: ' + q });
    const next = [...history, { role: 'user', raw: q }];
    setHistory(next); setBusy(true);
    try {
      const headers: any = { 'Content-Type': 'application/json' };
      if (key) { headers['x-api-key'] = key; headers['anthropic-version'] = '2023-06-01'; headers['anthropic-dangerous-direct-browser-access'] = 'true'; }
      const r = await fetch(ENDPOINT, { method: 'POST', headers, body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1000, messages: msgs }) });
      const data = await r.json();
      if (!r.ok || !data.content) throw new Error(data.error?.message || 'HTTP ' + r.status);
      const text = data.content.filter((b: any) => b.type === 'text').map((b: any) => b.text).join('\n');
      setHistory([...next, { role: 'assistant', rawA: text, src: [...new Set(chunks.slice(0, 4).map((c: any) => c.section))] }]);
    } catch (e: any) {
      setHistory([...next, { role: 'assistant', rawA: key ? 'The call to Anthropic failed. Check that the key is valid and has credit. Detail: ' + String(e.message || e) : 'The answer engine is not connected yet. Paste your Anthropic API key in the panel below the chat (it stays in this browser only) and ask again.', src: null }]);
    }
    setBusy(false);
  }
  function saveKey() { if (!keyInput.trim()) return; setKey(keyInput.trim()); try { sessionStorage.setItem('inflexion_ask_key', keyInput.trim()); } catch {} }
  const starters = ['Which framework for a post-merger culture clash?', 'How do I handle a weak sponsor?', 'What is the difference between change and transition?', 'Quelle approche pour la fatigue du changement ?'];
  return (
    <>
      <div className="diag-card" style={{ maxWidth: 760, margin: '0 auto', padding: 0, overflow: 'hidden' }}>
        <div style={{ background: 'var(--ink)', color: '#fff', padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><b style={{ fontFamily: 'var(--font-display)' }}>Ask Inflexion</b><span style={{ fontSize: 12, color: '#9AA19E', marginLeft: 10 }}>answers from this platform's content, with sources</span></div>
          <button className="rel-chip" style={{ margin: 0 }} onClick={() => setHistory([])}>Reset</button>
        </div>
        <div ref={box} style={{ padding: 22, minHeight: 220, maxHeight: 440, overflowY: 'auto' }}>
          {history.length === 0 && (
            <>
              <p style={{ fontSize: 14, color: 'var(--ink-2)' }}>Ask anything covered by the platform: which framework fits a situation, how a method phase works, what a term means, what the research says.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                {starters.map((s) => <button key={s} className="rel-chip" style={{ margin: 0 }} onClick={() => send(s)}>{s}</button>)}
              </div>
            </>
          )}
          {history.map((m, i) => m.role === 'user'
            ? <div key={i} style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}><div style={{ background: 'var(--orange-soft)', borderRadius: '12px 12px 2px 12px', padding: '10px 14px', maxWidth: '80%', fontSize: 14, whiteSpace: 'pre-wrap' }}>{m.raw}</div></div>
            : <div key={i} style={{ display: 'flex', margin: '10px 0' }}><div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '12px 12px 12px 2px', padding: '10px 14px', maxWidth: '85%', fontSize: 14, whiteSpace: 'pre-wrap' }}>{m.rawA}{m.src && <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>{m.src.map((s: string) => <span key={s} className="chip gray" style={{ margin: 0, fontSize: 10 }}>{s}</span>)}</div>}</div></div>)}
          {busy && <div style={{ color: 'var(--gray)', fontSize: 13, padding: '8px 0' }}>Searching the platform and thinking...</div>}
        </div>
        {!key && (
          <div style={{ background: 'var(--orange-soft)', padding: '14px 22px', borderTop: '1px solid var(--line)' }}>
            <b style={{ fontSize: 13 }}>Connect the answer engine</b>
            <p style={{ fontSize: 12.5, color: 'var(--ink-2)', margin: '4px 0 10px' }}>Paste your Anthropic API key (starts with sk-ant-). It stays in this browser session only: never stored in the code, never sent anywhere except to Anthropic. For a public deployment, use a server-side relay instead; never ship a key in a public page.</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="password" value={keyInput} onChange={(e) => setKeyInput(e.target.value)} placeholder="sk-ant-..." onKeyDown={(e) => e.key === 'Enter' && saveKey()} style={{ flex: 1, border: '1.5px solid var(--line)', borderRadius: 8, padding: '9px 12px', fontSize: 13, fontFamily: 'var(--font-body)' }} />
              <button className="btn btn-dark" style={{ padding: '9px 16px', fontSize: 13 }} onClick={saveKey}>Connect</button>
            </div>
          </div>
        )}
        {key && <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '6px 22px 0' }}><button className="rel-chip" style={{ margin: 0, fontSize: 11 }} onClick={() => { setKey(''); try { sessionStorage.removeItem('inflexion_ask_key'); } catch {} }}>Disconnect key</button></div>}
        <div style={{ display: 'flex', gap: 10, padding: '14px 22px', borderTop: '1px solid var(--line)' }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your question, in English or French..." onKeyDown={(e) => e.key === 'Enter' && send()} style={{ flex: 1, border: '1.5px solid var(--line)', borderRadius: 10, padding: '11px 14px', fontFamily: 'var(--font-body)', fontSize: 14.5 }} />
          <button className="btn btn-primary" style={{ padding: '11px 20px' }} onClick={() => send()}>Ask</button>
        </div>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--gray)', maxWidth: 760, margin: '14px auto 0', textAlign: 'center' }}>Ask Inflexion answers from the platform's original content only. It does not replace a diagnosis: for your specific situation, run the readiness diagnostic or book a call.</p>
    </>
  );
}
