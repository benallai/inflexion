import { useState } from 'react';
import { Link } from 'react-router-dom';
import { T, useT, useLang } from '@/lib/i18n';

export default function Footer() {
  const t = useT();
  const { lang } = useLang();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [done, setDone] = useState(false);
  async function subscribe() {
    if (!email.includes('@')) { setStatus(lang === 'fr' ? 'Une adresse valide est requise.' : 'A valid email is required.'); return; }
    setStatus(lang === 'fr' ? 'Envoi...' : 'Sending...');
    try {
      const r = await fetch('https://formsubmit.co/ajax/info@nhancit.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ email, _subject: 'Inflexion newsletter signup: ' + email }) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      setDone(true);
    } catch {
      setStatus(lang === 'fr' ? 'Envoi direct indisponible ici.' : 'Direct signup unavailable here.');
    }
  }
  return (
    <>
      <div style={{ background: 'var(--ink)' }}>
        <div className="wrap" style={{ padding: '44px 28px', borderBottom: '1px solid #3A4144' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 26, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 480 }}>
              <h3 style={{ color: '#fff' }}>{t('nl_h')}</h3>
              <p style={{ color: '#B9BFBC', fontSize: 14, marginTop: 6 }}>{t('nl_p')}</p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
              {done ? (
                <span style={{ color: '#fff', fontSize: 14.5 }}>{lang === 'fr' ? 'Inscrit. La prochaine idée arrive bientôt.' : 'Subscribed. The next idea is on its way.'}</span>
              ) : (
                <>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" onKeyDown={(e) => e.key === 'Enter' && subscribe()} style={{ border: '1.5px solid #3A4144', background: '#2C3234', color: '#fff', borderRadius: 9, padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: 14, minWidth: 240 }} />
                  <button className="btn btn-primary" onClick={subscribe}>{t('nl_btn')}</button>
                  <span style={{ fontSize: 12.5, color: '#9AA19E', flexBasis: '100%' }}>{status || t('nl_gdpr')}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="logo"><img src="logo.png" alt="Inflexion" style={{ height: 34, width: 'auto', display: 'block' }} /></div>
              <p style={{ marginTop: 14, maxWidth: 280 }}>{t('ft_p')}</p>
            </div>
            <div><h5>{t('ft_learn')}</h5><Link to="/method">{t('ft_l1')}</Link><Link to="/frameworks">{t('ft_l2')}</Link><Link to="/situations">{t('ft_l3')}</Link><Link to="/glossary">{t('ft_l4')}</Link></div>
            <div><h5>{t('ft_apply')}</h5><Link to="/diagnostic">{t('ft_a1')}</Link><Link to="/toolkit">{t('ft_a2')}</Link></div>
            <div><h5>{t('ft_work')}</h5><Link to="/consulting">{t('ft_w1')}</Link><Link to="/consulting">{t('ft_w2')}</Link><a href="mailto:info@nhancit.com">{t('ft_w3')}</a></div>
          </div>
          <div className="foot-legal">
            <T k="ft_legal" />{' '}
            <span><Link to="/privacy" style={{ display: 'inline', padding: 0, fontWeight: 600 }}>{t('ft_privacy')}</Link> · <Link to="/legal" style={{ display: 'inline', padding: 0, fontWeight: 600 }}>{t('ft_legalpage')}</Link></span>
          </div>
        </div>
      </footer>
    </>
  );
}
