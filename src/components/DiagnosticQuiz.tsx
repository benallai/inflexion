// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { DIAG_DIMS, DIAG_Q, DIAG_FLAGS, DIAG_RECO, DIAG_DIMS_FR, DIAG_Q_FR, DIAG_FLAGS_FR, DIAG_RECO_FR } from '@/lib/content/diagnostic';
import { FW } from '@/lib/content/frameworks';

export default function DiagnosticQuiz() {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(DIAG_Q.length).fill(null));
  const [idx, setIdx] = useState(0);

  if (idx >= DIAG_Q.length) return <Results answers={answers} restart={() => { setAnswers(new Array(DIAG_Q.length).fill(null)); setIdx(0); }} />;

  const q = DIAG_Q[idx];
  const qf = FRL ? DIAG_Q_FR[idx] : null;
  const dims = FRL ? DIAG_DIMS_FR : DIAG_DIMS;
  return (
    <div className="diag-card" style={{ maxWidth: 640, margin: '38px auto 0' }}>
      <div className="diag-progress">{DIAG_Q.map((_, i) => <i key={i} className={i < idx ? 'done' : ''}></i>)}</div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gray)', letterSpacing: '.14em', marginBottom: 10 }}>
        QUESTION {idx + 1} {FRL ? 'SUR' : 'OF'} {DIAG_Q.length} · {dims[q.dim].name.toUpperCase()}
      </div>
      <div className="diag-q">{qf ? qf.text : q.text}</div>
      {q.opts.map((o: any, i: number) => (
        <button key={i} className={'diag-opt' + (answers[idx] === i ? ' sel' : '')} onClick={() => { const a = [...answers]; a[idx] = i; setAnswers(a); setTimeout(() => setIdx(idx + 1), 160); }}>
          {qf ? qf.opts[i] : o.t}
        </button>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 22 }}>
        <button className="btn btn-ghost" style={{ padding: '10px 18px', fontSize: 13.5, opacity: idx === 0 ? 0.35 : 1 }} disabled={idx === 0} onClick={() => setIdx(idx - 1)}>← {FRL ? 'Retour' : 'Back'}</button>
        <span style={{ fontSize: 12.5, color: 'var(--gray)', alignSelf: 'center' }}>{dims[q.dim].short}</span>
      </div>
    </div>
  );
}

function Results({ answers, restart }: { answers: (number | null)[]; restart: () => void }) {
  const { lang } = useLang();
  const FRL = lang === 'fr';
  const dims: any = {}; Object.keys(DIAG_DIMS).forEach((d) => (dims[d] = { sum: 0, max: 0 }));
  const flags = new Set<string>();
  DIAG_Q.forEach((q: any, qi: number) => {
    const o = q.opts[answers[qi] ?? 0];
    dims[q.dim].sum += o.s; dims[q.dim].max += 3;
    if (o.flag) flags.add(o.flag);
  });
  const profile: any = {}; Object.keys(dims).forEach((d) => (profile[d] = Math.round((100 * dims[d].sum) / dims[d].max)));
  const band = (v: number): [string, string] => (v >= 65 ? [FRL ? 'Solide' : 'Solid', ''] : v >= 40 ? [FRL ? 'À surveiller' : 'Watch', 'warn'] : [FRL ? 'À risque' : 'At risk', 'risk']);
  const sorted = Object.keys(profile).sort((a, b) => profile[a] - profile[b]);
  const RECO: any = FRL ? DIAG_RECO_FR : DIAG_RECO;
  const FLG: any = FRL ? DIAG_FLAGS_FR : DIAG_FLAGS;
  const DN: any = FRL ? DIAG_DIMS_FR : DIAG_DIMS;
  const primary = RECO[sorted[0]];
  const secondary = profile[sorted[1]] < 65 ? RECO[sorted[1]] : null;
  const fwOf = (k: string) => (DIAG_RECO as any)[k].fw || [];
  const rel = [...new Set([...fwOf(sorted[0]), ...(secondary ? fwOf(sorted[1]) : [])])];
  return (
    <div className="diag-shell" style={{ marginTop: 38 }}>
      <div className="diag-card">
        <span className="chip">{FRL ? 'Votre résultat' : 'Your result'}</span>
        <h3 style={{ margin: '10px 0 22px' }}>{FRL ? 'Votre profil de maturité' : 'Your readiness profile'}</h3>
        {Object.keys(DIAG_DIMS).map((d) => { const [b, c] = band(profile[d]); return (
          <div className="dim-row" key={d}>
            <div className="dim-head"><span>{DN[d].name}</span><span>{b}</span></div>
            <div className="dim-bar"><div className={'dim-fill ' + c} style={{ width: Math.max(profile[d], 4) + '%' }}></div></div>
          </div>); })}
        {[...flags].map((f) => <div className="flag" key={f}>⚑ <span>{FLG[f]}</span></div>)}
        <p className="honesty">{FRL ? 'Ce profil reflète une perspective : la vôtre. Un vrai diagnostic triangule sponsors, managers et terrain. Cette triangulation est précisément ce que fait une mission de diagnostic.' : 'This profile reflects one perspective: yours. A real diagnostic triangulates sponsors, managers and the front line. That triangulation is precisely what a readiness engagement does.'}</p>
        <button className="btn btn-ghost" style={{ marginTop: 18, padding: '9px 16px', fontSize: 13 }} onClick={restart}>{FRL ? 'Recommencer' : 'Restart'}</button>
      </div>
      <div className="diag-card">
        <span className="chip">{FRL ? 'Point de départ recommandé' : 'Recommended starting point'}</span>
        <h3 style={{ margin: '10px 0 8px' }}>{primary.title}</h3>
        <p style={{ fontSize: 14.5, color: 'var(--ink-2)' }}>{primary.body}</p>
        {secondary && (<><h3 style={{ margin: '22px 0 8px', fontSize: 16 }}>{(FRL ? 'Ensuite : ' : 'Then: ') + secondary.title.toLowerCase()}</h3><p style={{ fontSize: 14, color: 'var(--ink-2)' }}>{secondary.body}</p></>)}
        {rel.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gray)', marginRight: 10 }}>{FRL ? 'Explorer' : 'Explore'}</span>
            {rel.map((id: string) => <Link key={id} to={'/frameworks/' + id}><button className="rel-chip">{(FW as any)[id].name} →</button></Link>)}
          </div>
        )}
        <div className="ctx-cta" style={{ marginTop: 24 }}>
          <div><b>{FRL ? 'Envie du tableau complet ?' : 'Want the full picture?'}</b><p>{FRL ? 'Un diagnostic de maturité de 2 semaines, multi-perspectives, avec une carte des risques que votre COPIL lira vraiment.' : 'A 2-week readiness diagnostic, multi-perspective, with a risk map your steering committee will read.'}</p></div>
          <Link to="/consulting"><button className="btn btn-dark">{FRL ? "Voir l'offre" : 'See the offer'}</button></Link>
        </div>
      </div>
    </div>
  );
}
