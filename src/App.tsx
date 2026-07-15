// @ts-nocheck
import { useEffect } from 'react';
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom';
import { LangProvider, useLang, useT } from '@/lib/i18n';
import { TITLES } from '@/lib/content/dict';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DiagnosticQuiz from '@/components/DiagnosticQuiz';
import FrameworkDetail from '@/components/FrameworkDetail';
import { FW } from '@/lib/content/frameworks';
import { SITS } from '@/lib/content/situations';
import { HomeView, MethodView, FrameworksIndex, SituationsIndex, SituationDetail, ToolkitView, GlossaryView, LibraryView, ConsultingView } from '@/components/Views';
import AskPage from '@/pages/Ask';
import PlaybookPage from '@/pages/Playbook';
import PrivacyPage from '@/pages/Privacy';
import LegalPage from '@/pages/Legal';

function ScrollAndTitle() {
  const { pathname } = useLocation();
  const { lang } = useLang();
  useEffect(() => {
    window.scrollTo(0, 0);
    const seg = pathname.split('/')[1] || 'home';
    const map: any = { '': 'home', frameworks: 'frameworks', situations: 'situations' };
    const key = map[seg] ?? seg;
    const t = (TITLES as any)[lang]?.[key] || (TITLES as any).en?.[key];
    document.title = t || 'Inflexion: Where trajectories bend';
  }, [pathname, lang]);
  return null;
}

function FrameworkRoute() {
  const { id } = useParams();
  if (!id || !(FW as any)[id]) return <NotFound />;
  return <div className="wrap section"><FrameworkDetail id={id} /></div>;
}
function SituationRoute() {
  const { id } = useParams();
  if (!id || !(SITS as any)[id]) return <NotFound />;
  return <SituationDetail id={id} />;
}
function DiagnosticPage() {
  const t = useT();
  return (
    <div className="wrap section">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <div className="eyebrow">{t('dg_eb')}</div>
        <h2>{t('dg_h')}</h2>
        <p className="lede" style={{ margin: '10px auto 0' }}>{t('dg_lede')}</p>
      </div>
      <DiagnosticQuiz />
    </div>
  );
}
function NotFound() {
  return (
    <div className="wrap section" style={{ textAlign: 'center' }}>
      <h2>404</h2>
      <p className="lede" style={{ margin: '10px auto 0', maxWidth: 480 }}>This page does not exist. Trajectories bend; links should not.</p>
      <Link to="/"><button className="btn btn-primary" style={{ marginTop: 22 }}>Back to home</button></Link>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollAndTitle />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/method" element={<MethodView />} />
          <Route path="/frameworks" element={<FrameworksIndex />} />
          <Route path="/frameworks/:id" element={<FrameworkRoute />} />
          <Route path="/situations" element={<SituationsIndex />} />
          <Route path="/situations/:id" element={<SituationRoute />} />
          <Route path="/diagnostic" element={<DiagnosticPage />} />
          <Route path="/toolkit" element={<ToolkitView />} />
          <Route path="/glossary" element={<GlossaryView />} />
          <Route path="/library" element={<LibraryView />} />
          <Route path="/consulting" element={<ConsultingView />} />
          <Route path="/ask" element={<AskPage />} />
          <Route path="/playbook" element={<PlaybookPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </LangProvider>
  );
}
