import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLang, useT, EDITION } from '@/lib/i18n';

export default function Nav() {
  const { lang, setLang } = useLang();
  const t = useT();
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const links: [string, string, string][] = [
    ['/method', 'nav_method', 'The Method'],
    ['/frameworks', 'nav_fw', 'Frameworks'],
    ['/situations', 'nav_sit', 'Situations'],
    ['/toolkit', 'nav_tool', 'Toolkit'],
    ['/glossary', 'nav_gloss', 'Glossary'],
    ['/library', 'nav_lib', 'Library'],
  ];
  const active = (h: string) => (path === h || path.startsWith(h + '/') ? 'active' : '');
  return (
    <nav className="nav" aria-label="Main navigation">
      <div className="nav-inner">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src="logo.png" alt="Inflexion, where trajectories bend" style={{ height: 42, width: 'auto', display: 'block' }} />
        </div>
        <div className="nav-links">
          {links.map(([h, k]) => (
            <Link key={h} to={h}><button className={active(h)}>{t(k)}</button></Link>
          ))}
          {EDITION === 'owner' && <Link to="/ask"><button className={active('/ask')}>Ask ✳</button></Link>}
          <Link to="/consulting"><button className={active('/consulting')}>{t('nav_consult')}</button></Link>
          {EDITION === 'owner' && <Link to="/playbook"><button className={active('/playbook')}>Playbook 🔒</button></Link>}
          <Link to="/diagnostic"><button className="nav-cta">{t('nav_diag')}</button></Link>
        </div>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'fr' ? 'on' : ''} onClick={() => setLang('fr')}>FR</button>
        </div>
      </div>
    </nav>
  );
}
