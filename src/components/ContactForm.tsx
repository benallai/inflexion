import { useState } from 'react';
import { useLang } from '@/lib/i18n';

export default function ContactForm() {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const [v, setV] = useState({ name: '', email: '', role: '', company: '', msg: '' });
  const [status, setStatus] = useState('');
  const [sent, setSent] = useState(false);
  const inp = { border: '1.5px solid var(--line)', borderRadius: 9, padding: '11px 13px', fontFamily: 'var(--font-body)', fontSize: 14 } as const;
  async function send() {
    if (!v.name || !v.email || !v.msg) { setStatus(FRL ? 'Nom, e-mail et message sont requis.' : 'Name, email and message are required.'); return; }
    setStatus(FRL ? 'Envoi...' : 'Sending...');
    try {
      const r = await fetch('https://formsubmit.co/ajax/info@nhancit.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: v.name, email: v.email, role: v.role, company: v.company, message: v.msg, _subject: 'Inflexion contact: ' + v.name + (v.company ? ' (' + v.company + ')' : '') }) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      setSent(true);
    } catch {
      setStatus(FRL ? 'Envoi direct indisponible depuis ce contexte.' : 'Direct send unavailable from this context.');
    }
  }
  if (sent) return (
    <div style={{ marginTop: 26, maxWidth: 560 }}>
      <h3>{FRL ? 'Message envoyé.' : 'Message sent.'}</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 8 }}>{FRL ? `Merci, ${v.name}. Vous recevrez une réponse personnelle à ${v.email}, en général sous un jour ouvré.` : `Thank you, ${v.name}. You will get a personal answer at ${v.email}, usually within one business day.`}</p>
    </div>
  );
  return (
    <div style={{ marginTop: 26, maxWidth: 560 }}>
      <h3 style={{ marginBottom: 12 }}>{FRL ? 'Entrer en contact' : 'Get in touch'}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <input style={inp} placeholder={FRL ? 'Votre nom *' : 'Your name *'} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} />
        <input style={inp} type="email" placeholder={FRL ? 'Votre e-mail *' : 'Your email *'} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} />
        <input style={inp} placeholder={FRL ? 'Votre fonction' : 'Your role'} value={v.role} onChange={(e) => setV({ ...v, role: e.target.value })} />
        <input style={inp} placeholder={FRL ? 'Société' : 'Company'} value={v.company} onChange={(e) => setV({ ...v, company: e.target.value })} />
      </div>
      <textarea rows={4} placeholder={FRL ? 'Votre message : la situation que vous rencontrez, en quelques lignes *' : 'Your message: the situation you are facing, in a few lines *'} value={v.msg} onChange={(e) => setV({ ...v, msg: e.target.value })} style={{ ...inp, width: '100%', marginTop: 10, resize: 'vertical', boxSizing: 'border-box' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 12, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" onClick={send}>{FRL ? 'Envoyer le message' : 'Send the message'}</button>
        <span style={{ fontSize: 13, color: 'var(--gray)' }}>{status}</span>
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--gray)', marginTop: 10 }}>{FRL ? "Votre message part directement à info@nhancit.com. Les données servent uniquement à vous répondre ; rien n'est stocké sur ce site." : 'Your message goes directly to info@nhancit.com. Data is used only to answer you; nothing is stored on this site.'}</p>
    </div>
  );
}
